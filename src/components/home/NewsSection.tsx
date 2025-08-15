import React from 'react';
import {
  Box,
  Container,
  VStack,
  SimpleGrid,
  Heading,
  Text,
  Badge,
  HStack,
  Flex,
  Image,
  Avatar,
  IconButton,
  Button,
  Tag,
  TagLabel,
  Card,
  CardBody,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronRight } from 'react-feather';

interface NewsItem {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  date: string;
  relevance: string;
  author: string;
  readTime: string;
}

interface NewsSectionProps {
  newsItems: NewsItem[];
}

const NewsSection: React.FC<NewsSectionProps> = ({ newsItems }) => {
  const textColor = useColorModeValue('gray.700', 'gray.200');

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Mercado':
        return 'coffee';
      case 'Clima':
        return 'blue';
      case 'Tecnologia':
        return 'purple';
      default:
        return 'gray';
    }
  };

  return (
    <Box py={16}>
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <Flex justify="space-between" align="center" w="full">
            <VStack align="start" spacing={2}>
              <Badge bg="burgundy.100" color="burgundy.800" px={3} py={1} borderRadius="full">
                ATUALIZAÇÕES
              </Badge>
              <Heading size="xl">Últimas Notícias do Setor</Heading>
            </VStack>
            <HStack spacing={2} display={{ base: 'none', md: 'flex' }}>
              <Tag size="lg" variant="subtle" colorScheme="gray" cursor="pointer">
                <TagLabel>Todas</TagLabel>
              </Tag>
              <Tag size="lg" variant="subtle" bg="coffee.100" color="coffee.800" cursor="pointer">
                <TagLabel>Mercado</TagLabel>
              </Tag>
              <Tag size="lg" variant="subtle" colorScheme="blue" cursor="pointer">
                <TagLabel>Clima</TagLabel>
              </Tag>
              <Tag size="lg" variant="subtle" colorScheme="purple" cursor="pointer">
                <TagLabel>Tecnologia</TagLabel>
              </Tag>
            </HStack>
          </Flex>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
            {newsItems.map((item) => (
              <Card
                key={item.id}
                variant="elevated"
                overflow="hidden"
                cursor="pointer"
                transition="all 0.3s"
                _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl' }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  h="200px"
                  w="full"
                  objectFit="cover"
                />
                <CardBody p={6}>
                  <VStack align="start" spacing={3}>
                    <HStack justify="space-between" w="full">
                      <Badge bg={`${getCategoryColor(item.category)}.100`} color={`${getCategoryColor(item.category)}.800`}>
                        {item.category}
                      </Badge>
                      {item.relevance === 'alta' && (
                        <Badge colorScheme="red" variant="subtle">
                          Alta relevância
                        </Badge>
                      )}
                    </HStack>
                    <Heading size="md" noOfLines={2}>
                      {item.title}
                    </Heading>
                    <Text color={textColor} fontSize="sm" noOfLines={3}>
                      {item.description}
                    </Text>
                    <HStack justify="space-between" w="full" pt={2}>
                      <HStack spacing={3}>
                        <Avatar size="xs" name={item.author} />
                        <VStack align="start" spacing={0}>
                          <Text fontSize="xs" fontWeight="semibold">
                            {item.author}
                          </Text>
                          <Text fontSize="xs" color="gray.500">
                            {item.date} · {item.readTime}
                          </Text>
                        </VStack>
                      </HStack>
                      <IconButton
                        aria-label="Ler mais"
                        icon={<ChevronRight size={16} />}
                        size="sm"
                        variant="ghost"
                        color="coffee.600"
                      />
                    </HStack>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>

          <Button
            size="lg"
            variant="outline"
            borderColor="coffee.500"
            color="coffee.600"
            _hover={{ bg: 'coffee.50' }}
            rightIcon={<ChevronRight size={20} />}
          >
            Ver Todas as Notícias
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default NewsSection;