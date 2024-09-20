import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../reducers/userSlice";
import UserCard from "../components/UserCard";
import Loader from "../components/Loader";
import PagesHeader from "../components/PagesHeader";
import NotFound from "./NotFound";

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
      {dataById.length ? (
        <>
          <PagesHeader headerText="View User Information" />
          {loading ? <Loader /> : <UserCard dataById={dataById} />}
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default View;
