import * as React from "react";
import { createRoot } from "react-dom/client";

import { App }  from "./app";
import { ThemeContextProvider } from "./features/theme";

import { store } from "./app/store";
import { Provider } from "react-redux";

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeContextProvider>
          <App/>
        </ThemeContextProvider>
      </Provider>
    </React.StrictMode>
  );
}