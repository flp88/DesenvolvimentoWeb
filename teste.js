import { soma } from "./soma.js"
import { calculadora } from "./calculadora.js";
import { verificar } from "./verificar-triangulo.js";

soma(3, 2);
console.log('')
calculadora(2,1,'/');
calculadora(2,1,'-');
calculadora(2,1,'*');
calculadora(2,1,'+');
console.log('')
verificar(2, 2, 2);
verificar(1,2,1);
verificar(3, 4, 4);
verificar(4, 3, 4);
verificar(3, 4, 5);
verificar(0,0,0)
