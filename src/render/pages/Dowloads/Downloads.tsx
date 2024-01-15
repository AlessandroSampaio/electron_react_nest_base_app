import { VscChevronLeft, VscCloudDownload } from "react-icons/vsc";
import { listFilesCSV } from "../../utils/listFilesCSV";
import { useNavigate } from "react-router-dom";
import { ApiDownload } from "../../services/apiDownload";


export const Downloads: React.FC = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/home");
  };


  const handleDownload = async (fileName: string) => {
    try {
      // Chame a função de download da API
      await ApiDownload.downloadCsv(fileName);
    } catch (error) {
      console.error("Erro ao realizar o download", error);
    }
  };

  return (
    <div className="flex flex-col justify-between items-center w-full rounded-[22px] py-6 px-9">
      <button onClick={handleBack} className="absolute top-6 p-2 left-2">
        <VscChevronLeft color={"#2d99ff"} size={23} />
      </button>
      <h1 className="text-2xl mt-2">Downloads</h1>
      <div className="flex flex-col justify-between items-center w-full rounded-[22px] py-6  px-9 shadow-sm gap-2">
        {listFilesCSV.map((item, index) => (
          <div
            key={index}
            className="w-[32rem] h-22 bg-white border rounded-xl px-4 py-2  flex flex-row justify-between"
          >
            <div className="flex justify-between items-center flex-row gap-4">
              <h2 className="flex-1 font-medium text-[15px] text-secondary ">
                {item.title}
              </h2>
            </div>
            <button
              onClick={() => handleDownload(item.fileName)}
              className="py-1 px-1 font-medium"
            >
              <VscCloudDownload color={"#2d99ff"} size={23} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
