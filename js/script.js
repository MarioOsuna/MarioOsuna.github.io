window.onload = function() {
    let contenedor = document.getElementById('contenedor_carga');

    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
}

document.addEventListener("DOMContentLoaded", function() {


    let flag = false;
    let scroll;
    let barra = document.getElementsByTagName("nav")[0];
    barra.style = "display: none";
    let span = document.getElementById("span");

    let relleno = false;


    document.addEventListener("scroll", function() {
        //console.log(scroll);

        scroll = document.getElementsByTagName("html")[0].scrollTop;
        if (scroll > 490) {
            if (!flag) {
                // barra.style = "visibility: visible ";
                barra.style = "display: block";
                //barra.style = "animation-name: bajar";


                // barra.className = "bajar";
                if (scroll > 699 && !relleno) {

                    animateprogress("#html5", 91);
                    animateprogress("#php", 89);
                    animateprogress("#css", 91);
                    animateprogress("#python", 72);
                    animateprogress("#javascript", 83);
                    animateprogress("#Android", 87);
                    relleno = true;
                }

            }
            flag = true;
        } else {
            if (flag) {

                barra.style = "display: none";


                //barra.className = "subir";

                /*  if (animation) {
                     barra.style = "animation-name: subir";
                     animation = false;
                 } */
                // barra.style = "visibility: hidden";
                flag = false;
            }
        }



        if (scroll > window.outerHeight) {
            // $('body').addClass('tight');
            document.getElementsByClassName("arrow")[0].style = "display:none";
        } else {
            // $('body').removeClass('tight');
            document.getElementsByClassName("arrow")[0].style = "display:block";
        }


    });



    function animateprogress(id, val) {

        let getRequestAnimationFrame = function() { /* <------- Declaro getRequestAnimationFrame intentando obtener la máxima compatibilidad con todos los navegadores */
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function(callback) {
                    window.setTimeout(enroute, 1 / 60 * 1000);
                };

        };

        let fpAnimationFrame = getRequestAnimationFrame(); /* <--- Declaro una instancia de getRequestAnimationFrame para llamar a la función animación */
        let i = 0;
        let animacion = function() {

            if (i <= val) {
                document.querySelector(id).setAttribute("value", i); /* <----  Incremento el valor de la barra de progreso */
                // document.querySelector(id + "+ span").innerHTML = i + "%"; /* <---- Incremento el porcentaje y lo muestro en la etiqueta span */
                i++;
                fpAnimationFrame(animacion); /* <------------------ Mientras que el contador no llega al porcentaje fijado la función vuelve a llamarse con fpAnimationFrame     */
            }

        }

        fpAnimationFrame(animacion); /*  <---- Llamo la función animación por primera vez usando fpAnimationFrame para que se ejecute a 60fps  */

    }



    span.addEventListener("click", verMenu);


    function verMenu() {
        let menu = document.getElementById("nav");
        let body = document.getElementsByTagName("body")[0];
        let img = document.getElementsByName("nada")[0];

        if (menu.className == "oculto") {
            menu.className = "visible";
            img.className = "oculto";
            span.innerHTML = "menu_open";
            body.style = "overflow-y: hidden";
            barra.style = "height: 100%";
        } else {
            menu.className = "oculto";
            img.className = " ";
            span.innerHTML = "menu";
            body.style = "overflow-y: auto";
            barra.style = "height: 40px";


        }
    }



    function proyectos() {
        let slideIndex = 1;
        showDivs(slideIndex);

        function plusDivs(n) {
            showDivs(slideIndex += n);
        }

        function showDivs(n) {
            let i;
            let x = document.getElementsByClassName("proyecto");
            if (n > x.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = x.length }
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            x[slideIndex - 1].style.display = "block";
        }

        document.getElementById("menos").addEventListener("click", function() {
            plusDivs(-1);
        });
        document.getElementById("mas").addEventListener("click", function() {
            plusDivs(1);
        });

    }
    proyectos();

});