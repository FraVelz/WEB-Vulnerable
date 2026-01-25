# Guía de Componentes - Vulnerable Web

## 📁 Estructura de Componentes

El proyecto está completamente componentizado para facilitar el mantenimiento y la reutilización de código.

```
src/
├── components/
│   ├── layout/          # Componentes de layout
│   │   ├── Header.astro
│   │   └── Footer.astro
│   │
│   ├── ui/              # Componentes UI reutilizables
│   │   ├── Badge.astro
│   │   ├── DifficultyBadge.astro
│   │   ├── LevelCard.astro
│   │   ├── PageHeader.astro
│   │   ├── ProgressIndicator.astro
│   │   ├── ResetButton.astro
│   │   ├── SearchBar.astro
│   │   └── StatCard.astro
│   │
│   ├── vulnerabilities/ # Componentes de vulnerabilidades
│   │   ├── CategorySection.astro
│   │   └── VulnerabilityCard.astro
│   │
│   ├── ctf/             # Componentes CTF
│   │   └── FlagCard.astro
│   │
│   ├── users/           # Componentes de usuarios
│   │   └── UserTableRow.astro
│   │
│   ├── profile/         # Componentes de perfil
│   │   ├── ProfileStats.astro
│   │   └── UserInfo.astro
│   │
│   ├── settings/        # Componentes de configuración
│   │   ├── SettingsSection.astro
│   │   └── SettingToggle.astro
│   │
│   ├── pages/           # Componentes de páginas específicas
│   │   ├── HeroSection.astro
│   │   └── LoginForm.astro
│   │
│   └── common/          # Componentes comunes
│       ├── EthicalBanner.astro
│       ├── ErrorPage.astro
│       ├── InfoCard.astro
│       └── ResultsHeader.astro
│
├── pages/               # Páginas de la aplicación
│   ├── index.astro
│   ├── login.astro
│   ├── hacking/
│   │   ├── index.astro
│   │   └── _components/
│   │       ├── categories.ts
│   │       └── vulnerabilidades.ts
│   ├── flags.astro
│   ├── profile.astro
│   ├── settings.astro
│   ├── users.astro
│   ├── legal.astro
│   └── 404.astro
│
├── lib/                 # Utilidades y constantes
│   ├── constants.ts
│   ├── levels.ts
│   └── utils.ts
│
└── utils/               # Utilidades adicionales
    ├── flags.ts
    └── utils.ts
```

---

## 🧩 Componentes UI Reutilizables

### StatCard
Tarjeta de estadística con diferentes colores.

```astro
<StatCard 
  value="25" 
  label="Vulnerabilidades" 
  color="gradient" 
/>
```

**Props:**
- `value`: string | number - Valor a mostrar
- `label`: string - Etiqueta descriptiva
- `color`: 'primary' | 'accent' | 'gradient' | 'yellow' | 'green' | 'red'

---

### Badge
Badge con diferentes variantes.

```astro
<Badge text="Activo" variant="success" size="md" />
```

**Props:**
- `text`: string - Texto del badge
- `variant`: 'info' | 'success' | 'warning' | 'danger' | 'locked'
- `size`: 'sm' | 'md'

---

### DifficultyBadge
Badge específico para dificultades de vulnerabilidades.

```astro
<DifficultyBadge difficulty="Intermedio" />
```

**Props:**
- `difficulty`: 'Básico' | 'Intermedio' | 'Avanzado'

---

### SearchBar
Barra de búsqueda reutilizable.

```astro
<SearchBar
  placeholder="Buscar..."
  buttonText="Buscar"
  inputId="search-input"
  buttonId="search-button"
/>
```

---

### PageHeader
Encabezado de página estandarizado.

```astro
<PageHeader
  title="Título de la Página"
  subtitle="Subtítulo descriptivo"
  gradient={true}
/>
```

---

## 🔒 Componentes de Vulnerabilidades

### VulnerabilityCard
Tarjeta individual de vulnerabilidad.

```astro
<VulnerabilityCard
  title="A01: Broken Access Control"
  description="Control de acceso roto..."
  difficulty="Intermedio"
  category="Control de Acceso"
  dataAttributes={{
    'vuln-title': 'a01: broken access control',
    'vuln-description': 'control de acceso roto...',
  }}
/>
```

---

### CategorySection
Sección completa de categoría con todas sus vulnerabilidades.

```astro
<CategorySection
  id="owasp-top10"
  title="OWASP Top 10 2021"
  description="Las 10 vulnerabilidades más críticas"
  vulnerabilities={vulnerabilities}
  summary={summaryText}
/>
```

---

## 🏴 Componentes CTF

### FlagCard
Tarjeta de flag CTF con toda su información.

```astro
<FlagCard
  id="flag-001"
  title="Primera Inyección SQL"
  description="Encuentra la flag explotando..."
  category="Inyección"
  difficulty="Básico"
  points={100}
  status="available"
  hint="Prueba con comillas simples"
/>
```

---

## 👤 Componentes de Usuario

