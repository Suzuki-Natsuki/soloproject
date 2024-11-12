import {useState, useContext} from "react";
import {topViewContext,updateContext} from "./context";

import './Addpet.css'
import {string} from "prop-types";

export function Addpet() {
    const [, setTopView] = useContext(topViewContext);
    const [,setUpdate] = useContext(updateContext)
    const [name, setName] = useState("")
    const [birthday, setBirthday] = useState("")
    const [breed, setBreed] = useState("")
    const [selectPic, setSelectPic] = useState("../pic/うさぎ.png")

    return (
        <div className={"input"}>
            <div>
                <img src={selectPic} alt={"動物の写真"}></img>
            </div>
            <div>
                <label className={"inputLabel"}>動物の種類
                    <select className={"inputBox"} name="pets" onChange={(e) => {
                        setSelectPic(`../pic/${e.target.value}.png`)
                    }}>
                        <option value="うさぎ">うさぎ</option>
                        <option value="ハムスター">ハムスター</option>
                        <option value="ハリネズミ">ハリネズミ</option>
                        <option value="モルモット">モルモット</option>
                        <option value="犬">犬</option>
                        <option value="猫">猫</option>
                        <option value="鳥">鳥</option>
                    </select>
                </label>
                <label className={"inputLabel"}>名前　　　<input className={"inputBox"} type={"text"} onChange={(e) => {
                    setName(e.target.value)
                }}></input></label>
                <label className={"inputLabel"}>誕生日　　<input className={"inputBox"} type="date" onChange={(e) => {
                    const dt = new Date(e.target.value)
                    setBirthday(`${dt.getFullYear()}/${dt.getMonth() + 1}/${dt.getDate()}`)
                }}></input></label>
                <label className={"inputLabel"}>種類　　　<input className={"inputBox"} onChange={(e) => {
                    setBreed(e.target.value)
                }}></input></label>
            </div>
            <p  className={"add"}>
                <a href="#" onClick={() => {

                    const params = {name : name, birthday: birthday, dog_breed: breed, picture_src: selectPic};
                    const query = new URLSearchParams(params);
                    console.log(query)
                    fetch(`/pets/addPet?${query}`)
                        .then(() => {
                            setUpdate(true);
                            setTopView(true);
                })}}>追加</a>
            </p>
        </div>
    )
}
