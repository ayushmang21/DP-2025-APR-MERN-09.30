'use client';
import { IconArrowBackUp, IconCircleCheck, IconTrash } from '@tabler/icons-react';
import React, { useState } from 'react'

const Todo = () => {

    // let count = 0;
    // const [count, setCount] = useState(0); // Using useState to manage the count state

    const [taskList, setTaskList] = useState([]);

    const addNewTask = (e) => {
        if (e.code === 'Enter') {
            console.log('New Task:', e.target.value);

            const newTask = { text: e.target.value, completed: false };
            setTaskList([newTask, ...taskList]); // Add new task to the beginning of the list

            e.target.value = ''; // Clear the input field after adding the task

        }
    }

    const updateTask = (index) => {
        // console.log(index);

        const temp = taskList;
        temp[index].completed = !temp[index].completed; // Toggle the completed status
        setTaskList([...temp]); // Update the task list with the modified task  
    }

    const deleteTask = (index) => {
        // console.log(index);

        const temp = taskList;
        temp.splice(index, 1); // Remove the task at the specified index
        setTaskList([...temp]); // Update the task list with the modified task list
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

                <div className='p-5 border-2 border-gray-300 rounded-lg'>
                    <input type="text" className='w-full px-3 py-2 border-b-2 border-gray-200 outline-0'
                        placeholder='Enter task here...'
                        onKeyDown={addNewTask} />
                </div>

                <div className='p-5 px-10 border-2 border-gray-300 rounded-lg mt-5'>
                    <h1 className='text-2xl font-bold mb-5'>Tasks</h1>
                    {
                        taskList.map((task, index) => {
                            return (
                                <div key={index} className='border-b border-l p-3 mb-8'>
                                    <div className='flex justify-between items-center'>
                                        <div>
                                            {
                                                task.completed
                                                    ?
                                                    <p className='p-2 text-sm text-white bg-green-500 rounded-full w-fit px-4 mb-2'>Completed</p>
                                                    :
                                                    <p className='p-2 text-sm text-white bg-red-500 rounded-full w-fit px-4 mb-2'>Not Completed</p>
                                            }
                                            <p className='text-xl'>{task.text}</p>
                                        </div>
                                        <div className='flex gap-3'>
                                            <button
                                                className={`p-3 text-white rounded-lg ${task.completed ? 'bg-red-600' : 'bg-green-700'} `}
                                                onClick={() => { updateTask(index) }}
                                            >
                                                {task.completed ? <IconArrowBackUp size={30} /> : <IconCircleCheck size={30} />}
                                            </button>
                                            <button
                                                className='p-3 bg-red-600 text-white rounded-lg hover:bg-red-700'
                                                onClick={() => { deleteTask(index) }}
                                            >
                                                <IconTrash color='black' size={30} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        </div >
    )
}

export default Todo;