import { FastifyPluginAsync } from 'fastify'

const handler: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return { path: request.routerPath, date: Date.now() }
  })
}

export default handler
