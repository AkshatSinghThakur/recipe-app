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
        <div className="w-full h-auto grid grid-cols-4 p-4 gap-3">
          {dishes && dishes.length > 0 ? (
            dishes.map((dish) => (
              <Link href={`/dishes/${dish.id}`}>
                <div className="w-72 h-16 flex justify-center items-center bg-white rounded-md shadow-md border-2 border-blue-950 cursor-pointer">
                  <button key={dish.id}>{dish.name}</button>
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
