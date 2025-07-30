// Show/hide the Back to Top button on scroll
window.onscroll = function () {
  const btn = document.getElementById("backToTop");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Scroll to top smoothly when button is clicked
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("backToTop");
  if (btn) {
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

// --- NAVBAR HAMBURGER & MOBILE MENU BUG FIX START ---
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.querySelector(".nav__links");
    const body = document.body; 

    if (menuBtn && navLinks) { 
        menuBtn.addEventListener("click", function() {
            navLinks.classList.toggle("open");

            if (navLinks.classList.contains("open")) {
                body.style.overflow = "hidden";
            } else {
                body.style.overflow = "auto";
            }
        });

        
        navLinks.querySelectorAll(".link a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("open");
                body.style.overflow = "auto"; 
            });
        });
    }
});
