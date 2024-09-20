import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUserList } from "../reducers/userSlice";
import Button from "./Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserData = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  const deleteUserCall = (id) => {
    if (id) {
      dispatch(deleteUser({ id }))
        .unwrap()
        .then(() => {
          toast.success("User Deleted Successfully!")
        })
        .catch(() => {
          console.log("error");
        });
    }
  };

  return (
    <div className="flex justify-center !w-full mt-10 !px-10">
      <div className="!overflow-x-scroll sm:mb-32 mb-52">
        <table className="border sm:!w-[90%] !w-full">
          <tbody>
            <tr className="text-left ">
              <th className="!min-w-[110px]">Sr No.</th>
              <th className="!min-w-[110px]">User Image</th>
              <th className="!min-w-[110px]">First Name</th>
              <th className="!min-w-[110px]">Last Name</th>
              <th className="!min-w-[110px]">User Email</th>
              <th className="!min-w-[110px] text-center">View</th>
              <th className="!min-w-[110px] text-center">Edit</th>
              <th className="!min-w-[110px] text-center">Delete</th>
            </tr>

            {data?.map((item, idx) => {
              return (
                <tr key={idx} className="border">
                  <td className="text-center">{idx + 1}</td>
                  <td>
                    <img src={item.avatar} alt="User" width="128px" />
                  </td>
                  <td className="pl-5">{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>
                    <Button btnText={"View"} path={`/view?id=${item?.id}`} />
                  </td>
                  <td>
                    <Button btnText={"Edit"} path={`/edit?id=${item?.id}`} />
                  </td>
                  <td>
                    <Button
                      btnText={"Delete"}
                      btnFn={() => deleteUserCall(item?.id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ToastContainer autoClose={1500} position="bottom-right" />
    </div>
  );
};

export default UserData;
