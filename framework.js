const loop = require('./loop.js');
const updateState = require('./updateState');

function Framework(element, defaultData) {
    const state = defaultData;
    
    function render(data) {
  
      loop('[data-template]', elm => {
        const templateVar = elm.dataset.template;
        const templateId = data[templateVar];
        elm.innerHTML = document.querySelector(`#${templateId}`).innerHTML;
  
      });
      loop('[data-component]', elm => {
          const tempId = elm.dataset.template;
          const componentVar = elm.dataset.component;
          const componentId = data[componentVar];
          elm.innerHTML = document.querySelector(`#${componentId}`).innerHTML;
      });
    }
    function update(data) {
        updateState(state, data);
        render(state);
      }
      
    render(state);
      
    return update;
}
module.exports = Framework;
