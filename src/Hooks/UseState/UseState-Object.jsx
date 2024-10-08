import React,{useState} from 'react'

function UseStateObject() {
    const [name, setName] = useState({firstName:'', lastName:''})
  return (
    <div>
        <input type='text' value={name.firstName} onChange={e => setName({...name,firstName:e.target.value})}/>
        <input type='text' value={name.lastName} onChange={e =>setName({...name, lastName:e.target.value})}/>
        <h4>{name.firstName} {name.lastName}</h4>
    </div>
  )
}

export default UseStateObject