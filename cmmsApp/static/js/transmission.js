document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero-transmission-title-head');
    const heroImage = document.querySelector('.hero-image-transmission-title-head');

    if (heroSection && heroImage) {
        const observerOptions = {
            root: null, // relative to the viewport
            rootMargin: '0px',
            threshold: 0.1 // Trigger when 10% of the section is visible
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    heroImage.classList.add('is-visible-transmission-title-head');
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        }, observerOptions);

        observer.observe(heroSection);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll(
        '.reveal-left-transmission-next-section, ' +
        '.reveal-right-transmission-next-section, ' +
        '.reveal-up-transmission-next-section'
    );

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of element visible to trigger
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible-transmission-next-section');
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        observer.observe(el);
    });

    // Special observer for the underline to trigger after title
    const titleElement = document.querySelector('.title-transmission-next-section');
    if (titleElement) {
        const titleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    titleElement.classList.add('is-visible-transmission-next-section');
                    // No unobserve here if you want to allow re-animating on scroll
                    // if it goes out of view and comes back.
                    // If you want it to animate only once, add: titleObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        titleObserver.observe(titleElement);
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll(
        '.reveal-up-transmission-next-section, ' +
        '.reveal-left-transmission-next-section, ' +
        '.reveal-right-transmission-next-section'
    );

    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of element visible/invisible to trigger
    };

    const continuousObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If it enters the viewport (scrolling down or up into view)
                entry.target.classList.add('is-visible-transmission-next-section');
            } else {
                // If it leaves the viewport (scrolling up or down out of view)
                entry.target.classList.remove('is-visible-transmission-next-section');
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        continuousObserver.observe(el);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    
    // ===================================
    // 1. SCROLL REVEAL FUNCTIONALITY
    // ===================================
    const revealElements = document.querySelectorAll(
        '.reveal-up-transmission-services, ' +
        '.reveal-left-transmission-services, ' +
        '.reveal-right-transmission-services'
    );

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% visible/invisible to trigger
    };

    const continuousObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When element scrolls into view
                entry.target.classList.add('is-visible-transmission-services');
            } else {
                // When element scrolls out of view (for continuous re-reveal)
                entry.target.classList.remove('is-visible-transmission-services');
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        continuousObserver.observe(el);
    });

    // ===================================
    // 2. TAB SWITCHING FUNCTIONALITY
    // ===================================
    
    const menuButtons = document.querySelectorAll('.menu-item-transmission-services');
    const serviceData = JSON.parse(document.getElementById('serviceData').textContent);
    
    const serviceTitle = document.getElementById('serviceTitle');
    const serviceDescription = document.getElementById('serviceDescription');
    const serviceImage = document.getElementById('serviceImage');

    function updateContent(serviceKey) {
        const data = serviceData[serviceKey];
        
        // Start fade out animation
        serviceTitle.style.opacity = 0;
        serviceDescription.style.opacity = 0;
        serviceImage.style.opacity = 0;
        
        // Wait for the fade out to complete before changing content
        setTimeout(() => {
            serviceTitle.textContent = data.title;
            serviceDescription.textContent = data.description;
            serviceImage.src = data.image;
            serviceImage.alt = data.title;

            // Start fade in animation
            serviceTitle.style.opacity = 1;
            serviceDescription.style.opacity = 1;
            serviceImage.style.opacity = 1;
        }, 300); // Match the CSS transition time for title/text/image (0.4s)
    }

    menuButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            menuButtons.forEach(btn => btn.classList.remove('is-active-transmission-services'));
            
            // Add active class to the clicked button
            this.classList.add('is-active-transmission-services');
            
            // Update the content based on the data attribute
            const serviceKey = this.dataset.service;
            updateContent(serviceKey);
        });
    });

    // Initialize content with the first active tab data
    const initialKey = document.querySelector('.menu-item-transmission-services.is-active-transmission-services').dataset.service;
    updateContent(initialKey); // Ensures content is correctly loaded on page load
});
document.addEventListener('DOMContentLoaded', () => {
    
    // ===================================
    // SCROLL REVEAL FUNCTIONALITY (Continuous)
    // ===================================
    const revealElements = document.querySelectorAll(
        '.reveal-up-transmission-testimonials, ' +
        '.reveal-left-transmission-testimonials, ' +
        '.reveal-right-transmission-testimonials'
    );

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% visible/invisible to trigger
    };

    const continuousObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If it enters the viewport (scrolling down or up into view)
                entry.target.classList.add('is-visible-transmission-testimonials');
            } else {
                // If it leaves the viewport (scrolling up or down out of view)
                entry.target.classList.remove('is-visible-transmission-testimonials');
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        continuousObserver.observe(el);
    });

    // ===================================
    // OPTIONAL: Testimonial Carousel Placeholder
    // ===================================
    // If you plan to make the testimonials carousel functional, 
    // you would add event listeners here for .arrow-prev-transmission-testimonials 
    // and .arrow-next-transmission-testimonials to update the content.

});

