// import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import  ThumbUpIcon  from "@mui/icons-material/ThumbUp";
import { IconButton } from "@mui/material";
// import { addLike, fetchLikes } from "../redux/LikeSlice";
import { addLike } from "../redux/LikeSlice";


const PlatformInfo = () => {
  let {value, status} = useSelector((state) => state.like);
  let dispatch = useDispatch();

  // Dispatch thunk on component mountconst LikeComponent = () => {
    // useEffect(() => {
    //     dispatch(fetchLikes());
    // }, [dispatch])

  return (
    <div>
      <h2>Platform Info</h2>
      <h3>
        Did you like our services?
        <IconButton onClick={() => dispatch(addLike())}><ThumbUpIcon/></IconButton>
        {value}
      </h3>
      <h4>Status:{status}</h4>
    </div>
  );
};

export default PlatformInfo;
