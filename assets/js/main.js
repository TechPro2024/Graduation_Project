document.addEventListener("DOMContentLoaded", function() {

    (function() {
      "use strict";
  
      function toggleScrolled() {
        const selectBody = document.querySelector('body');
        const selectHeader = document.querySelector('#header');
        if (selectHeader) {
          if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
          window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
        }
      }
  
      document.addEventListener('scroll', toggleScrolled);
      window.addEventListener('load', toggleScrolled);
  
      const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
      if (mobileNavToggleBtn) {
        function mobileNavToogle() {
          document.querySelector('body').classList.toggle('mobile-nav-active');
          mobileNavToggleBtn.classList.toggle('bi-list');
          mobileNavToggleBtn.classList.toggle('bi-x');
        }
        mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
      }
  
      const navMenuLinks = document.querySelectorAll('#navmenu a');
      if (navMenuLinks.length > 0) {
        navMenuLinks.forEach(navmenu => {
          navmenu.addEventListener('click', () => {
            if (document.querySelector('.mobile-nav-active')) {
              if (mobileNavToggleBtn) {
                mobileNavToogle();
              }
            }
          });
        });
      }
  
      const toggleDropdowns = document.querySelectorAll('.navmenu .toggle-dropdown');
      if (toggleDropdowns.length > 0) {
        toggleDropdowns.forEach(navmenu => {
          navmenu.addEventListener('click', function(e) {
            e.preventDefault();
            this.parentNode.classList.toggle('active');
            if (this.parentNode.nextElementSibling) {
              this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
            }
            e.stopImmediatePropagation();
          });
        });
      }
  
      const preloader = document.querySelector('#preloader');
      if (preloader) {
        window.addEventListener('load', () => {
          preloader.remove();
        });
      }
  
      let scrollTop = document.querySelector('.scroll-top');
      if (scrollTop) {
        scrollTop.addEventListener('click', (e) => {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });
  
        function toggleScrollTop() {
          window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
        }
        window.addEventListener('load', toggleScrollTop);
        document.addEventListener('scroll', toggleScrollTop);
      }
  
      function aosInit() {
        if (typeof AOS !== 'undefined') {
          AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true,
            mirror: false
          });
        }
      }
      window.addEventListener('load', aosInit);
  
      const carousels = document.querySelectorAll('.carousel-indicators');
      if (carousels.length > 0) {
        carousels.forEach((carouselIndicator) => {
          const carousel = carouselIndicator.closest('.carousel');
          if (carousel) {
            const carouselItems = carousel.querySelectorAll('.carousel-item');
            carouselItems.forEach((carouselItem, index) => {
              if (index === 0) {
                carouselIndicator.innerHTML += `<li data-bs-target="#${carousel.id}" data-bs-slide-to="${index}" class="active"></li>`;
              } else {
                carouselIndicator.innerHTML += `<li data-bs-target="#${carousel.id}" data-bs-slide-to="${index}"></li>`;
              }
            });
          }
        });
      }
  
      if (typeof GLightbox !== 'undefined') {
        const glightbox = GLightbox({
          selector: '.glightbox'
        });
      }
  
      if (typeof PureCounter !== 'undefined') {
        new PureCounter();
      }
  
      function initSwiper() {
        const swiperElements = document.querySelectorAll(".init-swiper");
        if (swiperElements.length > 0) {
          swiperElements.forEach(function(swiperElement) {
            let configElement = swiperElement.querySelector(".swiper-config");
            if (configElement) {
              let config = JSON.parse(configElement.innerHTML.trim());
              if (swiperElement.classList.contains("swiper-tab")) {
                initSwiperWithCustomPagination(swiperElement, config);
              } else {
                new Swiper(swiperElement, config);
              }
            }
          });
        }
      }
      window.addEventListener("load", initSwiper);
  
      const faqItems = document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle');
      if (faqItems.length > 0) {
        faqItems.forEach((faqItem) => {
          faqItem.addEventListener('click', () => {
            faqItem.parentNode.classList.toggle('faq-active');
          });
        });
      }
  
      window.addEventListener('load', function(e) {
        if (window.location.hash) {
          const hashElement = document.querySelector(window.location.hash);
          if (hashElement) {
            setTimeout(() => {
              let scrollMarginTop = getComputedStyle(hashElement).scrollMarginTop;
              window.scrollTo({
                top: hashElement.offsetTop - parseInt(scrollMarginTop),
                behavior: 'smooth'
              });
            }, 100);
          }
        }
      });
  
      let navmenuLinks = document.querySelectorAll('.navmenu a');
      if (navmenuLinks.length > 0) {
        function navmenuScrollspy() {
          navmenuLinks.forEach(navmenulink => {
            if (!navmenulink.hash) return;
            let section = document.querySelector(navmenulink.hash);
            if (section) {
              let position = window.scrollY + 200;
              if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
                navmenulink.classList.add('active');
              } else {
                navmenulink.classList.remove('active');
              }
            }
          })
        }
        window.addEventListener('load', navmenuScrollspy);
        document.addEventListener('scroll', navmenuScrollspy);
      }
  
    })();
  
  });
  