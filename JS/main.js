const produtosVenda = [
    {
        id: 0,
        produto : "Camisa",
        img: "./image.jpg",
        quantidade: 0
    },
    {
        id: 1,
        produto : "Shorts",
        img: "./image.jpg",
        quantidade: 0
    },
    {
        id: 2,
        produto : "Blusa",
        img: "./image.jpg",
        quantidade: 0
    },
    {
        id: 3,
        produto : "Calça",
        img: "./image.jpg",
        quantidade: 0
    },
    {
        id: 4,
        produto : "Jeans",
        img: "./image.jpg",
        quantidade: 0
    },
];

    vitrine = () => {
        var mostraProdutos = document.querySelector('.produtos');
        produtosVenda.map((val)=>{
            mostraProdutos.innerHTML+='<div class="Pro-single"> <img src="' + val.img + '" /><h1>' + val.produto + '</h1><a key="' + val.id + '" href="#" >Adicionar ao carrinho</a></div>';
        })
    }
    vitrine();

    carrinho = () => {
        var mostrarCarrinho = document.querySelector('.carrinho');
        mostrarCarrinho.innerHTML="";
        produtosVenda.map((vel)=>{
            if(vel.quantidade > 0){
                mostrarCarrinho.innerHTML+='<p>' + vel.produto + ' | ' + vel.quantidade + '</p>';
            };
        });
    }

    var links = document.getElementsByTagName('a');

    for(var i = 0; i < links.length; i++){
        links[i].addEventListener("click", function(){
            let key = this.getAttribute('key');
            produtosVenda[key].quantidade++;
            carrinho();
            return false;
        })
    }