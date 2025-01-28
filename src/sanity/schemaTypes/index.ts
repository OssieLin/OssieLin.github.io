import { type SchemaTypeDefinition } from 'sanity';

// Import individual schema types
import project from '../schemas/project';
import blog from '../schemas/blog';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, blog], // Add the imported schemas to the 'types' array
};
