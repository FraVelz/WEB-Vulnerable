/**
 * constants.ts
 * Constantes compartidas del proyecto
 */

// Colores por dificultad
export const DIFFICULTY_COLORS: Record<string, string> = {
  'Básico': 'text-green-400 bg-green-500/10 border-green-500/30',
  'Intermedio': 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30',
  'Avanzado': 'text-red-400 bg-red-500/10 border-red-500/30',
};

// Configuración de roles
export const ROLE_COLORS: Record<string, string> = {
  admin: 'bg-red-500/20 text-red-400 border-red-500/30',
  instructor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  student: 'bg-green-500/20 text-green-400 border-green-500/30',
};

export const ROLE_LABELS: Record<string, string> = {
  admin: 'Administrador',
  instructor: 'Instructor',
  student: 'Estudiante',
};

// Configuración de estados
export const STATUS_COLORS: Record<string, string> = {
  active: 'bg-green-500/20 text-green-400 border-green-500/30',
  suspended: 'bg-red-500/20 text-red-400 border-red-500/30',
  inactive: 'bg-slate-500/20 text-slate-400 border-slate-500/30',
};

export const STATUS_LABELS: Record<string, string> = {
  active: 'Activo',
  suspended: 'Suspendido',
  inactive: 'Inactivo',
};

// Configuración de badges
export const STATUS_CONFIG = {
  locked: {
    badge: 'badge-locked',
    text: 'Bloqueado',
    icon: 'lock',
  },
  available: {
    badge: 'badge-info',
    text: 'Disponible',
    icon: 'play',
  },
  completed: {
    badge: 'badge-success',
    text: 'Completado',
    icon: 'check',
  },
  in_progress: {
    badge: 'badge-warning',
    text: 'En Progreso',
    icon: 'clock',
  },
};

// Información del sistema
export const SYSTEM_INFO = {
  version: '1.0.0',
  lastUpdate: 'Enero 2026',
  name: 'Vulnerable Web',
  description: 'Laboratorio educativo de seguridad web',
};
