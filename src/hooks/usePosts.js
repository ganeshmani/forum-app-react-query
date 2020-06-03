import { useQuery } from 'react-query';
import axios from 'axios';

const getPosts = async () => {
  const { data } = await axios.get('http://localhost:3000/posts');
  return data;
};

export default function usePosts() {
  return useQuery('posts', getPosts);
}
