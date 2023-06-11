import { Modal, ModalContent, ModalOverlay, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@chakra-ui/react";
import PromptForm from "../prompt-Form";
import QuickRepForm from "../quickResp-Form";

interface CreateModalProps {
  isPrompt: boolean;
  createMode?: boolean;
}
function CreateModal({ isPrompt, createMode = false }: CreateModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSave = (): void => {
    onClose();
  };

  return (
    <>
      <Button size="customBtn" onClick={onOpen}>
        Create Propmpt
      </Button>
      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{isPrompt ? "Prompt" : "Quick Response"}</ModalHeader>
          <ModalBody>{isPrompt ? <PromptForm isCreate={createMode} /> : <QuickRepForm />}</ModalBody>
          <ModalFooter>
            <Button onClick={onSave}>Save</Button>
            <Button ml="15px" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateModal;
