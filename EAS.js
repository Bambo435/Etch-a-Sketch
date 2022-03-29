const container = document.querySelector('#container');

//  we create a 'grid' of divs to be later turned to squares via CSS.
function makeGrid(num) {
  for (i= 0; i < num; i++) {
    let div = document.createElement('div');
    div.id = 'row';
    container.appendChild(div);
    for (j = 0; j < num; j++) {
      let div2 = document.createElement('div'); // As well as appending a set of 16 divs onto a row, we also attach an event listener to convert a square to red when the mouse hovers over it.
      div2.classList.add('square');
      div2.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'red';
      });
      div2.id = 'column';
      div.appendChild(div2);

  }
}
};
makeGrid(50);


