import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model User
 *
 */
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    firstName: string | null;
    lastName: string | null;
    username: string | null;
    email: string | null;
    profilePicUrl: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    firstName: string | null;
    lastName: string | null;
    username: string | null;
    email: string | null;
    profilePicUrl: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    firstName: number;
    lastName: number;
    username: number;
    email: number;
    profilePicUrl: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
    username?: true;
    email?: true;
    profilePicUrl?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
    username?: true;
    email?: true;
    profilePicUrl?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
    username?: true;
    email?: true;
    profilePicUrl?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    profilePicUrl: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    firstName?: Prisma.StringFilter<"User"> | string;
    lastName?: Prisma.StringFilter<"User"> | string;
    username?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    profilePicUrl?: Prisma.StringNullableFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    Profile?: Prisma.XOR<Prisma.ProfileNullableScalarRelationFilter, Prisma.ProfileWhereInput> | null;
    followers?: Prisma.FollowListRelationFilter;
    following?: Prisma.FollowListRelationFilter;
    pending_req?: Prisma.FollowListRelationFilter;
    likes?: Prisma.LikeListRelationFilter;
    story_views?: Prisma.Story_ViewListRelationFilter;
    saved_post?: Prisma.Saved_PostListRelationFilter;
    blocked?: Prisma.BlockListRelationFilter;
    blocker?: Prisma.BlockListRelationFilter;
    reporter?: Prisma.ReportListRelationFilter;
    reported?: Prisma.ReportListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    profilePicUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    Profile?: Prisma.ProfileOrderByWithRelationInput;
    followers?: Prisma.FollowOrderByRelationAggregateInput;
    following?: Prisma.FollowOrderByRelationAggregateInput;
    pending_req?: Prisma.FollowOrderByRelationAggregateInput;
    likes?: Prisma.LikeOrderByRelationAggregateInput;
    story_views?: Prisma.Story_ViewOrderByRelationAggregateInput;
    saved_post?: Prisma.Saved_PostOrderByRelationAggregateInput;
    blocked?: Prisma.BlockOrderByRelationAggregateInput;
    blocker?: Prisma.BlockOrderByRelationAggregateInput;
    reporter?: Prisma.ReportOrderByRelationAggregateInput;
    reported?: Prisma.ReportOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    username?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    firstName?: Prisma.StringFilter<"User"> | string;
    lastName?: Prisma.StringFilter<"User"> | string;
    profilePicUrl?: Prisma.StringNullableFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    Profile?: Prisma.XOR<Prisma.ProfileNullableScalarRelationFilter, Prisma.ProfileWhereInput> | null;
    followers?: Prisma.FollowListRelationFilter;
    following?: Prisma.FollowListRelationFilter;
    pending_req?: Prisma.FollowListRelationFilter;
    likes?: Prisma.LikeListRelationFilter;
    story_views?: Prisma.Story_ViewListRelationFilter;
    saved_post?: Prisma.Saved_PostListRelationFilter;
    blocked?: Prisma.BlockListRelationFilter;
    blocker?: Prisma.BlockListRelationFilter;
    reporter?: Prisma.ReportListRelationFilter;
    reported?: Prisma.ReportListRelationFilter;
}, "id" | "username" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    profilePicUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    firstName?: Prisma.StringWithAggregatesFilter<"User"> | string;
    lastName?: Prisma.StringWithAggregatesFilter<"User"> | string;
    username?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    profilePicUrl?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    id?: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    profilePicUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    followers?: Prisma.FollowCreateNestedManyWithoutFollowerInput;
    following?: Prisma.FollowCreateNestedManyWithoutFollowingInput;
    pending_req?: Prisma.FollowCreateNestedManyWithoutPending_reqInput;
    likes?: Prisma.LikeCreateNestedManyWithoutUserInput;
    story_views?: Prisma.Story_ViewCreateNestedManyWithoutUserInput;
    saved_post?: Prisma.Saved_PostCreateNestedManyWithoutUserInput;
    blocked?: Prisma.BlockCreateNestedManyWithoutBlockedInput;
    blocker?: Prisma.BlockCreateNestedManyWithoutBlockerInput;
    reporter?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    reported?: Prisma.ReportCreateNestedManyWithoutReportedInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    profilePicUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    followers?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowerInput;
    following?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowingInput;
    pending_req?: Prisma.FollowUncheckedCreateNestedManyWithoutPending_reqInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutUserInput;
    story_views?: Prisma.Story_ViewUncheckedCreateNestedManyWithoutUserInput;
    saved_post?: Prisma.Saved_PostUncheckedCreateNestedManyWithoutUserInput;
    blocked?: Prisma.BlockUncheckedCreateNestedManyWithoutBlockedInput;
    blocker?: Prisma.BlockUncheckedCreateNestedManyWithoutBlockerInput;
    reporter?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    reported?: Prisma.ReportUncheckedCreateNestedManyWithoutReportedInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    profilePicUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    followers?: Prisma.FollowUpdateManyWithoutFollowerNestedInput;
    following?: Prisma.FollowUpdateManyWithoutFollowingNestedInput;
    pending_req?: Prisma.FollowUpdateManyWithoutPending_reqNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutUserNestedInput;
    story_views?: Prisma.Story_ViewUpdateManyWithoutUserNestedInput;
    saved_post?: Prisma.Saved_PostUpdateManyWithoutUserNestedInput;
    blocked?: Prisma.BlockUpdateManyWithoutBlockedNestedInput;
    blocker?: Prisma.BlockUpdateManyWithoutBlockerNestedInput;
    reporter?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    reported?: Prisma.ReportUpdateManyWithoutReportedNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    profilePicUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    followers?: Prisma.FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    following?: Prisma.FollowUncheckedUpdateManyWithoutFollowingNestedInput;
    pending_req?: Prisma.FollowUncheckedUpdateManyWithoutPending_reqNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutUserNestedInput;
    story_views?: Prisma.Story_ViewUncheckedUpdateManyWithoutUserNestedInput;
    saved_post?: Prisma.Saved_PostUncheckedUpdateManyWithoutUserNestedInput;
    blocked?: Prisma.BlockUncheckedUpdateManyWithoutBlockedNestedInput;
    blocker?: Prisma.BlockUncheckedUpdateManyWithoutBlockerNestedInput;
    reporter?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    reported?: Prisma.ReportUncheckedUpdateManyWithoutReportedNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    profilePicUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    profilePicUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    profilePicUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    profilePicUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    profilePicUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    profilePicUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UserCreateNestedOneWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutProfileInput, Prisma.UserUncheckedCreateWithoutProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutProfileInput, Prisma.UserUncheckedCreateWithoutProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutProfileInput;
    upsert?: Prisma.UserUpsertWithoutProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutProfileInput, Prisma.UserUpdateWithoutProfileInput>, Prisma.UserUncheckedUpdateWithoutProfileInput>;
};
export type UserCreateNestedOneWithoutFollowersInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFollowersInput, Prisma.UserUncheckedCreateWithoutFollowersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFollowersInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutFollowingInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFollowingInput, Prisma.UserUncheckedCreateWithoutFollowingInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFollowingInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutPending_reqInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPending_reqInput, Prisma.UserUncheckedCreateWithoutPending_reqInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPending_reqInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutFollowersNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFollowersInput, Prisma.UserUncheckedCreateWithoutFollowersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFollowersInput;
    upsert?: Prisma.UserUpsertWithoutFollowersInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutFollowersInput, Prisma.UserUpdateWithoutFollowersInput>, Prisma.UserUncheckedUpdateWithoutFollowersInput>;
};
export type UserUpdateOneRequiredWithoutFollowingNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFollowingInput, Prisma.UserUncheckedCreateWithoutFollowingInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFollowingInput;
    upsert?: Prisma.UserUpsertWithoutFollowingInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutFollowingInput, Prisma.UserUpdateWithoutFollowingInput>, Prisma.UserUncheckedUpdateWithoutFollowingInput>;
};
export type UserUpdateOneRequiredWithoutPending_reqNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPending_reqInput, Prisma.UserUncheckedCreateWithoutPending_reqInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPending_reqInput;
    upsert?: Prisma.UserUpsertWithoutPending_reqInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutPending_reqInput, Prisma.UserUpdateWithoutPending_reqInput>, Prisma.UserUncheckedUpdateWithoutPending_reqInput>;
};
export type UserCreateNestedOneWithoutLikesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLikesInput, Prisma.UserUncheckedCreateWithoutLikesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLikesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutLikesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLikesInput, Prisma.UserUncheckedCreateWithoutLikesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLikesInput;
    upsert?: Prisma.UserUpsertWithoutLikesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutLikesInput, Prisma.UserUpdateWithoutLikesInput>, Prisma.UserUncheckedUpdateWithoutLikesInput>;
};
export type UserCreateNestedOneWithoutStory_viewsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutStory_viewsInput, Prisma.UserUncheckedCreateWithoutStory_viewsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutStory_viewsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutStory_viewsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutStory_viewsInput, Prisma.UserUncheckedCreateWithoutStory_viewsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutStory_viewsInput;
    upsert?: Prisma.UserUpsertWithoutStory_viewsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutStory_viewsInput, Prisma.UserUpdateWithoutStory_viewsInput>, Prisma.UserUncheckedUpdateWithoutStory_viewsInput>;
};
export type UserCreateNestedOneWithoutSaved_postInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSaved_postInput, Prisma.UserUncheckedCreateWithoutSaved_postInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSaved_postInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSaved_postNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSaved_postInput, Prisma.UserUncheckedCreateWithoutSaved_postInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSaved_postInput;
    upsert?: Prisma.UserUpsertWithoutSaved_postInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSaved_postInput, Prisma.UserUpdateWithoutSaved_postInput>, Prisma.UserUncheckedUpdateWithoutSaved_postInput>;
};
export type UserCreateNestedOneWithoutBlockerInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutBlockerInput, Prisma.UserUncheckedCreateWithoutBlockerInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutBlockerInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutBlockedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutBlockedInput, Prisma.UserUncheckedCreateWithoutBlockedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutBlockedInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutBlockerNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutBlockerInput, Prisma.UserUncheckedCreateWithoutBlockerInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutBlockerInput;
    upsert?: Prisma.UserUpsertWithoutBlockerInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutBlockerInput, Prisma.UserUpdateWithoutBlockerInput>, Prisma.UserUncheckedUpdateWithoutBlockerInput>;
};
export type UserUpdateOneRequiredWithoutBlockedNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutBlockedInput, Prisma.UserUncheckedCreateWithoutBlockedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutBlockedInput;
    upsert?: Prisma.UserUpsertWithoutBlockedInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutBlockedInput, Prisma.UserUpdateWithoutBlockedInput>, Prisma.UserUncheckedUpdateWithoutBlockedInput>;
};
export type UserCreateNestedOneWithoutReporterInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReporterInput, Prisma.UserUncheckedCreateWithoutReporterInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReporterInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutReportedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReportedInput, Prisma.UserUncheckedCreateWithoutReportedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReportedInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutReporterNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReporterInput, Prisma.UserUncheckedCreateWithoutReporterInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReporterInput;
    upsert?: Prisma.UserUpsertWithoutReporterInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutReporterInput, Prisma.UserUpdateWithoutReporterInput>, Prisma.UserUncheckedUpdateWithoutReporterInput>;
};
export type UserUpdateOneWithoutReportedNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReportedInput, Prisma.UserUncheckedCreateWithoutReportedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReportedInput;
    upsert?: Prisma.UserUpsertWithoutReportedInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutReportedInput, Prisma.UserUpdateWithoutReportedInput>, Prisma.UserUncheckedUpdateWithoutReportedInput>;
};
export type UserCreateWithoutProfileInput = {
    id?: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    profilePicUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    followers?: Prisma.FollowCreateNestedManyWithoutFollowerInput;
    following?: Prisma.FollowCreateNestedManyWithoutFollowingInput;
    pending_req?: Prisma.FollowCreateNestedManyWithoutPending_reqInput;
    likes?: Prisma.LikeCreateNestedManyWithoutUserInput;
    story_views?: Prisma.Story_ViewCreateNestedManyWithoutUserInput;
    saved_post?: Prisma.Saved_PostCreateNestedManyWithoutUserInput;
    blocked?: Prisma.BlockCreateNestedManyWithoutBlockedInput;
    blocker?: Prisma.BlockCreateNestedManyWithoutBlockerInput;
    reporter?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    reported?: Prisma.ReportCreateNestedManyWithoutReportedInput;
};
export type UserUncheckedCreateWithoutProfileInput = {
    id?: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    profilePicUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    followers?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowerInput;
    following?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowingInput;
    pending_req?: Prisma.FollowUncheckedCreateNestedManyWithoutPending_reqInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutUserInput;
    story_views?: Prisma.Story_ViewUncheckedCreateNestedManyWithoutUserInput;
    saved_post?: Prisma.Saved_PostUncheckedCreateNestedManyWithoutUserInput;
    blocked?: Prisma.BlockUncheckedCreateNestedManyWithoutBlockedInput;
    blocker?: Prisma.BlockUncheckedCreateNestedManyWithoutBlockerInput;
    reporter?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    reported?: Prisma.ReportUncheckedCreateNestedManyWithoutReportedInput;
};
export type UserCreateOrConnectWithoutProfileInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutProfileInput, Prisma.UserUncheckedCreateWithoutProfileInput>;
};
export type UserUpsertWithoutProfileInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutProfileInput, Prisma.UserUncheckedUpdateWithoutProfileInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutProfileInput, Prisma.UserUncheckedCreateWithoutProfileInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutProfileInput, Prisma.UserUncheckedUpdateWithoutProfileInput>;
};
export type UserUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    profilePicUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    followers?: Prisma.FollowUpdateManyWithoutFollowerNestedInput;
    following?: Prisma.FollowUpdateManyWithoutFollowingNestedInput;
    pending_req?: Prisma.FollowUpdateManyWithoutPending_reqNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutUserNestedInput;
    story_views?: Prisma.Story_ViewUpdateManyWithoutUserNestedInput;
    saved_post?: Prisma.Saved_PostUpdateManyWithoutUserNestedInput;
    blocked?: Prisma.BlockUpdateManyWithoutBlockedNestedInput;
    blocker?: Prisma.BlockUpdateManyWithoutBlockerNestedInput;
    reporter?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    reported?: Prisma.ReportUpdateManyWithoutReportedNestedInput;
};
export type UserUncheckedUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    profilePicUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    followers?: Prisma.FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    following?: Prisma.FollowUncheckedUpdateManyWithoutFollowingNestedInput;
    pending_req?: Prisma.FollowUncheckedUpdateManyWithoutPending_reqNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutUserNestedInput;
    story_views?: Prisma.Story_ViewUncheckedUpdateManyWithoutUserNestedInput;
    saved_post?: Prisma.Saved_PostUncheckedUpdateManyWithoutUserNestedInput;
    blocked?: Prisma.BlockUncheckedUpdateManyWithoutBlockedNestedInput;
    blocker?: Prisma.BlockUncheckedUpdateManyWithoutBlockerNestedInput;
    reporter?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    reported?: Prisma.ReportUncheckedUpdateManyWithoutReportedNestedInput;
};
export type UserCreateWithoutFollowersInput = {
    id?: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    profilePicUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    following?: Prisma.FollowCreateNestedManyWithoutFollowingInput;
    pending_req?: Prisma.FollowCreateNestedManyWithoutPending_reqInput;
    likes?: Prisma.LikeCreateNestedManyWithoutUserInput;
    story_views?: Prisma.Story_ViewCreateNestedManyWithoutUserInput;
    saved_post?: Prisma.Saved_PostCreateNestedManyWithoutUserInput;
    blocked?: Prisma.BlockCreateNestedManyWithoutBlockedInput;
    blocker?: Prisma.BlockCreateNestedManyWithoutBlockerInput;
    reporter?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    reported?: Prisma.ReportCreateNestedManyWithoutReportedInput;
};
export type UserUncheckedCreateWithoutFollowersInput = {
    id?: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    profilePicUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    following?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowingInput;
    pending_req?: Prisma.FollowUncheckedCreateNestedManyWithoutPending_reqInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutUserInput;
    story_views?: Prisma.Story_ViewUncheckedCreateNestedManyWithoutUserInput;
    saved_post?: Prisma.Saved_PostUncheckedCreateNestedManyWithoutUserInput;
    blocked?: Prisma.BlockUncheckedCreateNestedManyWithoutBlockedInput;
    blocker?: Prisma.BlockUncheckedCreateNestedManyWithoutBlockerInput;
    reporter?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    reported?: Prisma.ReportUncheckedCreateNestedManyWithoutReportedInput;
};
export type UserCreateOrConnectWithoutFollowersInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutFollowersInput, Prisma.UserUncheckedCreateWithoutFollowersInput>;
};
export type UserCreateWithoutFollowingInput = {
    id?: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    profilePicUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    followers?: Prisma.FollowCreateNestedManyWithoutFollowerInput;
    pending_req?: Prisma.FollowCreateNestedManyWithoutPending_reqInput;
    likes?: Prisma.LikeCreateNestedManyWithoutUserInput;
    story_views?: Prisma.Story_ViewCreateNestedManyWithoutUserInput;
    saved_post?: Prisma.Saved_PostCreateNestedManyWithoutUserInput;
    blocked?: Prisma.BlockCreateNestedManyWithoutBlockedInput;
    blocker?: Prisma.BlockCreateNestedManyWithoutBlockerInput;
    reporter?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    reported?: Prisma.ReportCreateNestedManyWithoutReportedInput;
};
export type UserUncheckedCreateWithoutFollowingInput = {
    id?: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    profilePicUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    followers?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowerInput;
    pending_req?: Prisma.FollowUncheckedCreateNestedManyWithoutPending_reqInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutUserInput;
    story_views?: Prisma.Story_ViewUncheckedCreateNestedManyWithoutUserInput;
    saved_post?: Prisma.Saved_PostUncheckedCreateNestedManyWithoutUserInput;
    blocked?: Prisma.BlockUncheckedCreateNestedManyWithoutBlockedInput;
    blocker?: Prisma.BlockUncheckedCreateNestedManyWithoutBlockerInput;
    reporter?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    reported?: Prisma.ReportUncheckedCreateNestedManyWithoutReportedInput;
};
export type UserCreateOrConnectWithoutFollowingInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutFollowingInput, Prisma.UserUncheckedCreateWithoutFollowingInput>;
};
export type UserCreateWithoutPending_reqInput = {
    id?: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    profilePicUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    followers?: Prisma.FollowCreateNestedManyWithoutFollowerInput;
    following?: Prisma.FollowCreateNestedManyWithoutFollowingInput;
    likes?: Prisma.LikeCreateNestedManyWithoutUserInput;
    story_views?: Prisma.Story_ViewCreateNestedManyWithoutUserInput;
    saved_post?: Prisma.Saved_PostCreateNestedManyWithoutUserInput;
    blocked?: Prisma.BlockCreateNestedManyWithoutBlockedInput;
    blocker?: Prisma.BlockCreateNestedManyWithoutBlockerInput;
    reporter?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    reported?: Prisma.ReportCreateNestedManyWithoutReportedInput;
};
export type UserUncheckedCreateWithoutPending_reqInput = {
    id?: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    profilePicUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    followers?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowerInput;
    following?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowingInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutUserInput;
    story_views?: Prisma.Story_ViewUncheckedCreateNestedManyWithoutUserInput;
    saved_post?: Prisma.Saved_PostUncheckedCreateNestedManyWithoutUserInput;
    blocked?: Prisma.BlockUncheckedCreateNestedManyWithoutBlockedInput;
    blocker?: Prisma.BlockUncheckedCreateNestedManyWithoutBlockerInput;
    reporter?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    reported?: Prisma.ReportUncheckedCreateNestedManyWithoutReportedInput;
};
export type UserCreateOrConnectWithoutPending_reqInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutPending_reqInput, Prisma.UserUncheckedCreateWithoutPending_reqInput>;
};
export type UserUpsertWithoutFollowersInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutFollowersInput, Prisma.UserUncheckedUpdateWithoutFollowersInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutFollowersInput, Prisma.UserUncheckedCreateWithoutFollowersInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutFollowersInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutFollowersInput, Prisma.UserUncheckedUpdateWithoutFollowersInput>;
};
export type UserUpdateWithoutFollowersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    profilePicUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    following?: Prisma.FollowUpdateManyWithoutFollowingNestedInput;
    pending_req?: Prisma.FollowUpdateManyWithoutPending_reqNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutUserNestedInput;
    story_views?: Prisma.Story_ViewUpdateManyWithoutUserNestedInput;
    saved_post?: Prisma.Saved_PostUpdateManyWithoutUserNestedInput;
    blocked?: Prisma.BlockUpdateManyWithoutBlockedNestedInput;
    blocker?: Prisma.BlockUpdateManyWithoutBlockerNestedInput;
    reporter?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    reported?: Prisma.ReportUpdateManyWithoutReportedNestedInput;
};
export type UserUncheckedUpdateWithoutFollowersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    profilePicUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    following?: Prisma.FollowUncheckedUpdateManyWithoutFollowingNestedInput;
    pending_req?: Prisma.FollowUncheckedUpdateManyWithoutPending_reqNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutUserNestedInput;
    story_views?: Prisma.Story_ViewUncheckedUpdateManyWithoutUserNestedInput;
    saved_post?: Prisma.Saved_PostUncheckedUpdateManyWithoutUserNestedInput;
    blocked?: Prisma.BlockUncheckedUpdateManyWithoutBlockedNestedInput;
    blocker?: Prisma.BlockUncheckedUpdateManyWithoutBlockerNestedInput;
    reporter?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    reported?: Prisma.ReportUncheckedUpdateManyWithoutReportedNestedInput;
};
export type UserUpsertWithoutFollowingInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutFollowingInput, Prisma.UserUncheckedUpdateWithoutFollowingInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutFollowingInput, Prisma.UserUncheckedCreateWithoutFollowingInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutFollowingInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutFollowingInput, Prisma.UserUncheckedUpdateWithoutFollowingInput>;
};
export type UserUpdateWithoutFollowingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    profilePicUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    followers?: Prisma.FollowUpdateManyWithoutFollowerNestedInput;
    pending_req?: Prisma.FollowUpdateManyWithoutPending_reqNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutUserNestedInput;
    story_views?: Prisma.Story_ViewUpdateManyWithoutUserNestedInput;
    saved_post?: Prisma.Saved_PostUpdateManyWithoutUserNestedInput;
    blocked?: Prisma.BlockUpdateManyWithoutBlockedNestedInput;
    blocker?: Prisma.BlockUpdateManyWithoutBlockerNestedInput;
    reporter?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    reported?: Prisma.ReportUpdateManyWithoutReportedNestedInput;
};
export type UserUncheckedUpdateWithoutFollowingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    profilePicUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    followers?: Prisma.FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    pending_req?: Prisma.FollowUncheckedUpdateManyWithoutPending_reqNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutUserNestedInput;
    story_views?: Prisma.Story_ViewUncheckedUpdateManyWithoutUserNestedInput;
    saved_post?: Prisma.Saved_PostUncheckedUpdateManyWithoutUserNestedInput;
    blocked?: Prisma.BlockUncheckedUpdateManyWithoutBlockedNestedInput;
    blocker?: Prisma.BlockUncheckedUpdateManyWithoutBlockerNestedInput;
    reporter?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    reported?: Prisma.ReportUncheckedUpdateManyWithoutReportedNestedInput;
};
export type UserUpsertWithoutPending_reqInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutPending_reqInput, Prisma.UserUncheckedUpdateWithoutPending_reqInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutPending_reqInput, Prisma.UserUncheckedCreateWithoutPending_reqInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutPending_reqInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutPending_reqInput, Prisma.UserUncheckedUpdateWithoutPending_reqInput>;
};
export type UserUpdateWithoutPending_reqInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    profilePicUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    followers?: Prisma.FollowUpdateManyWithoutFollowerNestedInput;
    following?: Prisma.FollowUpdateManyWithoutFollowingNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutUserNestedInput;
    story_views?: Prisma.Story_ViewUpdateManyWithoutUserNestedInput;
    saved_post?: Prisma.Saved_PostUpdateManyWithoutUserNestedInput;
    blocked?: Prisma.BlockUpdateManyWithoutBlockedNestedInput;
    blocker?: Prisma.BlockUpdateManyWithoutBlockerNestedInput;
    reporter?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    reported?: Prisma.ReportUpdateManyWithoutReportedNestedInput;
};
export type UserUncheckedUpdateWithoutPending_reqInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    profilePicUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    followers?: Prisma.FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    following?: Prisma.FollowUncheckedUpdateManyWithoutFollowingNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutUserNestedInput;
    story_views?: Prisma.Story_ViewUncheckedUpdateManyWithoutUserNestedInput;
    saved_post?: Prisma.Saved_PostUncheckedUpdateManyWithoutUserNestedInput;
    blocked?: Prisma.BlockUncheckedUpdateManyWithoutBlockedNestedInput;
    blocker?: Prisma.BlockUncheckedUpdateManyWithoutBlockerNestedInput;
    reporter?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    reported?: Prisma.ReportUncheckedUpdateManyWithoutReportedNestedInput;
};
export type UserCreateWithoutLikesInput = {
    id?: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    profilePicUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    followers?: Prisma.FollowCreateNestedManyWithoutFollowerInput;
    following?: Prisma.FollowCreateNestedManyWithoutFollowingInput;
    pending_req?: Prisma.FollowCreateNestedManyWithoutPending_reqInput;
    story_views?: Prisma.Story_ViewCreateNestedManyWithoutUserInput;
    saved_post?: Prisma.Saved_PostCreateNestedManyWithoutUserInput;
    blocked?: Prisma.BlockCreateNestedManyWithoutBlockedInput;
    blocker?: Prisma.BlockCreateNestedManyWithoutBlockerInput;
    reporter?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    reported?: Prisma.ReportCreateNestedManyWithoutReportedInput;
};
export type UserUncheckedCreateWithoutLikesInput = {
    id?: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    profilePicUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    followers?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowerInput;
    following?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowingInput;
    pending_req?: Prisma.FollowUncheckedCreateNestedManyWithoutPending_reqInput;
    story_views?: Prisma.Story_ViewUncheckedCreateNestedManyWithoutUserInput;
    saved_post?: Prisma.Saved_PostUncheckedCreateNestedManyWithoutUserInput;
    blocked?: Prisma.BlockUncheckedCreateNestedManyWithoutBlockedInput;
    blocker?: Prisma.BlockUncheckedCreateNestedManyWithoutBlockerInput;
    reporter?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    reported?: Prisma.ReportUncheckedCreateNestedManyWithoutReportedInput;
};
export type UserCreateOrConnectWithoutLikesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutLikesInput, Prisma.UserUncheckedCreateWithoutLikesInput>;
};
export type UserUpsertWithoutLikesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutLikesInput, Prisma.UserUncheckedUpdateWithoutLikesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutLikesInput, Prisma.UserUncheckedCreateWithoutLikesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutLikesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutLikesInput, Prisma.UserUncheckedUpdateWithoutLikesInput>;
};
export type UserUpdateWithoutLikesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    profilePicUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    followers?: Prisma.FollowUpdateManyWithoutFollowerNestedInput;
    following?: Prisma.FollowUpdateManyWithoutFollowingNestedInput;
    pending_req?: Prisma.FollowUpdateManyWithoutPending_reqNestedInput;
    story_views?: Prisma.Story_ViewUpdateManyWithoutUserNestedInput;
    saved_post?: Prisma.Saved_PostUpdateManyWithoutUserNestedInput;
    blocked?: Prisma.BlockUpdateManyWithoutBlockedNestedInput;
    blocker?: Prisma.BlockUpdateManyWithoutBlockerNestedInput;
    reporter?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    reported?: Prisma.ReportUpdateManyWithoutReportedNestedInput;
};
export type UserUncheckedUpdateWithoutLikesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    profilePicUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    followers?: Prisma.FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    following?: Prisma.FollowUncheckedUpdateManyWithoutFollowingNestedInput;
    pending_req?: Prisma.FollowUncheckedUpdateManyWithoutPending_reqNestedInput;
    story_views?: Prisma.Story_ViewUncheckedUpdateManyWithoutUserNestedInput;
    saved_post?: Prisma.Saved_PostUncheckedUpdateManyWithoutUserNestedInput;
    blocked?: Prisma.BlockUncheckedUpdateManyWithoutBlockedNestedInput;
    blocker?: Prisma.BlockUncheckedUpdateManyWithoutBlockerNestedInput;
    reporter?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    reported?: Prisma.ReportUncheckedUpdateManyWithoutReportedNestedInput;
};
export type UserCreateWithoutStory_viewsInput = {
    id?: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    profilePicUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    followers?: Prisma.FollowCreateNestedManyWithoutFollowerInput;
    following?: Prisma.FollowCreateNestedManyWithoutFollowingInput;
    pending_req?: Prisma.FollowCreateNestedManyWithoutPending_reqInput;
    likes?: Prisma.LikeCreateNestedManyWithoutUserInput;
    saved_post?: Prisma.Saved_PostCreateNestedManyWithoutUserInput;
    blocked?: Prisma.BlockCreateNestedManyWithoutBlockedInput;
    blocker?: Prisma.BlockCreateNestedManyWithoutBlockerInput;
    reporter?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    reported?: Prisma.ReportCreateNestedManyWithoutReportedInput;
};
export type UserUncheckedCreateWithoutStory_viewsInput = {
    id?: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    profilePicUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    followers?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowerInput;
    following?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowingInput;
    pending_req?: Prisma.FollowUncheckedCreateNestedManyWithoutPending_reqInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutUserInput;
    saved_post?: Prisma.Saved_PostUncheckedCreateNestedManyWithoutUserInput;
    blocked?: Prisma.BlockUncheckedCreateNestedManyWithoutBlockedInput;
    blocker?: Prisma.BlockUncheckedCreateNestedManyWithoutBlockerInput;
    reporter?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    reported?: Prisma.ReportUncheckedCreateNestedManyWithoutReportedInput;
};
export type UserCreateOrConnectWithoutStory_viewsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutStory_viewsInput, Prisma.UserUncheckedCreateWithoutStory_viewsInput>;
};
export type UserUpsertWithoutStory_viewsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutStory_viewsInput, Prisma.UserUncheckedUpdateWithoutStory_viewsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutStory_viewsInput, Prisma.UserUncheckedCreateWithoutStory_viewsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutStory_viewsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutStory_viewsInput, Prisma.UserUncheckedUpdateWithoutStory_viewsInput>;
};
export type UserUpdateWithoutStory_viewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    profilePicUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    followers?: Prisma.FollowUpdateManyWithoutFollowerNestedInput;
    following?: Prisma.FollowUpdateManyWithoutFollowingNestedInput;
    pending_req?: Prisma.FollowUpdateManyWithoutPending_reqNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutUserNestedInput;
    saved_post?: Prisma.Saved_PostUpdateManyWithoutUserNestedInput;
    blocked?: Prisma.BlockUpdateManyWithoutBlockedNestedInput;
    blocker?: Prisma.BlockUpdateManyWithoutBlockerNestedInput;
    reporter?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    reported?: Prisma.ReportUpdateManyWithoutReportedNestedInput;
};
export type UserUncheckedUpdateWithoutStory_viewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    profilePicUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    followers?: Prisma.FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    following?: Prisma.FollowUncheckedUpdateManyWithoutFollowingNestedInput;
    pending_req?: Prisma.FollowUncheckedUpdateManyWithoutPending_reqNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutUserNestedInput;
    saved_post?: Prisma.Saved_PostUncheckedUpdateManyWithoutUserNestedInput;
    blocked?: Prisma.BlockUncheckedUpdateManyWithoutBlockedNestedInput;
    blocker?: Prisma.BlockUncheckedUpdateManyWithoutBlockerNestedInput;
    reporter?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    reported?: Prisma.ReportUncheckedUpdateManyWithoutReportedNestedInput;
};
export type UserCreateWithoutSaved_postInput = {
    id?: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    profilePicUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    followers?: Prisma.FollowCreateNestedManyWithoutFollowerInput;
    following?: Prisma.FollowCreateNestedManyWithoutFollowingInput;
    pending_req?: Prisma.FollowCreateNestedManyWithoutPending_reqInput;
    likes?: Prisma.LikeCreateNestedManyWithoutUserInput;
    story_views?: Prisma.Story_ViewCreateNestedManyWithoutUserInput;
    blocked?: Prisma.BlockCreateNestedManyWithoutBlockedInput;
    blocker?: Prisma.BlockCreateNestedManyWithoutBlockerInput;
    reporter?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    reported?: Prisma.ReportCreateNestedManyWithoutReportedInput;
};
export type UserUncheckedCreateWithoutSaved_postInput = {
    id?: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    profilePicUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    followers?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowerInput;
    following?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowingInput;
    pending_req?: Prisma.FollowUncheckedCreateNestedManyWithoutPending_reqInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutUserInput;
    story_views?: Prisma.Story_ViewUncheckedCreateNestedManyWithoutUserInput;
    blocked?: Prisma.BlockUncheckedCreateNestedManyWithoutBlockedInput;
    blocker?: Prisma.BlockUncheckedCreateNestedManyWithoutBlockerInput;
    reporter?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    reported?: Prisma.ReportUncheckedCreateNestedManyWithoutReportedInput;
};
export type UserCreateOrConnectWithoutSaved_postInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSaved_postInput, Prisma.UserUncheckedCreateWithoutSaved_postInput>;
};
export type UserUpsertWithoutSaved_postInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSaved_postInput, Prisma.UserUncheckedUpdateWithoutSaved_postInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSaved_postInput, Prisma.UserUncheckedCreateWithoutSaved_postInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSaved_postInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSaved_postInput, Prisma.UserUncheckedUpdateWithoutSaved_postInput>;
};
export type UserUpdateWithoutSaved_postInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    profilePicUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    followers?: Prisma.FollowUpdateManyWithoutFollowerNestedInput;
    following?: Prisma.FollowUpdateManyWithoutFollowingNestedInput;
    pending_req?: Prisma.FollowUpdateManyWithoutPending_reqNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutUserNestedInput;
    story_views?: Prisma.Story_ViewUpdateManyWithoutUserNestedInput;
    blocked?: Prisma.BlockUpdateManyWithoutBlockedNestedInput;
    blocker?: Prisma.BlockUpdateManyWithoutBlockerNestedInput;
    reporter?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    reported?: Prisma.ReportUpdateManyWithoutReportedNestedInput;
};
export type UserUncheckedUpdateWithoutSaved_postInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    profilePicUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    followers?: Prisma.FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    following?: Prisma.FollowUncheckedUpdateManyWithoutFollowingNestedInput;
    pending_req?: Prisma.FollowUncheckedUpdateManyWithoutPending_reqNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutUserNestedInput;
    story_views?: Prisma.Story_ViewUncheckedUpdateManyWithoutUserNestedInput;
    blocked?: Prisma.BlockUncheckedUpdateManyWithoutBlockedNestedInput;
    blocker?: Prisma.BlockUncheckedUpdateManyWithoutBlockerNestedInput;
    reporter?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    reported?: Prisma.ReportUncheckedUpdateManyWithoutReportedNestedInput;
};
export type UserCreateWithoutBlockerInput = {
    id?: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    profilePicUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    followers?: Prisma.FollowCreateNestedManyWithoutFollowerInput;
    following?: Prisma.FollowCreateNestedManyWithoutFollowingInput;
    pending_req?: Prisma.FollowCreateNestedManyWithoutPending_reqInput;
    likes?: Prisma.LikeCreateNestedManyWithoutUserInput;
    story_views?: Prisma.Story_ViewCreateNestedManyWithoutUserInput;
    saved_post?: Prisma.Saved_PostCreateNestedManyWithoutUserInput;
    blocked?: Prisma.BlockCreateNestedManyWithoutBlockedInput;
    reporter?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    reported?: Prisma.ReportCreateNestedManyWithoutReportedInput;
};
export type UserUncheckedCreateWithoutBlockerInput = {
    id?: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    profilePicUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    followers?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowerInput;
    following?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowingInput;
    pending_req?: Prisma.FollowUncheckedCreateNestedManyWithoutPending_reqInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutUserInput;
    story_views?: Prisma.Story_ViewUncheckedCreateNestedManyWithoutUserInput;
    saved_post?: Prisma.Saved_PostUncheckedCreateNestedManyWithoutUserInput;
    blocked?: Prisma.BlockUncheckedCreateNestedManyWithoutBlockedInput;
    reporter?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    reported?: Prisma.ReportUncheckedCreateNestedManyWithoutReportedInput;
};
export type UserCreateOrConnectWithoutBlockerInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutBlockerInput, Prisma.UserUncheckedCreateWithoutBlockerInput>;
};
export type UserCreateWithoutBlockedInput = {
    id?: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    profilePicUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    followers?: Prisma.FollowCreateNestedManyWithoutFollowerInput;
    following?: Prisma.FollowCreateNestedManyWithoutFollowingInput;
    pending_req?: Prisma.FollowCreateNestedManyWithoutPending_reqInput;
    likes?: Prisma.LikeCreateNestedManyWithoutUserInput;
    story_views?: Prisma.Story_ViewCreateNestedManyWithoutUserInput;
    saved_post?: Prisma.Saved_PostCreateNestedManyWithoutUserInput;
    blocker?: Prisma.BlockCreateNestedManyWithoutBlockerInput;
    reporter?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    reported?: Prisma.ReportCreateNestedManyWithoutReportedInput;
};
export type UserUncheckedCreateWithoutBlockedInput = {
    id?: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    profilePicUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    followers?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowerInput;
    following?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowingInput;
    pending_req?: Prisma.FollowUncheckedCreateNestedManyWithoutPending_reqInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutUserInput;
    story_views?: Prisma.Story_ViewUncheckedCreateNestedManyWithoutUserInput;
    saved_post?: Prisma.Saved_PostUncheckedCreateNestedManyWithoutUserInput;
    blocker?: Prisma.BlockUncheckedCreateNestedManyWithoutBlockerInput;
    reporter?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    reported?: Prisma.ReportUncheckedCreateNestedManyWithoutReportedInput;
};
export type UserCreateOrConnectWithoutBlockedInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutBlockedInput, Prisma.UserUncheckedCreateWithoutBlockedInput>;
};
export type UserUpsertWithoutBlockerInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutBlockerInput, Prisma.UserUncheckedUpdateWithoutBlockerInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutBlockerInput, Prisma.UserUncheckedCreateWithoutBlockerInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutBlockerInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutBlockerInput, Prisma.UserUncheckedUpdateWithoutBlockerInput>;
};
export type UserUpdateWithoutBlockerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    profilePicUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    followers?: Prisma.FollowUpdateManyWithoutFollowerNestedInput;
    following?: Prisma.FollowUpdateManyWithoutFollowingNestedInput;
    pending_req?: Prisma.FollowUpdateManyWithoutPending_reqNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutUserNestedInput;
    story_views?: Prisma.Story_ViewUpdateManyWithoutUserNestedInput;
    saved_post?: Prisma.Saved_PostUpdateManyWithoutUserNestedInput;
    blocked?: Prisma.BlockUpdateManyWithoutBlockedNestedInput;
    reporter?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    reported?: Prisma.ReportUpdateManyWithoutReportedNestedInput;
};
export type UserUncheckedUpdateWithoutBlockerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    profilePicUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    followers?: Prisma.FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    following?: Prisma.FollowUncheckedUpdateManyWithoutFollowingNestedInput;
    pending_req?: Prisma.FollowUncheckedUpdateManyWithoutPending_reqNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutUserNestedInput;
    story_views?: Prisma.Story_ViewUncheckedUpdateManyWithoutUserNestedInput;
    saved_post?: Prisma.Saved_PostUncheckedUpdateManyWithoutUserNestedInput;
    blocked?: Prisma.BlockUncheckedUpdateManyWithoutBlockedNestedInput;
    reporter?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    reported?: Prisma.ReportUncheckedUpdateManyWithoutReportedNestedInput;
};
export type UserUpsertWithoutBlockedInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutBlockedInput, Prisma.UserUncheckedUpdateWithoutBlockedInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutBlockedInput, Prisma.UserUncheckedCreateWithoutBlockedInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutBlockedInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutBlockedInput, Prisma.UserUncheckedUpdateWithoutBlockedInput>;
};
export type UserUpdateWithoutBlockedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    profilePicUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    followers?: Prisma.FollowUpdateManyWithoutFollowerNestedInput;
    following?: Prisma.FollowUpdateManyWithoutFollowingNestedInput;
    pending_req?: Prisma.FollowUpdateManyWithoutPending_reqNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutUserNestedInput;
    story_views?: Prisma.Story_ViewUpdateManyWithoutUserNestedInput;
    saved_post?: Prisma.Saved_PostUpdateManyWithoutUserNestedInput;
    blocker?: Prisma.BlockUpdateManyWithoutBlockerNestedInput;
    reporter?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    reported?: Prisma.ReportUpdateManyWithoutReportedNestedInput;
};
export type UserUncheckedUpdateWithoutBlockedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    profilePicUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    followers?: Prisma.FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    following?: Prisma.FollowUncheckedUpdateManyWithoutFollowingNestedInput;
    pending_req?: Prisma.FollowUncheckedUpdateManyWithoutPending_reqNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutUserNestedInput;
    story_views?: Prisma.Story_ViewUncheckedUpdateManyWithoutUserNestedInput;
    saved_post?: Prisma.Saved_PostUncheckedUpdateManyWithoutUserNestedInput;
    blocker?: Prisma.BlockUncheckedUpdateManyWithoutBlockerNestedInput;
    reporter?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    reported?: Prisma.ReportUncheckedUpdateManyWithoutReportedNestedInput;
};
export type UserCreateWithoutReporterInput = {
    id?: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    profilePicUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    followers?: Prisma.FollowCreateNestedManyWithoutFollowerInput;
    following?: Prisma.FollowCreateNestedManyWithoutFollowingInput;
    pending_req?: Prisma.FollowCreateNestedManyWithoutPending_reqInput;
    likes?: Prisma.LikeCreateNestedManyWithoutUserInput;
    story_views?: Prisma.Story_ViewCreateNestedManyWithoutUserInput;
    saved_post?: Prisma.Saved_PostCreateNestedManyWithoutUserInput;
    blocked?: Prisma.BlockCreateNestedManyWithoutBlockedInput;
    blocker?: Prisma.BlockCreateNestedManyWithoutBlockerInput;
    reported?: Prisma.ReportCreateNestedManyWithoutReportedInput;
};
export type UserUncheckedCreateWithoutReporterInput = {
    id?: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    profilePicUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    followers?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowerInput;
    following?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowingInput;
    pending_req?: Prisma.FollowUncheckedCreateNestedManyWithoutPending_reqInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutUserInput;
    story_views?: Prisma.Story_ViewUncheckedCreateNestedManyWithoutUserInput;
    saved_post?: Prisma.Saved_PostUncheckedCreateNestedManyWithoutUserInput;
    blocked?: Prisma.BlockUncheckedCreateNestedManyWithoutBlockedInput;
    blocker?: Prisma.BlockUncheckedCreateNestedManyWithoutBlockerInput;
    reported?: Prisma.ReportUncheckedCreateNestedManyWithoutReportedInput;
};
export type UserCreateOrConnectWithoutReporterInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutReporterInput, Prisma.UserUncheckedCreateWithoutReporterInput>;
};
export type UserCreateWithoutReportedInput = {
    id?: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    profilePicUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    followers?: Prisma.FollowCreateNestedManyWithoutFollowerInput;
    following?: Prisma.FollowCreateNestedManyWithoutFollowingInput;
    pending_req?: Prisma.FollowCreateNestedManyWithoutPending_reqInput;
    likes?: Prisma.LikeCreateNestedManyWithoutUserInput;
    story_views?: Prisma.Story_ViewCreateNestedManyWithoutUserInput;
    saved_post?: Prisma.Saved_PostCreateNestedManyWithoutUserInput;
    blocked?: Prisma.BlockCreateNestedManyWithoutBlockedInput;
    blocker?: Prisma.BlockCreateNestedManyWithoutBlockerInput;
    reporter?: Prisma.ReportCreateNestedManyWithoutReporterInput;
};
export type UserUncheckedCreateWithoutReportedInput = {
    id?: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    profilePicUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    followers?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowerInput;
    following?: Prisma.FollowUncheckedCreateNestedManyWithoutFollowingInput;
    pending_req?: Prisma.FollowUncheckedCreateNestedManyWithoutPending_reqInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutUserInput;
    story_views?: Prisma.Story_ViewUncheckedCreateNestedManyWithoutUserInput;
    saved_post?: Prisma.Saved_PostUncheckedCreateNestedManyWithoutUserInput;
    blocked?: Prisma.BlockUncheckedCreateNestedManyWithoutBlockedInput;
    blocker?: Prisma.BlockUncheckedCreateNestedManyWithoutBlockerInput;
    reporter?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
};
export type UserCreateOrConnectWithoutReportedInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutReportedInput, Prisma.UserUncheckedCreateWithoutReportedInput>;
};
export type UserUpsertWithoutReporterInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutReporterInput, Prisma.UserUncheckedUpdateWithoutReporterInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutReporterInput, Prisma.UserUncheckedCreateWithoutReporterInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutReporterInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutReporterInput, Prisma.UserUncheckedUpdateWithoutReporterInput>;
};
export type UserUpdateWithoutReporterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    profilePicUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    followers?: Prisma.FollowUpdateManyWithoutFollowerNestedInput;
    following?: Prisma.FollowUpdateManyWithoutFollowingNestedInput;
    pending_req?: Prisma.FollowUpdateManyWithoutPending_reqNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutUserNestedInput;
    story_views?: Prisma.Story_ViewUpdateManyWithoutUserNestedInput;
    saved_post?: Prisma.Saved_PostUpdateManyWithoutUserNestedInput;
    blocked?: Prisma.BlockUpdateManyWithoutBlockedNestedInput;
    blocker?: Prisma.BlockUpdateManyWithoutBlockerNestedInput;
    reported?: Prisma.ReportUpdateManyWithoutReportedNestedInput;
};
export type UserUncheckedUpdateWithoutReporterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    profilePicUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    followers?: Prisma.FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    following?: Prisma.FollowUncheckedUpdateManyWithoutFollowingNestedInput;
    pending_req?: Prisma.FollowUncheckedUpdateManyWithoutPending_reqNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutUserNestedInput;
    story_views?: Prisma.Story_ViewUncheckedUpdateManyWithoutUserNestedInput;
    saved_post?: Prisma.Saved_PostUncheckedUpdateManyWithoutUserNestedInput;
    blocked?: Prisma.BlockUncheckedUpdateManyWithoutBlockedNestedInput;
    blocker?: Prisma.BlockUncheckedUpdateManyWithoutBlockerNestedInput;
    reported?: Prisma.ReportUncheckedUpdateManyWithoutReportedNestedInput;
};
export type UserUpsertWithoutReportedInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutReportedInput, Prisma.UserUncheckedUpdateWithoutReportedInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutReportedInput, Prisma.UserUncheckedCreateWithoutReportedInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutReportedInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutReportedInput, Prisma.UserUncheckedUpdateWithoutReportedInput>;
};
export type UserUpdateWithoutReportedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    profilePicUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    followers?: Prisma.FollowUpdateManyWithoutFollowerNestedInput;
    following?: Prisma.FollowUpdateManyWithoutFollowingNestedInput;
    pending_req?: Prisma.FollowUpdateManyWithoutPending_reqNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutUserNestedInput;
    story_views?: Prisma.Story_ViewUpdateManyWithoutUserNestedInput;
    saved_post?: Prisma.Saved_PostUpdateManyWithoutUserNestedInput;
    blocked?: Prisma.BlockUpdateManyWithoutBlockedNestedInput;
    blocker?: Prisma.BlockUpdateManyWithoutBlockerNestedInput;
    reporter?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
};
export type UserUncheckedUpdateWithoutReportedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    profilePicUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    followers?: Prisma.FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    following?: Prisma.FollowUncheckedUpdateManyWithoutFollowingNestedInput;
    pending_req?: Prisma.FollowUncheckedUpdateManyWithoutPending_reqNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutUserNestedInput;
    story_views?: Prisma.Story_ViewUncheckedUpdateManyWithoutUserNestedInput;
    saved_post?: Prisma.Saved_PostUncheckedUpdateManyWithoutUserNestedInput;
    blocked?: Prisma.BlockUncheckedUpdateManyWithoutBlockedNestedInput;
    blocker?: Prisma.BlockUncheckedUpdateManyWithoutBlockerNestedInput;
    reporter?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
};
/**
 * Count Type UserCountOutputType
 */
