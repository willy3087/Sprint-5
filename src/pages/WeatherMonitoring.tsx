import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import {
  Box,
  Container,
  Heading,
  Grid,
  GridItem,
  HStack,
  VStack,
  Text,
  Select,
  Button,
  ButtonGroup,
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
  useColorModeValue,
  Divider,
} from '@chakra-ui/react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { FaThermometerHalf, FaWind, FaCloudRain, FaCloud, FaBolt, FaTint } from 'react-icons/fa';
import { BsArrowRepeat } from 'react-icons/bs';
import { Cloud } from 'react-feather';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const WeatherMonitoring: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState('temperature');
  const bgCard = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  // Map center - Brazil coffee regions
  const mapCenter = { lat: -15.7801, lng: -47.9292 };

  // Weather layers
  const weatherLayers = [
    { id: 'temperature', label: 'Temperatura', icon: FaThermometerHalf },
    { id: 'precipitation', label: 'Precipitação', icon: FaCloudRain },
    { id: 'wind', label: 'Vento', icon: FaWind },
    { id: 'pressure', label: 'Pressão', icon: FaBolt },
    { id: 'clouds', label: 'Nuvens', icon: FaCloud },
  ];

  // KPI data
  const kpis = [
    { icon: FaThermometerHalf, value: '24°C', label: 'Temperatura', change: '+2°C', type: 'increase' },
    { icon: FaTint, value: '65%', label: 'Umidade', change: '-5%', type: 'decrease' },
    { icon: FaWind, value: '12 km/h', label: 'Vento', change: '+1 km/h', type: 'increase' },
    { icon: FaCloudRain, value: '45 mm', label: 'Precipitação', change: '0%', type: 'neutral' },
    { icon: FaCloud, value: '40%', label: 'Nuvens', change: '+10%', type: 'increase' },
    { icon: FaBolt, value: '1013 hPa', label: 'Pressão', change: 'Estável', type: 'neutral' },
  ];

  // Weather forecast cards
  const forecast = [
    { day: 'Seg', icon: '☀️', temp: '26°C', condition: 'Ensolarado' },
    { day: 'Ter', icon: '⛅', temp: '25°C', condition: 'Parcialmente nublado' },
    { day: 'Qua', icon: '☁️', temp: '24°C', condition: 'Nublado' },
    { day: 'Qui', icon: '🌧️', temp: '23°C', condition: 'Chuva' },
    { day: 'Sex', icon: '⛈️', temp: '22°C', condition: 'Tempestade' },
  ];

  // Chart data
  const temperatureData = {
    labels: ['6h', '9h', '12h', '15h', '18h', '21h'],
    datasets: [
      {
        label: 'Temperatura (°C)',
        data: [18, 21, 26, 28, 24, 20],
        borderColor: '#8B4513',
        backgroundColor: 'rgba(139, 69, 19, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const precipitationData = {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    datasets: [
      {
        label: 'Precipitação (mm)',
        data: [12, 18, 8, 25, 15, 10, 20],
        backgroundColor: 'rgba(139, 69, 19, 0.7)',
        borderColor: '#8B4513',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // News/Alerts data
  const alerts = [
    {
      title: 'Alerta de Geada',
      description: 'Possibilidade de geada nas próximas 48h em regiões produtoras',
      priority: 'Alta',
      time: '2h atrás',
      type: 'danger',
    },
    {
      title: 'Chuvas Intensas',
      description: 'Previsão de chuvas acima da média para a próxima semana',
      priority: 'Média',
      time: '5h atrás',
      type: 'warning',
    },
    {
      title: 'Temperatura Ideal',
      description: 'Condições climáticas favoráveis para floração',
      priority: 'Baixa',
      time: '8h atrás',
      type: 'success',
    },
    {
      title: 'Índice UV Alto',
      description: 'Radiação solar intensa nas próximas 72h',
      priority: 'Média',
      time: '1d atrás',
      type: 'warning',
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

  return (
    <Box>
      <PageHeader 
        title="Previsão Climática" 
        subtitle="Monitoramento em tempo real das condições climáticas nas regiões produtoras"
        icon={Cloud}
      />
      <Container maxW="container.2xl" py={8}>
        <VStack spacing={8} align="stretch">

        <Grid templateColumns={{ base: '1fr', lg: '3fr 1fr' }} gap={8}>
          {/* Main Content Area */}
          <GridItem>
            {/* Weather Map Section */}
            <Card bg={bgCard} borderWidth={1} borderColor={borderColor} mb={8}>
              <CardHeader>
                <Flex align="center">
                  <Heading size="md">KPIs Climáticos - Regiões Produtoras de Café</Heading>
                  <Spacer />
                  <Select w="200px" size="sm">
                    <option value="brasil">Brasil - Todas as Regiões</option>
                    <option value="mg">Minas Gerais</option>
                    <option value="sp">São Paulo</option>
                    <option value="es">Espírito Santo</option>
                    <option value="ba">Bahia</option>
                  </Select>
                </Flex>
              </CardHeader>
              <CardBody>
                {/* Layer Controls */}
                <ButtonGroup size="sm" mb={4} isAttached variant="outline">
                  {weatherLayers.map((layer) => (
                    <Button
                      key={layer.id}
                      leftIcon={<Icon as={layer.icon} />}
                      bg={selectedLayer === layer.id ? 'coffee.500' : 'transparent'}
                      color={selectedLayer === layer.id ? 'white' : 'gray.700'}
                      _hover={{ bg: selectedLayer === layer.id ? 'coffee.600' : 'gray.100' }}
                      onClick={() => setSelectedLayer(layer.id)}
                    >
                      {layer.label}
                    </Button>
                  ))}
                </ButtonGroup>

                {/* Map */}
                <Box h="400px" borderRadius="md" overflow="hidden" borderWidth={1} borderColor={borderColor}>
                  <MapContainer
                    center={[mapCenter.lat, mapCenter.lng]}
                    zoom={5}
                    style={{ height: '100%', width: '100%' }}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    />
                    <Marker position={[-15.7801, -47.9292]}>
                      <Popup>Brasília - DF<br />Temperatura: 24°C</Popup>
                    </Marker>
                    <Marker position={[-19.9191, -43.9386]}>
                      <Popup>Belo Horizonte - MG<br />Temperatura: 22°C</Popup>
                    </Marker>
                    <Marker position={[-23.5505, -46.6333]}>
                      <Popup>São Paulo - SP<br />Temperatura: 20°C</Popup>
                    </Marker>
                  </MapContainer>
                </Box>

                {/* KPI Grid */}
                <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={4} mt={6}>
                  {kpis.map((kpi, index) => (
                    <Card key={index} bg={bgCard} borderWidth={1} borderColor={borderColor}>
                      <CardBody>
                        <Stat textAlign="center">
                          <Icon as={kpi.icon} boxSize={8} color="coffee.500" mb={2} />
                          <StatNumber fontSize="2xl">{kpi.value}</StatNumber>
                          <StatLabel color="gray.600">{kpi.label}</StatLabel>
                          <StatHelpText>
                            {kpi.type !== 'neutral' && (
                              <StatArrow type={kpi.type as 'increase' | 'decrease'} />
                            )}
                            {kpi.change}
                          </StatHelpText>
                        </Stat>
                      </CardBody>
                    </Card>
                  ))}
                </Grid>
              </CardBody>
            </Card>

            {/* Weather Forecast Cards */}
            <Card bg={bgCard} borderWidth={1} borderColor={borderColor} mb={8}>
              <CardHeader>
                <Heading size="md">Previsão de 5 Dias</Heading>
              </CardHeader>
              <CardBody>
                <HStack spacing={4} overflowX="auto">
                  {forecast.map((day, index) => (
                    <Card key={index} minW="150px" bg="gray.50" borderWidth={1} borderColor={borderColor}>
                      <CardBody textAlign="center">
                        <Text fontWeight="bold" mb={2}>{day.day}</Text>
                        <Text fontSize="3xl" mb={2}>{day.icon}</Text>
                        <Text fontSize="xl" fontWeight="bold">{day.temp}</Text>
                        <Text fontSize="sm" color="gray.600">{day.condition}</Text>
                      </CardBody>
                    </Card>
                  ))}
                </HStack>
              </CardBody>
            </Card>

            {/* Charts Section */}
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
              <Card bg={bgCard} borderWidth={1} borderColor={borderColor}>
                <CardHeader>
                  <Heading size="md">Temperatura Média</Heading>
                </CardHeader>
                <CardBody>
                  <Box h="250px">
                    <Line data={temperatureData} options={chartOptions} />
                  </Box>
                </CardBody>
              </Card>

              <Card bg={bgCard} borderWidth={1} borderColor={borderColor}>
                <CardHeader>
                  <Heading size="md">Precipitação Acumulada</Heading>
                </CardHeader>
                <CardBody>
                  <Box h="250px">
                    <Bar data={precipitationData} options={chartOptions} />
                  </Box>
                </CardBody>
              </Card>

              <Card bg={bgCard} borderWidth={1} borderColor={borderColor}>
                <CardHeader>
                  <Heading size="md">Umidade do Solo</Heading>
                </CardHeader>
                <CardBody>
                  <Box h="250px">
                    <Line
                      data={{
                        labels: ['00h', '04h', '08h', '12h', '16h', '20h'],
                        datasets: [
                          {
                            label: 'Umidade (%)',
                            data: [75, 72, 68, 65, 70, 73],
                            borderColor: '#800020',
                            backgroundColor: 'rgba(128, 0, 32, 0.1)',
                            tension: 0.4,
                            fill: true,
                          },
                        ],
                      }}
                      options={chartOptions}
                    />
                  </Box>
                </CardBody>
              </Card>

              <Card bg={bgCard} borderWidth={1} borderColor={borderColor}>
                <CardHeader>
                  <Heading size="md">Índice de Estresse Hídrico</Heading>
                </CardHeader>
                <CardBody>
                  <Box h="250px">
                    <Bar
                      data={{
                        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
                        datasets: [
                          {
                            label: 'Índice',
                            data: [30, 45, 60, 40, 35, 50, 42],
                            backgroundColor: 'rgba(255, 99, 71, 0.7)',
                            borderColor: '#FF6347',
                            borderWidth: 1,
                          },
                        ],
                      }}
                      options={chartOptions}
                    />
                  </Box>
                </CardBody>
              </Card>
            </Grid>
          </GridItem>

          {/* Sidebar */}
          <GridItem>
            <Card bg={bgCard} borderWidth={1} borderColor={borderColor} position="sticky" top={4}>
              <CardHeader>
                <Flex align="center">
                  <Heading size="md">Alertas Climáticos</Heading>
                  <Spacer />
                  <Button size="sm" variant="ghost" leftIcon={<Icon as={BsArrowRepeat} />}>
                    Atualizar
                  </Button>
                </Flex>
              </CardHeader>
              <CardBody>
                <VStack spacing={4} align="stretch">
                  {alerts.map((alert, index) => (
                    <Box key={index}>
                      <Card bg="gray.50" borderWidth={1} borderColor={borderColor}>
                        <CardBody>
                          <VStack align="stretch" spacing={2}>
                            <Text fontWeight="bold">{alert.title}</Text>
                            <Text fontSize="sm" color="gray.600">
                              {alert.description}
                            </Text>
                            <Flex justify="space-between" align="center">
                              <Badge colorScheme={getPriorityColor(alert.priority)}>
                                {alert.priority}
                              </Badge>
                              <Text fontSize="xs" color="gray.500">
                                {alert.time}
                              </Text>
                            </Flex>
                          </VStack>
                        </CardBody>
                      </Card>
                      {index < alerts.length - 1 && <Divider />}
                    </Box>
                  ))}
                </VStack>
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
      </VStack>
    </Container>
    </Box>
  );
};

export default WeatherMonitoring;