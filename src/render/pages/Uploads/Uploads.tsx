import { VscChevronLeft, VscCloudUpload } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import React, { useState, useRef } from "react";
import ReactLoading from "react-loading";
import { ApiInfarma } from "../../services/apiInfarma";
import { BiCheckCircle, BiErrorCircle } from "react-icons/bi";
import { listFilesCSV } from "../../utils/listFilesCSV";

type ButtonState = "success" | "fail" | "empty";

export const Uploads: React.FC = () => {
  const [loadingButton, setLoadingButton] = useState(false);
  const [stateButton, setStateButton] = useState<ButtonState>("empty");
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const isFileNameAllowed = (fileName: string): boolean => {
    const isFound = listFilesCSV.some((item) => item.fileName === fileName);
    return isFound;
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const fileName = files[0].name;

      if (!isFileNameAllowed(fileName)) {
        alert("Nome do arquivo não permitido. Escolha outro arquivo.");
        // Limpar a seleção se o nome do arquivo não for permitido
        event.target.value = "";
        setSelectedFile(null);
        return;
      }

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
    setStateButton("empty");
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleBack = () => {
    navigate("/home");
  };

  const handleImportClick = async () => {
    if (selectedFile) {
      try {
        setStateButton("empty");
        setLoadingButton(true);

        let success;

        switch (selectedFile.name) {
          case "1_CLTRI.csv":
            success = await ApiInfarma.insertClatri(selectedFile);
            break;

          case "2_FABRI.csv":
            success = await ApiInfarma.insertFabri(selectedFile);
            break;

          case "3_GRPRC.csv":
            success = await ApiInfarma.insertGrprc(selectedFile);
            break;

          case "4_TBSEC.csv":
            success = await ApiInfarma.insertTbsec(selectedFile);
            break;

          case "5_TBNCM.csv":
            success = await ApiInfarma.insertTbncm(selectedFile);
            break;

          case "6_CLASS.csv":
            success = await ApiInfarma.insertClassi(selectedFile);
            break;

          case "7_PRATV.csv":
            success = await ApiInfarma.insertPratv(selectedFile);
            break;

          case "8_TBDCB.csv":
            success = await ApiInfarma.insertTbdcb(selectedFile);
            break;

          case "9_PAXCD.csv":
            success = await ApiInfarma.insertPaxcd(selectedFile);
            break;

          case "10_PRODU.csv":
            success = await ApiInfarma.insertProdu(selectedFile);
            break;

          case "11_PRXLJ.csv":
            success = await ApiInfarma.updatePrxlj(selectedFile);
            break;

          case "12_ENDER.csv":
            success = await ApiInfarma.insertEnder(selectedFile);
            break;

          case "13_GRCLI.csv":
            success = await ApiInfarma.insertGrcli(selectedFile);
            break;

          case "14_CLIEN.csv":
            success = await ApiInfarma.insertClien(selectedFile);
            break;

          case "15_BANCO.csv":
            success = await ApiInfarma.insertBanco(selectedFile);
            break;

          case "16_AGCOB.csv":
            success = await ApiInfarma.insertAgcob(selectedFile);
            break;

          case "17_CONVE.csv":
            success = await ApiInfarma.insertConve(selectedFile);
            break;

          case "18_CVXCL.csv":
             success = await ApiInfarma.insertCvxcl(selectedFile);
            break;

          case "19_CTMAG.csv":
            success = await ApiInfarma.insertCtmag(selectedFile);
            break;

          case "20_RECCT.csv":
            success = await ApiInfarma.insertRecct(selectedFile);
            break;

          case "21_FORNE.csv":
            success = await ApiInfarma.insertForne(selectedFile);
            break;

          case "22_BALIT.csv":
            success = await ApiInfarma.insertBalit(selectedFile);
            break;

          default:
            return;
        }

        if (success) {
          setStateButton("success");
        } else {
          setStateButton("fail");
        }
      } finally {
        setLoadingButton(false);
      }
    }
  };

  return (
    <div className=" flex flex-col justify-center items-center w-[full] rounded-[22px] py-6 px-9">
      <button onClick={handleBack} className="absolute top-6 p-2 left-2">
        <VscChevronLeft color={"#2d99ff"} size={23} />
      </button>
      <h1 className="text-2xl ">Upload</h1>
      <h3 className="m-2 text-[#757575]">
        O arquivo deve conter o mesmo nome da planilha modelo.
      </h3>
      <div className="mt-9 w-[550px]">
        <div
          className="border-4 rounded-2xl border-dashed p-4 mb-4 flex flex-col items-center justify-center"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div className="p-4">
            <VscCloudUpload color={"#2d99ff"} size={80} />
          </div>
          <p className="font-normal text-lg py-2">
            Arraste e solte o arquivo aqui
          </p>
          <p>ou</p>
          <input
            type="file"
            accept=".csv, .xls, .xlsx"
            onChange={handleFileChange}
            ref={inputRef}
            className="hidden"
          />
          <button
            className="m-3 bg-white border border-[#2d99ff] shadow-md h-12 w-60 rounded-3xl flex flex-col items-center justify-center"
            onClick={handleChooseFileClick}
            disabled={loadingButton}
          >
            Escolher arquivo
          </button>
        </div>

        {selectedFile && (
          <div className="w-full justify-center items-center flex flex-col">
            <div className="flex justify-start flex-col w-full p-2">
              <p className="text-[#757575]">
                Arquivo Selecionado: {selectedFile.name}
              </p>
              <p className="text-[#757575]">
                Tamanho: {selectedFile.size} bytes
              </p>
            </div>
            {stateButton === "empty" ? (
              <button
                className="m-3 bg-white border border-[#2d99ff] shadow-md h-12 w-60 rounded-3xl flex flex-col items-center justify-center"
                onClick={handleImportClick}
              >
                <>
                  {loadingButton ? (
                    <div className="flex justify-center items-center gap-4">
                      <ReactLoading
                        type="bubbles"
                        color="#2d99ff"
                        height={20}
                        width={20}
                      />
                    </div>
                  ) : (
                    <span>Importar</span>
                  )}
                </>
              </button>
            ) : (
              <button
                className={
                  stateButton === "success"
                    ? "m-3 bg-green-500 border border-green-400 text-white font-medium shadow-md h-12 w-60 rounded-3xl flex flex-col items-center justify-center"
                    : "m-3 bg-red-500 border border-red-500 text-white font-medium shadow-md h-12 w-60 rounded-3xl flex flex-col items-center justify-center"
                }
                onClick={handleImportClick}
              >
                {stateButton === "success" ? (
                  <BiCheckCircle color="rgb(255, 255, 255)" size={35} />
                ) : (
                  <BiErrorCircle color="rgb(255, 255, 255)" size={35} />
                )}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
