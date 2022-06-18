import "./App.less";
import {ThemeProvider} from "@emotion/react";
import defaultTheme from "./themes/default";
import RootRoutes from "./routes/root.routes";
import {Provider} from "react-redux";
import store from "./config/redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";
import {ApolloProvider} from "@apollo/client";
import apClient from "./config/apollo";
import {useNavigate} from "react-router-dom";


import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';
const persistor = persistStore(store);
export default function App() {
    return (
        <ApolloProvider client={apClient()}>
            <ThemeProvider theme={defaultTheme}>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <RecoilRoot>
                            <RootRoutes/>
                        </RecoilRoot>
                    </PersistGate>
                </Provider>
            </ThemeProvider>
        </ApolloProvider>
    );
}
