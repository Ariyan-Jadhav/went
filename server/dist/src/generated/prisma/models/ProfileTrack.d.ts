import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ProfileTrack
 *
 */
export type ProfileTrackModel = runtime.Types.Result.DefaultSelection<Prisma.$ProfileTrackPayload>;
export type AggregateProfileTrack = {
    _count: ProfileTrackCountAggregateOutputType | null;
    _min: ProfileTrackMinAggregateOutputType | null;
    _max: ProfileTrackMaxAggregateOutputType | null;
};
export type ProfileTrackMinAggregateOutputType = {
    id: string | null;
    profile_id: string | null;
    name: string | null;
    artist: string | null;
    image: string | null;
    createdAt: Date | null;
};
export type ProfileTrackMaxAggregateOutputType = {
    id: string | null;
    profile_id: string | null;
    name: string | null;
    artist: string | null;
    image: string | null;
    createdAt: Date | null;
};
export type ProfileTrackCountAggregateOutputType = {
    id: number;
    profile_id: number;
    name: number;
    artist: number;
    image: number;
    createdAt: number;
    _all: number;
};
export type ProfileTrackMinAggregateInputType = {
    id?: true;
    profile_id?: true;
    name?: true;
    artist?: true;
    image?: true;
    createdAt?: true;
};
export type ProfileTrackMaxAggregateInputType = {
    id?: true;
    profile_id?: true;
    name?: true;
    artist?: true;
    image?: true;
    createdAt?: true;
};
export type ProfileTrackCountAggregateInputType = {
    id?: true;
    profile_id?: true;
    name?: true;
    artist?: true;
    image?: true;
    createdAt?: true;
    _all?: true;
};
export type ProfileTrackAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileTrack to aggregate.
     */
    where?: Prisma.ProfileTrackWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProfileTracks to fetch.
     */
    orderBy?: Prisma.ProfileTrackOrderByWithRelationInput | Prisma.ProfileTrackOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ProfileTrackWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProfileTracks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProfileTracks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ProfileTracks
    **/
    _count?: true | ProfileTrackCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProfileTrackMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProfileTrackMaxAggregateInputType;
};
export type GetProfileTrackAggregateType<T extends ProfileTrackAggregateArgs> = {
    [P in keyof T & keyof AggregateProfileTrack]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProfileTrack[P]> : Prisma.GetScalarType<T[P], AggregateProfileTrack[P]>;
};
export type ProfileTrackGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfileTrackWhereInput;
    orderBy?: Prisma.ProfileTrackOrderByWithAggregationInput | Prisma.ProfileTrackOrderByWithAggregationInput[];
    by: Prisma.ProfileTrackScalarFieldEnum[] | Prisma.ProfileTrackScalarFieldEnum;
    having?: Prisma.ProfileTrackScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProfileTrackCountAggregateInputType | true;
    _min?: ProfileTrackMinAggregateInputType;
    _max?: ProfileTrackMaxAggregateInputType;
};
export type ProfileTrackGroupByOutputType = {
    id: string;
    profile_id: string;
    name: string;
    artist: string;
    image: string | null;
    createdAt: Date;
    _count: ProfileTrackCountAggregateOutputType | null;
    _min: ProfileTrackMinAggregateOutputType | null;
    _max: ProfileTrackMaxAggregateOutputType | null;
};
type GetProfileTrackGroupByPayload<T extends ProfileTrackGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProfileTrackGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProfileTrackGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProfileTrackGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProfileTrackGroupByOutputType[P]>;
}>>;
export type ProfileTrackWhereInput = {
    AND?: Prisma.ProfileTrackWhereInput | Prisma.ProfileTrackWhereInput[];
    OR?: Prisma.ProfileTrackWhereInput[];
    NOT?: Prisma.ProfileTrackWhereInput | Prisma.ProfileTrackWhereInput[];
    id?: Prisma.StringFilter<"ProfileTrack"> | string;
    profile_id?: Prisma.StringFilter<"ProfileTrack"> | string;
    name?: Prisma.StringFilter<"ProfileTrack"> | string;
    artist?: Prisma.StringFilter<"ProfileTrack"> | string;
    image?: Prisma.StringNullableFilter<"ProfileTrack"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ProfileTrack"> | Date | string;
    profile?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
};
export type ProfileTrackOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    profile_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    artist?: Prisma.SortOrder;
    image?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    profile?: Prisma.ProfileOrderByWithRelationInput;
};
export type ProfileTrackWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    profile_id?: string;
    AND?: Prisma.ProfileTrackWhereInput | Prisma.ProfileTrackWhereInput[];
    OR?: Prisma.ProfileTrackWhereInput[];
    NOT?: Prisma.ProfileTrackWhereInput | Prisma.ProfileTrackWhereInput[];
    name?: Prisma.StringFilter<"ProfileTrack"> | string;
    artist?: Prisma.StringFilter<"ProfileTrack"> | string;
    image?: Prisma.StringNullableFilter<"ProfileTrack"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ProfileTrack"> | Date | string;
    profile?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
}, "id" | "profile_id">;
export type ProfileTrackOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    profile_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    artist?: Prisma.SortOrder;
    image?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ProfileTrackCountOrderByAggregateInput;
    _max?: Prisma.ProfileTrackMaxOrderByAggregateInput;
    _min?: Prisma.ProfileTrackMinOrderByAggregateInput;
};
export type ProfileTrackScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProfileTrackScalarWhereWithAggregatesInput | Prisma.ProfileTrackScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProfileTrackScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProfileTrackScalarWhereWithAggregatesInput | Prisma.ProfileTrackScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ProfileTrack"> | string;
    profile_id?: Prisma.StringWithAggregatesFilter<"ProfileTrack"> | string;
    name?: Prisma.StringWithAggregatesFilter<"ProfileTrack"> | string;
    artist?: Prisma.StringWithAggregatesFilter<"ProfileTrack"> | string;
    image?: Prisma.StringNullableWithAggregatesFilter<"ProfileTrack"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ProfileTrack"> | Date | string;
};
export type ProfileTrackCreateInput = {
    id?: string;
    name: string;
    artist: string;
    image?: string | null;
    createdAt?: Date | string;
    profile: Prisma.ProfileCreateNestedOneWithoutTracksInput;
};
export type ProfileTrackUncheckedCreateInput = {
    id?: string;
    profile_id: string;
    name: string;
    artist: string;
    image?: string | null;
    createdAt?: Date | string;
};
export type ProfileTrackUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    artist?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.ProfileUpdateOneRequiredWithoutTracksNestedInput;
};
export type ProfileTrackUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profile_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    artist?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileTrackCreateManyInput = {
    id?: string;
    profile_id: string;
    name: string;
    artist: string;
    image?: string | null;
    createdAt?: Date | string;
};
export type ProfileTrackUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    artist?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileTrackUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profile_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    artist?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileTrackListRelationFilter = {
    every?: Prisma.ProfileTrackWhereInput;
    some?: Prisma.ProfileTrackWhereInput;
    none?: Prisma.ProfileTrackWhereInput;
};
export type ProfileTrackOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProfileTrackCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profile_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    artist?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProfileTrackMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profile_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    artist?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProfileTrackMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profile_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    artist?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProfileTrackCreateNestedManyWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.ProfileTrackCreateWithoutProfileInput, Prisma.ProfileTrackUncheckedCreateWithoutProfileInput> | Prisma.ProfileTrackCreateWithoutProfileInput[] | Prisma.ProfileTrackUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.ProfileTrackCreateOrConnectWithoutProfileInput | Prisma.ProfileTrackCreateOrConnectWithoutProfileInput[];
    createMany?: Prisma.ProfileTrackCreateManyProfileInputEnvelope;
    connect?: Prisma.ProfileTrackWhereUniqueInput | Prisma.ProfileTrackWhereUniqueInput[];
};
export type ProfileTrackUncheckedCreateNestedManyWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.ProfileTrackCreateWithoutProfileInput, Prisma.ProfileTrackUncheckedCreateWithoutProfileInput> | Prisma.ProfileTrackCreateWithoutProfileInput[] | Prisma.ProfileTrackUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.ProfileTrackCreateOrConnectWithoutProfileInput | Prisma.ProfileTrackCreateOrConnectWithoutProfileInput[];
    createMany?: Prisma.ProfileTrackCreateManyProfileInputEnvelope;
    connect?: Prisma.ProfileTrackWhereUniqueInput | Prisma.ProfileTrackWhereUniqueInput[];
};
export type ProfileTrackUpdateManyWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileTrackCreateWithoutProfileInput, Prisma.ProfileTrackUncheckedCreateWithoutProfileInput> | Prisma.ProfileTrackCreateWithoutProfileInput[] | Prisma.ProfileTrackUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.ProfileTrackCreateOrConnectWithoutProfileInput | Prisma.ProfileTrackCreateOrConnectWithoutProfileInput[];
    upsert?: Prisma.ProfileTrackUpsertWithWhereUniqueWithoutProfileInput | Prisma.ProfileTrackUpsertWithWhereUniqueWithoutProfileInput[];
    createMany?: Prisma.ProfileTrackCreateManyProfileInputEnvelope;
    set?: Prisma.ProfileTrackWhereUniqueInput | Prisma.ProfileTrackWhereUniqueInput[];
    disconnect?: Prisma.ProfileTrackWhereUniqueInput | Prisma.ProfileTrackWhereUniqueInput[];
    delete?: Prisma.ProfileTrackWhereUniqueInput | Prisma.ProfileTrackWhereUniqueInput[];
    connect?: Prisma.ProfileTrackWhereUniqueInput | Prisma.ProfileTrackWhereUniqueInput[];
    update?: Prisma.ProfileTrackUpdateWithWhereUniqueWithoutProfileInput | Prisma.ProfileTrackUpdateWithWhereUniqueWithoutProfileInput[];
    updateMany?: Prisma.ProfileTrackUpdateManyWithWhereWithoutProfileInput | Prisma.ProfileTrackUpdateManyWithWhereWithoutProfileInput[];
    deleteMany?: Prisma.ProfileTrackScalarWhereInput | Prisma.ProfileTrackScalarWhereInput[];
};
export type ProfileTrackUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileTrackCreateWithoutProfileInput, Prisma.ProfileTrackUncheckedCreateWithoutProfileInput> | Prisma.ProfileTrackCreateWithoutProfileInput[] | Prisma.ProfileTrackUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.ProfileTrackCreateOrConnectWithoutProfileInput | Prisma.ProfileTrackCreateOrConnectWithoutProfileInput[];
    upsert?: Prisma.ProfileTrackUpsertWithWhereUniqueWithoutProfileInput | Prisma.ProfileTrackUpsertWithWhereUniqueWithoutProfileInput[];
    createMany?: Prisma.ProfileTrackCreateManyProfileInputEnvelope;
    set?: Prisma.ProfileTrackWhereUniqueInput | Prisma.ProfileTrackWhereUniqueInput[];
    disconnect?: Prisma.ProfileTrackWhereUniqueInput | Prisma.ProfileTrackWhereUniqueInput[];
    delete?: Prisma.ProfileTrackWhereUniqueInput | Prisma.ProfileTrackWhereUniqueInput[];
    connect?: Prisma.ProfileTrackWhereUniqueInput | Prisma.ProfileTrackWhereUniqueInput[];
    update?: Prisma.ProfileTrackUpdateWithWhereUniqueWithoutProfileInput | Prisma.ProfileTrackUpdateWithWhereUniqueWithoutProfileInput[];
    updateMany?: Prisma.ProfileTrackUpdateManyWithWhereWithoutProfileInput | Prisma.ProfileTrackUpdateManyWithWhereWithoutProfileInput[];
    deleteMany?: Prisma.ProfileTrackScalarWhereInput | Prisma.ProfileTrackScalarWhereInput[];
};
export type ProfileTrackCreateWithoutProfileInput = {
    id?: string;
    name: string;
    artist: string;
    image?: string | null;
    createdAt?: Date | string;
};
export type ProfileTrackUncheckedCreateWithoutProfileInput = {
    id?: string;
    name: string;
    artist: string;
    image?: string | null;
    createdAt?: Date | string;
};
export type ProfileTrackCreateOrConnectWithoutProfileInput = {
    where: Prisma.ProfileTrackWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileTrackCreateWithoutProfileInput, Prisma.ProfileTrackUncheckedCreateWithoutProfileInput>;
};
export type ProfileTrackCreateManyProfileInputEnvelope = {
    data: Prisma.ProfileTrackCreateManyProfileInput | Prisma.ProfileTrackCreateManyProfileInput[];
    skipDuplicates?: boolean;
};
export type ProfileTrackUpsertWithWhereUniqueWithoutProfileInput = {
    where: Prisma.ProfileTrackWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProfileTrackUpdateWithoutProfileInput, Prisma.ProfileTrackUncheckedUpdateWithoutProfileInput>;
    create: Prisma.XOR<Prisma.ProfileTrackCreateWithoutProfileInput, Prisma.ProfileTrackUncheckedCreateWithoutProfileInput>;
};
export type ProfileTrackUpdateWithWhereUniqueWithoutProfileInput = {
    where: Prisma.ProfileTrackWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProfileTrackUpdateWithoutProfileInput, Prisma.ProfileTrackUncheckedUpdateWithoutProfileInput>;
};
export type ProfileTrackUpdateManyWithWhereWithoutProfileInput = {
    where: Prisma.ProfileTrackScalarWhereInput;
    data: Prisma.XOR<Prisma.ProfileTrackUpdateManyMutationInput, Prisma.ProfileTrackUncheckedUpdateManyWithoutProfileInput>;
};
export type ProfileTrackScalarWhereInput = {
    AND?: Prisma.ProfileTrackScalarWhereInput | Prisma.ProfileTrackScalarWhereInput[];
    OR?: Prisma.ProfileTrackScalarWhereInput[];
    NOT?: Prisma.ProfileTrackScalarWhereInput | Prisma.ProfileTrackScalarWhereInput[];
    id?: Prisma.StringFilter<"ProfileTrack"> | string;
    profile_id?: Prisma.StringFilter<"ProfileTrack"> | string;
    name?: Prisma.StringFilter<"ProfileTrack"> | string;
    artist?: Prisma.StringFilter<"ProfileTrack"> | string;
    image?: Prisma.StringNullableFilter<"ProfileTrack"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ProfileTrack"> | Date | string;
};
export type ProfileTrackCreateManyProfileInput = {
    id?: string;
    name: string;
    artist: string;
    image?: string | null;
    createdAt?: Date | string;
};
export type ProfileTrackUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    artist?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileTrackUncheckedUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    artist?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileTrackUncheckedUpdateManyWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    artist?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileTrackSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    profile_id?: boolean;
    name?: boolean;
    artist?: boolean;
    image?: boolean;
    createdAt?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["profileTrack"]>;
