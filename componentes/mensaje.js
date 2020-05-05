Vue.component("mensaje", {
	/*html*/
	template: `
	<div>        
        <div v-if="errors.length">
            <div class="alert alert-danger" role="alert">
                <h4 class="alert-heading">Por favor corrige los siguientes errores:</h4>                
                <hr>
                <p class="mb-0" v-for="mensaje in errors">{{mensaje}}</p>
            </div>
        </div>
    </div>
    `,
    props: {
		errors: Array,
	}
});