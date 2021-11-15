/* 4.- Damos NAMESPACING (Espacios para el mundo, cuerpo y motor)
usando el motor físico y hacemos referencia a los espacios*/ 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup(){
  // 1.- Creamos el Lienzo  
  var canvas = createCanvas(400,400);
  // 5.- Creamos las leyes del Mundo
    engine = Engine.create();
  // 6.- Creamos el Mundo con las leyes
    world = engine.world;
  // 11.- Cambiamos la caracteristica del cuerpo (gravedad) y se lo agregamos al cuerpo(7.-)
    var object_options ={
      isStatic : true
    }
    // 7.- Creamos el objeto(p cuerpo)
    object = Bodies.rectangle(200,100,50,50, object_options);
    // 8.- Agregamos al cuerpo el mundo creado
    World.add(world,object);
    // 7.1.- Lo mostramos por consola
    console.log(object);
    console.log(object.position.x);
    console.log(object.position.y);
}

function draw(){
    background(0);
    // 10.- Actualizamos al cuerpo
    Engine.update(engine);
    // 3.- Centramos al objeto(cuerpo)
    rectMode(CENTER);
    // 2.- Agregamos un objeto al centro del lienzo
    // 9.- El cuerpo toma la posición del objeto
    rect(object.position.x, object.position.y,50,50);
}