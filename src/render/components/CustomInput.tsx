import { ComponentProps } from "react";

type Props = ComponentProps<"input"> & {
  label?: string;
};

export const CustomInput = (props: Props) => {
  return (
    <input
      className="w-full p-2 border-2 border-gray-300 rounded focus:outline-none focus:border-[#0692f2]"
      {...props}
    />
  );
};
