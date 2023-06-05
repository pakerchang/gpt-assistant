import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/styles/theme";

interface ProvidersProps {
  children: React.ReactNode;
}

function Providers({ children }: ProvidersProps) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

export default Providers;
