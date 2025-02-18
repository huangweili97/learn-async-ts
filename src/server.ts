/**
 * The `allowSyntheticDefaultImports` flag is a TypeScript compiler option that allows default imports from modules that don't have a default export.
 * By default, TypeScript requires modules to have a default export in order to use the default import syntax.
 * However, some modules may not have a default export but still provide a way to import their functionality.
 * Enabling the `allowSyntheticDefaultImports` flag allows TypeScript to treat these modules as if they have a default export, even if they don't.
 * This can be useful when working with third-party libraries or legacy code that doesn't follow the default export convention.
 */
import express from 'express';
import { Request, Response } from 'express';

const app = express();