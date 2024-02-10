
interface Component {
   /* id: number;
    nombres: string;
    appaterno: string;
    apmaterno: string;
    docidentidad: number;
    correo: string;
    celular: number;

    constructor(nuevoid:number, nuevonombres:string, nuevoappaterno:string, nuevoapmaterno:string, nuevodocidentidad:number, nuevocorreo:string,nuevocelular:number){
        this.id = nuevoid;
        this.nombres=nuevonombres;
        this.appaterno=nuevoappaterno;
        this.apmaterno=nuevoapmaterno;
        this.docidentidad=nuevodocidentidad;
        this.correo=nuevocorreo;
        this.celular=nuevocelular;
    }

        verificarCliente(){
            if(this.id > 100 && this.id < 9999)
            {
                console.log("Cliente id "+ this.id +"existe")
                return "Cliente id "+ this.id +"existe";
            }       
        }
    */
   //request(): void;
   operation(): string;
}

//let p1 = new Cliente(8888,'Dalila','Ramos','Li',75368455,'dalilacde@gmail.com',9879879897)
