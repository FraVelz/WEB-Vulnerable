# Arquitectura Backend - Vulnerable Web

## Descripción General

Este documento describe la arquitectura backend conceptual del laboratorio educativo.
La implementación actual es frontend-only, pero esta guía sirve como referencia para
futuras implementaciones.

---

## Opciones de Implementación

### Opción A: Astro SSR (Recomendada para simplicidad)

```
Ventajas:
- Todo en un solo proyecto
- Menos configuración
- Ideal para proyectos pequeños/medianos

Desventajas:
- Menos flexibilidad para escalar
- Mezcla de responsabilidades
```

### Opción B: API Separada (Node.js/Express)

```
Ventajas:
- Separación clara de responsabilidades
- Más fácil de escalar
- Reutilizable para otros frontends

Desventajas:
- Más complejidad de despliegue
- Requiere gestión de CORS
```

---

## Endpoints API

### Autenticación

```
POST /api/auth/login
Body: { username: string, password: string }
Response: { success: boolean, token?: string, user?: User }

POST /api/auth/logout
Headers: Authorization: Bearer <token>
Response: { success: boolean }

GET /api/auth/session
Headers: Authorization: Bearer <token>
Response: { valid: boolean, user?: User }
```

### Usuarios

```
GET /api/users/me
Headers: Authorization: Bearer <token>
Response: { user: User, progress: Progress[] }

PUT /api/users/me/progress
Headers: Authorization: Bearer <token>
Body: { levelId: number, progress: number, status: string }
Response: { success: boolean }
```

### Niveles

```
GET /api/levels
Response: { levels: Level[] }

GET /api/levels/:id
Response: { level: Level, userProgress?: Progress }

POST /api/levels/:id/complete
Headers: Authorization: Bearer <token>
Response: { success: boolean, nextLevel?: Level }
```

### Laboratorio

```
POST /api/lab/reset
Headers: Authorization: Bearer <token>
Response: { success: boolean }

GET /api/lab/status
Response: { status: 'active' | 'maintenance', version: string }
```

---

## Modelo de Datos

### Usuario

```typescript
interface User {
  id: string;
  username: string;
  email: string;
  passwordHash: string;  // NUNCA almacenar en texto plano
  role: 'student' | 'instructor' | 'admin';
  createdAt: Date;
  lastLoginAt: Date;
  acceptedTermsAt: Date;
}
```

### Progreso

```typescript
interface Progress {
  id: string;
  userId: string;
  levelId: number;
  status: 'locked' | 'available' | 'in_progress' | 'completed';
  progress: number;  // 0-100
  startedAt?: Date;
  completedAt?: Date;
  attempts: number;
}
```

### Sesión

```typescript
interface Session {
  id: string;
  userId: string;
  token: string;
  createdAt: Date;
  expiresAt: Date;
  ipAddress: string;
  userAgent: string;
}
```

---

## Seguridad del Backend

### Autenticación

```typescript
// CORRECTO: Usar bcrypt para hashear contraseñas
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 12;

async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}
```

### Tokens de Sesión

```typescript
// CORRECTO: Usar tokens seguros y aleatorios
import crypto from 'crypto';

function generateSessionToken(): string {
  return crypto.randomBytes(32).toString('hex');
}
```

### Validación de Entrada

```typescript
// CORRECTO: Validar en el servidor
import { z } from 'zod';

const loginSchema = z.object({
  username: z.string().min(3).max(50).regex(/^[a-zA-Z0-9_]+$/),
  password: z.string().min(8).max(100),
});

function validateLogin(data: unknown) {
  return loginSchema.safeParse(data);
}
```

### Rate Limiting

```typescript
// CORRECTO: Limitar intentos de login
const loginAttempts = new Map<string, { count: number; lastAttempt: Date }>();
const MAX_ATTEMPTS = 5;
const LOCKOUT_MINUTES = 15;

function checkRateLimit(ip: string): boolean {
  const record = loginAttempts.get(ip);
  if (!record) return true;
  
  const lockoutEnd = new Date(record.lastAttempt.getTime() + LOCKOUT_MINUTES * 60000);
  if (record.count >= MAX_ATTEMPTS && new Date() < lockoutEnd) {
    return false;
  }
  
  return true;
}
```

---

## Lo que NO debe hacer el Backend

### ❌ Nunca almacenar contraseñas en texto plano

```typescript
// INCORRECTO
const user = { password: req.body.password };

// CORRECTO
const user = { passwordHash: await hashPassword(req.body.password) };
```

### ❌ Nunca confiar en validación del cliente

```typescript
// INCORRECTO
// Solo validar en el frontend

// CORRECTO
// Siempre validar en el servidor también
const result = loginSchema.safeParse(req.body);
if (!result.success) {
  return res.status(400).json({ error: 'Datos inválidos' });
}
```

### ❌ Nunca exponer errores detallados

```typescript
// INCORRECTO
res.status(500).json({ error: err.stack });

// CORRECTO
console.error('Error interno:', err);
res.status(500).json({ error: 'Error interno del servidor' });
```

### ❌ Nunca usar SQL dinámico sin parametrizar

```typescript
// INCORRECTO
const query = `SELECT * FROM users WHERE id = ${userId}`;

// CORRECTO
const query = 'SELECT * FROM users WHERE id = ?';
db.query(query, [userId]);
```

---

## Logging de Seguridad

```typescript
interface SecurityLog {
  timestamp: Date;
  event: 'login_success' | 'login_failure' | 'logout' | 'access_denied' | 'rate_limited';
  userId?: string;
  ip: string;
  userAgent: string;
  details?: string;
}

function logSecurityEvent(log: SecurityLog) {
  // En producción, enviar a sistema de logging centralizado
  console.log(JSON.stringify({
    ...log,
    timestamp: log.timestamp.toISOString(),
  }));
}
```

---

## Base de Datos Recomendada

### Desarrollo

- **SQLite**: Simple, sin configuración, ideal para desarrollo local

### Producción

- **PostgreSQL**: Robusto, seguro, con buen soporte para JSON

### Ejemplo de Esquema SQL

```sql
-- Usuarios
CREATE TABLE users (
  id TEXT PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'student',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login_at TIMESTAMP,
  accepted_terms_at TIMESTAMP
);

-- Sesiones
CREATE TABLE sessions (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users(id) ON DELETE CASCADE,
  token TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  expires_at TIMESTAMP NOT NULL,
  ip_address TEXT,
  user_agent TEXT
);

-- Progreso
CREATE TABLE progress (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users(id) ON DELETE CASCADE,
  level_id INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'locked',
  progress INTEGER DEFAULT 0,
  started_at TIMESTAMP,
  completed_at TIMESTAMP,
  attempts INTEGER DEFAULT 0,
  UNIQUE(user_id, level_id)
);

-- Índices
CREATE INDEX idx_sessions_token ON sessions(token);
CREATE INDEX idx_progress_user ON progress(user_id);
```

---

## Próximos Pasos

1. Elegir opción de implementación (Astro SSR o API separada)
2. Configurar base de datos
3. Implementar endpoints de autenticación
4. Añadir middleware de seguridad
5. Conectar frontend con backend
6. Implementar tests de integración
