import { baseApi } from "./baseApi";
import { USERS_ENDPOINTS } from "./endpoints";
import { METHODS } from "./method";
/* === MODEL === */
export interface Users {
    id: number;
    f_name: string; //
    l_name: string;//
    phone_number: string;//
    email: string;//
    region:string//
    street:string;//
    house_number:string;//
    date: string; //
    gender: string; //
    merried:string, // 
    passport_series: string; //
    passport_number: string; //
    place_Issue:string;//
    school: string;//
    school_num: string;//
    education: string;//
    graduation_year: string;//
    graduation_year_school: string;//
    parents_name: string;//
    created_at: string;//
    childs: string;//
}

type CreateUser = Omit<Users, "id">;

/* === API === */
export const usersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        /* GET */
        getUsers: builder.query<Users[], void>({
            query: () => ({
                url: USERS_ENDPOINTS.GET_USERS,
            }),
            providesTags: ["users"],
        }),

        // //     /* CREATE */
        createUser: builder.mutation<Users, CreateUser>({
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

        // //     /* DELETE */
        deleteUser: builder.mutation<void, number | number[]>({
            query: (id) => ({
                url: `/rest/v1/users?id=${Array.isArray(id) ? `in.(${id.join(",")})` : `eq.${id}`}`,
                method: METHODS.DELETE,
            }),
            invalidatesTags: ["users"],
        }),

        /* UPDATE ✅ */
        updateUser: builder.mutation<Users, { id: number; data: Partial<Omit<Users, "id">> }>({
            query: ({ id, data }) => ({
                url: `/rest/v1/users?id=eq.${id}`,
                method: METHODS.PUT,
                body: data,
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
    useDeleteUserMutation,
    useUpdateUserMutation,
} = usersApi;
