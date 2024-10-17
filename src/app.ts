import { Hono } from 'hono'
import { logger } from 'hono/logger'

const app = new Hono()

app.use(logger())
app.get('/up', (c) => c.json({ message: 'ok' }))

export default app
