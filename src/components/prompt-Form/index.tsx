import { Box, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";

interface PropmptFormProps {
  isCreate: boolean;
}

function PromptForm({ isCreate }: PropmptFormProps) {
  return (
    <Box display="flex" flexDirection="column" justifyContent="space-around">
      <FormControl mb="40px">
        <FormLabel>Prefix Name: </FormLabel>
        <Input placeholder="Prefix Name" />
      </FormControl>
      <FormControl h="150px">
        <Textarea h="100%" placeholder="Prompt Content" disabled={isCreate} />
      </FormControl>
      <FormControl mt="40px">
        <FormLabel>Suffix Name: </FormLabel>
        <Input placeholder="Suffix Name" />
      </FormControl>
    </Box>
  );
}

export default PromptForm;
