import { useState , useEffect, createContext } from 'react'

import './App.css'

import {Top} from "./Top";

//Global State
export const updateContext = createContext()
export const petPicturesContext = createContext()
export const petDataContext = createContext()
export const petWalkDataContext = createContext()
export const petMealDataContext = createContext()

const composeComponents = (...components) => {
    if (components.length === 0) {
        return (arg) => arg;
    }
    if (components.length === 1) {
        return components[0];
    }
    return components.reduce((A, B) => (props) => <A><B {...props} /></A>);
};

export function App() {

  //useStateの初期値（空）を設定
  const [topView, setTopView] = useState(true);

  //Global State
  const [update, setUpdate] = useState(false);
  const [petData, setPetData] = useState([]);
  // const [petWalkData, setPetWalkData] = useState([]);
  // const [petMealData, setPetMealData] = useState([]);

  const petPictures =
        useState(
            ["../pic/うさぎ.png",
            "../pic/ハムスター.png",
            "../pic/ハリネズミ.png",
            "../pic/モルモット.png",
            "../pic/犬.png",
            "../pic/猫.png",
            "../pic/鳥.png",])

    const ComposedProvider = composeComponents(
        (props) => <updateContext.Provider {...props} value={[update, setUpdate]}/>,
        (props) => <petPicturesContext.Provider {...props} value={petPictures}/>,
        (props) => <petDataContext.Provider {...props} value={[petData, setPetData]}/>,
        // (props) => <petWalkDataContext.Provider {...props} value={[petWalkData, setPetWalkData]}/>,
        // (props) => <petMealDataContext.Provider {...props} value={[petMealData, setPetMealData]}/>,
    );

  useEffect(() => {
      //ペット情報
    fetch("/pets")
        .then((res) => res.json())
        .then((data) => setPetData([...petData, data[0]]));

  },[])

  return (
      <ComposedProvider>
          <div id={"header"}>
              <img src={"../pic/icon.png"} alt={"TopButton"} onClick={() => {
                  setTopView(true)
              }}/>
              {topView && <Top />}
          </div>
      </ComposedProvider>
  )
}
