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
  radius: 70,
  name: 'Fork',
  currency: '€',
})

const slider2 = new CircularSlider({
  container: sliderContainer,
  color: 'hotpink',
  minValue: 0,
  maxValue: 1000,
  step: 100,
  radius: 110,
  name: 'Shock',
  currency: '€',
})

const slider3 = new CircularSlider({
  container: sliderContainer,
  color: 'tomato',
  minValue: 1000,
  maxValue: 5000,
  step: 50,
  radius: 150,
  name: 'Handlebars',
  currency: '€',
})

const slider5 = new CircularSlider({
  container: sliderContainer,
  color: 'red',
  minValue: 0,
  maxValue: 10,
  step: 1,
  radius: 190,
  name: 'Rad value',
})

//second container
const slider6 = new CircularSlider({
  container: sliderContainer2,
  color: 'tomato',
  minValue: 0,
  maxValue: 1000,
  step: 2,
  radius: 110,
  currency: '$',
})

const slider7 = new CircularSlider({
  container: sliderContainer2,
  color: 'purple',
  minValue: 0,
  maxValue: 1000,
  step: 10,
  radius: 150,
  currency: '$',
})

const slider8 = new CircularSlider({
  container: sliderContainer2,
  color: 'lightgreen',
  minValue: 10,
  maxValue: 20,
  step: 1,
  radius: 190,
  currency: '$',
})
