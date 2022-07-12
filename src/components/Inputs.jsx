import React from 'react';
import { useInput } from '../hooks/useInput'

function Inputs() {

 const username = useInput ('')
 const userpass = useInput ('')

  return (
    <div className={'Input-Block'}>
            <input
                {...username}
                type='text' 
                placeholder='Имя'     />
            <input
                {...userpass}
                type='password' 
                placeholder='Пароль'  />
    </div>
  )
}

export default Inputs;