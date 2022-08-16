import React from "react";
import { Button, TextField } from "../styled-component/Style";
import { ThemeProvider } from "styled-components";
import theme, { Box, Flex, Text } from "../styled-component/theme";

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = () => {
  return (
    <div>
      <div>
        <Button>About</Button>
      </div>
      <div>
        <TextField />

        {/* rest of your app goes here */}
      </div>
      <ThemeProvider theme={theme}>
        <Box color={theme.colors.danger}>Tomato</Box>
        <Flex backgroundColor={"warning"} p={4} mx={2} my={2}>
          <Text
            textAlign="center"
            color={"blacks.0"}
            fontSize={[0, 1, 2, 3]}
            lineHeight={1}
          >
            This is an info box, with responsive typography that changes based
            on the view port.
          </Text>
        </Flex>
      </ThemeProvider>
    </div>
  );
};

export default HomePage;
