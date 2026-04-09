import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Profile
 *
 */
export type ProfileModel = runtime.Types.Result.DefaultSelection<Prisma.$ProfilePayload>;
export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null;
    _min: ProfileMinAggregateOutputType | null;
    _max: ProfileMaxAggregateOutputType | null;
};
export type ProfileMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    bio: string | null;
    gender: string | null;
    profession: string | null;
    location: string | null;
    birthday: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProfileMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    bio: string | null;
    gender: string | null;
    profession: string | null;
    location: string | null;
    birthday: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProfileCountAggregateOutputType = {
    id: number;
    user_id: number;
    bio: number;
    gender: number;
    profession: number;
    location: number;
    hobby: number;
    birthday: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ProfileMinAggregateInputType = {
    id?: true;
    user_id?: true;
    bio?: true;
    gender?: true;
    profession?: true;
    location?: true;
    birthday?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProfileMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    bio?: true;
    gender?: true;
    profession?: true;
    location?: true;
    birthday?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProfileCountAggregateInputType = {
    id?: true;
    user_id?: true;
    bio?: true;
    gender?: true;
    profession?: true;
    location?: true;
    hobby?: true;
    birthday?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ProfileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: Prisma.ProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Profiles to fetch.
     */
    orderBy?: Prisma.ProfileOrderByWithRelationInput | Prisma.ProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Profiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType;
};
export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
    [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProfile[P]> : Prisma.GetScalarType<T[P], AggregateProfile[P]>;
};
export type ProfileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfileWhereInput;
    orderBy?: Prisma.ProfileOrderByWithAggregationInput | Prisma.ProfileOrderByWithAggregationInput[];
    by: Prisma.ProfileScalarFieldEnum[] | Prisma.ProfileScalarFieldEnum;
    having?: Prisma.ProfileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProfileCountAggregateInputType | true;
    _min?: ProfileMinAggregateInputType;
    _max?: ProfileMaxAggregateInputType;
};
export type ProfileGroupByOutputType = {
    id: string;
    user_id: string;
    bio: string | null;
    gender: string;
    profession: string;
    location: string | null;
    hobby: string[];
    birthday: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ProfileCountAggregateOutputType | null;
    _min: ProfileMinAggregateOutputType | null;
    _max: ProfileMaxAggregateOutputType | null;
};
type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProfileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProfileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProfileGroupByOutputType[P]>;
}>>;
export type ProfileWhereInput = {
    AND?: Prisma.ProfileWhereInput | Prisma.ProfileWhereInput[];
    OR?: Prisma.ProfileWhereInput[];
    NOT?: Prisma.ProfileWhereInput | Prisma.ProfileWhereInput[];
    id?: Prisma.StringFilter<"Profile"> | string;
    user_id?: Prisma.StringFilter<"Profile"> | string;
    bio?: Prisma.StringNullableFilter<"Profile"> | string | null;
    gender?: Prisma.StringFilter<"Profile"> | string;
    profession?: Prisma.StringFilter<"Profile"> | string;
    location?: Prisma.StringNullableFilter<"Profile"> | string | null;
    hobby?: Prisma.StringNullableListFilter<"Profile">;
    birthday?: Prisma.DateTimeNullableFilter<"Profile"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Profile"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Profile"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    movies?: Prisma.ProfileMovieListRelationFilter;
    tracks?: Prisma.ProfileTrackListRelationFilter;
    albums?: Prisma.ProfileAlbumListRelationFilter;
    artists?: Prisma.ProfileArtistListRelationFilter;
};
export type ProfileOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    bio?: Prisma.SortOrderInput | Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    profession?: Prisma.SortOrder;
    location?: Prisma.SortOrderInput | Prisma.SortOrder;
    hobby?: Prisma.SortOrder;
    birthday?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    movies?: Prisma.ProfileMovieOrderByRelationAggregateInput;
    tracks?: Prisma.ProfileTrackOrderByRelationAggregateInput;
    albums?: Prisma.ProfileAlbumOrderByRelationAggregateInput;
    artists?: Prisma.ProfileArtistOrderByRelationAggregateInput;
};
export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    user_id?: string;
    AND?: Prisma.ProfileWhereInput | Prisma.ProfileWhereInput[];
    OR?: Prisma.ProfileWhereInput[];
    NOT?: Prisma.ProfileWhereInput | Prisma.ProfileWhereInput[];
    bio?: Prisma.StringNullableFilter<"Profile"> | string | null;
    gender?: Prisma.StringFilter<"Profile"> | string;
    profession?: Prisma.StringFilter<"Profile"> | string;
    location?: Prisma.StringNullableFilter<"Profile"> | string | null;
    hobby?: Prisma.StringNullableListFilter<"Profile">;
    birthday?: Prisma.DateTimeNullableFilter<"Profile"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Profile"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Profile"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    movies?: Prisma.ProfileMovieListRelationFilter;
    tracks?: Prisma.ProfileTrackListRelationFilter;
    albums?: Prisma.ProfileAlbumListRelationFilter;
    artists?: Prisma.ProfileArtistListRelationFilter;
}, "id" | "user_id">;
export type ProfileOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    bio?: Prisma.SortOrderInput | Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    profession?: Prisma.SortOrder;
    location?: Prisma.SortOrderInput | Prisma.SortOrder;
    hobby?: Prisma.SortOrder;
    birthday?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ProfileCountOrderByAggregateInput;
    _max?: Prisma.ProfileMaxOrderByAggregateInput;
    _min?: Prisma.ProfileMinOrderByAggregateInput;
};
export type ProfileScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProfileScalarWhereWithAggregatesInput | Prisma.ProfileScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProfileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProfileScalarWhereWithAggregatesInput | Prisma.ProfileScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Profile"> | string;
    user_id?: Prisma.StringWithAggregatesFilter<"Profile"> | string;
    bio?: Prisma.StringNullableWithAggregatesFilter<"Profile"> | string | null;
    gender?: Prisma.StringWithAggregatesFilter<"Profile"> | string;
    profession?: Prisma.StringWithAggregatesFilter<"Profile"> | string;
    location?: Prisma.StringNullableWithAggregatesFilter<"Profile"> | string | null;
    hobby?: Prisma.StringNullableListFilter<"Profile">;
    birthday?: Prisma.DateTimeNullableWithAggregatesFilter<"Profile"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Profile"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Profile"> | Date | string;
};
export type ProfileCreateInput = {
    id?: string;
    bio?: string | null;
    gender?: string;
    profession?: string;
    location?: string | null;
    hobby?: Prisma.ProfileCreatehobbyInput | string[];
    birthday?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutProfileInput;
    movies?: Prisma.ProfileMovieCreateNestedManyWithoutProfileInput;
    tracks?: Prisma.ProfileTrackCreateNestedManyWithoutProfileInput;
    albums?: Prisma.ProfileAlbumCreateNestedManyWithoutProfileInput;
    artists?: Prisma.ProfileArtistCreateNestedManyWithoutProfileInput;
};
export type ProfileUncheckedCreateInput = {
    id?: string;
    user_id: string;
    bio?: string | null;
    gender?: string;
    profession?: string;
    location?: string | null;
    hobby?: Prisma.ProfileCreatehobbyInput | string[];
    birthday?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movies?: Prisma.ProfileMovieUncheckedCreateNestedManyWithoutProfileInput;
    tracks?: Prisma.ProfileTrackUncheckedCreateNestedManyWithoutProfileInput;
    albums?: Prisma.ProfileAlbumUncheckedCreateNestedManyWithoutProfileInput;
    artists?: Prisma.ProfileArtistUncheckedCreateNestedManyWithoutProfileInput;
};
export type ProfileUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    profession?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hobby?: Prisma.ProfileUpdatehobbyInput | string[];
    birthday?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutProfileNestedInput;
    movies?: Prisma.ProfileMovieUpdateManyWithoutProfileNestedInput;
    tracks?: Prisma.ProfileTrackUpdateManyWithoutProfileNestedInput;
    albums?: Prisma.ProfileAlbumUpdateManyWithoutProfileNestedInput;
    artists?: Prisma.ProfileArtistUpdateManyWithoutProfileNestedInput;
};
export type ProfileUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    profession?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hobby?: Prisma.ProfileUpdatehobbyInput | string[];
    birthday?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    movies?: Prisma.ProfileMovieUncheckedUpdateManyWithoutProfileNestedInput;
    tracks?: Prisma.ProfileTrackUncheckedUpdateManyWithoutProfileNestedInput;
    albums?: Prisma.ProfileAlbumUncheckedUpdateManyWithoutProfileNestedInput;
    artists?: Prisma.ProfileArtistUncheckedUpdateManyWithoutProfileNestedInput;
};
export type ProfileCreateManyInput = {
    id?: string;
    user_id: string;
    bio?: string | null;
    gender?: string;
    profession?: string;
    location?: string | null;
    hobby?: Prisma.ProfileCreatehobbyInput | string[];
    birthday?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProfileUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    profession?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hobby?: Prisma.ProfileUpdatehobbyInput | string[];
    birthday?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    profession?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hobby?: Prisma.ProfileUpdatehobbyInput | string[];
    birthday?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileNullableScalarRelationFilter = {
    is?: Prisma.ProfileWhereInput | null;
    isNot?: Prisma.ProfileWhereInput | null;
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type ProfileCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    profession?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    hobby?: Prisma.SortOrder;
    birthday?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProfileMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    profession?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    birthday?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProfileMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    profession?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    birthday?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProfileScalarRelationFilter = {
    is?: Prisma.ProfileWhereInput;
    isNot?: Prisma.ProfileWhereInput;
};
export type ProfileCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutUserInput, Prisma.ProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.ProfileWhereUniqueInput;
};
export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutUserInput, Prisma.ProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.ProfileWhereUniqueInput;
};
export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutUserInput, Prisma.ProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.ProfileUpsertWithoutUserInput;
    disconnect?: Prisma.ProfileWhereInput | boolean;
    delete?: Prisma.ProfileWhereInput | boolean;
    connect?: Prisma.ProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfileUpdateToOneWithWhereWithoutUserInput, Prisma.ProfileUpdateWithoutUserInput>, Prisma.ProfileUncheckedUpdateWithoutUserInput>;
};
export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutUserInput, Prisma.ProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.ProfileUpsertWithoutUserInput;
    disconnect?: Prisma.ProfileWhereInput | boolean;
    delete?: Prisma.ProfileWhereInput | boolean;
    connect?: Prisma.ProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfileUpdateToOneWithWhereWithoutUserInput, Prisma.ProfileUpdateWithoutUserInput>, Prisma.ProfileUncheckedUpdateWithoutUserInput>;
};
export type ProfileCreatehobbyInput = {
    set: string[];
};
export type ProfileUpdatehobbyInput = {
    set?: string[];
    push?: string | string[];
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type ProfileCreateNestedOneWithoutMoviesInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutMoviesInput, Prisma.ProfileUncheckedCreateWithoutMoviesInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutMoviesInput;
    connect?: Prisma.ProfileWhereUniqueInput;
};
export type ProfileUpdateOneRequiredWithoutMoviesNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutMoviesInput, Prisma.ProfileUncheckedCreateWithoutMoviesInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutMoviesInput;
    upsert?: Prisma.ProfileUpsertWithoutMoviesInput;
    connect?: Prisma.ProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfileUpdateToOneWithWhereWithoutMoviesInput, Prisma.ProfileUpdateWithoutMoviesInput>, Prisma.ProfileUncheckedUpdateWithoutMoviesInput>;
};
export type ProfileCreateNestedOneWithoutTracksInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutTracksInput, Prisma.ProfileUncheckedCreateWithoutTracksInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutTracksInput;
    connect?: Prisma.ProfileWhereUniqueInput;
};
export type ProfileUpdateOneRequiredWithoutTracksNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutTracksInput, Prisma.ProfileUncheckedCreateWithoutTracksInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutTracksInput;
    upsert?: Prisma.ProfileUpsertWithoutTracksInput;
    connect?: Prisma.ProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfileUpdateToOneWithWhereWithoutTracksInput, Prisma.ProfileUpdateWithoutTracksInput>, Prisma.ProfileUncheckedUpdateWithoutTracksInput>;
};
export type ProfileCreateNestedOneWithoutAlbumsInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutAlbumsInput, Prisma.ProfileUncheckedCreateWithoutAlbumsInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutAlbumsInput;
    connect?: Prisma.ProfileWhereUniqueInput;
};
export type ProfileUpdateOneRequiredWithoutAlbumsNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutAlbumsInput, Prisma.ProfileUncheckedCreateWithoutAlbumsInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutAlbumsInput;
    upsert?: Prisma.ProfileUpsertWithoutAlbumsInput;
    connect?: Prisma.ProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfileUpdateToOneWithWhereWithoutAlbumsInput, Prisma.ProfileUpdateWithoutAlbumsInput>, Prisma.ProfileUncheckedUpdateWithoutAlbumsInput>;
};
export type ProfileCreateNestedOneWithoutArtistsInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutArtistsInput, Prisma.ProfileUncheckedCreateWithoutArtistsInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutArtistsInput;
    connect?: Prisma.ProfileWhereUniqueInput;
};
export type ProfileUpdateOneRequiredWithoutArtistsNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutArtistsInput, Prisma.ProfileUncheckedCreateWithoutArtistsInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutArtistsInput;
    upsert?: Prisma.ProfileUpsertWithoutArtistsInput;
    connect?: Prisma.ProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfileUpdateToOneWithWhereWithoutArtistsInput, Prisma.ProfileUpdateWithoutArtistsInput>, Prisma.ProfileUncheckedUpdateWithoutArtistsInput>;
};
export type ProfileCreateWithoutUserInput = {
    id?: string;
    bio?: string | null;
    gender?: string;
    profession?: string;
    location?: string | null;
    hobby?: Prisma.ProfileCreatehobbyInput | string[];
    birthday?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movies?: Prisma.ProfileMovieCreateNestedManyWithoutProfileInput;
    tracks?: Prisma.ProfileTrackCreateNestedManyWithoutProfileInput;
    albums?: Prisma.ProfileAlbumCreateNestedManyWithoutProfileInput;
    artists?: Prisma.ProfileArtistCreateNestedManyWithoutProfileInput;
};
export type ProfileUncheckedCreateWithoutUserInput = {
    id?: string;
    bio?: string | null;
    gender?: string;
    profession?: string;
    location?: string | null;
    hobby?: Prisma.ProfileCreatehobbyInput | string[];
    birthday?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movies?: Prisma.ProfileMovieUncheckedCreateNestedManyWithoutProfileInput;
    tracks?: Prisma.ProfileTrackUncheckedCreateNestedManyWithoutProfileInput;
    albums?: Prisma.ProfileAlbumUncheckedCreateNestedManyWithoutProfileInput;
    artists?: Prisma.ProfileArtistUncheckedCreateNestedManyWithoutProfileInput;
};
export type ProfileCreateOrConnectWithoutUserInput = {
    where: Prisma.ProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutUserInput, Prisma.ProfileUncheckedCreateWithoutUserInput>;
};
export type ProfileUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.ProfileUpdateWithoutUserInput, Prisma.ProfileUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutUserInput, Prisma.ProfileUncheckedCreateWithoutUserInput>;
    where?: Prisma.ProfileWhereInput;
};
export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.ProfileWhereInput;
    data: Prisma.XOR<Prisma.ProfileUpdateWithoutUserInput, Prisma.ProfileUncheckedUpdateWithoutUserInput>;
};
export type ProfileUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    profession?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hobby?: Prisma.ProfileUpdatehobbyInput | string[];
    birthday?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    movies?: Prisma.ProfileMovieUpdateManyWithoutProfileNestedInput;
    tracks?: Prisma.ProfileTrackUpdateManyWithoutProfileNestedInput;
    albums?: Prisma.ProfileAlbumUpdateManyWithoutProfileNestedInput;
    artists?: Prisma.ProfileArtistUpdateManyWithoutProfileNestedInput;
};
export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    profession?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hobby?: Prisma.ProfileUpdatehobbyInput | string[];
    birthday?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    movies?: Prisma.ProfileMovieUncheckedUpdateManyWithoutProfileNestedInput;
    tracks?: Prisma.ProfileTrackUncheckedUpdateManyWithoutProfileNestedInput;
    albums?: Prisma.ProfileAlbumUncheckedUpdateManyWithoutProfileNestedInput;
    artists?: Prisma.ProfileArtistUncheckedUpdateManyWithoutProfileNestedInput;
};
export type ProfileCreateWithoutMoviesInput = {
    id?: string;
    bio?: string | null;
    gender?: string;
    profession?: string;
    location?: string | null;
    hobby?: Prisma.ProfileCreatehobbyInput | string[];
    birthday?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutProfileInput;
    tracks?: Prisma.ProfileTrackCreateNestedManyWithoutProfileInput;
    albums?: Prisma.ProfileAlbumCreateNestedManyWithoutProfileInput;
    artists?: Prisma.ProfileArtistCreateNestedManyWithoutProfileInput;
};
export type ProfileUncheckedCreateWithoutMoviesInput = {
    id?: string;
    user_id: string;
    bio?: string | null;
    gender?: string;
    profession?: string;
    location?: string | null;
    hobby?: Prisma.ProfileCreatehobbyInput | string[];
    birthday?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tracks?: Prisma.ProfileTrackUncheckedCreateNestedManyWithoutProfileInput;
    albums?: Prisma.ProfileAlbumUncheckedCreateNestedManyWithoutProfileInput;
    artists?: Prisma.ProfileArtistUncheckedCreateNestedManyWithoutProfileInput;
};
export type ProfileCreateOrConnectWithoutMoviesInput = {
    where: Prisma.ProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutMoviesInput, Prisma.ProfileUncheckedCreateWithoutMoviesInput>;
};
export type ProfileUpsertWithoutMoviesInput = {
    update: Prisma.XOR<Prisma.ProfileUpdateWithoutMoviesInput, Prisma.ProfileUncheckedUpdateWithoutMoviesInput>;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutMoviesInput, Prisma.ProfileUncheckedCreateWithoutMoviesInput>;
    where?: Prisma.ProfileWhereInput;
};
export type ProfileUpdateToOneWithWhereWithoutMoviesInput = {
    where?: Prisma.ProfileWhereInput;
    data: Prisma.XOR<Prisma.ProfileUpdateWithoutMoviesInput, Prisma.ProfileUncheckedUpdateWithoutMoviesInput>;
};
export type ProfileUpdateWithoutMoviesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    profession?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hobby?: Prisma.ProfileUpdatehobbyInput | string[];
    birthday?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutProfileNestedInput;
    tracks?: Prisma.ProfileTrackUpdateManyWithoutProfileNestedInput;
    albums?: Prisma.ProfileAlbumUpdateManyWithoutProfileNestedInput;
    artists?: Prisma.ProfileArtistUpdateManyWithoutProfileNestedInput;
};
export type ProfileUncheckedUpdateWithoutMoviesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    profession?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hobby?: Prisma.ProfileUpdatehobbyInput | string[];
    birthday?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tracks?: Prisma.ProfileTrackUncheckedUpdateManyWithoutProfileNestedInput;
    albums?: Prisma.ProfileAlbumUncheckedUpdateManyWithoutProfileNestedInput;
    artists?: Prisma.ProfileArtistUncheckedUpdateManyWithoutProfileNestedInput;
};
export type ProfileCreateWithoutTracksInput = {
    id?: string;
    bio?: string | null;
    gender?: string;
    profession?: string;
    location?: string | null;
    hobby?: Prisma.ProfileCreatehobbyInput | string[];
    birthday?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutProfileInput;
    movies?: Prisma.ProfileMovieCreateNestedManyWithoutProfileInput;
    albums?: Prisma.ProfileAlbumCreateNestedManyWithoutProfileInput;
    artists?: Prisma.ProfileArtistCreateNestedManyWithoutProfileInput;
};
export type ProfileUncheckedCreateWithoutTracksInput = {
    id?: string;
    user_id: string;
    bio?: string | null;
    gender?: string;
    profession?: string;
    location?: string | null;
    hobby?: Prisma.ProfileCreatehobbyInput | string[];
    birthday?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movies?: Prisma.ProfileMovieUncheckedCreateNestedManyWithoutProfileInput;
    albums?: Prisma.ProfileAlbumUncheckedCreateNestedManyWithoutProfileInput;
    artists?: Prisma.ProfileArtistUncheckedCreateNestedManyWithoutProfileInput;
};
export type ProfileCreateOrConnectWithoutTracksInput = {
    where: Prisma.ProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutTracksInput, Prisma.ProfileUncheckedCreateWithoutTracksInput>;
};
export type ProfileUpsertWithoutTracksInput = {
    update: Prisma.XOR<Prisma.ProfileUpdateWithoutTracksInput, Prisma.ProfileUncheckedUpdateWithoutTracksInput>;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutTracksInput, Prisma.ProfileUncheckedCreateWithoutTracksInput>;
    where?: Prisma.ProfileWhereInput;
};
export type ProfileUpdateToOneWithWhereWithoutTracksInput = {
    where?: Prisma.ProfileWhereInput;
    data: Prisma.XOR<Prisma.ProfileUpdateWithoutTracksInput, Prisma.ProfileUncheckedUpdateWithoutTracksInput>;
};
export type ProfileUpdateWithoutTracksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    profession?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hobby?: Prisma.ProfileUpdatehobbyInput | string[];
    birthday?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutProfileNestedInput;
    movies?: Prisma.ProfileMovieUpdateManyWithoutProfileNestedInput;
    albums?: Prisma.ProfileAlbumUpdateManyWithoutProfileNestedInput;
    artists?: Prisma.ProfileArtistUpdateManyWithoutProfileNestedInput;
};
export type ProfileUncheckedUpdateWithoutTracksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    profession?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hobby?: Prisma.ProfileUpdatehobbyInput | string[];
    birthday?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    movies?: Prisma.ProfileMovieUncheckedUpdateManyWithoutProfileNestedInput;
    albums?: Prisma.ProfileAlbumUncheckedUpdateManyWithoutProfileNestedInput;
    artists?: Prisma.ProfileArtistUncheckedUpdateManyWithoutProfileNestedInput;
};
export type ProfileCreateWithoutAlbumsInput = {
    id?: string;
    bio?: string | null;
    gender?: string;
    profession?: string;
    location?: string | null;
    hobby?: Prisma.ProfileCreatehobbyInput | string[];
    birthday?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutProfileInput;
    movies?: Prisma.ProfileMovieCreateNestedManyWithoutProfileInput;
    tracks?: Prisma.ProfileTrackCreateNestedManyWithoutProfileInput;
    artists?: Prisma.ProfileArtistCreateNestedManyWithoutProfileInput;
};
export type ProfileUncheckedCreateWithoutAlbumsInput = {
    id?: string;
    user_id: string;
    bio?: string | null;
    gender?: string;
    profession?: string;
    location?: string | null;
    hobby?: Prisma.ProfileCreatehobbyInput | string[];
    birthday?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movies?: Prisma.ProfileMovieUncheckedCreateNestedManyWithoutProfileInput;
    tracks?: Prisma.ProfileTrackUncheckedCreateNestedManyWithoutProfileInput;
    artists?: Prisma.ProfileArtistUncheckedCreateNestedManyWithoutProfileInput;
};
export type ProfileCreateOrConnectWithoutAlbumsInput = {
    where: Prisma.ProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutAlbumsInput, Prisma.ProfileUncheckedCreateWithoutAlbumsInput>;
};
export type ProfileUpsertWithoutAlbumsInput = {
    update: Prisma.XOR<Prisma.ProfileUpdateWithoutAlbumsInput, Prisma.ProfileUncheckedUpdateWithoutAlbumsInput>;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutAlbumsInput, Prisma.ProfileUncheckedCreateWithoutAlbumsInput>;
    where?: Prisma.ProfileWhereInput;
};
export type ProfileUpdateToOneWithWhereWithoutAlbumsInput = {
    where?: Prisma.ProfileWhereInput;
    data: Prisma.XOR<Prisma.ProfileUpdateWithoutAlbumsInput, Prisma.ProfileUncheckedUpdateWithoutAlbumsInput>;
};
export type ProfileUpdateWithoutAlbumsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    profession?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hobby?: Prisma.ProfileUpdatehobbyInput | string[];
    birthday?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutProfileNestedInput;
    movies?: Prisma.ProfileMovieUpdateManyWithoutProfileNestedInput;
    tracks?: Prisma.ProfileTrackUpdateManyWithoutProfileNestedInput;
    artists?: Prisma.ProfileArtistUpdateManyWithoutProfileNestedInput;
};
export type ProfileUncheckedUpdateWithoutAlbumsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    profession?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hobby?: Prisma.ProfileUpdatehobbyInput | string[];
    birthday?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    movies?: Prisma.ProfileMovieUncheckedUpdateManyWithoutProfileNestedInput;
    tracks?: Prisma.ProfileTrackUncheckedUpdateManyWithoutProfileNestedInput;
    artists?: Prisma.ProfileArtistUncheckedUpdateManyWithoutProfileNestedInput;
};
export type ProfileCreateWithoutArtistsInput = {
    id?: string;
    bio?: string | null;
    gender?: string;
    profession?: string;
    location?: string | null;
    hobby?: Prisma.ProfileCreatehobbyInput | string[];
    birthday?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutProfileInput;
    movies?: Prisma.ProfileMovieCreateNestedManyWithoutProfileInput;
    tracks?: Prisma.ProfileTrackCreateNestedManyWithoutProfileInput;
    albums?: Prisma.ProfileAlbumCreateNestedManyWithoutProfileInput;
};
export type ProfileUncheckedCreateWithoutArtistsInput = {
    id?: string;
    user_id: string;
    bio?: string | null;
    gender?: string;
    profession?: string;
    location?: string | null;
    hobby?: Prisma.ProfileCreatehobbyInput | string[];
    birthday?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    movies?: Prisma.ProfileMovieUncheckedCreateNestedManyWithoutProfileInput;
    tracks?: Prisma.ProfileTrackUncheckedCreateNestedManyWithoutProfileInput;
    albums?: Prisma.ProfileAlbumUncheckedCreateNestedManyWithoutProfileInput;
};
export type ProfileCreateOrConnectWithoutArtistsInput = {
    where: Prisma.ProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutArtistsInput, Prisma.ProfileUncheckedCreateWithoutArtistsInput>;
};
export type ProfileUpsertWithoutArtistsInput = {
    update: Prisma.XOR<Prisma.ProfileUpdateWithoutArtistsInput, Prisma.ProfileUncheckedUpdateWithoutArtistsInput>;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutArtistsInput, Prisma.ProfileUncheckedCreateWithoutArtistsInput>;
    where?: Prisma.ProfileWhereInput;
};
export type ProfileUpdateToOneWithWhereWithoutArtistsInput = {
    where?: Prisma.ProfileWhereInput;
    data: Prisma.XOR<Prisma.ProfileUpdateWithoutArtistsInput, Prisma.ProfileUncheckedUpdateWithoutArtistsInput>;
};
export type ProfileUpdateWithoutArtistsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    profession?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hobby?: Prisma.ProfileUpdatehobbyInput | string[];
    birthday?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutProfileNestedInput;
    movies?: Prisma.ProfileMovieUpdateManyWithoutProfileNestedInput;
    tracks?: Prisma.ProfileTrackUpdateManyWithoutProfileNestedInput;
    albums?: Prisma.ProfileAlbumUpdateManyWithoutProfileNestedInput;
};
export type ProfileUncheckedUpdateWithoutArtistsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    profession?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hobby?: Prisma.ProfileUpdatehobbyInput | string[];
    birthday?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    movies?: Prisma.ProfileMovieUncheckedUpdateManyWithoutProfileNestedInput;
    tracks?: Prisma.ProfileTrackUncheckedUpdateManyWithoutProfileNestedInput;
    albums?: Prisma.ProfileAlbumUncheckedUpdateManyWithoutProfileNestedInput;
};
/**
 * Count Type ProfileCountOutputType
 */
