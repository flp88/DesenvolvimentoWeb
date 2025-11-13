export function calculadora(a, b, op){
    let resultado = 0
    switch (op){
        case '+':
            resultado = a + b;
            console.log(resultado);
            break;
        case '-':
            resultado = a - b;
            console.log(resultado);
            break;
        case '*':
            resultado = a * b;
            console.log(resultado);
            break;
        case '/': 
            resultado = a / b;   
            console.log(resultado);
            break;
        default:
            resultado = 'operador invalido'
            console.log(resultado);   
    }

    
}