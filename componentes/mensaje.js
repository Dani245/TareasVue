Vue.component("mensaje", {
	/*html*/
	template: `
	<div>
        <div class="alert-danger" role="alert">
            <p v-if="errors.length">				
                <b>Por favor corrige los siguientes errores:</b>
                <hr>
                <ul>
                    <li v-for="mensaje in errors">{{ mensaje }}</li>
            </ul>
            </p>
        </div>      
    </div>
    `,
    props: {
		errors: Array,
	}
});