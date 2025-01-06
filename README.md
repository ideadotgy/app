# Idea.gy

**Idea.gy** is an AI-powered platform for full-stack web development, inspired by the innovative capabilities of Bolt. Our goal is to help creators bring their ideas to life faster and more efficiently than ever before.

## Features
- **AI-Driven Development**: Leverage powerful AI models to write, debug, and optimize code.
- **Multi-Model Support**: Compatible with a range of AI models, including OpenAI, Anthropic, and more.
- **Seamless Collaboration**: Work collaboratively on projects with integrated tools.
- **Customizable Workflows**: Adapt the platform to suit your development process.
- **Real-Time Code Assistance**: Receive instant suggestions and fixes for your code.

## Getting Started

### Prerequisites
- Node.js (v16 or later)
- `pnpm` package manager (preferred for dependency management)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ideadotgy/ideagy-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ideagy-app
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```

### Configuration
Create a `.env.local` file in the root directory and add your API keys for the AI models you intend to use. Refer to `.env.example` for guidance.

```env
OPENAI_API_KEY=your_openai_api_key
ANTHROPIC_API_KEY=your_anthropic_api_key
```

### Run the Application
Start the development server:
```bash
pnpm run dev
```
Access the app at `http://localhost:5173` in your browser.

## Usage
1. **Start a New Project**: Create and manage full-stack projects directly in your browser.
2. **Enhance Existing Projects**: Import and improve your existing codebases using AI assistance.
3. **Leverage AI Models**: Use advanced models for tasks like debugging, code generation, and optimization.

## Contributing
We welcome contributions from the community! To get started:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## Acknowledgments
Idea.gy is inspired by the groundbreaking work of Bolt, but it stands on its own as an independent and enhanced platform for developers worldwide.