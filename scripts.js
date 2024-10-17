// Función para mostrar la página principal
function mostrarPaginaPrincipal() {
    document.getElementById('registro').classList.add('oculto');
    document.getElementById('pagina-principal').classList.remove('oculto');
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
});

document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
});

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    const modeText = document.body.classList.contains('dark-mode') ? 'Dark Mode' : 'Light Mode';

    themeToggle.innerHTML = `<i class="fas fa-moon"></i> ${modeText}`;
});



const translateButton = document.getElementById('translate');
translateButton.addEventListener('click', () => {
    const elements = [
        { selector: 'a[href="index.html"]', original: 'Home', translated: 'Inicio' },
        { selector: 'a[href="Anime/Anime.html"]', original: 'Anime', translated: 'Anime' },
        { selector: 'a[onclick="irA(\'noticia\')"]', original: 'News', translated: 'Noticias' },
        { selector: 'a[href="#"]', original: 'Community', translated: 'Comunidad' },
        { selector: '#theme-toggle', original: 'Dark Mode', translated: 'Modo Oscuro' },
        { selector: '#theme-toggle', original: 'Light Mode', translated: 'Modo Claro' },
        { selector: '#translate', original: 'Translate', translated: 'Traducir' },
        { selector: 'h2#t1', original: 'Featured Anime', translated: 'Anime destacado'},
        { selector: 'h2#t2', original: 'Latest News', translated: 'Últimas Noticias' },
        { selector: 'h2#t8', original: 'Community Forum', translated: 'Foro Comunitario' },
        { selector: 'p#t9', original: 'Latest Topic', translated: 'Tema más reciente' },
        { selector: 'li#t10', original: 'Best Anime of the Year?', translated: '¿Mejor anime del año?' },
        { selector: 'p#t3', original: 'Goku story is not over yet! Theres a whole new saga waiting to unfold in Dragon Ball DAIMA, premiering TOMORROW! In addition to releasing his new video game Sparking Zero!!. This anime is considered a last gift from Akira Toriyama, the creator of the franchise, who worked on the project before his death. Although his legacy is now indelible, there is a detail in this new anime that has convinced fans that his spirit is still alive in the series.', translated: '¡La historia de Goku aún no ha terminado! ¡Hay una saga completamente nueva esperando desarrollarse en Dragon Ball DAIMA, que se estrenará MAÑANA!. Además de lanzar su nuevo videojuego Sparking Zero!!.Este anime se considera un último regalo de Akira Toriyama, el creador de la franquicia, quien trabajó en el proyecto antes de su muerte. Aunque su legado es ahora imborrable, existen detalles en este nuevo anime que ha convencido a los fans de que su espíritu sigue vivo en la serie.'},
        { selector: 'p#t7', original: 'Every summer, anime fans from around the world flock to Los Angeles for the ultimate celebration of Japanese pop culture: Anime Expo.Held at the Los Angeles Convention Center, this years Anime Expo, which ran from July 4th to July 7th, was a whirlwind of excitement, creativity, and community.', translated: 'Cada verano, fanáticos del anime de todo el mundo acuden en masa a Los Ángeles para la máxima celebración de la cultura pop japonesa: Anime Expo. Celebrada en el Centro de Convenciones de Los Ángeles, la Anime Expo de este año, que se desarrolló del 4 al 7 de julio, fue un torbellino de emoción, creatividad y comunidad.' },
        { selector: 'p#t5', original: 'Get the latest news about upcoming anime seasons!', translated: '¡Obtén las últimas noticias sobre las próximas temporadas de anime!' },
        { selector: 'p#t13', original: 'Join the discussion in our community forums.', translated: 'Únete a la discusión en nuestros foros comunitarios.' },
        { selector: 'h2#t4', original: 'New Anime Seasons', translated: 'Nuevas Temporadas de Anime' },
        { selector: 'h2#t6', original: 'Anime Events', translated: 'Eventos de Anime' },
        { selector: 'li#t11', original: 'Who do you think is the best character of 2024?', translated: '¿Quién crees que es el mejor personaje de 2024?' },
        { selector: 'li#t12', original: 'What upcoming anime release are you most excited about?', translated: '¿Qué próximo lanzamiento de anime te entusiasma más?' },
        { selector: 'p#t15', original: 'Subaru Natsuki, a young man who is transported to a fantasy world. Despite having no special abilities, he discovers that he possesses the power to go back in time whenever he dies, allowing him to change the course of events.', translated: 'Subaru Natsuki, un joven que es transportado a un mundo de fantasía. A pesar de no tener habilidades especiales, descubre que posee el poder de regresar en el tiempo cada vez que muere, permitiéndole cambiar el curso de los eventos.' },
        { selector: 'p#t14', original: 'Follow Takakura and Ayase, on a quest to uncover the truth of mysterious paranormal phenomena. As they face ghosts and aliens, they deal with their own contrasting beliefs and personalities.', translated: 'Sigue a Takakura y Ayase, en una búsqueda por descubrir la verdad de misteriosos fenómenos paranormales. A medida que enfrentan fantasmas y alienígenas, lidian con sus propias creencias y personalidades contrastantes.' },
        { selector: 'p#t16', original: 'Rakurou Hizutome, a passionate gamer, decides to try the acclaimed VRMMO "Shangri-La Frontier." exploring a vast virtual world full of unique challenges and adventures.', translated: 'Rakurou Hizutome, un gamer apasionado, decide probar el aclamado VRMMO "Shangri-La Frontier." explorando un vasto mundo virtual lleno de desafíos y aventuras únicas.' },
        { selector: 'p#t17', original: 'One Piece anime on hiatus until April 2025, the news has paralyzed fans of the anime, as this will be the longest hiatus since the beginning of its broadcast in 1999. The adaptation, which is currently adapting the Egghead arc, will go on hiatus after episode 1,122 for, according to the words of the presenters, "recharge the batteries", and when it returns in 2025 it will do so in a new schedule on Japanese television.', translated: 'Anime One Piece en pausa hasta abril de 2025, la noticia ha paralizado a los fanáticos del anime, pues esta será la pausa más larga desde el inicio de su transmisión en 1999. La adaptación, que actualmente adapta el arco de Egghead, hará una pausa tras el episodio 1.122 para, según palabras de los presentadores, "recargar pilas" y cuando regrese en 2025 lo hará en una nueva programación de la televisión japonesa.' },
        { selector: 'button#t18', original: 'View More', translated: 'Ver Más'},
    ];

    elements.forEach(el => {
        const element = document.querySelector(el.selector);
        if (!element) return;

        if (document.body.classList.contains('translated')) {
        // Regresar al texto original
            element.innerHTML = element.innerHTML.replace(el.translated, el.original);
        } else {
        // Traducir
            element.innerHTML = element.innerHTML.replace(el.original, el.translated);
        }
    });
document.body.classList.toggle('translated');
});

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('nav ul li button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));

            button.classList.add('active');
        });
    });
});

function irA(noticia) {
    document.getElementById(noticia).scrollIntoView({ behavior: 'smooth' });
}


function showSlide(index) {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    currentIndex = (index + totalSlides) % totalSlides;
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function autoSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

let slideInterval = setInterval(autoSlide, 1500); 

document.getElementById("t18").addEventListener("click", function() {
    window.location.href = "https://forms.gle/tqe8xgBv33tSEWP29";
});