[![SemApps](https://badgen.net/badge/Powered%20by/SemApps/28CDFB)](https://semapps.org)

# ActivityPods Data

This LDP server contains two resources which are used by the [ActivityPods](https://github.com/assemblee-virtuelle/activitypods) project:

- PODs providers (used by ActivityPods applications)
- Trusted apps (used by ActivityPods providers)

## Getting started

Requirements:
- Node (v14 recommended)
- Yarn
- Docker and docker-compose (if you wish to run a local middleware)

### Launch the triple store

```bash
docker-compose up -d fuseki
```

### Launch the middleware

```bash
cd middleware
yarn install
yarn run dev
```

Once in [Moleculer REPL](https://moleculer.services/docs/0.14/moleculer-repl.html), you can use these commands to import the formats and POD providers list (you can of course modify it):

```bash
call importers.trusted-apps.freshImport
call importers.pod-providers.freshImport
```

## Linking to SemApps packages (optional)

If you wish to modify packages on the [SemApps repository](https://github.com/assemblee-virtuelle/semapps) and see the changes before they are published, we recommend to use [`yarn link`](https://classic.yarnpkg.com/en/docs/cli/link/).

```bash
cd /SEMAPPS_REPO/src/middleware
yarn run link-all
cd /THIS_REPO
yarn run link-semapps-packages
```
