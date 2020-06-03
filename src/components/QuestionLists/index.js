import React from 'react';
import usePosts from '../../hooks/usePosts';
import QuestionListItem from './QuestionListItem';
import { Box, Spinner } from '@chakra-ui/core';
const QuestionLists = () => {
  const { status, data, error, isFetching } = usePosts();

  return (
    <Box p={'5px'}>
      {status === 'loading' ? (
        <Spinner />
      ) : status === 'error' ? (
        <div>Error</div>
      ) : (
        <Box>
          {data.map((post) => {
            return <QuestionListItem post={post} />;
          })}
        </Box>
      )}
    </Box>
  );
};

export default QuestionLists;
