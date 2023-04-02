import { DataSource } from 'typeorm'
import express from 'express'
import dotenv from 'dotenv'
import { User } from './entities/Users'
import { Post } from './entities/Post'
dotenv.config()

const main = async () => {
  const dataSource = new DataSource({
    type: 'postgres',
    database: 'reddit',
    username: process.env.DATABASE_USERNAME_DEV,
    password: process.env.DATABASE_PASSWORD_DEV,
    logging: true,
    synchronize: true,
    entities: [User, Post],
  })

  dataSource
    .initialize()
    .then(() => console.log('OK'))
    .catch((e) => console.log(e))

  const app = express()

  app.listen(4000, () => console.log('Start server ok at 4000'))
}

main().catch((e) => console.log(e))
