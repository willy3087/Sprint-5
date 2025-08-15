import React from 'react';
import {
  Box,
  Container,
  Heading,
  Grid,
  GridItem,
  VStack,
  Text,
  Card,
  CardBody,
  CardHeader,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Badge,
  Icon,
  Flex,
  Spacer,
  Progress,
  useColorModeValue,
  Divider,
  Button,
  SimpleGrid,
} from '@chakra-ui/react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { FaCoffee, FaThermometerHalf, FaBox, FaGlobeAmericas, FaDollarSign, FaChartLine } from 'react-icons/fa';
import { BsArrowRepeat, BsCloudRain, BsBank, BsGlobe2, BsTruck } from 'react-icons/bs';
import { MdTrendingUp, MdFactory } from 'react-icons/md';
import { Coffee } from 'react-feather';
import PageHeader from '../components/PageHeader';

// Register ChartJS components
ChartJS.register(
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Features: React.FC = () => {
  const bgCard = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  // KPI data baseado no protótipo
  const kpis = [
    { icon: FaCoffee, label: 'Preço Atual (60kg)', value: 'R$ 1.842', change: '+3.2%', type: 'increase' },
    { icon: FaThermometerHalf, label: 'Índice Climático', value: '78/100', change: 'Favorável', type: 'neutral' },
    { icon: FaBox, label: 'Estoque Global', value: '158M sacas', change: '-2.1%', type: 'decrease' },
    { icon: FaGlobeAmericas, label: 'Demanda Mundial', value: '175M sacas', change: '+4.5%', type: 'increase' },
    { icon: FaDollarSign, label: 'Taxa de Câmbio', value: 'R$ 5.12', change: '+0.8%', type: 'increase' },
    { icon: FaChartLine, label: 'Volatilidade', value: '24.3%', change: '+8.2%', type: 'increase' },
  ];

  // Market predictions data
  const marketPredictions = [
    {
      period: 'Próxima Semana',
      high: 65,
      low: 35,
      range: 'R$ 1.795 - R$ 1.920',
      confidence: 'Alta',
    },
    {
      period: 'Próximo Mês',
      high: 58,
      low: 42,
      range: 'R$ 1.750 - R$ 1.980',
      confidence: 'Média',
    },
    {
      period: 'Próximo Semestre',
      high: 72,
      low: 28,
      range: 'R$ 1.680 - R$ 2.150',
      confidence: 'Alta',
    },
  ];

  // Price composition data baseado no protótipo
  const priceCompositionData = {
    labels: ['Custo de Produção', 'Logística e Transporte', 'Beneficiamento', 'Margem de Mercado', 'Impostos e Taxas'],
    datasets: [
      {
        data: [45, 15, 12, 18, 10],
        backgroundColor: [
          '#8B4513', // Custo de Produção
          '#A0522D', // Logística
          '#CD853F', // Beneficiamento
          '#DEB887', // Margem
          '#F4A460', // Impostos
        ],
        borderColor: '#fff',
        borderWidth: 2,
      },
    ],
  };

  // Impact factors baseado no protótipo
  const impactFactors = [
    { icon: BsCloudRain, label: 'Clima', impact: 35, color: 'blue.500', trend: '+2.3%' },
    { icon: BsTruck, label: 'Logística', impact: 25, color: 'orange.500', trend: '+5.1%' },
    { icon: MdFactory, label: 'Beneficiamento', impact: 20, color: 'purple.500', trend: '-1.2%' },
    { icon: MdTrendingUp, label: 'Mercado', impact: 10, color: 'green.500', trend: '+3.7%' },
    { icon: BsBank, label: 'Impostos', impact: 5, color: 'red.500', trend: '0.0%' },
    { icon: BsGlobe2, label: 'Global', impact: 5, color: 'cyan.500', trend: '+1.8%' },
  ];

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'right' as const,
      },
    },
  };

  // Market news
  const marketNews = [
    {
      title: 'Geada afeta 15% da produção brasileira',
      description: 'Produtores relatam perdas significativas após frente fria',
      priority: 'Alta',
      time: '2h atrás',
      relevance: 'high',
    },
    {
      title: 'Exportações batem recorde mensal',
      description: 'Volume exportado supera expectativas do mercado',
      priority: 'Alta',
      time: '5h atrás',
      relevance: 'high',
    },
    {
      title: 'Demanda por cafés especiais cresce 8%',
      description: 'Mercado premium ganha espaço internacional',
      priority: 'Média',
      time: '8h atrás',
      relevance: 'medium',
    },
    {
      title: 'Bolsa de NY fecha em alta pelo terceiro dia',
      description: 'Contratos futuros apresentam valorização',
      priority: 'Média',
      time: '1d atrás',
      relevance: 'medium',
    },
    {
      title: 'Colheita na Colômbia dentro do esperado',
      description: 'Produção colombiana mantém ritmo normal',
      priority: 'Baixa',
      time: '2d atrás',
      relevance: 'low',
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Alta':
        return 'red';
      case 'Média':
        return 'orange';
      case 'Baixa':
        return 'green';
      default:
        return 'gray';
    }
  };

  const getRelevanceColor = (relevance: string) => {
    switch (relevance) {
      case 'high':
        return 'green.100';
      case 'medium':
        return 'yellow.100';
      case 'low':
        return 'gray.100';
      default:
        return 'gray.100';
    }
  };

  return (
    <Box>
      <PageHeader 
        title="Análise de Componentes do Preço do Café" 
        subtitle="Dashboard completo com indicadores de mercado e previsões"
        icon={Coffee}
      />
      <Container maxW="container.2xl" py={8}>
        <Grid templateColumns={{ base: '1fr', lg: '3fr 1fr' }} gap={8}>
          {/* Main Content Area */}
          <GridItem>
            {/* KPI Grid */}
            <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={4} mb={8}>
              {kpis.map((kpi, index) => (
                <Card key={index} bg={bgCard} borderWidth={1} borderColor={borderColor}>
                  <CardBody p={4}>
                    <Stat textAlign="center">
                      <Icon as={kpi.icon} boxSize={6} color="coffee.500" mb={2} />
                      <StatLabel fontSize="xs" color="gray.600">{kpi.label}</StatLabel>
                      <StatNumber fontSize="lg">{kpi.value}</StatNumber>
                      <StatHelpText fontSize="xs">
                        {kpi.type !== 'neutral' && (
                          <StatArrow type={kpi.type as 'increase' | 'decrease'} />
                        )}
                        {kpi.change}
                      </StatHelpText>
                    </Stat>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>

            {/* Market Predictions */}
            <Card bg={bgCard} borderWidth={1} borderColor={borderColor} mb={8}>
              <CardHeader>
                <Flex align="center">
                  <Heading size="md">📊 Previsões de Mercado</Heading>
                  <Spacer />
                  <Badge colorScheme="green" fontSize="xs">Atualizado</Badge>
                </Flex>
              </CardHeader>
              <CardBody>
                <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
                  {marketPredictions.map((prediction, index) => (
                    <Card key={index} bg="gray.50" borderWidth={1} borderColor={borderColor}>
                      <CardBody>
                        <Text fontWeight="bold" mb={4}>{prediction.period}</Text>
                        
                        <VStack spacing={3} align="stretch">
                          <Box>
                            <Flex justify="space-between" mb={1}>
                              <Text fontSize="sm">Alta</Text>
                              <Text fontSize="sm" fontWeight="bold">{prediction.high}%</Text>
                            </Flex>
                            <Progress value={prediction.high} colorScheme="green" size="lg" borderRadius="md" />
                          </Box>
                          
                          <Box>
                            <Flex justify="space-between" mb={1}>
                              <Text fontSize="sm">Baixa</Text>
                              <Text fontSize="sm" fontWeight="bold">{prediction.low}%</Text>
                            </Flex>
                            <Progress value={prediction.low} colorScheme="red" size="lg" borderRadius="md" />
                          </Box>
                        </VStack>
                        
                        <Divider my={3} />
                        
                        <VStack spacing={1} align="stretch">
                          <Text fontSize="xs" color="gray.600">Faixa Prevista:</Text>
                          <Text fontSize="sm" fontWeight="bold">{prediction.range}</Text>
                          <Badge colorScheme={prediction.confidence === 'Alta' ? 'green' : 'yellow'} size="sm">
                            Confiança: {prediction.confidence}
                          </Badge>
                        </VStack>
                      </CardBody>
                    </Card>
                  ))}
                </Grid>
              </CardBody>
            </Card>

            {/* Price Composition Chart */}
            <Card bg={bgCard} borderWidth={1} borderColor={borderColor} mb={8}>
              <CardHeader>
                <Heading size="md">📈 Composição do Preço do Café</Heading>
              </CardHeader>
              <CardBody>
                <Box h="400px">
                  <Doughnut data={priceCompositionData} options={chartOptions} />
                </Box>
              </CardBody>
            </Card>

            {/* Impact Factors */}
            <Card bg={bgCard} borderWidth={1} borderColor={borderColor}>
              <CardHeader>
                <Heading size="md">⚡ Fatores de Impacto</Heading>
              </CardHeader>
              <CardBody>
                <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={4}>
                  {impactFactors.map((factor, index) => (
                    <Card key={index} bg="gray.50" borderWidth={1} borderColor={borderColor}>
                      <CardBody textAlign="center" p={4}>
                        <Icon as={factor.icon} boxSize={8} color={factor.color} mb={2} />
                        <Text fontSize="sm" fontWeight="bold" mb={1}>{factor.label}</Text>
                        <Text fontSize="2xl" fontWeight="bold" color={factor.color} mb={1}>
                          {factor.impact}%
                        </Text>
                        <Text fontSize="xs" color="gray.600">
                          {factor.trend}
                        </Text>
                      </CardBody>
                    </Card>
                  ))}
                </SimpleGrid>
              </CardBody>
            </Card>
          </GridItem>

          {/* Sidebar */}
          <GridItem>
            <Card bg={bgCard} borderWidth={1} borderColor={borderColor} position="sticky" top={4}>
              <CardHeader>
                <Flex align="center">
                  <Heading size="md">📰 Notícias do Mercado</Heading>
                  <Spacer />
                  <Button size="sm" variant="ghost" leftIcon={<Icon as={BsArrowRepeat} />}>
                    Atualizar
                  </Button>
                </Flex>
              </CardHeader>
              <CardBody>
                <VStack spacing={4} align="stretch">
                  {marketNews.map((news, index) => (
                    <Box key={index}>
                      <Card bg={getRelevanceColor(news.relevance)} borderWidth={1} borderColor={borderColor}>
                        <CardBody p={3}>
                          <Text fontWeight="bold" fontSize="sm" mb={1}>
                            {news.title}
                          </Text>
                          <Text fontSize="xs" color="gray.600" mb={2}>
                            {news.description}
                          </Text>
                          <Flex justify="space-between" align="center">
                            <Badge colorScheme={getPriorityColor(news.priority)} fontSize="xs">
                              {news.priority}
                            </Badge>
                            <Text fontSize="xs" color="gray.500">
                              {news.time}
                            </Text>
                          </Flex>
                        </CardBody>
                      </Card>
                      {index < marketNews.length - 1 && <Divider />}
                    </Box>
                  ))}
                </VStack>
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;