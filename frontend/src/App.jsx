import { useState , useEffect } from 'react'

import {topViewContext, updateContext, petPicturesContext, petDataContext } from './context'
import {petWalkDataContext, petMealDataContext} from './context'
import {listViewContext} from "./context";
import './App.css'
import {Top} from "./Top";
import {Addpet} from "./Addpet";

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


  //Global State
  const [topView, setTopView] = useState(true);
  const [update, setUpdate] = useState(false);
  const [petData, setPetData] = useState([]);
  const [petWalkData, setPetWalkData] = useState([]);
  const [petMealData, setPetMealData] = useState([]);
  const [listView, setListView] = useState(false);

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
        (props) => <topViewContext.Provider {...props} value={[topView, setTopView]}/>,
        (props) => <updateContext.Provider {...props} value={[update, setUpdate]}/>,
        (props) => <petPicturesContext.Provider {...props} value={petPictures}/>,
        (props) => <petDataContext.Provider {...props} value={[petData, setPetData]}/>,
        (props) => <petWalkDataContext.Provider {...props} value={[petWalkData, setPetWalkData]}/>,
        (props) => <petMealDataContext.Provider {...props} value={[petMealData, setPetMealData]}/>,
        (props) => <listViewContext.Provider {...props} value={[listView, setListView]}/>,
    );

  useEffect(() => {

      //ペット情報
      fetch("/pets")
          .then((res) => res.json())
          .then((data) => setPetData(data));

      fetch("/pets/walk")
          .then((res) => res.json())
          .then((data) => setPetWalkData(data));

      fetch("/pets/meal")
          .then((res) => res.json())
          .then((data) => setPetMealData(data));

      console.log(petData)

      setUpdate(false)

  },[update])

  return (
      <ComposedProvider>
          <div id={"header"}>
              <img src={"../pic/icon.png"} alt={"TopButton"} onClick={() => setTopView(true)}/>
          </div>
          <div className={"contents"}>
              {topView ? <Top /> : <Addpet />}
          </div>
      </ComposedProvider>
  )
}
