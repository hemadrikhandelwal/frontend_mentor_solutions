

const img = document.querySelectorAll('.expandBtn');


img.forEach((item)=>{
    item.addEventListener('click',()=>{
     const article = item.closest('article');
    const answer = article.querySelector('p');
    answer.classList.toggle('hidden');

    const isOpen = !answer.classList.contains('hidden');
    item.src = isOpen ? './assets/images/icon-minus.svg'
      : './assets/images/icon-plus.svg';
    })
})