import Button from "./Button";
import { getUserById } from "../reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import UserCard from "./UserCard";

const SearchUserById = () => {
  const dispatch = useDispatch();
  const [userId, setUserId] = useState("");
  const [btnClicked, setBtnClicked] = useState(false);
  const [error, setError] = useState(null); // For error message
  const { dataById } = useSelector((state) => state.user);

  const handleSearch = () => {
    if (userId) {
      dispatch(getUserById({ id: userId }))
        .unwrap() // To handle promise result and catch errors
        .then((result) => {
          if (result && result[0].id) {
            setBtnClicked(true);
            setError(null); // Reset error if valid user found
          } else {
            setError("Invalid user ID. Please enter a value between 1 and 12.");
            setBtnClicked(false); // Prevent showing the card
          }
        })
        .catch(() => {
          setError("Invalid user ID. Please enter a value between 1 and 12.");
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
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Search User By Id (1-12)"
        />

        <Button
          btnText={"Find User"}
          btnFn={handleSearch}
          disabled={!userId} // Disable button if userId is empty
        />
        {btnClicked ? (
          <Button
            btnText={"Clear"}
            btnFn={() => {
              setBtnClicked(false);
              setUserId("");
              setError(null); // Clear error on reset
            }}
          />
        ) : (
          ""
        )}

        {/* Show error message if invalid user ID */}
        {error && <p className="text-red-500 mt-3">{error}</p>}

        {/* Only show card if valid data is found */}
        {dataById && btnClicked && !error ? (
         <UserCard dataById={dataById[0]}/>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default SearchUserById;
