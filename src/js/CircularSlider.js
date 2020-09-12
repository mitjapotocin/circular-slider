export default class CircularSlider {
  constructor(options) {
    this.container = options.container
    this.radius = options.radius
    this.color = options.color
    this.minValue = options.minValue
    this.maxValue = options.maxValue
    this.step = options.step

    this.circumference = 2 * Math.PI * this.radius
    this.range = this.maxValue - this.minValue
    this.baseStrokeColor = '#dadada'
    this.strokeWidth = 30
    this.strokeGap = 2
    this.strokeDash = 10
    this.strokeDashCalculated =
      this.strokeDash +
      (this.circumference % (this.strokeDash + this.strokeGap)) /
        Math.floor(this.circumference / (this.strokeDash + this.strokeGap))
    this.svgSize = this.radius * 2 + this.strokeWidth
    this.initialized = this.container.classList.contains('circular-slider-initialized')

    this.createCircle()
  }

  createCircle() {
    this.initialized ? this.selectSvgAndUpdate() : this.initializeFirstInstance()

    this.baseCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    this.indicatorCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')

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
      'stroke-width': this.strokeWidth,
      'stroke-dasharray': `0  ${this.circumference}`,
    })

    this.sliderSvg.append(this.baseCircle)
    this.sliderSvg.append(this.indicatorCircle)
  }

  selectSvgAndUpdate() {
    this.sliderSvg = this.container.querySelector('.circular-slider-svg')

    if (this.svgSize > this.sliderSvg.getAttribute('height')) {
      this.setSvgSize()
    }
  }

  initializeFirstInstance() {
    this.sliderSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
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
