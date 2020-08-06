// -------VARIABLES PARA TODOS LOS EJEMPLOS---------
const numeros =[1,2,3,4,5,6,7,8,9];

const mascotas =[
    {nombre: 'Susi', edad: '3', tipo: 'gato'},
    {nombre: 'docky', edad: '5', tipo: 'gato'},
    {nombre: 'lassi', edad: '2', tipo: 'perro'},
    {nombre: 'brandon', edad: '3', tipo: 'perro'},
    {nombre: 'fifi', edad: '3', tipo: 'perro'},
];

const anidados = [1,[2,3,[4,5]],6,7,[8]];

// --------------- ARRAY REDUCE--------------------
// nos devuelve un nuevo elemento que se va acumulando, recibe el acumulaor y el iterador
//const reducido = [].reduce(acumulador,valorActual) => nuevoAcumalador;

//suma con reduce
const resultado = numeros.reduce((ac,el)=>ac+el,0);
    // console.log(`suma con reduce: ${resultado}`);


//covertimos suma con reduce a function para usarla mas adelante
//suma con reduce en funcion
const suma1 = (arr)=>{

    const sumado = arr.reduce((ac,el)=>ac+el,0);

    return  sumado;
    
}
     //console.log(`suma con reduce: ${suma1(numeros)}`);


//suma sin reduce -> MALA FORMA, NO AHCERLOS
const suma2 = (ar)=>{
    let acumulado = 0;
    for(let i=0; i<ar.length; i++){

        acumulado += ar[i];
    }
    return acumulado;
}
    //console.log(`suma sin reduce ${suma2s(numeros)}`);



//indexar elementos de un objeto con reduce
const indexado = mascotas.reduce((ac,el)=>({...ac,[el.nombre]: el,}),{});
    // console.log(indexado);


//dejar planos arreglos anidados
const planos = anidados.reduce((ac,el)=>ac.concat(el),[]);
const planos2 = planos.reduce((ac,el)=>ac.concat(el),[]);
    // console.log(planos2);

// --------------- FIN ARRAY REDUCE--------------------



// ------------------ ARRAY MAP--------------------------
//nos devuelve un array de igual longitud del que se le aplica el map(), pero con la funcionalidad que le demos

//multiplicar cada dato x2
const multiplicados = numeros.map(x => x * 2);
    //console.log(`Numeros multiplicados *2 -> ${multiplicados}`);


//formar parejas de un arreglo
const parejas = numeros.map(x => [x,x]);
    //console.log(parejas);


// sacar el promedio de edad, del areglo de mascotas
//sacamos las edades del arreglo
const getEdad = mascotas.map(x => parseInt(x.edad));

//llamamos a la funcion de suma con reduce para sumar todas las edade
const sumandoEdad = suma2(getEdad);
//impimimos el promedio
    //console.log(`La edad promedio de las mascotas es: ${sumandoEdad / getEdad.length}`);


//------------------------FIN DE ARRAY MAP-----------------------



//----------------------ARRAY FILTER----------------------
// nos crea otro array de igual o menor cantidad de elemntos
//filtado por nombre
const filtrado = mascotas.filter(x => x.nombre === 'Susi');
//filtrado por rango de edad
const filtrado2 = mascotas.filter(x => parseInt(x.edad) <3);

console.log(filtrado2);





















