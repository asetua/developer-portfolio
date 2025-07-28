 //Scroll logic
      const fadeElement = document.querySelectorAll(".fade-in");

      const onScroll = () => {
        fadeElement.forEach((el) => {
          const rect = el.getBoundingClientRect();
          if ((rect.top, window.innerHeight - 100)) {
            el.classList.add("visible");
          }
        });
      };

      window.addEventListener("scroll", onScroll);
      window.addEventListener("load", onScroll);

      //Lightbox logic
      const lightbox = document.getElementById("lightbox");
      const lightboxImg = document.getElementById("lightboxImage");
      const closeBtn = document.getElementById("lightboxClose");

      document.querySelectorAll(".gallery-item img").forEach((img) => {
        img.addEventListener("click", () => {
          lightbox.style.display = "flex";
          lightboxImg.src = img.src;
        });
      });

      closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
      });

      lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
          lightbox.style.display = "none";
        }
      });

      // Back to top logic
      const backToTopBtn = document.getElementById("backToTop");

      window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
          backToTopBtn.style.display = "block";
        } else {
          backToTopBtn.style.display = "none";
        }
      });

      backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });