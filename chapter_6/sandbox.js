// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   console.log('you clicked me');
// });

//const items = document.querySelectorAll('li');
const ul = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const myli = document.createElement("li");
  myli.textContent = "something new to do";
  ul.append(myli);  
});


// How can we rewrite this to...
/*
const items = document.querySelectorAll("li");

items.forEach(item => {
  item.addEventListener('click', e => {
    //e.target.style.textDecoration = 'line-through';
    e.target.remove();
  });
});
*/


ul.addEventListener('click', e => {
  console.log(e.target); // target is the li, not the ul
  if(e.target.tagName === "LI"){
    e.target.remove();
  }
   

});




