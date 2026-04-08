import { baseApi } from "./baseApi";
import { USERS_ENDPOINTS } from "./endpoints";
import { METHODS } from "./method";
/* === MODEL === */
export interface Users {
    id: number;
    name: string; //
    surname: string;//
    phone_number: string;//
    birth_date: string;//
    gender:string,//
    merried:string,//
    is_married:string,//
    passport_seria:string,//
    passport_number:string,//
    passport_issued_place:string,//
    region:string,//
    city:string,//
    street:string,//
    house_number:string,//
    school_name:string,//
    school_number:string,//
    higher_education_name:string,//
    name_workplace:string,//
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
                url: `${USERS_ENDPOINTS.DELETE_USER}${Array.isArray(id) ? `in.(${id.join(",")})` : `eq.${id}`}`,
                method: METHODS.DELETE,
            }),
            invalidatesTags: ["users"],
        }),

        /* UPDATE ✅ */
        updateUser: builder.mutation<Users, { id: number; data: Partial<Omit<Users, "id">> }>({
            query: ({ id, data }) => ({
                url: `${USERS_ENDPOINTS.UPDATE_USER}${id}`,
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
