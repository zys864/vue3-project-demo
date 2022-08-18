import { UserInfo } from "../types";
import { http } from "/@/api/requests";
import { v4 as uuidv4 } from 'uuid';

type Params = {
  from: number;
  pageSize: number;
};
export const getUserInfo = (params: Params = { from: 0, pageSize: 10 }) => {
  return http.get<Params, Array<UserInfo>>("/user_info", params);
};

export type AddUserReq = {
  date: String;
  name: String;
  province?: String;
  city?: String;
  address?: String;
}
export const addUserInfo = (data: AddUserReq): Promise<number> => {
  return http.request("put", "/user_info", { data });
};
export const updateUserInfo = (data: UserInfo) => {
  return http.post<UserInfo, UserInfo>("/user_info", data);
};

export const buikUpdateUserInfo = (data: UserInfo[]) => {
  return http.post<UserInfo[], Array<UserInfo>>("/user_info", data);
};

export type DeleteUserReq = {
  ids: String[]
}
export const deleteUserInfo = (data: DeleteUserReq): Promise<String[]> => {
  return http.request("delete", "/user_info", { data });
};


export namespace User {
  // method

  export const addUserMethod = (users_info: UserInfo[], user_req: AddUserReq) => {
    const uuid = uuidv4()
    const user = {
      uuid: uuid,
      ...user_req
    }
    users_info.push(user)
    return user
  }
  export const updateUsersMethod = (users_info: UserInfo[], user: UserInfo) => {
    for (let item of users_info) {
      if (item.uuid === user.uuid) {
        item = user
        return user
      }
    }
    return null
  }
  export const deleteUserMethod = (users_info: UserInfo[], uuids: String[]) => {
    let successDeletedUsersUuid: String[] = []
    const deleteOneUser = (uuid: String) => {
      for (let i = 0, len = users_info.length; i < len; i++) {
        if (users_info[i].uuid === uuid) {
          users_info.splice(i, 1)
          successDeletedUsersUuid.push(uuid)
        }
      }
    }
    uuids.map((uuid) => deleteOneUser(uuid))
    return successDeletedUsersUuid
  }
}