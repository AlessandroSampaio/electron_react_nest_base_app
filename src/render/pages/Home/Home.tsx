import Logo from "../../assets/logo.png";
import { listMenu } from "../../utils/listMenu";
import { MenuButton } from "./MenuButton";

export const Home: React.FC = () => {
  return (
    <div className="flex bg-[#fcf8f8] justify-center items-center flex-col box-border mt-2 mb-8">
      <div className="flex justify-start items-center flex-col">
        <img src={Logo} alt="" className="h-36 mb-8" />
      </div>
      <div className="flex flex-row items-center justify-center gap-10 w-full">
        {listMenu.map((item, index) => (
          <MenuButton
            title={item.title}
            desc={item.desc}
            icon={item.icon}
            page={item.page}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};


