import { graphql, rest } from 'msw'
import { UserInfo } from '../api/types'

// Mock Data
export const users_info = JSON.parse('./user_info.json')

const jsonPlaceHolder = graphql.link('https://jsonplaceholder.ir/graphql')
// Define handlers that catch the corresponding requests and returns the mock data.
export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(users_info))
  }),

  jsonPlaceHolder.query('posts', (req, res, ctx) => {
    return res(
      ctx.data({
        users_info
      }),
    )
  }),

]