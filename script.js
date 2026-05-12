document.addEventListener("DOMContentLoaded", function () {
    // Active nav link
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Smooth page-exit transition for internal links
    document.querySelectorAll('a[href]').forEach(link => {
        const href = link.getAttribute('href');
        if (
            href &&
            !href.startsWith('#') &&
            !href.startsWith('http') &&
            !href.startsWith('mailto:') &&
            !href.startsWith('tel:')
        ) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                document.body.classList.add('page-exit');
                setTimeout(() => { window.location.href = href; }, 300);
            });
        }
    });

    // Gallery lightbox
    const lightbox    = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCap = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');

    if (lightbox) {
        document.querySelectorAll('.gallery-item').forEach(btn => {
            btn.addEventListener('click', () => {
                lightboxImg.src = btn.dataset.src;
                lightboxImg.alt = btn.dataset.caption || '';
                lightboxCap.textContent = btn.dataset.caption || '';
                lightbox.classList.add('open');
                document.body.style.overflow = 'hidden';
            });
        });

        function closeLightbox() {
            lightbox.classList.remove('open');
            lightboxImg.src = '';
            document.body.style.overflow = '';
        }

        lightboxClose.addEventListener('click', closeLightbox);

        lightbox.addEventListener('click', e => {
            if (e.target === lightbox) closeLightbox();
        });

        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') closeLightbox();
        });
    }
});
