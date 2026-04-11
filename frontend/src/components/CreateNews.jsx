import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import toast from "react-hot-toast";
import { createNews } from '../lib/api/auth.api';
import useAuthStore from '../stores/auth.store';
import axios from 'axios';

const CreateNews = () => {

    const { userName, categoryOption } = useAuthStore((state) => state)

    const [formData, setFormData] = useState({
        authorName: userName,
        title: "",
        description: "",
        category: ""
    })
    const navigate = useNavigate();
    const [image, setImage] = useState();
    const [isLoading, setIsLoading ] =  useState(false);

    const handleChange = (e) =>{
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name] : value
        }))
    }

    const upLoadImage = async (file) => {
        if (!file) return null;
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset","image_url");
        try {
            const uploadUrl = `${import.meta.env.VITE_CLOUDINARY_URL}/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`;
            const response = await axios.post(uploadUrl, data);
            
            if (response.status !== 200) {
                toast.error(data?.error?.message || "Upload failed");
            }
            const { secure_url } = response.data;
            return secure_url;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);

            const imageURL = await upLoadImage(image);
            
            const payload = {
                ...formData,
                imageURL
            }

            const data = await createNews(payload);
            if (data && data.success === true) {
                toast.success('Create News Successfully!');
                navigate("/");
            } else {
                setIsLoading(false);
                toast.error("Create News Failed.")
            }
        }
        catch (error) {
            toast.error(error?.message || error)
        }
        finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="h-166 w-full flex justify-center items-center shadow-md ">
            <div className='p-10 h-5/6 lg:w-5/12 md:w-9/12 sm:w-9/12 bg-slate-200 shadow-md rounded-md'>
                <div className='h-full'>
                    <h1 className='flex font-bold text-3xl justify-center'>Create Post</h1>
                    <form onSubmit={handleSubmit} className='w-full h-5/6 pt-3 gap-2'>
                        <div className='grid grid-flow-row gap-2'>
                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Short Description</label>
                            <input
                                name="title"
                                type="text"
                                className="appearance-none w-full text-gray-700 ring-1 border-gray-100 rounded p-2 py-3 mb-3 outline-none focus:outline-none"
                                placeholder={"Enter Your Title"}
                                required={true}
                                value={formData.title}
                                onChange={handleChange}
                            />
                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Description</label>
                            <textarea
                                name='description'
                                type="text"
                                className="appearance-none w-full text-gray-700 ring-1 border-gray-100 rounded p-2 py-3 mb-3 outline-none focus:outline-none"
                                placeholder={"Enter Your Description"}
                                required={true}
                                value={formData.description}
                                onChange={handleChange}
                            />

                            <label >Cover Photo</label>
                            <input
                                type="file"
                                className='border cursor-pointer p-1'
                                accept="image/*"
                                onChange={(e) => setImage(e.target.files && e.target.files[0])}
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
                                    <option value={item} className=' capitalize' key={index}>{item.name}</option>
                                )}
                            </select>
                        </div>
                        <button 
                            type='submit'
                            className={`bg-cyan-400 text-white font-[Poppins] duration-500 md:my-0 p-2 py-2 rounded-md cursor-pointer`}
                            disabled={isLoading}
                        >{ isLoading? "Submitting":"Submit" }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateNews