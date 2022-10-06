import { useCallback, useState } from 'react'
import './App.css'
import axios from 'axios'
import UploadCard from './components/UploadCard'
import UploadingCard from './components/UploadingCard'
import UploadedCard from './components/UploadedCard'

function App () {
  const [isUploading, setIsUploading] = useState<boolean>(false)
  const [uploadProgress, setUploadProgress] = useState<number>(0)
  const [uploadedFile, setUploadedFile] = useState<any | null>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setIsUploading(true)
    acceptedFiles.forEach((file) => {
      const data = new FormData()
      data.append('source', file)
      axios(
        {
          method: 'POST',
          url: '/api',
          data: data,
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          onUploadProgress: progressEvent => {
            if (progressEvent.total !== undefined){
              const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
              setUploadProgress(percentCompleted);
            }
          }
        }
      ).then(function (response) {
        setIsUploading(false)
        setUploadedFile(response.data.image)
      })
        .catch(function (error) {
          console.log(error)
        })
    })
  }, [])


  return (
    <div className="container">
      {!isUploading && !uploadedFile && <UploadCard onDrop={onDrop}/>}
      {isUploading && !uploadedFile && <UploadingCard uploadProgress={uploadProgress} />}
      {uploadedFile && <UploadedCard file={uploadedFile} />}
    </div>
  )

}

export default App
