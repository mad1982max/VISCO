import "./fileInfo.css";

const FileInfoElement = ({ fileInfo }) => {
  const {
    name,
    size,
    progress,
    Author,
    CreatedDate,
    LastAuthor,
    ModifiedDate,
  } = fileInfo;

  console.log("date", CreatedDate);
  return (
    <div className="row">
      <div className="col-auto p-1">
        <div className="file-info p-1">
          <div className="title-wrapper d-flex align-items-center">
            <div className="title">NAME:</div>
            <div className="name">{name}</div>
          </div>
          <div className="title-wrapper d-flex align-items-center">
            <div className="title">SIZE:</div>
            <div className="name">{size} KB</div>
          </div>
          <div className="loader">{progress} %</div>

          <div className="title-wrapper d-flex align-items-center">
            <div className="title">Author:</div>
            <div className="name">{Author}</div>
          </div>

          <div className="title-wrapper d-flex align-items-center">
            <div className="title">CREATED:</div>
            <div className="name">{CreatedDate}</div>
          </div>

          <div className="title-wrapper d-flex align-items-center">
            <div className="title">MODIFIED:</div>
            <div className="name">{ModifiedDate}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileInfoElement;
