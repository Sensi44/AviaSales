// Обновление лоадера
const startLoadingBar = (length) => {
  const bar1 = document.querySelector('.progress-bar');
  const bar2 = document.querySelector('.progress-bar_add');
  let y = length;
  y /= 100;
  bar1.style.width = `${y}%`;
  bar2.style.width = `${y}%`;
};

export default startLoadingBar;
