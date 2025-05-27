# Ultra Mobile API Gateway

This a basic scaffold meant to demonstrate a project that serves as an API gateway (a.k.a.;
reverse proxy) to underlying endpoints. The usefulness for this in the enterprise will be explained
separately in a Word document. This is just supplemtnary code to the document.

## Project Folders

| Folder       | Description                             |
| ------------ | --------------------------------------- |
| `app`        | Application files and API routes.       |
| `docker`     | Docker files to stand up dev instances. |
| `public`     | Static files that are public.           |
| `tests`      | Functional tests, mocks, and fixutures. |

_Note, the `tests` directory is for functional tests. Unit tests should reside next to the file
in which they are testing._

## Considerations

Despite the fact that the latest version of LTS version Node supports native TypeScript
transpilation (22), it's still considered
[experiemental](https://nodejs.org/en/learn/typescript/run-natively) until version 23 and the LTS
version is not without issues (enums, etc.).

As such, we're still building with `esbuild` until the next LTS release of Node that will have this
feature marked as stable.
