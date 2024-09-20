import Button from "./Button";
import { getUserByName } from "../reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import UserCard from "./UserCard";

const SearchByName = () => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [btnClicked, setBtnClicked] = useState(false);
  const [error, setError] = useState(null); // For error message
  const { dataByName } = useSelector((state) => state.user);

  const handleSearch = () => {
    if (userName) {

      dispatch(getUserByName({ userName }))
        .unwrap() // To handle promise result and catch errors
        .then((result) => {

          if (result && result.length) {
            setBtnClicked(true);
            setError(null); // Reset error if valid user found
          } else {
            setError("User Not Found!");
            setBtnClicked(false); // Prevent showing the card
          }
        })
        .catch(() => {
          setError("Invalid Name");
          setBtnClicked(false);
        });
    }
  };

  return (
    <>
      <div className="container max-w-max mx-auto mt-5">
        <input
          className="border p-1 rounded-xl"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter User Name"
        />

        <Button
          btnText={"Find User"}
          btnFn={handleSearch}
          disabled={!userName} // Disable button if userId is empty
        />
        {btnClicked ? (
          <Button
            btnText={"Clear"}
            btnFn={() => {
              setBtnClicked(false);
              setUserName("");
              setError(null); // Clear error on reset
            }}
          />
        ) : (
          ""
        )}

        {/* Show error message if invalid user ID */}
        {error && <p className="text-red-500 mt-3">{error}</p>}

        {/* Only show card if valid data is found */}
        {dataByName && btnClicked && !error ? (
          <UserCard dataById={dataByName} />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default SearchByName;
