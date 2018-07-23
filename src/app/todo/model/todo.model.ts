export class Todo {
    id: number;
    completado: boolean;
    
    constructor( public texto:string ) {
        this.completado = false;
        this.texto = this.texto.charAt(0).toLocaleUpperCase() + this.texto.slice(1) 

        this.id = Math.random();
    }
}