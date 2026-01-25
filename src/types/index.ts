/**
 * types/index.ts
 * Definiciones de tipos TypeScript para el laboratorio
 */

// =============================================================================
// TIPOS DE USUARIO Y AUTENTICACIÓN
// =============================================================================

export interface LabUser {
  id: string;
  username: string;
  email: string;
  role: 'student' | 'instructor' | 'admin';
  createdAt: Date;
  lastLogin?: Date;
}

export interface AuthSession {
  userId: string;
  token: string;
  expiresAt: Date;
  isActive: boolean;
}

// =============================================================================
// TIPOS DE NIVELES Y PROGRESO
// =============================================================================

export type LevelDifficulty = 'Básico' | 'Intermedio' | 'Avanzado';

export type LevelStatus = 'locked' | 'available' | 'in_progress' | 'completed';

export interface LevelConcept {
  title: string;
  description: string;
}

export interface Level {
  id: number;
  title: string;
  description: string;
  category: string;
  difficulty: LevelDifficulty;
  status: LevelStatus;
  progress: number;
  learningObjective: string;
  learningObjectives?: string[];
  concepts?: LevelConcept[];
  bestPractices?: string[];
}

export interface UserProgress {
  userId: string;
  levelId: number;
  status: LevelStatus;
  progress: number;
  startedAt?: Date;
  completedAt?: Date;
  attempts: number;
}

// =============================================================================
// TIPOS DE RESPUESTA API
// =============================================================================

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

// =============================================================================
// TIPOS DE CONFIGURACIÓN
// =============================================================================

export interface LabConfig {
  maxAttempts: number;
  sessionTimeout: number;
  allowReset: boolean;
  requireAcceptTerms: boolean;
}

// =============================================================================
// CONSTANTES DE CATEGORÍAS
// =============================================================================

export const LEVEL_CATEGORIES = [
  'Introducción',
  'Input Handling',
  'Autenticación',
  'Autorización',
  'Avanzado',
] as const;

export type LevelCategory = (typeof LEVEL_CATEGORIES)[number];
