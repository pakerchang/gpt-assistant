import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";

function PromptForm() {
  return (
    <Box>
      <FormControl>
        <FormLabel>Prefix Name: </FormLabel>
        <Input placeholder="Prefix Name" />
        <Box>
          <Input />
        </Box>
        <FormLabel>Suffix Name: </FormLabel>
        <Input placeholder="Suffix Name" />
      </FormControl>
    </Box>
  );
}

export default PromptForm;
