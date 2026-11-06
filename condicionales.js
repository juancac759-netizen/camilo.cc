function algoritmoliquidacion() {
    let nombre = parseFloat(prompt("ingrese el nombre del vendedor :"));
    let ventas = parseFloat(prompt("ingrese el valor de las ventas del mes"));
    let antiguedad = parseFloat(prompt("ingrese los años de antiguedad"));
    let porcentaje = 0;
    let comision = 0;

    if (ventas < 3000000) {
        porcentaje = 0;
    } else if (ventas >= 8000000 && antiguedad >= 2) {
        porcentaje = 10;
    } else {
        porcentaje = 5;
    }
    comision = ventas * porcentaje / 100;
    alert("liquidacion de comision es:" + comision);
    alert("el vendedor es:" + nombre);
    alert("las ventas realizadas fueron:" + ventas);
    alert("porcentaje de comision:" + porcentaje);
    alert("el valor de la comision es:$" + comision);
}

function algoritmodeprestamo() {
let nombre=prompt("ingrese el nombre del solicitante");
let ingresos=parseFloat(prompt("ingrese sus ingresos mensuales"));
let gastos=parseFloat(prompt("ingrese sus gastos mensuales"));
let historial=prompt("ingrese si su historial es positivo y negativo");
let disponible=ingresos-gastos;
let resultado="";
if(ingresos<= gastos){
    resultado="solicitud rechasada por capacidad para el pago";
}else if (historial=="negativo"){
    resultado="solicitud rechasada por historial crediticio";
}else if (historial=="positivo"&&disponible>=1000000){
    resultado="solicitud aprobada";
}else{
    resultado="solicitud pendiente de revision";
}
alert("nombre del solicitante es"+nombre);
alert("su dinro disponible es:$"+disponible);
alert("el resultado de su retiro es:"+resultado);

}

function evaluaciondesempeño(){
    let nombre=prompt("ingrese el nombre del aprendiz");
    let nota1=parseFloat(prompt("ingrese la primera nota"));
    let nota2=parseFloat(prompt("ingrese la segunda nota"));
    let nota3=parseFloat(prompt("ingrese la tercera nota"));
    let asisitencia=parseFloat(prompt("ingrese el porcentaje de asistencia"));
    let promedio=(nota1+nota2+nota3)/3;
    let resultado="";

    if (asisitencia<80){
        resultado="no aprueba por inasistencia";
    }else if(proemdio<60){
        resultado="no aprueba no le da el promedio academico";
    }else {
        resultado="aprobado";
    }
alert(" el nombre del aprendiz es:"+nombre);
alert("el promedio de las tres notas es:"+promedio);
alert("el resultado de la asistencia del aprendiz es:"+asisitencia);
alert("el resultado de si aprobo o no el aprendiz es:"+resultado);
}

