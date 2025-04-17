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
                  const speed = 500;
                  
                  downcounters.forEach( counter => {
                    const animate = () => {
                        const value = counter.getAttribute('value');
                        const data = counter.innerText;
                      
                          // Count Down
                        
                          const time = data / speed;
                          if (data >= 1000) {
                            counter.innerText = Math.floor(data - time - 100);
                            setTimeout(animate, 1);
                          } else {
                            counter.innerText = Math.floor(data - time);
                            setTimeout(animate, 1);
                          }
                        
                    }
                    animate();
                  });

                  upcounters.forEach( counter => {
                    const animate = () => {
                        const value = +counter.getAttribute('value');
                        const data = +counter.innerText;

                        // Count Up
                        if (data < value) {
                          const time = value / speed;
                          counter.innerText = Math.ceil(data + time);
                          setTimeout(animate, 1);
                        } else {
                          counter.innerText = value;
                        }
                    }
                    animate();
                  });
                }, 1000);
              }
            });
            observer.observe( element );
          });
        },
      };
  })(Drupal, drupalSettings);
