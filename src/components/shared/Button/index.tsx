import { Button, ButtonProps } from "@chakra-ui/react";

interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
}

function CustomButton({ children }: CustomButtonProps) {
  return (
    <Button w="180px" h="35px" variant="solid">
      {children}
    </Button>
  );
}

export default CustomButton;
