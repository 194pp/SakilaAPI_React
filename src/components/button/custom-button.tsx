import { Button, ButtonProps } from "@nextui-org/react";
import { BsEye, BsPencil, BsPlusLg, BsTrash } from "react-icons/bs";

export const CustomButton = (props: TCustomButtonProps) => {
  const { children, type, nuiProps } = props;

  let icon = null;
  let color: ButtonProps["color"] = "primary";
  switch (type) {
    case "add":
      icon = <BsPlusLg />;
      color = "success";
      break;
    case "delete":
      icon = <BsTrash />;
      color = "danger";
      break;
    case "edit":
      icon = <BsPencil />;
      color = "warning";
      break;
    case "view":
      icon = <BsEye />;
      color = "secondary";
      break;
  }

  return (
    <Button {...nuiProps} color={nuiProps?.color ? nuiProps.color : color}>
      {children}
      {icon}
    </Button>
  );
};

export type TCustomButtonProps = {
  type?: "add" | "delete" | "edit" | "view";
  nuiProps?: ButtonProps;
  children: React.ReactNode;
};
