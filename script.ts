import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

document.addEventListener('click', e => {
  const target = e.target;
  if(!target.classList.contains('js-smooth-scroll')) return;
  e.preventDefault();
  const targetId = target.hash;
  document.querySelector(targetId).scrollIntoView({
    behavior: 'smooth', // auto, smooth
    block: 'start', // start, center, end, nearest
  });
});
