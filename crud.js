const app = new Vue({
	el: "#app",
	data: {		
		errors: [],
		tareas: [],
		menu: [ 
			{href: "index.html", nombre: "home"}, 
			{href: "tareascompletadas.html", nombre: "tareas completadas"},
			{href: "acerca.html", nombre: "acerca"}
		],
		tareascompletas: [],
		nuevaTarea: null,
		Tareadescripcion: null,	
		contador: 0,
		resultado: 0	
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
	},
	computed: {
        color(){
						
			for(x=0; x<this.tareas.length; x++){
				if(this.tareas[x].estado===true){
					this.contador++;
				}
			}

			this.resultado= this.contador/this.tareas.length;			
			this.resultado = Math.round(this.resultado*100);			
			this.contador= 0;
            return {
                'bg-danger' : this.resultado <= 25,
                'bg-warning' : this.resultado > 25 && this.resultado < 75,
                'bg-success' : this.resultado >= 75
            }
        }
    }
});
