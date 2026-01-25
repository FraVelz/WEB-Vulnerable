/**
 * lib/levels.ts
 * Definición conceptual del sistema de niveles
 * 
 * IMPORTANTE: Este archivo define los niveles de aprendizaje.
 * NO contiene implementaciones de vulnerabilidades, solo conceptos educativos.
 */

import type { Level, LevelDifficulty, LevelStatus } from '@/types';

// =============================================================================
// DEFINICIÓN DE NIVELES EDUCATIVOS
// =============================================================================

export interface EducationalLevel {
  id: number;
  title: string;
  category: string;
  difficulty: LevelDifficulty;
  
  // Descripción general del tema
  description: string;
  
  // Tema de seguridad cubierto (alto nivel)
  securityTopic: string;
  
  // Objetivo educativo principal
  objective: string;
  
  // Qué aprenderá el estudiante
  learningOutcomes: string[];
  
  // Conceptos clave que se explican
  keyConcepts: string[];
  
  // Buenas prácticas que se enseñan
  bestPractices: string[];
  
  // Recursos de referencia (OWASP, documentación, etc.)
  references: string[];
}

// =============================================================================
// NIVELES DEL LABORATORIO
// =============================================================================

export const EDUCATIONAL_LEVELS: EducationalLevel[] = [
  // -------------------------------------------------------------------------
  // NIVEL 1: Fundamentos de Seguridad Web
  // -------------------------------------------------------------------------
  {
    id: 1,
    title: 'Fundamentos de Seguridad Web',
    category: 'Introducción',
    difficulty: 'Básico',
    
    description: `
      Introducción completa a los conceptos fundamentales de seguridad en aplicaciones web.
      Este nivel sienta las bases para entender por qué la seguridad importa y cuáles son
      las principales amenazas que enfrentan las aplicaciones modernas.
    `,
    
    securityTopic: 'Introducción a la Seguridad Web y OWASP Top 10',
    
    objective: `
      Comprender qué es la seguridad web, por qué es importante, y familiarizarse con
      el marco de trabajo OWASP y sus principales recursos.
    `,
    
    learningOutcomes: [
      'Entender el concepto de vulnerabilidad vs amenaza vs riesgo',
      'Conocer la triada CIA (Confidencialidad, Integridad, Disponibilidad)',
      'Familiarizarse con OWASP Top 10 y su importancia',
      'Comprender el ciclo de vida del desarrollo seguro (SDLC)',
      'Aprender sobre la defensa en profundidad',
    ],
    
    keyConcepts: [
      'Vulnerabilidad: debilidad que puede ser explotada',
      'Amenaza: potencial de que una vulnerabilidad sea explotada',
      'Riesgo: probabilidad e impacto de una amenaza',
      'CIA Triad: pilares de la seguridad de la información',
      'OWASP: Open Web Application Security Project',
    ],
    
    bestPractices: [
      'Aplicar seguridad desde el diseño (Security by Design)',
      'Mantener software y dependencias actualizadas',
      'Implementar el principio de mínimo privilegio',
      'Realizar revisiones de código con enfoque en seguridad',
      'Documentar y seguir políticas de seguridad',
    ],
    
    references: [
      'OWASP Top 10 - https://owasp.org/Top10/',
      'OWASP Web Security Testing Guide',
      'NIST Cybersecurity Framework',
    ],
  },

  // -------------------------------------------------------------------------
  // NIVEL 2: Validación de Entrada
  // -------------------------------------------------------------------------
  {
    id: 2,
    title: 'Validación y Sanitización de Entrada',
    category: 'Input Handling',
    difficulty: 'Básico',
    
    description: `
      Aprende por qué toda entrada de usuario debe considerarse no confiable y cómo
      implementar validación y sanitización efectivas para prevenir múltiples tipos
      de ataques.
    `,
    
    securityTopic: 'Manejo Seguro de Entrada de Usuario',
    
    objective: `
      Dominar las técnicas de validación del lado del servidor y entender la diferencia
      entre validación (verificar formato) y sanitización (limpiar contenido).
    `,
    
    learningOutcomes: [
      'Entender por qué nunca confiar en la entrada del usuario',
      'Diferenciar entre validación y sanitización',
      'Implementar validación del lado del servidor',
      'Usar listas blancas vs listas negras',
      'Escapar datos según el contexto de salida',
    ],
    
    keyConcepts: [
      'Input Validation: verificar que los datos cumplen el formato esperado',
      'Sanitization: limpiar datos de contenido potencialmente peligroso',
      'Whitelist: permitir solo lo conocido como seguro',
      'Blacklist: bloquear lo conocido como peligroso',
      'Output Encoding: escapar datos según el contexto',
    ],
    
    bestPractices: [
      'Validar en el servidor, no solo en el cliente',
      'Usar listas blancas siempre que sea posible',
      'Validar tipo, longitud, formato y rango de datos',
      'Usar bibliotecas de validación probadas',
      'Escapar según el contexto: HTML, URL, JavaScript, SQL, etc.',
    ],
    
    references: [
      'OWASP Input Validation Cheat Sheet',
      'OWASP Cross Site Scripting Prevention Cheat Sheet',
      'CWE-20: Improper Input Validation',
    ],
  },

  // -------------------------------------------------------------------------
  // NIVEL 3: Autenticación y Gestión de Sesiones
  // -------------------------------------------------------------------------
  {
    id: 3,
    title: 'Autenticación y Gestión de Sesiones',
    category: 'Autenticación',
    difficulty: 'Intermedio',
    
    description: `
      Explora los mecanismos de autenticación segura y aprende cómo gestionar sesiones
      de usuario de manera que protejan contra ataques de suplantación de identidad.
    `,
    
    securityTopic: 'Autenticación Robusta y Manejo Seguro de Sesiones',
    
    objective: `
      Aprender a implementar sistemas de autenticación seguros y gestionar sesiones
      de forma que minimice el riesgo de compromiso de cuentas de usuario.
    `,
    
    learningOutcomes: [
      'Entender cómo funcionan las sesiones web',
      'Aprender almacenamiento seguro de contraseñas con hashing',
      'Conocer los factores de autenticación (algo que sabes/tienes/eres)',
      'Implementar logout seguro y timeout de sesiones',
      'Comprender la importancia de MFA',
    ],
    
    keyConcepts: [
      'Hashing: transformación unidireccional para almacenar contraseñas',
      'Salt: valor aleatorio añadido antes del hash',
      'Session Token: identificador único de sesión',
      'MFA: autenticación multi-factor',
      'Session Fixation: ataque donde se fija el ID de sesión',
    ],
    
    bestPractices: [
      'Usar algoritmos modernos: bcrypt, Argon2, scrypt',
      'Regenerar ID de sesión tras autenticación',
      'Implementar bloqueo tras intentos fallidos',
      'Establecer tiempos de expiración apropiados',
      'Transmitir credenciales solo sobre HTTPS',
      'Implementar MFA para cuentas sensibles',
    ],
    
    references: [
      'OWASP Authentication Cheat Sheet',
      'OWASP Session Management Cheat Sheet',
      'OWASP Password Storage Cheat Sheet',
    ],
  },

  // -------------------------------------------------------------------------
  // NIVEL 4: Control de Acceso y Autorización
  // -------------------------------------------------------------------------
  {
    id: 4,
    title: 'Control de Acceso y Autorización',
    category: 'Autorización',
    difficulty: 'Intermedio',
    
    description: `
      Estudia cómo implementar controles de acceso efectivos que aseguren que los
      usuarios solo puedan acceder a los recursos para los que tienen permiso.
    `,
    
    securityTopic: 'Autorización y Control de Acceso Basado en Roles',
    
    objective: `
      Entender la diferencia entre autenticación y autorización, e implementar
      sistemas de control de acceso robustos que prevengan acceso no autorizado.
    `,
    
    learningOutcomes: [
      'Diferenciar claramente autenticación vs autorización',
      'Implementar RBAC (Control de Acceso Basado en Roles)',
      'Prevenir escalación horizontal y vertical de privilegios',
      'Usar referencias indirectas para recursos sensibles',
      'Diseñar políticas de acceso efectivas',
    ],
    
    keyConcepts: [
      'Autenticación: verificar quién eres',
      'Autorización: verificar qué puedes hacer',
      'RBAC: asignar permisos a roles, roles a usuarios',
      'Principio de Mínimo Privilegio: solo los permisos necesarios',
      'IDOR: acceso directo a objetos sin verificación',
    ],
    
    bestPractices: [
      'Verificar autorización en cada solicitud del servidor',
      'Denegar por defecto, permitir explícitamente',
      'Usar referencias indirectas para IDs sensibles',
      'Implementar logging de accesos a recursos sensibles',
      'Revisar y auditar permisos periódicamente',
      'No confiar en controles del lado del cliente',
    ],
    
    references: [
      'OWASP Authorization Cheat Sheet',
      'OWASP Access Control Cheat Sheet',
      'CWE-862: Missing Authorization',
    ],
  },

  // -------------------------------------------------------------------------
  // NIVEL 5: Configuración de Seguridad Avanzada
  // -------------------------------------------------------------------------
  {
    id: 5,
    title: 'Seguridad Avanzada y Headers HTTP',
    category: 'Avanzado',
    difficulty: 'Avanzado',
    
    description: `
      Profundiza en técnicas avanzadas de defensa, incluyendo configuración de headers
      de seguridad HTTP, Content Security Policy, y arquitecturas seguras.
    `,
    
    securityTopic: 'Configuración de Seguridad y Defensa en Profundidad',
    
    objective: `
      Dominar la configuración de seguridad a nivel de servidor y aplicación,
      implementando múltiples capas de defensa para una protección robusta.
    `,
    
    learningOutcomes: [
      'Configurar headers de seguridad HTTP efectivos',
      'Implementar Content Security Policy (CSP)',
      'Entender y configurar CORS apropiadamente',
      'Aplicar rate limiting y protección contra DoS',
      'Diseñar arquitecturas con seguridad en mente',
    ],
    
    keyConcepts: [
      'CSP: política que controla qué recursos puede cargar el navegador',
      'CORS: control de acceso entre orígenes diferentes',
      'HSTS: forzar uso de HTTPS',
      'X-Frame-Options: prevenir clickjacking',
      'Rate Limiting: limitar solicitudes por tiempo',
    ],
    
    bestPractices: [
      'Implementar CSP estricto y probarlo gradualmente',
      'Usar HSTS con preload para máxima protección',
      'Configurar X-Content-Type-Options: nosniff',
      'Implementar rate limiting por IP y por usuario',
      'Realizar auditorías de seguridad periódicas',
      'Usar herramientas de escaneo automatizado',
      'Mantener un programa de respuesta a incidentes',
    ],
    
    references: [
      'OWASP Secure Headers Project',
      'Content Security Policy Reference',
      'Mozilla Web Security Guidelines',
      'OWASP Security Configuration Guide',
    ],
  },
];

