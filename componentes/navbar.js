Vue.component("navbar", {
	/*html*/
	template: `
	<div>
        <nav class="navbar navbar-expand-lg bg-secondary text-uppercase position-relative" id="mainNav">
            <div class="container">
                <a class="navbar-brand js-scroll-trigger" href="#app">Proyecto Vue</a><button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu <i class="fas fa-bars"></i></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" v-for="menuC of menu" v-bind:href="menuC.href">{{menuC.nombre}}</a></li>                    
                    </ul>
                </div>
            </div>
        </nav>        
    </div>
    `,
    props: {
		menu: Array,
	}
});