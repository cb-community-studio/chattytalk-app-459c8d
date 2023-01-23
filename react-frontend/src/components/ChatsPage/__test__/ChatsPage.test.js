import React from "react";
import { render, screen } from "@testing-library/react";

import ChatsPage from "../ChatsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders chats page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ChatsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("chats-datatable")).toBeInTheDocument();
    expect(screen.getByRole("chats-add-button")).toBeInTheDocument();
});
