import FileInfoElement from "../FileInfo/FileInfoElement";
import { useRef, useState } from "react";
import "./input.css";

const Input = ({ type }) => {
  const inputEl = useRef(null);
  const [fileInfo, setFileInfo] = useState({});
  const [progress, setProgress] = useState("");
  let fileReader;

  const handleFileRead = (evt) => {
    const content = fileReader.result;

    // console.log(content);
  };

  const handleProgress = (e) => {
    const progress = (e.loaded / e.total).toFixed(0) * 100;
    setProgress(progress);
  };

  const isEmptyObj = (obj) => Object.keys(obj).length == 0;

  const openFile = (evt) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.onprogress = handleProgress;
    fileReader.readAsText(evt.target.files[0]);
    const { size, name } = evt.target.files[0];
    setFileInfo({ size: size.toFixed(1), name });
  };

  const upload = (evt) => {
    inputEl.current.click();
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-start align-items-center">
          <div className="col-auto sourceName">
            <div className="sourceName">{type}</div>
          </div>
          <div className="col-auto text-left">
            <button className="btn btn-load" onClick={upload}>
              Download
            </button>
          </div>
          <div className="col-0">
            <input
              className="defaultInput"
              multiple={false}
              type="file"
              accept=".json,.csv,.xls,.xlsx,.txt,.text,application/json,text/csv,text/plain"
              onChange={(evt) => openFile(evt)}
              ref={inputEl}
            />
          </div>
          {!isEmptyObj(fileInfo) && (
            <FileInfoElement
              name={fileInfo.name}
              size={fileInfo.size}
              progress={progress}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Input;
