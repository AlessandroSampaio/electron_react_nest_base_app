import { VscCloudDownload, VscCloudUpload } from "react-icons/vsc";
import { IListMenu } from "./interfaces";
import { IoSettingsOutline } from "react-icons/io5";

const color = "#2d99ff";
const size = 50;

export const listMenu: IListMenu[] = [
  {
    title: "Downloads",
    desc: "Download de arquivos",
    icon: <VscCloudDownload color={color} size={size} />,
    page: 'downloads'
  },
  {
    title: "Uploads",
    desc: "Importação de arquivos",
    icon: <VscCloudUpload color={color} size={size} />,
    page: 'uploads'

  },
  {
    title: "Configurações",
    desc: "Configurações gerais",
    icon: <IoSettingsOutline color={color} size={size} />,
    page: 'settings'

  },
];
