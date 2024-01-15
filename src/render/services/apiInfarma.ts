import axios, { AxiosResponse } from "axios";

const BASE_URL = "http://localhost:5000/infarma/";

export class ApiInfarma {
  private static async postFile(
    endpoint: string,
    file: File
  ): Promise<boolean> {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response: AxiosResponse = await axios.post(
        `${BASE_URL}/${endpoint}`,
        formData
      );

      if (response.status === 200) {
        console.log("Arquivo enviado com sucesso!");
        return true;
      } else {
        console.log(response.status);
        console.error("Falha ao enviar o arquivo");
        return false;
      }
    } catch (error) {
      console.error("Erro ao enviar o arquivo", error);
      return false;
    }
  }

  public static async insertClatri(file: File): Promise<boolean> {
    return this.postFile("clatri", file);
  }
  public static async insertFabri(file: File): Promise<boolean> {
    return this.postFile("fabri", file);
  }
  public static async insertGrprc(file: File): Promise<boolean> {
    return this.postFile("grprc", file);
  }
  public static async insertTbsec(file: File): Promise<boolean> {
    return this.postFile("tbsec", file);
  }
  public static async insertTbncm(file: File): Promise<boolean> {
    return this.postFile("tbncm", file);
  }
  public static async insertClassi(file: File): Promise<boolean> {
    return this.postFile("classi", file);
  }
  public static async insertPratv(file: File): Promise<boolean> {
    return this.postFile("pratv", file);
  }
  public static async insertTbdcb(file: File): Promise<boolean> {
    return this.postFile("tbdcb", file);
  }
  public static async insertPaxcd(file: File): Promise<boolean> {
    return this.postFile("paxcd", file);
  }
  public static async insertProdu(file: File): Promise<boolean> {
    return this.postFile("produ", file);
  }
  public static async updatePrxlj(file: File): Promise<boolean> {
    return this.postFile("prxlj", file);
  }
  public static async insertEnder(file: File): Promise<boolean> {
    return this.postFile("ender", file);
  }
  public static async insertGrcli(file: File): Promise<boolean> {
    return this.postFile("grcli", file);
  }
  public static async insertClien(file: File): Promise<boolean> {
    return this.postFile("clien", file);
  }
  public static async insertBanco(file: File): Promise<boolean> {
    return this.postFile("banco", file);
  }
  public static async insertAgcob(file: File): Promise<boolean> {
    return this.postFile("agcob", file);
  }
  public static async insertConve(file: File): Promise<boolean> {
    return this.postFile("conve", file);
  }
  public static async insertCvxcl(file: File): Promise<boolean> {
    return this.postFile("cvxcl", file);
  }
  public static async insertCtmag(file: File): Promise<boolean> {
    return this.postFile("ctmag", file);
  }
  public static async insertRecct(file: File): Promise<boolean> {
    return this.postFile("recct", file);
  }
  public static async insertForne(file: File): Promise<boolean> {
    return this.postFile("forne", file);
  }
  public static async insertBalit(file: File): Promise<boolean> {
    return this.postFile("balit", file);
  }
}
