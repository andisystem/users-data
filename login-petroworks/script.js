document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('text');
    const imageElement = document.getElementById('image');
    let isPower = true;

    function toggleText() {
        textElement.classList.add('fade-out');
        setTimeout(() => {
            textElement.innerHTML = `Somos <img id="image" src="${isPower ? 'images/logo-petroworks-nuevo.png' : 'images/Power.png'}" alt="${isPower ? 'Petroworks' : 'Power'}">`;
            isPower = !isPower;
            textElement.classList.remove('fade-out');
            setTimeout(() => {
                textElement.classList.add('fade-in');
                setTimeout(() => {
                    textElement.classList.remove('fade-in');
                    setTimeout(toggleText, 2000); // Espera 2 segundos antes de iniciar la siguiente animación
                }, 1000); // Tiempo de animación de fade-in
            }, 10); // Breve pausa para permitir la eliminación de la clase anterior
        }, 1000); // Tiempo de animación de fade-out
    }

    setTimeout(toggleText, 2000); // Espera 2 segundos antes de iniciar la primera animación
});

//FIELD EYEE FOR SEE THE PASSWORD

var passField = document.querySelector(".home .contentBx .formBx form .wrapper input");
var btnEye = document.querySelector("span i");

btnEye.onclick = function(){
    if(passField.type === "password"){
        passField.type = "text";
        btnEye.classList.add("hide-btn");
    }else{
        passField.type = "password";
        btnEye.classList.remove("hide-btn");
    }
}

//PARALLAX EFFECTS

const container = document.getElementById('box-container');
        const boxes = document.querySelectorAll('.box');

        document.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            boxes.forEach((box, index) => {
                const depth = (index + 1) * 25;
                box.style.transform = `translateY(${scrollPosition / depth}%)`;
            });
        });

        container.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            boxes.forEach((box, index) => {
                const depth = (index + 1) * 7;
                const offsetX = (mouseX - centerX) / depth;
                const offsetY = (mouseY - centerY) / depth;
                box.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
            });
        });

//MULTIPLE TYPING TEXT ANIMATION

const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "o Power";
    }, 0);
    setTimeout(() => {
        text.textContent = "a gente";
    }, 4000);
};

// Inicialmente carga el texto
textLoad();

// Configura el intervalo para que llame a textLoad cada 8 segundos
setInterval(textLoad, 8000);