
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';


 
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

const DeviceinfoCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        set_entity({})
    },[props.show])
    const onSave = async () => {
        let _data = {
            id: _entity.id,
            board: _entity.board,
            bootloader: _entity.bootloader,
            brand: _entity.brand,
            device: _entity.device,
            display: _entity.display,
            fingerprint: _entity.fingerprint,
            hardware: _entity.hardware,
            host: _entity.host,
            manufacturer: _entity.manufacturer,
            model: _entity.model,
            product: _entity.product,
            supported32BitAbis: _entity.supported32BitAbis,
            supported64BitAbis: _entity.supported64BitAbis,
            tags: _entity.tags,
            type: _entity.type,
            isPhysicalDevice: _entity.isPhysicalDevice,
            androidId: _entity.androidId,
            systemFeatures: _entity.systemFeatures,
            createdAt: _entity.createdAt,
            updatedAt: _entity.updatedAt

        };

        setLoading(true);
        try {
            const result = await client.service("deviceinfo").create(_data);
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
            <div role="deviceinfo-create-dialog-component">
                <div>
                    <p className="m-0" >id:</p>
                    <InputText type="number" className="w-full mb-3" value={_entity?.id} onChange={(e) => setValByKey("id", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >board:</p>
                    <InputText className="w-full mb-3" value={_entity?.board} onChange={(e) => setValByKey("board", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >bootloader:</p>
                    <InputText className="w-full mb-3" value={_entity?.bootloader} onChange={(e) => setValByKey("bootloader", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >brand:</p>
                    <InputText className="w-full mb-3" value={_entity?.brand} onChange={(e) => setValByKey("brand", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >device:</p>
                    <InputText className="w-full mb-3" value={_entity?.device} onChange={(e) => setValByKey("device", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >display:</p>
                    <InputText className="w-full mb-3" value={_entity?.display} onChange={(e) => setValByKey("display", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >fingerprint:</p>
                    <InputText className="w-full mb-3" value={_entity?.fingerprint} onChange={(e) => setValByKey("fingerprint", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >hardware:</p>
                    <InputText className="w-full mb-3" value={_entity?.hardware} onChange={(e) => setValByKey("hardware", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >host:</p>
                    <InputText className="w-full mb-3" value={_entity?.host} onChange={(e) => setValByKey("host", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >manufacturer:</p>
                    <InputText className="w-full mb-3" value={_entity?.manufacturer} onChange={(e) => setValByKey("manufacturer", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >model:</p>
                    <InputText className="w-full mb-3" value={_entity?.model} onChange={(e) => setValByKey("model", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >product:</p>
                    <InputText className="w-full mb-3" value={_entity?.product} onChange={(e) => setValByKey("product", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >supported32BitAbis:</p>
                    <InputText className="w-full mb-3" value={_entity?.supported32BitAbis} onChange={(e) => setValByKey("supported32BitAbis", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >supported64BitAbis:</p>
                    <InputText className="w-full mb-3" value={_entity?.supported64BitAbis} onChange={(e) => setValByKey("supported64BitAbis", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >tags:</p>
                    <InputText className="w-full mb-3" value={_entity?.tags} onChange={(e) => setValByKey("tags", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >type:</p>
                    <InputText className="w-full mb-3" value={_entity?.type} onChange={(e) => setValByKey("type", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >isPhysicalDevice:</p>
                    <InputText className="w-full mb-3" value={_entity?.isPhysicalDevice} onChange={(e) => setValByKey("isPhysicalDevice", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >androidId:</p>
                    <InputText className="w-full mb-3" value={_entity?.androidId} onChange={(e) => setValByKey("androidId", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >systemFeatures:</p>
                    <InputText className="w-full mb-3" value={_entity?.systemFeatures} onChange={(e) => setValByKey("systemFeatures", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >createdAt:</p>
                    <Calendar dateFormat="dd/mm/yy hh:mm" placeholder={"dd/mm/yy hh:mm"} value={_entity?.createdAt} onChange={ (e) => setValByKey("createdAt", e.target.value)} showTime ></Calendar>
                </div>
                <div>
                    <p className="m-0" >updatedAt:</p>
                    <Calendar dateFormat="dd/mm/yy hh:mm" placeholder={"dd/mm/yy hh:mm"} value={_entity?.updatedAt} onChange={ (e) => setValByKey("updatedAt", e.target.value)} showTime ></Calendar>
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

export default connect(null, mapDispatch)(DeviceinfoCreateDialogComponent);
// createDialog_code.template
