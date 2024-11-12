import {useContext} from "react";
import {updateContext ,petDataContext, petWalkDataContext, petMealDataContext} from "./context";

import './Top.css'

export function Top() {
    const [, setUpdate] = useContext(updateContext);
    const [petData] = useContext(petDataContext);
    const [petWalkData] = useContext(petWalkDataContext);
    const [petMealData] = useContext(petMealDataContext);

    console.log(petWalkData)
    console.log(petMealData)

    const myPets = petData.map((pet) => {
        const date = new Date(pet.birthday)
        const birthdayTxt = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;

        function getLastWalkTime() {
            const walkTime = new Date(petWalkData.findLast((data) => data.pet_id === pet.id).walk_time)
            walkTime.setHours(walkTime.getHours() - 9);
            console.log(walkTime)
            return `${walkTime.getFullYear()}/${walkTime.getMonth() + 1}/${walkTime.getDate()} ${walkTime.getHours().toString().padStart(2, '0')}:${walkTime.getMinutes().toString().padStart(2, '0')}`
        }

        function getLastMealTime() {
            const mealTime = new Date(petMealData.findLast((data) => data.pet_id === pet.id).meal_time)
            mealTime.setHours(mealTime.getHours() - 9);
            console.log(mealTime)
            return `${mealTime.getFullYear()}/${mealTime.getMonth() + 1}/${mealTime.getDate()} ${mealTime.getHours().toString().padStart(2, '0')}:${mealTime.getMinutes().toString().padStart(2, '0')}`
        }

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
                    <p>前回の散歩：{getLastWalkTime()}</p>
                    <a href="#" onClick={() => {
                        fetch(`/pets/walk/save?pet_id=${pet.id}&walk_time=${new Date()}`).then(() => setUpdate(true))
                    }} >散歩行ったよ！</a>
                    <p>前回のご飯：{getLastMealTime()}</p>
                    <a href="#" onClick={() => {
                        fetch(`/pets/meal/save?pet_id=${pet.id}&meal_time=${new Date()}`).then(() => setUpdate(true))
                    }}>ご飯食べたよ!</a>
                </div>
            </div>
        )
    })

    return (
        <ul>{myPets}</ul>
    )

}