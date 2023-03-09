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
      id: 0,
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
        id: Date.now(),
        addDate: date,
        addDistance: distance
      }
    })
    console.log(form);
  }
  
  const remove = (e) => {
    e.preventDefault();
    const {addDate, addDistance} = form.table;
    setForm({
      addDate: '',
      addDistance: ''
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
        <Table form={form.table} dateText={dateText} distanceText={distanceText} action={action} onRemove={remove}/>
      </div>
    </div>
  )
}

export default App
