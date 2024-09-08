import Express, { Application, Request, Response } from 'express'

const express: Application = Express()
const port: number = 3000

express.get('/', (req: Request, res: Response) => {
    res.send('Hello World with 123456!')
})

express.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
