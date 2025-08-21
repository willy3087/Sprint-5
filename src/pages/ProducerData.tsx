import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button,
  Radio,
  RadioGroup,
  Stack,
  Grid,
  GridItem,
  Card,
  CardBody,
  CardHeader,
  Icon,
  List,
  ListItem,
  ListIcon,
  Flex,
  Spacer,
  Badge,
  useToast,
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepNumber,
  StepTitle,
  StepDescription,
  StepSeparator,
  useSteps,
  StepIcon,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { useThemeContext } from '../contexts/ThemeContext';
import { 
  FaCheckCircle, 
  FaCircle,
  FaLightbulb,
  FaChartBar,
  FaSearch,
  FaPhone,
  FaFileUpload
} from 'react-icons/fa';
import { MdCheckCircle } from 'react-icons/md';
import { Database } from 'react-feather';

const ProducerData: React.FC = () => {
  const { currentTheme } = useThemeContext();
  const toast = useToast();
  const [coffeeType, setCoffeeType] = useState('arabica');
  const [salesChannel, setSalesChannel] = useState('cooperativa');

  const steps = [
    { title: 'Produção', description: 'Dados da safra' },
    { title: 'Qualidade', description: 'Classificação' },
    { title: 'Comercialização', description: 'Vendas' },
    { title: 'Revisão', description: 'Confirmar' },
  ];

  const { activeStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  const statusItems = [
    { label: 'Dados Básicos', complete: true },
    { label: 'Produção', complete: false },
    { label: 'Qualidade', complete: false },
    { label: 'Comercialização', complete: false },
  ];

  const helpItems = [
    { icon: FaLightbulb, text: 'Como classificar meu café?' },
    { icon: FaChartBar, text: 'Entenda os tipos de bebida' },
    { icon: FaSearch, text: 'O que são peneiras?' },
    { icon: FaPhone, text: 'Falar com suporte' },
  ];

  const benefits = [
    'Análises personalizadas',
    'Alertas de mercado',
    'Comparativos regionais',
    'Relatórios exclusivos',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Dados salvos com sucesso!',
      description: 'Suas informações foram atualizadas',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  const handleSaveDraft = () => {
    toast({
      title: 'Rascunho salvo',
      description: 'Você pode continuar mais tarde',
      status: 'info',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box bg={currentTheme.colors.background.secondary} minH="100vh">
      <PageHeader
        title="Atualização de Dados da Produção"
        subtitle="Mantenha suas informações atualizadas para melhores análises e recomendações"
        icon={Database}
      />

      <Container maxW="container.xl" py={8}>
        {/* Progress Steps */}
        <Box bg="white" p={6} borderRadius="md" mb={8}>
          <Stepper index={activeStep}>
            {steps.map((step, index) => (
              <Step key={index}>
                <StepIndicator>
                  <StepStatus
                    complete={<StepIcon />}
                    incomplete={<StepNumber />}
                    active={<StepNumber />}
                  />
                </StepIndicator>
                <Box flexShrink="0">
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                </Box>
                <StepSeparator />
              </Step>
            ))}
          </Stepper>
        </Box>

        <Grid templateColumns={{ base: '1fr', lg: '3fr 1fr' }} gap={8}>
          {/* Main Form */}
          <GridItem>
            <Card bg="white" borderWidth={1} borderColor={currentTheme.colors.border.primary}>
              <CardHeader>
                <Heading size="md" color={currentTheme.colors.text.primary}>
                  Dados da Produção - Safra 2024/2025
                </Heading>
              </CardHeader>
              <CardBody>
                <Alert status="info" mb={6} borderRadius="md">
                  <AlertIcon />
                  <Text fontSize="sm">
                    Estes dados são usados para calcular suas análises personalizadas e não são compartilhados sem sua autorização.
                  </Text>
                </Alert>

                <form onSubmit={handleSubmit}>
                  <VStack spacing={6} align="stretch">
                    {/* Basic Production Info */}
                    <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={4}>
                      <FormControl isRequired>
                        <FormLabel>Volume Produzido</FormLabel>
                        <Input type="number" placeholder="Número de sacas" />
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel>Área Plantada</FormLabel>
                        <Input type="number" placeholder="Hectares" />
                      </FormControl>
                    </Grid>

                    {/* Coffee Type */}
                    <FormControl isRequired>
                      <FormLabel>Tipo de Café</FormLabel>
                      <RadioGroup value={coffeeType} onChange={setCoffeeType}>
                        <Stack direction="row" spacing={4}>
                          <Radio value="arabica">Arábica</Radio>
                          <Radio value="robusta">Robusta (Conilon)</Radio>
                          <Radio value="ambos">Ambos</Radio>
                        </Stack>
                      </RadioGroup>
                    </FormControl>

                    {/* Quality Classification */}
                    <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={4}>
                      <FormControl>
                        <FormLabel>Classificação Predominante</FormLabel>
                        <Select placeholder="Selecione o tipo">
                          <option>Tipo 2</option>
                          <option>Tipo 3</option>
                          <option>Tipo 4</option>
                          <option>Tipo 5</option>
                          <option>Tipo 6</option>
                          <option>Tipo 7</option>
                          <option>Tipo 8</option>
                        </Select>
                      </FormControl>
                      <FormControl>
                        <FormLabel>Bebida Predominante</FormLabel>
                        <Select placeholder="Selecione a bebida">
                          <option>Estritamente Mole</option>
                          <option>Mole</option>
                          <option>Apenas Mole</option>
                          <option>Duro</option>
                          <option>Riado</option>
                          <option>Rio</option>
                        </Select>
                      </FormControl>
                    </Grid>

                    {/* Peneira */}
                    <FormControl>
                      <FormLabel>Peneiras Predominantes</FormLabel>
                      <Input placeholder="Ex: 16/17/18" />
                    </FormControl>

                    {/* Sales Channel */}
                    <FormControl>
                      <FormLabel>Canal de Venda Principal</FormLabel>
                      <RadioGroup value={salesChannel} onChange={setSalesChannel}>
                        <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                          <Radio value="cooperativa">Cooperativa</Radio>
                          <Radio value="corretor">Corretor</Radio>
                          <Radio value="venda-direta">Venda Direta</Radio>
                          <Radio value="misto">Misto</Radio>
                        </Stack>
                      </RadioGroup>
                    </FormControl>

                    {/* File Upload */}
                    <FormControl>
                      <FormLabel>Laudo de Classificação (Opcional)</FormLabel>
                      <Card
                        bg={currentTheme.colors.background.tertiary}
                        borderWidth={2}
                        borderStyle="dashed"
                        borderColor={currentTheme.colors.border.primary}
                        p={8}
                        textAlign="center"
                        cursor="pointer"
                        _hover={{ bg: currentTheme.colors.background.secondary }}
                      >
                        <Icon as={FaFileUpload} boxSize={10} color={currentTheme.colors.text.secondary} mb={2} />
                        <Text fontWeight="medium" color={currentTheme.colors.text.primary}>
                          Arraste o arquivo ou clique para enviar
                        </Text>
                        <Text fontSize="sm" color={currentTheme.colors.text.secondary}>
                          PDF, JPG ou PNG até 5MB
                        </Text>
                      </Card>
                    </FormControl>

                    {/* Notes */}
                    <FormControl>
                      <FormLabel>Observações Adicionais</FormLabel>
                      <Textarea
                        placeholder="Informações relevantes sobre sua produção..."
                        rows={4}
                      />
                    </FormControl>

                    {/* Buttons */}
                    <Flex pt={6} borderTopWidth={1} borderTopColor={currentTheme.colors.border.primary}>
                      <Button
                        variant="ghost"
                        color={currentTheme.colors.text.secondary}
                        onClick={handleSaveDraft}
                      >
                        Salvar Rascunho
                      </Button>
                      <Spacer />
                      <HStack spacing={4}>
                        <Button
                          variant="outline"
                          borderColor={currentTheme.colors.primary}
                          color={currentTheme.colors.primary}
                        >
                          Voltar
                        </Button>
                        <Button
                          type="submit"
                          bg={currentTheme.colors.primary}
                          color="white"
                          _hover={{ bg: currentTheme.colors.secondary }}
                        >
                          Próximo: Qualidade
                        </Button>
                      </HStack>
                    </Flex>
                  </VStack>
                </form>
              </CardBody>
            </Card>
          </GridItem>

          {/* Sidebar */}
          <GridItem>
            <VStack spacing={6} align="stretch">
              {/* Progress Status */}
              <Card bg="white" borderWidth={1} borderColor={currentTheme.colors.border.primary}>
                <CardHeader>
                  <Heading size="md" color={currentTheme.colors.text.primary}>
                    Status do Cadastro
                  </Heading>
                </CardHeader>
                <CardBody>
                  <List spacing={3}>
                    {statusItems.map((item, index) => (
                      <ListItem key={index}>
                        <Flex align="center">
                          <ListIcon
                            as={item.complete ? MdCheckCircle : FaCircle}
                            color={item.complete ? currentTheme.colors.status.success : currentTheme.colors.text.tertiary}
                          />
                          <Text color={currentTheme.colors.text.primary}>{item.label}</Text>
                          <Spacer />
                          {item.complete && (
                            <Badge bg={currentTheme.colors.status.success} color="white" fontSize="xs">
                              Completo
                            </Badge>
                          )}
                        </Flex>
                      </ListItem>
                    ))}
                  </List>
                </CardBody>
              </Card>

              {/* Help Section */}
              <Card bg="white" borderWidth={1} borderColor={currentTheme.colors.border.primary}>
                <CardHeader>
                  <Heading size="md" color={currentTheme.colors.text.primary}>
                    Precisa de Ajuda?
                  </Heading>
                </CardHeader>
                <CardBody>
                  <VStack spacing={3} align="stretch">
                    {helpItems.map((item, index) => (
                      <Card
                        key={index}
                        bg={currentTheme.colors.background.tertiary}
                        borderWidth={1}
                        borderColor={currentTheme.colors.border.primary}
                        p={3}
                        cursor="pointer"
                        _hover={{ bg: currentTheme.colors.background.secondary }}
                      >
                        <HStack>
                          <Icon as={item.icon} color={currentTheme.colors.primary} />
                          <Text fontSize="sm" color={currentTheme.colors.text.primary}>
                            {item.text}
                          </Text>
                        </HStack>
                      </Card>
                    ))}
                  </VStack>
                </CardBody>
              </Card>

              {/* Benefits */}
              <Card bg="white" borderWidth={1} borderColor={currentTheme.colors.border.primary}>
                <CardHeader>
                  <Heading size="md" color={currentTheme.colors.text.primary}>
                    Por que atualizar?
                  </Heading>
                </CardHeader>
                <CardBody>
                  <List spacing={3}>
                    {benefits.map((benefit, index) => (
                      <ListItem key={index}>
                        <HStack>
                          <Icon as={FaCheckCircle} color={currentTheme.colors.status.success} />
                          <Text fontSize="sm" color={currentTheme.colors.text.primary}>
                            {benefit}
                          </Text>
                        </HStack>
                      </ListItem>
                    ))}
                  </List>
                </CardBody>
              </Card>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProducerData;