$(document).ready(function() {
    // Smooth scrolling for nav links
    $('a[href^=\"#"]:not([data-toggle])').click(function(event) {
        if (location.pathname.replace(/^\\/, '') == this.pathname.replace(/^\\/, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 70
                }, 1000);
            }
        }
    });

    // Navbar scroll effect
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('shadow');
        } else {
            $('.navbar').removeClass('shadow');
        }
    });

    // Form submission - placeholder, ready for EmailJS
    $('#form').submit(function(e) {
        e.preventDefault();
        
        const nombre = $('#nombre').val().trim();
        const email = $('#email').val().trim();
        const mensaje = $('#mensaje').val().trim();
        
        if (!nombre || !email || !mensaje) {
            alert('Por favor completa todos los campos.');
            return;
        }
        
        // Configura EmailJS gratis en emailjs.com y descomenta:
        // emailjs.send('service_id', 'template_id', {
        //     from_name: nombre,
        //     from_email: email,
        //     message: mensaje
        // }, 'public_key')
        // .then(() => {
        //     alert('¡Enviado!');
        //     $('#form')[0].reset();
        // }, () => alert('Error, escribe a info@monteroexpress.com'));
        
        alert('Mensaje recibido! (EmailJS listo para activar)');
        $('#form')[0].reset();
    });

    // Simple scroll animations
    function animateElements() {
        $('[data-animate]').each(function() {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 100) {
                $(this).addClass('animate__animated animate__fadeInUp');
            }
        });
    }
    $(window).scroll(animateElements);
    animateElements();
});

