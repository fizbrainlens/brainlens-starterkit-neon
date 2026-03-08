# Brainlens Starter Kit - Neon

A modern, full-stack Next.js starter template with Neon PostgreSQL database integration, featuring the latest web development technologies and best practices.

## 🚀 Features

- **Next.js 16** with App Router - React framework for building full-stack applications
- **React 19** - Latest React with Server Components and streaming support
- **TypeScript** - Type-safe development experience
- **Neon PostgreSQL** - Serverless PostgreSQL database with automatic scaling
- **Drizzle ORM** - Type-safe SQL toolkit with excellent TypeScript support
- **Tailwind CSS v4** - Modern utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library built on Radix UI
- **Server Actions** - Type-safe server-side data mutations
- **Form Validation** - React Hook Form with Zod validation
- **Biome** - Fast linter and formatter (ESLint/Prettier replacement)
- **Security** - bcrypt for password hashing and comprehensive error handling

## ✨ Recent Project Updates

This starter kit has been extended with the following features:

- **CRM Backend & API**: Integrated endpoints and database schema for Contacts, Templates, and Campaigns.
- **Quotations & Invoices Flow**: Added an approval workflow for quotations and seamless generation of invoices with precise amount rounding.
- **PIN-Based Authentication**: Implemented a secure OTP/PIN-login UI.
- **Custom UI & Landing Pages**: Built a dynamic Hero section and custom-designed Menu pages matching Figma designs.
- **Agent Skills (SKILLS)**: Integrated `.agents/skills/` containing custom AI assistant tools (like `shadcn` and `find-skills`) which extend the AI's native capabilities for code generation, UI building, and project management directly within the IDE.

## 📋 Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun package manager
- Neon database account (free at [neon.tech](https://neon.tech))

## 🛠 Installation

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd brainlens-starterkit-neon
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Set up environment variables

Copy the environment template and configure your Neon database:

```bash
cp env-sample .env.local
```

Edit `.env.local` with your Neon database connection string:

```env
DATABASE_URL="postgresql://username:password@ep-xxx.us-east-2.aws.neon.tech/dbname?sslmode=require"
```

### 4. Set up the database

Generate and run database migrations:

```bash
npm run db:generate
npm run db:migrate
```

### 5. Start the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
brainlens-starterkit-neon/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout component
│   │   ├── page.tsx           # Home page
│   │   ├── loading.tsx        # Loading component
│   │   └── not-found.tsx      # 404 page
│   ├── components/
│   │   └── ui/                # shadcn/ui components
│   │       ├── button.tsx
│   │       └── DisplayServerActionResponse.tsx
│   ├── db/
│   │   ├── index.ts           # Database connection
│   │   ├── migrate.ts         # Migration runner
│   │   └── date-helper.ts     # Date utilities
│   ├── lib/
│   │   ├── utils.ts           # Utility functions
│   │   └── safe-action.ts     # Server action wrapper
│   └── fonts/
│       └── index.ts           # Font configuration
├── drizzle/                   # Generated migrations
├── components.json            # shadcn/ui configuration
├── drizzle.config.ts          # Drizzle ORM configuration
├── biome.json                 # Biome configuration
├── next.config.ts             # Next.js configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies and scripts
```

## 🗄 Database Schema

The database schema is defined using Drizzle ORM and includes:

- **Users table** - User authentication and profile data
- **Automatic timestamps** - Created at and updated at fields
- **Type-safe migrations** - Database schema versioning

### Database Operations

```bash
# Generate migration files from schema changes
npm run db:generate

# Run migrations on the database
npm run db:migrate

# (Optional) Open Drizzle Studio for database management
npx drizzle-kit studio
```

## 🎨 UI Components

This project uses **shadcn/ui** components built on:

- **Radix UI** - Unstyled, accessible components
- **Tailwind CSS** - Styling and design system
- **Lucide React** - Icon library

### Adding New Components

```bash
npx shadcn-ui@latest add [component-name]
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run Biome linter
- `npm run lint:fix` - Run Biome auto fix linter
- `npm run format` - Format code with Biome
- `npm run db:generate` - Generate database migrations
- `npm run db:migrate` - Run database migrations

## 🔧 Technology Stack

### Core Framework
- **Next.js 16** - Full-stack React framework with App Router
- **React 19** - UI library with Server Components
- **TypeScript** - Static type checking

### Database & ORM
- **Neon PostgreSQL** - Serverless PostgreSQL database
- **Drizzle ORM** - Type-safe SQL database toolkit
- **Drizzle Kit** - Database migration tool

### Styling & UI
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - Component library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library

### Forms & Validation
- **React Hook Form** - Form state management
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Form validation integration

### Development Tools
- **Biome** - Linting, formatting, and more
- **tsx** - TypeScript execution runner

### Security & Utilities
- **bcrypt** - Password hashing
- **next-safe-action** - Type-safe server actions
- **ulid** - Unique identifier generation

## 🚀 Deployment

### Deploy to Vercel

The easiest way to deploy is using [Vercel Platform](https://vercel.com/new):

1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Add your `DATABASE_URL` environment variable
4. Deploy!

### Other Deployment Options

This Next.js application can be deployed to any platform that supports Node.js:

- **AWS Amplify**
- **Netlify** (with serverless functions)
- **Railway**
- **DigitalOcean App Platform**
- **Docker containers**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features
- [Neon Documentation](https://neon.tech/docs) - Learn about Neon PostgreSQL
- [Drizzle ORM Documentation](https://orm.drizzle.team) - Learn about Drizzle ORM
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn about Tailwind CSS
- [shadcn/ui Documentation](https://ui.shadcn.com) - Learn about shadcn/ui components

## 🆘 Support

If you have any questions or run into issues:

1. Check the [documentation](#-learn-more)
2. Search [existing issues](https://github.com/fizbrainlens/brainlens-starterkit-neon/issues)
3. Create a [new issue](https://github.com/fizbrainlens/brainlens-starterkit-neon/issues/new/choose)

---

Built with ❤️ using modern web technologies