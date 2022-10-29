var produto = '';
var preco = '';
var produtos = [];
var precos = [];
var parar = '';
var precoReajustado = [];
var contador = 0;

function verLista(produtos){
    for(let i = 0; i < produtos.length; i++) {
        const element = produtos[i];
        preco = prompt(`Digite o preço para o produto ${element}`); 
        precos.push(preco); 
    }
    
    precos = precos.map(Number);
    console.log(precos);

    for(let i = 0; i < precos.length; i++) {
        const element = precos[i];
        if(element < 150 ){
            precoReajustado.push(element + (element * 0.1));
        }else{
            precoReajustado.push('Sem reajuste');
        }
    }

    for(let i = 0; i < produtos.length; i++){
        const element = produtos[i];
        console.log('Produto: ',element,' Preço: ',precos[i],' Preço Reajustado: ',precoReajustado[i]);
    }

    return console.log('Pedido finalizado');
}

while(produto != 'sim'){
    produto = prompt("Digite o nome do produto:");
    produtos.push(produto);
}

verLista(produtos);
