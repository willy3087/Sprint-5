import React from 'react';
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box textAlign="center" py={20}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">
          404
        </Heading>
        <Text fontSize="xl" color="gray.600">
          Página não encontrada
        </Text>
        <Text color="gray.500">
          A página que você está procurando não existe.
        </Text>
        <Button 
          colorScheme="green" 
          onClick={() => navigate('/')}
          mt={4}
        >
          Voltar ao Início
        </Button>
      </VStack>
    </Box>
  );
};

export default NotFound;