import { useEffect, useState } from "react"
import TodoItem from "./TodoItem"
import {db} from "../firebase"
import { collection, onSnapshot ,addDoc} from "firebase/firestore"
import { Button } from "@material-ui/core"

const Todos = () => {
    const [todos, setTodos] = useState([])

    useEffect(async () => {
        const todosCol = collection(db,'todos')
        const unsubscribe = await onSnapshot(todosCol, (querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id:doc.id});
        })
        setTodos(docs)
        })
          
        return () => {
            unsubscribe()
        }
    }, [])
    
    const addTodo = async()=>{
        const docRef=await addDoc(collection(db,"todos"),{
            completed:false,
            todo:""
        })
    }

    return (
        <div>
            {todos.map((todoItem)=>{
                return <TodoItem completed={todoItem.completed} todo={todoItem.todo} id={todoItem.id} />
            })}
            <div className="add-button">
                <Button onClick={addTodo}>Add Todo</Button>
            </div>
        </div>
    )
}

export default Todos