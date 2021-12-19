import React, { useState } from "react";
import './styles.css'

export const Task7 = (props) => {
    const [a, setA] = useState('')
    const [b, setB] = useState('')
    const [res, setRes] = useState('')

    return (
        <div className='center '>
            <h1>Task7</h1>
            <div className='row ' style={{ maxWidth: 600, width: 600, justifyContent: 'center' }}>
                <div className='column'>
                    <input placeholder='Введите перове число' value={a} onChange={e => setA(e.target.value.replace(/[^[0-9.Aa]/, ''))} ></input>
                    <input placeholder='Введите перове число' value={b} onChange={e => setB(e.target.value)} ></input>
                </div>
                <button onClick={()=>setRes(Number(a) + Number(b))}>Сложить</button>
            </div>
            <div className='column'>
                сумма {res}
            </div>
            <div className='column'>
                сумма в шестеричной {res}
            </div>
        </div>
    )
}
export default Task7