# Ultra Mobile API

This requires ES 2017 and CSS variables browser support, which means browsers in the past 8 years
approximately. It can be shimmed or polyfilled to support older browsers if necessary.

## Features

* Automated Spellcheck
* EditorConfig Support
* Esbuild Bundling
* Gated Commits (overridden with --no-verify)
* Git Attributes for LFS Support
* Strict NVM and NPM Checks
* VS Code Extension Recommendations
* VS Code Workspace Settings

## Project Folders

| Folder       | Description                             |
| ------------ | --------------------------------------- |
| `app`        | Application pages and API routes.       |
| `components` | Reusable components and HOCs.           |
| `context`    | Context providers.                      |
| `hooks`      | Reusable hooks.                         |
| `locales`    | Localization files.                     |
| `public`     | Static files that are public.           |
| `tests`      | Functional tests, mocks, and fixutures. |
| `tools`      | Ancillary scripts and runners.          |
| `types`      | Reusable project type defintions.       |
| `utility`    | Reusable utility routines.              |

_Note, the `tests` directory is for functional tests. Unit tests should reside next to the file
in which they are testing._

## Considerations

Once Pigment CSS (Zero-Runtime CSS-in-JS) becomes stable enough for the enterprise and compatible
with Turbopack, it should be considered as to remove the runtime performance hit of using styles
via JavaScript.

## Todos

* Add Accessibility Checks via Google Lighthouse (a11y)
* Ensure entire application is fully responsive.
* Add a global state container such as Redux.
* Add unit and functional tests to ensure code continuity.
* Add GitHub Workflow Actions to ensure gated checks are ran on the server.

## Notes

Next.js 15 requires Node.js 18+, but we default the minimum version to the latest LTS
release of 22.15 at the time of this writing, which includes support for things like
`import.meta.dirname`.

Also, the minimum supported version of TypeScript is 4.9 for Material UI 7. However, TypeScript
5.x should be used for projects as a general rule of thumb.

!!!!!!!!!!!!!!!!!!!!!!!!

<https://www.infoq.com/news/2025/03/node-23-runs-typescript-natively/>

do not use native ts node su pport utnil the next lts release
notive still has issues iwth enams and ns
