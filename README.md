# GDSC NCCU Website Frontend

---

## **!!!! Please read this before you start anything !!!!**

## Git Branch Rule

- **`main`**: production branch for deploy, **only allow pull request to merge** from `main_dev` branch.
- **`main_dev`**: development branch for production, **only allow pull request to merge** from `dev_(feature name)` branch or **`fix_(issue name)` branch.
- **`dev_(feature name)`**: development branch for each feature.
  - For a new feature, create a new branch from `main_dev` branch.
  - When the feature is completed, create a pull request to merge into `main_dev` branch.
  - After the pull request is merged, delete the branch.
- **`fix_(issue name)`**: development branch for each issue.
  - For fixing an issue, create a new branch from `main_dev` branch.
  - When the issue is fixed, create a pull request to merge into `main_dev` branch.
  - After the pull request is merged, delete the branch.

## Code Style

Required extensions: `prettier`, `eslint`

- We use `prettier` to format our code. Please install `prettier` extension in your editor.
  - You can also use `pnpm format` to format all code.
- Also, we use `eslint` to check our code. Please install `eslint` extension in your editor.

## Commit Message Rule

We use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) / [約定式提交](https://www.conventionalcommits.org/zh-hant/v1.0.0/) to format our commit message.

```txt
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

- **`feat: (feature name)`**: for new feature.
- **`fix: (issue name)`**: for fixing an issue.
- **`refactor: (feature name)`**: for refactoring code.
- **`ci: (feature name)`**: for CI/CD.
  - For example, add GitHub Actions.
- **`perf: (feature name)`**: for performance.
- **`revert: (feature name)`**: for reverting changes.
- **`style: (feature name)`**: for styling code.
  - Only for styling code like `prettier` working, **not for styling UI**.
- **`test: (feature name)`**: for testing code.
- **`docs: (feature name)`**: for documentation.
  - For example, add README.md.
  - Or, add comments oe JSDoc.
- **`chore: (feature name)`**: for other things.
- **`build: (feature name)`**: for build system.

---

## Getting Started

First, run the development server:

```bash
pnpm dev
```

We **only using [`pnpm`](https://pnpm.js.org/)** to install dependencies as package manager. You can install it with `npm i -g pnpm`.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
