import app from './src/app'
require('dotenv').config()


app.listen(process.env.PORT,() => {
  console.log(`Server running on http://localhost:${process.env.PORT}`)
})