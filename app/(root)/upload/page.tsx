"use client"

import FormField from "@/components/FormField";
import FileInput from "@/components/FileInput";
import {ChangeEvent, useState} from "react";

const Page = () => {
    const [formData, setFormData] = useState({
        title:'',
        description:'',
        visibility: 'public',
    })

    const [error, setError] = useState(null);

    const handleInputChange = (e: ChangeEvent) => {
        const { name, value } = e.target;

        setFormData((prevState) => ({ ...prevState, [name]: value }))
    }

    return (
        <div className="wrapper-md upload-page">
            <h1>Upload a video</h1>
            {error && <div className="error-field">{error}</div>}
            <form className="rounded-20 shadow-10 gap-6 w-full flex flex-col px-5 py-7.5">
                <FormField
                   id="title"
                   label="Title"
                   placeholder="Enter a clear and concise title for your video."
                   value={formData.title}
                   onChange={handleInputChange}
                />
                <FileInput />
            </form>

        </div>
    )
}
export default Page
