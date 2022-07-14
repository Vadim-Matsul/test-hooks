import React from "react";
import { useInput } from "../hooks/useInput";

const MyInput = () => {

 const greeting = useInput ()
 const userMood = useInput ()

    return (
        <div 
          className={'Input-Block'}
          >
            <input 
                { ...greeting }
                placeholder="Hello, React"
                />
            <input 
                { ...userMood }
                placeholder="How are you?!"
                />
        </div>
    )
}


export default MyInput;