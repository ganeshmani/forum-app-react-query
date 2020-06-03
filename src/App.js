import React, { useState } from 'react';
import QuestionLists from './components/QuestionLists';
import { useMutation, queryCache } from 'react-query';
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/core';
import Axios from 'axios';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [state, setState] = useState({
    title: '',
    body: '',
    author: 'Ganesh',
  });

  const [mutate] = useMutation(
    (values) => {
      Axios.post('http://localhost:3000/posts', values);
    },
    {
      onSuccess: () => {
        queryCache.refetchQueries('posts');
      },
    }
  );

  const onAddQuestion = async () => {
    await mutate(state);

    onClose();
    setState({ title: '', body: '', author: 'Ganesh' });
  };

  return (
    <Flex
      flexDirection="column"
      maxW="1080px"
      margin="auto"
      mt="50px"
      bg="background"
    >
      <Box w="50%" margin="auto">
        <Button width="100%" variantColor={'green'} onClick={onOpen}>
          Add Question
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel htmlFor="title">Title</FormLabel>
                <Input
                  type="text"
                  id="title"
                  onChange={(e) =>
                    setState({ ...state, title: e.target.value })
                  }
                  boxSizing="border-box"
                  aria-describedby="title-helper-text"
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="body">Body</FormLabel>
                <Textarea
                  placeholder="Here is a Question Detail"
                  onChange={(e) => setState({ ...state, body: e.target.value })}
                  boxSizing="border-box"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button variantColor="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost" onClick={onAddQuestion}>
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
      <QuestionLists />
    </Flex>
  );
}

export default App;
