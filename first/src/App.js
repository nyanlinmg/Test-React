import {useRef, useState} from 'react';

function Item(props) {
  return ( 
    <li>{props.name} , $ {props.price}</li>
  )
}

function AddForm(props) {
    const nameRef = useRef();
    const priceRef = useRef();

    return (
        <form onSubmit={ e => {
            e.preventDefault();

            props.add(
                nameRef.current.value,
                priceRef.current.value
            );

        } }>

            <input type='text' ref={nameRef}></input> <br />
            <input type='text' ref={priceRef}></input> <br />
            <button type='submit'>Add</button>

        </form>
    )
}

export default function App() {
    const [data, setData] = useState([
        {id : 1, name : "Apple", price : 0.99},
        {id : 2, name : "Orange", price : 0.88}
    ]);

    const add = (name, price) => {
        const id = data.length + 1;
        setData([
            ...data,
            {id, name , price}
        ]);
    }

    return (
        <div>
            <h1>Hello React</h1>
            <ul>
              {data.map( i => (
                <Item key={i.id} name={i.name} price={i.price}></Item>
              ))}
          </ul>

          <AddForm add={add} />
        </div>
    )
}