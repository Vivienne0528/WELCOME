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
        <form onSubmit={handleSubmit(onSubmit)} className='login-form'>
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
            <button className='signin' >Sign in</button>
            <button className='google-signin'><img src="/img/google.png" alt="googleLogo" />Sign in with Google</button>
            <p >Have an account? <a href="#" onClick={() => { router.push('/register') }}>Register</a></p>
            {isSubmitted && <p className="message success">Login successfully.</p>}
        </form>
    );
}

export default Login