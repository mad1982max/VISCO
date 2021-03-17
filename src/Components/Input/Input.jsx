import FileInfoElement from "../FileInfo/FileInfoElement";
import { useRef, useState } from "react";
import format from "date-format";
import XLSX from "xlsx";
import "./input.css";

console.log("XLSX:", XLSX.version);

const Input = ({ type }) => {
  const inputEl = useRef(null);
  const [fileInfo, setFileInfo] = useState({});
  let fileReader;

  const handleFileRead = (evt) => {
    const data = fileReader.result;
    const workbook = XLSX.read(data, {
      type: "array",
    });
    const workingSheet = workbook.SheetNames[0];

    const dataCTDB = XLSX.utils.sheet_to_json(workbook.Sheets[workingSheet], {
      header: 1,
      raw: false,
    });

    const { Author, CreatedDate, LastAuthor, ModifiedDate } = workbook.Props;

    setFileInfo((prev) => ({
      ...prev,
      added: Date.now(),
      Author,
      CreatedDate: format("dd/MM/yyyy", CreatedDate),
      LastAuthor,
      ModifiedDate: format("dd/MM/yyyy", ModifiedDate),
    }));
  };

  const handleProgress = (e) => {
    const progress = (e.loaded / e.total).toFixed(0) * 100;
    setFileInfo((prev) => ({
      ...prev,
      progress,
    }));
  };

  const isEmptyObj = (obj) => Object.keys(obj).length === 0;

  const openFile = (evt) => {
    fileReader = new FileReader();
    fileReader.onload = handleFileRead;
    fileReader.onprogress = handleProgress;
    fileReader.readAsArrayBuffer(evt.target.files[0]);
    const { size, name } = evt.target.files[0];
    setFileInfo((prev) => ({
      ...prev,
      size: size.toFixed(1),
      name,
    }));
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
              accept=".json,.xls,.xlsx,.txt,.text,application/json,text/csv,text/plain"
              onChange={(evt) => openFile(evt)}
              ref={inputEl}
            />
          </div>
        </div>
        {!isEmptyObj(fileInfo) && <FileInfoElement fileInfo={fileInfo} />}
      </div>
    </>
  );
};

export default Input;
