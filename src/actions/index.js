import {getPosts} from "../apis/jsonPlaceholder";

//action creators
export const fetchposts = () => async(dispatch) => {
    const response = await getPosts();
    dispatch( { type: 'FETCH_POSTS', payload: response });
};
