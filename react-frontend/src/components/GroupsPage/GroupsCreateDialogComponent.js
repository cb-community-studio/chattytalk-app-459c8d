
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';


 
const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = [];
    for (const key in errorObj.errors) {
        if (Object.hasOwnProperty.call(errorObj.errors, key)) {
            const element = errorObj.errors[key];
            if (element?.message) {
                errMsg.push(element.message);
            }
        }
    }
    return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const GroupsCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        set_entity({})
    },[props.show])
    const onSave = async () => {
        let _data = {
            admin: _entity.admin,
            groupIcon: _entity.groupIcon,
            groupId: _entity.groupId,
            groupName: _entity.groupName,
            members: _entity.members,
            recentMessage: _entity.recentMessage,
            recentMessageSender: _entity.recentMessageSender

        };

        setLoading(true);
        try {
            const result = await client.service("groups").create(_data);
            props.onHide();
            props.alert({ type: "success", title: "Create", message: "Created successfully" });
            props.onCreateResult(result);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create" });
        }
        setLoading(false);
    };

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError("");
    };

    return (
        <Dialog header="Create" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div role="groups-create-dialog-component">
                <div>
                    <p className="m-0" >admin:</p>
                    <InputText className="w-full mb-3" value={_entity?.admin} onChange={(e) => setValByKey("admin", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >groupIcon:</p>
                    <InputText className="w-full mb-3" value={_entity?.groupIcon} onChange={(e) => setValByKey("groupIcon", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >groupId:</p>
                    <InputText className="w-full mb-3" value={_entity?.groupId} onChange={(e) => setValByKey("groupId", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >groupName:</p>
                    <InputText className="w-full mb-3" value={_entity?.groupName} onChange={(e) => setValByKey("groupName", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >members:</p>
                    <InputText className="w-full mb-3" value={_entity?.members} onChange={(e) => setValByKey("members", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >recentMessage:</p>
                    <InputText className="w-full mb-3" value={_entity?.recentMessage} onChange={(e) => setValByKey("recentMessage", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >recentMessageSender:</p>
                    <InputText className="w-full mb-3" value={_entity?.recentMessageSender} onChange={(e) => setValByKey("recentMessageSender", e.target.value)}  />
                </div>


                <small className="p-error">
                    {Array.isArray(error)
                        ? error.map((e, i) => (
                              <p className="m-0" key={i}>
                                  {e}
                              </p>
                          ))
                        : error}
                </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    //
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(null, mapDispatch)(GroupsCreateDialogComponent);
// createDialog_code.template
