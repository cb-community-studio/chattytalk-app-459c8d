import React from "react";
import { render, screen } from "@testing-library/react";

import DeviceinfoPage from "../DeviceinfoPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders deviceinfo page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <DeviceinfoPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("deviceinfo-datatable")).toBeInTheDocument();
    expect(screen.getByRole("deviceinfo-add-button")).toBeInTheDocument();
});
