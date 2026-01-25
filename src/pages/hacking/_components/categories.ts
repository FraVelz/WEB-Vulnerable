
// Resúmenes detallados de cada categoría
export const vulnerabilitySummaries: Record<string, string> = {
    'owasp-top10': `El OWASP Top 10 2021 representa las 10 vulnerabilidades más críticas en aplicaciones web según la Open Web Application Security Project. Incluye problemas como Broken Access Control (A01), donde los usuarios pueden acceder a recursos sin autorización; Cryptographic Failures (A02), que expone datos sensibles por falta de encriptación adecuada; Injection (A03), permitiendo ejecutar código malicioso a través de entradas no validadas; Insecure Design (A04), con fallos arquitectónicos fundamentales; Security Misconfiguration (A05), configuraciones por defecto inseguras; Vulnerable Components (A06), uso de bibliotecas con vulnerabilidades conocidas; Authentication Failures (A07), problemas en la gestión de sesiones y autenticación; Integrity Failures (A08), fallos en la integridad de software y datos; Logging Failures (A09), falta de monitoreo y registro adecuado; y SSRF (A10), que permite a atacantes hacer solicitudes a recursos internos del servidor.`,

    'xss': `Cross-Site Scripting (XSS) es una vulnerabilidad que permite a atacantes inyectar código JavaScript malicioso en páginas web visitadas por otros usuarios. Existen tres tipos principales: Reflected XSS, donde el payload se refleja inmediatamente en la respuesta del servidor, típicamente a través de parámetros URL o formularios; Stored XSS, donde el código malicioso se almacena permanentemente en la base de datos y se ejecuta cada vez que un usuario visita la página afectada; y DOM-based XSS, donde la vulnerabilidad existe en el código JavaScript del lado del cliente que manipula el DOM de manera insegura. Estas vulnerabilidades pueden permitir robo de cookies, sesiones, redirecciones maliciosas y ejecución de acciones en nombre del usuario.`,

    'csrf': `Cross-Site Request Forgery (CSRF) es un ataque que fuerza a un usuario autenticado a ejecutar acciones no deseadas en una aplicación web. El ataque explota la confianza que la aplicación tiene en el navegador del usuario, enviando solicitudes HTTP desde un sitio malicioso mientras el usuario está autenticado. En CSRF Básico, los formularios no tienen protección mediante tokens, permitiendo que cualquier sitio web pueda enviar solicitudes en nombre del usuario. CSRF Avanzado involucra técnicas para bypass de tokens CSRF, como explotar vulnerabilidades en la validación de tokens, usar métodos HTTP alternativos, o aprovechar configuraciones CORS incorrectas. La protección incluye tokens CSRF, verificación de origen, y SameSite cookies.`,

    'file-upload': `Las vulnerabilidades de carga de archivos permiten a atacantes subir archivos maliciosos al servidor. En File Upload Básico, no hay validación del tipo de archivo, permitiendo subir scripts ejecutables como PHP, JSP, o ASP que pueden ser ejecutados por el servidor. El Bypass de Validación explota debilidades en los controles de validación, como verificar solo la extensión del archivo (que puede ser manipulada), no validar el contenido real del archivo, o permitir múltiples extensiones. Los atacantes pueden usar técnicas como doble extensión (.php.jpg), null bytes, o manipulación de headers MIME. Estas vulnerabilidades pueden llevar a ejecución remota de código, defacement del sitio, o almacenamiento de malware.`,

    'path-traversal': `Path Traversal (también conocido como Directory Traversal) permite a atacantes acceder a archivos y directorios fuera del directorio web raíz. En Path Traversal Básico, se usa la secuencia "../" para navegar hacia directorios padre y acceder a archivos del sistema como /etc/passwd en Linux o archivos de configuración. Path Traversal Avanzado involucra técnicas de bypass como codificación URL, doble codificación, codificación Unicode, o usar variantes como "..\\" en Windows. Los atacantes pueden leer archivos sensibles, archivos de configuración, código fuente, o incluso escribir archivos si tienen permisos. La protección requiere validación estricta de rutas, uso de rutas canónicas, y listas blancas de archivos permitidos.`,

    'ssti': `Server-Side Template Injection (SSTI) ocurre cuando un atacante puede inyectar código en plantillas del servidor que se procesan dinámicamente. SSTI Jinja2 afecta aplicaciones Python que usan el motor de plantillas Jinja2, permitiendo ejecutar código Python arbitrario a través de la inyección de expresiones. SSTI Twig afecta aplicaciones PHP que usan Twig, permitiendo ejecutar código PHP. Estas vulnerabilidades son extremadamente peligrosas ya que pueden llevar a ejecución remota de código (RCE), acceso completo al servidor, y compromiso de la aplicación y datos. La explotación típicamente involucra identificar el motor de plantillas, encontrar la sintaxis correcta, y escalar desde lectura de archivos hasta ejecución de comandos.`,

    'deserialization': `Insecure Deserialization ocurre cuando aplicaciones deserializan datos no confiables sin validación adecuada. Python Pickle permite serializar objetos Python, pero deserializar datos maliciosos puede ejecutar código arbitrario durante el proceso de deserialización. PHP Unserialize tiene problemas similares, donde objetos maliciosos pueden ejecutar código durante la deserialización o manipular propiedades de objetos. Estas vulnerabilidades pueden llevar a ejecución remota de código, escalación de privilegios, o manipulación de datos de la aplicación. La protección requiere evitar deserializar datos de fuentes no confiables, usar formatos seguros como JSON, validar datos antes de deserializar, y restringir clases que pueden ser deserializadas.`,

    'business-logic': `Las vulnerabilidades de lógica de negocio explotan fallos en la implementación de reglas de negocio de la aplicación. La Manipulación de Precios ocurre cuando los precios se validan o calculan en el cliente, permitiendo a atacantes modificar valores antes de enviarlos al servidor, o cuando el servidor no verifica correctamente los precios. La Manipulación de Stock permite a atacantes bypass de validaciones de inventario, como comprar más productos de los disponibles, usar números negativos, o explotar condiciones de carrera. Estas vulnerabilidades pueden llevar a pérdidas financieras, violación de reglas de negocio, o compromiso de la integridad de datos. La protección requiere validación estricta en el servidor, verificación de reglas de negocio en cada transacción, y uso de transacciones atómicas.`,
};

