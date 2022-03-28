const container = document.querySelector('#container');


function makeGrid(num) {
  for (i= 0; i < num; i++) {
    var div = document.createElement('div');
    div.id = 'row';
    container.appendChild(div);
    for (j = 0; j < num; j++) {
      var div2 = document.createElement('div');
      div2.classList.add('square');
      div2.id = 'column' + i;
      div.appendChild(div2);
  }
}
}; 
makeGrid(50);
