'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ManageUsers = () => {

    const [loading, setLoading] = useState(false);
    const [userList, setUserList] = useState([]);

    // Function to fetch users from the API/Backend
    const fetchUsers = () => {
        setLoading(true);
        const res = axios.get('http://localhost:5000/user/getall')
        console.log(res.data);
        setUserList(res.data); // Assuming the response is an array of user objects
        setLoading(false);
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className='bg-emerald-800 min-h-screen py-16'>
            <h1 className='text-center font-bold text-3xl text-white'>Manage Users</h1>

            <div>
                {
                    loading ? (
                        <p>Loading...Please Wait...!!</p>
                    )
                        : (
                            <table>
                                <thead>
                                    <tr>
                                        <th className='text-white'>User ID</th>
                                        <th className='text-white'>Username</th>
                                        <th className='text-white'>Email</th>
                                        <th className='text-white'>Registered At`</th>
                                        <th className='text-white'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        userList.map((user) => {
                                            return (
                                                <tr>
                                                    <td>{user._id}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        )
                }
            </div>
        </div>
    )
}

export default ManageUsers;