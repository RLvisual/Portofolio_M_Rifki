document.addEventListener("DOMContentLoaded", () => {

    console.log("Portfolio loaded successfully!");


    /* ===============================
       NAVBAR SCROLL
    ================================ */

    const navbar = document.querySelector(".navbar");

    if (navbar) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }

        });

    }


    /* ===============================
       PROJECT MODAL
    ================================ */

    const projectCards =
        document.querySelectorAll(".project-card");

    const modal =
        document.getElementById("projectModal");

    const modalClose =
        document.getElementById("modalClose");

    const modalBackdrop =
        document.querySelector(".modal-backdrop");


    projectCards.forEach((card) => {

        card.addEventListener("click", () => {

            if (!modal) return;

            modal.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });


    function closeModal() {

        if (!modal) return;

        modal.classList.remove("active");

        document.body.style.overflow = "auto";

    }


    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeModal
        );

    }


    if (modalBackdrop) {

        modalBackdrop.addEventListener(
            "click",
            closeModal
        );

    }


    /* ===============================
       PHOTO LIGHTBOX
    ================================ */

    const photoCards =
        document.querySelectorAll(".photo-card");

    const photoLightbox =
        document.getElementById("photoLightbox");

    const lightboxImage =
        document.getElementById("lightboxImage");

    const lightboxClose =
        document.getElementById("lightboxClose");

    const lightboxBackdrop =
        document.querySelector(".lightbox-backdrop");


    function openLightbox(imageSrc) {

        if (
            !photoLightbox ||
            !lightboxImage
        ) return;

        lightboxImage.src = imageSrc;

        photoLightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    }


    function closeLightbox() {

        if (!photoLightbox) return;

        photoLightbox.classList.remove("active");

        document.body.style.overflow = "auto";

        setTimeout(() => {

            if (lightboxImage) {
                lightboxImage.src = "";
            }

        }, 300);

    }


    /* KLIK SELURUH FOTO */

    photoCards.forEach((card) => {

        card.addEventListener("click", () => {

            const image =
                card.querySelector(".photo-image");

            if (!image) return;

            openLightbox(image.src);

        });

    });


    /* KLIK TOMBOL PANAH */

    const photoButtons =
        document.querySelectorAll(".photo-view");


    photoButtons.forEach((button) => {

        button.addEventListener("click", (event) => {

            event.stopPropagation();

            const card =
                button.closest(".photo-card");

            if (!card) return;

            const image =
                card.querySelector(".photo-image");

            if (!image) return;

            openLightbox(image.src);

        });

    });


    /* CLOSE BUTTON */

    if (lightboxClose) {

        lightboxClose.addEventListener(
            "click",
            closeLightbox
        );

    }


    /* CLOSE BACKDROP */

    if (lightboxBackdrop) {

        lightboxBackdrop.addEventListener(
            "click",
            closeLightbox
        );

    }


    /* CLOSE WITH ESC */

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {

                if (
                    photoLightbox &&
                    photoLightbox.classList.contains("active")
                ) {
                    closeLightbox();
                }

            }

        }
    );

});

/* ===============================
   DESIGN FILTER
================================ */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const designCards =
    document.querySelectorAll(".design-card");


filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const filter =
            button.dataset.filter;


        /* GANTI ACTIVE BUTTON */

        filterButtons.forEach((btn) => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        /* FILTER CARD */

        designCards.forEach((card) => {

            const category =
                card.dataset.category;


            if (
                filter === "all" ||
                category === filter
            ) {

                card.classList.remove("hide");

            } else {

                card.classList.add("hide");

            }

        });

    });

  /* ===============================
   SKILLS ANIMATION
================================ */

const skillsSection =
    document.querySelector(".skills");

const skillBars =
    document.querySelectorAll(".skill-bar");


const skillsObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    skillBars.forEach((bar) => {

                        bar.style.width =
                            bar.dataset.width;

                    });


                    skillsObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.3
        }

    );


if (skillsSection) {

    skillsObserver.observe(
        skillsSection
    );

}
  
});

/* ===============================
   FOOTER
================================ */

const currentYear =
    document.getElementById("currentYear");

const backToTop =
    document.getElementById("backToTop");


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

/* ===============================
   SCROLL REVEAL
================================ */

const revealElements =
    document.querySelectorAll(
        ".section-heading, .project-card, .achievement-card, .photo-card, .design-card, .skill-category, .contact-wrapper"
    );


revealElements.forEach((element) => {

    element.classList.add("reveal");

});


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "active"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});