export type ProfileTrackSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    profile_id?: boolean;
    name?: boolean;
    artist?: boolean;
    image?: boolean;
    createdAt?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["profileTrack"]>;
export type ProfileTrackSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    profile_id?: boolean;
    name?: boolean;
    artist?: boolean;
    image?: boolean;
    createdAt?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["profileTrack"]>;
export type ProfileTrackSelectScalar = {
    id?: boolean;
    profile_id?: boolean;
    name?: boolean;
    artist?: boolean;
    image?: boolean;
    createdAt?: boolean;
};
export type ProfileTrackOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "profile_id" | "name" | "artist" | "image" | "createdAt", ExtArgs["result"]["profileTrack"]>;
export type ProfileTrackInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type ProfileTrackIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type ProfileTrackIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type $ProfileTrackPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProfileTrack";
    objects: {
        profile: Prisma.$ProfilePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        profile_id: string;
        name: string;
        artist: string;
        image: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["profileTrack"]>;
    composites: {};
};
export type ProfileTrackGetPayload<S extends boolean | null | undefined | ProfileTrackDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProfileTrackPayload, S>;
export type ProfileTrackCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProfileTrackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProfileTrackCountAggregateInputType | true;
};
export interface ProfileTrackDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProfileTrack'];
        meta: {
            name: 'ProfileTrack';
        };
    };
    /**
     * Find zero or one ProfileTrack that matches the filter.
     * @param {ProfileTrackFindUniqueArgs} args - Arguments to find a ProfileTrack
     * @example
     * // Get one ProfileTrack
     * const profileTrack = await prisma.profileTrack.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileTrackFindUniqueArgs>(args: Prisma.SelectSubset<T, ProfileTrackFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProfileTrackClient<runtime.Types.Result.GetResult<Prisma.$ProfileTrackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ProfileTrack that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileTrackFindUniqueOrThrowArgs} args - Arguments to find a ProfileTrack
     * @example
     * // Get one ProfileTrack
     * const profileTrack = await prisma.profileTrack.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileTrackFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProfileTrackFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProfileTrackClient<runtime.Types.Result.GetResult<Prisma.$ProfileTrackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProfileTrack that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileTrackFindFirstArgs} args - Arguments to find a ProfileTrack
     * @example
     * // Get one ProfileTrack
     * const profileTrack = await prisma.profileTrack.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileTrackFindFirstArgs>(args?: Prisma.SelectSubset<T, ProfileTrackFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProfileTrackClient<runtime.Types.Result.GetResult<Prisma.$ProfileTrackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProfileTrack that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileTrackFindFirstOrThrowArgs} args - Arguments to find a ProfileTrack
     * @example
     * // Get one ProfileTrack
     * const profileTrack = await prisma.profileTrack.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileTrackFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProfileTrackFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProfileTrackClient<runtime.Types.Result.GetResult<Prisma.$ProfileTrackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ProfileTracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileTrackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfileTracks
     * const profileTracks = await prisma.profileTrack.findMany()
     *
     * // Get first 10 ProfileTracks
     * const profileTracks = await prisma.profileTrack.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const profileTrackWithIdOnly = await prisma.profileTrack.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProfileTrackFindManyArgs>(args?: Prisma.SelectSubset<T, ProfileTrackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfileTrackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ProfileTrack.
     * @param {ProfileTrackCreateArgs} args - Arguments to create a ProfileTrack.
     * @example
     * // Create one ProfileTrack
     * const ProfileTrack = await prisma.profileTrack.create({
     *   data: {
     *     // ... data to create a ProfileTrack
     *   }
     * })
     *
     */
    create<T extends ProfileTrackCreateArgs>(args: Prisma.SelectSubset<T, ProfileTrackCreateArgs<ExtArgs>>): Prisma.Prisma__ProfileTrackClient<runtime.Types.Result.GetResult<Prisma.$ProfileTrackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ProfileTracks.
     * @param {ProfileTrackCreateManyArgs} args - Arguments to create many ProfileTracks.
     * @example
     * // Create many ProfileTracks
     * const profileTrack = await prisma.profileTrack.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProfileTrackCreateManyArgs>(args?: Prisma.SelectSubset<T, ProfileTrackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ProfileTracks and returns the data saved in the database.
     * @param {ProfileTrackCreateManyAndReturnArgs} args - Arguments to create many ProfileTracks.
     * @example
     * // Create many ProfileTracks
     * const profileTrack = await prisma.profileTrack.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ProfileTracks and only return the `id`
     * const profileTrackWithIdOnly = await prisma.profileTrack.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProfileTrackCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProfileTrackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfileTrackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ProfileTrack.
     * @param {ProfileTrackDeleteArgs} args - Arguments to delete one ProfileTrack.
     * @example
     * // Delete one ProfileTrack
     * const ProfileTrack = await prisma.profileTrack.delete({
     *   where: {
     *     // ... filter to delete one ProfileTrack
     *   }
     * })
     *
     */
    delete<T extends ProfileTrackDeleteArgs>(args: Prisma.SelectSubset<T, ProfileTrackDeleteArgs<ExtArgs>>): Prisma.Prisma__ProfileTrackClient<runtime.Types.Result.GetResult<Prisma.$ProfileTrackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ProfileTrack.
     * @param {ProfileTrackUpdateArgs} args - Arguments to update one ProfileTrack.
     * @example
     * // Update one ProfileTrack
     * const profileTrack = await prisma.profileTrack.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProfileTrackUpdateArgs>(args: Prisma.SelectSubset<T, ProfileTrackUpdateArgs<ExtArgs>>): Prisma.Prisma__ProfileTrackClient<runtime.Types.Result.GetResult<Prisma.$ProfileTrackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ProfileTracks.
     * @param {ProfileTrackDeleteManyArgs} args - Arguments to filter ProfileTracks to delete.
     * @example
     * // Delete a few ProfileTracks
     * const { count } = await prisma.profileTrack.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProfileTrackDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProfileTrackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProfileTracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileTrackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfileTracks
     * const profileTrack = await prisma.profileTrack.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProfileTrackUpdateManyArgs>(args: Prisma.SelectSubset<T, ProfileTrackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProfileTracks and returns the data updated in the database.
     * @param {ProfileTrackUpdateManyAndReturnArgs} args - Arguments to update many ProfileTracks.
     * @example
     * // Update many ProfileTracks
     * const profileTrack = await prisma.profileTrack.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ProfileTracks and only return the `id`
     * const profileTrackWithIdOnly = await prisma.profileTrack.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfileTrackUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProfileTrackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfileTrackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ProfileTrack.
     * @param {ProfileTrackUpsertArgs} args - Arguments to update or create a ProfileTrack.
     * @example
     * // Update or create a ProfileTrack
     * const profileTrack = await prisma.profileTrack.upsert({
     *   create: {
     *     // ... data to create a ProfileTrack
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfileTrack we want to update
     *   }
     * })
     */
    upsert<T extends ProfileTrackUpsertArgs>(args: Prisma.SelectSubset<T, ProfileTrackUpsertArgs<ExtArgs>>): Prisma.Prisma__ProfileTrackClient<runtime.Types.Result.GetResult<Prisma.$ProfileTrackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ProfileTracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileTrackCountArgs} args - Arguments to filter ProfileTracks to count.
     * @example
     * // Count the number of ProfileTracks
     * const count = await prisma.profileTrack.count({
     *   where: {
     *     // ... the filter for the ProfileTracks we want to count
     *   }
     * })
    **/
    count<T extends ProfileTrackCountArgs>(args?: Prisma.Subset<T, ProfileTrackCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProfileTrackCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ProfileTrack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileTrackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileTrackAggregateArgs>(args: Prisma.Subset<T, ProfileTrackAggregateArgs>): Prisma.PrismaPromise<GetProfileTrackAggregateType<T>>;
    /**
     * Group by ProfileTrack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileTrackGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ProfileTrackGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProfileTrackGroupByArgs['orderBy'];
    } : {
        orderBy?: ProfileTrackGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProfileTrackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileTrackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ProfileTrack model
     */
    readonly fields: ProfileTrackFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ProfileTrack.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ProfileTrackClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    profile<T extends Prisma.ProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ProfileTrack model
 */
export interface ProfileTrackFieldRefs {
    readonly id: Prisma.FieldRef<"ProfileTrack", 'String'>;
    readonly profile_id: Prisma.FieldRef<"ProfileTrack", 'String'>;
    readonly name: Prisma.FieldRef<"ProfileTrack", 'String'>;
    readonly artist: Prisma.FieldRef<"ProfileTrack", 'String'>;
    readonly image: Prisma.FieldRef<"ProfileTrack", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ProfileTrack", 'DateTime'>;
}
/**
 * ProfileTrack findUnique
 */
export type ProfileTrackFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProfileTrack to fetch.
     */
    where: Prisma.ProfileTrackWhereUniqueInput;
};
/**
 * ProfileTrack findUniqueOrThrow
 */
export type ProfileTrackFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProfileTrack to fetch.
     */
    where: Prisma.ProfileTrackWhereUniqueInput;
};
/**
 * ProfileTrack findFirst
 */
