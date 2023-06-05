import { Box, Flex } from "@chakra-ui/react";
import CustomButton from "./components/shared/Button";

function App() {
  return (
    <Box pos="fixed" zIndex={100} top={50} right={0} w="200px" h="90vh" mr="15px">
      <Box>Drawer</Box>
      <Flex h="100%" flexDirection="column" alignItems="center" justifyContent="space-around" borderRadius="15px" bgColor="blue.100">
        <CustomButton>Testing</CustomButton>
        <CustomButton>Testing</CustomButton>
      </Flex>
    </Box>
  );
}
export default App;
