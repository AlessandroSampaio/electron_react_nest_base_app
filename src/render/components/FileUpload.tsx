import React, { useState, useRef } from "react";
import { VscCloudUpload } from "react-icons/vsc";

const FileUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const files = event.dataTransfer.files;

    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleChooseFileClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div>
      <div
        className="border-4 rounded-2xl border-dashed p-4 mb-4 flex flex-col items-center justify-center"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div className="p-4">
          <VscCloudUpload color={"#2d99ff"} size={80} />
        </div>
        <p className="font-normal text-lg py-2">
          Arraste e solte um arquivo aqui
        </p>
        <p>ou</p>
        <input
          type="file"
          accept=".pdf, .doc, .docx"
          onChange={handleFileChange}
          ref={inputRef}
          className="hidden"
        />
        <button
          className="m-3 bg-white border border-[#2d99ff] shadow-md h-12 w-60 rounded-3xl flex flex-col items-center justify-center"
          onClick={handleChooseFileClick}
        >
          Escolher arquivo
        </button>
      </div>

      {selectedFile && (
        <div>
          <p>Arquivo Selecionado: {selectedFile.name}</p>
          <p>Tamanho: {selectedFile.size} bytes</p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
