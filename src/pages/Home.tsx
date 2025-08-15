import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Badge,
  Flex,
  Spacer,
  Icon,
  Divider,
  useColorModeValue,
  Image,
  Avatar,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import {
  DollarSign,
  Thermometer,
  Droplet,
  Wind,
  TrendingUp,
  Calendar,
  Clock,
  Eye,
  MessageCircle,
  Bookmark,
  Share2,
  Activity,
} from 'react-feather';
import HeroSection from '../components/home/HeroSection';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('todas');
  const bgCard = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  // Stats data
  const stats = [
    {
      label: 'Preço Café Arábica',
      value: 'R$ 1.420',
      subValue: '/saca',
      change: 3.2,
      trend: 'increase' as const,
      icon: DollarSign,
    },
    {
      label: 'Temperatura Média',
      value: '22°C',
      subValue: 'Sul de Minas',
      change: -1.5,
      trend: 'decrease' as const,
      icon: Thermometer,
    },
    {
      label: 'Umidade do Ar',
      value: '65%',
      subValue: 'Ideal: 60-70%',
      change: 2.1,
      trend: 'increase' as const,
      icon: Droplet,
    },
    {
      label: 'Velocidade Vento',
      value: '12 km/h',
      subValue: 'Nordeste',
      change: 0,
      trend: 'neutral' as const,
      icon: Wind,
    },
    {
      label: 'Produtividade',
      value: '42 sc/ha',
      subValue: 'Média regional',
      change: 5.3,
      trend: 'increase' as const,
      icon: TrendingUp,
    },
  ];

  // Featured news
  const featuredNews = {
    main: {
      id: 1,
      category: 'MERCADO',
      title: 'Preços do café arábica atingem maior valor dos últimos 3 meses',
      excerpt: 'Condições climáticas adversas em principais regiões produtoras e alta demanda internacional impulsionam valorização da commodity. Analistas preveem continuidade da tendência de alta.',
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800',
      author: 'João Silva',
      date: '2 horas atrás',
      views: 1250,
      comments: 23,
    },
    secondary: [
      {
        id: 2,
        category: 'CLIMA',
        title: 'Alerta de geada mobiliza produtores no Sul de Minas',
        excerpt: 'Meteorologistas preveem queda brusca de temperatura para os próximos dias.',
        image: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=400',
        date: '4 horas atrás',
        views: 890,
      },
      {
        id: 3,
        category: 'TECNOLOGIA',
        title: 'Nova técnica de irrigação aumenta produtividade em 30%',
        excerpt: 'Sistema inteligente reduz consumo de água e melhora qualidade dos grãos.',
        image: 'https://images.unsplash.com/photo-1625758476104-f2ed6c81547e?w=400',
        date: '6 horas atrás',
        views: 654,
      },
    ],
  };

  // News list
  const newsList = [
    {
      id: 4,
      category: 'EXPORTAÇÃO',
      title: 'Brasil mantém liderança nas exportações globais de café',
      excerpt: 'Volume exportado cresce 8% no trimestre, consolidando posição do país no mercado internacional.',
      date: '8 horas atrás',
      views: 432,
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=200',
    },
    {
      id: 5,
      category: 'SUSTENTABILIDADE',
      title: 'Certificação sustentável valoriza café brasileiro em 15%',
      excerpt: 'Produtores com selo de sustentabilidade conseguem preços premium no mercado europeu.',
      date: '10 horas atrás',
      views: 378,
      image: 'https://images.unsplash.com/photo-1610632380989-680fe40816c6?w=200',
    },
    {
      id: 6,
      category: 'POLÍTICA',
      title: 'Governo anuncia nova linha de crédito para cafeicultores',
      excerpt: 'Programa oferece juros reduzidos para modernização de equipamentos e infraestrutura.',
      date: '12 horas atrás',
      views: 567,
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200',
    },
    {
      id: 7,
      category: 'PESQUISA',
      title: 'Embrapa desenvolve nova variedade resistente à seca',
      excerpt: 'Cultivar promete manter produtividade mesmo em condições de estresse hídrico.',
      date: '1 dia atrás',
      views: 892,
      image: 'https://images.unsplash.com/photo-1524350876685-274059332603?w=200',
    },
  ];

  // Sidebar widgets
  const marketIndicators = [
    { label: 'ICE Futures', value: 'US$ 224.45', change: 2.3 },
    { label: 'BM&F', value: 'R$ 1.420', change: 3.2 },
    { label: 'Robusta', value: 'US$ 2.340', change: -1.1 },
    { label: 'Colombiano', value: 'US$ 245.60', change: 1.8 },
  ];

  const upcomingEvents = [
    { date: '15 Nov', title: 'Semana Internacional do Café', location: 'Belo Horizonte' },
    { date: '22 Nov', title: 'Workshop de Sustentabilidade', location: 'Online' },
    { date: '28 Nov', title: 'Feira de Tecnologia Agrícola', location: 'São Paulo' },
  ];

  const quickLinks = [
    { label: 'Cotação em tempo real', icon: TrendingUp },
    { label: 'Previsão do tempo', icon: Wind },
    { label: 'Análise de solo', icon: Droplet },
    { label: 'Calendário de plantio', icon: Calendar },
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        navigate={navigate}
      />

      {/* Quick Stats Bar */}
      <Box 
        bg={useColorModeValue('white', 'gray.800')} 
        borderY="1px" 
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        color={useColorModeValue('gray.800', 'white')} 
        py={4}
        boxShadow="sm"
      >
        <Container maxW="container.2xl">
          <HStack spacing={8} overflowX="auto" justify="space-between">
            {stats.map((stat, index) => (
              <HStack key={index} spacing={3} minW="200px">
                <Icon as={stat.icon} boxSize={6} color="coffee.500" />
                <VStack spacing={0} align="start">
                  <HStack spacing={1}>
                    <Text fontWeight="bold" fontSize="lg">
                      {stat.value}
                    </Text>
                    <Text fontSize="xs" color={useColorModeValue('gray.500', 'gray.400')}>
                      {stat.subValue}
                    </Text>
                  </HStack>
                  <HStack spacing={1}>
                    <Text fontSize="xs" color={useColorModeValue('gray.600', 'gray.400')}>
                      {stat.label}
                    </Text>
                    {stat.change !== 0 && stat.trend !== 'neutral' && (
                      <>
                        <Text fontSize="xs" color={stat.trend === 'increase' ? 'green.400' : 'red.400'}>
                          {stat.trend === 'increase' ? '↗' : '↘'} {Math.abs(stat.change)}%
                        </Text>
                      </>
                    )}
                  </HStack>
                </VStack>
              </HStack>
            ))}
          </HStack>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.2xl" py={8}>
        <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={8}>
          {/* News Section */}
          <GridItem>
            {/* Section Header */}
            <Card bg={bgCard} borderWidth={1} borderColor={borderColor} mb={6}>
              <CardBody>
                <Flex align="center" mb={4}>
                  <HStack spacing={3}>
                    <Icon as={MessageCircle} color="coffee.500" boxSize={6} />
                    <Heading size="lg">Notícias e Atualizações</Heading>
                  </HStack>
                  <Spacer />
                  <ButtonGroup size="sm" variant="outline">
                    <Button
                      onClick={() => setActiveTab('todas')}
                      bg={activeTab === 'todas' ? 'coffee.500' : 'transparent'}
                      color={activeTab === 'todas' ? 'white' : 'gray.700'}
                      borderColor="coffee.500"
                    >
                      Todas
                    </Button>
                    <Button
                      onClick={() => setActiveTab('mercado')}
                      bg={activeTab === 'mercado' ? 'coffee.500' : 'transparent'}
                      color={activeTab === 'mercado' ? 'white' : 'gray.700'}
                      borderColor="coffee.500"
                    >
                      Mercado
                    </Button>
                    <Button
                      onClick={() => setActiveTab('clima')}
                      bg={activeTab === 'clima' ? 'coffee.500' : 'transparent'}
                      color={activeTab === 'clima' ? 'white' : 'gray.700'}
                      borderColor="coffee.500"
                    >
                      Clima
                    </Button>
                    <Button
                      onClick={() => setActiveTab('tecnologia')}
                      bg={activeTab === 'tecnologia' ? 'coffee.500' : 'transparent'}
                      color={activeTab === 'tecnologia' ? 'white' : 'gray.700'}
                      borderColor="coffee.500"
                    >
                      Tecnologia
                    </Button>
                  </ButtonGroup>
                </Flex>

                {/* Featured News */}
                <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={6} mb={6}>
                  {/* Main Featured */}
                  <GridItem>
                    <Card
                      bg={bgCard}
                      borderWidth={1}
                      borderColor={borderColor}
                      overflow="hidden"
                      cursor="pointer"
                      _hover={{ transform: 'translateY(-4px)', boxShadow: 'lg' }}
                      transition="all 0.3s"
                    >
                      <Box position="relative" w="100%" h={{ base: '200px', md: '250px' }}>
                        <Image
                          src={featuredNews.main.image}
                          alt={featuredNews.main.title}
                          w="100%"
                          h="100%"
                          objectFit="cover"
                        />
                      </Box>
                      <CardBody>
                        <Badge colorScheme="red" mb={2}>
                          {featuredNews.main.category}
                        </Badge>
                        <Heading size="md" mb={2}>
                          {featuredNews.main.title}
                        </Heading>
                        <Text color="gray.600" mb={3}>
                          {featuredNews.main.excerpt}
                        </Text>
                        <Flex justify="space-between" align="center">
                          <HStack spacing={3} fontSize="sm" color="gray.500">
                            <HStack>
                              <Avatar size="xs" name={featuredNews.main.author} />
                              <Text>{featuredNews.main.author}</Text>
                            </HStack>
                            <HStack>
                              <Icon as={Clock} boxSize={3} />
                              <Text>{featuredNews.main.date}</Text>
                            </HStack>
                          </HStack>
                          <HStack spacing={2} fontSize="sm" color="gray.500">
                            <HStack>
                              <Icon as={Eye} boxSize={3} />
                              <Text>{featuredNews.main.views}</Text>
                            </HStack>
                            <HStack>
                              <Icon as={MessageCircle} boxSize={3} />
                              <Text>{featuredNews.main.comments}</Text>
                            </HStack>
                          </HStack>
                        </Flex>
                      </CardBody>
                    </Card>
                  </GridItem>

                  {/* Secondary Featured */}
                  <GridItem>
                    <VStack spacing={4}>
                      {featuredNews.secondary.map((news) => (
                        <Card
                          key={news.id}
                          bg={bgCard}
                          borderWidth={1}
                          borderColor={borderColor}
                          overflow="hidden"
                          cursor="pointer"
                          _hover={{ transform: 'translateY(-2px)', boxShadow: 'md' }}
                          transition="all 0.3s"
                        >
                          <Box w="100%" h="120px">
                            <Image
                              src={news.image}
                              alt={news.title}
                              w="100%"
                              h="100%"
                              objectFit="cover"
                            />
                          </Box>
                          <CardBody p={3}>
                            <Badge colorScheme="blue" mb={2} fontSize="xs">
                              {news.category}
                            </Badge>
                            <Heading size="sm" mb={1}>
                              {news.title}
                            </Heading>
                            <Text fontSize="xs" color="gray.600" mb={2}>
                              {news.excerpt}
                            </Text>
                            <HStack justify="space-between" fontSize="xs" color="gray.500">
                              <HStack>
                                <Icon as={Clock} boxSize={3} />
                                <Text>{news.date}</Text>
                              </HStack>
                              <HStack>
                                <Icon as={Eye} boxSize={3} />
                                <Text>{news.views}</Text>
                              </HStack>
                            </HStack>
                          </CardBody>
                        </Card>
                      ))}
                    </VStack>
                  </GridItem>
                </Grid>

                {/* News List */}
                <VStack spacing={4} align="stretch">
                  {newsList.map((news) => (
                    <Card
                      key={news.id}
                      bg={bgCard}
                      borderWidth={1}
                      borderColor={borderColor}
                      cursor="pointer"
                      _hover={{ boxShadow: 'md' }}
                      transition="all 0.3s"
                    >
                      <CardBody>
                        <Flex gap={4}>
                          <Box flexShrink={0} w="100px" h="100px">
                            <Image
                              src={news.image}
                              alt={news.title}
                              w="100%"
                              h="100%"
                              objectFit="cover"
                              borderRadius="md"
                            />
                          </Box>
                          <Box flex={1}>
                            <Flex justify="space-between" align="start" mb={2}>
                              <Badge colorScheme="green" fontSize="xs">
                                {news.category}
                              </Badge>
                              <HStack spacing={2}>
                                <Icon as={Bookmark} boxSize={4} cursor="pointer" />
                                <Icon as={Share2} boxSize={4} cursor="pointer" />
                              </HStack>
                            </Flex>
                            <Heading size="sm" mb={1}>
                              {news.title}
                            </Heading>
                            <Text fontSize="sm" color="gray.600" mb={2}>
                              {news.excerpt}
                            </Text>
                            <HStack fontSize="xs" color="gray.500" spacing={4}>
                              <HStack>
                                <Icon as={Clock} boxSize={3} />
                                <Text>{news.date}</Text>
                              </HStack>
                              <HStack>
                                <Icon as={Eye} boxSize={3} />
                                <Text>{news.views} visualizações</Text>
                              </HStack>
                            </HStack>
                          </Box>
                        </Flex>
                      </CardBody>
                    </Card>
                  ))}
                </VStack>

                {/* Load More */}
                <Flex justify="center" mt={6}>
                  <Button
                    size="lg"
                    variant="outline"
                    borderColor="coffee.500"
                    color="coffee.500"
                    _hover={{ bg: 'coffee.500', color: 'white' }}
                  >
                    Carregar mais notícias
                  </Button>
                </Flex>
              </CardBody>
            </Card>
          </GridItem>

          {/* Sidebar - Fixed */}
          <GridItem>
            <VStack spacing={6} position="sticky" top="20px">
              {/* Market Indicators */}
              <Card bg={bgCard} borderWidth={1} borderColor={borderColor} w="100%">
                <CardHeader pb={2}>
                  <HStack spacing={2}>
                    <Icon as={TrendingUp} color="coffee.500" boxSize={5} />
                    <Heading size="md">Indicadores de Mercado</Heading>
                  </HStack>
                </CardHeader>
                <CardBody pt={2}>
                  <VStack spacing={3} align="stretch">
                    {marketIndicators.map((indicator, index) => (
                      <Flex key={index} justify="space-between" align="center">
                        <Text fontSize="sm">{indicator.label}</Text>
                        <HStack>
                          <Text fontWeight="bold" fontSize="sm">
                            {indicator.value}
                          </Text>
                          <Badge
                            colorScheme={indicator.change > 0 ? 'green' : 'red'}
                            fontSize="xs"
                          >
                            {indicator.change > 0 ? '+' : ''}{indicator.change}%
                          </Badge>
                        </HStack>
                      </Flex>
                    ))}
                  </VStack>
                  <Button
                    mt={4}
                    size="sm"
                    w="100%"
                    colorScheme="coffee"
                    onClick={() => navigate('/dashboard')}
                  >
                    Ver Dashboard Completo
                  </Button>
                </CardBody>
              </Card>

              {/* Quick Links */}
              <Card bg={bgCard} borderWidth={1} borderColor={borderColor} w="100%">
                <CardHeader pb={2}>
                  <HStack spacing={2}>
                    <Icon as={Activity} color="coffee.500" boxSize={5} />
                    <Heading size="md">Acesso Rápido</Heading>
                  </HStack>
                </CardHeader>
                <CardBody pt={2}>
                  <VStack spacing={2} align="stretch">
                    {quickLinks.map((link, index) => (
                      <Button
                        key={index}
                        size="sm"
                        variant="ghost"
                        justifyContent="start"
                        leftIcon={<Icon as={link.icon} />}
                      >
                        {link.label}
                      </Button>
                    ))}
                  </VStack>
                </CardBody>
              </Card>

              {/* Upcoming Events */}
              <Card bg={bgCard} borderWidth={1} borderColor={borderColor} w="100%">
                <CardHeader pb={2}>
                  <HStack spacing={2}>
                    <Icon as={Calendar} color="coffee.500" boxSize={5} />
                    <Heading size="md">Próximos Eventos</Heading>
                  </HStack>
                </CardHeader>
                <CardBody pt={2}>
                  <VStack spacing={3} align="stretch">
                    {upcomingEvents.map((event, index) => (
                      <Box key={index}>
                        <HStack justify="space-between" mb={1}>
                          <Badge colorScheme="purple" fontSize="xs">
                            {event.date}
                          </Badge>
                          <Text fontSize="xs" color="gray.500">
                            {event.location}
                          </Text>
                        </HStack>
                        <Text fontSize="sm" fontWeight="medium">
                          {event.title}
                        </Text>
                        {index < upcomingEvents.length - 1 && <Divider mt={3} />}
                      </Box>
                    ))}
                  </VStack>
                  <Button mt={4} size="sm" w="100%" variant="outline">
                    Ver todos os eventos
                  </Button>
                </CardBody>
              </Card>

              {/* Newsletter */}
              <Card bg="coffee.50" borderWidth={2} borderColor="coffee.200" w="100%">
                <CardBody>
                  <VStack spacing={3}>
                    <HStack spacing={2}>
                      <Icon as={Bookmark} color="coffee.600" boxSize={5} />
                      <Text fontSize="lg" fontWeight="bold" color="coffee.700">
                        Newsletter Diária
                      </Text>
                    </HStack>
                    <Text fontSize="sm" textAlign="center" color="coffee.600">
                      Receba as principais notícias do mercado cafeeiro
                    </Text>
                    <Button size="sm" colorScheme="coffee" w="100%">
                      Inscrever-se
                    </Button>
                  </VStack>
                </CardBody>
              </Card>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;