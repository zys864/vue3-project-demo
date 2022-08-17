import { UserInfo } from "../types";
import { http } from "/@/api/requests";


type Params = {
  from: number;
  pageSize: number;
};
export const getUserInfo = (params: Params = { from: 0, pageSize: 10 }) => {
  return http.get<Params, Array<UserInfo>>("/user_info", params);
};

export const updateUserInfo = (data: UserInfo) => {
  return http.post<UserInfo, UserInfo>("/user_info", data);
};

export const buikUpdateUserInfo = (data: UserInfo[]) => {
  return http.post<UserInfo[], Array<UserInfo>>("/user_info", data);
};

type DeleteUserReq ={
  ids:number[]
}
export const deleteUserInfo = (data: DeleteUserReq): Promise<number> => {
  return http.request("delete", "/user_info", { data });
};
