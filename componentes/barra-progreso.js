Vue.component("barra", {
    /*html*/
	template: `
	<div>
        <div class="progress">
            <div class="progress-bar" role="progressbar" 
            :style="{'width': porcentaje+'%'}" aria-valuenow="25"
            aria-valuemin="0" aria-valuemax="100"
            :class="color">{{porcentaje}}%</div>
        </div>        
    </div>
    `,
    props: ['color','porcentaje']
});