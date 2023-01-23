
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';


const GroupsDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.admin}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.groupIcon}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.groupId}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.groupName}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.members}</p>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.recentMessage}</p>
    const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.recentMessageSender}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="admin" header="admin" body={pTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="groupIcon" header="groupIcon" body={pTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="groupId" header="groupId" body={pTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="groupName" header="groupName" body={pTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="members" header="members" body={pTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="recentMessage" header="recentMessage" body={pTemplate5} style={{ minWidth: "8rem" }} />
            <Column field="recentMessageSender" header="recentMessageSender" body={pTemplate6} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default GroupsDataTable;