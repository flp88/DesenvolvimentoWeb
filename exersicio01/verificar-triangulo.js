export function verificar(a, b, c){
    if ( ((a+b > c) && (a+c > b) && (b+c > a))){
        if (a==b && a==c && b==c){
            console.log('Equilatero');
        }else if (a==b || a==c || b==c ){
            console.log('Isoseles');
        }else {
            console.log('Escaleno');
        }
        
    }else{
        console.log('Não é um triangulo')
    }    
}