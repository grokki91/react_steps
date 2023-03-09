import './App.css'
import InputData from './components/InputData'
import InputNumber from './components/inputNumber'
import Table from './components/Table'
import { useState } from 'react'

function App() {
  const [form, setForm] = useState({
    date: '',
    distance: '',
    table: {
      addDate: '',
      addDistance: ''
    }
  });

  const handleInput = (e) => {
    const {name, value} = e.target;
    setForm((prev) => ({...prev, [name]: value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const {date, distance} = form;
    setForm({
      date: '',
      distance: '',
      table: {
        addDate: date,
        addDistance: distance
      }
    })
  }


  const dateText = 'Дата (ДД.ММ.ГГ)';
  const distanceText = 'Пройдено км';
  const action = 'Действия';

  return (
    <div className="App">
      <div className='container'>
        <form className="add" onSubmit={handleSubmit}>
          <InputData date={form.date} setDate={handleInput} dateText={dateText}/>
          <InputNumber distance={form.distance} setDistance={handleInput} distanceText={distanceText}/>
          <button type='submit'>OK</button>
        </form>
        <Table form={form.table} dateText={dateText} distanceText={distanceText} action={action}/>
      </div>
    </div>
  )
}

export default App
