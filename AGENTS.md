# Repository Agent Instructions (`fleet-types`)

## Purpose

This package defines reusable base Fleet TypeScript types.

## Rules

1. Base types in `fleet-types` must only include scalar/model-owned fields.
2. Do not add relation fields to base types.
3. Do not add nested related model shapes such as `history?: IFile[]` to base types.
4. If a frontend or endpoint needs enriched relation data, define that as a local response type in the consuming app instead of expanding the shared base type.
5. Follow the nearest existing declaration pattern in `dist/types` for naming and field shape.
