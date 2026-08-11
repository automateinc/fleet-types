# Fleet Types

##### Reusable TypeScript types and interfaces for Fleet projects.

## Installation

To install the package, use npm:

```bash
npm i @automateinc/fleet-types
```

## Example Usage

```js
import { IAttendance } from "@automateinc/fleet-types";
```

## Generating tRPC Types

When running the CLI from a consuming project such as `fleet-web`, configure the Fleet API source and generated
type destination in that project's `.env`:

```dotenv
FLEET_API_PATH=../fleet-api
FLEET_API_TYPES_PATH=api/types.d.ts
```

Both paths are resolved relative to the directory where the command is run. Generate the declaration from Fleet
API's `AppRouter` with:

```bash
npx @automateinc/fleet-types generate
```

Inside the `fleet-types` repository, `npm run generate:trpc-types` remains available as a convenience alias.
