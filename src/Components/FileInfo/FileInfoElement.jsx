const FileInfoElement = ({ name, size, progress }) => (
  <div className="col-auto p-1">
    <div className="file-info p-1">
      <div className="title-wrapper d-flex align-items-center">
        <div className="name-title">NAME:</div>
        <div className="name">{name}</div>
      </div>
      <div className="title-wrapper d-flex align-items-center">
        <div className="name-title">SIZE:</div>
        <div className="lastUpdate">{size} KB</div>
      </div>
      <div className="loader">{progress} %</div>
    </div>
  </div>
);

export default FileInfoElement;
