import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import style from "./login.module.css";
import {useDispatch, useSelector} from "react-redux";
import {setFormData} from "../../redux/actions";
import {login} from "../../redux/thunk";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.form)


    const {register, handleSubmit, formState: {errors}} =
        useForm(
            {
                mode: "onChange",
                defaultValues: formData
            });


    const onSubmit = (values) => {
        dispatch(setFormData(values));
        dispatch(login(values.email, values.password, values.rememberMe));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
            <div>
                <input
                    className={style.input}
                    type="text"
                    placeholder="Email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message: "Invalid email format",
                        },
                    })}
                />

                {errors.login && <p className={style.error}>{errors.email.message}</p>}
            </div>

            <div>
                <input
                    className={style.input}
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                        required: "Password is required",
                        minLength: {value: 4, message: "Password must be at least 4 characters"}
                    })}
                />
                {errors.password && <p className={style.error}>{errors.password.message}</p>}
            </div>

            <div>
                <label className={style.remember}>
                    <input type="checkbox" {...register("rememberMe")} /> Remember me!
                </label>
            </div>

            <div>
                <button type="submit" className={style.button}>Login</button>
            </div>
        </form>
    );
};

const Login = () => {
    const isAuthState = useSelector((state) => state.auth.isAuth);
    const navigate = useNavigate();
    useEffect(() => {
        if (isAuthState) return navigate("/profile");
    }, [navigate, isAuthState]);
    return (
        <div>
            <h1 className={style.title}>Login</h1>
            <LoginForm/>
            <div className={style.freeAccount}>
                <p>Email: free@samuraijs.com</p>
                <p>Password: free</p>
            </div>
        </div>
    );
};

export default Login;
