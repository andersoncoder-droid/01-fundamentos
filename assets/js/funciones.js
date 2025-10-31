function saludar(nombre) {
  console.log(arguments);
  console.log('Hola ' + nombre);
}

const saludar2 = function (nombre) {
  console.log('Hola ' + nombre);
};

const saludarFlecha = () => {
  console.log('Hola Flecha');
};

const saludarFlecha2 = (nombre) => {
  console.log('Hola ' + nombre);
};

saludar('Obi', 20, false, 'Colombia');
// saludar2('Obi');
saludarFlecha();
saludarFlecha2('Obiwan');
