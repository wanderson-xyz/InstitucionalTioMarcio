# Overview

This is a modern institutional website for "Tio Márcio" school transport service in Fortaleza, Brazil. The website serves parents and guardians looking for safe, reliable school transportation for their children. It features a responsive design with a yellow and black color scheme, built as a full-stack application with React frontend and Express.js backend.

The site includes essential pages like home, about, testimonials, FAQ, and contact, along with WhatsApp integration for easy customer communication. It targets families in specific neighborhoods (Cidade dos Funcionários, Cambeba, Parque del Sol, Seis Bocas) and students from partner schools (Antares, Ari de Sá, Farias Brito, Nova Dimensão, Master).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **Routing**: Wouter for client-side routing (lightweight React Router alternative)
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: Comprehensive set of accessible components using Radix UI primitives
- **Responsive Design**: Mobile-first approach with responsive navigation and layouts

### Backend Architecture  
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints with proper error handling and validation
- **Request Processing**: Express middleware for JSON parsing, CORS, and request logging
- **Development**: Hot reload with Vite integration for seamless development experience

### Data Storage Solutions
- **Database**: PostgreSQL with Neon Database as the cloud provider
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Session Storage**: PostgreSQL-based session storage using connect-pg-simple
- **Data Validation**: Zod for runtime schema validation on both client and server

### Authentication and Authorization
- **User Schema**: Basic user authentication system with username/password
- **Session Management**: Express sessions with PostgreSQL storage
- **Data Validation**: Integrated Zod schemas with Drizzle for type safety
- **Storage Interface**: Abstracted storage layer supporting both memory and database implementations

### External Dependencies
- **Neon Database**: Serverless PostgreSQL database for production data storage
- **Google Analytics**: Client-side analytics integration with environment-based configuration
- **Google Drive**: Video content hosting for institutional videos
- **WhatsApp Business**: Direct messaging integration for customer communication
- **Unsplash**: Image hosting service for gallery and visual content
- **Replit Platform**: Development and deployment environment with specific plugins and configurations

The architecture emphasizes type safety, developer experience, and maintainability while providing a solid foundation for a business website with potential for future scaling and feature additions.