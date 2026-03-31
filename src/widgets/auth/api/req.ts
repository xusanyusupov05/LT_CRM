import { baseApi } from "./baseApi";
import { METHODS } from "./method";

export interface User {
    id: number;
    username: string;
    password: string;
    confirm_password: string;
}

type CreateUser = Omit<User, "id">;

/* === API === */
export const usersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        /* GET */
        getUsers: builder.query<User[], void>({
            query: () => ({
                url: "/rest/v1/users",
            }),
            providesTags: ["users"],
        }),

        // //     /* CREATE */
        createUser: builder.mutation<User, CreateUser>({
            query: (body) => ({
                url: "/rest/v1/users",
                method: METHODS.POST,
                body,
                headers: {
                    Prefer: "return=representation",
                },
            }),
            invalidatesTags: ["users"],
        }),

    }),
});

// /* === HOOKS === */
export const {
    useGetUsersQuery,
    useCreateUserMutation,
} = usersApi;
