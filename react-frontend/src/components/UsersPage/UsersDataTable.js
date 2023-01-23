
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';


const UsersDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.name}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.email}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.about}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.fcmId}</p>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.id}</p>
    const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.image}</p>
    const pTemplate7 = (rowData, { rowIndex }) => <p >{rowData.isOnline}</p>
    const pTemplate8 = (rowData, { rowIndex }) => <p >{rowData.lastActive}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="name" header="name" body={pTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="email" header="email" body={pTemplate1} sortable style={{ minWidth: "8rem" }} />
            <Column field="about" header="about" body={pTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="fcmId" header="fcmId" body={pTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="id" header="id" body={pTemplate5} style={{ minWidth: "8rem" }} />
            <Column field="image" header="image" body={pTemplate6} style={{ minWidth: "8rem" }} />
            <Column field="isOnline" header="isOnline" body={pTemplate7} style={{ minWidth: "8rem" }} />
            <Column field="lastActive" header="lastActive" body={pTemplate8} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default UsersDataTable;