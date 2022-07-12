import React from "react";
import { useInput } from "../hooks/useInput";

const Input = () => {

 const     usermood = useInput ()
 const userattitude = useInput ()
 
    return (
        <div>
            <input
               { ...usermood }
                placeholder='Как настроение?'
                />
            <input
               { ...userattitude }
                placeholder='Все получится!'
                />               
        </div>
    )
}


export default Input;