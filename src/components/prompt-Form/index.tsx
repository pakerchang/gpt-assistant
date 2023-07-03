import { Box, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";

interface PropmptFormProps {
  isCreate: boolean;
}

function PromptForm({ isCreate }: PropmptFormProps) {
  console.log("testing");

  return (
    <Box display="flex" flexDirection="column" justifyContent="space-around">
      <FormControl mb="40px">
        <FormLabel>Prefix Name: </FormLabel>
        <Input placeholder="Prefix Name" disabled={!isCreate} />
      </FormControl>
      <FormControl h="150px">
        <Textarea h="100%" placeholder="Description..." disabled={isCreate} />
      </FormControl>
      <FormControl mt="40px">
        <FormLabel>Suffix Name: </FormLabel>
        <Input placeholder="Suffix Name" disabled={!isCreate} />
      </FormControl>
    </Box>
  );
}

export default PromptForm;
