import { FastifyPluginAsync } from 'fastify'

const handler: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return { helloAt: Date.now(), envKey: process.env.KEY }
  })
}

export default handler
