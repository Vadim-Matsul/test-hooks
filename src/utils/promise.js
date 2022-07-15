let promise = new Promise ( resolve => {
   
    setTimeout(() => {
      console.log('Идёт запрос данных на сервер...')
      const backend = {
        status: 200,
        server: 'axios',
        port: 3000
      }
     resolve (backend)
    }, 1000)
})

promise.then( data => {
    return new Promise ( resolve => {
       setTimeout(() => {
         console.log('Изменяем объект', data)
         data.modified = true
        resolve(data)
       },1000)
    })
 })
 .then( newData => {
    return new Promise (resolve => {
        setTimeout(() => {
            console.log('повторно изменяем', newData)
            newData.fromPromise = true
            resolve( newData )
        },2000) 
    })
 })
 .then( data => { console.log('Modified', data)})