export type ProfileTrackFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProfileTrack to fetch.
     */
    where?: Prisma.ProfileTrackWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProfileTracks to fetch.
     */
    orderBy?: Prisma.ProfileTrackOrderByWithRelationInput | Prisma.ProfileTrackOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProfileTracks.
     */
    cursor?: Prisma.ProfileTrackWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProfileTracks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProfileTracks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProfileTracks.
     */
    distinct?: Prisma.ProfileTrackScalarFieldEnum | Prisma.ProfileTrackScalarFieldEnum[];
};
/**
 * ProfileTrack findFirstOrThrow
 */
export type ProfileTrackFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProfileTrack to fetch.
     */
    where?: Prisma.ProfileTrackWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProfileTracks to fetch.
     */
    orderBy?: Prisma.ProfileTrackOrderByWithRelationInput | Prisma.ProfileTrackOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProfileTracks.
     */
    cursor?: Prisma.ProfileTrackWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProfileTracks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProfileTracks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProfileTracks.
     */
    distinct?: Prisma.ProfileTrackScalarFieldEnum | Prisma.ProfileTrackScalarFieldEnum[];
};
/**
 * ProfileTrack findMany
 */
export type ProfileTrackFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProfileTracks to fetch.
     */
    where?: Prisma.ProfileTrackWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProfileTracks to fetch.
     */
    orderBy?: Prisma.ProfileTrackOrderByWithRelationInput | Prisma.ProfileTrackOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ProfileTracks.
     */
    cursor?: Prisma.ProfileTrackWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProfileTracks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProfileTracks.
     */
    skip?: number;
    distinct?: Prisma.ProfileTrackScalarFieldEnum | Prisma.ProfileTrackScalarFieldEnum[];
};
/**
 * ProfileTrack create
 */
