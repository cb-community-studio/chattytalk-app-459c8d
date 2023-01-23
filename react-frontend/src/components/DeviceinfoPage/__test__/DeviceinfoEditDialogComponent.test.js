import React from "react";
import { render, screen } from "@testing-library/react";

import DeviceinfoEditDialogComponent from "../DeviceinfoEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders deviceinfo edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <DeviceinfoEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("deviceinfo-edit-dialog-component")).toBeInTheDocument();
});
