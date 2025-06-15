'use client';
import React from 'react'

const EventHandling = () => {

    const previewImage = (e) => {
        const file = e.target.files[0]; // Get the first file from the FileList
        const reader = new FileReader(); // Create a new FileReader instance
        reader.onload = (data) => { // When the file is loaded, this function will be called
            const img = new Image(); // Create a new Image element
            img.src = data.target.result; // Set the source of the image to the data URL
            img.style.maxWidth = '50%'; // Set the maximum width of the image
            document.body.appendChild(img); // Append the image to the body
        }
        reader.readAsDataURL(file); // Read the file as a data URL
    };

    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-center text-3xl font-bold'>Event Handling</h1>
            <p className='text-center text-xl'>In this section, we will explore how to handle events in React.</p>

            <div className='mt-8 space-y-10'>
                {/* <button className='bg-black text-white p-5' onClick={alert('Button is Clicked')} >Click Event</button> */}
                <button className='bg-black text-white p-5' onClick={() => { alert('Button is Clicked') }} >Click Event</button>

                <div className='w-1/2 mx-auto h-56 bg-amber-300'
                    onMouseUp={(e) => {
                        console.log(e.clientX, e.clientY);
                    }}
                >
                    Move your mouse over this box
                </div>

                <input type="text" className='border-2 p-3 w-1/2' placeholder='Try Typing something...'
                    onKeyDown={(e) => {
                        console.log('Key Pressed:', e.key);
                        console.log('Key Code:', e.code);
                    }}
                />

                <input type="text" className='border-2 p-3 w-1/2 block mx-auto' placeholder='Enter text...'
                    onChange={(e) => {
                        console.log('Input Value:', e.target.value);
                    }}
                />

                <input type="color" onChange={(e) => { document.body.style.backgroundColor = e.target.value }} />

                <input type="file" className='p-5 border-2 bg-amber-300 block rounded-full'
                    accept='image/*' onChange={previewImage}
                />

            </div>

        </div>
    )
}

export default EventHandling;