export type ProfileCountOutputType = {
    movies: number;
    tracks: number;
    albums: number;
    artists: number;
};
export type ProfileCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    movies?: boolean | ProfileCountOutputTypeCountMoviesArgs;
    tracks?: boolean | ProfileCountOutputTypeCountTracksArgs;
    albums?: boolean | ProfileCountOutputTypeCountAlbumsArgs;
    artists?: boolean | ProfileCountOutputTypeCountArtistsArgs;
};
/**
 * ProfileCountOutputType without action
 */
export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: Prisma.ProfileCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ProfileCountOutputType without action
 */
export type ProfileCountOutputTypeCountMoviesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfileMovieWhereInput;
};
/**
 * ProfileCountOutputType without action
 */
export type ProfileCountOutputTypeCountTracksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfileTrackWhereInput;
};
/**
 * ProfileCountOutputType without action
 */
export type ProfileCountOutputTypeCountAlbumsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfileAlbumWhereInput;
};
/**
 * ProfileCountOutputType without action
 */
export type ProfileCountOutputTypeCountArtistsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfileArtistWhereInput;
};
export type ProfileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    bio?: boolean;
    gender?: boolean;
    profession?: boolean;
    location?: boolean;
    hobby?: boolean;
    birthday?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    movies?: boolean | Prisma.Profile$moviesArgs<ExtArgs>;
    tracks?: boolean | Prisma.Profile$tracksArgs<ExtArgs>;
    albums?: boolean | Prisma.Profile$albumsArgs<ExtArgs>;
    artists?: boolean | Prisma.Profile$artistsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProfileCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["profile"]>;
