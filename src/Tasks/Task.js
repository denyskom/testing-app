import React from 'react';

const task = (props) => {
    let task = props.task;

    return(
        <div className="activity-task card border-success" style={{display:task.isAvailable?"inherit":"none"}}>
            <div className="card-header bg-transparent border-success"><h4>{task.title}</h4></div>
            <div className="card-body text-dark">
                <p className="card-text">{task.description}</p>
                <a href={task.additionalInfo}>Додаткова інформація</a>
            </div>
            <div className="card-footer bg-transparent border-success">
                <form>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Link"
                               aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button">Надіслати</button>
                            </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default task;
