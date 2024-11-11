import { useState , useEffect} from 'react'
import './App.css'

function App() {

  //useStateの初期値（空）を設定
  const [petdata, setPetdata] = useState([]);

  useEffect(() => {
    //fetchでバックエンドExpressのサーバーを指定
    fetch("/pets")
        //レスポンスをjsonとして受け取りjsオブジェクトを生成
        .then((res) => res.json())
        //生成したjsオブジェクトをdataに代入
        //data.messageで取り出したデータをuseStateに保存
        .then((data) => setPetdata([...petdata, data[0]]));
  },[])

    console.log(petdata)

  return (
      <div id={"header"}>
        <img src={"../pic/icon.png"}/>
      </div>

  )
}

export default App
