const InputData = ({date, setDate, dateText}) => {

    return(
        <>
            <label>
                <div>{dateText}</div>
                <input 
                    type='text'
                    name='date'
                    value={date ? date.replace(/[/,-]/, '.') : ''}
                    onChange={setDate} maxLength={10}
                />
            </label>
        </>
    );
}

export default InputData;