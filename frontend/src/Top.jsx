import {useContext} from "react";
import {petDataContext} from "./App";

import './Top.css'

export function Top() {
    const [petData, setPetData] = useContext(petDataContext);
    const myPets = petData.map((pet) => {
        const date = new Date(pet.birthday)
        const birthdayTxt = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
        return (
            <li key={pet.id}>
                <img  className={"petImg"} src={pet.picture_src} alt={pet.name}/>
                <div className={"profile"}>
                    <p><b>Name:</b> {pet.name}</p>
                    <p><b>Birthday:</b> {birthdayTxt}</p>
                    <p><b>Breed:</b> {pet.dog_breed}</p>
                </div>
            </li>
        )
    })

    return(
        <ul>{myPets}</ul>
    )

}