export type ProfileSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    bio?: boolean;
    gender?: boolean;
    profession?: boolean;
    location?: boolean;
    hobby?: boolean;
    birthday?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["profile"]>;
export type ProfileSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    bio?: boolean;
    gender?: boolean;
    profession?: boolean;
    location?: boolean;
    hobby?: boolean;
    birthday?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["profile"]>;
export type ProfileSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    bio?: boolean;
    gender?: boolean;
    profession?: boolean;
    location?: boolean;
    hobby?: boolean;
    birthday?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ProfileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "bio" | "gender" | "profession" | "location" | "hobby" | "birthday" | "createdAt" | "updatedAt", ExtArgs["result"]["profile"]>;
export type ProfileInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    movies?: boolean | Prisma.Profile$moviesArgs<ExtArgs>;
    tracks?: boolean | Prisma.Profile$tracksArgs<ExtArgs>;
    albums?: boolean | Prisma.Profile$albumsArgs<ExtArgs>;
    artists?: boolean | Prisma.Profile$artistsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProfileCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProfileIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ProfilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Profile";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        movies: Prisma.$ProfileMoviePayload<ExtArgs>[];
        tracks: Prisma.$ProfileTrackPayload<ExtArgs>[];
        albums: Prisma.$ProfileAlbumPayload<ExtArgs>[];
        artists: Prisma.$ProfileArtistPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        user_id: string;
        bio: string | null;
        gender: string;
        profession: string;
        location: string | null;
        hobby: string[];
        birthday: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["profile"]>;
    composites: {};
};
export type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProfilePayload, S>;
export type ProfileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProfileCountAggregateInputType | true;
};
export interface ProfileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Profile'];
        meta: {
            name: 'Profile';
        };
    };
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: Prisma.SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: Prisma.SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     *
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProfileFindManyArgs>(args?: Prisma.SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     *
     */
    create<T extends ProfileCreateArgs>(args: Prisma.SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProfileCreateManyArgs>(args?: Prisma.SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     *
     */
    delete<T extends ProfileDeleteArgs>(args: Prisma.SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProfileUpdateArgs>(args: Prisma.SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: Prisma.SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: Prisma.SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(args?: Prisma.Subset<T, ProfileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProfileCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Prisma.Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>;
    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ProfileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProfileGroupByArgs['orderBy'];
    } : {
        orderBy?: ProfileGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Profile model
     */
    readonly fields: ProfileFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Profile.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    movies<T extends Prisma.Profile$moviesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Profile$moviesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfileMoviePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    tracks<T extends Prisma.Profile$tracksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Profile$tracksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfileTrackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    albums<T extends Prisma.Profile$albumsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Profile$albumsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfileAlbumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    artists<T extends Prisma.Profile$artistsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Profile$artistsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfileArtistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Profile model
 */
export interface ProfileFieldRefs {
    readonly id: Prisma.FieldRef<"Profile", 'String'>;
    readonly user_id: Prisma.FieldRef<"Profile", 'String'>;
    readonly bio: Prisma.FieldRef<"Profile", 'String'>;
    readonly gender: Prisma.FieldRef<"Profile", 'String'>;
    readonly profession: Prisma.FieldRef<"Profile", 'String'>;
    readonly location: Prisma.FieldRef<"Profile", 'String'>;
    readonly hobby: Prisma.FieldRef<"Profile", 'String[]'>;
    readonly birthday: Prisma.FieldRef<"Profile", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Profile", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Profile", 'DateTime'>;
}
/**
 * Profile findUnique
 */
export type ProfileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Profile to fetch.
     */
    where: Prisma.ProfileWhereUniqueInput;
};
/**
 * Profile findUniqueOrThrow
 */
export type ProfileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Profile to fetch.
     */
    where: Prisma.ProfileWhereUniqueInput;
};
/**
 * Profile findFirst
 */
export type ProfileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Profile to fetch.
     */
    where?: Prisma.ProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Profiles to fetch.
     */
    orderBy?: Prisma.ProfileOrderByWithRelationInput | Prisma.ProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Profiles.
     */
    cursor?: Prisma.ProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Profiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Profiles.
     */
    distinct?: Prisma.ProfileScalarFieldEnum | Prisma.ProfileScalarFieldEnum[];
};
/**
 * Profile findFirstOrThrow
 */
export type ProfileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Profile to fetch.
     */
    where?: Prisma.ProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Profiles to fetch.
     */
    orderBy?: Prisma.ProfileOrderByWithRelationInput | Prisma.ProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Profiles.
     */
    cursor?: Prisma.ProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Profiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Profiles.
     */
    distinct?: Prisma.ProfileScalarFieldEnum | Prisma.ProfileScalarFieldEnum[];
};
/**
 * Profile findMany
 */
export type ProfileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Profiles to fetch.
     */
    where?: Prisma.ProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Profiles to fetch.
     */
    orderBy?: Prisma.ProfileOrderByWithRelationInput | Prisma.ProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Profiles.
     */
    cursor?: Prisma.ProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Profiles.
     */
    skip?: number;
    distinct?: Prisma.ProfileScalarFieldEnum | Prisma.ProfileScalarFieldEnum[];
};
/**
 * Profile create
 */
export type ProfileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Profile.
     */
    data: Prisma.XOR<Prisma.ProfileCreateInput, Prisma.ProfileUncheckedCreateInput>;
};
/**
 * Profile createMany
 */
