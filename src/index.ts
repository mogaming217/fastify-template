import autoLoad from '@fastify/autoload'
import Fastify from 'fastify'
import { join } from 'path'

const fastify = Fastify({ logger: false })

fastify.register(autoLoad, {
  dir: join(__dirname, 'routes'),
})

// Start the server
const start = async () => {
  try {
    await fastify.listen({ host: '0.0.0.0', port: Number.parseInt(process.env.PORT || '3000') })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
