import {useState, useContext} from "react";
import {List} from "./List";
import {topViewContext, updateContext ,petDataContext, petWalkDataContext, petMealDataContext} from "./context";

import './Top.css'

export function Top() {
    const [, setTopView] = useContext(topViewContext);
    const [, setUpdate] = useContext(updateContext);
    const [petData] = useContext(petDataContext);
    const [petWalkData] = useContext(petWalkDataContext);
    const [petMealData] = useContext(petMealDataContext);

    const [petName,setPetName] = useState('');
    const [walkList,setWalkList] = useState([]);
    const [mealList,setMealList] = useState([]);

    const myPets = petData.map((pet) => {
        const date = new Date(pet.birthday)
        const birthdayTxt = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;

        function getLastWalkTime() {
            const walkDataTR = petWalkData.find(data => data.pet_id === pet.id)
            if (walkDataTR) {
                const walkTime = new Date(petWalkData.findLast((data) => data.pet_id === pet.id).walk_time)
                walkTime.setHours(walkTime.getHours() - 9);
                return `${walkTime.getFullYear()}/${walkTime.getMonth() + 1}/${walkTime.getDate()} ${walkTime.getHours().toString().padStart(2, '0')}:${walkTime.getMinutes().toString().padStart(2, '0')}`
            }
        }

        function getLastMealTime() {
            const mealDataTR = petMealData.find(data => data.pet_id === pet.id)
            if (mealDataTR) {
                const mealTime = new Date(petMealData.findLast((data) => data.pet_id === pet.id).meal_time)
                mealTime.setHours(mealTime.getHours() - 9);
                return `${mealTime.getFullYear()}/${mealTime.getMonth() + 1}/${mealTime.getDate()} ${mealTime.getHours().toString().padStart(2, '0')}:${mealTime.getMinutes().toString().padStart(2, '0')}`
            }
        }

        return (
            <div key={pet.id} className={"pet"} style={{display: "flex"}}>
                <li>
                    <img className={"petImg"} src={pet.picture_src} alt={pet.name}/>
                    <div className={"profile"}>
                        <p><b>Name:</b> {pet.name}</p>
                        <p><b>Birthday:</b> {birthdayTxt}</p>
                        <p><b>Breed:</b> {pet.dog_breed}</p>
                    </div>
                </li>
                <div className="button_line004">
                    <div className={"walk"}>
                        <p>前回の散歩：{getLastWalkTime()}</p>
                        <img className={"list"} src={"../pic/チェックシートのアイコン.png"} alt={"リスト"}
                             onClick={() => {
                                 setPetName(pet.name)
                                 setWalkList(petWalkData.filter((data) => data.pet_id === pet.id))
                                 setMealList([])
                             }}/>
                    </div>
                    <a href="#" onClick={() => {
                        fetch(`/pets/walk/save?pet_id=${pet.id}&walk_time=${new Date()}`).then(() => setUpdate(true))
                    }}>散歩行ったよ！</a>
                    <div className={"walk"}>
                        <p>前回のご飯：{getLastMealTime()}</p>
                        <img className={"list"} src={"../pic/チェックシートのアイコン.png"} alt={"リスト"}
                             onClick={() => {
                                 setPetName(pet.name)
                                 setWalkList([])
                                 setMealList(petMealData.filter((data) => data.pet_id === pet.id))
                             }}/>
                    </div>
                        <a href="#" onClick={() => {
                            fetch(`/pets/meal/save?pet_id=${pet.id}&meal_time=${new Date()}`).then(() => setUpdate(true))
                        }}>ご飯食べたよ!</a>
                </div>
                {petName === pet.name ? <List petName={petName} walkList={walkList} mealList={mealList}/> : null}
                </div>
                )
                })

                return (
        <>
            <ul>{myPets}</ul>
            <p className={"addPets"}>
                <a href="#" className="addButton" onClick={() => setTopView(false)}>ペット追加</a>
            </p>
        </>
    )

}