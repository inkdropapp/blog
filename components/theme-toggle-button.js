import { Button, useColorMode } from "@chakra-ui/react";

const ThemeToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      Toggle {colorMode === "light" ? "Dark" : "Light"}
    </Button>
  );
};

export default ThemeToggleButton;
