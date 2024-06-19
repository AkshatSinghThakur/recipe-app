async function fetchRecipe(dishid) {
  try {
    const result = await fetch(`https://dummyjson.com/recipes/${dishid}`);
    const data = await result.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Cannot fetch the recipe.");
    console.log("Error", error);
    return error;
  }
}

export default async function showRecipe({ params }) {
  console.log("Dish ID : ", params);
  const dishid = params.dishid;
  const recipe = await fetchRecipe(dishid);
  const instructions = await recipe.instructions;

  return (
    <>
      <div className="w-screen h-full flex flex-col justify-center items-center" >
        <div className="w-full h-24 flex justify-center items-center bg-orange-600 border-b overflow-x-hidden" ><p className="text-3x text-start p-4 text-3xl text-white" >{recipe.name} Recipe</p></div>
        <div className="w-full h-auto flex justify-center items-start overflow-x-hidden" >
            <div className="w-2/3 h-auto flex justify-start items-center p-5" >
                <ul className="flex flex-col justify-center items-start gap-7" >
                    <li><p className="text-left" > <p className="font-bold" >Ingredients :</p> {recipe.ingredients}.</p></li>
                    <li><p className="text-left font-bold -mb-7" > Instructions : </p></li>
                    <li>{
                    instructions && instructions.length > 0 ? (
                    instructions.map((instruction)=>(<p className="text-left" >{instruction}</p>))) : 
                    ( <p> Cannot show Instructions. </p> )
                    }
                    </li>
                    {/* <li><p className="text-left" > Instructions : {recipe.instructions}.</p></li> */}
                    <li><p className="text-left" > <label className="font-bold" >Time required for prepration : </label>{recipe.prepTimeMinutes} minutes. </p></li>
                    <li><p className="text-left" > <label className="font-bold" >Time required for cooking : </label>{recipe.cookTimeMinutes} minutes. </p></li>
                    <li><p className="text-left" > <label className="font-bold" >Cuisine :</label> {recipe.cuisine}.</p></li>
                    <li><p className="text-left" > <label className="font-bold" >Rating :</label> {recipe.rating} stars. </p></li>
                    <li><p className="text-left" > <label className="font-bold" >Number of Reviews : </label>{recipe.reviewCount}.</p></li>
                    <li><p className="text-left" > <label className="font-bold" >Meal Type :</label> {recipe.mealType}.</p></li>
                </ul>
            </div>
            <div className="w-2/6 h-auto flex justify-center items-center p-5" >
                <img src= {`${recipe.image}`} alt="image" className="w-80 h-auto rounded-md shadow-md" />
            </div>
        </div>
      </div>
    </>
  );
}
