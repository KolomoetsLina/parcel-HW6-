// const Vue = require('./node_modules/vue/dist/vue');
// const leftpad = require('leftpad');
// console.log(leftpad(5, 3, '_'));

// new Vue({ el: '#app'});

// function updateState(state, newData) {
//     Object.assign(state, newData);
// }
  
const Framework = require('./framework.js');

up = Framework(
    document.querySelector('#app'),
    {
      page: 'home',
      slide: 'slide1'
    }
);
