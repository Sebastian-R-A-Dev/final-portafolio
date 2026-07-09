# Portafolio — Sebastian Ruiz Avila

Portafolio web personal de **Sebastian Ruiz Avila**, Ingeniero de Sistemas y desarrollador Full Stack. Presenta mi perfil profesional, experiencia, proyectos destacados y formas de contacto en un sitio bilingüe (español / inglés).

## ¿Qué es este proyecto?

Es una SPA construida con **Next.js 15** y **next-intl** que funciona como mi carta de presentación digital. El diseño usa un tema oscuro con acentos cyan, animaciones suaves y una experiencia responsive pensada para reclutadores, clientes y colegas del sector tech.

## ¿Qué puedes encontrar?

| Sección | Descripción |
|---------|-------------|
| **Hero** | Presentación con resumen profesional actualizado desde mi CV. |
| **Acerca de mí** | Tarjetas expandibles con experiencia, educación, idiomas y enfoque técnico. Incluye enlace a la hoja de vida en PDF. |
| **Proyectos** | Ecosistema **ArcadeCore**: API backend, login centralizado, English Challenge, Arcade Chat y Admin Dashboard, con links a demo, GitHub y documentación Swagger. |
| **Tecnologías** | Carrusel automático del stack que uso (Java, Node.js, Next.js, AWS, IA, etc.). |
| **Conectemos** | Formulario de contacto, WhatsApp y correo electrónico. |
| **Anexos** | Certificaciones y documentos (diploma, acta de grado, certificado de inglés). |
| **Footer** | Enlaces a LinkedIn, GitHub y WhatsApp. |

## Stack tecnológico

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19, Tailwind CSS v4, Framer Motion
- **i18n:** next-intl (es / en)
- **Iconos:** react-icons
- **Formulario:** getform.io

## Requisitos

- Node.js 18+
- npm

## Instalación y desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). El idioma por defecto es español; puedes cambiar a inglés desde la barra de navegación.

## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Servir build |
| `npm run lint` | ESLint |

## Estructura principal

```
src/app/
├── [locale]/page.tsx      # Página principal
├── components/            # Hero, About, Projects, Skills, Contact, Annexes, Footer
├── globals.css            # Estilos globales y animaciones
messages/
├── es.json                # Traducciones en español
└── en.json                # Traducciones en inglés
public/
└── docs/spanish.pdf       # Hoja de vida (CV)
```

## Contacto

- **Email:** sebastianruizavila47@gmail.com
- **WhatsApp:** +57 300 293 1945
- **LinkedIn:** [sebastian-de-jesus-ruiz-avila](https://www.linkedin.com/in/sebastian-de-jesus-ruiz-avila-050684245/)
- **GitHub:** [Sebastian-R-A-Dev](https://github.com/Sebastian-R-A-Dev)

## Licencia

Proyecto personal. Todos los derechos reservados.
