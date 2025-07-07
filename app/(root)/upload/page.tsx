"use client"

import FormField from "@/components/FormField";
import FileInput from "@/components/FileInput";
import {ChangeEvent, FormEvent, useState} from "react";
import {useFileInput} from "@/lib/hooks/useFileInput";
import {MAX_THUMBNAIL_SIZE, MAX_VIDEO_SIZE} from "@/constants";

const Page = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        title:'',
        description:'',
        visibility: 'public',
    })

    const video = useFileInput(MAX_VIDEO_SIZE);
    const thumbnail = useFileInput(MAX_THUMBNAIL_SIZE);

    const [error, setError] = useState('');

    const handleInputChange = (e: ChangeEvent) => {
        const { name, value } = e.target;

        setFormData((prevState) => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = async (e: FormEvent)=> {
        e.preventDefault();

        setIsSubmitting(true);

        try{
            if(!video.file || !thumbnail.file){
                setError('Please upload both a video and a thumbnail.');
                return;
            }
            if(!formData.title || !formData.description){
              setError('Please fill in all the details.');
              return;
            }

            //upload the video to Bunny
            //Upload the thumbnail to DB
            //Attach thumbnail
            //Create a new DB entry for the video details (urls, data)

        } catch(error){
            console.log("Error submitting form", error);
        } finally{
            setIsSubmitting(false);
        }
    }

    return (
        <div className="wrapper-md upload-page">
            <h1>Upload a video</h1>
            {error && <div className="error-field">{error}</div>}
            <form className="rounded-20 shadow-10 gap-6 w-full flex flex-col px-5 py-7.5" onSubmit={handleSubmit}>
                <FormField
                id="title"
                label="Title"
                placeholder="Enter a clear and concise title for your video."
                value={formData.title}
                onChange={handleInputChange}
            />
            <FormField
                 id="description"
                 label="Description"
                 placeholder="Describe what this video is about."
                 value={formData.description}
                 as="textarea"
                 onChange={handleInputChange}
            />

            <FileInput
               id="video"
               label="Video"
               accept="video/*"
               file={video.file}
               previewUrl={video.previewUrl}
               inputRef={video.inputRef}
               onChange={video.handleFileChange}
               onReset={video.resetFile}
               type="video"
            />
            <FileInput
               id="thumbnail"
               label="Thumbnail"
               accept="image/*"
               file={thumbnail.file}
               previewUrl={thumbnail.previewUrl}
               inputRef={thumbnail.inputRef}
               onChange={thumbnail.handleFileChange}
               onReset={thumbnail.resetFile}
               type="image"
            />
                <FormField
                    id="visibility"
                    label="Visibility"
                    value={formData.visibility}
                    as="select"
                    options={[
                        {value: 'public', label: 'Public'},
                        {value: 'private', label: 'Private'},
                    ]}
                    onChange={handleInputChange}
                />
                <button type="submit" disabled={isSubmitting} className="submit-button">
                    {isSubmitting ? 'Uploading...' : 'Upload Video'}
                </button>
            </form>

        </div>
    )
}
export default Page
