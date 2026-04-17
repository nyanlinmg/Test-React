import { useDispatch, useSelector } from "react-redux";
import { remove, selectFruits } from "./fruitSlice";

export default function FruitsList() {
    const fruits = useSelector(selectFruits);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Fruit List</h1>
            <ul>
                {fruits.map(fruit => {
                    return (
                        <li key={fruit.id}>
                            <button onClick={() => {
                                dispatch(remove(fruit.id))
                            }}>
                                Del
                            </button>
                            {fruit.name}, $ {fruit.price}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}