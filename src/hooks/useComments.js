import { useQuery } from 'react-query';
import axios from 'axios';

const getCommentById = async (_, postId) => {
  const { data } = await axios.get(
    `http://localhost:3000/posts/${postId}/comments`
  );
  return data;
};

export default function useComments(commentId) {
  return useQuery(['comments', commentId], getCommentById);
}
