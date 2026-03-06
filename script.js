/* ============================================
   RHYTHM SHOKEEN — PORTFOLIO
   Interactive Features & Animations
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
  initTypingAnimation();
  initNavbar();
  initScrollAnimations();
  initSkillBars();
  initStatCounter();
  initContactForm();
});

/* ============================================
   TYPING ANIMATION
   ============================================ */
function initTypingAnimation() {
  const typedTextEl = document.getElementById("typed-text");
  if (!typedTextEl) return;

  const titles = [
    "Machine Learning Engineer",
    "Computer Vision Developer",
    "Founder",
    "Full-Stack Developer",
    "Artificial Intelligence Engineer",
  ];

  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 80;
  const deleteSpeed = 40;
  const pauseEnd = 2000;
  const pauseStart = 500;

  function type() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
      typedTextEl.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedTextEl.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
    }

    let timeout = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentTitle.length) {
      timeout = pauseEnd;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      timeout = pauseStart;
    }

    setTimeout(type, timeout);
  }

  setTimeout(type, 1000);
}

/* ============================================
   NAVBAR
   ============================================ */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Scroll effect
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    lastScroll = currentScroll;

    // Active section highlighting
    updateActiveSection();
  });

  // Hamburger toggle
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("open");
    document.body.style.overflow = navMenu.classList.contains("open")
      ? "hidden"
      : "";
  });

  // Close menu on link click
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("open");
      document.body.style.overflow = "";
    });
  });

  // Close menu on outside click
  document.addEventListener("click", (e) => {
    if (
      navMenu.classList.contains("open") &&
      !navMenu.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("open");
      document.body.style.overflow = "";
    }
  });
}

function updateActiveSection() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const scrollY = window.scrollY + 100;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("data-section") === sectionId) {
          link.classList.add("active");
        }
      });
    }
  });
}

/* ============================================
   SCROLL REVEAL ANIMATIONS
   ============================================ */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll(
    ".reveal-up, .reveal-left, .reveal-right",
  );

  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => observer.observe(el));
}

/* ============================================
   ANIMATED SKILL BARS
   ============================================ */
function initSkillBars() {
  const skillBars = document.querySelectorAll(".skill-bar-fill");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const width = bar.getAttribute("data-width");
          bar.style.width = width + "%";
          observer.unobserve(bar);
        }
      });
    },
    { threshold: 0.5 },
  );

  skillBars.forEach((bar) => observer.observe(bar));
}

/* ============================================
   STAT COUNTER ANIMATION
   ============================================ */
function initStatCounter() {
  const statNumbers = document.querySelectorAll(".stat-number");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute("data-target"));
          animateCounter(el, target);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 },
  );

  statNumbers.forEach((el) => observer.observe(el));
}

function animateCounter(el, target) {
  let current = 0;
  const duration = 1500;
  const stepTime = Math.max(duration / target, 50);

  const timer = setInterval(() => {
    current++;
    el.textContent = current;
    if (current >= target) {
      clearInterval(timer);
    }
  }, stepTime);
}

/* ============================================
   CONTACT FORM
   ============================================ */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("#name").value.trim();
    const email = form.querySelector("#email").value.trim();
    const message = form.querySelector("#message").value.trim();

    if (!name || !email || !message) {
      showFormStatus("Please fill in all fields.", "error");
      return;
    }

    if (!isValidEmail(email)) {
      showFormStatus("Please enter a valid email address.", "error");
      return;
    }

    // Submit to Formspree
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    fetch(form.action, {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: new FormData(form),
    })
      .then((response) => {
        if (response.ok) {
          showFormStatus(
            "Message sent successfully! I'll get back to you soon.",
            "success",
          );
          form.reset();
        } else {
          return response.json().then((data) => {
            const errorMsg =
              data.errors
                ? data.errors.map((e) => e.message).join(", ")
                : "Something went wrong. Please try again.";
            showFormStatus(errorMsg, "error");
          });
        }
      })
      .catch(() => {
        showFormStatus(
          "Network error. Please check your connection and try again.",
          "error",
        );
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML =
          '<i class="fas fa-paper-plane"></i> Send Message';

        setTimeout(() => {
          formStatus.style.display = "none";
          formStatus.className = "form-status";
        }, 5000);
      });
  });
}

function showFormStatus(message, type) {
  const formStatus = document.getElementById("form-status");
  formStatus.textContent = message;
  formStatus.className = "form-status " + type;
  formStatus.style.display = "block";
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ============================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
