import { configureStore} from "@reduxjs/toolkit";
import TodosReducer from "../features/todo/TodosSlice";
import ThemeReducer from "../features/theme/ThemeSlice";

export const store = configureStore({
    reducer: {
        todosState: TodosReducer,
        themeState: ThemeReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;