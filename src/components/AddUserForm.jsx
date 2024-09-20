
import { TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import Button from "./Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/src/yup.ts";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUser, setShowData } from "../reducers/userSlice";

const AddUserForm = () => {

  const dispatch = useDispatch();

  const schema = yup.object().shape({
    first_name: yup.string().required("First Name Is Required !"),
    last_name: yup.string().required("Last Name Is Required !"),
    email: yup
      .string()
      .required("email is required")
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        "Email is Invalid"
      ),
    avatar: yup.string().required("Please provide your profile picture URL"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // defaultValues,
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      avatar: "",
    },
  });

  const navigation = useNavigate();

  const onSubmit = (data) => {
    if (data) {
      dispatch(createUser(data))
        .unwrap()
        .then(() => {
          navigation("/");
          dispatch(setShowData(true));
          
        });
    }
  };

  return (
    <div>
      <form className="flex flex-col gap-3 max-w-[400px] mx-auto mt-14">
        <Controller
          name="first_name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              required
              id="outlined-required"
              label="First Name"
              placeholder="John"
              InputLabelProps={{
                shrink: true,
              }}
            />
          )}
        />
        <p className="text-sm text-red-700 font-semibold">
          {errors.first_name?.message}
        </p>
        <Controller
          name="last_name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              required
              id="outlined-required"
              label="Last Name"
              placeholder="Doe"
              InputLabelProps={{
                shrink: true,
              }}
            />
          )}
        />
        <p className="text-sm text-red-700 font-semibold">
          {errors.last_name?.message}
        </p>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              required
              id="outlined-required"
              label="Email"
              type="email"
              placeholder="your@mail.com"
              InputLabelProps={{
                shrink: true,
              }}
            />
          )}
        />
        <p className="text-sm text-red-700 font-semibold">
          {errors.email?.message}
        </p>
        <Controller
          name="avatar"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              required
              id="outlined-required"
              label="Image URL"
              placeholder="https://unspash.com/your-image.png/"
              InputLabelProps={{
                shrink: true,
              }}
            />
          )}
        />
        <p className="text-sm text-red-700 font-semibold">
          {errors.avatar?.message}
        </p>
        <Button btnText={"Submit"} btnFn={handleSubmit(onSubmit)} />
      </form>

    </div>
  );
};

export default AddUserForm;
