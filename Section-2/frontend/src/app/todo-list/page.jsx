'use client';
import React, { useState } from 'react'

const Todo = () => {

    // let count = 0;
    // const [count, setCount] = useState(0); // Using useState to manage the count state

    const [taskList, setTaskList] = useState([]);

    const addNewTask = (e) => {
        if(e.code === 'Enter') {
            console.log('New Task:', e.target.value);

            const newTask = { text: e.target.value, completed: false };
            setTaskList([ newTask, ...taskList ]); // Add new task to the beginning of the list

            e.target.value = ''; // Clear the input field after adding the task
            
        }
    }

    return (
        <div className='min-h-screen bg-gray-100 flex flex-col items-center py-14'>
            <h1 className='text-center font-bold text-3xl mb-6'>ToDo List App</h1>
            <div className='container mx-auto p-4 rounded-lg shadow-lg bg-white'>
                {/* <p>{count}</p>
                <button className='bg-blue-500 text-white p-3 rounded-lg'
                    onClick={() => { setCount(count + 1) ; console.log(count) }}>
                    Increment
                </button> */}

                <div className='p-5 border-2 border-gray-300 rounded-lg mb-5'>
                    <input type="text" className='w-full px-3 py-2 border-b-2 border-gray-200 outline-0'
                        placeholder='Enter task here...'
                        onKeyDown={addNewTask} />
                </div>

            </div>
        </div>
    )
}

export default Todo;