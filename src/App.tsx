import { Box, AbsoluteCenter, VStack, Tag, Divider, IconButton } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import Modal from "./components/modal";

function App() {
  return (
    <Box position="fixed" zIndex={10} top={0} right={0} w="200px" h="80%" mt="25px" mr="10px" opacity={0.7}>
      <Box display="flex" alignItems="center" justifyContent="space-between" my="10px">
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
    </Box>
  );
}
export default App;
