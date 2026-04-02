import { METHODS } from "../../../shared/api/method";
import { authBaseApi } from "./baseApi";
export interface User {
  username: string;
  password: string;
  confirm_password: string;
}

type UserLoginCreate = Omit<User, "confirm_password">;

export const authApi = authBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    userLoginCreate: builder.mutation<UserLoginCreate, UserLoginCreate>({
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