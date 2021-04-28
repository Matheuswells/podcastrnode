import * as express from "express";
import * as fs from 'fs'
import * as path from 'path'

const app = express()
let rawdata = String(fs.readFileSync(path.resolve(__dirname, 'server.json')))
let data = JSON.parse(rawdata);

app.get('/', (req, res) => {
  res.json(data)
})

export default app
