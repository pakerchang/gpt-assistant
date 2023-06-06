import { Box, Flex, Button } from "@chakra-ui/react";

function App() {
  return (
    <Box pos="fixed" zIndex={100} top={0} right={0} w="200px" h="80%" mt="25px" mr="15px" opacity={0.7}>
      <Box>Drawer</Box>
      <Flex h="100%" flexDirection="column" alignItems="center" justifyContent="space-around" borderRadius="15px" bgColor="primaryBg">
        <Button size="customBtn" variant="quickRespButton">
          Testing
        </Button>
        <Button size="customBtn" variant="promptButton">
          Testing
        </Button>
      </Flex>
    </Box>
  );
}
export default App;
