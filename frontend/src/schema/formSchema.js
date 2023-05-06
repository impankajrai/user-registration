import * as Yup from "yup";

const schema = Yup.object().shape({
	name: Yup.string("Name Should be a string")
		.required()
		.matches(/^[a-zA-Z\s]*$/, "Name only contain alphabetic characters"),
	age: Yup.mixed().test(
		"valid-age",
		"Age must be a valid date or a positive number",
		function(value) {
			if (!value) return true;
			if (isNaN(new Date(value))) {
				return Yup.number()
					.positive()
					.isValidSync(value);
			}
			return true;
		}
	),
	gender: Yup.string().required("Gender is required"),
	email: Yup.string().email("Invalid email"),
	mobile: Yup.string().matches(/^[6-9]\d{9}$/, "Invalid mobile number"),
	emergencyContactNumber: Yup.string().matches(
		/^[6-9]\d{9}$/,
		"Invalid emergency contact number"
	),
	idType: Yup.string(),
  govtId: Yup.string().when("idType", {
    is: "Aadhar",
    then: (schema) =>
      schema
        .required("Govt Id is required")
        .matches(/^\d{12}$/, "Aadhar number must be 12 digits"),
    otherwise: (schema) =>
      schema
        .required("Govt Id is required")
        .matches(
          /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
          "PAN number must be 10 alphanumeric characters"
        ),
  }),
	pincode: Yup.string()
		.matches(/^\d{6}(?:[-\s]\d{4})?$/, "Invalid ZIP code")
		.required("ZIP code is required"),
});

export default schema;
