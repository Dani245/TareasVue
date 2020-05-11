Vue.component("tarea", {
    /* html */
    template:
	`
	<div>
    <div class="mt-3" v-for="(tarea, index) of tareas">
		<div class="card mb-3" :class="['border', tarea.estado ? 'border-primary' : 'border-danger']" >
		  <div class="card-header">
		  	<h3>{{index}}. {{tarea.nombre}}</h3>
		  </div>
		  <div class="card-body d-flex justify-content-between align-items-center">    			
		  	<p>{{tarea.descripcion}}</p>				
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
});