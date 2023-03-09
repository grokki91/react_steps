const Table = ({form, dateText, distanceText, action, onRemove}) => {
    return(
        <div className="table">
            <div className="text">            
                <div className="date">{dateText}</div>
                <div className="distance">{distanceText}</div>
                <div className="action">{action}</div>
            </div>
            <div className="addFields">
                <input value={form.addDate.replace(/([0-9]+)\-([0-9]+)\-([0-9]+)/,"$3.$2.$1")} readOnly/>
                <input value={form.addDistance} readOnly/>
                <div className="tools">
                    <button onClick={onRemove}>&#9998;</button>
                    <button>&#10006;</button>
                </div>
            </div>
        </div>
    );
}

export default Table;