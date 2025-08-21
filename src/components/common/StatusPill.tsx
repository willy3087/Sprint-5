import React from 'react';
import { Badge, BadgeProps } from '@chakra-ui/react';
// import { useThemeContext } from '../../contexts/ThemeContext'; // Unused for now

// Pills são para indicadores de status/prioridade/relevância
// Características: formato arredondado, fundo suave, borda sutil

export type PillVariant = 'high' | 'medium' | 'low' | 'neutral' | 'success' | 'warning' | 'error' | 'info' | 'positive' | 'negative';
export type PillSize = 'sm' | 'md';
export type PillStyle = 'default' | 'solid' | 'subtle';

interface StatusPillProps extends Omit<BadgeProps, 'variant' | 'size'> {
  variant: PillVariant;
  size?: PillSize;
  pillStyle?: PillStyle;
  children: React.ReactNode;
}

const StatusPill: React.FC<StatusPillProps> = ({
  variant,
  size = 'sm',
  pillStyle = 'default',
  children,
  ...props
}) => {
  // const { currentTheme } = useThemeContext(); // Unused for now

  // Cores fixas para indicadores semânticos
  // Não mudam com o tema, apenas ajustam a intensidade
  const getVariantStyles = () => {
    const baseStyles = {
      borderRadius: 'full',
      borderWidth: pillStyle === 'subtle' ? '0' : '1px',
      fontWeight: '500',
      textTransform: 'none' as const,
      letterSpacing: 'normal',
    };

    const sizeStyles = size === 'md' 
      ? { px: 3, py: 1, fontSize: 'sm' }
      : { px: 2.5, py: 0.5, fontSize: 'xs' };

    // Define cores base para cada variante
    const colors = {
      high: { base: '#48BB78', dark: '#2F855A' }, // Verde
      medium: { base: '#ED8936', dark: '#C05621' }, // Laranja
      low: { base: '#F56565', dark: '#C53030' }, // Vermelho
      neutral: { base: '#718096', dark: '#4A5568' }, // Cinza
      success: { base: '#48BB78', dark: '#2F855A' }, // Verde
      warning: { base: '#ED8936', dark: '#C05621' }, // Laranja
      error: { base: '#F56565', dark: '#C53030' }, // Vermelho
      info: { base: '#4299E1', dark: '#2B6CB6' }, // Azul
      positive: { base: '#48BB78', dark: '#2F855A' }, // Verde (para valores positivos)
      negative: { base: '#F56565', dark: '#C53030' }, // Vermelho (para valores negativos)
    };

    const variantColor = colors[variant] || colors.neutral;
    
    // Ajusta estilo baseado em pillStyle
    if (pillStyle === 'solid') {
      return {
        ...baseStyles,
        ...sizeStyles,
        bg: variantColor.base,
        color: 'white',
        borderColor: variantColor.base,
      };
    } else if (pillStyle === 'subtle') {
      return {
        ...baseStyles,
        ...sizeStyles,
        bg: `${variantColor.base}15`, // 15% opacidade em hex
        color: variantColor.dark,
        borderWidth: '0',
      };
    } else {
      // default style
      return {
        ...baseStyles,
        ...sizeStyles,
        bg: `${variantColor.base}14`, // 8% opacidade em hex
        color: variantColor.dark,
        borderColor: `${variantColor.base}3D`, // 24% opacidade em hex
      };
    }
  };

  return (
    <Badge
      {...getVariantStyles()}
      display="inline-block"
      w="fit-content"
      {...props}
    >
      {children}
    </Badge>
  );
};

// Helper function para mapear valores de prioridade para variants
export const getPillVariant = (priority: string): PillVariant => {
  const normalizedPriority = priority.toLowerCase();
  
  if (normalizedPriority === 'alta' || normalizedPriority === 'high') return 'high';
  if (normalizedPriority === 'média' || normalizedPriority === 'media' || normalizedPriority === 'medium') return 'medium';
  if (normalizedPriority === 'baixa' || normalizedPriority === 'low') return 'low';
  
  return 'neutral';
};

// Helper function para mapear relevância (percentual) para variants
export const getPillVariantByRelevance = (relevance: number): PillVariant => {
  if (relevance >= 70) return 'high';
  if (relevance >= 40) return 'medium';
  return 'low';
};

// Helper function para mapear valores percentuais (ex: volatilidade)
export const getPillVariantByPercentage = (value: number, inverse: boolean = false): PillVariant => {
  if (inverse) {
    // Para métricas onde menor é melhor
    if (value <= 30) return 'success';
    if (value <= 60) return 'warning';
    return 'error';
  } else {
    // Para métricas onde maior é melhor
    if (value >= 70) return 'success';
    if (value >= 40) return 'warning';
    return 'error';
  }
};

// Helper function para status de análise/qualidade
export const getPillVariantByScore = (score: number): PillVariant => {
  if (score >= 80) return 'success';
  if (score >= 60) return 'warning';
  if (score >= 40) return 'error';
  return 'neutral';
};

// Helper function para variações de valor (positivo/negativo)
export const getPillVariantByChange = (change: number): PillVariant => {
  if (change > 0) return 'positive';
  if (change < 0) return 'negative';
  return 'neutral';
};

export default StatusPill;