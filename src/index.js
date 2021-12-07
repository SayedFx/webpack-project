import "./styles/index.css";

const elvenShieldReciepe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

const elvenGauntletsRecipe = {
  ...elvenShieldReciepe,
  leater: 1,
  refinedMoonstone: 1,
};
console.log(elvenShieldReciepe);
console.log(elvenGauntletsRecipe);
