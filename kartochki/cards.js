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

function createManyCards(array, cont){
    array.forEach(item => {
        cont.insertAdjacentHTML('beforeend', createCard(item))
    });
}

function createCard({image, head, body}){
    return `
        <article class="card">
            <img src="${image}" alt="${head}">
            <h2>${head}</h2>
            <p>${cropText(body)}</p>
            <div class="btns">
                <button id="btn-delete">Убрать</button>
                <button id="btn-info">Подробнее</button>
            </div>
        </article>    
    `
}

function cropText(text, length = 20){
    return text.substr(0, length)+"..."
}

document.querySelectorAll('.btn-info').forEach(btn => {
    btn.addEventListener('click', showinfo())
});

const modalWrapper = document.querySelector('.modal-wrapper');
const btnClose = document.querySelector('.modal-close');

btnClose.addEventListener('click', closeModal())

modalWrapper.addEventListener('click', e =>{
    if(e.target === e.currentTarget){
        closeModal();
    }
    console.log(e.target);
    console.log(e.currentTarget);
})

function showinfo(e) {


    modalWrapper.classList.remove('hide');
}

function closeModal(e) {
    modalWrapper.classList.add('hide');
}
