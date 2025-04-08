// src/pages/register/index.tsx
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { useRouter } from 'next/navigation';
import { useAuth } from "@/utils/useAuth";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

const Register = () => {
    const router = useRouter()
    const { isSubmitted, setIsSubmitted, existUser } = useAuth();
    const registerSchema = yup
        .object()
        .shape({
            email: yup.string().email().required(),
            password: yup.string().required("Password is required")
                .matches(
                    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/,
                    "Password must be at least 8 characters, include 1 uppercase letter, 1 number, and 1 special character"
                ),
            firstName: yup.string().required(),
            lastName: yup.string().required(),
            nickName: yup.string(),
            dateOfBirth: yup.date().required(),
            gender: yup.string().required(),
            mobile: yup.string().required(),
            address: yup.string().required(),
        })
        .required();
    {/* password:至少一个大写,至少一个符号, 至少一个数字,至少8位 */ }
    const { register, handleSubmit, formState: { errors }, control } = useForm({
        resolver: yupResolver(registerSchema)
    });
    const onSubmit = (data: { email: string; }) => {
        if (existUser.email == data.email) {
            alert("Email had been registered, Please sign in.")
        } else {
            setIsSubmitted(true);
            alert(JSON.stringify(data))
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='login-form'>
            <div>
                <label htmlFor='firstName'>First Name: </label>
                <input id='firstName' {...register("firstName", { required: "First name is required." })} />

            </div>
            <span className='message error'>{errors.firstName?.message}</span>
            <div>
                <label htmlFor='lastName'>Last Name: </label>
                <input id='lastName' {...register("lastName", { required: "Last name is required." })} />

            </div>
            <span className='message error'>{errors.lastName?.message}</span>
            <div>
                <label htmlFor='nickName'>Nick Name: </label>
                <input id='nickName' {...register("nickName")} />

            </div>
            <span className='message error'>{errors.nickName?.message}</span>
            <div>
                <label htmlFor='email'>e-mail: </label>
                <input id='email' type='email'  {...register("email")} />

            </div>
            <span className='message error'>{errors.email?.message}</span>
            <div>
                <label htmlFor='password'>Password: </label>
                <input id='password' type='password' {...register("password")} />
            </div>
            <span className='message error'>{errors.password?.message}</span>
            <div>
                <label htmlFor='dateOfBirth'>Date of Birth: </label>
                <div className="datePicker" >
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
            <span className='message error'>{errors.dateOfBirth?.message}</span>
            <div>
                <label htmlFor='gender'>Gender: </label>
                <select className='gender' id='gender '{...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
            </div>
            <span className='message error'>{errors.gender?.message}</span>
            <div>
                <label htmlFor='mobile'>Mobile: </label>
                <input id='mobile' {...register("mobile")} />
            </div>
            <span className='message error'>{errors.mobile?.message}</span>
            <div>
                <label>Address: </label>
                <input {...register("address")} />
            </div>
            <button className='signin' >Register</button>
            <button className='google-signin'><img src="/img/google.png" alt="googleLogo" />Register with Google</button>
            <p>Have an account? <a href="#" onClick={() => { router.push('/login') }}>Login</a></p>
            {isSubmitted && (<p className="message success">Register successfully, please sign in.</p>)}
        </form>
    );
};

export default Register;