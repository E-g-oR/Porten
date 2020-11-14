const SubMenuButton = document.querySelector('.sub-menu-button'),
  Menu = document.querySelector('.menu');
var MatchMedia = window.matchMedia('all and (max-width: 570px)');

const Top = () => {
  return `
  <div class="top">
    <div class="container">
      <div class="top__body">
        <div class="top__info info">
          <div class="info__phone">
            <a href="#">
              <!-- <img src="img/icons/phone.svg" alt="">  -->
              8 (812) 123-45-67
            </a>
          </div>
          <span class="info__week">Работаем 7 дней в неделю</span>
          <span class="info__time">9:00 — 18:00</span>
        </div>
        <a class="top__login" href="#">Войти/Регистрация</a>
      </div>
    </div>
  </div>
`
}


SubMenuButton.addEventListener('click', () => {
  SubMenuButton.classList.toggle('_menu_active');
  Menu.classList.toggle('_menu_active');
  if (!Menu.lastElementChild.classList.contains('top') && window.innerWidth <= 570) {
    Menu.insertAdjacentHTML('beforeend', Top());
  } else if (Menu.lastElementChild.classList.contains('top') && window.innerWidth > 570) {
    Menu.lastChild.remove();
  }

})
