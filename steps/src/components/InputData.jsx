const InputData = ({date, setDate, dateText}) => {

    return(
        <>
            <label>
                <div>{dateText}</div>
                <input type='text' name="date" value={date} onChange={setDate}/>
            </label>
        </>
    );
}

export default InputData;