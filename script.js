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
            !href.startsWith('tel:') &&
            !link.hasAttribute('data-lightbox')
        ) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                document.body.classList.add('page-exit');
                setTimeout(() => { window.location.href = href; }, 300);
            });
        }
    });
});
