Vue.component("mensaje", {
	/*html*/
	template: `
	<div>        
        <div v-if="mensajes.length">
            <div class="alert alert-light" >
                <h4 class="alert-heading">Información</h4>                
                <hr>
                <p class="mb-0 mt-2" :class="['alert', mensaje.estado ? 'alert-primary' : 'alert-danger']" v-for="mensaje in mensajes">{{mensaje.descripcion}}</p>
            </div>
        </div>
    </div>
    `,
    props: {
		mensajes: Array,
	}
});