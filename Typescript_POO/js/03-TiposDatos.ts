// datos personalizado
type alfanumerico = string | number;

// string
let cadena: string = "Rojas Alvarado Luis Enrique";
console.log(cadena);

// number
let numero: number = 12;
console.log(numero);

// boleano
let verdadero_falso: boolean = true;
console.log(verdadero_falso);

// Any
let cualquiera: any = "hola";
console.log(cualquiera);

// Array
var lenguajes: Array<string> = ['PHP','JS', 'C'];
console.log(lenguajes);

let years: any[]= [12,14, 'hola', lenguajes];
console.log(years);

// multiples tipos de datos
let cadena2: string | number = "Luis Enrique";
console.log(cadena2);

cadena2 = 3;
console.log(cadena2);

// let vs var
var numero1 = 10;
var numero2 = 12;

if (numero1 == 10){
    let numero1 = 44;
    var numero2 = 55;

    console.log(numero1, numero2);
}
console.log(numero1, numero2);

