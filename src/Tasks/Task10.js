import React from "react";
import './styles.css'


export default class Task10 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            flight: [],
            createForm: false,
            id: '',
            busTime: '',
            depatureTime: '',
            name: '',
            arriveTime: ''
        }
    }

    componentDidMount() {
        const localflight = localStorage.getItem('flight')
        if (Array.isArray(JSON.parse(localflight))) this.setState({ flight: JSON.parse(localflight) })
    }

    componentWillUnmount() {
        this.setflight()
    }

    setflight = () => {
        localStorage.setItem('flight', JSON.stringify(this.state.flight))
    }

    create = () => {
        const newFlight = {
            id: this.state.id,
            busTime: this.state.busTime,
            depatureTime: this.state.depatureTime,
            name: this.state.name,
            arriveTime: this.state.arriveTime,
        }
        if (Object.values(newFlight).some(i => i === '')) {
            alert('Пожалуйста заполните все поля')
        } else {
            this.setState({ flight: [...this.state.flight, newFlight] }, () => {
                this.setflight()
                this.setState({
                    createForm: false,
                    id: '',
                    busTime: '',
                    depatureTime: '',
                    name: '',
                    arriveTime: '',
                    countPages: '',
                })
            })
        }
    }

    render() {
        return (
            <div className='center '>
                <h1>Task10</h1>
                <button onClick={() => this.setState({ createForm: !this.state.createForm })} >Создать рейс</button>
                {this.state.createForm
                    ? <div className='between'>
                        <div className='row between'>
                            <label>
                                Номер рейса
                                <input value={this.state.id} onChange={e => this.setState({ id: e.target.value })} />
                            </label>
                        </div>
                        <div className='row between'>
                            <label>
                                Тип автобуса
                                <input value={this.state.busTime} onChange={e => this.setState({ busTime: e.target.value })} />
                            </label>
                        </div>
                        <div className='row between'>
                            <label>
                                Пункт назначения
                                <input value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                            </label>
                        </div>
                        <div className='row between'>
                            <label>
                                Время отправления
                                <input value={this.state.depatureTime} onChange={e => this.setState({ depatureTime: e.target.value })} />
                            </label>
                        </div>
                        <div className='row between'>
                            <label>
                                Время прибытия
                                <input value={this.state.arriveTime} onChange={e => this.setState({ arriveTime: e.target.value })} />
                            </label>
                        </div>
                        <button onClick={() => this.create()}>Создать</button>
                    </div>
                    : <div style={{ width: 800, display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                        <div style={{ width: 800, display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ width: 50 }} >Номер рейса</span>
                            <span style={{ width: 50 }} >Тип автобуса</span>
                            <span style={{ width: 50 }} >Пункт назначения</span>
                            <span style={{ width: 50 }} >Время отправления</span>
                            <span style={{ width: 50 }} >Время прибытия</span>
                        </div>
                        {this.state.flight.sort((a, b) => a.busTime.localeCompare(b.busTime)).map(i => <div style={{ width: 800, marginBottom: 10, display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ width: 50 }} >{i.id}</span>
                            <span style={{ width: 50 }} >{i.busTime}</span>
                            <span style={{ width: 50 }} >{i.depatureTime}</span>
                            <span style={{ width: 50 }} >{i.name}</span>
                            <span style={{ width: 50 }} >{i.arriveTime}</span>
                        </div>)}
                    </div>}
            </div>
        )
    }

}