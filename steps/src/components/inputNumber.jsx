const InputNumber = ({distance, setDistance, distanceText}) => {
    return(
        <>
            <label>
                <div>{distanceText}</div>
                <input type='text' name="distance" value={distance} onChange={setDistance}/>
            </label>
        </>
    );
}

export default InputNumber;