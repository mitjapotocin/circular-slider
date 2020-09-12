import CircularSlider from './CircularSlider'

const sliderContainer = document.querySelector('#slider-container')
const slider = new CircularSlider({
  container: sliderContainer,
  color: '#bada55',
  minValue: 10,
  maxValue: 100,
  step: 11,
  radius: 150,
})
const slider2 = new CircularSlider({
  container: sliderContainer,
  color: '#bada55',
  minValue: 10,
  maxValue: 1000,
  step: 33,
  radius: 100,
})
const slider3 = new CircularSlider({
  container: sliderContainer,
  color: '#bada55',
  minValue: 10,
  maxValue: 1000,
  step: 5,
  radius: 300,
})

const slider4 = new CircularSlider({
  container: sliderContainer,
  color: '#bada55',
  minValue: 10,
  maxValue: 1000,
  step: 33,
  radius: 185,
})
