// Flags del CTF (en producción vendrían del backend)
interface Flag {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Básico' | 'Intermedio' | 'Avanzado';
  methodologies?: string[];
  correctFlag: string;
}

const flags: Flag[] = [
  {
    id: "flag-001",
    title: "Inyección SQL Básica",
    description:
      "Encuentra la flag explotando una inyección SQL en el formulario de búsqueda. La aplicación no valida correctamente las entradas del usuario.",
    category: "SQL Injection",
    difficulty: "Básico",
    methodologies: ["SQL Injection", "Union-based", "Error-based"],
    correctFlag: "FLAG{sql_injection_basica}",
  },
  {
    id: "flag-002",
    title: "XSS Reflejado",
    description: "Ejecuta JavaScript malicioso en la página para obtener la flag. El payload se refleja directamente en la respuesta del servidor.",
    category: "XSS",
    difficulty: "Básico",
    methodologies: ["Reflected XSS", "JavaScript Injection", "DOM Manipulation"],
    correctFlag: "FLAG{xss_reflejado}",
  },
  {
    id: "flag-003",
    title: "IDOR en Perfil",
    description: "Accede al perfil de otro usuario cambiando el ID en la URL. La aplicación no verifica correctamente los permisos de acceso.",
    category: "IDOR",
    difficulty: "Intermedio",
    methodologies: ["IDOR", "Parameter Tampering", "Authorization Bypass"],
    correctFlag: "FLAG{idor_perfil}",
  },
  {
    id: "flag-004",
    title: "Path Traversal",
    description: "Lee archivos del sistema usando path traversal. Navega fuera del directorio web permitido para acceder a archivos sensibles.",
    category: "Path Traversal",
    difficulty: "Básico",
    methodologies: ["Directory Traversal", "File Inclusion", "Path Manipulation"],
    correctFlag: "FLAG{path_traversal}",
  },
  {
    id: "flag-005",
    title: "CSRF en Cambio de Email",
    description: "Explota una vulnerabilidad CSRF para cambiar el email de otro usuario. El formulario no tiene protección contra solicitudes cruzadas.",
    category: "CSRF",
    difficulty: "Intermedio",
    methodologies: ["CSRF", "Cross-Site Request", "Token Bypass"],
    correctFlag: "FLAG{csrf_email}",
  },
  {
    id: "flag-006",
    title: "Stored XSS",
    description:
      "Almacena un payload XSS que se ejecute cuando otros usuarios visiten la página. El código malicioso se guarda permanentemente en la base de datos.",
    category: "XSS",
    difficulty: "Intermedio",
    methodologies: ["Stored XSS", "Persistent XSS", "Database Injection"],
    correctFlag: "FLAG{stored_xss}",
  },
  {
    id: "flag-007",
    title: "File Upload - Shell",
    description: "Sube un archivo malicioso y ejecútalo en el servidor. La validación de archivos es insuficiente.",
    category: "File Upload",
    difficulty: "Intermedio",
    methodologies: ["File Upload", "Web Shell", "RCE"],
    correctFlag: "FLAG{file_upload_shell}",
  },
  {
    id: "flag-008",
    title: "SSRF a Metadatos",
    description: "Usa SSRF para acceder a los metadatos del servidor. El endpoint acepta cualquier URL sin validación adecuada.",
    category: "SSRF",
    difficulty: "Avanzado",
    methodologies: ["SSRF", "Server-Side Request", "Metadata Access"],
    correctFlag: "FLAG{ssrf_metadatos}",
  },
  {
    id: "flag-009",
    title: "Deserialización Insegura",
    description: "Explota la deserialización insegura para ejecutar código arbitrario. Los datos no se validan antes de deserializar.",
    category: "Deserialization",
    difficulty: "Avanzado",
    methodologies: ["Insecure Deserialization", "Object Injection", "RCE"],
    correctFlag: "FLAG{deserializacion_insegura}",
  },
  {
    id: "flag-010",
    title: "DOM-based XSS",
    description: "Explota una vulnerabilidad XSS basada en DOM. El código JavaScript del cliente manipula el DOM de manera insegura.",
    category: "XSS",
    difficulty: "Intermedio",
    methodologies: ["DOM-based XSS", "Client-Side Injection", "JavaScript"],
    correctFlag: "FLAG{dom_xss_basico}",
  },
];

export default flags;
