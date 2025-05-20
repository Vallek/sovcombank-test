export function calendarDates() {
  const items = document.querySelectorAll('li');
  const itemsArr = Array.from(items);
  // Reset dates
  sessionStorage.setItem('firstSet', 'not-set');
  sessionStorage.setItem('lastSet', 'not-set');
  // Set dates
  items.forEach(el => {
    el.addEventListener('click', (li) => {
      let item = li.target;
      let firstSet = sessionStorage.getItem('firstSet');
      let lastSet = sessionStorage.getItem('lastSet');
      // If first date is not set then set it 
      if (firstSet == 'not-set') {
        item.classList.add('first-single');
        sessionStorage.setItem('firstSet', 'set');  
      } 
      // If last date is not set then set it 
      if (firstSet == 'set' && lastSet == 'not-set') {
        let first = document.querySelector('.first-single');
        let firstIndex = itemsArr.indexOf(first);
        let lastIndex = itemsArr.indexOf(item);
        // Check if last date is not set before first
        if (lastIndex >= firstIndex) {
          if (item != first) {
            first.classList.add('first');
            item.classList.add('end');
            sessionStorage.setItem('lastSet', 'set')
          }
        } else {
          // Rest dates if last date is not set before first and set first date
          items.forEach(el => {
            el.classList.remove('first', 'first-single', 'end');
            sessionStorage.setItem('firstSet', 'not-set'); 
            sessionStorage.setItem('lastSet', 'not-set'); 
          })
          item.classList.add('first-single');
          sessionStorage.setItem('firstSet', 'set');
        }
      }
      // If both dates are set then clear it and set first date 
      if (firstSet == 'set' && lastSet == 'set') {
        items.forEach(el => {
          el.classList.remove('first', 'first-single', 'end');
          sessionStorage.setItem('firstSet', 'not-set'); 
          sessionStorage.setItem('lastSet', 'not-set'); 
        })
        item.classList.add('first-single');
        sessionStorage.setItem('firstSet', 'set'); 
      }
    })
  });
}
