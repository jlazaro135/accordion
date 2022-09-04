let accs = document.querySelectorAll(".js-acc-header");
accs.forEach(acc => {
      toggleState = function(){
        return acc.classList.toggle('is-active')
      }
      acc.addEventListener('click', function(){
        let closestBody = acc.nextElementSibling
        let closestAccordionParent = acc.closest('.js-accordion')
        let bodies = closestAccordionParent.querySelectorAll(".js-acc-body");
    
          if (closestBody.style.maxHeight && acc.classList.contains('is-active')){
            closestBody.style.maxHeight = null;
            acc.classList.toggle('is-active')
            return;
          }
          bodies.forEach(body => body.style.maxHeight = null)
          accs.forEach(acc => {
            if (acc.classList.contains('is-active')) acc.classList.toggle('is-active')
          })
          console.log('por aquí 2',closestBody.style.maxHeight)
          closestBody.style.maxHeight = closestBody.scrollHeight + "px";
          acc.classList.toggle('is-active')
        })
    
})