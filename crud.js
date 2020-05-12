const app = new Vue({
	el: "#app",
	data: {		
		mensajes: [],
		tareas: [],
		menu: [ 
			{href: "index.html", nombre: "home"}, 
			{href: "tareascompletadas.html", nombre: "tareas completadas"},
			{href: "acerca.html", nombre: "acerca"}
		],
		tareascompletas: [],
		nuevaTarea: null,
		Tareadescripcion: null,	
		Fechainicio: null,
		Fechafinal: null,
		Horainicio: null,
		Horafinal: null
	},
	methods: {
		agregar() {
			this.mensajes = [];
			if (!this.nuevaTarea || !this.Tareadescripcion || !this.Fechainicio || !this.Fechafinal || !this.Horainicio || !this.Horafinal) {
				if(!this.nuevaTarea){
					this.mensajes.push({
						estado: false, 
						descripcion: "Nombre es un campo requerido!!"
					});
				}
				if(!this.Tareadescripcion){
					this.mensajes.push({
						estado: false, 
						descripcion: "Descripcion es un campo requerido!!"
					});
				}	
				if(!this.Fechainicio){
					this.mensajes.push({
						estado: false, 
						descripcion: "Fecha Inicio es un campo requerido!!"
					});
				}	
				if(!this.Fechafinal){
					this.mensajes.push({
						estado: false, 
						descripcion: "Fecha Final es un campo requerido!!"
					});
				}				
				if(!this.Horafinal){
					this.mensajes.push({
						estado: false, 
						descripcion: "Hora Inicio es un campo requerido!!"
					});
				}
				if(!this.Horafinal){
					this.mensajes.push({
						estado: false, 
						descripcion: "Hora Final es un campo requerido!!"
					});
				}
			}
			else{
				this.Fechainicio = new Date(this.Fechainicio);
				this.Fechafinal = new Date(this.Fechafinal);
				
				if(this.Fechainicio < this.fechalimite){
					
					this.mensajes.push({
						estado: false, 
						descripcion: "Debe elegir una fecha mayor en Fecha Inicio!!"
					});
				}
				if(this.Fechafinal < this.fechalimite){
					this.mensajes.push({
						estado: false, 
						descripcion: "Debe elegir una fecha mayor en Fecha Final!!"
					});
				}
				
				if(this.mensajes.length < 1){
					
					this.tareas.push({
						nombre: this.nuevaTarea,
						descripcion: this.Tareadescripcion,
						fechaini: this.Fechainicio,
						fechafin: this.Fechafinal,
						horaini: this.Horainicio,
						fechafin: this.Fechafinal,
						estado: false
					});
					this.nuevaTarea = "";
					this.Tareadescripcion="";
					this.Horainicio= "";
					this.Horafinal= "";
					localStorage.setItem("tareas-vue", JSON.stringify(this.tareas));
					
					this.mensajes.push({
						estado: true, 
						descripcion: "Registro guardado con exito!!"
					});

				}
			}						  
		},
		editarTarea(event, index) {
			this.tareas[index].estado = true;
			localStorage.setItem("tareas-vue", JSON.stringify(this.tareas));
			this.tareascompletas.push({
				nombre: this.tareas[index].nombre,
				descripcion: this.tareas[index].descripcion,
				estado: this.tareas[index].estado,
				completa: true
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
			
            return {
                'bg-danger' : this.contador <= 25,
                'bg-warning' : this.contador > 25 && this.contador < 75,
                'bg-success' : this.contador >= 75
            }
		},
		contador(){
			let resultado = 0;
			let tareasMarcadas = 0;
			let total = this.tareas.length;

			if(total>0){
				for(var x=0; x<this.tareas.length; x++){
					if(this.tareas[x].estado===true){
						tareasMarcadas++;
					}
				}
				resultado = tareasMarcadas/total;			
				resultado = Math.round(resultado*100);			
			}
						
			return resultado;
		},
		fechalimite(){
			let hoy = new Date();

			hoy.setHours(0,0,0,0);
			return hoy;
		}
    }
});
