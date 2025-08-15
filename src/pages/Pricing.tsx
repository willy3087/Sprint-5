import React from 'react';
import { Box, Heading, SimpleGrid, VStack, Text, Button, List, ListItem } from '@chakra-ui/react';
import { Card } from '../components/ui/BaseComponents';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Básico',
      price: 'R$ 99',
      period: '/mês',
      features: [
        'Monitoramento climático básico',
        'Dashboard simplificado',
        'Relatórios mensais',
        'Suporte por email',
        'Até 10 hectares'
      ],
      recommended: false
    },
    {
      name: 'Profissional',
      price: 'R$ 299',
      period: '/mês',
      features: [
        'Monitoramento climático avançado',
        'Dashboard completo',
        'Relatórios semanais',
        'Suporte prioritário',
        'Até 50 hectares',
        'Análise de mercado',
        'Alertas personalizados'
      ],
      recommended: true
    },
    {
      name: 'Enterprise',
      price: 'Personalizado',
      period: '',
      features: [
        'Todas as funcionalidades',
        'Dashboard personalizado',
        'Relatórios em tempo real',
        'Suporte dedicado 24/7',
        'Hectares ilimitados',
        'API completa',
        'Treinamento da equipe',
        'Consultoria especializada'
      ],
      recommended: false
    }
  ];

  return (
    <VStack spacing={8}>
      <Box textAlign="center">
        <Heading as="h1" size="xl" mb={4}>
          Escolha seu Plano
        </Heading>
        <Text color="gray.600">
          Planos flexíveis para atender produtores de todos os tamanhos
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="full">
        {plans.map((plan, index) => (
          <Card 
            key={index}
            aria-label={`Plano ${plan.name}`}
            style={{ 
              padding: '32px',
              border: plan.recommended ? '2px solid' : '1px solid',
              borderColor: plan.recommended ? 'green.500' : 'gray.200',
              position: 'relative'
            }}
          >
            {plan.recommended && (
              <Box 
                position="absolute" 
                top="-12px" 
                left="50%" 
                transform="translateX(-50%)"
                bg="green.500"
                color="white"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="sm"
              >
                Recomendado
              </Box>
            )}
            
            <VStack spacing={6}>
              <Box textAlign="center">
                <Heading as="h3" size="lg" mb={2}>
                  {plan.name}
                </Heading>
                <Text fontSize="3xl" fontWeight="bold">
                  {plan.price}
                  <Text as="span" fontSize="lg" color="gray.600">
                    {plan.period}
                  </Text>
                </Text>
              </Box>

              <List spacing={2} textAlign="left" w="full">
                {plan.features.map((feature, idx) => (
                  <ListItem key={idx}>
                    <Text>✓ {feature}</Text>
                  </ListItem>
                ))}
              </List>

              <Button 
                colorScheme={plan.recommended ? 'green' : 'gray'}
                variant={plan.recommended ? 'solid' : 'outline'}
                w="full"
              >
                {plan.name === 'Enterprise' ? 'Contatar Vendas' : 'Começar Agora'}
              </Button>
            </VStack>
          </Card>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default Pricing;