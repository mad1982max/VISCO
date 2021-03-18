import FileInfoElement from "../FileInfo/FileInfoElement";
import { useRef, useState } from "react";
import format from "date-format";
import XLSX from "xlsx";
import data from "../../data";
import "./input.css";

console.log("XLSX:", XLSX.version);
console.log("data", data.length);

const Input = ({ type }) => {
  const inputEl = useRef(null);
  const [fileInfo, setFileInfo] = useState({});
  const [loader, setLoader] = useState(true);
  const [dbName, setDBName] = useState("");

  let fileReader;

  const handleFileRead = (evt) => {
    const data = fileReader.result;
    const workbook = XLSX.read(data, {
      type: "array",
    });

    const { Author, CreatedDate, LastAuthor, ModifiedDate } = workbook.Props;

    setLoader(false);

    setFileInfo((prev) => ({
      ...prev,
      added: format("dd/MM/yyyy hh:mm", new Date()),
      Author,
      CreatedDate: format("dd/MM/yyyy", CreatedDate),
      LastAuthor,
      dbName,
      ModifiedDate: format("dd/MM/yyyy", ModifiedDate),
    }));
    setDBName("");
    const workingSheet = workbook.SheetNames[0];

    const dataCTDB = XLSX.utils.sheet_to_json(workbook.Sheets[workingSheet]);

    console.log("dataCTDB:", dataCTDB.length);
  };

  const isEmptyObj = (obj) => Object.keys(obj).length === 0;

  const openFile = (evt) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsArrayBuffer(evt.target.files[0]);
    const { size, name } = evt.target.files[0];

    setFileInfo((prev) => ({
      ...prev,
      size: (size / 1024 / 1024).toFixed(1),
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
          <div className="inputName">
            <label className="dbName" htmlFor="dbName">
              {type} name
            </label>
            <input
              onChange={(e) => setDBName(e.target.value)}
              value={dbName}
              name="dbName"
              type="text"
            />
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
        {!isEmptyObj(fileInfo) && (
          <FileInfoElement fileInfo={fileInfo} loaderIsVisible={loader} />
        )}
      </div>
    </>
  );
};

export default Input;
