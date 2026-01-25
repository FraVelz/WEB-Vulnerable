# Guía Completa de Vulnerabilidades Web - Vulnerable Web

## 📋 Índice

1. [OWASP Top 10 2021](#owasp-top-10-2021)
2. [Vulnerabilidades Adicionales](#vulnerabilidades-adicionales)
3. [Ubicación de Vulnerabilidades en el Proyecto](#ubicación-de-vulnerabilidades)
4. [Cómo Practicar](#cómo-practicar)
5. [Recursos de Referencia](#recursos-de-referencia)

---

## OWASP Top 10 2021

### A01:2021 – Broken Access Control (Control de Acceso Roto)

**Descripción**: Los controles de acceso impiden que los usuarios actúen fuera de sus permisos previstos. Las fallas de control de acceso comúnmente llevan a la divulgación no autorizada de información, modificación o destrucción de todos los datos, o realizar una función de negocio fuera de los límites del usuario.

**Ejemplos de vulnerabilidades**:
- IDOR (Insecure Direct Object Reference)
- Escalación de privilegios vertical/horizontal
- Bypass de autenticación
- Acceso a archivos sin autorización

**Ubicación en el proyecto**: `/hacking` → Categoría "Control de Acceso"

**Cómo practicar**:
- Intentar acceder a recursos de otros usuarios cambiando IDs en la URL
- Probar diferentes roles de usuario
- Intentar acceder a rutas administrativas sin permisos

---

### A02:2021 – Cryptographic Failures (Fallos Criptográficos)

**Descripción**: Anteriormente conocido como "Sensitive Data Exposure", este riesgo se centra en fallos relacionados con la criptografía (o falta de ella) que frecuentemente exponen datos sensibles.

**Ejemplos de vulnerabilidades**:
- Almacenamiento de contraseñas en texto plano
- Uso de algoritmos de hash débiles (MD5, SHA1)
- Falta de salt en hashes
- Transmisión de datos sensibles sin HTTPS
- Almacenamiento de tokens en localStorage

**Ubicación en el proyecto**: `/hacking` → Categoría "Autenticación"

**Cómo practicar**:
- Inspeccionar cookies y tokens de sesión
- Revisar el almacenamiento del navegador
- Analizar tráfico HTTP/HTTPS
- Verificar headers de seguridad

---

### A03:2021 – Injection (Inyección)

**Descripción**: Las fallas de inyección, como SQL, NoSQL, OS y LDAP, ocurren cuando datos no confiables se envían a un intérprete como parte de un comando o consulta.

**Ejemplos de vulnerabilidades**:
- SQL Injection
- NoSQL Injection
- Command Injection
- LDAP Injection
- XPath Injection
- XXE (XML External Entity)

**Ubicación en el proyecto**: `/hacking` → Categoría "Inyección"

**Cómo practicar**:
- Probar payloads SQL en formularios de búsqueda
- Intentar inyección de comandos en campos de entrada
- Probar inyección NoSQL en APIs
- Analizar respuestas de error para información

---

### A04:2021 – Insecure Design (Diseño Inseguro)

**Descripción**: El diseño inseguro es un amplio categoría que representa diferentes debilidades, expresadas como "fallas de control o mitigación faltantes". El diseño inseguro no es la fuente de todas las vulnerabilidades de seguridad.

**Ejemplos de vulnerabilidades**:
- Falta de validación de negocio
- Flujos de autenticación débiles
- Falta de rate limiting
- Diseño de arquitectura inseguro

**Ubicación en el proyecto**: `/hacking` → Categoría "Diseño"

**Cómo practicar**:
- Analizar flujos de autenticación
- Probar límites de rate limiting
- Identificar lógica de negocio vulnerable
- Revisar arquitectura de la aplicación

---

### A05:2021 – Security Misconfiguration (Configuración Incorrecta de Seguridad)

**Descripción**: La configuración incorrecta de seguridad es el resultado más comúnmente visto. Esto es comúnmente el resultado de configuraciones por defecto inseguras, configuraciones incompletas o ad hoc, almacenamiento en la nube abierto, headers HTTP mal configurados, y mensajes de error verbosos con información sensible.

**Ejemplos de vulnerabilidades**:
- Headers de seguridad faltantes
- Configuración de CORS incorrecta
- Mensajes de error verbosos
- Directorios y archivos expuestos
- Versiones de software desactualizadas

**Ubicación en el proyecto**: `/hacking` → Categoría "Configuración"

**Cómo practicar**:
- Revisar headers HTTP de respuesta
- Buscar archivos de configuración expuestos (.env, .git)
- Analizar mensajes de error
- Verificar versiones de software

---

### A06:2021 – Vulnerable and Outdated Components (Componentes Vulnerables y Desactualizados)

**Descripción**: Usar componentes con vulnerabilidades conocidas, incluyendo bibliotecas, frameworks y otros módulos de software. Los componentes y la aplicación corren con los mismos privilegios, por lo que si un componente vulnerable es explotado, tal falla puede resultar en una pérdida seria de datos o toma de control del servidor.

**Ejemplos de vulnerabilidades**:
- Dependencias con CVE conocidos
- Frameworks desactualizados
- Plugins vulnerables
- Bibliotecas JavaScript con vulnerabilidades

**Ubicación en el proyecto**: `/hacking` → Categoría "Dependencias"

**Cómo practicar**:
- Analizar package.json y dependencias
- Buscar CVEs en componentes usados
- Verificar versiones de frameworks
- Usar herramientas de escaneo de dependencias

---

### A07:2021 – Identification and Authentication Failures (Fallos de Identificación y Autenticación)

**Descripción**: Anteriormente conocido como "Broken Authentication", esta categoría ahora incluye fallos relacionados con la identificación. Las aplicaciones que no implementan correctamente las funciones de autenticación permiten a los atacantes comprometer contraseñas, claves o tokens de sesión, o explotar otras fallas de implementación para asumir la identidad de otros usuarios.

**Ejemplos de vulnerabilidades**:
- Contraseñas débiles permitidas
- Falta de MFA
- Sesiones que no expiran
- Session fixation
- Credenciales por defecto
- Enumeración de usuarios

**Ubicación en el proyecto**: `/hacking` → Categoría "Autenticación"

**Cómo practicar**:
- Probar fuerza bruta en login
- Intentar enumerar usuarios válidos
- Analizar tokens de sesión
- Probar session fixation
- Verificar expiración de sesiones

---

### A08:2021 – Software and Data Integrity Failures (Fallos de Integridad de Software y Datos)

**Descripción**: Las fallas de integridad de software y datos se relacionan con código e infraestructura que no protege contra violaciones de integridad. Un ejemplo de esto es donde una aplicación depende de plugins, bibliotecas o módulos de fuentes no confiables, repositorios y redes de entrega de contenido (CDN).

**Ejemplos de vulnerabilidades**:
- CI/CD pipeline inseguro
- Actualizaciones sin verificación
- Deserialización insegura
- Supply chain attacks

**Ubicación en el proyecto**: `/hacking` → Categoría "Integridad"

**Cómo practicar**:
- Analizar procesos de CI/CD
- Verificar firmas de actualizaciones
- Probar deserialización insegura
- Revisar cadenas de suministro

---

### A09:2021 – Security Logging and Monitoring Failures (Fallos de Registro y Monitoreo de Seguridad)

**Descripción**: Esta categoría es para ayudar a detectar, escalar y responder a violaciones activas. Sin registro y monitoreo, las violaciones no pueden ser detectadas.

**Ejemplos de vulnerabilidades**:
- Falta de logging de eventos críticos
- Logs no protegidos
- Falta de alertas
- Logs con información sensible

**Ubicación en el proyecto**: `/hacking` → Categoría "Logging"

**Cómo practicar**:
- Verificar qué eventos se registran
- Buscar logs expuestos
- Analizar información en logs
- Probar si los ataques se registran

---

### A10:2021 – Server-Side Request Forgery (SSRF)

**Descripción**: Las fallas SSRF ocurren cuando una aplicación web obtiene un recurso remoto sin validar la URL proporcionada por el usuario. Permite a un atacante forzar a la aplicación a enviar una solicitud a una ubicación inesperada, incluso cuando está protegida por un firewall, VPN u otro tipo de control de acceso de red.

**Ejemplos de vulnerabilidades**:
- SSRF a servicios internos
- SSRF a metadatos de cloud
- Bypass de firewalls
- Acceso a servicios locales

**Ubicación en el proyecto**: `/hacking` → Categoría "SSRF"

**Cómo practicar**:
- Probar URLs en funciones de fetch/request
- Intentar acceder a localhost
- Probar acceso a metadatos (AWS, Azure, GCP)
- Usar diferentes esquemas de URL

---

## Vulnerabilidades Adicionales

### Cross-Site Scripting (XSS)

**Tipos**:
- **Reflected XSS**: El payload se refleja inmediatamente en la respuesta
- **Stored XSS**: El payload se almacena y se ejecuta cuando otros usuarios lo ven
- **DOM-based XSS**: La vulnerabilidad está en el código JavaScript del lado del cliente

**Ubicación en el proyecto**: `/hacking` → Categoría "XSS"

**Payloads comunes**:
```javascript
<script>alert('XSS')</script>
<img src=x onerror=alert('XSS')>
<svg onload=alert('XSS')>
javascript:alert('XSS')
```

---

### Cross-Site Request Forgery (CSRF)

**Descripción**: Permite a un atacante hacer que un usuario autenticado ejecute acciones no deseadas en una aplicación web.

**Ubicación en el proyecto**: `/hacking` → Categoría "CSRF"

**Cómo practicar**:
- Crear formularios HTML maliciosos
- Probar si hay tokens CSRF
- Verificar validación de origen

---

### XML External Entity (XXE)

**Descripción**: Permite a un atacante interferir con el procesamiento de datos XML de una aplicación.

**Ubicación en el proyecto**: `/hacking` → Categoría "XXE"

**Payloads comunes**:
```xml
<?xml version="1.0"?>
<!DOCTYPE foo [
<!ENTITY xxe SYSTEM "file:///etc/passwd">
]>
<foo>&xxe;</foo>
```

---

### File Upload Vulnerabilities

**Descripción**: Vulnerabilidades relacionadas con la carga de archivos.

**Tipos**:
- Carga de archivos maliciosos
- Bypass de validación de tipo
- Path traversal en nombres de archivo
- Sobrescritura de archivos

**Ubicación en el proyecto**: `/hacking` → Categoría "File Upload"

---

### Path Traversal

**Descripción**: Permite acceder a archivos fuera del directorio web.

**Ubicación en el proyecto**: `/hacking` → Categoría "Path Traversal"

**Payloads comunes**:
```
../../../etc/passwd
..\..\..\windows\system32\config\sam
....//....//etc/passwd
```

---

### Server-Side Template Injection (SSTI)

**Descripción**: Permite inyectar código en plantillas del servidor.

**Ubicación en el proyecto**: `/hacking` → Categoría "SSTI"

**Frameworks afectados**:
- Jinja2 (Python)
- Twig (PHP)
- Freemarker (Java)
- Handlebars (Node.js)

---

### Insecure Deserialization

**Descripción**: Permite ejecutar código arbitrario mediante deserialización insegura.

**Ubicación en el proyecto**: `/hacking` → Categoría "Deserialización"

---

### Race Conditions

**Descripción**: Condiciones de carrera que pueden llevar a vulnerabilidades.

**Ubicación en el proyecto**: `/hacking` → Categoría "Race Conditions"

---

### Business Logic Vulnerabilities

**Descripción**: Vulnerabilidades en la lógica de negocio de la aplicación.

**Ejemplos**:
- Precio negativo
- Stock infinito
- Bypass de validaciones de negocio

**Ubicación en el proyecto**: `/hacking` → Categoría "Lógica de Negocio"

---

## Ubicación de Vulnerabilidades en el Proyecto

### Estructura de Navegación

```
/hacking
├── OWASP Top 10
│   ├── A01: Broken Access Control
│   ├── A02: Cryptographic Failures
│   ├── A03: Injection
│   ├── A04: Insecure Design
│   ├── A05: Security Misconfiguration
│   ├── A06: Vulnerable Components
│   ├── A07: Authentication Failures
│   ├── A08: Integrity Failures
│   ├── A09: Logging Failures
│   └── A10: SSRF
│
├── Vulnerabilidades Adicionales
│   ├── XSS (Reflected, Stored, DOM-based)
│   ├── CSRF
│   ├── XXE
│   ├── File Upload
│   ├── Path Traversal
│   ├── SSTI
│   ├── Insecure Deserialization
│   ├── Race Conditions
│   └── Business Logic
│
└── Prácticas por Categoría
    ├── Inyección
    ├── Autenticación
    ├── Control de Acceso
    ├── Configuración
    └── Otros
```

### Rutas Específicas

- **Panel Principal**: `/hacking` - Lista todas las vulnerabilidades
- **Vulnerabilidad Individual**: `/vulnerability/[id]` - Detalles de cada vulnerabilidad
- **CTF Flags**: `/flags` - Sistema de banderas para completar desafíos
- **Perfil**: `/profile` - Perfil del usuario y progreso

---

## Cómo Practicar

### 1. Metodología de Prueba

1. **Reconocimiento**: Identificar endpoints y funcionalidades
2. **Análisis**: Buscar puntos de entrada para vulnerabilidades
3. **Explotación**: Probar payloads y técnicas
4. **Documentación**: Registrar hallazgos y soluciones

### 2. Herramientas Recomendadas

- **Navegador**: Chrome DevTools, Firefox Developer Tools
- **Proxy**: Burp Suite, OWASP ZAP
- **Línea de comandos**: curl, wget
- **Scripts**: Python, JavaScript para automatización

### 3. Técnicas de Prueba

#### Para Inyección SQL:
```sql
' OR '1'='1
' UNION SELECT NULL--
admin'--
```

#### Para XSS:
```html
<script>alert(document.cookie)</script>
<img src=x onerror=alert(1)>
```

#### Para Path Traversal:
```
../../../etc/passwd
..\..\..\windows\system32\config\sam
```

### 4. Checklist de Pruebas

- [ ] Probar todos los campos de entrada
- [ ] Analizar respuestas de error
- [ ] Revisar headers HTTP
- [ ] Inspeccionar cookies y tokens
- [ ] Probar diferentes roles de usuario
- [ ] Verificar validación del lado del servidor
- [ ] Analizar código JavaScript
- [ ] Revisar configuración de seguridad

---

## Recursos de Referencia

### Documentación Oficial

- [OWASP Top 10 2021](https://owasp.org/Top10/)
- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)

### Bases de Datos de Vulnerabilidades

- [CWE - Common Weakness Enumeration](https://cwe.mitre.org/)
- [CVE - Common Vulnerabilities and Exposures](https://cve.mitre.org/)
- [Exploit Database](https://www.exploit-db.com/)

### Plataformas de Práctica

- [HackTheBox](https://www.hackthebox.com/)
- [TryHackMe](https://tryhackme.com/)
- [PortSwigger Web Security Academy](https://portswigger.net/web-security)
- [PentesterLab](https://pentesterlab.com/)

### Herramientas

- [Burp Suite](https://portswigger.net/burp)
- [OWASP ZAP](https://www.zaproxy.org/)
- [SQLMap](https://sqlmap.org/)
- [Nmap](https://nmap.org/)

---

## Notas Importantes

⚠️ **Este laboratorio es solo para fines educativos**

- Todas las vulnerabilidades son intencionales
- No contiene datos reales
- Usa el conocimiento de manera ética
- Nunca pruebes estas técnicas en sistemas sin autorización

---

**Última actualización**: Enero 2026
