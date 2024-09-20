import Header from "../components/Header";
import UserData from "../components/UserData";
import Button from "../components/Button";
import SearchUserById from "../components/SearchUserById";
import { useDispatch, useSelector } from "react-redux";
import { setShowData } from "../reducers/userSlice";

function Home() {
  const { showData } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <Header />

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

      <SearchUserById />

      {showData ? <UserData /> : ""}
    </div>
  );
}

export default Home;
