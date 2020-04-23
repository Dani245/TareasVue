Vue.component("tareacompleta", {
    /* html */
    template:
	`
	<div>
    <div class="mt-3" v-for="(tareaC, index) of tareascompletas">

        <div class="card mb-3">
            <h5 class="card-header h5">{{index}}. {{tareaC.nombre}}</h5>
            <div class="card-body">                
                <p class="card-text">{{tareaC.descripcion}}</p>                
            </div>
        </div>

	</div>
	</div>
	`,
	props: {
		tareascompletas: Array,
	},
    data(){
        return{
			nombre: "José",
        }
    }
});