export type UserCountOutputType = {
    followers: number;
    following: number;
    pending_req: number;
    likes: number;
    story_views: number;
    saved_post: number;
    blocked: number;
    blocker: number;
    reporter: number;
    reported: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    followers?: boolean | UserCountOutputTypeCountFollowersArgs;
    following?: boolean | UserCountOutputTypeCountFollowingArgs;
    pending_req?: boolean | UserCountOutputTypeCountPending_reqArgs;
    likes?: boolean | UserCountOutputTypeCountLikesArgs;
    story_views?: boolean | UserCountOutputTypeCountStory_viewsArgs;
    saved_post?: boolean | UserCountOutputTypeCountSaved_postArgs;
    blocked?: boolean | UserCountOutputTypeCountBlockedArgs;
    blocker?: boolean | UserCountOutputTypeCountBlockerArgs;
    reporter?: boolean | UserCountOutputTypeCountReporterArgs;
    reported?: boolean | UserCountOutputTypeCountReportedArgs;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountFollowersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FollowWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountFollowingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FollowWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountPending_reqArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FollowWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountLikesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LikeWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountStory_viewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Story_ViewWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountSaved_postArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Saved_PostWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountBlockedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BlockWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountBlockerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BlockWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountReporterArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReportWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountReportedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReportWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    username?: boolean;
    email?: boolean;
    profilePicUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    Profile?: boolean | Prisma.User$ProfileArgs<ExtArgs>;
    followers?: boolean | Prisma.User$followersArgs<ExtArgs>;
    following?: boolean | Prisma.User$followingArgs<ExtArgs>;
    pending_req?: boolean | Prisma.User$pending_reqArgs<ExtArgs>;
    likes?: boolean | Prisma.User$likesArgs<ExtArgs>;
    story_views?: boolean | Prisma.User$story_viewsArgs<ExtArgs>;
    saved_post?: boolean | Prisma.User$saved_postArgs<ExtArgs>;
    blocked?: boolean | Prisma.User$blockedArgs<ExtArgs>;
    blocker?: boolean | Prisma.User$blockerArgs<ExtArgs>;
    reporter?: boolean | Prisma.User$reporterArgs<ExtArgs>;
    reported?: boolean | Prisma.User$reportedArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    username?: boolean;
    email?: boolean;
    profilePicUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    username?: boolean;
    email?: boolean;
    profilePicUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    username?: boolean;
    email?: boolean;
    profilePicUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "firstName" | "lastName" | "username" | "email" | "profilePicUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Profile?: boolean | Prisma.User$ProfileArgs<ExtArgs>;
    followers?: boolean | Prisma.User$followersArgs<ExtArgs>;
    following?: boolean | Prisma.User$followingArgs<ExtArgs>;
    pending_req?: boolean | Prisma.User$pending_reqArgs<ExtArgs>;
    likes?: boolean | Prisma.User$likesArgs<ExtArgs>;
    story_views?: boolean | Prisma.User$story_viewsArgs<ExtArgs>;
    saved_post?: boolean | Prisma.User$saved_postArgs<ExtArgs>;
    blocked?: boolean | Prisma.User$blockedArgs<ExtArgs>;
    blocker?: boolean | Prisma.User$blockerArgs<ExtArgs>;
    reporter?: boolean | Prisma.User$reporterArgs<ExtArgs>;
    reported?: boolean | Prisma.User$reportedArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        Profile: Prisma.$ProfilePayload<ExtArgs> | null;
        followers: Prisma.$FollowPayload<ExtArgs>[];
        following: Prisma.$FollowPayload<ExtArgs>[];
        pending_req: Prisma.$FollowPayload<ExtArgs>[];
        likes: Prisma.$LikePayload<ExtArgs>[];
        story_views: Prisma.$Story_ViewPayload<ExtArgs>[];
        saved_post: Prisma.$Saved_PostPayload<ExtArgs>[];
        blocked: Prisma.$BlockPayload<ExtArgs>[];
        blocker: Prisma.$BlockPayload<ExtArgs>[];
        reporter: Prisma.$ReportPayload<ExtArgs>[];
        reported: Prisma.$ReportPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        firstName: string;
        lastName: string;
        username: string;
        email: string;
        profilePicUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for User.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Profile<T extends Prisma.User$ProfileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$ProfileArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    followers<T extends Prisma.User$followersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$followersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    following<T extends Prisma.User$followingArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$followingArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    pending_req<T extends Prisma.User$pending_reqArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$pending_reqArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    likes<T extends Prisma.User$likesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$likesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    story_views<T extends Prisma.User$story_viewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$story_viewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Story_ViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    saved_post<T extends Prisma.User$saved_postArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$saved_postArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Saved_PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    blocked<T extends Prisma.User$blockedArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$blockedArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    blocker<T extends Prisma.User$blockerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$blockerArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reporter<T extends Prisma.User$reporterArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$reporterArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reported<T extends Prisma.User$reportedArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$reportedArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the User model
 */
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly firstName: Prisma.FieldRef<"User", 'String'>;
    readonly lastName: Prisma.FieldRef<"User", 'String'>;
    readonly username: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly profilePicUrl: Prisma.FieldRef<"User", 'String'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
/**
 * User findUnique
 */
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findUniqueOrThrow
 */
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findFirst
 */
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findFirstOrThrow
 */
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findMany
 */
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User create
 */
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
/**
 * User createMany
 */
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User createManyAndReturn
 */
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User update
 */
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User updateMany
 */
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User updateManyAndReturn
 */
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User upsert
 */
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: Prisma.UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
/**
 * User delete
 */
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User deleteMany
 */
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
};
/**
 * User.Profile
 */
