import {useRef, useState} from 'react';
import Toolbar from './Toolbar';
import {createContext, useContext} from 'react';
import { Routes , Route, Link, Router, useParams, useNavigate } from 'react-router-dom';

const users = [
    { id: 1, name: 'Alice', gender: 'f'},
    { id: 2, name: 'Bob', gender: 'm'},
    { id: 3, name: 'Tom', gender: 'm'},
    { id: 4, name: 'Mary', gender: 'f'}
]

function User() {
    const {name} = useParams();
    return <h1>Profile - {name}</h1>
}

function Male(props) {
    return (
        <ul>
            {users.filter( u => u.gender === 'm')
                    .map( u => <li key={u.id}>{u.name}</li>)}
        </ul>
    )
}

function Female(props) {
    return (
        <ul>
            {users.filter( u => u.gender === 'f')
                    .map( u => <li key={u.id}>{u.name}</li>)}
        </ul>
    )
}

export default function App() {
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate("/user/alice")}>Alice</button>
            <button onClick={() => navigate("/user/bob")}>Bob</button>

            <div style={{background: 'pink', padding: 20}}>
                <Routes>
                    <Route path='/user/:name' element={<User></User>}></Route>
                </Routes>
            </div>

            <ul>
                <li><Link to={"/male"}>Male</Link></li>
                <li><Link to={"/female"}>Female</Link></li>
                <li><Link to={"/"}>back</Link></li>
            </ul>
            <div style={{background: 'cyan', padding: 20}}>
                <Routes>
                    <Route path='/male' element={<Male></Male>}></Route>
                    <Route path='/female' element={<Female></Female>}></Route>
                </Routes>
            </div>
        </div>
    )
}