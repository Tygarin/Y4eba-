import React, { useState } from "react";
import './styles.css'

export const Task4 = (props) => {
    const [N, setN] = useState(0)
    const [M, setM] = useState(0)
    const [matrix, setMatrix] = useState([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ])
    const [answer, setAnswer] = useState([])

    const setMatr = () => {
        let matr = [];
        for (let i = 0; i < N; i++) {
            matr[i] = []
            for (let j = 0; j < M; j++) {
                matr[i].push(Math.floor(Math.random() * 80))
            }
        }
        setMatrix(matr)
    }

    const calculate = () => {
        const answer = []
        let matr = [...matrix]
        matr = matr.map((col, i) => matr.map(row => row[i]));
        matr.map((e, i) => {
            e.map((elem, index) => {
                let newArr = [...e]
                newArr.splice(index, 1)
                console.log(matr);
                let summ = newArr.reduce((a,b) => a + b)
                if(elem > summ) answer.push(elem);
            })
        })
        setAnswer(answer)
    }

    return (
        <div className='center '>
            <h1>Task4</h1>
            <div className='row between'>
                <div className='column'>
                    <label>
                        N
                        <input value={N} onChange={e => setN(Number(e.target.value))} type='number' ></input>
                    </label>
                    <label>
                        M
                        <input value={M} onChange={e => setM(Number(e.target.value))} type='number' ></input>
                    </label>
                </div>
            </div>
            <button onClick={setMatr}>Заполнить</button>
            <button onClick={calculate}>Выполнить</button>
            <br/>
            {matrix?.map((N, indexN) => (
                <div style={{ display: 'flex', justifyContent: 'space-between' }} key={indexN}>
                    {N?.map((M, indexM) => (
                        <div style={{ width: '30px' }} key={indexM}>{M}</div>
                    ))}
                </div>
            ))}
            <br/>
            <div>
                Ответ: {answer.map((e, i) => <div key={i}>{e}</div>)}
            </div>
        </div>
    )
}
export default Task4