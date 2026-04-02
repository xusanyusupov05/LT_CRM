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
  username:string,
}

type UserLoginCreate = Omit<User, "confirm_password">;
type ResSingleUser = Omit<ResUser, "token" | "message">;

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
    userLoginGet: builder.query<ResSingleUser, void>({
      query: () => ({
        url: "/get-user",
        method: METHODS.GET,
      }),
      providesTags: ["Auth"], 
    }),
  }),
});

export const { useUserLoginCreateMutation, useUserLoginGetQuery } = authApi;