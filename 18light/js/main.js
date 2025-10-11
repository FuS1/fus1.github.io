gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const sections = document.querySelectorAll(".topic-sec");
const dotNav = document.querySelector(".dot-nav");

// === Navigation ===
sections.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dotNav.appendChild(dot);
  dot.addEventListener("click", () => goToSection(i));
});

let currentSection = 0;
let isAnimating = false;

// === Scroll ===
window.addEventListener("wheel", (e) => {
  if (isAnimating) return;
  if (e.deltaY > 0 && currentSection < sections.length - 1) {
    goToSection(currentSection + 1);
  } else if (e.deltaY < 0 && currentSection > 0) {
    goToSection(currentSection - 1);
  }
});

// === for mobile ===
let touchStartY = 0;
let touchEndY = 0;

window.addEventListener("touchstart", (e) => {
  touchStartY = e.changedTouches[0].clientY;
});

window.addEventListener("touchend", (e) => {
  touchEndY = e.changedTouches[0].clientY;
  handleTouchSwipe();
});

function handleTouchSwipe() {
  if (isAnimating) return;

  const swipeDistance = touchEndY - touchStartY;
  const swipeThreshold = 50; // 最小滑動距離（避免誤觸）

  if (swipeDistance < -swipeThreshold && currentSection < sections.length - 1) {
    goToSection(currentSection + 1);
  } else if (swipeDistance > swipeThreshold && currentSection > 0) {
    goToSection(currentSection - 1);
  }
}

// === Section Switch Function ===
function goToSection(index) {
  if (isAnimating) return;
  isAnimating = true;

  gsap.to(window, {
    duration: 1,
    scrollTo: { y: sections[index], offsetY: 0 },
    ease: "power2.inOut",
    onComplete: () => {
      isAnimating = false;
      currentSection = index;
      updateDots();
    },
  });
}

function updateDots() {
  document.querySelectorAll(".dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSection);
  });
}

// === Game Soft Section ===
const gameSoftSecs = document.querySelectorAll(".game-soft-sec");

gameSoftSecs.forEach((sec) => {
  const bg = sec.querySelector(".game-soft-sec-bg");
  if (!bg) return;

  // Timeline
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.2, paused: true });

  // Backgrouind Effect
  tl.fromTo(bg, 
    { opacity: 0, scale: 1, filter: "blur(10px) brightness(0.6)" },
    { opacity: 1, scale: 1.1, filter: "blur(0px) brightness(1)", duration: 1.2, ease: "power2.out" }
  )
  .to(bg, 
    { scale: 1.2, rotate: "3deg", duration: 8, ease: "sine.inOut" }
  )
  .to(bg, 
    { filter: "blur(2px) brightness(1.8)", duration: .8, ease: "sine.inOut" }
  )
  .to(bg, 
    { opacity: 0, scale: 1.4, filter: "blur(10px) brightness(2)", duration: .7, ease: "power2.in" }
  );

  ScrollTrigger.create({
    trigger: sec,
    start: "top center",
    end: "bottom center",
    onEnter: () => tl.play(),
    onLeave: () => tl.pause(0),
    onEnterBack: () => tl.play(),
    onLeaveBack: () => tl.pause(0),
  });
});

// About Gallery 
let aboutGallery = new Swiper(".about-gallery", {
    effect: "flip",
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
});

// Game Soft Slider 
let gameDemoSlider = new Swiper(".gamesoft-demo-slider", {
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".gamesoft-slider-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + "</span>";
        }
    },
});