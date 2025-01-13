export const nav = () => {
  const $nav = document.querySelector("#js-nav");
  // クリックされた時に
  const $navToggle = document.querySelector("#js-nav-toggler");
  const ACTIVE_CLASS = "is-active";
  // この処理を
  const toggleNav = () => {
    // js-navのクラスを全て取得する
    $nav.classList.toggle(ACTIVE_CLASS);
    $navToggle.classList.toggle(ACTIVE_CLASS);
  };
  // 実行する
  $navToggle.addEventListener("click", toggleNav);
};
