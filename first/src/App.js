import {useRef, useState} from 'react';
import Toolbar from './Toolbar';
import {createContext, useContext} from 'react';

function Item(props) {
  return ( 
    <li>{props.name} , $ {props.price}</li>
  )
}

// React Composition

function Logo(props) {
    return (
        <img style={{width: '50px', height: '50px', borderRadius: '100%'}} src={props.image}></img>
    )
}

function Title(props) {
    return ( 
        <div style={{background: 'lightyellow', padding: 8}}>
            {props.children}
        </div>
    )
}

function MenuItem(props) {
    return (
        <li>{props.value}</li>
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

    const styles = {
        toolbar: {
            marginBottom : 20,
            border: '2px solid black',
        },
        dark: {
            background: 'gray',
            color: 'white',
            padding: '10px 40px'
        }
    }

    const add = (name, price) => {
        const id = data.length + 1;
        setData([
            ...data,
            {id, name , price}
        ]);
    }

    const [theme , setTheme ] = useState("light");

    return (
        <div>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <div style={{
                    minHeight: 100,
                    color: "green",
                    padding: 20,
                    background:
                        theme === "light" ? "lightblue" : "darkblue"
                }}>
                    <Header2></Header2>
                </div>
            </ThemeContext.Provider>
            <div>
                <Toolbar>
                    <h1 style={{display: 'flex',alignItems: 'center', gap: '10px'}}>Hello React
                        <Logo image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbAmafdPNr9fd0KC0Z98WYEC7Wl1wYlPVf-A&s"}></Logo>
                    </h1>
                </Toolbar>
                <Title>
                    <header>App Title (React)</header>

                    <ul>
                        <MenuItem value="Home"></MenuItem>
                        <MenuItem value="Users"></MenuItem>
                    </ul>
                </Title>
                
            </div>
            <ul style={{...styles.dark, ...styles.toolbar}}>
                {data.map( i => (
                    <Item key={i.id} name={i.name} price={i.price}></Item>
                ))}
            </ul>

            <AddForm add={add} />
        </div>
    )
}

// React Context

const MyContext = createContext();
const ThemeContext = createContext();

function Header2(props){
    return <Title2></Title2>
}

function Title2(props) {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div>
            <h1>Hello Context</h1>
            <button onClick={ () => {
                setTheme(
                    theme === "light" ? "dark" : "light"
                )
            }}>
                Toggle Theme
            </button>
        </div>
    )
}