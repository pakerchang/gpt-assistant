import React from "react";
import { Button } from "@chakra-ui/react";

interface CustomButtonProps {
  children: React.ReactNode;
}

function CustomButton({ children }: CustomButtonProps) {
  return (
    <Button w="180px" h="40px" variant="solid">
      {children}
    </Button>
  );
}

export default CustomButton;
