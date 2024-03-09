import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalProps,
  useDisclosure,
} from "@nextui-org/react";
import { CustomButton, TCustomButtonProps } from "../button/custom-button";

export const CustomModal = (props: TCustomModalProps) => {
  const { size, modalBody, triggerBody, title, submitProps } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <CustomButton
        nuiProps={{ onClick: onOpen, variant: "light", className: "p-0" }}
      >
        {triggerBody}
      </CustomButton>
      <Modal size={size} isOpen={isOpen} onClose={onClose} backdrop="opaque">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>{title}</ModalHeader>
              <ModalBody>{modalBody}</ModalBody>
              <ModalFooter>
                {submitProps ? <CustomButton {...submitProps} /> : null}
                <CustomButton type="delete" nuiProps={{ onPress: onClose }}>
                  Close
                </CustomButton>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

type TCustomModalProps = {
  size?: ModalProps["size"];
  title?: string;
  triggerBody: React.ReactNode;
  modalBody: React.ReactNode;
  submitProps?: TCustomButtonProps;
};
