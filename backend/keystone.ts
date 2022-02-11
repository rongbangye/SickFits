import { createAuth } from '@keystone-next/auth';
import {config, createSchema } from '@keystone-next/keystone/schema';
import { User } from './schemas/User';
import { Product } from './schemas/Product';
import { ProductImage } from './schemas/ProductImage';
import 'dotenv/config';
import {withItemData, statelessSessions} from '@keystone-next/keystone/session';
import { insertSeedData } from './seed-data';

const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

const sessionConfig = {
  maxAage: 60 * 60 * 24 * 360, // how long user stay signed in?
  secret: process.env.COOKIE_SECRET,
}

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    // TODO: Add in inital roles here
  },
  // added password reset mutation 
  passwordResetLink: {
    async sendToken(args) {
      console.log(args)
    }
  }
})


export default withAuth(config({
  // @ts-ignore
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    }
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    // TODO: Add data seeding here
    async onConnect(keystone) {
      console.log("Connected to the database");
      if(process.argv.includes('--seed-data'))
      await insertSeedData(keystone);
    }
  },
  lists: createSchema({
    // Schema items go in here
    User,
    Product,
    ProductImage
  }),
  ui: {
    // TODO: change this for roles
    // Show the UI only for people who pass this test
    isAccessAllowed: ({session}) => {
      // console.log(session)
      return !!session?.data;
    },
  },
  // TODO: Add session values here
  session: withItemData(statelessSessions(sessionConfig), {
    // GraphQL Query

    User: `id name email`,
  })
}))

