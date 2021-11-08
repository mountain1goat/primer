let cards = [
{
    id: "1",
    head: "Заголовок 1",
    body: "Text 1 text text text text text text text text text text text text texttexttexttext",
    image: "img 1" 
},
{
    id: "2",
    head: "Заголовок 2",
    body: "Text 2 text text text text text text text text text text text text texttexttexttext",
    image: "img 2" 
},
{
    id: "3",
    head: "Заголовок 3",
    body: "Text 3 text text text text text text text text text text text text texttexttexttext",
    image: "img 3" 
}  
]

let cardsCont = document.querySelector('.cards');
createManyCards(cards, cardsCont);

function createManyCards(array){
    array.forEach(item => {
        cont.insertAdjacentHTML('beforEend', createCard(item))
    });
}

function createCard(item){
    return `
        <article class="card">
        <img src="${item.image}" alt="${item.head}">
        <h2>${item.head}</h2>
        <p>${cropText(item.body)}</p>
        <div class="btns">
            <button id="btn1">Убрать</button>
            <button id="btn2">Подробнее</button>
        </div>
        </article>    
    `
}

function cropText(text, length = 20){
    return text.substr(0, length)+"..."
}