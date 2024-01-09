const nav = document.querySelector('.navbar-collapse')
const footerYear = document.querySelector('.footer__year');
const btns = document.querySelector('.btn')


const buttonAlert = () => {
  alert("It's only UI Design\nThere is no backend there");
}

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}
handleCurrentYear();

document.addEventListener('click', () => {
  if (nav.classList.contains('show')) {
    nav.classList.remove('show')
  }
})

btns.addEventListener('click', buttonAlert)