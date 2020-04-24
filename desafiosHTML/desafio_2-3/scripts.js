const modalFull = document.querySelector('.full_modal');
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function () {
        const courseId = card.getAttribute('id');
        
        modalFull.classList.add('active')
        modalFull.querySelector('iframe').src =`https://rocketseat.com.br/${courseId}`;
    })
}

modalFull.querySelector('.close_modal').addEventListener("click", function () {
    modalFull.classList.remove('active')
    modalFull.querySelector('iframe').src =""
})