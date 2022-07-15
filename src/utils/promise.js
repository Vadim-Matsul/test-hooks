let promise = new Promise ( ( resolve, reject ) => {
    setTimeout(() => {
        const backend = {
            port: 3000,
            status: 200,
            connect: true
        }
        console.log('Запрос данных с сервера...')
        resolve(backend)
    }, 1000)
})

promise.then( data => {
    return new Promise( (resolve, reject) => {
       setTimeout(() => {
        console.log('Изменяем объект:', data)
          data.protocol = 'http'
          resolve(data)
       },2000)
    })
 }
).then( newData => {
  
        console.log('__________ _________ __________')
    
        console.log('Обьект изменён', newData)
 
})
.catch( error => console.error('Ошибка:', error))
.finally( () => console.log('Запрос завершён'))

const delay = ms => {
    return new Promise ( resolve => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}
// delay(2000).then(() => console.log('After 2 seconds'))
// delay(3000).then(() => console.log('After 3 seconds'))

Promise.all( [delay(1000), delay(5000)] )
.then( () => console.log('Все промисы выполнены'))

Promise.race([delay(2000), delay(3000)])
.then( () => console.log('Выполнен первый промис') )