export type User$ProfileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Profile
     */
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where?: Prisma.ProfileWhereInput;
};
/**
 * User.followers
 */
export type User$followersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: Prisma.FollowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Follow
     */
    omit?: Prisma.FollowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FollowInclude<ExtArgs> | null;
    where?: Prisma.FollowWhereInput;
    orderBy?: Prisma.FollowOrderByWithRelationInput | Prisma.FollowOrderByWithRelationInput[];
    cursor?: Prisma.FollowWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FollowScalarFieldEnum | Prisma.FollowScalarFieldEnum[];
};
/**
 * User.following
 */
export type User$followingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: Prisma.FollowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Follow
     */
    omit?: Prisma.FollowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FollowInclude<ExtArgs> | null;
    where?: Prisma.FollowWhereInput;
    orderBy?: Prisma.FollowOrderByWithRelationInput | Prisma.FollowOrderByWithRelationInput[];
    cursor?: Prisma.FollowWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FollowScalarFieldEnum | Prisma.FollowScalarFieldEnum[];
};
/**
 * User.pending_req
 */
export type User$pending_reqArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: Prisma.FollowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Follow
     */
    omit?: Prisma.FollowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FollowInclude<ExtArgs> | null;
    where?: Prisma.FollowWhereInput;
    orderBy?: Prisma.FollowOrderByWithRelationInput | Prisma.FollowOrderByWithRelationInput[];
    cursor?: Prisma.FollowWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FollowScalarFieldEnum | Prisma.FollowScalarFieldEnum[];
};
/**
 * User.likes
 */
