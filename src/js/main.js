import CircularSlider from './CircularSlider'

const sliderContainer = document.querySelector('#slider-container')
const slider = new CircularSlider({
  container: sliderContainer,
  color: '#bada55',
  minValue: 10,
  maxValue: 100,
  step: 10,
  radius: 150,
})
const slider2 = new CircularSlider({
  container: sliderContainer,
  color: 'hotpink',
  minValue: 10,
  maxValue: 1000,
  step: 20,
  radius: 110,
})

const slider3 = new CircularSlider({
  container: sliderContainer,
  color: 'tomato',
  minValue: 0,
  maxValue: 1000,
  step: 50,
  radius: 190,
})
