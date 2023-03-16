const InputData = ({date, setDate, dateText}) => {
    var dateReg = /^\d{2}[./-]\d{2}[./-]\d{4}$/

    return(
        <>
            <label>
                <div>{dateText}</div>
                <input type='date' name="date" value={date} onChange={setDate} />
            </label>
        </>
    );
}

export default InputData;