import Express, { Application, Request, Response } from 'express'
import configEnv from './utils/config-env.js'

const express: Application = Express()

express.get('/', (req: Request, res: Response) => {
    res.send('Hello World with 123456!')
})

express.listen(configEnv.BASE_PORT, () => {
    console.log(`Server is running on http://localhost:${configEnv.BASE_PORT}`)
})
