export default class CircularSlider {
  constructor(options) {
    this.container = options.container
    this.radius = options.radius
    this.strokeWidth = 30
    this.createCircle()
  }

  createCircle() {
    const sliderSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    this.setAttributes(sliderSvg, {
      width: this.radius * 2 + this.strokeWidth,
      height: this.radius * 2 + this.strokeWidth,
    })

    const baseCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    this.setAttributes(baseCircle, {
      cx: this.radius + this.strokeWidth / 2,
      cy: this.radius + this.strokeWidth / 2,
      r: this.radius,
      stroke: 'gray',
      fill: 'none',
      'stroke-width': this.strokeWidth,
      'stroke-dasharray': '50 2',
    })

    this.container.classList.add('circular-slider-container')
    sliderSvg.append(baseCircle)
    this.container.append(sliderSvg)
  }

  setAttributes(el, attributeAndValue) {
    Object.entries(attributeAndValue).forEach(([attribute, value]) => {
      el.setAttribute(attribute, value)
    })
  }
}
