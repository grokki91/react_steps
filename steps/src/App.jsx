import './App.css'
import InputData from './components/InputData'
import InputNumber from './components/inputNumber'
import Table from './components/Table'
import { useState } from 'react'

function App() {
  const [date, setDate] = useState('');
  const [distance, setDistance] = useState('');
  const [form, setForm] = useState([]);

  const handleInputDate = (e) => {
    setDate(e.target.value);
  }

  const handleInputDistance = (e) => {
    setDistance(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const dateReg = /^\d{2}[./-]\d{2}[./-]\d{4}$/
    if (date && distance && date.match(dateReg)) {
      const newform = {
        id: new Date(),
        date: date,
        distance: distance
      }
      setForm([...form, newform]);
      setDate('');
      setDistance('');
    } else {
      return setDate('Некорректная дата!')
    }
  }

  const onRemove = (id) => {
    setForm([...form.filter(data => data.id !== id)]);
  }

  const dateText = 'Дата (ДД.ММ.ГГГГ)';
  const distanceText = 'Пройдено км';
  const action = 'Действия';

  return (
    <div className="App">
      <div className='container'>
        <form className="add" onSubmit={handleSubmit}>
          <InputData date={date} setDate={handleInputDate} dateText={dateText}/>
          <InputNumber distance={distance} setDistance={handleInputDistance} distanceText={distanceText}/>
          <button type='submit'>OK</button>
        </form>
        <Table form={form} onRemove={onRemove} dateText={dateText} distanceText={distanceText} action={action}/>
      </div>
    </div>
  )
}

export default App