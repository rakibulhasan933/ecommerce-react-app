import React from 'react';
import { useForm } from 'react-hook-form';

const ResetPassword = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = data => {
		console.log(data);
	}
	return (
		<div className='flex items-center justify-center h-screen '>
			<div className="flex items-center justify-center w-2/4 shadow-xl card bg-base-100">
				<div className="card-body">
					<h2 className='text-2xl font-bold text-center'>Forget Password</h2>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="w-full max-w-xs form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input type="email" className="w-full max-w-xs input input-bordered" placeholder="info@site.com" {...register("email", {
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

						</div>
						<input className='w-full max-w-xs text-white btn' type="submit" value="Email Sent" />
					</form>
				</div>
			</div>
		</div>
	);
};

export default ResetPassword;