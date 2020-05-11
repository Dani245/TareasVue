Vue.component("mensaje", {
	/*html*/
	template: `
	<div>        
        <div v-if="mensajes.length">
            <div class="alert alert-danger" role="alert">
                <h4 class="alert-heading">Información</h4>                
                <hr>
                <p class="mb-0" v-for="mensaje in mensajes">{{mensaje}}</p>
            </div>
        </div>
    </div>
    `,
    props: {
		mensajes: Array,
	}
});