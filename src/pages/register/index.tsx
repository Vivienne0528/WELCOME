import { Controller, SubmitHandler, useForm } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import { IFormInput } from '@/types/types';
import { useRouter } from 'next/navigation';
import { useAuth } from "@/utils/useAuth";



const Register = () => {
    const { register, handleSubmit, formState: { errors }, control } = useForm<IFormInput>();
    const router = useRouter()
    const { isSubmitted, setIsSubmitted, existUser } = useAuth();
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
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
                <input id='email' type='email'  {...register("email", {
                    required: "Email is required.",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Please enter a valid email address (e.g., user@example.com).'
                    }
                })} />

            </div>
            <span className='message error'>{errors.email?.message}</span>
            <div>
                <label htmlFor='password'>Password: </label>
                <input id='password' type='password' minLength={6} {...register("password", { required: "Password is required." })} />
            </div>
            <span className='message error'>{errors.password?.message}</span>
            <div>
                <label htmlFor='dateOfBirth'>Date of Birth: </label>
                {/* <input id='dateOfBirth' {...register("dateOfBirth", { required: 'Date of birth is required.' })} /> */}
                <Controller
                    control={control}
                    name="ReactDatepicker"
                    render={({ field: { value, ...fieldProps } }) => {
                        return (
                            <ReactDatePicker
                                {...fieldProps}
                                className="input"
                                placeholderText="Select date"
                                selected={value}
                            />
                        );
                    }}
                />
            </div>
            <span className='message error'>{errors.dateOfBirth?.message}</span>
            <div>
                <label htmlFor='gender'>Gender: </label>
                <select id='gender '{...register("gender", { required: "Gender is required." })}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
            </div>
            <span className='message error'>{errors.gender?.message}</span>
            <div>
                <label htmlFor='mobile'>Mobile: </label>
                <input id='mobile' {...register("mobile", { required: "Mobile number is required.", pattern: { value: /^\+?[0-9]{7,15}$/, message: "Please enter a valid mobile number." } })} />
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
            {/* {isSubmitted ?
                (<p className="message success">Register successfully, please sign in.</p>) :
                (<p className="message error">Email had been registered, Please sign in.</p>
                )
            } */}


        </form>
    );
};


export default Register;