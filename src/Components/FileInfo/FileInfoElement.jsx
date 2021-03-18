import "./fileInfo.css";

const FileInfoElement = ({ fileInfo, loaderIsVisible }) => {
  const {
    name,
    size,
    added,
    dbName,
    Author,
    CreatedDate,
    ModifiedDate,
  } = fileInfo;

  return (
    <div className="row">
      <div className="col-auto p-1">
        <div className="file-info">
          {loaderIsVisible ? (
            <>
              <div className="loader">
                <span>loading...</span>
              </div>
            </>
          ) : (
            <div className="db-name">{dbName}</div>
          )}

          <div className="title-wrapper d-flex align-items-center">
            <div className="title">NAME:</div>
            <div className="name">{name}</div>
          </div>
          <div className="title-wrapper d-flex align-items-center">
            <div className="title">SIZE:</div>
            <div className="name">{size} MB</div>
          </div>

          <div className="title-wrapper d-flex align-items-center">
            <div className="title">ADDED:</div>
            <div className="name">{added}</div>
          </div>

          <div className="title-wrapper d-flex align-items-center">
            <div className="title">AUTHOR:</div>
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

          <div className="close">&times;</div>
        </div>
      </div>
    </div>
  );
};

export default FileInfoElement;
