import { Box, Flex } from "@chakra-ui/react";

function App() {
  return (
    <Box pos="fixed" zIndex={100} top={50} right={0} w="200px" h="90vh" mr="15px" opacity={0.5}>
      <Box>Drawer</Box>
      <Flex h="100%" flexDirection="column" alignItems="center" justifyContent="space-around" borderRadius="15px" bgColor="primaryBg">
      </Flex>
    </Box>
  );
}
export default App;
