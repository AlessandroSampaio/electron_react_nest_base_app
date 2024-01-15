import { useNavigate } from "react-router-dom";
import { IListMenu } from "../../utils/interfaces";

export const MenuButton = (props: IListMenu) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/" + props.page);
  };
  return (
    <button
      onClick={handleSubmit}
      className="bg-white  border shadow-md h-40 w-48 rounded-xl flex flex-col items-center p-3"
    >
      <h2 className="text-base text-[#2d99ff] pb-2 font-medium">
        {props.title}
      </h2>
      <p className="text-sm text-[#f1f1f1f] font-light">{props.desc}</p>
      <div className="pt-4">{props.icon}</div>
    </button>
  );
};
