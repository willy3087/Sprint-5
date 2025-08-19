import React from 'react';
import { Box, Flex, Link, Spacer, Button } from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { ThemeSelector, useThemeContext } from '../contexts/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const { currentTheme } = useThemeContext();

  return (
    <Box minH="100vh" bg={currentTheme.colors.background.primary}>
      <Flex as="header" bg={currentTheme.colors.primary} color="white" px={4} h="56px" align="center">
        <Link as={RouterLink} to="/" fontSize="lg" fontWeight="bold" _hover={{ textDecoration: 'none' }}>
          GlobalCoffee
        </Link>
        <Spacer />
        <Flex gap={6} align="center">
          <Link as={RouterLink} to="/dashboard" fontSize="sm" _hover={{ textDecoration: 'underline' }}>
            Dashboard
          </Link>
          <Link as={RouterLink} to="/weather" fontSize="sm" _hover={{ textDecoration: 'underline' }}>
            Clima
          </Link>
          <Link as={RouterLink} to="/analysis" fontSize="sm" _hover={{ textDecoration: 'underline' }}>
            Análise
          </Link>
          <Link as={RouterLink} to="/mercado" fontSize="sm" _hover={{ textDecoration: 'underline' }}>
            Mercado
          </Link>
          <Link as={RouterLink} to="/features" fontSize="sm" _hover={{ textDecoration: 'underline' }}>
            Recursos
          </Link>
          <Link as={RouterLink} to="/pricing" fontSize="sm" _hover={{ textDecoration: 'underline' }}>
            Preços
          </Link>
          <ThemeSelector />
          <Button size="sm" h="32px" colorScheme="whiteAlpha" onClick={() => navigate('/login')}>
            Login
          </Button>
        </Flex>
      </Flex>
      
      <Box as="main" bg={currentTheme.colors.background.secondary}>
        {children}
      </Box>
      
      <Box as="footer" bg={currentTheme.colors.secondary} color="white" p={4} textAlign="center" mt="auto">
        <p>© 2024 GlobalCoffee. Todos os direitos reservados.</p>
      </Box>
    </Box>
  );
};

export default Layout;