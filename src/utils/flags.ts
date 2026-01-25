// Flags del CTF (en producción vendrían del backend)
interface Flag {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Básico' | 'Intermedio' | 'Avanzado';
  points: number;
  status: 'locked' | 'available' | 'completed';
  hint?: string;
}

const flags: Flag[] = [
  {
    id: "flag-001",
    title: "Primera Inyección SQL",
    description:
      "Encuentra la flag explotando una inyección SQL en el formulario de búsqueda",
    category: "Inyección",
    difficulty: "Básico",
    points: 100,
    status: "locked",
    hint: "Prueba con comillas simples en el campo de búsqueda",
  },
  {
    id: "flag-002",
    title: "XSS Reflejado",
    description: "Ejecuta JavaScript en la página para obtener la flag",
    category: "XSS",
    difficulty: "Básico",
    points: 100,
    status: "available",
    hint: "El payload se refleja en la URL",
  },
  {
    id: "flag-003",
    title: "IDOR en Perfil",
    description: "Accede al perfil de otro usuario cambiando el ID en la URL",
    category: "Control de Acceso",
    difficulty: "Intermedio",
    points: 200,
    status: "locked",
    hint: "Prueba diferentes números en /profile?id=",
  },
  {
    id: "flag-004",
    title: "Session Fixation",
    description: "Fija una sesión y fuerza a otro usuario a usarla",
    category: "Autenticación",
    difficulty: "Intermedio",
    points: 200,
    status: "locked",
    hint: "El ID de sesión no cambia después del login",
  },
  {
    id: "flag-005",
    title: "Path Traversal",
    description: "Lee el archivo /etc/passwd usando path traversal",
    category: "Path Traversal",
    difficulty: "Básico",
    points: 150,
    status: "available",
    hint: "Usa ../ para navegar directorios",
  },
  {
    id: "flag-006",
    title: "CSRF en Cambio de Email",
    description: "Cambia el email de otro usuario usando CSRF",
    category: "CSRF",
    difficulty: "Intermedio",
    points: 250,
    status: "locked",
    hint: "No hay token CSRF en el formulario",
  },
  {
    id: "flag-007",
    title: "Stored XSS",
    description:
      "Almacena un payload XSS que se ejecute cuando otros usuarios lo vean",
    category: "XSS",
    difficulty: "Intermedio",
    points: 200,
    status: "locked",
    hint: "El comentario se muestra a otros usuarios",
  },
  {
    id: "flag-008",
    title: "File Upload - Shell",
    description: "Sube un archivo PHP malicioso y ejecútalo",
    category: "File Upload",
    difficulty: "Intermedio",
    points: 250,
    status: "locked",
    hint: "La validación solo verifica la extensión",
  },
  {
    id: "flag-009",
    title: "SSRF a Metadatos",
    description: "Usa SSRF para acceder a los metadatos del servidor",
    category: "SSRF",
    difficulty: "Avanzado",
    points: 300,
    status: "locked",
    hint: "El endpoint /api/fetch acepta cualquier URL",
  },
  {
    id: "flag-010",
    title: "Deserialización Insegura",
    description: "Explota la deserialización insegura para ejecutar código",
    category: "Deserialización",
    difficulty: "Avanzado",
    points: 350,
    status: "locked",
    hint: "Los datos se deserializan sin validación",
  },
];

export default flags;
