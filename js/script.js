window.addEventListener("scroll", function () {
  const header = document.getElementById("main-header");
  const stickyClass = "sticky";

  if (window.scrollY > 100) {
    header.classList.add(stickyClass);
  } else {
    header.classList.remove(stickyClass);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".anim");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = [...animatedElements].indexOf(el) * 0.2;
        el.style.animationDelay = `${delay}s`;
        el.classList.add("fadeInUp");
        obs.unobserve(el); // Remove if you only want it once
      }
    });
  }, {
    threshold: 0.1
  });

  animatedElements.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".fade-in-image");

  images.forEach((img) => {
    if (img.complete) {
      // For cached images
      img.classList.add("loaded");
    } else {
      img.addEventListener("load", function () {
        img.classList.add("loaded");
      });
    }
  });
});


//TEXT TYPEWRIRE BUTTON start

function animateTextElement(container, delay = 50) {
  const text = container.getAttribute("data-text");
  const blink = container.querySelector(".blink");
  container.innerHTML = ""; // Clear the original content

  text.split("").forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char;
    container.appendChild(span);

    setTimeout(() => {
      span.classList.add("visible");
    }, delay * index);
  });

  // Re-append blink cursor at the end
  setTimeout(() => {
    container.appendChild(blink);
  }, delay * text.length);
}

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".text-anim");
  elements.forEach((el, i) => {
    // Optional: add delay between elements
    setTimeout(() => {
      animateTextElement(el, 100); // 100ms per character
    }, i * 300); // Stagger different elements if needed
  });
});



//  Accordian Start

const accordionButtons = document.querySelectorAll('.accordion-button');
const rightPanels = document.querySelectorAll('.right-panel');

accordionButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from buttons
    accordionButtons.forEach(b => b.classList.remove('active'));

    // Activate clicked button
    btn.classList.add('active');

    // Show right panel
    const targetId = btn.getAttribute('data-right');
    rightPanels.forEach(panel => {
      panel.classList.remove('active');
      if (panel.id === targetId) {
        panel.classList.add('active');
      }
    });
  });
});

//  Accordian Start END

// SWIPER TESTimonial


const swiper = new Swiper('.testimonialSwiper', {
  loop: false,
  breakpoints: {
    0: {
      allowTouchMove: true,
    },
    769: {
      allowTouchMove: false,
    }
  }
});

const logos = document.querySelectorAll('.logo-slide');
let activeIndex = 0;

function updateActive(index) {
  // Remove old active classes
  logos.forEach((logo) => {
    logo.classList.remove('active');
    const progress = logo.querySelector('.progress-bar');
    progress.style.animation = 'none';
    progress.offsetHeight; // force reflow
    progress.style.animation = '';
  });

  // Add new active class
  logos[index].classList.add('active');
  swiper.slideTo(index);
}

function startCycle() {
  updateActive(activeIndex);

  setTimeout(() => {
    activeIndex = (activeIndex + 1) % logos.length;
    startCycle();
  }, 5000); // must match CSS animation duration
}

// Optional: allow clicking logos
logos.forEach((logo, i) => {
  logo.addEventListener('click', () => {
    activeIndex = i;
    updateActive(i);
  });
});

startCycle();


// MOBILE SLIDER

const swipermobile = new Swiper('.swipermobile', {
  slidesPerView: 1.1,
  spaceBetween: 20, // space between slides
});


// SLIDE HEADER MENU

  document.querySelectorAll('.open-submenu').forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      document.querySelectorAll('.menu-screen').forEach(screen => {
        screen.classList.remove('active');
      });
      document.getElementById(targetId).classList.add('active');
    });
  });

  document.querySelectorAll('.back-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation(); // <- This ensures only the button click is processed
      const backId = button.getAttribute('data-back');
      document.querySelectorAll('.menu-screen').forEach(screen => {
        screen.classList.remove('active');
      });
      document.getElementById(backId).classList.add('active');
    });
  });