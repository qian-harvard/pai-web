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

const initResearchLightbox = () => {
  const page = document.querySelector(".page-research");

  if (!page) {
    return;
  }

  const figures = Array.from(page.querySelectorAll(".project-band__media"));

  if (!figures.length) {
    return;
  }

  const dialog = document.createElement("dialog");
  dialog.className = "research-lightbox";
  dialog.setAttribute("aria-label", "Expanded research figure");
  dialog.innerHTML = `
    <div class="research-lightbox__frame">
      <button class="research-lightbox__close" type="button" aria-label="Close expanded figure">Close</button>
      <div class="research-lightbox__image-wrap">
        <img class="research-lightbox__image" alt="">
      </div>
      <p class="research-lightbox__caption" hidden></p>
    </div>
  `;

  document.body.append(dialog);

  const closeButton = dialog.querySelector(".research-lightbox__close");
  const lightboxImage = dialog.querySelector(".research-lightbox__image");
  const caption = dialog.querySelector(".research-lightbox__caption");

  if (
    typeof dialog.showModal !== "function" ||
    !(closeButton instanceof HTMLButtonElement) ||
    !(lightboxImage instanceof HTMLImageElement) ||
    !(caption instanceof HTMLElement)
  ) {
    dialog.remove();
    return;
  }

  let lastTrigger = null;

  const closeLightbox = () => {
    if (dialog.open) {
      dialog.close();
    }
  };

  const openLightbox = (figure, image) => {
    lastTrigger = figure;
    lightboxImage.src = image.currentSrc || image.src;
    lightboxImage.alt = image.alt || "Expanded research figure";

    if (image.alt) {
      caption.hidden = false;
      caption.textContent = image.alt;
    } else {
      caption.hidden = true;
      caption.textContent = "";
    }

    dialog.showModal();
  };

  figures.forEach((figure) => {
    const image = figure.querySelector("img");

    if (!image) {
      return;
    }

    figure.dataset.zoomable = "true";
    figure.setAttribute("tabindex", "0");
    figure.setAttribute("role", "button");
    figure.setAttribute("aria-label", `Open larger view of figure: ${image.alt || "Research figure"}`);

    figure.addEventListener("click", () => {
      openLightbox(figure, image);
    });

    figure.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(figure, image);
      }
    });
  });

  closeButton.addEventListener("click", closeLightbox);

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      closeLightbox();
    }
  });

  dialog.addEventListener("close", () => {
    lightboxImage.removeAttribute("src");
    lightboxImage.alt = "";
    caption.hidden = true;
    caption.textContent = "";

    if (lastTrigger instanceof HTMLElement) {
      lastTrigger.focus();
    }
  });
};

initResearchLightbox();
