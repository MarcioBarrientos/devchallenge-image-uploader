import { useDropzone } from 'react-dropzone'

type UploadCardProps = {
  onDrop: (acceptedFiles: File[]) => void
}
const UploadCard = ({ onDrop }: UploadCardProps) => {
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({ onDrop })
  return (
    <div className="card dropzone-container">
      <h2 className="title">Upload your image</h2>
      <h3 className="subtitle">File should be .jpeg or .png</h3>

      <div className={`dropzone-area ${isDragActive && 'active'}`} {...getRootProps()}>
        <input {...getInputProps()} />
        <img src="/public/image.svg" alt=""/>
        <div>
          {
            isDragActive ?
              <p>Drop the files here</p> :
              <p>Drag & Drop your image here</p>
          }
        </div>
      </div>
      <div className="spacing">
        Or
      </div>

      <button onClick={open} type="button">Choose a file</button>
    </div>
  )
}
export default UploadCard