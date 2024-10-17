import { Hono } from 'hono'

const app = new Hono()

app.get('/up', (c) => c.json({ message: 'ok' }))

export default app
