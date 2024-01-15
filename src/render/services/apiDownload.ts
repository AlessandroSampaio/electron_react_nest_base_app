import axios, { AxiosResponse } from "axios";

const BASE_URL = "http://localhost:5000/download";

export class ApiDownload {
 
  public static async downloadCsv(filleName: string): Promise<void> {
    try {
      const response: AxiosResponse = await axios.get(
        `${BASE_URL}/csv/${filleName}`,
        {
          responseType: "blob",
        }
      );

      // Cria um link temporário para download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filleName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Erro ao baixar a planilha", error);
    }
  }
}
