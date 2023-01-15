import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-hot-toast';

const SingUp = () => {
	const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
	const [updateProfile, updating, uError] = useUpdateProfile(auth);
	const [sendEmailVerification, sending] = useSendEmailVerification(auth);

	const { register, handleSubmit, formState: { errors } } = useForm();

	const onSubmit = async (data) => {
		await createUserWithEmailAndPassword(data.email, data.password);
		await updateProfile({ displayName: data.name });
		await sendEmailVerification();
		toast('Your Registration Successfully, Send email verification user');
	};
	return (
		<div className='flex items-center justify-center h-screen'>
			<div className="shadow-xl card w-96 bg-base-100 ">
				<div className="card-body">
					<h2 className="mb-3 text-2xl font-bold text-center">Sign Up</h2>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="w-full max-w-xs form-control">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input type="text" className="w-full max-w-xs input input-bordered" {...register("name", {
								required: {
									value: true,
									message: 'Name is Required'
								}
							})} />
							<label className="label">
								{errors.name?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.name?.message}</span>}
							</label>
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input type="email" className="w-full max-w-xs input input-bordered" {...register("email", {
								required: {
									value: true,
									message: 'Email is Required'
								},
								pattern: {
									value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
									message: 'Provide a valid Email'
								}
							})} />
							<label className="label">
								{errors.email?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.email?.message}</span>}
								{errors.email?.type === 'pattern' && <span className="text-red-500 label-text-alt">{errors.email?.message}</span>}
							</label>
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input type="password" className="w-full max-w-xs input input-bordered" {...register("password", {
								required: {
									value: true,
									message: 'Password is Required'
								},
								minLength: {
									value: 6,
									message: 'Must be 6 characters or longer'
								}
							})} />
							<label className="label">
								{errors.password?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.password?.message}</span>}
								{errors.password?.type === 'minLength' && <span className="text-red-500 label-text-alt">{errors.password?.message}</span>}
							</label>
						</div>
						<input className='w-full max-w-xs text-white btn' type="submit" value="Sign Up" />
					</form>
					<p className='text-center'><small>old to Doctor portal <Link to='/login' className='text-green-400 '>Login</Link> </small></p>
					<div className="divider">OR</div>
					<button className="mb-2 btn btn-outline">Continue with Google</button>
				</div>
			</div>
		</div>
	);
};

export default SingUp;