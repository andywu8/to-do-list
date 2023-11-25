import React, { useState } from "react";


export default function Todos(){
    const [todo, setTodo] = useState("");
    return (
        <div className="addTodos">
            <input type="text" onChange={e=>setTodo(e.target.value)} value={todo} />
            <button>Add</button>
        </div>
    )
}