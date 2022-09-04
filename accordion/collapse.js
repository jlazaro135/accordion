let colls = document.querySelectorAll(".js-coll-header");
colls.forEach(coll => {
      toggleState = function(){
        return coll.classList.toggle('is-active')
      }
      coll.addEventListener('click', function(){
        let closestBody = coll.nextElementSibling
        let closestAccordionParent = coll.closest('.js-collapse')
        let bodies = closestAccordionParent.querySelectorAll(".js-coll-body");
    
          if (closestBody.style.maxHeight && coll.classList.contains('is-active')){
            closestBody.style.maxHeight = null;
            coll.classList.toggle('is-active')
            return;
          }
          bodies.forEach(body => body.style.maxHeight = null)
          accs.forEach(coll => {
            if (coll.classList.contains('is-active')) coll.classList.toggle('is-active')
          })
          console.log('por aquí 2',closestBody.style.maxHeight)
          closestBody.style.maxHeight = closestBody.scrollHeight + "px";
          coll.classList.toggle('is-active')
        })
    
})