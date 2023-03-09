const Table = ({form, dateText, distanceText, action}) => {
    return(
        <div className="table">
            <div className="text">            
                <div className="date">{dateText}</div>
                <div className="distance">{distanceText}</div>
                <div className="action">{action}</div>
            </div>
            <div className="addFields">
                <input value={form.addDate} readonly/>
                <input value={form.addDistance} readonly/>
                {/* <div>{form.addDate}</div>
                <div>{form.addDistance}</div> */}
                <div>
                    <button>Del</button>
                    <button>Correct</button>
                </div>
            </div>
        </div>
    );
}

export default Table;