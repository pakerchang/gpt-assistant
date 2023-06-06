import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";

function QuickRepForm() {
  return (
    <Box>
      <FormControl>
        <FormLabel>Quick Response</FormLabel>
        <Input placeholder="Ex: Continue, Provide Code" />
      </FormControl>
    </Box>
  );
}

export default QuickRepForm;
