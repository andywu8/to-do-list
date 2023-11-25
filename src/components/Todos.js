import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";

const mapStateToProps = (state) => {
    return {
        todos: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
    };
};
function Todos(props){
    console.log("props", props);

    const [todo, setTodo] = useState("");
    function add(){
        if (todo === ""){
            alert("input is empty");
        } else {
            props.addTodo({
                id:  Math.floor(Math.random() * 1000),
                item: todo,
                completed: false,
            });
            setTodo("");
        }
    }
    return (
        <div className="addTodos">
            <input type="text" onChange={e=>setTodo(e.target.value)} value={todo} />
            <button onClick={add}>Add</button>
            <ul>
            {props.todos.length > 0 && props.todos.map((item) => {
                return <li key={item.id}>{item.item}</li>;
            })}
        </ul>
        </div>
    )
}

export default connect(null, null)(Todos);