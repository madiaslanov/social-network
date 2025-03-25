import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUserStatus } from "../../../redux/thunk";
import styles from "./profileInfo.module.css";

const ProfileStatus = ({ profileStatus, isOwner}) => {
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(profileStatus || "No status");

    useEffect(() => {
        if (profileStatus !== status) {
            setStatus(profileStatus || "No status");
        }
    }, [profileStatus]);

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    const handleBlur = () => {
        setEditMode(false);
        if (status.trim() !== profileStatus) {
            dispatch(updateUserStatus(status.trim()));
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleBlur();
        }
    };

    return (
        <>
            <div className={styles.statusSpan}>
            <span onDoubleClick={ () => setEditMode(true)}>Status:</span>
            {isOwner ? (
                !editMode ? (
                    <div>
            <span onDoubleClick={() => setEditMode(true)}>
                {status || "No status"}
            </span>
                    </div>
                ) : (
                    <div>
                        <input
                            onBlur={handleBlur}
                            autoFocus
                            value={status}
                            onChange={onStatusChange}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                )
            ) : (
                <div>{status || "No status"}</div>
            )}
            </div>
        </>
    )
};


export default ProfileStatus;
