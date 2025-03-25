import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import style from "./dialogs.module.css";
import DialogItem from "./dialogItem/dialogItem";
import Messages from "./messages/messages";
import {sendMessage} from "../../redux/actions";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

//
// const DialogsForm = () => {
//
//     const dispatch = useDispatch();
//     const {register, handleSubmit, formState: {errors}, reset} = useForm();
//
//     const onSubmit = (values) => {
//         if (values.message.trim()) {
//             dispatch(sendMessage(values.message));
//             reset();
//         }
//     }
//
//     return (<div className={style.generalDialog}>
//             <Dialogs/>
//             <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
//                 <input
//                     {...register("message", {
//                         required: "Add Message",
//                         maxLength: {value: 200, message: "MaxLength of Messages"},
//                     })}
//                     placeholder={`Type a message...`}
//                 />
//                 {errors.message && <p className={style.error}>{errors.message.message}</p>}
//                 <button type="submit">
//                     Send
//                 </button>
//             </form>
//
//
//
//         </div>
//     )
// };
//
// const Dialogs = () => {
//     const navigate = useNavigate();
//     const dialogData = useSelector((state) => state.dialogsPages.dialogData);
//     const messageData = useSelector((state) => state.dialogsPages.messageData);
//     const isAuthState = useSelector((state) => state.auth.isAuth);
//
//     useEffect(() => {
//         if (!isAuthState) {
//             navigate("/login");
//         }
//     }, [isAuthState, navigate]);
//
//
//     return (
//         <div className={style.dialogs}>
//             <div className={style.dialogsItem}>
//                 {dialogData.map((d) => (
//                     <DialogItem name={d.name} id={d.id} key={d.id}/>
//                 ))}
//             </div>
//             <div className={style.messages}>
//                 {messageData.map((m) => (
//                     <Messages message={m.message} key={m.id}/>
//                 ))}
//             </div>
//         </div>
//     )
// }
//
//
// export default DialogsForm;


const Dialogs = () => {
    return(
        <div className={style.main}>
            Dialogs: there are no endpoints corresponding to this section on the server
        </div>
    )
}

export default Dialogs;
