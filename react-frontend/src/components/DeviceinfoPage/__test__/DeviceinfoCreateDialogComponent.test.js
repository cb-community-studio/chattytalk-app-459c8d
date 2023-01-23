import React from "react";
import { render, screen } from "@testing-library/react";

import DeviceinfoCreateDialogComponent from "../DeviceinfoCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders deviceinfo create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <DeviceinfoCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("deviceinfo-create-dialog-component")).toBeInTheDocument();
});
