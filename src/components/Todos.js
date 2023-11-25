import React, { useState } from "react";
import { connect } from "react-redux";

function Todos(){
    const [todo, setTodo] = useState("");
    return (
        <div className="addTodos">
            <input type="text" onChange={e=>setTodo(e.target.value)} value={todo} />
            <button>Add</button>
        </div>
    )
}

export default connect(null, null)(Todos);