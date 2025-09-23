'use client'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form'
import { setUserData } from '../../../AllSlices/cosmeticsSlice/authSlice';
import { useDispatch} from 'react-redux';
import {z} from 'zod'
import { useRouter } from 'next/navigation';

const userSchema = z.object({
  email: z
  .string()
  .min(1, 'Email is required')
  .email('Invalid email')
  .refine(value => value.endsWith('@gmail.com'), {
      message: 'Invalid email',
  }),
  password: z
    .string() // Remove the union - just string
    .min(1, 'Password is required')
    .max(10, 'Password cannot be more than 10 characters'),
})

type UserSchemaType = z.infer<typeof userSchema>;

interface LoginCredentials {
  email: string;
  password: string;
}

function Login() {

  const dispatch = useDispatch()
  const route = useRouter()

  const {register, handleSubmit, formState: {errors}} = useForm<UserSchemaType>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange'
  })

  const submitLogin = (data: LoginCredentials) => {
    dispatch(setUserData(data))

    if (data) {
      route.push('/cosmetics')
    }
  }
  
  return (
    <div>
      <form action=""
      onSubmit={handleSubmit(submitLogin)}
      >
        <h1>Login</h1>
        <label htmlFor="mail">
            Mail
        </label><br />
        <input
        {...register('email')}
         placeholder='email'
         type="email" id="mail" />
         <br />
        {typeof errors.email?.message === "string" && (
        <small>{errors.email.message}</small>
        )}
        <br />
        <label htmlFor="password">
            Password
        </label><br />
        <input
        {...register('password')}
        placeholder='Password'
        type="password" id="password" />
        <br />
        {typeof errors.password?.message === "string" && (
        <small>{errors.password.message}</small>
        )}
        <br />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
