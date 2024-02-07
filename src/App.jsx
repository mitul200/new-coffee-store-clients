import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./Component/CoffeeCard";

function App() {
  const coffeesData = useLoaderData();
  console.log(coffeesData);
  return (
    <>
      <h1>already have coffee quentity {coffeesData.length} </h1>
      <div className=" grid md:grid-cols-2 gap-10 p-8">
        {coffeesData.map((coffees) => (
          <CoffeeCard key={coffees._id} coffees={coffees}></CoffeeCard>
        ))}
      </div>
    </>
  );
}

export default App;
