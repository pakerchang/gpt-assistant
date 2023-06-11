import { Box, Flex, Button, Divider, Center } from "@chakra-ui/react";
import CreateModal from "./components/create-modal";

function App() {
  return (
    <Box pos="fixed" zIndex={100} top={0} right={0} w="200px" h="80%" mt="25px" mr="15px" opacity={0.7}>
      {/* <PromptForm /> */}
      <Flex h="100%" flexDirection="column" alignItems="center" justifyContent="space-around" borderRadius="15px" bgColor="primaryBg">
        <Box>
          <Button size="customBtn" variant="quickRespButton">
            Testing
          </Button>
        </Box>
        <CreateModal />
        <Divider orientation="horizontal" />
        <Box>
          <Button size="customBtn" variant="promptButton">
            Testing
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}
export default App;
