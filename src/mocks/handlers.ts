import { rest } from 'msw';
import { DeleteUserReq } from '../api/modules/user';
import { users_info } from './user_info';
import { User } from '/@/api/modules/user';

// Mock Data
const getUserInfoRest = rest.get('/user_info', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(users_info))
})
const addUserInfoRest = rest.put('/user_info', async (req, res, ctx) => {
  const json = await req.json()
  const user = User.addUserMethod(users_info, json)
  return res(ctx.status(200), ctx.json(await user))
})
const updateUserInfoRest = rest.post('/user_info', async (req, res, ctx) => {
  const json = await req.json()
  const successUpdateUser = User.updateUsersMethod(users_info, json)
  return res(ctx.status(200), ctx.json(successUpdateUser))
})
const deleteUserInfoRest = rest.delete('/user_info', async (req, res, ctx) => {
  const uuids_req: DeleteUserReq = await req.json()
  const successDeletedUsersUuid = User.deleteUserMethod(users_info, uuids_req.ids)
  return res(ctx.status(200), ctx.json(successDeletedUsersUuid))
})
// Define handlers that catch the corresponding requests and returns the mock data.
export const handlers = [
  getUserInfoRest, addUserInfoRest, updateUserInfoRest, deleteUserInfoRest
]