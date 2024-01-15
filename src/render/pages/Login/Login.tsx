import React, { FormEvent, useState } from "react";
import Logo from "../../assets/logo.png";
import { IFormValues } from "../../utils/interfaces";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";
import { CustomInput } from "../../components/CustomInput";

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<IFormValues>({});
  const [loadingButton, setLoadingButton] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  function handleForm(key: string, value: string) {
    setForm({
      ...form,
      [key]: value,
    });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErrorMessage("");
    setLoadingButton(true);

    if (form.username && form.password) {
      try {
        // await handleLoginAgreed(form.username, form.password);
        if (
          form.username.toUpperCase() === "ADMIN" &&
          form.password.toUpperCase() === "VLSSL"
        ) {
          navigate("/home");
        } else {
          setLoadingButton(false);
          setErrorMessage("Usuário ou senha inválidos");
          return;
        }
      } catch (error) {
        setErrorMessage("Tente novamente mais tarde");
        setLoadingButton(false);

        console.log("Error");
      }
    } else {
      setErrorMessage("Preencha os dados de login");
      setLoadingButton(false);
    }
  }

  return (
    <div className="bg-white h-screen flex flex-col items-center justify-center">
      <img src={Logo} alt="Logo" className="mb-8 h-36" />

      <form
        className="flex flex-col items-center w-80 h-full"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col w-full gap-3">
          <CustomInput
            value={form.username || ""}
            onChange={(e) => handleForm("username", e.target.value)}
            type="text"
            placeholder="Usuário"
          />
          <CustomInput
            value={form.password || ""}
            type="password"
            placeholder="Senha"
            onChange={(e) => handleForm("password", e.target.value)}
          />
        </div>

        <div className="text-red-500 p-2 mt-2">
          <h3>{errorMessage ? errorMessage : ""}</h3>
        </div>

        <button
          className="bg-black text-white px-20 py-2 rounded mt-2 hover:bg-[#444444]"
        >
          <>
            {loadingButton ? (
              <div className="flex justify-center items-center gap-4">
                <ReactLoading
                  type="bubbles"
                  color="#5856d6"
                  height={20}
                  width={20}
                />
              </div>
            ) : (
              <span>Entrar</span>
            )}
          </>
        </button>
      </form>
    </div>
  );
};
