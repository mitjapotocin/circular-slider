export default class CircularSlider {
  constructor(options) {
    this.container = options.container
    this.radius = options.radius
    this.strokeWidth = 30
    this.svgSize = this.radius * 2 + this.strokeWidth

    this.createCircle()
  }

  createCircle() {
    if (!this.container.classList.contains('circular-slider-initialized')) {
      this.sliderSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      this.setSvgSize()
      this.createSliderContainers()
      this.sliderSvg.classList.add('circular-slider-svg')
      this.container.classList.add('circular-slider-container', 'circular-slider-initialized')
      this.sliderContainer.append(this.sliderSvg)
    } else {
      this.sliderSvg = this.container.querySelector('.circular-slider-svg')

      if (this.svgSize > this.sliderSvg.getAttribute('height')) {
        this.setSvgSize()
      }
    }

    this.baseCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')

    this.setAttributes(this.baseCircle, {
      cx: 0,
      cy: 0,
      r: this.radius,
      stroke: 'gray',
      fill: 'none',
      'stroke-width': this.strokeWidth,
      'stroke-dasharray': '12 2',
    })

    this.sliderSvg.append(this.baseCircle)
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
