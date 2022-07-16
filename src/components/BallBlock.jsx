
const BallBLock = () => {

 const showCircle = () => {
    addCircle( 100 ).then( div => div.append('Hello, React!'))
 }

 const addCircle = ( size ) => {
    let   div = document.createElement('div')
    let block = document.querySelector('.BallBlock')
        div.style.width  = 0
        div.style.height = 0
        div.classList.add('Circle')
            block.append(div)

    return new Promise ( resolve => {
        setTimeout (() => {
            div.style.width  = size*2 + 'px'
            div.style.height = size*2 + 'px'

         div.addEventListener('transitionend', () => resolve(div) )
        },0)
    })
 }


    return (
        <div className = {'BallBlock'}>
            <button onClick = {() => showCircle()}>Нажми на меня!</button>
        </div>
    )
}


export default BallBLock;