import { Box, AbsoluteCenter, VStack, Tag, Divider, Drawer, DrawerContent, DrawerBody, IconButton, useDisclosure } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon, EditIcon } from "@chakra-ui/icons";

import Modal from "./components/modal";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  return (
    <Box position="fixed" zIndex={100} top={0} right={0} w={isOpen ? "200px" : ""} h="80%" mt="25px" mr="10px" opacity={0.7}>
      <Box hidden={isOpen}>
        <IconButton icon={<ArrowLeftIcon />} aria-label="Show assistant" onClick={onOpen} />
      </Box>
      <Drawer placement="right" isOpen={isOpen} onClose={onClose} isFullHeight>
        <DrawerContent height="100%">
          <DrawerBody>
            <Box display="flex" alignItems="center" justifyContent="space-between" my="10px">
              <IconButton icon={<ArrowRightIcon />} aria-label="Hide assistant" onClick={onClose} />
              <IconButton icon={<EditIcon />} aria-label="Edit prompt" />
            </Box>
            <Box display="flex" flexDirection="column" h="90%" borderRadius="15px" bgColor="primaryBg">
              <Box position="relative" mt="20px">
                <Divider orientation="horizontal" />
                <AbsoluteCenter w="100%">
                  <Tag ml="20px">Prompt</Tag>
                </AbsoluteCenter>
              </Box>

              <VStack spacing="12px" my="30px">
                <Modal isPrompt createMode />
              </VStack>

              <Box position="relative">
                <Divider orientation="horizontal" />
                <AbsoluteCenter w="100%">
                  <Tag ml="20px">Quick Response</Tag>
                </AbsoluteCenter>
              </Box>

              <VStack spacing="12px" my="30px">
                <Modal isPrompt={false} />
              </VStack>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
export default App;
