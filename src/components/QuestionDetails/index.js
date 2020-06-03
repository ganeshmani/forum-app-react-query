import React, { useEffect, useState } from 'react';
import usePost from '../../hooks/usePost';
import { Link } from 'react-router-dom';

import { Box, Flex, Heading, Text, Spinner, Button } from '@chakra-ui/core';
import Comments from '../Comments';
const QuestionDetails = ({ history, match }) => {
  const { status, error, data, isFetching, isStale } = usePost(match.params.id);
  return (
    <Flex
      flexDirection={'column'}
      maxW={'1080px'}
      margin="auto"
      textAlign="center"
    >
      <Flex
        boxShadow={'0 2px 10px 0 rgba(0, 0, 0, 0.08)'}
        borderRadius="5px"
        marginTop="50px"
        w="100%"
        textAlign="center"
      >
        {status === 'loading' ? (
          <Box w="100%" margin="auto">
            <Spinner />
          </Box>
        ) : status === 'error' ? (
          <Box>Error</Box>
        ) : (
          <Flex flexDirection="column" w="100%">
            <Link to="/">
              <Button>Home</Button>
            </Link>
            <Heading as="h5" margin="8px">
              {data.title}
            </Heading>
            <Text>{data.body}</Text>
            <Text>Author: {data.author}</Text>
          </Flex>
        )}
      </Flex>
      <Flex flexDirection="column">
        <Comments postId={match.params.id} />
      </Flex>
    </Flex>
  );
};

export default QuestionDetails;
