import "./styles.css";

// Ejercicio: Descuento Octubre
/*
•Una tienda al cumplir años en Octubre ofrece 
un descuento del 15% a sus clientes en todas 
sus compras
•Desarrolle un algoritmo que dada una compra: 
precio unitario, cantidad y el mes, indicados 
por el usuario, determine si el cliente tiene 
descuento o no.
*/
let mes: string | null = prompt(
  "Ingrese el mes de la compra.",
  "Por ejemplo: Octubre."
);

if (mes === "octubre") {
  alert(
    "¡Su compra tiene un descuento del 15%! Este mes celebramos otro cumpleaños de nuestra querida tienda y queremos ofrecer a nuestros clientes este descuento en todas sus compras."
  );
}
