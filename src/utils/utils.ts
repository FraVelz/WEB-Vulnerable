/**
 * lib/utils.ts
 * Funciones de utilidad para el laboratorio
 */

// =============================================================================
// UTILIDADES DE FORMATO
// =============================================================================

/**
 * Formatea un porcentaje para mostrar
 */
export function formatPercentage(value: number, decimals: number = 0): string {
  return `${value.toFixed(decimals)}%`;
}

/**
 * Formatea una fecha en formato legible
 */
export function formatDate(date: Date | string, locale: string = 'es-ES'): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Formatea tiempo relativo (hace X minutos, etc.)
 */
export function formatRelativeTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffMinutes = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffMinutes < 1) return 'Ahora mismo';
  if (diffMinutes < 60) return `Hace ${diffMinutes} minuto${diffMinutes > 1 ? 's' : ''}`;
  if (diffHours < 24) return `Hace ${diffHours} hora${diffHours > 1 ? 's' : ''}`;
  if (diffDays < 7) return `Hace ${diffDays} día${diffDays > 1 ? 's' : ''}`;

  return formatDate(d);
}

// =============================================================================
// UTILIDADES DE VALIDACIÓN
// =============================================================================

/**
 * Valida un email básico
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Valida que una contraseña tenga la longitud mínima
 */
export function isValidPassword(password: string, minLength: number = 8): boolean {
  return password.length >= minLength;
}

/**
 * Sanitiza un string para prevenir contenido peligroso (ejemplo básico)
 * NOTA: En producción usar librerías especializadas como DOMPurify
 */
export function sanitizeString(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

// =============================================================================
// UTILIDADES DE PROGRESO
// =============================================================================

/**
 * Calcula el porcentaje de progreso general
 */
export function calculateTotalProgress(
  completedLevels: number,
  totalLevels: number
): number {
  if (totalLevels === 0) return 0;
  return Math.round((completedLevels / totalLevels) * 100);
}

/**
 * Determina si un nivel debe estar disponible basado en el progreso
 */
export function isLevelAvailable(
  levelId: number,
  completedLevels: number[]
): boolean {
  if (levelId === 1) return true;
  return completedLevels.includes(levelId - 1);
}

// =============================================================================
// UTILIDADES DE CLASE CSS
// =============================================================================

type ClassValue = string | boolean | undefined | null;

/**
 * Une clases CSS de manera condicional
 * Similar a la librería `clsx`
 */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(' ');
}

// =============================================================================
// CONSTANTES DEL LABORATORIO
// =============================================================================

export const LAB_CONFIG = {
  name: 'Vulnerable Web',
  version: '1.0.0',
  totalLevels: 5,
  sessionTimeoutMinutes: 30,
  maxLoginAttempts: 5,
} as const;
