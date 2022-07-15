import React from 'react';
import { useEffect } from 'react';


const BallBlock = () => {


    const ShowBall = () => {
        setTimeout(() => addBall(200, 200, 100), 100)
     }
    
     const addBall = (ballX, ballY, size) => {
        let ballBlock = document.querySelector('.BallBlock')
        console.log(ballBlock);
        let div = document.createElement('div')
        div.style.width  = size + 'px'
        div.style.height = size + 'px'
        div.style.top  = ballX + 'px'
        div.style.left = ballY + 'px'
        div.classList.add('Circle')
        ballBlock.append( div )
     }


    return (
        <div className = {'BallBlock'} >
            <button onClick = {() => ShowBall()}> Нажми на меня </button>
        </div>
    )
}


export default BallBlock;