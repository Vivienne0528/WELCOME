// src/pages/login/index.tsx
import { useAuth } from '@/utils/useAuth';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const Login = () => {
    const {
        isSubmitted,
        setIsSubmitted,
        existUser
    } = useAuth();
    const router = useRouter()
    const loginSchema = yup
        .object()
        .shape({
            email: yup.string().required(),
            password: yup.string().required()
        })
        .required();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });
    const onSubmit = (data: { email: string; password: string; }) => {
        setIsSubmitted(false)
        switch (true) {
            case !(data.email === existUser.email):
                alert("Email has  not been registered, Please register. ")
                break
            case !(data.password === existUser.password):
                alert("Your password is not correct, please try again.")
                break
            default:
                setIsSubmitted(true);
                break
        }
        alert(JSON.stringify(data))
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
            <div>
                <label className="login-label" htmlFor='email'>e-mail: </label>
                <input id='email' type='email'  {...register("email")} className='login-input' />
            </div>
            <span className='message error'>{errors.email?.message}</span>
            <div>
                <label className="login-label" htmlFor='password'>Password: </label>
                <input id='password' type='password' {...register("password")} className='login-input' />
            </div>
            <span className='message error'>{errors.password?.message}</span>
            <button className=' font-semibold p-[12px] rounded-[8px] bg-black text-white mt-[40px] mb-[20px]' >Sign in</button>
            <button className='font-semibold p-[12px] rounded-[8px] border-[2px] border-black bg-white text-black flex justify-center'><img className='w-[25px] mr-[10px]' src="/img/google.png" alt="googleLogo" />Sign in with Google</button>
            <p className='text-black-[0.8rem] text-center mt-[30px]'>Need an account? <a className='underline' href="#" onClick={() => { router.push('/register') }}>Register</a></p>
            {isSubmitted && <p className="message text-green-500 text-center">Login successfully.</p>}
        </form>
    );
}

export default Login