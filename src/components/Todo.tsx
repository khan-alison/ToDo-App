import React from 'react';

interface IPropsTodo {
    taskName: string;
    done:boolean;
    index:number;
    onDelete:(index:any) => void;
    onChangeStatus:(index:any) => void;
}


interface IStateTodo {
}

class Todo extends React.Component<IPropsTodo,IStateTodo> {

    render() {
        const {taskName,done,index,onChangeStatus,onDelete} = this.props;
        return(
            <>
                <li 
                    style={{backgroundColor: done ? "green" : "red", display: "flex",listStyle: "none" }}
                    key={index}
                    className="list-item"
                    >
                    <div className="list-content" onClick={onChangeStatus}>{taskName}{done ? '-completed' : ''}</div>
                    <span className="delete-btn" onClick={onDelete}>x</span>
                </li>
            </>

        )
    }
}

export default  Todo;