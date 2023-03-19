let myDom = document; //document es un objeto global



class Button {
    constructor(parentID, text) {
        this.parentID = parentID;
        this.text = text;
        // completa this.text
    }

    // Diseño inventado por el profe...
    render(){
        let myApp = document.getElementById(this.parentID);

        //quise ejecutar un evento onclick pero no pude hacerlo funcionar.
        // const myButtonHTML = myApp.innerHTML + "<button onclick= " + "presionar()>"+ this.text + "</button>";
        
        const myButtonHTML = myApp.innerHTML + "<button>"+ this.text + "</button>";

        myApp.innerHTML = myButtonHTML; // VAmos a escribir el html para que se 
        // dibuje un boton con el texto de this.text
    }
}

// Construimos el objeto botón y llamamos al render

function renderButton(text){
    let myButon = new Button("app", text);
    myButon.render();
 }

function renderInput(type){
    let input_type = "none";
    switch(type){

        case "Password":
        input_type = "password"
        break;

        case "E-mail":
            input_type = "email"
            break;

        default: 
        input_type = "text"
        break;
    }
    let myInput2 = new Input("objInput", input_type);
    myInput2.render();
}

// esta función era para hacer que al presionar el botón se genere un alerta
// era para probar si funcionaba para luego al seleccionar el botón se creara el Input 

/*function presionar2(){
    alert("Boton presionado" );
}*/


// lo mismo pero con objeto Input

class Input {
    constructor(parentID, type) {
        this.parentID = parentID;
        // if type != opciones validas... entonces poner un valor por default.
        this.type = type;
    }

    render() {
        let myApp = document.getElementById(this.parentID);

        const myInputHTML = myApp.innerHTML + "<input type="+ this.type + ">";

        myApp.innerHTML = myInputHTML; // VAmos a escribir el html para que se 
       
    }   
}




let arrayDeInput = ["Usuario", "Apellido","Password", "E-mail"];

 //funcion para filtrar
 let arrayFiltrado = arrayDeInput.filter(element => element=="Password");

 //aplicar el filtrado
 arrayFiltrado.forEach(function (element) {
    renderInput(element);
});


//función original para dibujar los elmentos del array
/*
arrayDeInput.forEach(function (element) {
    renderInput(element);

}); */



////Prueba para ver si seleccionando un botón, se dibuja el Input
let mySuperArrayofStrings = ["Usuario", "Apellido", "Password", "E-mail"];

mySuperArrayofStrings.forEach(element => {
    renderButton(element)
});