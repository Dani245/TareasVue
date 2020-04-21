Vue.component("info", {
    /* html */
    template:
	`
    <div>
        <div class="card">
            <div class="card-header">
            Información
            </div>
            <div class="card-body">
                <h3 class="card-title">{{proyecto}}</h3>
                <hr>
                <h4>{{nombre}}</h4>
                <hr>
                <h4>{{dpi}}</h4>
            </div>
        </div>        
	</div>
	`,
    data(){
        return{
            nombre: "José Danilo De Paz Martínez",
            dpi: "3082901350608",
            proyecto: "Proyecto Vue.js"
        }
    }
});