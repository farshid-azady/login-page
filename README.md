# Authentication System

## **Developer:** Farshid Azadi  
**GitHub:** > [https://github.com/farshid-azady/login-page](:📪:farshid.azadi@live.com)

## 1️⃣ Project Description

> A modern authentication system built with Next.js 15, TypeScript, and SCSS modules. This application demonstrates a > > complete login flow with form validation, user data management, and responsive design.

## 2️⃣ Features

- **Modern Authentication Flow**: Login with email, password, and Iranian phone number validation
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Form Validation**: Real-time validation for all input fields
- **User Data Management**: Stores user information in localStorage and Context
- **Protected Routes**: Automatic redirects based on authentication status
- **SCSS Modules**: Organized and maintainable styling
- **TypeScript**: Full type safety throughout the application

## 3️⃣  Technologies Used

- **Next.js 15** (App Router)
- **TypeScript**
- **SCSS Modules**
- **React Context API**
- **Local Storage**

## 4️⃣  Getting Started

### Prerequisites

Make sure you have Node.js installed on your system:
- Node.js 18+ 
- npm or yarn package manager

### Installation

1✔️  **Clone the repository**
   ```bash
>   git clone <your-repository-url>
>  cd login-page
   ```

✔️  **Install dependencies**
   ```bash
  > npm install
   ```

✔️  **Start the development server**
   ```bash
   npm run dev
   ```

✔️  **Open your browser**
>	🔴  Navigate to [http://localhost:3000/auth](http://localhost:3000/auth) 💯

## ⁉️ How to Use

### Login Process

✔️ **Access the login page**: The app automatically redirects to `/auth`
✔️ **Fill in the form**:
   - **Email**: Enter any valid email address (e.g., `test@example.com`)
   - **Password**: Enter any password with 6+ characters (e.g., `password123`)
   - **Iranian Phone Number**: Enter a valid Iranian phone number:
     - Mobile: `09123456789`
     - Landline: `0123456789`
     - International: `+989123456789`
✔️ **Click "Login"**: The system will authenticate and redirect to dashboard
✔️ **Dashboard**: See the welcome message and logout option

### ☎️  Iranian Phone Number Validation

> The system validates these Iranian phone number formats:
- **Mobile numbers**: 11 digits starting with `09`:📱 
- **Landline numbers**: 10 digits starting with `0`☎️ 
- **International format**: 12 digits starting with `+98`

### :🗃️ Project Structure

```
> login-page/
├── app/
│   ├── auth/                 # Login page
│   │   ├── page.tsx         # Auth component
│   │   └── page.module.scss # Auth styles
│   ├── dashboard/           # Dashboard page
│   │   ├── page.tsx         # Dashboard component
│   │   └── page.module.scss # Dashboard styles
│   ├── components/          # Reusable components
│   │   ├── Button/          # Button component
│   │   └── Input/           # Input component
│   ├── context/             # Authentication context
│   │   └── AuthContext.tsx  # User state management
│   ├── types/               # TypeScript definitions
│   │   └── user.ts          # User data types
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page (redirects to auth)
├── public/                  # Static assets
├── api.json                 # Sample user data
└── package.json             # Dependencies
```

## :	🎉  Styling
```

> - The application uses SCSS modules with:
- **Simple design**: Gradient backgrounds and smooth animations
- **Responsive layout**: Mobile-first approach
- **Consistent theming**: Purple gradient color scheme
- **Component-based styling**: :🔔 Each component has its own SCSS module
```

#### 🧱 Development 🧱

> Available Scripts
```
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
```

### > Key Components 🚧

- 🔨**AuthContext**: Manages user authentication state
- 🔨**Button Component**: Reusable button with variants
- 🔨**Input Component**: Form input with validation
- 🔨**Auth Page**: Login form with Iranian phone validation
- 🔨**Dashboard Page**: Protected welcome page

## 🧑‍💻 

>> This project is developed by Farshid Azadi for demonstration purposes. 🧑‍💻

## 🔊 Contact

🏗️ **Developer:** Farshid Azadi  
🧐**Email:** farshid.azadi@live.com

---

*Built with Next.js, TypeScript, and SCSS modules*
