class Pizza {
  ingredients = [];
  cook = async function () {
    await sleep(5000);
    console.log("The pizza is ready");
  };

  //function add ingredients
  async addIngredients(strIngredient) {
    console.log("Adding... ", strIngredient);
    await sleep(2000);
    this.ingredients.push(strIngredient);

    console.log("The " + strIngredient + " was added");
  }

  constructor() {}
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let p = new Pizza();

await p.addIngredients("tomate");
await p.addIngredients("queso");
await p.addIngredients("harina");
await p.addIngredients("pollo");

p.cook();
