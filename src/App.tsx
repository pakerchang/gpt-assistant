import { Box, Flex } from "@chakra-ui/react";

function App() {
  return (
    <Box pos="fixed" zIndex={100} right={0} top={0} w="200px" h="90vh" mt="15px">
      <Flex flexDirection="column" justifyContent="center"></Flex>
    </Box>
  );
}
export default App;
