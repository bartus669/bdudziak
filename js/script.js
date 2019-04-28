var button = document.querySelector('button.hamburger');
var buttonExamples = document.querySelector('button.btn-examples');
var nav = document.querySelector('.nav-general');
var divModal = document.querySelector('.modal');
var buttonExitModal = document.querySelector('button.btn-offmodal');
var modalBackground = document.querySelector('.background');
var body = document.querySelector('body');
var html = document.querySelector('html');

//form
var label1 = document.querySelector('.label-1');
var label2 = document.querySelector('.label-2');
var label3 = document.querySelector('.label-3');

var input1 = document.querySelector('.input-1');
var input2 = document.querySelector('.input-2');
var textarea = document.querySelector('.textarea');
//end form

function menuActive() {
    button.classList.toggle('is-active');
    nav.classList.toggle('open');
}

function examplesActive() {
    divModal.classList.add('active');
    modalBackground.classList.add('active');
    body.classList.add('scrollOff');
    html.classList.add('scrollOff');
}

function exitModal() {
    divModal.classList.remove('active');
    modalBackground.classList.remove('active');
    body.classList.remove('scrollOff');
    html.classList.remove('scrollOff');
}

button.addEventListener('click', menuActive);
buttonExamples.addEventListener('click', examplesActive);
buttonExitModal.addEventListener('click', exitModal);

//form
input1.addEventListener('focus', function () {
    label1.classList.add('active');
});

input2.addEventListener('focus', function () {
    label2.classList.add('active');
});

textarea.addEventListener('focus', function () {
    label3.classList.add('active');
});

input1.addEventListener('blur', function () {

    const value = input1.value.trim()

    if (!value) {
        label1.classList.remove('active');
    }
});

input2.addEventListener('blur', function () {

    const value = input2.value.trim()

    if (!value) {
        label2.classList.remove('active');
    }

});

textarea.addEventListener('blur', function () {
    const value = textarea.value.trim()

    if (!value) {
        label3.classList.remove('active');
    }
});
//end form

//Scroll animation
/**
 *
 * @param {(number|HTMLElement)} destination - Destination to scroll to (DOM element or number)
 * @param {number} duration - Duration of scrolling animation
 * @param {string} easing - Timing function name (Allowed values: 'linear', 'easeInQuad', 'easeOutQuad', 'easeInOutQuad', 'easeInCubic', 'easeOutCubic', 'easeInOutCubic', 'easeInQuart', 'easeOutQuart', 'easeInOutQuart', 'easeInQuint', 'easeOutQuint', 'easeInOutQuint')
 * @param {function} callback - Optional callback invoked after animation
 */

function scrollIt(destination, duration = 200, easing = 'linear', callback) {

    const easings = {
      linear(t) {
        return t;
      },
      easeInQuad(t) {
        return t * t;
      },
      easeOutQuad(t) {
        return t * (2 - t);
      },
      easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      },
      easeInCubic(t) {
        return t * t * t;
      },
      easeOutCubic(t) {
        return --t * t * t + 1;
      },
      easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      },
      easeInQuart(t) {
        return t * t * t * t;
      },
      easeOutQuart(t) {
        return 1 - --t * t * t * t;
      },
      easeInOutQuart(t) {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
      },
      easeInQuint(t) {
        return t * t * t * t * t;
      },
      easeOutQuint(t) {
        return 1 + --t * t * t * t * t;
      },
      easeInOutQuint(t) {
        return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
      } };
  
  
  
    const start = window.pageYOffset;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
  
    const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
    const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);
  
  
    if ('requestAnimationFrame' in window === false) {
      window.scroll(0, destinationOffsetToScroll);
      if (callback) {
        callback();
      }
      return;
    }
  
  
    function scroll() {
      const now = 'now' in window.performance ? performance.now() : new Date().getTime();
      const time = Math.min(1, (now - startTime) / duration);
      const timeFunction = easings[easing](time);
      window.scroll(0, Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start));
  
      if (window.pageYOffset === destinationOffsetToScroll) {
        if (callback) {
          callback();
        }
        return;
      }
  
      requestAnimationFrame(scroll);
    }
  

    scroll();
  }
  
  // Scroll to section 1
  document.querySelector('.nav-btn-1').addEventListener('click', () => {
    scrollIt(
    document.querySelector('.js-section1'),
    300,
    'easeOutQuad',
    () => console.log(`Just finished scrolling to ${window.pageYOffset}px`));
  
  });
  
  // Scroll to section 2
  document.querySelector('.nav-btn-2').addEventListener('click', () => {
    scrollIt(
    document.querySelector('.js-section2'),
    300,
    'easeOutQuad',
    () => console.log(`Just finished scrolling to ${window.pageYOffset}px`));
  
  });
  
  // Scroll to section 3
  document.querySelector('.nav-btn-3').addEventListener('click', () => {
    scrollIt(
    document.querySelector('.js-section3'),
    300,
    'easeOutQuad',
    () => console.log(`Just finished scrolling to ${window.pageYOffset}px`));
  
  });

  // Scroll to section 4
  document.querySelector('.nav-btn-4').addEventListener('click', () => {
    scrollIt(
    document.querySelector('.js-section4'),
    300,
    'easeOutQuad',
    () => console.log(`Just finished scrolling to ${window.pageYOffset}px`));
  
  });
  
  // Scroll to section 5
  document.querySelector('.nav-btn-5').addEventListener('click', () => {
    scrollIt(
    document.querySelector('.js-section5'),
    300,
    'easeOutQuad',
    () => console.log(`Just finished scrolling to ${window.pageYOffset}px`));
  
  });

  // Scroll to section 2 ()
  document.querySelector('.btn-6').addEventListener('click', () => {
    scrollIt(
    document.querySelector('.js-section2'),
    300,
    'easeOutQuad',
    () => console.log(`Just finished scrolling to ${window.pageYOffset}px`));
  
  });
  //END Scroll animation