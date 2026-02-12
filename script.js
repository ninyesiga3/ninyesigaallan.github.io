// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

// Close menu when clicking a link (mobile)
nav?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn?.setAttribute("aria-expanded", "false");
  });
});

// Footer year
document.getElementById("year").textContent = String(new Date().getFullYear());

// Project filtering
const chips = document.querySelectorAll(".chip");
const projects = document.querySelectorAll(".project");

chips.forEach(chip => {
  chip.addEventListener("click", () => {
    chips.forEach(c => c.classList.remove("active"));
    chip.classList.add("active");

    const filter = chip.getAttribute("data-filter");
    projects.forEach(p => {
      const tags = (p.getAttribute("data-tags") || "").split(",");
      const show = filter === "all" || tags.includes(filter);
      p.style.display = show ? "block" : "none";
    });
  });
});

// Contact form note (works even if Formspree ID not set yet)
const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");
form?.addEventListener("submit", () => {
  if (form.getAttribute("action")?.includes("YOUR_FORM_ID")) {
    if (formNote) formNote.textContent = "Tip: Replace YOUR_FORM_ID in the form action to enable submissions.";
  } else {
    if (formNote) formNote.textContent = "Sending…";
  }
});
