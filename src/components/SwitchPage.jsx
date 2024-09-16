import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../reducers/userSlice";

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
      <button
        className="border rounded-xl px-5 text-sm py-2 mb-8 font-semibold"
        onClick={handlePageChange}
      >
        Change Page
      </button>
    </>
  );
};

export default SwitchPage;
