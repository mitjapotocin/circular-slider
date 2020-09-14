import CircularSlider from './CircularSlider'

const sliderContainer = document.querySelector('#slider-container')
const sliderContainer2 = document.querySelector('#slider-container2')
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
  step: 21,
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

const slider4 = new CircularSlider({
  container: sliderContainer2,
  color: 'tomato',
  minValue: 0,
  maxValue: 1000,
  step: 50,
  radius: 190,
})
const slider5 = new CircularSlider({
  container: sliderContainer2,
  color: 'tomato',
  minValue: 0,
  maxValue: 1000,
  step: 50,
  radius: 250,
})
