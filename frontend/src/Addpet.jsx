import {useContext} from "react";
import {petPicturesContext} from "./App";


export function Addpet() {
    const [petPictures] = useContext(petPicturesContext)
    console.log(petPictures)

    const imgTags = petPictures.map((picture, index) => {
        return (<img key={index} src={picture} alt="Top"/>)
    })

    return (
        <ul>{imgTags}</ul>
    )
}