export type User$likesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: Prisma.LikeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Like
     */
    omit?: Prisma.LikeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LikeInclude<ExtArgs> | null;
    where?: Prisma.LikeWhereInput;
    orderBy?: Prisma.LikeOrderByWithRelationInput | Prisma.LikeOrderByWithRelationInput[];
    cursor?: Prisma.LikeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LikeScalarFieldEnum | Prisma.LikeScalarFieldEnum[];
};
/**
 * User.story_views
 */
export type User$story_viewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story_View
     */
    select?: Prisma.Story_ViewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Story_View
     */
    omit?: Prisma.Story_ViewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Story_ViewInclude<ExtArgs> | null;
    where?: Prisma.Story_ViewWhereInput;
    orderBy?: Prisma.Story_ViewOrderByWithRelationInput | Prisma.Story_ViewOrderByWithRelationInput[];
    cursor?: Prisma.Story_ViewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Story_ViewScalarFieldEnum | Prisma.Story_ViewScalarFieldEnum[];
};
/**
 * User.saved_post
 */
export type User$saved_postArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_Post
     */
    select?: Prisma.Saved_PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Saved_Post
     */
    omit?: Prisma.Saved_PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Saved_PostInclude<ExtArgs> | null;
    where?: Prisma.Saved_PostWhereInput;
    orderBy?: Prisma.Saved_PostOrderByWithRelationInput | Prisma.Saved_PostOrderByWithRelationInput[];
    cursor?: Prisma.Saved_PostWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Saved_PostScalarFieldEnum | Prisma.Saved_PostScalarFieldEnum[];
};
/**
 * User.blocked
 */
