Vue.component("tarea", {
    /* html */
    template:
	`
	<div>
    <div class="mt-3" v-for="(tarea, index) of tareas">
			<div :class="['alert', tarea.estado ? 'alert-success' : 'alert-danger']" role="alert">
				<div class="d-flex justify-content-between align-items-center">
					<div>
						<h3>{{index}}. {{tarea.nombre}}</h3>
						<p>{{tarea.descripcion}}</p>

					</div>
					<div>
						<button class="btn btn-success btn-sm" @click="$emit('editar', $event, index)" v-if="!tareas[index].estado"
							v-on:click="tareas[index].estado  = true">
							OK
						</button>
						<button class="btn btn-danger btn-sm" @click="$emit('eliminar', $event, index)">
							X
						</button>
					</div>
				</div>
			</div>
		</div>
		</div>
	`,
	props: {
		tareas: Array,
	},
    data(){
        return{
			nombre: "José",
        }
    }
});