document.addEventListener('DOMContentLoaded', () => {
    
    // ===================================
    // SCROLL REVEAL FUNCTIONALITY (Continuous)
    // ===================================
    const revealElements = document.querySelectorAll(
        '.reveal-up-transmission-substation, ' +
        '.reveal-left-transmission-substation, ' +
        '.reveal-right-transmission-substation'
    );

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% visible/invisible to trigger
    };

    const continuousObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When element scrolls into view
                entry.target.classList.add('is-visible-transmission-substation');
            } else {
                // When element scrolls out of view (for continuous re-reveal)
                entry.target.classList.remove('is-visible-transmission-substation');
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        continuousObserver.observe(el);
    });
});


/* ==========================================================
   Projects carousel: arrows scroll by one full "page"
   ========================================================== */
(function initProjectsCarousel() {
  const viewport = document.getElementById('projects-viewport-solar-system-projects');
  const prevBtn = document.querySelector('.prev-solar-system-projects');
  const nextBtn = document.querySelector('.next-solar-system-projects');
  if (!viewport || !prevBtn || !nextBtn) return;

  function updateButtons() {
    const maxScroll = viewport.scrollWidth - viewport.clientWidth;
    const atStart = viewport.scrollLeft <= 0;
    const atEnd = viewport.scrollLeft >= maxScroll - 1;
    prevBtn.disabled = atStart;
    nextBtn.disabled = atEnd;
  }

  function scrollPage(dir) {
    const distance = viewport.clientWidth; // page = visible width
    viewport.scrollBy({ left: dir * distance, behavior: 'smooth' });
    // optimistic button state; will correct on 'scroll' event
    setTimeout(updateButtons, 350);
  }

  prevBtn.addEventListener('click', () => scrollPage(-1));
  nextBtn.addEventListener('click', () => scrollPage(1));

  // keep buttons in sync
  viewport.addEventListener('scroll', () => {
    // debounced update
    window.clearTimeout(viewport._btnTimer);
    viewport._btnTimer = setTimeout(updateButtons, 80);
  });
  window.addEventListener('resize', updateButtons);

  // init
  updateButtons();
})();

// flyer

// --- Doc gating (view vs. download request) ---
(() => {
  const modal = document.getElementById('csc-modal');
  const form  = document.getElementById('csc-form');
  const close = modal.querySelector('.modal-close-csc-solar-system-csc-products');
  const docNameInput = document.getElementById('csc-doc-name');
  const successPane  = document.getElementById('csc-success');
  const successEmail = document.getElementById('csc-success-email');
  const successDoc   = document.getElementById('csc-success-doc');

  // Open viewer in a new tab (no download)
  document.querySelectorAll('.view-doc-csc-solar-system-csc-products').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const url = a.dataset.url;
      if (!url) return;
      window.open(url, '_blank', 'noopener'); // new tab, viewer handles download UI
    });
  });

  // Open modal for download request
  document.querySelectorAll('.request-download-csc-solar-system-csc-products').forEach(btn => {
    btn.addEventListener('click', () => {
      docNameInput.value = btn.dataset.doc || '';
      modal.setAttribute('aria-hidden', 'false');
      successPane.hidden = true;
      form.hidden = false;
      form.reset();
      setTimeout(() => document.getElementById('csc-name')?.focus(), 50);
    });
  });

  // Close modal
  function closeModal(){ modal.setAttribute('aria-hidden', 'true'); }
  close.addEventListener('click', closeModal);
  modal.querySelector('.modal-backdrop-csc-solar-system-csc-products')
       .addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  // Simple email validator
  const validEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  // Handle submit (simulate a send; integrate backend later)
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name  = (document.getElementById('csc-name')?.value || '').trim();
    const email = (document.getElementById('csc-email')?.value || '').trim();
    if (!name || !validEmail(email)){
      alert('Please enter a valid name and email.');
      return;
    }

    // Simulate success UI
    form.hidden = true;
    successPane.hidden = false;
    successEmail.textContent = email;
    successDoc.textContent = docNameInput.value || 'your document';

    // TODO: POST to your backend to email the document link securely.
  });
})();


