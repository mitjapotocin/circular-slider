export default class CircularSlider {
  constructor(options) {
    this.container = options.container
    this.radius = options.radius
    this.color = options.color
    this.minValue = options.minValue
    this.maxValue = options.maxValue
    this.step = options.step

    this.svgNS = 'http://www.w3.org/2000/svg'
    this.grabberDraggable = false
    this.range = this.maxValue - this.minValue
    this.circumference = 2 * Math.PI * this.radius
    this.stepInCircumference = (this.range / this.step) * this.circumference
    this.stepAngle = (this.step / this.range) * 2 * Math.PI
    this.baseStrokeColor = '#dadada'
    this.strokeWidth = 30
    this.grabberStrokeWidth = 2
    this.strokeGap = 2
    this.strokeDash = 10
    this.strokeDashCalculated =
      this.strokeDash +
      (this.circumference % (this.strokeDash + this.strokeGap)) /
        Math.floor(this.circumference / (this.strokeDash + this.strokeGap))
    this.svgSize = this.radius * 2 + this.strokeWidth + 2 * this.grabberStrokeWidth
    this.initialized = this.container.classList.contains('circular-slider-initialized')

    this.updatePosition_ = this.updatePosition.bind(this)

    this.createCircle()
  }

  createCircle() {
    this.initialized ? this.selectSvgAndUpdate() : this.initializeFirstInstance()

    //TODO: create separate method
    this.legend = document.createElement('div')
    this.legend.classList.add('legend-item')
    this.legendValue = document.createElement('span')
    this.legendValue.classList.add('legend-value')
    this.legendColorIndicator = document.createElement('div')
    this.legendColorIndicator.classList.add('legend-color-indicator')
    this.legendColorIndicator.style.background = this.color

    this.legendValue.innerHTML = this.minValue

    this.legend.append(this.legendValue, this.legendColorIndicator)
    this.legendContainer.append(this.legend)

    this.circleWrapper = document.createElementNS(this.svgNS, 'g')
    this.baseCircle = document.createElementNS(this.svgNS, 'circle')
    this.indicatorCircle = document.createElementNS(this.svgNS, 'circle')
    this.clickableCircle = document.createElementNS(this.svgNS, 'circle')
    this.grabber = document.createElementNS(this.svgNS, 'circle')

    this.setAttributes(this.baseCircle, {
      cx: 0,
      cy: 0,
      r: this.radius,
      stroke: this.baseStrokeColor,
      fill: 'none',
      transform: 'rotate(-90, 0, 0)',
      'stroke-width': this.strokeWidth,
      'stroke-dasharray': `${this.strokeDashCalculated} ${this.strokeGap}`,
    })

    this.setAttributes(this.indicatorCircle, {
      cx: 0,
      cy: 0,
      r: this.radius,
      stroke: this.color,
      opacity: 0.6,
      fill: 'none',
      transform: 'rotate(-90, 0, 0)',
      'stroke-width': this.strokeWidth,
      'stroke-dasharray': `0  ${this.circumference}`,
    })

    this.setAttributes(this.clickableCircle, {
      cx: 0,
      cy: 0,
      r: this.radius,
      stroke: 'transparent',
      fill: 'none',
      'stroke-width': this.strokeWidth,
    })

    this.setAttributes(this.grabber, {
      cx: 0,
      cy: -this.radius,
      r: this.strokeWidth / 2 + this.grabberStrokeWidth / 2,
      fill: '#ffffff',
      stroke: '#cccccc',
      'stroke-width': this.grabberStrokeWidth,
    })

    this.clickableCircle.addEventListener('click', this.updatePosition_)

    this.grabber.addEventListener('mousedown', () => {
      this.grabberDraggable = true

      document.addEventListener('mousemove', this.updatePosition_)
    })

    document.addEventListener('mouseup', () => {
      if (this.grabberDraggable) {
        document.removeEventListener('mousemove', this.updatePosition_)
        this.grabberDraggable = false
      }
    })

    this.circleWrapper.append(this.baseCircle, this.indicatorCircle, this.clickableCircle, this.grabber)
    this.sliderSvg.append(this.circleWrapper)
  }

  updatePosition(e) {
    const sliderSvgDimensions = this.sliderSvg.getBoundingClientRect()

    const svgCenter = {
      x: sliderSvgDimensions.x + sliderSvgDimensions.height / 2,
      y: sliderSvgDimensions.y + sliderSvgDimensions.width / 2,
    }

    const dx = e.pageX - svgCenter.x
    const dy = e.pageY - svgCenter.y

    let eventAngle = Math.atan2(dy, dx) + Math.PI / 2
    if (eventAngle < 0) {
      eventAngle += 2 * Math.PI
    }

    const stepAdjustedAngle = Math.round(eventAngle / this.stepAngle) * this.stepAngle

    this.setAttributes(this.grabber, {
      cx: this.radius * Math.sin(stepAdjustedAngle),
      cy: -this.radius * Math.cos(stepAdjustedAngle),
    })

    const valueInCircumference = (stepAdjustedAngle / (2 * Math.PI)) * this.circumference

    this.setAttributes(this.indicatorCircle, {
      'stroke-dasharray': `${valueInCircumference} ${this.circumference - valueInCircumference}`,
    })

    const updatedValue = (eventAngle / (2 * Math.PI)) * this.range + this.minValue
    const stepAdjustedValue = Math.round(updatedValue / this.step) * this.step
    this.legendValue.innerHTML = stepAdjustedValue
  }

  selectSvgAndUpdate() {
    this.sliderSvg = this.container.querySelector('.circular-slider-svg')
    this.legendContainer = this.container.querySelector('.legend-container')

    if (this.svgSize > this.sliderSvg.getAttribute('height')) {
      this.setSvgSize()
    }
  }

  initializeFirstInstance() {
    this.sliderSvg = document.createElementNS(this.svgNS, 'svg')
    this.setSvgSize()
    this.createSliderContainers()
    this.sliderSvg.classList.add('circular-slider-svg')
    this.container.classList.add('circular-slider-container', 'circular-slider-initialized')
    this.sliderContainer.append(this.sliderSvg)
  }

  setSvgSize() {
    this.setAttributes(this.sliderSvg, {
      viewBox: `${-this.svgSize / 2} ${-this.svgSize / 2} ${this.svgSize} ${this.svgSize}`,
      width: this.svgSize,
      height: this.svgSize,
    })
  }

  createSliderContainers() {
    this.legendContainer = document.createElement('div')
    this.sliderContainer = document.createElement('div')

    this.legendContainer.classList.add('legend-container')
    this.sliderContainer.classList.add('slider-container')

    this.container.append(this.legendContainer, this.sliderContainer)
  }

  setAttributes(el, attributeAndValue) {
    Object.entries(attributeAndValue).forEach(([attribute, value]) => {
      el.setAttribute(attribute, value)
    })
  }
}
