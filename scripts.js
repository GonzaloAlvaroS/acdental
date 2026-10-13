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
    const numeroWhatsApp = '51987654321'; // número de la clínica, con código de país
    const formulario = document.getElementById('formularioCita');

    // vacio: mensaje si el campo está vacío; invalido: mensaje si el formato es incorrecto
    const mensajes = {
        campoNombre:       { vacio: 'Ingresa tu nombre',                invalido: 'Ingresa tu nombre' },
        campoApellido:     { vacio: 'Ingresa tu apellido',              invalido: 'Ingresa tu apellido' },
        campoTelefono:     { vacio: 'Ingresa tu número de celular',     invalido: 'Ingresa un celular válido: 9 dígitos que empiecen con 9' },
        campoCorreo:       { vacio: 'Ingresa tu correo electrónico',    invalido: 'Ingresa un correo válido, por ejemplo nombre@correo.com' },
        campoSede:         { vacio: 'Elige una sede',                   invalido: 'Elige una sede' },
        campoEspecialidad: { vacio: 'Elige una especialidad',           invalido: 'Elige una especialidad' }
    };

    Object.keys(mensajes).forEach(id => {
        const campo = document.getElementById(id);

        // cuando el navegador detecta el error, reemplazamos su texto por el nuestro
        campo.addEventListener('invalid', () => {
            campo.setCustomValidity('');
            if (!campo.validity.valid) {
                campo.setCustomValidity(
                    campo.validity.valueMissing ? mensajes[id].vacio : mensajes[id].invalido
                );
            }
        });

        // al corregir el campo hay que limpiar el mensaje, si no se queda pegado
        campo.addEventListener('input', () => campo.setCustomValidity(''));
        campo.addEventListener('change', () => campo.setCustomValidity(''));
    });

    // este evento solo se dispara si todos los campos ya son válidos
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('campoNombre').value.trim();
        const apellido = document.getElementById('campoApellido').value.trim();
        const telefono = document.getElementById('campoTelefono').value.trim();
        const correo = document.getElementById('campoCorreo').value.trim();
        const sede = document.getElementById('campoSede').value;
        const especialidad = document.getElementById('campoEspecialidad').value;
        const descripcion = document.getElementById('campoDescripcion').value.trim();

        let mensaje = `Hola, quisiera agendar una cita 🦷\n\n`;
        mensaje += `*Nombre:* ${nombre} ${apellido}\n`;
        mensaje += `*Correo:* ${correo}\n`;
        mensaje += `*Teléfono:* ${telefono}\n`;
        mensaje += `*Sede:* ${sede}\n`;
        mensaje += `*Especialidad:* ${especialidad}\n`;
        if (descripcion !== '') mensaje += `*Consulta:* ${descripcion}\n`;

        const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
        window.open(link, '_blank');
    });
});