export type ProfileTrackCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a ProfileTrack.
     */
    data: Prisma.XOR<Prisma.ProfileTrackCreateInput, Prisma.ProfileTrackUncheckedCreateInput>;
};
/**
 * ProfileTrack createMany
 */
export type ProfileTrackCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfileTracks.
     */
    data: Prisma.ProfileTrackCreateManyInput | Prisma.ProfileTrackCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ProfileTrack createManyAndReturn
 */
export type ProfileTrackCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileTrack
     */
    select?: Prisma.ProfileTrackSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProfileTrack
     */
    omit?: Prisma.ProfileTrackOmit<ExtArgs> | null;
    /**
     * The data used to create many ProfileTracks.
     */
    data: Prisma.ProfileTrackCreateManyInput | Prisma.ProfileTrackCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProfileTrackIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ProfileTrack update
 */
export type ProfileTrackUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a ProfileTrack.
     */
    data: Prisma.XOR<Prisma.ProfileTrackUpdateInput, Prisma.ProfileTrackUncheckedUpdateInput>;
    /**
     * Choose, which ProfileTrack to update.
     */
    where: Prisma.ProfileTrackWhereUniqueInput;
};
/**
 * ProfileTrack updateMany
 */
export type ProfileTrackUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfileTracks.
     */
    data: Prisma.XOR<Prisma.ProfileTrackUpdateManyMutationInput, Prisma.ProfileTrackUncheckedUpdateManyInput>;
    /**
     * Filter which ProfileTracks to update
     */
    where?: Prisma.ProfileTrackWhereInput;
    /**
     * Limit how many ProfileTracks to update.
     */
    limit?: number;
};
/**
 * ProfileTrack updateManyAndReturn
 */
