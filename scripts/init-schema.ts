import 'dotenv/config'
import { getPayload } from 'payload'
import config from '../src/payload.config'

async function main() {
  console.log('Initializing Payload (this will push the schema with lid_ prefix)...')
  const payload = await getPayload({ config })
  console.log('Payload initialized. Schema pushed.')

  // Verify by counting one collection
  const result = await payload.count({ collection: 'media' })
  console.log(`media collection accessible. Count: ${result.totalDocs}`)

  process.exit(0)
}

main().catch((err) => {
  console.error('FAILED:', err)
  process.exit(1)
})
