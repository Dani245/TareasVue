Vue.component("info", {
    /* html */
    template:
	`
    <div>

        <!-- Masthead-->
        <header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
                <img class="masthead-avatar mb-5" v-bind:src="imagen" alt="" />
                <h1 class="masthead-heading mb-0">{{nombre}}</h1>
                <!-- Icon Divider-->
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <!-- Masthead Subheading-->
                <p class="masthead-subheading font-weight-light mb-0">{{ocupacion[0]}} - {{ocupacion[1]}}</p>
            </div>
        </header>
        
        <!-- About Section-->
        <section class="page-section bg-primary text-white mb-0" id="about">
            <div class="container">
                <!-- About Section Heading-->
                <h2 class="page-section-heading text-center text-uppercase text-white">Acerca</h2>
                <!-- Icon Divider-->
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <!-- About Section Content-->
                <div class="row">
                    <div class="col-lg-4 ml-auto"><p class="lead">{{p1}}</p></div>
                    <div class="col-lg-4 mr-auto"><p class="lead">{{p2}}</p></div>
                </div>                
            </div>
        </section>
        
    <div>
        
	`,
    data(){
        return{
            nombre: "José Danilo De Paz Martínez",
            imagen: "assets/img/img.jpg",
            ocupacion: ["Estudiante de Ingeniería en Sistemas","Programador y Diseñador Web"],
            p1: "Mi nombre es José Danilo De Paz, tengo 24 años de edad. Estudiante de Ingeniería en Sistemas, programador y diseñador web, me gusta escuchar música Rock y Electronica. Suelo jugar videojuegos y leer libros en los tiempos libres.",
            p2: "Vue es un Framework Frontend de JavaScript, permite construir interfaces de usuario de una forma muy sencilla, reutilizar el código al usar componentes que contienen etiquetas HTML, estilos de CSS y código JavaScript. "
        }
    }
});