export type ProfileTrackUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileTrack
     */
    select?: Prisma.ProfileTrackSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProfileTrack
     */
    omit?: Prisma.ProfileTrackOmit<ExtArgs> | null;
    /**
     * The data used to update ProfileTracks.
     */
    data: Prisma.XOR<Prisma.ProfileTrackUpdateManyMutationInput, Prisma.ProfileTrackUncheckedUpdateManyInput>;
    /**
     * Filter which ProfileTracks to update
     */
    where?: Prisma.ProfileTrackWhereInput;
    /**
     * Limit how many ProfileTracks to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProfileTrackIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ProfileTrack upsert
 */
export type ProfileTrackUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the ProfileTrack to update in case it exists.
     */
    where: Prisma.ProfileTrackWhereUniqueInput;
    /**
     * In case the ProfileTrack found by the `where` argument doesn't exist, create a new ProfileTrack with this data.
     */
    create: Prisma.XOR<Prisma.ProfileTrackCreateInput, Prisma.ProfileTrackUncheckedCreateInput>;
    /**
     * In case the ProfileTrack was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ProfileTrackUpdateInput, Prisma.ProfileTrackUncheckedUpdateInput>;
};
/**
 * ProfileTrack delete
 */
export type ProfileTrackDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which ProfileTrack to delete.
     */
    where: Prisma.ProfileTrackWhereUniqueInput;
};
/**
 * ProfileTrack deleteMany
 */
export type ProfileTrackDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileTracks to delete
     */
    where?: Prisma.ProfileTrackWhereInput;
    /**
     * Limit how many ProfileTracks to delete.
     */
    limit?: number;
};
/**
 * ProfileTrack without action
 */
export type ProfileTrackDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=ProfileTrack.d.ts.map