document.addEventListener("DOMContentLoaded", () => {

    // Detecta automáticamente la raíz del proyecto
    const script = document.querySelector('script[src*="scripts.js"]');
    const base = new URL("./", script.src).pathname;


    const barra = `
        <div class="barra-arriba">
            <p>Horario de Atención: Lunes a Viernes de 7:00AM a 6:00PM | Sábados de 7:00AM a 3:00PM</p>
        </div>
    `;


    const navbar = `
        <nav class="navbar">
            <div class="nav-content">

                <div class="nav-logo">
                    <img src="${base}media/logo.png" alt="">
                </div>

                <div class="nav-links">

                    <a href="${base}index.html">INICIO</a>

                    <a href="${base}especialidades/">ESPECIALIDADES</a>

                    <a href="${base}sobrenosotros/">SOBRE NOSOTROS</a>

                    <a href="${base}casos/">CASOS</a>

                    <a href="${base}sedes/">SEDES</a>

                    <a class="link-boton" href="">
                        RESERVAR CITA
                        <i class="fa-solid fa-calendar-days fa-lg" style="color: rgb(255, 255, 255);"></i>
                    </a>

                </div>

            </div>
        </nav>
    `;


    const footer = `
        <footer class="footer">

            <div class="footer-content">

                <div class="footer-logo">
                    <img src="${base}media/logo.png" alt="">
                </div>


                <div class="footer-column">

                    <h6>Clínica</h6>

                    <a href="${base}sobrenosotros/">¿Quiénes somos?</a>

                    <a href="${base}especialidades/">Especialidades</a>

                    <a href="${base}casos/">Casos</a>

                    <a href="${base}sedes/">Sedes</a>

                </div>


                <div class="footer-column">

                    <h6>Especialidades</h6>

                    <a href="${base}especialidades/">
                        <i class="fa-solid fa-caret-right fa-sm" style="color: rgb(0, 0, 0);"></i>
                        Endodoncia
                    </a>

                    <a href="${base}especialidades/">
                        <i class="fa-solid fa-caret-right fa-sm" style="color: rgb(0, 0, 0);"></i>
                        Prótesis Dental
                    </a>

                    <a href="${base}especialidades/">
                        <i class="fa-solid fa-caret-right fa-sm" style="color: rgb(0, 0, 0);"></i>
                        Ortodoncia
                    </a>

                    <a href="${base}especialidades/">
                        <i class="fa-solid fa-caret-right fa-sm" style="color: rgb(0, 0, 0);"></i>
                        Odontopediatría
                    </a>

                    <a href="${base}especialidades/">
                        <i class="fa-solid fa-caret-right fa-sm" style="color: rgb(0, 0, 0);"></i>
                        Implantes Dentales
                    </a>

                    <a href="${base}especialidades/">
                        <i class="fa-solid fa-caret-right fa-sm" style="color: rgb(0, 0, 0);"></i>
                        Profilaxis Dental
                    </a>

                </div>


                <div class="footer-column">

                    <h6>Contacto</h6>

                    <div class="footer-contact">
                        <p>+51 999999999 (Jesús María)</p>
                        <p>+51 999999999 (Lince)</p>
                        <p>correo@hotmail.com</p>
                    </div>

                </div>


                <div class="footer-column">

                    <h6>Redes</h6>

                    <div class="footer-redes">

                        <a class="boton-redes"
                           href="https://www.instagram.com/aycdentalcenter/"
                           target="_blank">

                            <i class="fa-brands fa-instagram fa-lg"
                               style="color: white;"></i>

                        </a>

                        <a class="boton-redes"
                           href="https://www.tiktok.com/@acdentalcenter"
                           target="_blank">

                            <i class="fa-brands fa-tiktok fa-lg"
                               style="color: white;"></i>

                        </a>

                        <a class="boton-redes"
                           href="https://www.facebook.com/p/AC-Dental-Center-100087497230994/"
                           target="_blank">

                            <i class="fa-brands fa-facebook fa-lg"
                               style="color: white;"></i>

                        </a>

                    </div>

                </div>

            </div>

        </footer>
    `;


    const contenedorNavbar = document.getElementById("navbar");
    const contenedorFooter = document.getElementById("footer");
    const contenedorBarra = document.getElementById("barra");


    if (contenedorNavbar) {
        contenedorNavbar.innerHTML = navbar;
    }

    if (contenedorFooter) {
        contenedorFooter.innerHTML = footer;
    }

    if (contenedorBarra) {
        contenedorBarra.innerHTML = barra;
    }

});


















