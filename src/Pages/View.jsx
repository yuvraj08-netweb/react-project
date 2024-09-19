import { useSearchParams } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../reducers/userSlice";
import UserCard from "../components/UserCard";
import Loader from "../components/Loader";
import Button from "../components/Button";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

const View = () => {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");

  const { dataById, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById({ id }));
  }, [dispatch, id]);

  return (
    <div>
      <div className="mt-6"></div>
      <Button
        btnText={
          <>
            <ArrowCircleLeftIcon /> Home
          </>
        }
        path={"/"}
      />
      {loading ? <Loader /> : <UserCard dataById={dataById[0]} />}

      <Footer />
    </div>
  );
};

export default View;