### UserTableRow
Fila de tabla de usuario para administración.

```astro
<UserTableRow
  id="usr_001"
  username="admin"
  email="admin@example.com"
  role="admin"
  status="active"
  flagsCaptured={10}
  vulnerabilitiesCompleted={25}
  points={2500}
  lastLogin="2026-01-20 14:30:00"
  ipAddress="192.168.1.100"
  location="Madrid, ES"
  sessions={2}
  twoFactor={true}
/>
```

---

## 📊 Componentes de Perfil

### ProfileStats
Estadísticas del perfil del usuario.

```astro
<ProfileStats
  flagsCaptured={2}
  totalFlags={10}
  vulnerabilitiesCompleted={3}
  totalVulnerabilities={25}
  points={300}
  totalTime="2h 15m"
/>
```

---

### UserInfo
Información personal del usuario.

```astro
<UserInfo
  username="demo"
  email="lab@example.com"
  role="Local Storage"
  joinedAt="15 de Enero, 2026"
  lastLogin="Hace 2 horas"
  avatar="./logo.webp"
/>
```

---

## ⚙️ Componentes de Configuración

### SettingsSection
Sección de configuración con título.

```astro
<SettingsSection title="Apariencia" iconColor="purple-400">
  <!-- Contenido de la sección -->
</SettingsSection>
```

---

### SettingToggle
Toggle de configuración individual.

```astro
<SettingToggle
  label="Animaciones"
  description="Habilita animaciones y transiciones"
  checked={true}
  iconColor="purple"
/>
```

---

## 📄 Componentes de Páginas

### HeroSection
Sección hero para páginas de inicio.

```astro
<HeroSection
  title="Vulnerable Web"
  subtitle="Aprende sobre seguridad web..."
  primaryCta={{
    text: "Acceder al Laboratorio",
    href: "/login"
  }}
  secondaryCta={{
    text: "Ver Términos",
    href: "/legal"
  }}
/>
```

---

### LoginForm
Formulario de login completo con validación.

```astro
<LoginForm />
```

---

## 🎨 Componentes Comunes

### EthicalBanner
Banner de aviso ético reutilizable.

```astro
<EthicalBanner 
  title="Uso Ético"
  message="Este laboratorio es solo para fines educativos..."
/>
```

---

### ErrorPage
Página de error reutilizable (404, 500, etc.).

```astro
<ErrorPage
  code="404"
  title="Página no encontrada"
  message="La página que buscas no existe..."
  primaryAction={{
    text: "Volver al Inicio",
    href: "/"
  }}
  secondaryAction={{
    text: "Ir al Laboratorio",
    href: "/hacking"
  }}
/>
```

---

### InfoCard
Tarjeta de información genérica.

```astro
<InfoCard title="Documentación" iconColor="lab-primary-400">
  <p>Contenido informativo...</p>
</InfoCard>
```

---

## 📚 Constantes y Utilidades

### constants.ts
Constantes compartidas del proyecto:
- `DIFFICULTY_COLORS`: Colores por dificultad
- `ROLE_COLORS` y `ROLE_LABELS`: Configuración de roles
- `STATUS_COLORS` y `STATUS_LABELS`: Configuración de estados
- `STATUS_CONFIG`: Configuración de badges de estado
- `SYSTEM_INFO`: Información del sistema

---

## 🎯 Uso de Componentes en Páginas

### Ejemplo: Página de Hacking

```astro
---
import Layout from '@/layouts/Layout.astro';
import PageHeader from '@/components/ui/PageHeader.astro';
import SearchBar from '@/components/ui/SearchBar.astro';
import StatCard from '@/components/ui/StatCard.astro';
import CategorySection from '@/components/vulnerabilities/CategorySection.astro';
---

<Layout title="Laboratorio de Vulnerabilidades">
  <div class="container-lab py-8">
    <PageHeader
      title="Laboratorio de Vulnerabilidades Web"
      subtitle="Practica y aprende..."
      gradient={true}
    />
    
    <SearchBar />
    
    <div class="grid grid-cols-4 gap-4">
      <StatCard value={25} label="Vulnerabilidades" color="gradient" />
      <!-- ... -->
    </div>
    
    {categories.map(cat => (
      <CategorySection {...cat} />
    ))}
  </div>
</Layout>
```

---

## ✅ Ventajas de la Componentización

1. **Reutilización**: Los componentes se pueden usar en múltiples páginas
2. **Mantenibilidad**: Cambios en un componente se reflejan en todas las páginas
3. **Consistencia**: Diseño uniforme en toda la aplicación
4. **Organización**: Código más limpio y fácil de navegar
5. **Escalabilidad**: Fácil agregar nuevas funcionalidades

---

## 📝 Notas

- Todos los componentes están tipados con TypeScript
- Los componentes usan las clases CSS del proyecto (Tailwind)
- Los datos se organizan en archivos separados (`_components/`, `lib/`, `utils/`)
- Cada componente tiene su propia documentación en comentarios

---

**Última actualización**: Enero 2026