document.addEventListener('DOMContentLoaded', () => {

    const slider = document.getElementById('compareSlider');
    const beforeWrap = document.getElementById('compareBeforeWrap');
    const handle = document.getElementById('compareHandle');
    const tagBefore = document.querySelector('.tag-before');
    const tagAfter = document.querySelector('.tag-after');

    function setPosition(percent){
        percent = Math.max(0, Math.min(100, percent));
        beforeWrap.style.width = percent + '%';
        handle.style.left = percent + '%';
        tagAfter.style.opacity = percent >= 96 ? 0 : 1;
        tagBefore.style.opacity = percent <= 4 ? 0 : 1;
    }

    function updateFromEvent(e){
        const rect = slider.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const percent = ((clientX - rect.left) / rect.width) * 100;
        setPosition(percent);
        beforeWrap.style.setProperty('--slider-full-width', rect.width + 'px');
        beforeWrap.querySelector('img').style.width = rect.width + 'px';
    }

    let dragging = false;
    slider.addEventListener('mousedown', e => { dragging = true; updateFromEvent(e); });
    slider.addEventListener('touchstart', e => { dragging = true; updateFromEvent(e); });
    window.addEventListener('mousemove', e => { if(dragging) updateFromEvent(e); });
    window.addEventListener('touchmove', e => { if(dragging) updateFromEvent(e); });
    window.addEventListener('mouseup', () => dragging = false);
    window.addEventListener('touchend', () => dragging = false);

    setPosition(50);

    const casos = {
        endodoncia: {
            antes: 'media/ortodoncia.jpg',
            despues: 'media/profilaxis.jpg',
            titulo: 'Endodoncia',
            texto: '2 sesiones. Tratamiento de conducto para eliminar la infección y conservar la pieza dental.',
            statNumero: '+50 casos',
            statTexto: 'similares atendidos este año'
        },
        ortodoncia: {
            antes: 'media/imagenstock.jpg',
            despues: 'media/TTBG.jpg',
            titulo: 'Ortodoncia',
            texto: '14 meses de tratamiento con alineadores transparentes, sin brackets metálicos.',
            statNumero: '+120 casos',
            statTexto: 'de ortodoncia completados'
        },
        implantes: {
            antes: 'media/clinica.jpg',
            despues: 'media/hero.jpg',
            titulo: 'Implante Dental',
            texto: '3 meses de proceso, desde la colocación del implante hasta la corona final.',
            statNumero: '+80 casos',
            statTexto: 'de implantes realizados'
        },
        profilaxis: {
            antes: 'media/ortodoncia.jpg',
            despues: 'media/TTBG.jpg',
            titulo: 'Profilaxis Dental',
            texto: 'Limpieza profunda en una sola sesión, elimina placa y sarro acumulado.',
            statNumero: '+300 casos',
            statTexto: 'de limpieza este año'
        }
    };

    const imgDespues = document.querySelector('.compare-img[alt="Después"]');
    const imgAntes = document.querySelector('.compare-before-wrap .compare-img');
    const casoTitulo = document.getElementById('casoTitulo');
    const casoTexto = document.getElementById('casoTexto');
    const statNumero = document.getElementById('statNumero');
    const statTexto = document.getElementById('statTexto');
    const botones = document.querySelectorAll('.section3-botones .boton2');

    function mostrarCaso(key){
        const caso = casos[key];
        if(!caso) return;

        imgAntes.src = caso.antes;
        imgDespues.src = caso.despues;
        casoTitulo.textContent = caso.titulo;
        casoTexto.textContent = caso.texto;
        statNumero.textContent = caso.statNumero;
        statTexto.textContent = caso.statTexto;

        botones.forEach(b => b.classList.remove('boton-activo'));
        document.querySelector(`[data-caso="${key}"]`).classList.add('boton-activo');

        setPosition(50);
    }

    botones.forEach(boton => {
        boton.addEventListener('click', e => {
            e.preventDefault();
            mostrarCaso(boton.dataset.caso);
        });
    });
    mostrarCaso('endodoncia');

});


