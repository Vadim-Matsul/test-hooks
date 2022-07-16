const SquareBlock = () => {

const AddBlocks = () => {
    anotherBlocks().then( (div) => {
    return new Promise( resolve =>{
        setTimeout(() => {
             div.classList.add('Square-Color')
            resolve(  )
        },500) 
    })})
}

const anotherBlocks = () => {
    let   div = document.createElement('div')
    let block = document.querySelector('.SquareBlock')
     div.style.width  = 0
     div.style.height = 0
     div.style.topv = 70 + 'px'
     div.style.left = 50 + '%'
     div.classList.add('Square')
       block.append( div )
       
       return new Promise( resolve => {
         setTimeout(() => {
            div.style.width  = 200 + 'px'
            div.style.height = 200 + 'px'
            div.addEventListener('transitionend',  resolve( div ))
         },200)
       })
    
    
}

    return (
        <div className={'SquareBlock'} > 
            <button onClick = {() => AddBlocks() }>tap me!</button>
        </div>
    )
}


export default SquareBlock;