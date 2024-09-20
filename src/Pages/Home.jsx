import UserData from "../components/UserData";
import Button from "../components/Button";
import SearchUserById from "../components/SearchUserById";
import { useDispatch, useSelector } from "react-redux";
import { setShowData } from "../reducers/userSlice";
import SearchByName from "../components/SearchByName";

function Home() {
  const { showData } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
        <h1 className="text-4xl font-bold font-serif text-center my-12">Dummy API - User App</h1>

      {showData ? (
        <Button
          btnText={"Hide User Data"}
          btnFn={() => {
            dispatch(setShowData(false));
          }}
        />
      ) : (
        <Button
          btnText={"Show User Data"}
          btnFn={() => {
            dispatch(setShowData(true));
          }}
        />
      )}
      <Button btnText={"Create User"} path={"/create_user"}/>

      <SearchUserById />
      <SearchByName />
      {showData ? <UserData /> : ""}
    </div>
  );
}

export default Home;
