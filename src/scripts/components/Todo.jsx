import { useState } from 'react'
import '../../stylesheets/css/main.css'
import Done_list from './Todo_components/Done_list.jsx'
import Swal from 'sweetalert2'



const Todo = () => {
    const [title, setTitle] = useState('')


    const data = JSON.parse(localStorage.getItem('data')) || [];
    const [item, setItem] = useState(data);
    const done = [];
    const todo = [];
    item.map(item => {
        if (item.done === true) {
            done.push(item)
        } else {
            todo.push(item)
        }
    })


    const formSubmit = () => {
        const obj = {
            id: Date.now(),
            title: title,
            done: false
        }

        const newTodos = [...item];
        newTodos.push(obj);
        setItem(newTodos)

        localStorage.setItem('data', JSON.stringify(newTodos))
        document.getElementById('input').value = ''
    }

    const delTodo = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const newTodos = item.filter(item => item.id !== id)
                setItem(newTodos)

                localStorage.setItem('data', JSON.stringify(newTodos))
            } else if (result.isDismissed) {
                console.log('cancelled');
            }
        })

    }



    const checkTodo = (id) => {
        const newTodos = item.filter(item => {
            if (item.id === id) {
                item.done = !item.done
            }
            return item
        })
        setItem(newTodos)

        localStorage.setItem('data', JSON.stringify(newTodos))
    }


    return (
        <div className="todo__block">
            <div className="todo__form">
                <input onChange={(e) => setTitle(e.target.value)} type="text" aria-label='input' placeholder='Add a new task' id="input" required />
                <button disabled={title === ''} onClick={formSubmit} className="todo__form__btn" type="submit"></button>
            </div>
            <div className="todo__list">
                <h2 className="todo__list__title">Tasks to do - {todo.length}</h2>
                <ul className="todo__list__box">
                    {todo.map(item => {
                        return (
                            <li key={item.id} className="todo__list__item">
                                <p className="todo__item__text">{item.title}</p>
                                <div className="todo__item__btnBox">
                                    <button className="todo__item__checkBtn" onClick={() => checkTodo(item.id)}></button>
                                    <button className="todo__item__delBtn" onClick={() => delTodo(item.id)}></button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <Done_list count={done.length} done={done} />
        </div>
    )
}

export default Todo