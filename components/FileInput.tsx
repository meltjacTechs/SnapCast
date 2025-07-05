import Image from "next/image";

const FileInput = ({id, label, accept, file, previewUrl, inputRef, onChange, onReset, type}: FileInputProps) => {
    return (
        <section className="file-input">
            <label htmlFor={id}>{label}</label>

            <input
              type="file"
              id={id}
              accept={accept}
              ref={inputRef}
              hidden
              onChange={onChange}
            />
            {!previewUrl ? (
                <figure>
                    <Image src="/assets/icons/upload.svg" alt="Upload Icon" width={24} height={24} />
                    <p>Click to upload your {id}</p>
                </figure>
            ): (
                <div></div>
            )}
        </section>
    )
}
export default FileInput
