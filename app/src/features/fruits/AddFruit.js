import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFruits, add } from "./fruitSlice";

export default function NewFruit() {
    const nameRef = useRef();
    const priceRef = useRef();

    const fruits = useSelector(selectFruits);
    const dispatch = useDispatch();
    const id = fruits.length + 1;

    return (
        <form style={{
            padding: '5px 20px'
        }} onSubmit={ (e) => {
            e.preventDefault();

            dispatch(add({
                id: id,
                name: nameRef.current.value,
                price: priceRef.current.value
            }))
        }}>

            <input type="text" ref={nameRef}></input><br></br>
            <input type="text" ref={priceRef}></input><br></br>
            <button style={{marginTop: 20}}>Add Fruit</button>
        </form>
    )
}