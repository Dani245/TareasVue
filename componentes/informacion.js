Vue.component("info", {
    /* html */
    template:
	`
    <div>
        <div class="panel panel-primary">
            <div class="panel-heading">Panel Heading</div>
            <div class="panel-body">Panel Content</div>
        </div>
        
        <h3>{{proyecto}}</h3>
        <h3>{{nombre}}</h3>
        <h3>{{dpi}}</h3>
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