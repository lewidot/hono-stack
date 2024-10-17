import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { expensesRoute } from './routes/expenses'

const app = new Hono()

app.use(logger())
app.get('/up', (c) => c.json({ message: 'ok' }))

app.route('/api/expenses', expensesRoute)

export default app