document.addEventListener('DOMContentLoaded', () => {
    const capas = document.querySelectorAll('.hero-bg-layer');
    let indiceActual = 0;

    setInterval(() => {
        capas[indiceActual].classList.remove('active');
        indiceActual = (indiceActual + 1) % capas.length;
        capas[indiceActual].classList.add('active');
    }, 5000);   // cambia cada 5 segundos — ajusta a tu gusto
});


document.addEventListener('DOMContentLoaded', () => {
    const carrusel = document.getElementById('carruselCasos');
    const flechaIzq = document.getElementById('flechaIzq');
    const flechaDer = document.getElementById('flechaDer');
    const dotsContainer = document.getElementById('carruselDots');
    const tarjetas = carrusel.querySelectorAll('.section4-tarjetas');

    const tarjetasVisibles = 3;
    const totalPosiciones = Math.max(
        1,
        tarjetas.length - tarjetasVisibles + 1
    );

    // Crear un punto por cada posición del carrusel
    for (let i = 0; i < totalPosiciones; i++) {
        const dot = document.createElement('div');

        dot.classList.add('carrusel-dot');

        if (i === 0) {
            dot.classList.add('activo');
        }

        dot.addEventListener('click', () => {
            scrollToPosition(i);
        });

        dotsContainer.appendChild(dot);
    }

    const dots = dotsContainer.querySelectorAll('.carrusel-dot');

    // Calcula cuánto debe desplazarse una tarjeta
    function getScrollStep() {
        const tarjeta = tarjetas[0];
        const estilos = getComputedStyle(carrusel);
        const gap = parseFloat(estilos.gap) || 25;

        return tarjeta.offsetWidth + gap;
    }

    // Ir a una posición concreta
    function scrollToPosition(indice) {
        carrusel.scrollTo({
            left: getScrollStep() * indice,
            behavior: 'smooth'
        });
    }

    // Flecha derecha
    flechaDer.addEventListener('click', () => {
        const paso = getScrollStep();
        const posicionActual = Math.round(carrusel.scrollLeft / paso);

        if (posicionActual < totalPosiciones - 1) {
            scrollToPosition(posicionActual + 1);
        }
    });

    // Flecha izquierda
    flechaIzq.addEventListener('click', () => {
        const paso = getScrollStep();
        const posicionActual = Math.round(carrusel.scrollLeft / paso);

        if (posicionActual > 0) {
            scrollToPosition(posicionActual - 1);
        }
    });

    // Actualizar los puntos
    carrusel.addEventListener('scroll', () => {
        const paso = getScrollStep();

        const posicionActual = Math.round(
            carrusel.scrollLeft / paso
        );

        dots.forEach((dot, i) => {
            dot.classList.toggle(
                'activo',
                i === posicionActual
            );
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const numeroWhatsApp = '51987654321'; // reemplaza por tu número real, con código de país, sin + ni espacios

    const formulario = document.getElementById('formularioCita');

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('campoNombre').value;
        const apellido = document.getElementById('campoApellido').value;
        const telefono = document.getElementById('campoTelefono').value;
        const correo = document.getElementById('campoCorreo').value;
        const sede = document.getElementById('campoSede').value;
        const especialidad = document.getElementById('campoEspecialidad').value;
        const descripcion = document.getElementById('campoDescripcion').value;

        let mensaje = `Hola, quisiera agendar una cita 🦷\n\n`;
        mensaje += `*Nombre:* ${nombre} ${apellido}\n`;
        mensaje += `*Correo:* ${correo}\n`;
        mensaje += `*Teléfono:* ${telefono}\n`;
        mensaje += `*Sede:* ${sede}\n`;
        mensaje += `*Especialidad:* ${especialidad}\n`;
        if (descripcion.trim() !== '') {
            mensaje += `*Consulta:* ${descripcion}\n`;
        }

        const mensajeCodificado = encodeURIComponent(mensaje);
        const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
        window.open(linkWhatsApp, '_blank');
    });
});