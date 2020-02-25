let cont = 0;
let program = " ";
let sex = " ";
let nstudents =  0;
let n1= 0;
let n2= 0;
let n3= 0;
let n4= 0;
let n5= 0;
let contFF = 0;
let contfM = 0;
let contSF = 0;
let contSM = 0;
let promF = 0;
let promS = 0;
let nstudentsc = 0;

nstudents = parseInt(prompt("Ingrese el número de alumnos a evaluar"));
nstudentsc = nstudents;
while(cont <= (nstudents-1)){

    cont ++; 

    program = prompt("Ingrese el nombre del programa del alumno (SISTEMAS O FINANZAS)");
    sex = prompt("Ingrese el sexo del alumno (F/M)");

    n1 = prompt("Ingrese la nota 1");
    n2 = prompt("Ingrese la nota 2");
    n3 = prompt("Ingrese la nota 3");
    n4 = prompt("Ingrese la nota 4");
    n5 = prompt("Ingrese la nota 5");

    
let n1c = parseInt(n1);
let n2c = parseInt(n2);
let n3c = parseInt(n3);
let n4c = parseInt(n4);
let n5c = parseInt(n5);

let prom = (n1c+n2c+n3c+n4c+n5c)/5;
console.log("Promedio del alumno #:" + cont+": "+ prom);

if(program == "finanzas" || program == "FINANZAS"){

    
    promF = (promF + prom);

    if(sex == "f" || sex== "F"){
       
         contFF = contFF + 1; 

    } else if(sex == "m" || sex== "M"){
       
         contfM = contfM + 1; 
        
    }
}
else if(program == "sistemas" || program == "SISTEMAS"){

   promS = (promS + prom);

    if(sex == "f" || sex== "F"){
       
         contSF = contSF + 1; 

        
        
    } else if(sex == "m" || sex== "M"){
       
         contSM = contSM + 1; 
        
    }
}

}

console.log("El promedio del programa de finanzas es: " + promF/nstudentsc);
console.log("La mujeres en finanzas son: " + contFF);
console.log("Los hombres en finanzas son: " + contfM);
console.log("El promedio del programa de sitemas es: " + promS/nstudentsc);
console.log("La mujeres en sistemas son: " + contSF);
console.log("Los hombres en sistemas son: " + contSM);

console.log("Total Alumos de Sistemas: " + (contSF+contSM));
console.log("Total Alumos de Finanzas: " + (contFF+contfM));
console.log("Total Alumos: " + cont);
  
