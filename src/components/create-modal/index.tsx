import { Modal, ModalContent, ModalOverlay, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@chakra-ui/react";
import PromptForm from "../prompt-Form";

interface CreateModalProps {
  isPrompt: boolean;
}
function CreateModal({ isPrompt = true }: CreateModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSave = (): void => {
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>Create Propmpt</Button>
      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Prompt</ModalHeader>
          <ModalBody>{isPrompt ? <PromptForm isCreate /> : <div>Quick Response</div>}</ModalBody>
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