export type ProfileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: Prisma.ProfileCreateManyInput | Prisma.ProfileCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Profile createManyAndReturn
 */
export type ProfileCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: Prisma.ProfileSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Profile
     */
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    /**
     * The data used to create many Profiles.
     */
    data: Prisma.ProfileCreateManyInput | Prisma.ProfileCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProfileIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Profile update
 */
export type ProfileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Profile.
     */
    data: Prisma.XOR<Prisma.ProfileUpdateInput, Prisma.ProfileUncheckedUpdateInput>;
    /**
     * Choose, which Profile to update.
     */
    where: Prisma.ProfileWhereUniqueInput;
};
/**
 * Profile updateMany
 */
export type ProfileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: Prisma.XOR<Prisma.ProfileUpdateManyMutationInput, Prisma.ProfileUncheckedUpdateManyInput>;
    /**
     * Filter which Profiles to update
     */
    where?: Prisma.ProfileWhereInput;
    /**
     * Limit how many Profiles to update.
     */
    limit?: number;
};
/**
 * Profile updateManyAndReturn
 */
export type ProfileUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: Prisma.ProfileSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Profile
     */
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    /**
     * The data used to update Profiles.
     */
    data: Prisma.XOR<Prisma.ProfileUpdateManyMutationInput, Prisma.ProfileUncheckedUpdateManyInput>;
    /**
     * Filter which Profiles to update
     */
    where?: Prisma.ProfileWhereInput;
    /**
     * Limit how many Profiles to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProfileIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Profile upsert
 */
