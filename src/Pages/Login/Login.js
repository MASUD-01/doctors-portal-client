
import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';

const Login = () => {
    const [signInWithGoogle, gUser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (loading || gloading) {
        return <Loading></Loading>
    }
    let signInerror;
    if (error || gerror) {
        signInerror = <p className='text-red-500'>{error?.message || gerror?.message}</p>
    }


    if (gUser) {
        console.log(gUser)
    }

    const onSubmit = data => {

        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl px-3">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input type="email" placeholder="your email" className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+.[a-z]{2,3}/,
                                        message: 'provide a valid email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}


                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">password</span>
                            </label>

                            <input type="password" placeholder="your passs" className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'pass is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'must be 6 charater or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.email?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}


                            </label>
                        </div>
                        {signInerror}
                        <input className='btn w-full max-w-xs text-white' type="submit" value='Login' />
                    </form>
                </div>
                <div className="divider">OR</div>
                <button
                    onClick={() => signInWithGoogle()}
                    className="btn  btn-outline">Continue with google</button>
            </div>
        </div>
    );
};

export default Login;