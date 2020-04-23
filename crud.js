const app = new Vue({
	el: "#app",
	data: {		
		errors: [],
		tareas: [],
		tareascompletas: [],
		nuevaTarea: null,
		Tareadescripcion: null
	},
	methods: {
		agregar() {
			this.errors = [];
			if (!this.nuevaTarea || !this.Tareadescripcion) {
				if(!this.nuevaTarea){
					this.errors.push('Nombre es un campo requerido!!');
				}
				if(!this.Tareadescripcion){
					this.errors.push('Descripción es un campo requerido!!');
				}				
			}
			else{
				this.tareas.push({
					nombre: this.nuevaTarea,
					descripcion: this.Tareadescripcion,
					estado: false
				});
				this.nuevaTarea = "";
				this.Tareadescripcion="";
				localStorage.setItem("tareas-vue", JSON.stringify(this.tareas));
			}			  
		},
		editarTarea(event, index) {
			this.tareas[index].estado = true;
			localStorage.setItem("tareas-vue", JSON.stringify(this.tareas));
			this.tareascompletas.push({
				nombre: this.tareas[index].nombre,
				descripcion: this.tareas[index].descripcion,
				estado: this.tareas[index].estado
			});			
			localStorage.setItem("tareas-completadas-vue", JSON.stringify(this.tareascompletas));
		},
		eliminarTarea(event, index) {
			this.tareas.splice(index, 1);
			localStorage.setItem("tareas-vue", JSON.stringify(this.tareas));
		}
	},
	created: function() {
		let datosDB = JSON.parse(localStorage.getItem("tareas-vue"));
		console.log(datosDB);
		if (datosDB === null) {
			this.tareas = [];
		} else {
			this.tareas = datosDB;
		}

		let datosC_DB = JSON.parse(localStorage.getItem("tareas-completadas-vue"));
		console.log(datosC_DB);
		if(datosC_DB === null){
			this.tareascompletas=[];
		} else{
			this.tareascompletas = datosC_DB;
		}
	}
});
