import configPromise from '@payload-config'
import { getPayload } from 'payload'

/** Temporary: helps debug "error initializing Payload" by surfacing the real error. Remove in production. */
export const GET = async () => {
  try {
    const payload = await getPayload({ config: configPromise })
    return Response.json({ ok: true, message: 'Payload initialized successfully' })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    const cause = err instanceof Error && err.cause ? String(err.cause) : null
    return Response.json(
      {
        ok: false,
        error: message,
        cause: cause,
        hint: getHint(message),
      },
      { status: 500 }
    )
  }
}

function getHint(msg: string): string | null {
  if (msg.includes('PAYLOAD_SECRET') || msg.includes('secret')) return 'Set PAYLOAD_SECRET in Railway Variables'
  if (msg.includes('DATABASE') || msg.includes('connection') || msg.includes('ECONNREFUSED') || msg.includes('connect')) return 'Check DATABASE_URL and that Postgres is running. Railway Postgres may need ?sslmode=require'
  if (msg.includes('auth') || msg.includes('password')) return 'Check DATABASE_URL credentials (user/password)'
  if (msg.includes('timeout') || msg.includes('TIMED OUT')) return 'Database may be unreachable. Check Railway networking.'
  return null
}
