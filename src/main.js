
document.querySelector('#year')?.replaceChildren(
  document.createTextNode(new Date().getFullYear())
);
