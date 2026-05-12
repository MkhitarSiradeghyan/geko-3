import React, { useState } from 'react'
import './Counter.css'

const Counter = ({user}) => {

    const [count, setCount] = useState(5000)
    const [tiv, setTiv] = useState("")
    const [history, setHistory] = useState([])

    const plus = () => {
        setCount(count => count + tiv)
        setTiv("")
        setHistory([...history, {user: user, arjeq: tiv}])
    }
    
    const minus = () => {
        if(count >= tiv){
            setCount(count => count - tiv)
        }else{
            alert("Anbavarararararar mijocner")
        }
        setTiv("")
        setHistory([...history, {user: user, arjeq: tiv * -1}])
    }

  return (
    <div>
        <h1>{user}: {count}</h1>
        <input type="number" value={tiv} onChange={evt => setTiv(+evt.target.value)}/>
        <div>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </div>
        <div className="history">
            {
                history.map(h => <h3 className={h.arjeq > 0 ? "plus" : "minus"}>{h.user}: {h.arjeq > 0 && "+"}{h.arjeq}</h3>)
            }
        </div>
    </div>
  )
}

export default Counter