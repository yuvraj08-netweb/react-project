import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../reducers/userSlice";
import Button from "./Button";

const SwitchPage = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.user);

  const handlePageChange = () => {
    if (page === 1) {
      dispatch(setPage(2));
    } else {
      dispatch(setPage(1));
    }
  };
  return (
    <>
      <Button
        btnText={"Change Page"}
        btnFn={handlePageChange}
      />
    </>
  );
};

export default SwitchPage;