document.addEventListener("DOMContentLoaded", () => {
    const buscadorEventos = document.getElementById("buscadorEventos");
    if (!buscadorEventos) return;

    const tarjetas = document.querySelectorAll(".section4-tarjetas");

    function normalizarTexto(texto) {
        return texto
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    }

    buscadorEventos.addEventListener("input", () => {
        const textoBuscado = normalizarTexto(buscadorEventos.value.trim());

        tarjetas.forEach(tarjeta => {
            const titulo = normalizarTexto(tarjeta.querySelector("h6").textContent);
            const descripcion = normalizarTexto(tarjeta.querySelector("p").textContent);

            const coincide = titulo.includes(textoBuscado) || descripcion.includes(textoBuscado);
            tarjeta.style.display = coincide ? "" : "none";
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {

const especialidades = {
    ortodoncia: {
        imagen: '/media/ortodoncia.jpg',
        titulo: 'Ortodoncia',
        subtitulo: 'Corrige la posición de tus dientes y tu mordida',
        parrafo1: 'La ortodoncia alinea los dientes y corrige la forma en que encajan al morder. Una buena alineación mejora la estética de la sonrisa, facilita la higiene diaria y reduce el desgaste irregular de las piezas dentales.',
        parrafo2: 'Contamos con opciones como brackets y alineadores transparentes, según las necesidades de cada paciente. Tras evaluar tu caso, te explicamos el plan, la duración estimada y los controles necesarios para llegar al resultado esperado.'
    },
    endodoncia: {
        imagen: '/media/endodoncia.jpg',
        titulo: 'Endodoncia',
        subtitulo: 'Conserva tu diente natural',
        parrafo1: 'La endodoncia, o tratamiento de conducto, se realiza cuando la pulpa del diente se infecta o se daña por una caries profunda, un golpe o un tratamiento previo. Consiste en limpiar el interior del diente y sellarlo para eliminar el dolor y la infección.',
        parrafo2: 'Gracias a este procedimiento, muchas piezas que antes se habrían extraído pueden conservarse. Se realiza con anestesia local y, en la mayoría de los casos, el paciente retoma su rutina con normalidad.'
    },
    protesis: {
        imagen: '/media/implante2.jpg',
        titulo: 'Prótesis Dental',
        subtitulo: 'Recupera tu función y tu estética',
        parrafo1: 'Las prótesis dentales reemplazan uno o varios dientes ausentes y devuelven la capacidad de masticar y hablar con comodidad. Pueden ser fijas o removibles, y se fabrican a medida para que se adapten a tu boca.',
        parrafo2: 'Al diseñarlas tomamos en cuenta la forma, el color y el tamaño de tus dientes naturales, de modo que el resultado se vea armónico. Te asesoramos sobre la opción más adecuada según tu salud bucal y tus expectativas.'
    },
    implantes: {
        imagen: '/media/caso-implante.jpg',
        titulo: 'Implantes Dentales',
        subtitulo: 'Reemplaza dientes perdidos de forma estable',
        parrafo1: 'Un implante dental es una pieza de titanio que se coloca en el hueso maxilar y funciona como raíz artificial. Sobre ella se fija una corona, logrando un diente de aspecto y función muy similares a uno natural.',
        parrafo2: 'Antes del procedimiento realizamos una evaluación completa, que incluye estudios por imágenes, para planificar cada paso con precisión. El tiempo total varía según el caso, ya que requiere un periodo de cicatrización antes de colocar la corona definitiva.'
    },
    profilaxis: {
        imagen: '/media/caso-profilaxis.jpg',
        titulo: 'Profilaxis Dental',
        subtitulo: 'Limpieza profesional para cuidar tu salud bucal',
        parrafo1: 'La profilaxis es una limpieza profesional que elimina la placa bacteriana, el sarro y las manchas que el cepillado diario no logra retirar. Es la base para prevenir caries, inflamación de encías y mal aliento.',
        parrafo2: 'Recomendamos realizarla periódicamente, con una frecuencia que definimos según tu caso. Es un procedimiento rápido y cómodo, y además nos permite detectar a tiempo cualquier problema antes de que se vuelva mayor.'
    },
    odontopediatria: {
        imagen: '/media/odontopediatria.jpg',
        titulo: 'Odontopediatría',
        subtitulo: 'Atención especializada para los más pequeños',
        parrafo1: 'La odontopediatría se enfoca en la salud bucal de bebés, niños y adolescentes, acompañando el desarrollo de sus dientes y de su mordida. Las primeras visitas ayudan a prevenir problemas y a que los niños se familiaricen con el consultorio.',
        parrafo2: 'Nuestro equipo trabaja con un trato paciente y cercano para que cada consulta sea una experiencia tranquila. Además, orientamos a los padres sobre higiene, alimentación y hábitos que cuidan la sonrisa desde temprana edad.'
    },
    estetica: {
        imagen: '/media/estetica.jpg',
        titulo: 'Estética Dental',
        subtitulo: 'Diseña la sonrisa que quieres',
        parrafo1: 'La estética dental reúne tratamientos pensados para mejorar la apariencia de tu sonrisa, como el blanqueamiento, las carillas o las resinas estéticas. Se adaptan a la forma, el tono y las proporciones de tu rostro.',
        parrafo2: 'Antes de comenzar, evaluamos tu salud bucal y conversamos sobre lo que buscas lograr, para recomendarte la opción más adecuada. El objetivo es un resultado natural, que luzca bien y que además sea saludable.'
    },
    cirugias: {
        imagen: '/media/cirugia.jpg',
        titulo: 'Cirugías',
        subtitulo: 'Procedimientos quirúrgicos con planificación y cuidado',
        parrafo1: 'Realizamos cirugías orales como la extracción de terceras molares (muelas del juicio), la extracción de piezas dañadas o la preparación del hueso para colocar implantes. Cada intervención se planifica previamente con estudios de apoyo.',
        parrafo2: 'Los procedimientos se hacen con anestesia local y se te explica con claridad cómo prepararte y qué cuidados seguir después. Nuestro seguimiento busca que la recuperación sea lo más cómoda y segura posible.'
    }
};

    const contenedor = document.querySelector('.especialidades1-content');
    const imagen = document.getElementById('espImagen');
    const titulo = document.getElementById('espTitulo');
    const subtitulo = document.getElementById('espSubtitulo');
    const parrafo1 = document.getElementById('espParrafo1');
    const parrafo2 = document.getElementById('espParrafo2');
    const botones = document.querySelectorAll('[data-especialidad]');

    function aplicarContenido(esp){
        imagen.src = esp.imagen;
        titulo.textContent = esp.titulo;
        subtitulo.textContent = esp.subtitulo;
        parrafo1.textContent = esp.parrafo1;
        parrafo2.textContent = esp.parrafo2;
    }

    function mostrarEspecialidad(key){
        const esp = especialidades[key];
        if(!esp) return;

        botones.forEach(b => b.classList.remove('boton-activo'));
        document.querySelector(`[data-especialidad="${key}"]`).classList.add('boton-activo');

        // fundido: se desvanece, cambia el contenido, y vuelve a aparecer
        contenedor.classList.add('cambiando');
        setTimeout(() => {
            aplicarContenido(esp);
            contenedor.classList.remove('cambiando');
        }, 200);
    }

    botones.forEach(boton => {
        boton.addEventListener('click', e => {
            e.preventDefault();
            mostrarEspecialidad(boton.dataset.especialidad);
        });
    });

    // carga la primera especialidad al abrir la página, sin fundido
    // lee ?esp=... de la URL; si no existe o no es válido, usa ortodoncia por defecto
const params = new URLSearchParams(window.location.search);
const pedida = params.get('esp');
const claveInicial = Object.prototype.hasOwnProperty.call(especialidades, pedida)
    ? pedida
    : 'ortodoncia';

aplicarContenido(especialidades[claveInicial]);

// marca el botón correcto como activo (en el HTML estaba fijo en Ortodoncia)
botones.forEach(b => {
    b.classList.toggle('boton-activo', b.dataset.especialidad === claveInicial);
});
});