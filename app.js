document.addEventListener("DOMContentLoaded", function() {
  let skillBars = document.querySelectorAll(".progress-bar");
  
  let revealOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let percentage = entry.target.getAttribute("data-percentage");
        entry.target.style.width = `${percentage}%`;
        observer.unobserve(entry.target);
      }
    });
  };

  let options = {
    threshold: 0.50 // At least 80% of the skill bar should be visible
  };

  let observer = new IntersectionObserver(revealOnScroll, options);
  
  skillBars.forEach(bar => {
    observer.observe(bar);
  });
});
document.querySelector('.gradient-animation-section').addEventListener('dblclick', function() {
  let isBlurred = this.style.filter;

  if (isBlurred === 'blur(5px)') {
      this.style.filter = 'blur(0px)';
  } else {
      this.style.filter = 'blur(5px)';
  }
});


particlesJS('particles-js',
    {
        particles: {
            number: { value: 200 },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4 },
            move: { enable: true, speed: 1 }
        },
        interactivity: {
            events: { onhover: { enable: true, mode: "repulse" } }
        }
    }
);

document.addEventListener('DOMContentLoaded', function() {
  // Your code here
});


if(window.innerWidth > 768) {
  document.querySelector('.swiper-container').style.display = 'none';
}

let mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
});
