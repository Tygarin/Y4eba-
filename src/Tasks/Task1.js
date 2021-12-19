import React from "react";
import './styles.css'

export default class Task1 extends React.Component {
    state = {
        x: 0.4 * Math.pow(10, 4),
        y: -0.875,
        z: -0.475 * Math.pow(10, -3),
        answer: 0
    }

    calc = () => {
        const { x, y, z } = this.state
        const answer = Math.pow(Math.abs(Math.cos(x) - Math.cos(y)), 1 + 2 * Math.pow(Math.sin(y), 2)) * (1 + z + Math.pow(z, 2) / 2 + Math.pow(z, 3) / 3 + Math.pow(z, 4) / 4)
        this.setState({answer})
    }

    render() {
        return (
            <div className='center '>
                <h1>Task1</h1>
                X: <input value = {this.state.x} onChange={e => this.setState({x: e.target.value})}/>
                Y: <input value = {this.state.y} onChange={e => this.setState({y: e.target.value})}/>
                Z: <input value = {this.state.z} onChange={e => this.setState({z: e.target.value})}/>
                <br/>
                <button onClick={() => this.calc()}>ПОСЧИТАТЬ</button>
                answer: {this.state.answer}
            </div>
        )
    }
}

