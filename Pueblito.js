
var vp = document.getElementById("villita");
var papel = vp.getContext("2d");
document.addEventListener("keydown", moverYoshi);
var yoshi ={
    url: "Images/Yoshi.png",
    cargaOK: false
}
var xYoshi = 290;
var yYoshi = 420;

function moverYoshi(evento)
{ 
  var movimiento = 25;
  var teclas = {UP:38, DOWN:40, LEFT:37, RIGHT:39};

    switch(evento.keyCode)
    {
        case teclas.UP:
        yYoshi = yYoshi - movimiento;
        dibujar();
        break;
        case teclas.DOWN:
        yYoshi = yYoshi + movimiento;
        dibujar();
        break;
        case teclas.LEFT:
        xYoshi = xYoshi - movimiento;
        dibujar();
        break;
        case teclas.RIGHT:
        xYoshi = xYoshi + movimiento;
        dibujar();
        break;
        default:
        console.log("otra tecla");
        break;
    }
}



var fondo = {
  url: "Images/tile.png",
  cargaOK: false
};
var vaca = {
    url: "Images/vaca.png",
    cargaOk: false
};
var xVaca = new Array();
var yVaca = new Array();

var cerdo = {
    url: "Images/cerdo.png",
    cargaOk: false
};
var xCerdo = new Array();
var yCerdo = new Array();

var pollo = {
    url: "Images/pollo.png",
    cargaOk: false
};
var xPollo = new Array();
var yPollo = new Array();



fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.objeto = new Image();
vaca.objeto.src= vaca.url;
vaca.objeto.addEventListener("load", cargarVaca);

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarCerdo);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarPollo);

yoshi.objeto = new Image();
yoshi.objeto.src = yoshi.url;
yoshi.objeto.addEventListener("load", cargarYoshi);


function cargarFondo()
{
   fondo.cargaOK = true;
   dibujar();
}
function cargarVaca()
{
   vaca.cargaOK = true;
   dibujar();
   mantenerPosicion();
}
function cargarCerdo()
{
   cerdo.cargaOK = true;
   dibujar();
   mantenerPosicion();
}
function cargarPollo()
{
   pollo.cargaOK = true;
   dibujar();
   mantenerPosicion();
}
function cargarYoshi()
{
   yoshi.cargaOK = true;
   dibujar();
}
var cantidadVaca = aleatorio(2,10);
var cantidadCerdo = aleatorio(2,10);
var cantidadPollo = aleatorio(2,10);

function mantenerPosicion()
{
    if(vaca.cargaOK)
    { 
      for(var i=0; i<=cantidadVaca; i++)
        {
        var x = aleatorio(0, 8);
        var y = aleatorio(0, 10);
        var x = x * 60;
        var y = y * 40;
        xVaca[i] = x
        yVaca[i] = y
        }
    
 
    }
    if(cerdo.cargaOK)
    { 
      for(var i=0; i<=cantidadCerdo; i++)
        {
        var x = aleatorio(0, 8);
        var y = aleatorio(10, 0);
        var x = x * 40;
        var y = y * 10;
        xCerdo[i] = x
        yCerdo[i] = y
        }
    
 
    }
    if(pollo.cargaOK)
    { 
      for(var i=0; i<=cantidadPollo; i++)
        {
        var x = aleatorio(0, 10);
        var y = aleatorio(0, 0);
        var x = x * 30;
        var y = y * 20;
        xPollo[i] = x
        yPollo[i] = y
        }
    
 
    }
}



function dibujar()
{

    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen,0,0);
    }
    
    if(vaca.cargaOK)
    {
        
        
        for(var i=0; i<=cantidadVaca; i++)
        {
         papel.drawImage(vaca.objeto,xVaca[i],yVaca[i]);
 
        }

    }
    if(cerdo.cargaOK)
    {
        
        for(var i=0; i<=cantidadCerdo; i++)
        {
         papel.drawImage(cerdo.objeto,xCerdo[i],yCerdo[i]);
        }
    }
    if(pollo.cargaOK)
    {
       
        console.log("pollo " + cantidadPollo);
        for(var i=0; i<=cantidadPollo; i++)
         {   
           papel.drawImage(pollo.objeto,xPollo[i],yPollo[i]); 
         }
    }
    if(yoshi.cargaOK)
    {
      papel.drawImage(yoshi.objeto,xYoshi,yYoshi);
    }
  

}

function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random()*(maxi-min+1))+min;
    return resultado;
}
