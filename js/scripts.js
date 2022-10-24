function array(event) {
event.preventDefault();

const input1 = document.getElementById('input1').value;
const input2 = document.getElementById('input2').value;
const input3 = document.getElementById('input3').value;
let gatherArray = [input1, input2, input3];

const brandArray = gatherArray.push(gatherArray[0], gatherArray[1], gatherArray[2]);
console.log(gatherArray)

let ul = document.createElement('ul');
ul.append('');

let li = document.createElement('li');
li.append(brandArray)

document.body.append(ul);
document.body.append(li);
}



window.addEventListener('load', function() {
const form = document.getElementById('favorite');
form.addEventListener('submit', array);
});
