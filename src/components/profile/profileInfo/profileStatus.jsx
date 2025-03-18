import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUserStatus } from "../../../redux/thunk";

const ProfileStatus = ({ profileStatus }) => {
    const dispatch = useDispatch();

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(profileStatus || "No status");

    useEffect(() => {
        dispatch(updateUserStatus(profileStatus));
        setStatus(profileStatus || "No status");
    }, [profileStatus]);

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);

    };

    const handleBlur = () => {
        setEditMode(false);
        dispatch(updateUserStatus(status));
        console.log('update')
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleBlur();
        }
    };
    return (
        <>
            {!editMode ? (
                <div>
                    <span onClick={() => setEditMode(true)}>
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
            )}
        </>
    );
};

export default ProfileStatus;
