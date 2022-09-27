import './Date.css';
import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import addDays from 'date-fns/addDays' 

const Date = () => {
    const [firstDate,setFirstDate]=useState(null)
    const [lastDate,setLastDate]=useState(null)
    const [duration,setDuration]=useState(0)
    return (
    <>
    <div className='date-picker-header'>
      <h1>DATE PICKER</h1>
    </div>
    <div className='container dates col-md-4'>
        <h3 className='label-text'>Start Date</h3>
            <DatePicker selected={firstDate} onChange={(e) => setFirstDate(e)} dateFormat="dd-MM-yyyy" className='date-picker-input'/>
        <h3 className='label-text'>Add Duration in Days</h3>
            <input type='number' value={duration} className='date-picker-input'  onChange={(e) => { setDuration(e.target.value); setLastDate(addDays(firstDate, e.target.value)) }}/>
        <h3 className='label-text'>To Date</h3>
            <DatePicker selected={lastDate} dateFormat="dd-MM-yyyy" className='date-picker-input'/>
    </div>
    </>
    );
}

export default Date