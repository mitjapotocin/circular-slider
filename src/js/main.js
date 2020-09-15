import CircularSlider from './CircularSlider'

const sliderContainer = document.querySelector('#slider-container')
const sliderContainer2 = document.querySelector('#slider-container2')

//first container
const slider1 = new CircularSlider({
  container: sliderContainer,
  color: '#bada55',
  minValue: 0,
  maxValue: 100,
  step: 25,
  radius: 150,
  name: 'Fork',
})
const slider2 = new CircularSlider({
  container: sliderContainer,
  color: 'hotpink',
  minValue: 0,
  maxValue: 1000,
  step: 100,
  radius: 110,
  name: 'Shock',
})

const slider3 = new CircularSlider({
  container: sliderContainer,
  color: 'tomato',
  minValue: 1000,
  maxValue: 5000,
  step: 50,
  radius: 190,
  name: 'Handlebars',
})

const slider5 = new CircularSlider({
  container: sliderContainer,
  color: 'yellow',
  minValue: 0,
  maxValue: 1000,
  step: 1,
  radius: 70,
})

//second container
const slider6 = new CircularSlider({
  container: sliderContainer2,
  color: 'tomato',
  minValue: 0,
  maxValue: 1000,
  step: 2,
  radius: 190,
})

const slider7 = new CircularSlider({
  container: sliderContainer2,
  minValue: 0,
  maxValue: 1000,
  step: 10,
  radius: 110,
})

const slider8 = new CircularSlider({
  container: sliderContainer2,
  color: 'tomato',
  minValue: 10,
  maxValue: 20,
  step: 1,
  radius: 150,
})
