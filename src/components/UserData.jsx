import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserList } from "../reducers/userSlice";
import Button from "./Button";

const UserData = () => {
  const dispatch = useDispatch();
  const { data, page } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserList({ page }));
  }, [dispatch, page]);

  return (
    <div className="flex!w-full !overflow-x-scroll mt-10">
      <table className="border sm:!w-[90%] !w-full">
        <tbody>
          <tr className="text-left ">
            <th className="!min-w-[110px]">User Image</th>
            <th className="!min-w-[110px]">First Name</th>
            <th className="!min-w-[110px]">Last Name</th>
            <th className="!min-w-[110px]">User Email</th>
            <th className="!min-w-[110px] text-center">View</th>
            <th className="!min-w-[110px] text-center">Edit</th>
            <th className="!min-w-[110px] text-center">Delete</th>
          </tr>
          {data?.data?.map((item, idx) => {
            return (
              <tr key={idx} className="border">
                <td>
                  <img src={item.avatar} alt="User" />
                </td>
                <td className="pl-5">{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td><Button btnText={"View"} path="/view" /></td>
                <td><Button btnText={"Edit"}
                  path={"/edit"}
                /></td>
                <td><Button btnText={"Delete"}/></td>
                
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserData;