export type ProfileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: Prisma.ProfileWhereUniqueInput;
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: Prisma.XOR<Prisma.ProfileCreateInput, Prisma.ProfileUncheckedCreateInput>;
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ProfileUpdateInput, Prisma.ProfileUncheckedUpdateInput>;
};
/**
 * Profile delete
 */
export type ProfileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Profile to delete.
     */
    where: Prisma.ProfileWhereUniqueInput;
};
/**
 * Profile deleteMany
 */
export type ProfileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: Prisma.ProfileWhereInput;
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number;
};
/**
 * Profile.movies
 */
export type Profile$moviesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileMovie
     */
    select?: Prisma.ProfileMovieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProfileMovie
     */
    omit?: Prisma.ProfileMovieOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProfileMovieInclude<ExtArgs> | null;
    where?: Prisma.ProfileMovieWhereInput;
    orderBy?: Prisma.ProfileMovieOrderByWithRelationInput | Prisma.ProfileMovieOrderByWithRelationInput[];
    cursor?: Prisma.ProfileMovieWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProfileMovieScalarFieldEnum | Prisma.ProfileMovieScalarFieldEnum[];
};
/**
 * Profile.tracks
 */
export type Profile$tracksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileTrack
     */
    select?: Prisma.ProfileTrackSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProfileTrack
     */
    omit?: Prisma.ProfileTrackOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProfileTrackInclude<ExtArgs> | null;
    where?: Prisma.ProfileTrackWhereInput;
    orderBy?: Prisma.ProfileTrackOrderByWithRelationInput | Prisma.ProfileTrackOrderByWithRelationInput[];
    cursor?: Prisma.ProfileTrackWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProfileTrackScalarFieldEnum | Prisma.ProfileTrackScalarFieldEnum[];
};
/**
 * Profile.albums
 */
