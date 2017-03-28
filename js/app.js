var pizzaName = ['Four Loop', 'Conditional Love', 'The DOM','Conjunction Function'];

var price = [44.44, 22.14, 16.99, 17.02];

var description = ['Spin your wheel with this quattro cheese mix doused in garlic and truffle oil. Loop there it is!', 'This island favorite doesn\'t give you a chance to say no. Korean bulgogi meat, kim chee, mozzarella cheese and onions always returns true! Boo~Ya!', 'This dynamic blend of Duck, Olives and Mango will change your original thought of what a pizza should be. The only thing constant is change for this bad boy!', 'Create your own pie by passing in handpicked fresh ingredients. Invoke your appetite and creativity! Mamma Mia return back to glory!'];


var forLoop = {
  price: 44.44,
  description: 'Spin your wheel with this quattro cheese mix doused in garlic and truffle oil. Loop there it is!'
};

var conditionalLove = {
  price: 22.14,
  description: 'This island favorite doesn\'t give you a chance to say no. Korean bulgogi meat, kim chee, mozzarella cheese and onions always returns true! Boo~Ya!'
};

var theDom = {
  price: 16.99,
  description: 'This dynamic blend of Duck, Olives and Mango will change your original thought of what a pizza should be. The only thing constant is change for this bad boy!'
};

var conjunctionFunction = {
  price: 17.02,
  description: 'Create your own pie by passing in handpicked fresh ingredients. Invoke your appetite and creativity! Mamma Mia return back to glory!'
};

var pizzaArray = [forLoop,conditionalLove,theDom,conjunctionFunction];


/*1) change the Today's Special in the pizzaria assignment to show a new item each time you refresh the page
2) Use the data given to you to replace the menu items with DOM*/

function generateSpecial() {
  var num = Math.floor(Math.random() * 4);
  return num;
}

function pMaker(classP,inside) {
  var newP = document.createElement("p");
  newP.className = classP;

//change to appropriate class

  newP.innerHTML = inside;
  today.appendChild(newP);
  console.log(newP);
}


function displaySpecial(pizzaNames,pizzaObj) {
  var specialNum = generateSpecial();
  var pizzaName = document.getElementById("special");
  pizzaName.innerHTML = pizzaNames[specialNum];
//change to appropriate class
  pizzaName.className = "pizzaName";
  
  pMaker("price",pizzaObj[specialNum].price);
  pMaker("description",pizzaObj[specialNum].description);

  console.log();

}

displaySpecial(pizzaName,pizzaArray);

