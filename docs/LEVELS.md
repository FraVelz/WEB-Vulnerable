# Sistema de Niveles - Vulnerable Web

## Filosofía del Sistema

El sistema de niveles está diseñado siguiendo principios pedagógicos:

1. **Progresión gradual**: De conceptos simples a complejos
2. **Enfoque en defensa**: Aprender a proteger, no a atacar
3. **Práctica segura**: Todo en entorno controlado
4. **Buenas prácticas primero**: Siempre mostrar la forma correcta

---

## Resumen de Niveles

| Nivel | Título | Dificultad | Tema Principal |
|-------|--------|------------|----------------|
| 1 | Fundamentos de Seguridad | Básico | OWASP Top 10, conceptos |
| 2 | Validación de Entrada | Básico | Input handling |
| 3 | Autenticación y Sesiones | Intermedio | Auth, sesiones |
| 4 | Control de Acceso | Intermedio | RBAC, autorización |
| 5 | Seguridad Avanzada | Avanzado | Headers, CSP, arquitectura |

---

## Nivel 1: Fundamentos de Seguridad Web

### Información General

- **Categoría**: Introducción
- **Dificultad**: Básico
- **Prerrequisitos**: Ninguno
- **Tiempo estimado**: 30-45 minutos

### Tema de Seguridad

Introducción a los conceptos fundamentales de seguridad web y al framework OWASP.

### Objetivo Educativo

Al completar este nivel, el estudiante debe entender qué son las vulnerabilidades web, 
por qué importa la seguridad, y estar familiarizado con los recursos de OWASP.

### Qué se Aprende

1. **Conceptos fundamentales**
   - Diferencia entre vulnerabilidad, amenaza y riesgo
   - La triada CIA (Confidencialidad, Integridad, Disponibilidad)
   - El principio de defensa en profundidad

2. **OWASP Top 10**
   - Qué es OWASP y su importancia
   - Visión general de las 10 categorías principales
   - Cómo usar OWASP como referencia

3. **Ciclo de desarrollo seguro**
   - Security by Design
   - Shift Left Security
   - Revisiones de código seguro

### Escenario Práctico (Conceptual)

- Quiz interactivo sobre conceptos
- Identificar categorías de vulnerabilidades
- Ejercicio de clasificación de riesgos

---

## Nivel 2: Validación de Entrada

### Información General

- **Categoría**: Input Handling
- **Dificultad**: Básico
- **Prerrequisitos**: Nivel 1
- **Tiempo estimado**: 45-60 minutos

### Tema de Seguridad

Manejo seguro de entrada de usuario: validación y sanitización.

### Objetivo Educativo

Dominar las técnicas de validación del lado del servidor y entender la diferencia 
crítica entre validación (verificar formato) y sanitización (limpiar contenido).

### Qué se Aprende

1. **Nunca confiar en el usuario**
   - Por qué toda entrada es potencialmente maliciosa
   - Ejemplos de entrada inesperada
   - La falacia de validar solo en el cliente

2. **Validación vs Sanitización**
   - Validación: ¿cumple el formato esperado?
   - Sanitización: ¿cómo limpiarlo de forma segura?
   - Cuándo usar cada técnica

3. **Técnicas de defensa**
   - Listas blancas vs listas negras
   - Validación de tipo, longitud, formato, rango
   - Escapado según contexto de salida

### Escenario Práctico (Conceptual)

- Formulario interactivo que muestra validación en tiempo real
- Comparación lado a lado de validación cliente vs servidor
- Demostración visual de escapado de salida

---

## Nivel 3: Autenticación y Sesiones

### Información General

- **Categoría**: Autenticación
- **Dificultad**: Intermedio
- **Prerrequisitos**: Niveles 1 y 2
- **Tiempo estimado**: 60-90 minutos

### Tema de Seguridad

Autenticación robusta y gestión segura de sesiones de usuario.

### Objetivo Educativo

Aprender a implementar sistemas de autenticación seguros y gestionar sesiones 
de forma que minimice el riesgo de compromiso de cuentas.

### Qué se Aprende

1. **Almacenamiento de contraseñas**
   - Por qué nunca almacenar en texto plano
   - Funciones hash criptográficas
   - Salt y su importancia
   - Algoritmos recomendados: bcrypt, Argon2

