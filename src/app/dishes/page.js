import Link from "next/link";

async function fetchAllDishes() {
  try {
    const result = await fetch("https://dummyjson.com/recipes");
    const data = await result.json();
    return data;
  } catch (e) {
    console.log("Cannot fetch dishes in the Application.");
    console.log("Error", e);
    return e;
  }
}

export default async function ShowDishes() {
  const dishData = await fetchAllDishes();
  const dishes = await dishData.recipes;
  console.log("Fetched Dishes : ", dishes);

  return (
    <>
      <div className="overflow-x-hidden">
        <div className="h-16 w-screen bg-blue-800">
          <p className="text-3xl text-center p-4 text-white"> Dishes </p>
        </div>

        <div className="w-full h-auto grid grid-cols-4 gap-4">

          {dishes && dishes.length > 0 ? (
            dishes.map((dish) => (
              <Link href={`/dishes/${dish.id}`}>

                <div className="w-64 h-auto flex flex-col mx-auto mt-8 bg-white rounded-md shadow-md border border-black-950 cursor-pointer ">

                  <div className="w-full">
                    {" "}
                    <img
                      src={`${dish.image}`}
                      alt={`${dish.name} image`}
                      className="w-full h-46 rounded-t-md"
                    />{" "}
                  </div>

                  <div className="w-full h-14  flex items-center pl-4">
                    <p key={dish.id} className="text-md font-semibold " >{dish.name}</p>
                  </div>

                  <div className="w-full h-12 flex justify-around items-center ">
                    <div>
                      <p className="text-gray-900 text-sm" >Rating : {dish.rating}</p>
                    </div>
                    <div>
                      <p className="text-gray-900 text-sm" >Cuisine : {dish.cuisine}</p>
                    </div>
                  </div>

                </div>

              </Link>
            ))
          ) : (
            <div>
              {" "}
              <p className="text-center mt-4 text-slate-700">
                {" "}
                Cannot fetch dishes from the API.{" "}
              </p>{" "}
            </div>
          )}
        </div>


      </div>
    </>
  );
}
