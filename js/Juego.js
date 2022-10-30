//he hecho juego y animales en el mismo basicamente porque no importaba bien 
//las fotos de los pajaros es muy grande asi que si le pulsas al rededor tambien cae

class Juego {
    constructor(){
        this._arrayAnimales=[];
        this._puntuacion=0;
       document.getElementById("9999").innerHTML=this._puntuacion;
    }
    ActualizarPuntuacion(){
document.getElementById("9999").innerHTML=this._puntuacion;
    }
}

//crear todos lo llamo en cada nivel para rellenar 
//cada nivel el num será mas grande
function crearTodos(num){   
let arrayb=[];
for(let i=0;i<num;i++){
    if(i%2==0){ arrayb[i]=new Animal(i,"Bueno",(30-i),i);}
    else{arrayb[i]=new Animal(i,"Malo",(30-i),i); }
}
return arrayb;
}


/////////////////////////Animales//////////////////////////////7


//La pantalla de perder//
var b1 = document.createElement("img");
b1.src="./images/gameoverphrase.jpg";
b1.style="position:absolute ;z-index:3000 ;width: 100% ;height: 100%;top:0%";
/////////////////////////////

class Animal{
    constructor(id,tipo,tamanio,velo){
      this._id=id;
      this._tipo=tipo;
      this._tamanio=tamanio;
      this._velo=velo;
      this._x=0;
      this._estado="vivo";
    }
    setEstado(valor){this._estado=valor;}
        
    MostrarAnimal(){
        let a1 = document.createElement("img");
       //mostrar me vale para buenos y malos 
       let auxlef=-25;
       let auxmovi=true;
///MALOS
       if(this._tipo=="Malo"){
        a1.id=this._id;
        a1.src="./images/m3.png";
        if(this._tamanio>20){
            a1.style=" z-index:2000; position:absolute ;left:-25% ;width: "+(this._tamanio-10)+"% ;height: "+(this._tamanio-10)+"%;top:"+(Math.floor(Math.random()  * (80 - 1) + 1))+"%";
        }else{
            a1.style=" z-index:2000; position:absolute ;left:-25% ;width: "+this._tamanio+"% ;height: "+this._tamanio+"%;top:"+(Math.floor(Math.random()  * (80 - 1) + 1))+"%";
        }
       
    
        document.body.appendChild(a1);

        //cunado se dispara a un malo se borra del html,
        //se pone en el array a ese bicho que esta muerto y
        // se añade puntos y se actualiza en pantalla
        // y se acaba el interval
        document.getElementById(this._id).onclick =function(){
          a1.parentNode.removeChild(a1);
          todo._arrayAnimales[this.id].setEstado("muerto");
          todo._puntuacion+=5;
          todo.ActualizarPuntuacion();
          clearInterval(z);
        };

        
       var z= setInterval(function(){
            
           if(auxmovi){ a1.src="./images/m3.png";
           } else{ a1.src="./images/nuevo3.png"; }
        
        if(auxlef>=100){
            if(paraono()==false) document.body.appendChild(b1);
            clearInterval(z);
        }

           a1.style.left=auxlef+"%";
           auxlef+=5;
           auxmovi=!auxmovi;
         },500-this._velo*15);
        }
        
///BUENOS
        else{
            a1.id=this._id;
            a1.src="./images/Sin_nombre.png";
            a1.style=" z-index:1000; position:absolute ;left:-25% ;width: "+this._tamanio+"% ;height: "+this._tamanio+"%;top:"+(Math.floor(Math.random() * (85 - 1) + 1))+"%";
        
           document.body.appendChild(a1);
            document.getElementById(this._id).onclick =function(){
                document.body.appendChild(b1);
            };
           ///Aqui es donde esta el unico fallito que tengo que es que 
           ///el clear interval no me lo coge bien nose porque 
           ///y si haces el nivel tres por ejemplo y despues el nivel1
           /// los ids esos aun no han acabado el intervalo y se borran los que estan fuera de pantalla
          var x=  setInterval(function(){
               if(auxmovi){ a1.src="./images/Sin_nombre.png";}
               else{a1.src="./images/Sin_nombre2.png";}

               if(auxlef>=100){
                clearInterval(x);
            }
               a1.style.left=auxlef+"%";
               auxlef+=5;
               auxmovi=!auxmovi;
             }, 500-this._velo*15);
        }
        }    
}
///funcion estatica para comprobar la variable global todo///
///mira si estan todos los malos muertos//
function paraono(){
    for(let i=0 ;i<todo._arrayAnimales.length;i++){
        if(todo._arrayAnimales[i]._tipo=="Malo"){
            if(todo._arrayAnimales[i]._estado=="vivo"){
                return false;
            }
        }
    }
    return true;
}

///me creo una variable lobal donde voy a guardar la puntuacion 
//y  un array de enemigos , el arrray de enemigos lo relleno desde cero 
//en cada nivel con la funcion creartodos
//Para solucionar el fallo ese podria ver creado un monton de animales y en el 
//nivel uno mostrar los primeros despues en el 2 los que van despues y asi
//pero como no me va el cleaarineterval al final el nivel 5 tendria 
//40 intervaal de los pajaros abiertos y se me lagearía porque es muy poco eficiente
var todo=new Juego();
document.getElementById("r1").onclick =nivel1;
function nivel1(){
  todo._arrayAnimales=crearTodos(6);
  for(let i=0 ;i<6;i++){
   todo._arrayAnimales[i].MostrarAnimal();   
  }
}
document.getElementById("r2").onclick =nivel2;
function nivel2(){
  todo._arrayAnimales=crearTodos(10);
  for(let i=0 ;i<10;i++){
   todo._arrayAnimales[i].MostrarAnimal();   
  }
}
document.getElementById("r3").onclick =nivel3;
function nivel3(){
  todo._arrayAnimales=crearTodos(14);
  for(let i=0 ;i<14;i++){
   todo._arrayAnimales[i].MostrarAnimal();   
  }
}

document.getElementById("r4").onclick =nivel4;
function nivel4(){
  todo._arrayAnimales=crearTodos(18);
  for(let i=0 ;i<18;i++){
   todo._arrayAnimales[i].MostrarAnimal();   
  }
}
document.getElementById("r5").onclick =nivel5;
function nivel5(){
  todo._arrayAnimales=crearTodos(22);
  for(let i=0 ;i<22;i++){
   todo._arrayAnimales[i].MostrarAnimal();   
  }
}