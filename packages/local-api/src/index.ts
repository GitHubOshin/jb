import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'

console.log('before serve')
export const serve = (port: number, filename: string, dir: string) => {
  const app = express()
  const PORT = 3000

  app.use(
    createProxyMiddleware({
      target: `http://127.0.0.1:3000`,
      ws: true,
      logLevel: 'info'
    })
  )

  app.get('/hello', () => console.log('hello world'))

  return new Promise<void>((resolve, reject) => {
    app.listen(port, resolve).on('error', () => {
      reject()
      console.log('port', port, filename, dir)
    })
  })
}
