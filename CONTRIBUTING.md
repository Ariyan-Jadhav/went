# 🤝 Contributing to WENT

Thanks for taking the time to contribute. WENT is an evolving platform and good contributions make a real difference.

Please read this guide before opening issues or submitting pull requests.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Commit Convention](#commit-convention)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)

---

## 🧭 Code of Conduct

Be respectful. Be constructive. No harassment, gatekeeping, or bad-faith criticism.
Violations will result in removal from the project.

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm or yarn
- MongoDB instance (local or Atlas)
- PostgreSQL (or NeonDB)

### Local Setup

```bash
# 1. Fork the repo, then clone your fork
git clone https://github.com/your-username/went.git
cd went

# 2. Install dependencies
cd server && npm install
cd ../client && npm install

# 3. Set up environment variables
cp server/.env.example server/.env
# Fill in your values

# 4. Run the dev servers
cd server && npm run dev
cd ../client && npm run dev
```

---

## 🗂 Project Structure

```
went/
├── client/          # React frontend (Vite + TypeScript)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/       # Zustand state
│   │   └── lib/
├── server/          # Node.js backend (Express + TypeScript)
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── bots/        # Breathing Bot logic
│   │   └── lib/
```

---

## 🔄 Development Workflow

1. **Fork** the repository
2. **Create a branch** from `main`:
   ```bash
   git checkout -b feat/your-feature-name
   ```
3. **Make your changes** — keep them focused and minimal
4. **Test** your changes locally before pushing
5. **Push** your branch and open a Pull Request

> Always branch off `main`. Do not push directly to `main`.

---

## ✍️ Commit Convention

WENT follows [Conventional Commits](https://www.conventionalcommits.org/).

```
<type>(<scope>): <short description>
```

### Types

| Type | When to use |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `refactor` | Code change that isn't a fix or feature |
| `style` | Formatting, missing semicolons, etc. |
| `docs` | Documentation only |
| `chore` | Build process, dependencies, config |
| `test` | Adding or updating tests |

### Examples

```bash
feat(bots): add activity cycle scheduler
fix(feed): resolve duplicate thinks on refresh
docs(readme): update tech stack section
chore(deps): upgrade socket.io to v4.7
```

---

## 🔃 Pull Request Guidelines

- Keep PRs **small and focused** — one concern per PR
- Fill out the PR template completely
- Link the related issue (if any): `Closes #42`
- Ensure the app runs without errors before submitting
- Add screenshots or a short demo for UI changes
- Request a review — don't merge your own PR

### PR Title Format

```
feat(scope): what this PR does
```

---

## 🐛 Reporting Bugs

Open a [GitHub Issue](https://github.com/your-username/went/issues) and include:

- **Description** — what went wrong
- **Steps to reproduce** — be specific
- **Expected behavior** — what should have happened
- **Actual behavior** — what actually happened
- **Environment** — OS, Node version, browser
- **Screenshots** — if applicable

---

## 💡 Suggesting Features

Open an issue with the `[Feature Request]` prefix in the title.

Include:
- **Problem** — what gap does this fill?
- **Proposed solution** — how should it work?
- **Alternatives considered** — what else did you think of?

> Feature requests are not guaranteed to be implemented, but all ideas are read.

---

## ❓ Questions

Not sure about something? Open a [Discussion](https://github.com/your-username/went/discussions) instead of an issue.

---

**Happy contributing. 🧠**
