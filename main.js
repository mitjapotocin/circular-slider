parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"DWmb":[function(require,module,exports) {
"use strict";function e(e,r){return n(e)||s(e,r)||i(e,r)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"==typeof e)return r(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?r(e,t):void 0}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function s(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var i=[],r=!0,s=!1,n=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(i.push(a.value),!t||i.length!==t);r=!0);}catch(o){s=!0,n=o}finally{try{r||null==c.return||c.return()}finally{if(s)throw n}}return i}}function n(e){if(Array.isArray(e))return e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,i){return t&&c(e.prototype,t),i&&c(e,i),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var h=function(){function t(e){a(this,t),this.container=e.container,this.radius=e.radius,this.color=e.color,this.minValue=e.minValue,this.maxValue=e.maxValue,this.step=e.step,this.name=e.name||"",this.currency=e.currency||"",this.svgNS="http://www.w3.org/2000/svg",this.grabberDraggable=!1,this.range=this.maxValue-this.minValue,this.circumference=2*Math.PI*this.radius,this.stepInCircumference=this.range/this.step*this.circumference,this.stepAngle=this.step/this.range*2*Math.PI,this.baseStrokeColor="#dadada",this.grabberStroke="#cccccc",this.grabberFill="#ffffff",this.strokeWidth=30,this.grabberStrokeWidth=2,this.strokeGap=2,this.svgSize=2*this.radius+this.strokeWidth+2*this.grabberStrokeWidth,this.initialized=this.container.classList.contains("circular-slider-initialized"),this.initialize()}return o(t,[{key:"initialize",value:function(){this.initialized?this.selectAndUpdateSize():this.initializeFirstInstance(),this.createLegend(),this.createCircleSvg()}},{key:"createLegend",value:function(){var e=document.createElement("div"),t=document.createElement("div"),i=document.createElement("span");this.legendValue=document.createElement("span"),i.classList.add("legend-name"),this.legendValue.classList.add("legend-value"),this.setAttributes(e,{class:"legend-item",style:"border-color: ".concat(this.color)}),this.setAttributes(t,{class:"legend-color-indicator",style:"background: ".concat(this.color)}),this.legendValue.innerHTML=this.currency+this.minValue,i.innerHTML=this.name,e.append(this.legendValue,i,t),this.legendContainer.append(e)}},{key:"createCircleSvg",value:function(){var e=this,t=document.createElementNS(this.svgNS,"g"),i=document.createElementNS(this.svgNS,"circle"),r=document.createElementNS(this.svgNS,"circle");this.grabber=document.createElementNS(this.svgNS,"circle"),this.indicatorCircle=document.createElementNS(this.svgNS,"circle");var s=this.step/this.range*this.circumference-this.strokeGap;s<this.strokeGap&&(s=this.strokeGap+this.circumference%(2*this.strokeGap)/Math.floor(this.circumference/(2*this.strokeGap))),this.setAttributes(i,{cx:0,cy:0,r:this.radius,stroke:this.baseStrokeColor,fill:"none",transform:"rotate(-90, 0, 0)","stroke-width":this.strokeWidth,"stroke-dasharray":"".concat(s," ").concat(this.strokeGap)}),this.setAttributes(this.indicatorCircle,{cx:0,cy:0,r:this.radius,stroke:this.color,opacity:.7,fill:"none",transform:"rotate(-90, 0, 0)","stroke-width":this.strokeWidth,"stroke-dasharray":"0  ".concat(this.circumference)}),this.setAttributes(r,{cx:0,cy:0,r:this.radius,stroke:"transparent",fill:"none","stroke-width":this.strokeWidth}),this.setAttributes(this.grabber,{cx:0,cy:-this.radius,r:this.strokeWidth/2+this.grabberStrokeWidth/2,fill:this.grabberFill,stroke:this.grabberStroke,"stroke-width":this.grabberStrokeWidth,style:"touch-action: none"});var n=this.updateValues.bind(this);r.addEventListener("click",n),this.grabber.addEventListener("mousedown",function(){e.grabberDraggable=!0,document.addEventListener("mousemove",n)}),document.addEventListener("mouseup",function(){e.grabberDraggable&&(document.removeEventListener("mousemove",n),e.grabberDraggable=!1)}),this.grabber.addEventListener("touchstart",function(t){t.preventDefault(),e.grabberDraggable=!0,document.addEventListener("touchmove",n,{passive:!1})},{passive:!1}),document.addEventListener("touchend",function(){e.grabberDraggable&&(document.removeEventListener("touchmove",n),e.grabberDraggable=!1)}),t.append(i,this.indicatorCircle,r,this.grabber),this.sliderSvg.append(t)}},{key:"updateValues",value:function(e){e.preventDefault();var t=this.sliderSvg.getBoundingClientRect(),i=t.x+t.height/2,r=t.y+t.width/2,s=(e.clientX||e.changedTouches[0].clientX)-i,n=r-(e.clientY||e.changedTouches[0].clientY),a=(Math.atan2(s,n)+2*Math.PI)%(2*Math.PI),c=Math.round(a/this.stepAngle)*this.stepAngle;this.setAttributes(this.grabber,{cx:this.radius*Math.sin(c),cy:-this.radius*Math.cos(c)});var o=c/(2*Math.PI)*this.circumference;this.setAttributes(this.indicatorCircle,{"stroke-dasharray":"".concat(o," ").concat(this.circumference-o)}),this.legendValue.innerHTML=this.currency+(Math.round(c/(2*Math.PI)*this.range)+this.minValue)}},{key:"selectAndUpdateSize",value:function(){this.sliderSvg=this.container.querySelector(".circular-slider-svg"),this.legendContainer=this.container.querySelector(".legend-container"),this.svgSize>this.sliderSvg.getAttribute("height")&&this.setSvgSize()}},{key:"initializeFirstInstance",value:function(){this.sliderSvg=document.createElementNS(this.svgNS,"svg"),this.setSvgSize(),this.createSliderContainers(),this.sliderSvg.classList.add("circular-slider-svg"),this.container.classList.add("circular-slider-container","circular-slider-initialized"),this.sliderContainer.append(this.sliderSvg)}},{key:"setSvgSize",value:function(){this.setAttributes(this.sliderSvg,{viewBox:"".concat(-this.svgSize/2," ").concat(-this.svgSize/2," ").concat(this.svgSize," ").concat(this.svgSize),width:this.svgSize,height:this.svgSize})}},{key:"createSliderContainers",value:function(){this.legendContainer=document.createElement("div"),this.sliderContainer=document.createElement("div"),this.legendContainer.classList.add("legend-container"),this.sliderContainer.classList.add("slider-container"),this.container.append(this.legendContainer,this.sliderContainer)}},{key:"setAttributes",value:function(t,i){Object.entries(i).forEach(function(i){var r=e(i,2),s=r[0],n=r[1];t.setAttribute(s,n)})}}]),t}();exports.default=h;
},{}],"aRYt":[function(require,module,exports) {
"use strict";var e=a(require("./CircularSlider"));function a(e){return e&&e.__esModule?e:{default:e}}var r=document.querySelector("#slider-container"),n=document.querySelector("#slider-container2"),u=new e.default({container:r,color:"#bada55",minValue:0,maxValue:100,step:25,radius:70,name:"Fork",currency:"€"}),l=new e.default({container:r,color:"hotpink",minValue:0,maxValue:1e3,step:100,radius:110,name:"Shock",currency:"€"}),t=new e.default({container:r,color:"tomato",minValue:1e3,maxValue:5e3,step:50,radius:150,name:"Handlebars",currency:"€"}),c=new e.default({container:r,color:"red",minValue:0,maxValue:10,step:1,radius:190,name:"Rad value"}),o=new e.default({container:n,color:"tomato",minValue:0,maxValue:1e3,step:2,radius:110,currency:"$"}),i=new e.default({container:n,color:"purple",minValue:0,maxValue:1e3,step:10,radius:150,currency:"$"}),d=new e.default({container:n,color:"lightgreen",minValue:10,maxValue:20,step:1,radius:190,currency:"$"});
},{"./CircularSlider":"DWmb"}]},{},["aRYt"], null)
//# sourceMappingURL=/main.3db09d7b.js.map