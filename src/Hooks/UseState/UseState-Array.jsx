import React, {useState} from 'react'

function UseStateArray() {
    const [items, setItems] = useState([])

    const addArray= ()=>{
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random()*10)+1
        }])
    }
  return (
    <div>
        <button onClick={addArray}>Add number</button>
        <ul>
            { items.map(item =>(
            <li key={item.id}>{item.value}</li>
            ))}</ul>
    </div>
  )
}

export default UseStateArray