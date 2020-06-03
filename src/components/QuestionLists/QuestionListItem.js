import React from 'react';
import { Link } from 'react-router-dom';
import { Box, PseudoBox, Heading, Text } from '@chakra-ui/core';
const QuestionListItem = ({ post }) => {
  return (
    <Link to={`/${post.id}`} style={{ textDecoration: 'none' }}>
      <PseudoBox
        textAlign="center"
        boxShadow={'0 2px 10px 0 rgba(0, 0, 0, 0.08)'}
        borderRadius="5px"
      >
        <Heading as="h5" margin="5px">
          {post.title}
        </Heading>
        <Text> Posted By : {post.author}</Text>
      </PseudoBox>
    </Link>
  );
};

export default QuestionListItem;
