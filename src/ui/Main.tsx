import {FC} from "react";
import {ThemeProvider} from "styled-components";
import StoreInstance, {StoreContext} from "../domain";
import {CustomTheme, GlobalStyles} from "./theme";
import {DefaultRouter} from "./router";

const Main: FC = () => {
  return (
    <StoreContext.Provider value={StoreInstance}>
      <ThemeProvider theme={CustomTheme}>
        <GlobalStyles />
        <DefaultRouter />
      </ThemeProvider>
    </StoreContext.Provider>
  );
}

export default Main;
