import React, { useState } from "react";


function Todos(){
    const [todo, setTodo] = useState("");
    function handleChange(e){
        setTodo(e.target.value);
    }
    return (
        <div className="addTodos">
            <input type="text" onChange={e=>setTodo(e.target.value)} value={todo} />
            <button>Add</button>
        </div>
    )
}