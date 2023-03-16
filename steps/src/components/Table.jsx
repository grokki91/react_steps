const Table = ({form, onRemove, dateText, distanceText, action}) => {

    return(
        <div className="table">
            <div className="text">            
                <div className="date">{dateText}</div>
                <div className="distance">{distanceText}</div>
                <div className="action">{action}</div>
            </div>
                {
                    form.map(el => {
                        return (
                            <div className="addFields" key={el.id}>
                                <input value={el.date.replace(/([0-9]+)\-([0-9]+)\-([0-9]+)/,"$3.$2.$1")} readOnly/>
                                <input value={el.distance} readOnly/>
                                <div className="tools">
                                    <button>&#9998;</button>
                                    <button onClick={() => onRemove(el.id)}>&#10006;</button>
                                </div>
                            </div>
                        );
                    })
                }
        </div>

    );
}

export default Table;