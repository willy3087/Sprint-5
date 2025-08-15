import React, { useState } from 'react';
import { 
  Box, 
  VStack, 
  Heading, 
  Input, 
  Button, 
  FormControl, 
  FormLabel, 
  Text, 
  Link,
  useToast 
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulação de login
    setTimeout(() => {
      if (email && password) {
        toast({
          title: 'Login realizado com sucesso!',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        navigate('/dashboard');
      } else {
        toast({
          title: 'Erro no login',
          description: 'Por favor, preencha todos os campos.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Box maxW="400px" mx="auto" py={10}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading as="h1" size="xl" mb={2}>
            Entrar no GlobalCoffee
          </Heading>
          <Text color="gray.600">
            Acesse sua conta para gerenciar sua produção
          </Text>
        </Box>

        <Box w="full" p={8} borderWidth={1} borderRadius="md" boxShadow="sm">
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Senha</FormLabel>
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>

              <Button
                type="submit"
                colorScheme="green"
                w="full"
                isLoading={isLoading}
                loadingText="Entrando..."
              >
                Entrar
              </Button>
            </VStack>
          </form>

          <VStack spacing={3} mt={6}>
            <Link color="green.600" fontSize="sm">
              Esqueceu sua senha?
            </Link>
            <Text fontSize="sm" color="gray.600">
              Não tem uma conta?{' '}
              <Link color="green.600">
                Cadastre-se
              </Link>
            </Text>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Login;