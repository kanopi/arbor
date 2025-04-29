/**
 * Animated Stats JS.
 * @file
 */
(function (Drupal, drupalSettings) {
  /*
  * Animate Stats.
  */
  Drupal.behaviors.animateStat = {
      attach: function (context) {

        const elements = document.querySelectorAll('.stat_paragraph');

        elements.forEach(function(element) {
          const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
              setTimeout(function() {
                const downcounters = element.querySelectorAll('.count-down .stat_number');
                const upcounters = element.querySelectorAll('.count-up .stat_number');
                
                downcounters.forEach( counter => {
                  
                  function animateNumberDown(element, start, end, duration) {

                    let current = start;
                    let increment = 1;
                    let speed = 30; // Update every 30 milliseconds
                    if (start > 200) {
                      increment = Math.floor((start - end) / (duration / 10));
                      speed = 10; // Update every 10 milliseconds
                    } else if (end < 50) {
                      speed = 70; // Update every 70 milliseconds
                    }

                    const timer = setInterval(() => {
                  
                      current -= increment;

                      if (current <= end) {
                        clearInterval(timer);
                        current = end.toLocaleString();
                      }
                      element.textContent = current.toLocaleString();
                      
                    }, speed); 
                    element.textContent = end.toLocaleString();
                  }

                  // const counterElement = document.getElementById('myCounter');
                  const startValue = Number(counter.getAttribute('value'));
                  console.log(startValue);
                  const endValue = 0;
                  const animationDuration = 2000; // 2 seconds

                  animateNumberDown(counter, startValue, endValue, animationDuration);
                  counter.textContent = endValue.toLocaleString();

                });

                upcounters.forEach( counter => {
                  
                  function animateNumber(element, start, end, duration) {

                    let current = start;
                    let increment = 1;
                    let speed = 30; // Update every 30 milliseconds
                    if (end > 200) {
                      increment = Math.floor((end - start) / (duration / 10));
                      speed = 10; // Update every 10 milliseconds
                    } else if (end < 50) {
                      speed = 70; // Update every 70 milliseconds
                    }

                    const timer = setInterval(() => {
                  
                      current += increment;
                  
                      if (current >= end) {
                        clearInterval(timer);
                        current = end.toLocaleString();
                      }
                      element.textContent = current.toLocaleString();
                      
                    }, speed); 
                    element.textContent = end.toLocaleString();
                  }

                  // const counterElement = document.getElementById('myCounter');
                  const startValue = 0;
                  const endValue = Number(counter.getAttribute('value'));
                  const animationDuration = 2000; // 2 seconds

                  animateNumber(counter, startValue, endValue, animationDuration);
                  counter.textContent = endValue.toLocaleString();

                });
              }, 1000);
            }
          });
          observer.observe( element );
        });
      },
    };
})(Drupal, drupalSettings);
