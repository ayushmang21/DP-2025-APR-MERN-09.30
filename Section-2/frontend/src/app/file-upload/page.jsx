'use client';
import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const FileUpload = () => {

    const [preview, setPreview] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const upload = (e) => {
        const file = e.target.files[0];
        const fd = new FormData();
        fd.append('file', file);
        fd.append('upload_preset', 'MERN_9:30')
        fd.append('cloud_name', 'dzjjvydkz')

        axios.post('https://api.cloudinary.com/v1_1/dzjjvydkz/image/upload', fd)
            .then((result) => {
                toast.success('File upload successfully');
                console.log(result.data);
                setPreview(result.data.url);
                setImageUrl(result.data.url);
            }).catch((err) => {
                console.log(err);
                toast.error('failed to upload file');
            });
    };

    return (
        <div className='bg-emerald-800 min-h-screen py-16'>
            <h1 className='text-center font-bold text-3xl text-white underline decoration-amber-500 decoration-double underline-offset-4'>File Upload</h1>
            <div className='flex justify-center items-center mt-8'>
                <input onChange={upload} accept='image/*' type="file" name="file" className='border p-2 rounded' />

                {
                    preview && (
                        <div>
                            <img src={preview} alt="" width={500} />
                            <p className='text-2xl mt-4'>Image URL : {imageUrl}</p>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default FileUpload;