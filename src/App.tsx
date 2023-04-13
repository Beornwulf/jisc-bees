import React, {useState} from 'react';
import './App.css';
import {Bee, Drone, Queen, Worker} from "./Bee";

const Bees = () => {
    const workers: Array<Bee> = Array.from({length: 10}, () => {
        return new Worker();
    });
    const drones: Array<Bee> = Array.from({length: 10}, () => {
        return new Drone();
    });
    const queens: Array<Bee> = Array.from({length: 10}, () => {
        return new Queen();
    });
    const bees: Array<Bee> = workers.concat(drones).concat(queens);


    const [hive, setHive] = useState(bees);
    const damageHandler = () => {
        hive.forEach((bee) => {
            bee.damage(Math.random() * 80)
        });
        setHive([...hive]);
    };
    return (
        <>
            <ul>
                {hive.map((bee, index) =>
                    <li key={index}>{bee.render()}</li>
                )}
            </ul>
            <button onClick={damageHandler}>Damage</button>
        </>
    );
};

function App() {
    return (
        <Bees/>
    );
}

export default App;
