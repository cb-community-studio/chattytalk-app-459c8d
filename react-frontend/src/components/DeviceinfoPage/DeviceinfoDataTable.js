
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';


const DeviceinfoDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.board}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.bootloader}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.brand}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.device}</p>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.display}</p>
    const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.fingerprint}</p>
    const pTemplate7 = (rowData, { rowIndex }) => <p >{rowData.hardware}</p>
    const pTemplate8 = (rowData, { rowIndex }) => <p >{rowData.host}</p>
    const pTemplate9 = (rowData, { rowIndex }) => <p >{rowData.manufacturer}</p>
    const pTemplate10 = (rowData, { rowIndex }) => <p >{rowData.model}</p>
    const pTemplate11 = (rowData, { rowIndex }) => <p >{rowData.product}</p>
    const pTemplate12 = (rowData, { rowIndex }) => <p >{rowData.supported32BitAbis}</p>
    const pTemplate13 = (rowData, { rowIndex }) => <p >{rowData.supported64BitAbis}</p>
    const pTemplate14 = (rowData, { rowIndex }) => <p >{rowData.tags}</p>
    const pTemplate15 = (rowData, { rowIndex }) => <p >{rowData.type}</p>
    const pTemplate16 = (rowData, { rowIndex }) => <p >{rowData.isPhysicalDevice}</p>
    const pTemplate17 = (rowData, { rowIndex }) => <p >{rowData.androidId}</p>
    const pTemplate18 = (rowData, { rowIndex }) => <p >{rowData.systemFeatures}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="id" header="id"  style={{ minWidth: "8rem" }} />
            <Column field="board" header="board" body={pTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="bootloader" header="bootloader" body={pTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="brand" header="brand" body={pTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="device" header="device" body={pTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="display" header="display" body={pTemplate5} style={{ minWidth: "8rem" }} />
            <Column field="fingerprint" header="fingerprint" body={pTemplate6} style={{ minWidth: "8rem" }} />
            <Column field="hardware" header="hardware" body={pTemplate7} style={{ minWidth: "8rem" }} />
            <Column field="host" header="host" body={pTemplate8} style={{ minWidth: "8rem" }} />
            <Column field="manufacturer" header="manufacturer" body={pTemplate9} style={{ minWidth: "8rem" }} />
            <Column field="model" header="model" body={pTemplate10} style={{ minWidth: "8rem" }} />
            <Column field="product" header="product" body={pTemplate11} style={{ minWidth: "8rem" }} />
            <Column field="supported32BitAbis" header="supported32BitAbis" body={pTemplate12} style={{ minWidth: "8rem" }} />
            <Column field="supported64BitAbis" header="supported64BitAbis" body={pTemplate13} style={{ minWidth: "8rem" }} />
            <Column field="tags" header="tags" body={pTemplate14} style={{ minWidth: "8rem" }} />
            <Column field="type" header="type" body={pTemplate15} style={{ minWidth: "8rem" }} />
            <Column field="isPhysicalDevice" header="isPhysicalDevice" body={pTemplate16} style={{ minWidth: "8rem" }} />
            <Column field="androidId" header="androidId" body={pTemplate17} style={{ minWidth: "8rem" }} />
            <Column field="systemFeatures" header="systemFeatures" body={pTemplate18} style={{ minWidth: "8rem" }} />
            <Column field="createdAt" header="createdAt"  style={{ minWidth: "8rem" }} />
            <Column field="updatedAt" header="updatedAt"  style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default DeviceinfoDataTable;