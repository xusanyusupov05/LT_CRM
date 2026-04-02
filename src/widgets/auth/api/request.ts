import { METHODS } from "../../../shared/api/method";
import { authBaseApi } from "./baseApi";
export interface User {
  username: string;
  password: string;
  confirm_password: string;
}

export interface ResUser{
  message:string,
  role:string,
  token:string,
  username:User
}

type UserLoginCreate = Omit<User, "confirm_password">;

export const authApi = authBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    userLoginCreate: builder.mutation<ResUser, UserLoginCreate>({
      query: (body) => ({
        url: "/login",
        method: METHODS.POST,
        body,
      }),
      invalidatesTags: ["Auth"], 
    }),
  }),
});

export const { useUserLoginCreateMutation } = authApi;