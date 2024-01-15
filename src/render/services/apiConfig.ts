import axios, { AxiosResponse } from "axios";

const BASE_URL = "http://localhost:5000/config";

export class ApiConfig {
  public static async testConfig(
    hostName: string,
    database: string
  ): Promise<boolean> {
    try {
      const response: AxiosResponse = await axios.get(
        `${BASE_URL}/testconfig`,
        {
          params: {
            hostName,
            database,
          },
        }
      );

      if (response.status === 200) {
        return true;
      } else {
        console.error("Falha ao testar a configuração");
        return false;
      }
    } catch (error) {
      console.error("Erro ao testar a configuração", error);
      return false;
    }
  }

  public static async saveConfig(
    HOSTNAME: string,
    DATABASE: string
  ): Promise<boolean> {
    try {
      const response: AxiosResponse = await axios.post(
        `${BASE_URL}/updateconfig`,
        {
          HOSTNAME,
          DATABASE,
        }
      );

      if (response.status === 200) {
        console.log("Configuração testada com sucesso!");
        return true;
      } else {
        console.log(response.status);
        console.error("Falha ao testar a configuração");
        return false;
      }
    } catch (error) {
      console.error("Erro ao testar a configuração", error);
      return false;
    }
  }
}
