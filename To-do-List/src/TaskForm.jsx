import React, { useState } from 'react'

const TaskForm = () => {
    const [value,setValue] = useState("");
    const [listItems, setListItems] = useState([]);
    function handleAddItem() {
        if (value.trim() === "") return
        setListItems(c=>[...c,{item:value,completed:false}])
        setValue("");
    }
    function handleRemoveItem(id) {
        setListItems(listItems.filter((_,index)=>index !== id))
    }
    function handleCheckItem(id) {
        setListItems(listItems.map((item, index) => {
          if (index === id) {
            return { ...item, completed: !item.completed }; // toggle completion
          }
          return item;
        }));
      }
    return(
    <div>
          <button onClick={handleAddItem}>+</button>
          <input 
          value={value} 
          type="text" 
          placeholder='Your next task...'
          onChange={ev=>setValue(ev.target.value)}
          />
          <ul>
            {listItems.map((item,index)=><li 
            key={index} 
            onClick={()=>handleCheckItem(index)} 
            onDoubleClick={()=>handleRemoveItem(index)}
            style={{ textDecoration: item.completed ? "line-through" : "none" }}
            >{item.item}</li>)
            }
          </ul>
    </div>
    )
}

export default TaskForm;