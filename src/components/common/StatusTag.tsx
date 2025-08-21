import React from 'react';
import { Badge, BadgeProps } from '@chakra-ui/react';
import { useThemeContext } from '../../contexts/ThemeContext';

// Tags são para categorias/tipos/labels
// Características: formato levemente arredondado, fundo mais sólido que pills, sem borda

export type TagCategory = 'market' | 'climate' | 'technology' | 'export' | 'sustainability' | 'politics' | 'research' | 'default';
export type TagSize = 'sm' | 'md';

interface StatusTagProps extends Omit<BadgeProps, 'variant' | 'size'> {
  category: TagCategory;
  size?: TagSize;
  children: React.ReactNode;
}

const StatusTag: React.FC<StatusTagProps> = ({
  category,
  size = 'sm',
  children,
  ...props
}) => {
  const { currentTheme } = useThemeContext();

  // Tags usam cores temáticas mas com variações sutis
  // A cor base muda com o tema, mas o tom se ajusta ao contexto
  const getTagStyles = () => {
    const baseStyles = {
      borderRadius: 'md', // Menos arredondado que pills
      fontWeight: '600',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.05em',
      borderWidth: '0', // Sem borda para diferenciar de pills
    };

    const sizeStyles = size === 'md' 
      ? { px: 3, py: 1, fontSize: 'xs' }
      : { px: 2, py: 0.5, fontSize: '2xs' };

    // Ajusta a intensidade baseado na luminosidade do tema
    const isDarkTheme = getLuminance(currentTheme.colors.primary) < 0.5;
    const opacity = isDarkTheme ? 0.15 : 0.12;

    switch (category) {
      case 'market':
        return {
          ...baseStyles,
          ...sizeStyles,
          bg: `${currentTheme.colors.primary}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`,
          color: currentTheme.colors.primary,
        };
      case 'climate':
        return {
          ...baseStyles,
          ...sizeStyles,
          bg: 'rgba(66, 153, 225, 0.12)', // Azul fixo para clima
          color: '#2B6CB6',
        };
      case 'technology':
        return {
          ...baseStyles,
          ...sizeStyles,
          bg: 'rgba(128, 90, 213, 0.12)', // Roxo fixo para tecnologia
          color: '#6B46C1',
        };
      case 'export':
        return {
          ...baseStyles,
          ...sizeStyles,
          bg: `${currentTheme.colors.secondary}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`,
          color: currentTheme.colors.secondary,
        };
      case 'sustainability':
        return {
          ...baseStyles,
          ...sizeStyles,
          bg: 'rgba(72, 187, 120, 0.12)', // Verde fixo para sustentabilidade
          color: '#2F855A',
        };
      case 'politics':
        return {
          ...baseStyles,
          ...sizeStyles,
          bg: 'rgba(237, 137, 54, 0.12)', // Laranja fixo para política
          color: '#C05621',
        };
      case 'research':
        return {
          ...baseStyles,
          ...sizeStyles,
          bg: `${currentTheme.colors.accent}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`,
          color: getDarkerShade(currentTheme.colors.accent),
        };
      default:
        return {
          ...baseStyles,
          ...sizeStyles,
          bg: currentTheme.colors.background.tertiary,
          color: currentTheme.colors.text.secondary,
        };
    }
  };

  return (
    <Badge
      {...getTagStyles()}
      display="inline-block"
      w="fit-content"
      {...props}
    >
      {children}
    </Badge>
  );
};

// Helper functions
function getLuminance(hex: string): number {
  const rgb = hexToRgb(hex);
  return (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
}

function getDarkerShade(hex: string): string {
  const rgb = hexToRgb(hex);
  const factor = 0.7;
  return `rgb(${Math.round(rgb.r * factor)}, ${Math.round(rgb.g * factor)}, ${Math.round(rgb.b * factor)})`;
}

// Helper function para mapear categorias em português
export const getTagCategory = (category: string): TagCategory => {
  const normalized = category.toLowerCase();
  
  if (normalized === 'mercado' || normalized === 'market') return 'market';
  if (normalized === 'clima' || normalized === 'climate' || normalized === 'weather') return 'climate';
  if (normalized === 'tecnologia' || normalized === 'technology' || normalized === 'tech') return 'technology';
  if (normalized === 'exportação' || normalized === 'export') return 'export';
  if (normalized === 'sustentabilidade' || normalized === 'sustainability') return 'sustainability';
  if (normalized === 'política' || normalized === 'politics' || normalized === 'policy') return 'politics';
  if (normalized === 'pesquisa' || normalized === 'research') return 'research';
  
  return 'default';
};

export default StatusTag;