// Categorías de vulnerabilidades - solo conceptos básicos
export const vulnerabilityCategories = [
    {
        id: 'xss',
        title: 'Cross-Site Scripting (XSS)',
        description: 'Inyección de código JavaScript malicioso en páginas web que se ejecuta en el navegador de otros usuarios. Permite robo de cookies, sesiones y ejecución de acciones en nombre del usuario.',
    },
    {
        id: 'csrf',
        title: 'Cross-Site Request Forgery (CSRF)',
        description: 'Ataques que fuerzan a usuarios autenticados a ejecutar acciones no deseadas en aplicaciones web. Explota la confianza del navegador para enviar solicitudes maliciosas.',
    },
    {
        id: 'file-upload',
        title: 'File Upload Vulnerabilities',
        description: 'Vulnerabilidades que permiten cargar archivos maliciosos al servidor sin validación adecuada. Puede llevar a ejecución remota de código y compromiso del servidor.',
    },
    {
        id: 'path-traversal',
        title: 'Path Traversal',
        description: 'Técnica que permite acceder a archivos y directorios fuera del directorio web permitido. Usa secuencias como "../" para navegar por el sistema de archivos.',
    },
    {
        id: 'sql-injection',
        title: 'SQL Injection',
        description: 'Inyección de código SQL malicioso en consultas de base de datos. Permite acceder, modificar o eliminar datos sensibles sin autorización adecuada.',
    },
    {
        id: 'ssti',
        title: 'Server-Side Template Injection',
        description: 'Inyección de código en plantillas del servidor que se procesan dinámicamente. Puede llevar a ejecución remota de código y control completo del servidor.',
    },
    {
        id: 'idor',
        title: 'IDOR (Insecure Direct Object Reference)',
        description: 'Vulnerabilidad que permite acceder a recursos sin autorización al manipular referencias directas a objetos. Los usuarios pueden acceder a datos de otros usuarios.',
    },
    {
        id: 'ssrf',
        title: 'SSRF (Server-Side Request Forgery)',
        description: 'Vulnerabilidad que permite a atacantes hacer solicitudes HTTP desde el servidor a recursos internos. Puede exponer servicios internos y datos sensibles.',
    },
    {
        id: 'auth-bypass',
        title: 'Authentication Bypass',
        description: 'Técnicas para evadir o saltarse los mecanismos de autenticación de una aplicación. Incluye bypass de login, sesiones débiles y enumeración de usuarios.',
    },
];