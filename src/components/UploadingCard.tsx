type UploadingProps = {
  uploadProgress: number
}
const UploadingCard = ({ uploadProgress }: UploadingProps) => {
  return (
    <div className="card uploading-container">
      <h3 className="title">Uploading...</h3>
      <div className="upload-bar">
        <div className="upload-indicator" style={{ width: `${uploadProgress}%` }}/>
      </div>
    </div>
  )
}

export default UploadingCard
