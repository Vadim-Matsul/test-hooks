const SquareBlock = () => {

const AddBlocks = () => {
    Promise.all([
                anotherBlocks(              'Square',  100,  50  ), 
                anotherBlocks(        'Square-color',  400,  50  ),
                anotherBlocks(              'Square',  500,  100 ), 
                anotherBlocks(        'Square-color',  700,  100 ),
                anotherBlocks(              'Square',  900,  200 ), 
                anotherBlocks(        'Square-color',  1100, 200 ),
                anotherBlocks(              'Square',  1300, 250 ), 
                anotherBlocks(        'Square-color',  1500, 250 ),
                anotherBlocks(       'Square-result',  1700, 300 ), 
                anotherBlocks( 'Square-color-result',  1900, 250 ) 
               ])
                .then( div => {
                return new Promise ( resolve => {
                     div[9].classList.add('Square-color-result-text')
                     resolve( div[9] )
                })})
                .then( lastDiv =>  lastDiv.append('Hello !)') )
}

const anotherBlocks = (className, delay, size) => { 
    
  let   div = document.createElement('div')
  let block = document.querySelector('.SquareBlock')
    
     div.style.width  = 0
     div.style.height = 0
     div.style.topv   = 70 + 'px'
     div.style.left   = 50 + '%'
     div.classList.add(className)
       block.append( div )
    
       return new Promise( resolve => {
         setTimeout(() => {
            div.style.width  = size + 'px'
            div.style.height = size + 'px'
            div.addEventListener('transitionend',  resolve( div ))
         }, delay)
       })
    
    
}

    return (
        <div className={'SquareBlock'} > 
            <button onClick = {() => AddBlocks() }>tap me!</button>
        </div>
    )
}


export default SquareBlock;