import {useContext} from "react";
import {petDataContext} from "./App";

import './Top.css'

export function Top() {
    const [petData, setPetData] = useContext(petDataContext);
    const myPets = petData.map((pet) => {
        const date = new Date(pet.birthday)
        const birthdayTxt = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
        return (
            <div key={pet.id} className={"pet"}>
                <li>
                    <img className={"petImg"} src={pet.picture_src} alt={pet.name}/>
                    <div className={"profile"}>
                        <p><b>Name:</b> {pet.name}</p>
                        <p><b>Birthday:</b> {birthdayTxt}</p>
                        <p><b>Breed:</b> {pet.dog_breed}</p>
                    </div>
                </li>
                <div className="button_line004">
                    <p>前回の散歩：</p>
                    <a href="#" >散歩行ったよ！</a>
                    <p>前回のご飯：</p>
                    <a href="#">ご飯食べたよ!</a>
                </div>
            </div>
        )
    })

    return (
        <ul>{myPets}</ul>
    )

}