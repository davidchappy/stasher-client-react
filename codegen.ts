import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8000",
  documents: "src/**/*.graphql",
  generates: {
    "schema.graphql": {
      plugins: ["schema-ast"]
    },
    "src/graphql/generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
        "named-operations-object"
      ],
      config: {
        documentMode: "documentNode"
      }
    }
  }
}

export default config
