let container = document.querySelector('#container');

//  we create a 'grid' of divs to be later turned to squares via CSS.
function makeGrid(num) {
  for (i= 0; i < num; i++) {
    let div = document.createElement('div');
    div.classList.add('row')
    container.appendChild(div);
    for (j = 0; j < num; j++) {
      let div2 = document.createElement('div'); // As well as appending a set of 16 divs onto a row, we also attach an event listener to each square so that every square will change colour.
      div2.classList.add('square');
      div2.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'purple';
      });
      div.appendChild(div2);

  }
}
};

makeGrid(50); // default number of squares that will appear upon loading page

function reset() {
  let input = prompt('How many squares? (50 = 50x50)', '');
  const divs = document.getElementById('container');
  divs.textContent = '';
  makeGrid(input);
};



const btn = document.querySelector('#btn');
btn.addEventListener('click', reset); 

