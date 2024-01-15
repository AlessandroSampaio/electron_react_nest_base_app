import { VscChevronLeft } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import ReactLoading from "react-loading";
import { IFormValues } from "../../utils/interfaces";
import { ApiConfig } from "../../services/apiConfig";
import { CustomInput } from "../../components/CustomInput";

export const Settings: React.FC = () => {
  const [loadingButtonTest, setLoadingButtonTest] = useState(false);
  const [loadingButtonSave, setLoadingButtonSave] = useState(false);
  const [stateTest, setStateTest] = useState<Boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [form, setForm] = useState<IFormValues>({});

  function handleForm(key: string, value: string) {
    if (stateTest) {
      setStateTest(false);
    }
    setForm({
      ...form,
      [key]: value,
    });
  }

  const handleBack = () => {
    setLoadingButtonTest(false);
    navigate("/home");
  };

  const handleTestConnection = async () => {
    if (loadingButtonTest) {
      return;
    }

    setLoadingButtonTest(true);
    setErrorMessage("");

    if (form.hostName && form.databaseName) {
      const data = await ApiConfig.testConfig(form.hostName, form.databaseName);

      if (data) {
        setLoadingButtonTest(false);
        setErrorMessage("");
        setStateTest(true);
      } else {
        setLoadingButtonTest(false);
        setErrorMessage("Falha na comunicação");
        setStateTest(false);
      }
    } else {
      setLoadingButtonTest(false);
      setErrorMessage("Preencha os dados da conexão");
      return;
    }
  };

  const handleSaveConfig = async () => {
    if (stateTest && form.hostName && form.databaseName) {
      const data = await ApiConfig.saveConfig(form.hostName, form.databaseName);

      if (data) {
        setLoadingButtonSave(false);
        setErrorMessage("");
        setStateTest(true);
        alert(
          "Configuração salva com sucesso.\nReinicie a aplicação para utilizar a nova configuração."
        );
      } else {
        setLoadingButtonSave(false);
        setErrorMessage("Falha na comunicação");
        setStateTest(false);
      }
    } else {
      setLoadingButtonSave(false);
      setErrorMessage("Realize o teste da conexão antes de salvar");
      return;
    }
  };

  return (
    <div className=" flex flex-col justify-center items-center w-[full] rounded-[22px] py-6 px-9">
      <button onClick={handleBack} className="absolute top-6 p-2 left-2">
        <VscChevronLeft color={"#2d99ff"} size={23} />
      </button>
      <h1 className="text-2xl ">Configurações</h1>
      <h3 className="m-2 text-[#757575]">Configure o banco de dados</h3>
      <div className="mt-9 w-[550px]">
        <div className="flex flex-col justify-center items-center gap-4">
          <CustomInput
            value={form.hostName || ""}
            type="text"
            placeholder="Hostname"
            onChange={(e) => handleForm("hostName", e.target.value)}
          />
          <CustomInput
            value={form.databaseName || ""}
            type="text"
            placeholder="Nome do banco"
            onChange={(e) => handleForm("databaseName", e.target.value)}
          />
        </div>
        {stateTest ? (
          <div className="flex justify-center items-center text-green-500 py-2">
            <h3>Conexão realizada com sucesso</h3>
          </div>
        ) : (
          <div className="flex justify-center items-center text-red-500 py-2">
            <h3>{errorMessage}</h3>
          </div>
        )}
        <div className="w-full flex justify-center items-center flex-col">
          <button
            onClick={handleTestConnection}
            disabled={loadingButtonTest}
            className="bg-[#2d99ff] text-white w-72 py-2 rounded mt-8 hover:bg-[#2d99ff96]"
          >
            <>
              {loadingButtonTest ? (
                <div className="flex justify-center items-center gap-4">
                  <ReactLoading
                    type="bubbles"
                    color="#5856d6"
                    height={20}
                    width={20}
                  />
                </div>
              ) : (
                <span>Testar conexão</span>
              )}
            </>
          </button>
          <button
            onClick={handleSaveConfig}
            disabled={!stateTest}
            className={
              stateTest
                ? "bg-[#2d99ff] text-white w-72 py-2 rounded mt-8 hover:bg-[#2d99ff96]"
                : "bg-[#8d949b96] text-white w-72 py-2 rounded mt-8 hover:bg-[#8d949b96]"
            }
          >
            <>
              {loadingButtonSave ? (
                <div className="flex justify-center items-center gap-4">
                  <ReactLoading
                    type="bubbles"
                    color="#5856d6"
                    height={20}
                    width={20}
                  />
                </div>
              ) : (
                <span>Salvar</span>
              )}
            </>
          </button>
        </div>
      </div>
    </div>
  );
};
