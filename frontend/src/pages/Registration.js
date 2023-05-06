import React from "react";
import { useForm } from "react-hook-form";
import schema from "../schema/formSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

function Registration() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async(data) => {
		if (data) {
			let res=await fetch("http://localhost:4000/api/user/registration",{
				method: "POST",
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify(data)}		
				)
			res=await res.json();
			toast.success(res.message); 	
		}
	};

	return (
		<>
		
		<div className='registration-page'>
			<form className='form' onSubmit={handleSubmit(onSubmit)}>
				<fieldset>
					<legend>Personal Details</legend>
					<div className='form-row'>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							name='name'
							placeholder='Enter Name'
							{...register("name")}
						/>

						<label htmlFor='age' className='multiline-label'>
							Date of Birth or Age
						</label>
						<input
							type='text'
							name='age'
							className='age'
							placeholder='DD/MM/YYYY or Age in Years'
							{...register("age")}
						/>

						<label htmlFor='gender'>Sex</label>
						<select name='gender' {...register("gender")}>
							<option value='' defaultValue hidden>
								Enter Sex
							</option>
							<option value='Male'>Male</option>
							<option value='Female'>Female</option>
							<option value='Other'>Other</option>
						</select>
					</div>

					<div className='form-row'>
						<label htmlFor='mobile'>Mobile</label>
						<input
							type='text'
							name='mobile'
							placeholder='Enter Mobile'
							{...register("mobile")}
						/>
						<label htmlFor='idType'>Govt Issued Id</label>
						<select name='idType' {...register("idType")}>
							<option value='' defaultValue hidden>
								ID Type
							</option>
							<option value='Aadhar'>Aadhar Card</option>
							<option value='PAN'>PAN Card</option>
						</select>
						<input
							type='text'
							name='govtId'
							placeholder='Enter Govt ID'
							{...register("govtId")}
						/>
					</div>
				</fieldset>
				<fieldset>
					<legend>Contact Details</legend>
					<div className='form-row'>
						<label htmlFor='guardianLabel'>Guardian Details </label>
						<select name='guardianLabel' {...register("guardianLabel")}>
							<option value='' defaultValue hidden>
								Enter Label
							</option>
							<option value='Mr.'>Mr.</option>
							<option value='Mrs.'>Mrs.</option>
						</select>
						<input
							type='text'
							name='guardianName'
							placeholder='Enter Guardian Name'
							{...register("guardianName")}
						/>
						<label htmlFor='email'>Email </label>
						<input
							type='text'
							name='email'
							placeholder='Enter Email'
							{...register("email")}
						/>
						<label htmlFor='emergencyContactNumber' className='multiline-label'>
							Emergency Contact Number
						</label>
						<input
							type='text'
							name='emergencyContactNumber'
							placeholder='Enter Emergency Mobile No'
							{...register("emergencyContactNumber")}
						/>
					</div>
				</fieldset>

				<fieldset>
					<legend>Address Details</legend>
					<div className='form-row'>
						<label htmlFor='address'>Address</label>
						<input
							type='text'
							name='address'
							placeholder='Enter Address'
							{...register("address")}
						/>

						<label htmlFor='state'>State </label>
						<select name='state' {...register("state")}>
							<option value='' defaultValue hidden>
								Enter State
							</option>
							<option value='Madhya Pradesh'>Madhya Pradesh</option>
						</select>
						<label htmlFor='city'>City </label>
						<select name='city' {...register("city")}>
							<option value='' defaultValue hidden>
								Enter City
							</option>
							<option value='Chhindwara'>Chhindwara</option>
							<option value='Bhopal'>Bhopal</option>
							<option value='Indore'>Indore</option>
						</select>
					</div>
					<div className='form-row'>
						<label htmlFor='country'>Country</label>
						<select name='country' {...register("country")}>
							<option value='India' defaultValue hidden>
								India
							</option>
						</select>

						<label htmlFor='pincode'>Pincode </label>
						<input
							type='text'
							name='pincode'
							placeholder='Enter Pincode'
							{...register("pincode")}
						/>
					</div>
				</fieldset>

				<fieldset>
					<legend>Other Details</legend>
					<div className='form-row'>
						<label htmlFor='occupation'>Occupation</label>
						<input
							type='text'
							name='occupation'
							placeholder='Enter Occupation'
							{...register("occupation")}
						/>

						<label htmlFor='religion'>Religion</label>
						<select name='religion' {...register("religion")}>
							<option value='' defaultValue hidden>
								Enter Religion
							</option>
							<option value='hindu'>Hindu</option>
							<option value='muslim'>Muslim</option>
							<option value='sikh'>Sikh</option>
							<option value='christian'>Christian</option>
						</select>

						<label htmlFor='maritalStatus'>Marital Status</label>
						<select name='maritalStatus' {...register("maritalStatus")}>
							<option value='' defaultValue hidden>
								Enter Marital Status
							</option>
							<option value='unmarried'>Unmarried</option>
							<option value='married'>Married</option>
						</select>

						<label htmlFor='bloodGroup'>Blood Group</label>
						<select name='bloodGroup' {...register("bloodGroup")}>
							<option value='' defaultValue hidden>
								Group
							</option>
							<option value='O+'>O+</option>
							<option value='B+'>B+</option>
							<option value='AB+'>AB+</option>
							<option value='O'>O</option>
							<option value='B-'>B-</option>
							<option value='AB-'>AB-</option>
						</select>
					</div>

					<div className='form-row'>
						<label htmlFor='nationality'>Nationality</label>
						<select name='nationality' {...register("nationality")}>
							<option value='Indian' defaultValue hidden>
								India
							</option>
						</select>
					</div>

					<ul style={{ color: "red" }}>
						{Object.keys(errors).map((data, index) => (
							<li key={index}>{errors[data].message}</li>
						))}
					</ul>
				</fieldset>
				<div className='button-container'>
					<button className='cancelbtn'>{` CANCEL (ESC)`}</button>
					<button
						type='submit'
						className='confirmbtn'
					>{` SUBMIT (CTRL+S)`}</button>
				</div>
			</form>
		</div>
		</>
	);
}

export default Registration;
