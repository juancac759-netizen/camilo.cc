function registrodeventas(){
    let cantidad=parseInt(prompt("cuantas ventas se van a registrar"));
    let total=0;
    let contador=0;
    let mayor=0;

    for(let i=1; i<=cantidad; i++){
        let venta=parseFloat(prompt("ingrese el valor de la venta"));
        total=total+venta;
        
        if(venta>2000000){
            contador++;
        }
        if(venta>mayor){
            mayor=venta;
        }
    }
    let promedio=total/cantidad;
    alert("la cantidad de ventas al dia son:"+cantidad);
    alert("el total de lo vendido al dia es."+total);
    alert("el promedio de ventas es:"+promedio);
    alert("las ventas que fueron mayores a 2000000 son:"+contador);
    alert("la venta mas alta del dia es:$"+mayor);

}

function registrodetemperatura(){
    let dias=parseInt(prompt("ingrese la cantidad de dias"));
    let suma=0;
    let mayor=0;
    let menor=0;
    let contador=0;

    for(let i=1; i<=dias; i++){
        let temperatura=parseFloat(prompt("ingrese la temperatura del dia"+i));
        suma=suma+temperatura;
        if(i==1){
            mayor=temperatura;
            menor=temperatura;
        }
        if(temperatura<menor){
            menor=temperatura;
        }
        if(temperatura>30){
            contador++;
        }
    }
    let promedio=suma/dias;
    alert("los dias registrados son:"+dias);
    alert("el promedio de lo dias y temperatura es:"+promedio);
    alert("la temperatura mayor es:"+mayor);
    alert("la temperatura menor es:"+menor);
    alert("los dias de mayores a 30 grados:"+contador);
}

function registrodenumeros(){
    let cantidad=parseInt(prompt("cuantos numeros va a ingresar"));
    let suma=0;
    let positivos=0;
    let negativos=0;
    let ceros=0;
    let mayor=0;

    for (let i=1; i<=cantidad; i++){
        let numero=parseInt(prompt("ingrese el numero"));
        suma=suma+numero;
        if (numero>0){
            positivos++;
        }else if(numero<0){
            negativos++;
        }else{
            ceros++;
        }
        if(i==1||numero>mayor){
            mayor=numero;
        }
    }
    let promedio=suma/cantidad;
    alert("el resultado de la uma de los numeros es:"+suma);
    alert("el resultado de si es poritivo o nergativo es:"+positivos);
    alert("el resultado de que si es negativo o positivo es"+negativos);
    alert("el resultado si son ceros es:"+ceros);
    alert("el resultado de determinar el numero mayor es:"+mayor);
}