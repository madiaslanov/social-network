import React from "react";
import {useForm} from "react-hook-form";
import style from "./login.module.css";
import {useDispatch, useSelector} from "react-redux";
import {setFormData} from "../../redux/actions";

const Login = () => {
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.form)


    const {register, handleSubmit, formState: {errors}} =
        useForm(
            {
                mode: "onChange",
                defaultValues: formData
            });


    const onSubmit = (values) => {
        console.log(values);
        dispatch(setFormData(values));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
            <div>
                <input
                    className={style.input}
                    type="text"
                    placeholder="Login"
                    {...register("login", {
                        required: "Username is required",
                        pattern: {
                            value: /^(?!.*\.\.)(?!.*__)(?!.*\.$)(?!.*_$)[a-zA-Z0-9._]{3,20}$/,
                            message: "Invalid username",
                            maxLength: {value: 30, message: "Max Length of Usernames"},
                        },
                    })}
                />
                {errors.login && <p className={style.error}>{errors.login.message}</p>}
            </div>

            <div>
                <input
                    className={style.input}
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                        required: "Password is required",
                        minLength: {value: 6, message: "Password must be at least 6 characters"}
                    })}
                />
                {errors.password && <p className={style.error}>{errors.password.message}</p>}
            </div>

            <div>
                <label>
                    <input type="checkbox" {...register("rememberMe")} /> Remember me!
                </label>
            </div>

            <div>
                <button type="submit" className={style.button}>Login</button>
            </div>
        </form>
    );
};

const LoginForm = () => {
    return (
        <div>
            <h1 className={style.title}>Login</h1>
            <Login/>
        </div>
    );
};

export default LoginForm;
