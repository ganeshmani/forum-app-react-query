import React, { useState } from 'react';
import {
  Box,
  Heading,
  Flex,
  Textarea,
  Button,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/core';
import useComments from '../../hooks/useComments';
import { useMutation, queryCache } from 'react-query';
import Axios from 'axios';
const Comments = ({ postId }) => {
  const { status, error, data, isFetching, isStale } = useComments(postId);

  const [comment, setComment] = useState('');

  const [mutate] = useMutation(
    (values) => {
      Axios.post('http://localhost:3000/comments', values);
    },
    {
      onSuccess: () => {
        queryCache.refetchQueries('comments');
      },
    }
  );

  const onAddComment = async () => {
    await mutate({
      body: comment,
      postId: postId,
    });

    setComment('');
  };

  return (
    <Box
      boxShadow={'0 2px 10px 0 rgba(0, 0, 0, 0.08)'}
      borderRadius="5px"
      marginTop="10px"
    >
      <Heading as="h4" margin="5px">
        Comments
      </Heading>
      <Flex flexDirection="column" padding="20px">
        <Textarea
          maxW="1020px"
          resize="none"
          boxSizing="border-box"
          m="10px"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button variantColor="blue" m="10px" onClick={onAddComment}>
          Post Comment
        </Button>
      </Flex>

      <hr />

      <Flex flexDirection="column">
        {status === 'loading' ? (
          <Box>
            <Spinner />
          </Box>
        ) : status === 'error' ? (
          <Box>Error</Box>
        ) : (
          <List>
            {data.map((comment, index) => {
              return <ListItem key={index}>{comment.body}</ListItem>;
            })}
          </List>
        )}
      </Flex>
    </Box>
  );
};

export default Comments;
