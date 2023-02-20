import autoLoad from '@fastify/autoload'
import Fastify from 'fastify'
import { join } from 'path'

const fastify = Fastify({ logger: true })

fastify.register(autoLoad, {
  dir: join(__dirname, 'routes'),
})

// Start the server
const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
