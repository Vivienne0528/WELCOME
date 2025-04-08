// src/pages/register/index.tsx
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAuth } from "@/utils/useAuth";
import { yupResolver } from "@hookform/resolvers/yup";

const Register = () => {
    const { isSubmitted, router, schema, registerOnSubmit } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm({
        resolver: yupResolver(schema),
    });

    return (
        <form onSubmit={handleSubmit(registerOnSubmit)} className="flex flex-col">
            <div>
                <label className="login-label" htmlFor="firstName">
                    First Name:{" "}
                </label>
                <input
                    id="firstName"
                    {...register("firstName", { required: "First name is required." })}
                    className="login-input"
                />
            </div>
            <span className="message error">{errors.firstName?.message}</span>
            <div>
                <label className="login-label" htmlFor="lastName">
                    Last Name:{" "}
                </label>
                <input
                    id="lastName"
                    {...register("lastName", { required: "Last name is required." })}
                    className="login-input"
                />
            </div>
            <span className="message error">{errors.lastName?.message}</span>
            <div>
                <label className="login-label" htmlFor="nickName">
                    Nick Name:{" "}
                </label>
                <input
                    id="nickName"
                    {...register("nickName")}
                    className="login-input"
                />
            </div>
            <span className="message error">{errors.nickName?.message}</span>
            <div>
                <label className="login-label" htmlFor="email">
                    e-mail:{" "}
                </label>
                <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="login-input"
                />
            </div>
            <span className="message error">{errors.email?.message}</span>
            <div>
                <label className="login-label" htmlFor="password">
                    Password:{" "}
                </label>
                <input
                    id="password"
                    type="password"
                    {...register("password")}
                    className="login-input"
                />
            </div>
            <span className="message error">{errors.password?.message}</span>
            <div>
                <label className="login-label" htmlFor="dateOfBirth">
                    Date of Birth:{" "}
                </label>
                <div className="float-right login-label">
                    {/* <DatePicker
                        selected={dateOfBirth}
                        onChange={(date) => setDateOfBirth(date)}
                    dateFormat="yyyy-MM-dd"
                    /> */}
                    <Controller
                        control={control}
                        name="dateOfBirth"
                        render={({ field }) => {
                            return (
                                <DatePicker
                                    selected={field.value}
                                    onChange={field.onChange}
                                    // dateFormat="yyyy-MM-dd"
                                    placeholderText="Select your birth date"
                                />
                            );
                        }}
                    />
                </div>
            </div>
            <span className="message error">{errors.dateOfBirth?.message}</span>
            <div>
                <label className="login-label" htmlFor="gender">
                    Gender:{" "}
                </label>
                <select
                    className="float-right login-label"
                    id="gender "
                    {...register("gender")}
                >
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
            </div>
            <span className="message error">{errors.gender?.message}</span>
            <div>
                <label className="login-label" htmlFor="mobile">
                    Mobile:{" "}
                </label>
                <input id="mobile" {...register("mobile")} className="login-input" />
            </div>
            <span className="message error">{errors.mobile?.message}</span>
            <div>
                <label className="login-label" htmlFor="address">
                    Address:{" "}
                </label>
                <input id="address" {...register("address")} className="login-input" />
            </div>
            <button className="font-semibold p-[12px] rounded-[8px] bg-black text-white mt-[40px] mb-[20px]">
                Register
            </button>
            <button className="font-semibold p-[12px] rounded-[8px] border-[2px] border-black bg-white text-black flex justify-center">
                <img
                    className="w-[25px] mr-[10px]"
                    src="/img/google.png"
                    alt="googleLogo"
                />
                Register with Google
            </button>
            <p className="text-center">
                Have an account?{" "}
                <a
                    className="underline"
                    href="#"
                    onClick={() => {
                        router.push("/login");
                    }}
                >
                    Login
                </a>
            </p>
            {isSubmitted && (
                <p className="message text-green-500 text-center">
                    Register successfully, please sign in.
                </p>
            )}
        </form>
    );
};

export default Register;
