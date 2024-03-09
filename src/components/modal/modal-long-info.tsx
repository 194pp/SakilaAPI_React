import { CustomModal } from "./custom-modal";

export const ModalLongInfo = (props: TModalLongInfoProps) => {
  const { modalBody, title, triggerBody } = props;

  return (
    <CustomModal
      title={title}
      modalBody={modalBody}
      triggerBody={
        <p className="whitespace-nowrap text-ellipsis overflow-hidden max-w-20">
          {triggerBody}
        </p>
      }
    />
  );
};

export type TModalLongInfoProps = {
  title: string;
  modalBody: string;
  triggerBody: React.ReactNode;
};
