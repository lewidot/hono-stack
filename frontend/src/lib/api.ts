import { type ApiRoutes } from '../../../src/app'
import { hc } from 'hono/client'

const client = hc<ApiRoutes>('/')

export const api = client.api