// =============================================================================
// FUNCIONES DE UTILIDAD PARA NIVELES
// =============================================================================

/**
 * Obtiene un nivel por su ID
 */
export function getLevelById(id: number): EducationalLevel | undefined {
  return EDUCATIONAL_LEVELS.find(level => level.id === id);
}

/**
 * Obtiene niveles por categoría
 */
export function getLevelsByCategory(category: string): EducationalLevel[] {
  return EDUCATIONAL_LEVELS.filter(level => level.category === category);
}

/**
 * Obtiene niveles por dificultad
 */
export function getLevelsByDifficulty(difficulty: LevelDifficulty): EducationalLevel[] {
  return EDUCATIONAL_LEVELS.filter(level => level.difficulty === difficulty);
}

/**
 * Convierte un EducationalLevel al formato esperado por los componentes
 */
export function toComponentLevel(
  educationalLevel: EducationalLevel,
  status: LevelStatus = 'locked',
  progress: number = 0
): Level {
  return {
    id: educationalLevel.id,
    title: educationalLevel.title,
    description: educationalLevel.description.trim(),
    category: educationalLevel.category,
    difficulty: educationalLevel.difficulty,
    status,
    progress,
    learningObjective: educationalLevel.objective.trim(),
    learningObjectives: educationalLevel.learningOutcomes,
    concepts: educationalLevel.keyConcepts.map((concept, index) => ({
      title: concept.split(':')[0] || `Concepto ${index + 1}`,
      description: concept.split(':')[1]?.trim() || concept,
    })),
    bestPractices: educationalLevel.bestPractices,
  };
}
