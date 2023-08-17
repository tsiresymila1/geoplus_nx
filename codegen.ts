import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'schema.graphql',
  documents: {
    'schema.graphql': {
      loader: './loader.js',
    },
  },
  generates: {
    'src/gql/graphql.ts': {
      // preset: "client-preset",
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withHooks: true,
        withComponent: false,
        futureProofEnums: true,
      },
      presetConfig: {
        fragmentMasking: false,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  },
};

export default config;
