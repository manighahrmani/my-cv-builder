# My CV Builder

A React-based CV builder application that allows users to create and customize their professional CVs with an intuitive interface.

## Getting Started

You can run this project in two ways: using Firebase Studio (cloud-based) or locally on your machine.

### Option 1: Firebase Studio (Cloud-based)

Perfect for getting started quickly without any local setup:

1. Go to: [https://idx.google.com](https://idx.google.com)
2. Click on **Import Repo**
3. Paste the GitHub URL: `https://github.com/manighahrmani/my-cv-builder`
4. In the built-in Web Previewer click on the Open in New Window button (top right) to be able to print the CV

### Option 2: Local Development

#### Prerequisites

**For your own machines:**
- [Git](https://git-scm.com/install) (version control)
- [Node.js](https://nodejs.org/en/download) (JavaScript runtime)
- [Visual Studio Code](https://code.visualstudio.com/download) (code editor)

**For University of Portsmouth machines:**
- Launch all applications from [AppsAnywhere](https://appsanywhere.port.ac.uk)

#### Installation & Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/manighahrmani/my-cv-builder.git
   cd my-cv-builder
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to the URL shown in the terminal (typically `http://localhost:5173`)

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check code quality

## Features

- Interactive CV builder interface
- Real-time preview
- Customizable sections and entries
- Modern React components with hooks
- Responsive design

## Development

The app uses Vite for fast development and building. Live reload is enabled by default - save any changes (Ctrl+S / Cmd+S) and the app will automatically refresh in your browser.

## Project Structure

```
src/
├── App.jsx              # Main application component
├── App.css              # App styles
└── components/
    ├── CVHeader.jsx     # CV header component
    ├── CVEntry.jsx      # Individual CV entry
    ├── CVSection.jsx    # CV section wrapper
    └── CVEntryForm.jsx  # Form for adding/editing entries
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational purposes as part of University of Portsmouth coursework.