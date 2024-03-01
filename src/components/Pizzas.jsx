import { pizzaData } from "../data/data";
import Pizza from "./Pizza";
export default function Pizzas() {
  return (
    <>
      {pizzaData && (
        <>
          <p>Hello world</p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza key={pizza.name} {...pizza} />
            ))}
          </ul>
        </>
      )}
    </>
  );
}
