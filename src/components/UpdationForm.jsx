/* eslint-disable no-unused-vars */
import { TextField } from "@mui/material";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import Button from "./Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/src/yup.ts";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, setShowData, updateUser } from "../reducers/userSlice";

const UpdationForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const dispatch = useDispatch();
  const { dataById } = useSelector((state) => state.user);

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
    setValue,
  } = useForm({
    // defaultValues,
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      first_name: dataById?.[0]?.first_name,
      last_name: dataById?.[0]?.last_name,
      email: dataById?.[0]?.email,
      avatar: dataById?.[0]?.avatar,
    },
  });

  useEffect(() => {
    dispatch(getUserById({ id }));
  }, [dispatch, id, setValue]);

  useEffect(() => {
    setValue("first_name", dataById?.[0]?.first_name);
    setValue("last_name", dataById?.[0]?.last_name);
    setValue("email", dataById?.[0]?.email);
    setValue("avatar", dataById?.[0]?.avatar);
  }, [dataById, setValue]);

  const navigation = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    if (data) {
      const updatedData = {
        ...data,
        id,
      };
      dispatch(updateUser({ updatedData }))
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
              defaultValue=""
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

export default UpdationForm;
