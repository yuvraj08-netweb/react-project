import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserList } from "../reducers/userSlice";

const UserData = () => {
  const dispatch = useDispatch();
  const { data, page } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserList({ page }));
  }, [dispatch, page]);

  return (
    <div className="flex justify-center w-full overflow-x-scroll mt-10">
      <table className="border sm:!w-[90%] !w-full">
        <tbody>
          <tr className="text-left">
            <th>User Image:</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>User Email</th>
          </tr>
          {data?.data?.map((item, idx) => {
            return (
              <tr key={idx} className="border">
                <td>
                  <img src={item.avatar} alt="User" />
                </td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                {/* {item.avatar} */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserData;
