import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Countries = () => {
    const [data, setData] = useState([]);
    const [rangeValue, setRangeValue] = useState(36);   // On part avec 36 pays affichés
    const [selectedRadio, setSelectedRadio] = useState("");
    const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

    // le useEffect se joue lorsque le composant est monté, ce qui permet de ne pas exécuter le code que l'on met à l'intérieur à l'infini
    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data))
    }, [])
    return (
        <div className='countries'>
            <ul className="radio-container">
                <input type="range" min="1" max="250" defaultValue={rangeValue} onChange={(e) => setRangeValue(e.target.value)} />
                {/* Lorsqu'on manipulera l'input, le nombre de drapeaux affichés sera modifié dynamiquement grâce à setRangeValue */}
                {radios.map((continent, index) => (
                    <li key={index}>
                        <input type="radio" name="continentRadio" id={continent} onChange={(e) => setSelectedRadio(e.target.id)} />
                        <label htmlFor={continent}>{continent}</label>
                    </li>
                ))}
            </ul>
            <ul>
                {
                    data
                    .filter((country) => country.continents[0].includes(selectedRadio))   // tous les pays qui auront le continent sélectionné par l'input radio seront affichés
                    .sort((a, b) => b.population - a.population)
                    .slice(0, rangeValue)
                    .map((country, index) => (
                        <Card key={index} country={country} />
                    ))
                }
            </ul>
        </div>
    );
};

export default Countries;