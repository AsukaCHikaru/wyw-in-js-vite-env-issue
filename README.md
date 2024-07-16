This repository reproduces the [@wyw-in-js/vite](https://github.com/Anber/wyw-in-js) environment variable on deno runtime issue.

1. [Install deno](https://docs.deno.com/runtime/manual/#install-deno)

2. Execute `deno task dev`

3. Access `localhost:5173` from browser

After above steps, an environment variable undefined error will crash the application.

The error is caused by `@wyw-in-js/packages/shared/src/findPackageJSON.ts` L13.

```ts
import { dirname, isAbsolute } from 'path';
import * as process from 'process';

import findUp from 'find-up';

const cache = new Map<string, string | undefined>();

export function findPackageJSON(
  pkgName: string,
  filename: string | null | undefined
) {
  // Jest's resolver does not work properly with `moduleNameMapper` when `paths` are defined
  const isJest = Boolean(process.env.JEST_WORKER_ID);
  ...
```
