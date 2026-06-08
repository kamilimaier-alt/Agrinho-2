const alimentos = {

Janeiro:[
{
nome:"Manga",
img:"images/manga.jpg",
descricao:"Alta disponibilidade e menor impacto ambiental."
},
{
nome:"Melancia",
img:"images/melancia.jpg",
descricao:"Produção abundante no verão."
},
{
nome:"Tomate",
img:"images/tomate.jpg",
descricao:"Menor necessidade de cultivo artificial."
}
],

Fevereiro:[
{
nome:"Banana",
img:"images/banana.jpg",
descricao:"Excelente safra."
},
{
nome:"Abacaxi",
img:"images/abacaxi.jpg",
descricao:"Mais sabor e menor custo ambiental."
}
],

Março:[
{
nome:"Maçã",
img:"images/maca.jpg",
descricao:"Período ideal de colheita."
},
{
nome:"Pera",
img:"images/pera.jpg",
descricao:"Grande disponibilidade regional."
}
],

Abril:[
{
nome:"Abóbora",
img:"images/abobora.jpg",
descricao:"Produção sustentável."
},
{
nome:"Batata-doce",
img:"images/batata.jpg",
descricao:"Baixa necessidade de refrigeração."
}
],

Maio:[
{
nome:"Laranja",
img:"images/laranja.jpg",
descricao:"Safra nacional."
}
],

Junho:[
{
nome:"Morango",
img:"images/morango.jpg",
descricao:"Melhor época do ano."
}
],

Julho:[
{
nome:"Tangerina",
img:"images/tangerina.jpg",
descricao:"Safra abundante."
}
],

Agosto:[
{
nome:"Couve-flor",
img:"images/couveflor.jpg",
descricao:"Cultivo favorecido pelo clima."
}
],

Setembro:[
{
nome:"Brócolis",
img:"images/brocolis.jpg",
descricao:"Produção local facilitada."
}
],

Outubro:[
{
nome:"Mamão",
img:"images/mamao.jpg",
descricao:"Grande disponibilidade."
}
],

Novembro:[
{
nome:"Uva",
img:"images/uva.jpg",
descricao:"Próxima da safra principal."
}
],

Dezembro:[
{
nome:"Pêssego",
img:"images/pessego.jpg",
descricao:"Colheita em alta."
}
]

};

const select = document.getElementById("mes");
const cards = document.getElementById("cards");

select.addEventListener("change", () => {

cards.innerHTML = "";

const lista = alimentos[select.value];

if(!lista) return;

lista.forEach(item => {

cards.innerHTML += `
<div class="card">

<img src="${item.img}" alt="${item.nome}">

<div class="card-content">
<h3>${item.nome}</h3>
<p>${item.descricao}</p>
</div>

</div>
`;

});

});