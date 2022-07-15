import React from 'react';
import { useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const BallBlock = () => {


    const ShowBall = () => {
         addBall(260, 200, 100).then(
            div => div.append('Hello, React!')
         )
     }
    
     const addBall = (ballX, ballY, size) => {
        let ballBlock = document.querySelector('.BallBlock')
        let       div = document.createElement('div')
          div.style.width  = 0
          div.style.height = 0
          div.style.left = ballX + 'px'
          div.style.top  = ballY + 'px'
          div.classList.add('Circle')
        ballBlock.append( div )
        
        return new Promise ( resolve => {
            setTimeout (() => {
             div.style.width  = size*2.5 + 'px'
             div.style.height = size*2.5 + 'px'
            },0)

            div.addEventListener('transitionend', () => resolve(div))
        })
     }


    return (
            
            <div className = {'BallBlock'} >
                    <button onClick = {() => ShowBall()}> Нажми на меня </button>
            </div>
    )
}


export default BallBlock;