export type User$blockedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: Prisma.BlockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Block
     */
    omit?: Prisma.BlockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BlockInclude<ExtArgs> | null;
    where?: Prisma.BlockWhereInput;
    orderBy?: Prisma.BlockOrderByWithRelationInput | Prisma.BlockOrderByWithRelationInput[];
    cursor?: Prisma.BlockWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BlockScalarFieldEnum | Prisma.BlockScalarFieldEnum[];
};
/**
 * User.blocker
 */
export type User$blockerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: Prisma.BlockSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Block
     */
    omit?: Prisma.BlockOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BlockInclude<ExtArgs> | null;
    where?: Prisma.BlockWhereInput;
    orderBy?: Prisma.BlockOrderByWithRelationInput | Prisma.BlockOrderByWithRelationInput[];
    cursor?: Prisma.BlockWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BlockScalarFieldEnum | Prisma.BlockScalarFieldEnum[];
};
/**
 * User.reporter
 */
export type User$reporterArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: Prisma.ReportSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Report
     */
    omit?: Prisma.ReportOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReportInclude<ExtArgs> | null;
    where?: Prisma.ReportWhereInput;
    orderBy?: Prisma.ReportOrderByWithRelationInput | Prisma.ReportOrderByWithRelationInput[];
    cursor?: Prisma.ReportWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReportScalarFieldEnum | Prisma.ReportScalarFieldEnum[];
};
/**
 * User.reported
 */
export type User$reportedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: Prisma.ReportSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Report
     */
    omit?: Prisma.ReportOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReportInclude<ExtArgs> | null;
    where?: Prisma.ReportWhereInput;
    orderBy?: Prisma.ReportOrderByWithRelationInput | Prisma.ReportOrderByWithRelationInput[];
    cursor?: Prisma.ReportWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReportScalarFieldEnum | Prisma.ReportScalarFieldEnum[];
};
/**
 * User without action
 */
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=User.d.ts.map