export type Profile$albumsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAlbum
     */
    select?: Prisma.ProfileAlbumSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProfileAlbum
     */
    omit?: Prisma.ProfileAlbumOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProfileAlbumInclude<ExtArgs> | null;
    where?: Prisma.ProfileAlbumWhereInput;
    orderBy?: Prisma.ProfileAlbumOrderByWithRelationInput | Prisma.ProfileAlbumOrderByWithRelationInput[];
    cursor?: Prisma.ProfileAlbumWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProfileAlbumScalarFieldEnum | Prisma.ProfileAlbumScalarFieldEnum[];
};
/**
 * Profile.artists
 */
export type Profile$artistsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileArtist
     */
    select?: Prisma.ProfileArtistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProfileArtist
     */
    omit?: Prisma.ProfileArtistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProfileArtistInclude<ExtArgs> | null;
    where?: Prisma.ProfileArtistWhereInput;
    orderBy?: Prisma.ProfileArtistOrderByWithRelationInput | Prisma.ProfileArtistOrderByWithRelationInput[];
    cursor?: Prisma.ProfileArtistWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProfileArtistScalarFieldEnum | Prisma.ProfileArtistScalarFieldEnum[];
};
/**
 * Profile without action
 */
export type ProfileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=Profile.d.ts.map