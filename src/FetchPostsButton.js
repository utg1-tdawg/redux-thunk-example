import { fetchPosts } from "./postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "./Spinner";
export default function () {
  const dispatch = useDispatch();
  const fetchStatus = useSelector((state) => state.posts.status);

  return fetchStatus === "loading" ? (
    <Spinner text="loading" /> // shows up for a split second
  ) : (
    <button onClick={() => dispatch(fetchPosts())}>
      {`Fetch posts ${fetchStatus}`}
    </button>
  );
}
