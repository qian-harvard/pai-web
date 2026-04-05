document.documentElement.classList.add("js");

document.querySelectorAll(".site-header").forEach((header) => {
  const button = header.querySelector(".menu-toggle");
  const nav = header.querySelector(".site-nav");

  if (!button || !nav) {
    return;
  }

  const closeMenu = () => {
    header.dataset.menuOpen = "false";
    button.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  };

  const openMenu = () => {
    header.dataset.menuOpen = "true";
    button.setAttribute("aria-expanded", "true");
    document.body.classList.add("nav-open");
  };

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 900) {
        closeMenu();
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      button.focus();
    }
  });

  document.addEventListener("click", (event) => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    if (isOpen && !header.contains(event.target)) {
      closeMenu();
    }
  });

window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  });
});

document.querySelectorAll("[data-newsletter-form]").forEach((form) => {
  const emailInput = form.querySelector('input[type="email"]');
  const status = form.querySelector("[data-newsletter-status]");
  const submitButton = form.querySelector('button[type="submit"]');

  if (!emailInput || !status || !submitButton) {
    return;
  }

  const clearStatus = () => {
    status.hidden = true;
    status.textContent = "";
    delete status.dataset.state;
  };

  emailInput.addEventListener("input", clearStatus);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.reportValidity()) {
      return;
    }

    const params = new URLSearchParams();
    new FormData(form).forEach((value, key) => {
      params.append(key, typeof value === "string" ? value : "");
    });

    submitButton.disabled = true;
    status.hidden = false;
    status.dataset.state = "pending";
    status.textContent = "Submitting...";

    try {
      await fetch(form.action, {
        method: form.method || "POST",
        mode: "no-cors",
        body: params,
      });

      form.reset();
      status.dataset.state = "success";
      status.textContent = "Thanks. You’re subscribed for PAI updates.";
    } catch (error) {
      status.dataset.state = "error";
      status.textContent = "Submission did not go through. Please try again.";
    } finally {
      submitButton.disabled = false;
    }
  });
});
