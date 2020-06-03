import { useQuery } from 'react-query';
import axios from 'axios';

const getPostById = async (_, postId) => {
  const { data } = await axios.get(`http://localhost:3000/posts/${postId}`);
  return data;
};

export default function usePost(postId) {
  return useQuery(['post', postId], getPostById);
}
