<<<<<<< HEAD
import "./App.less";
import { ThemeProvider } from "@emotion/react";
import defaultTheme from "./themes/default";
import RootRoutes from "./routes/root.routes";
import { Provider } from "react-redux";
import store from "./config/redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { ApolloProvider } from "@apollo/client";
import apClient from "./config/apollo";
import { useNavigate } from "react-router-dom";

const persistor = persistStore(store);

export default function App() {
  return (
    <ApolloProvider client={apClient()}>
      <ThemeProvider theme={defaultTheme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RootRoutes />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </ApolloProvider>
=======
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import defaultTheme from "./layouts/themes/default";
import RootRoutes from "./routes/root.routes";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RootRoutes />
    </ThemeProvider>
>>>>>>> d193a2d53e810fa461db9f876c1eccbb90e7cf54
  );
}