2. **Gestión de sesiones**
   - Cómo funcionan las sesiones web
   - Tokens de sesión seguros
   - Regeneración tras autenticación
   - Timeout y expiración

3. **Autenticación multi-factor**
   - Factores: algo que sabes/tienes/eres
   - Implementación de MFA
   - Recuperación de cuenta segura

### Escenario Práctico (Conceptual)

- Simulación de login mostrando diferencia entre implementación segura e insegura
- Visualización de cómo se almacenan contraseñas
- Demo de flujo MFA

---

## Nivel 4: Control de Acceso

### Información General

- **Categoría**: Autorización
- **Dificultad**: Intermedio
- **Prerrequisitos**: Niveles 1, 2 y 3
- **Tiempo estimado**: 60-90 minutos

### Tema de Seguridad

Autorización y Control de Acceso Basado en Roles (RBAC).

### Objetivo Educativo

Entender la diferencia entre autenticación y autorización, e implementar 
controles de acceso robustos que prevengan acceso no autorizado.

### Qué se Aprende

1. **Autenticación vs Autorización**
   - Autenticación: ¿quién eres?
   - Autorización: ¿qué puedes hacer?
   - Por qué ambas son necesarias

2. **Control de acceso basado en roles**
   - Definir roles y permisos
   - Asignar roles a usuarios
   - Verificar permisos en cada operación

3. **Prevención de escalación de privilegios**
   - Escalación horizontal vs vertical
   - Referencias indirectas a objetos
   - Verificación en el servidor

### Escenario Práctico (Conceptual)

- Simulación de panel con diferentes roles
- Demostración de qué ocurre sin verificación de autorización
- Ejercicio de diseño de política de acceso

---

## Nivel 5: Seguridad Avanzada

### Información General

- **Categoría**: Avanzado
- **Dificultad**: Avanzado
- **Prerrequisitos**: Niveles 1-4
- **Tiempo estimado**: 90-120 minutos

### Tema de Seguridad

Configuración de seguridad avanzada, headers HTTP y arquitecturas seguras.

### Objetivo Educativo

Dominar la configuración de seguridad a nivel de servidor y aplicación, 
implementando múltiples capas de defensa.

### Qué se Aprende

1. **Headers de seguridad HTTP**
   - Content-Security-Policy (CSP)
   - X-Frame-Options
   - X-Content-Type-Options
   - Strict-Transport-Security (HSTS)
   - Referrer-Policy

2. **Cross-Origin Resource Sharing (CORS)**
   - Qué es y por qué existe
   - Configuración segura
   - Errores comunes

3. **Arquitectura de defensa en profundidad**
   - Rate limiting
   - WAF (Web Application Firewall)
   - Monitoreo y alertas
   - Respuesta a incidentes

### Escenario Práctico (Conceptual)

- Configurador interactivo de CSP
- Analizador de headers de seguridad
- Simulación de rate limiting

---

## Progresión de Desbloqueo

```
Nivel 1 ─────► Nivel 2 ─────► Nivel 3 ─────► Nivel 4 ─────► Nivel 5
(Desbloqueado)

Cada nivel se desbloquea al completar el anterior.
El progreso se guarda automáticamente.
```

## Criterios de Completitud

Para marcar un nivel como completado, el estudiante debe:

1. ✅ Leer todo el material teórico
2. ✅ Completar los ejercicios prácticos
3. ✅ Responder correctamente al quiz final (≥70%)
4. ✅ Demostrar comprensión de las buenas prácticas

---

## Referencias por Nivel

### Nivel 1
- [OWASP Top 10](https://owasp.org/Top10/)
- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)

### Nivel 2
- [OWASP Input Validation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)
- [CWE-20: Improper Input Validation](https://cwe.mitre.org/data/definitions/20.html)

### Nivel 3
- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
- [OWASP Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)

### Nivel 4
- [OWASP Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)
- [CWE-862: Missing Authorization](https://cwe.mitre.org/data/definitions/862.html)

### Nivel 5
- [OWASP Secure Headers Project](https://owasp.org/www-project-secure-headers/)
- [MDN: Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
