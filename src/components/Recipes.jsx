import { useState } from "react";

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

const Recipes = (props) => {
  const [recipe, setRecipe] = useState({});
  return (
    <>
      <h3>Current Recipe:</h3>
      <button onClick={() => setRecipe(elvenShieldReciepe)}>
        Elven Shield Recipe
      </button>
      <button onClick={() => setRecipe(elvenGauntletsRecipe)}>
        Elven Gauntlet Recipe
      </button>

      <ul>
        {Object.keys(recipe).map((material) => (
          <li key={material}>
            {material}: {recipe[material]}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Recipes;
