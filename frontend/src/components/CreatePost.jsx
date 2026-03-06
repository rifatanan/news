import React from 'react'
import Button from '../utils/Button'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import toast from "react-hot-toast";
import { createNews } from '../lib/api/auth.api';
import useAuthStore from '../stores/auth.store';

const CreateNews = () => {

    const categoryOption= [ "international", "sports", "business", "technology", "entertainment", "health", "science" ]
    const { userName } = useAuthStore((state) => state)

    const [formData, setFormData] = useState({
        authorName: userName,
        short_description: "",
        description: "",
        category: ""
    })
    const navigate = useNavigate();

    const handleChange = (e) =>{
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name] : value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const data = await createNews(formData);
            console.log("Success:", data);
            if(data.success === true){
                toast.success('Create News Successfully!')
                navigate("/");
            }else{
                toast.error("Create News Failed.")
            }
        }
        catch (error) {
            toast.error(error)
        }
	}

    return (
        <div className='pt-32'>
            <div className="h-166 w-full flex justify-center items-center shadow-md ">
                <div className='p-10 h-5/6 lg:w-5/12 md:w-9/12 sm:w-9/12 bg-slate-200 shadow-md rounded-md'>
                    <div className='h-full'>
                        <h1 className='flex font-bold text-3xl justify-center'>Create Post</h1>
                        <form onSubmit={handleSubmit} className='w-full h-5/6 pt-3 gap-2'>
                            <div className='grid grid-flow-row gap-2'>
                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Short Description</label>
                                <input
                                    name="short_description"
                                    type="text"
                                    className="appearance-none w-full text-gray-700 ring-1 border-gray-100 rounded p-2 py-3 mb-3 outline-none focus:outline-none"
                                    placeholder={"Enter Your short description"}
                                    required={true}
                                    value={formData.short_description}
                                    onChange={handleChange}
                                />
                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Description</label>
                                <input
                                    name='description'
                                    type="text"
                                    className="appearance-none w-full text-gray-700 ring-1 border-gray-100 rounded p-2 py-3 mb-3 outline-none focus:outline-none"
                                    placeholder={"Enter Your Description"}
                                    required={true}
                                    value={formData.description}
                                    onChange={handleChange}
                                />

                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Post Category</label>
                                <select
                                    name="category"
                                    id="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className='border outline-none p-1 mb-2 capitalize rounded'
                                    required
                                >
                                    <option value="" disabled>Select a category</option>
                                    {categoryOption.map((item, index) =>
                                        <option value={item} className=' capitalize' key={index}>{item}</option>
                                    )}
                                </select>
                            </div>
                            <Button name="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateNews