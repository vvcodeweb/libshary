import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import { z } from 'zod';
declare module 'fastify' {
  interface FastifyInstance {
    config: configType;
  }
}
const configSchema = z.object({
  open_library_url: z.string().url(),
  google_books_url: z.string().url(),
  google_books_api_key: z.string().nonempty(),
  redis_url: z.string().url(),
  node_env: z.enum(['development', 'production']),
  grpc_port: z.string(),
});
type configType = z.infer<typeof configSchema>;

async function config(
  fastify: FastifyInstance,
  options: { config: configType },
) {
  const parsedConfig = configSchema.parse(options.config);
  fastify.decorate('config', parsedConfig);
}
export const autoConfig = {
  config: {
    open_library_url: 'https://openlibrary.org/search.json',
    google_books_url: 'https://www.googleapis.com/books/v1',
    google_books_api_key: process.env.GOOGLE_BOOKS_API_KEY,
    redis_url: process.env.REDIS_URL,
    node_env: (process.env.NODE_ENV = 'development'),
    grpc_port: process.env.GRPC_PORT || '50051',
  },
};
export default fp(config, { name: 'config' });
