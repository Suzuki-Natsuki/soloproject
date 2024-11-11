import { useState , useEffect, createContext } from 'react'
import './App.css'

import {Top} from "./Top";

//Global State
export const petPicturesContext = createContext()
export const petDataContext = createContext()

export function App() {

  //useStateの初期値（空）を設定
  const [topView, setTopView] = useState(true);

  //Global State
  const [petData, setPetData] = useState([]);
    const petPictures =
        useState(
            ["../pic/うさぎ.png",
            "../pic/ハムスター.png",
            "../pic/ハリネズミ.png",
            "../pic/モルモット.png",
            "../pic/犬.png",
            "../pic/猫.png",
            "../pic/鳥.png",])

  useEffect(() => {
    //fetchでバックエンドExpressのサーバーを指定
    fetch("/pets")
        //レスポンスをjsonとして受け取りjsオブジェクトを生成
        .then((res) => res.json())
        //生成したjsオブジェクトをdataに代入
        //data.messageで取り出したデータをuseStateに保存
        .then((data) => setPetData([...petData, data[0]]));
  },[])

    console.log(petData)

  return (
      <petPicturesContext.Provider value={petPictures}>
        <petDataContext.Provider value={[petData, setPetData]}>
            <div id={"header"}>
                <img src={"../pic/icon.png"} alt={"TopButton"} onClick={() => {
                    setTopView(true)
                }}/>
                {topView && <Top />}
            </div>
        </petDataContext.Provider>
      </petPicturesContext.Provider>
  )
}
