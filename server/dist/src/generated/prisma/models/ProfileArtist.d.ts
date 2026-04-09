import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ProfileArtist
 *
 */
export type ProfileArtistModel = runtime.Types.Result.DefaultSelection<Prisma.$ProfileArtistPayload>;
export type AggregateProfileArtist = {
    _count: ProfileArtistCountAggregateOutputType | null;
    _min: ProfileArtistMinAggregateOutputType | null;
    _max: ProfileArtistMaxAggregateOutputType | null;
};
export type ProfileArtistMinAggregateOutputType = {
    id: string | null;
    profile_id: string | null;
    name: string | null;
    image: string | null;
    createdAt: Date | null;
};
export type ProfileArtistMaxAggregateOutputType = {
    id: string | null;
    profile_id: string | null;
    name: string | null;
    image: string | null;
    createdAt: Date | null;
};
export type ProfileArtistCountAggregateOutputType = {
    id: number;
    profile_id: number;
    name: number;
    image: number;
    createdAt: number;
    _all: number;
};
export type ProfileArtistMinAggregateInputType = {
    id?: true;
    profile_id?: true;
    name?: true;
    image?: true;
    createdAt?: true;
};
export type ProfileArtistMaxAggregateInputType = {
    id?: true;
    profile_id?: true;
    name?: true;
    image?: true;
    createdAt?: true;
};
export type ProfileArtistCountAggregateInputType = {
    id?: true;
    profile_id?: true;
    name?: true;
    image?: true;
    createdAt?: true;
    _all?: true;
};
export type ProfileArtistAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileArtist to aggregate.
     */
    where?: Prisma.ProfileArtistWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProfileArtists to fetch.
     */
    orderBy?: Prisma.ProfileArtistOrderByWithRelationInput | Prisma.ProfileArtistOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ProfileArtistWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProfileArtists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProfileArtists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ProfileArtists
    **/
    _count?: true | ProfileArtistCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProfileArtistMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProfileArtistMaxAggregateInputType;
};
export type GetProfileArtistAggregateType<T extends ProfileArtistAggregateArgs> = {
    [P in keyof T & keyof AggregateProfileArtist]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProfileArtist[P]> : Prisma.GetScalarType<T[P], AggregateProfileArtist[P]>;
};
export type ProfileArtistGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfileArtistWhereInput;
    orderBy?: Prisma.ProfileArtistOrderByWithAggregationInput | Prisma.ProfileArtistOrderByWithAggregationInput[];
    by: Prisma.ProfileArtistScalarFieldEnum[] | Prisma.ProfileArtistScalarFieldEnum;
    having?: Prisma.ProfileArtistScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProfileArtistCountAggregateInputType | true;
    _min?: ProfileArtistMinAggregateInputType;
    _max?: ProfileArtistMaxAggregateInputType;
};
export type ProfileArtistGroupByOutputType = {
    id: string;
    profile_id: string;
    name: string;
    image: string | null;
    createdAt: Date;
    _count: ProfileArtistCountAggregateOutputType | null;
    _min: ProfileArtistMinAggregateOutputType | null;
    _max: ProfileArtistMaxAggregateOutputType | null;
};
type GetProfileArtistGroupByPayload<T extends ProfileArtistGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProfileArtistGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProfileArtistGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProfileArtistGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProfileArtistGroupByOutputType[P]>;
}>>;
export type ProfileArtistWhereInput = {
    AND?: Prisma.ProfileArtistWhereInput | Prisma.ProfileArtistWhereInput[];
    OR?: Prisma.ProfileArtistWhereInput[];
    NOT?: Prisma.ProfileArtistWhereInput | Prisma.ProfileArtistWhereInput[];
    id?: Prisma.StringFilter<"ProfileArtist"> | string;
    profile_id?: Prisma.StringFilter<"ProfileArtist"> | string;
    name?: Prisma.StringFilter<"ProfileArtist"> | string;
    image?: Prisma.StringNullableFilter<"ProfileArtist"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ProfileArtist"> | Date | string;
    profile?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
};
export type ProfileArtistOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    profile_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    image?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    profile?: Prisma.ProfileOrderByWithRelationInput;
};
export type ProfileArtistWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    profile_id?: string;
    AND?: Prisma.ProfileArtistWhereInput | Prisma.ProfileArtistWhereInput[];
    OR?: Prisma.ProfileArtistWhereInput[];
    NOT?: Prisma.ProfileArtistWhereInput | Prisma.ProfileArtistWhereInput[];
    name?: Prisma.StringFilter<"ProfileArtist"> | string;
    image?: Prisma.StringNullableFilter<"ProfileArtist"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ProfileArtist"> | Date | string;
    profile?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
}, "id" | "profile_id">;
export type ProfileArtistOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    profile_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    image?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ProfileArtistCountOrderByAggregateInput;
    _max?: Prisma.ProfileArtistMaxOrderByAggregateInput;
    _min?: Prisma.ProfileArtistMinOrderByAggregateInput;
};
export type ProfileArtistScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProfileArtistScalarWhereWithAggregatesInput | Prisma.ProfileArtistScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProfileArtistScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProfileArtistScalarWhereWithAggregatesInput | Prisma.ProfileArtistScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ProfileArtist"> | string;
    profile_id?: Prisma.StringWithAggregatesFilter<"ProfileArtist"> | string;
    name?: Prisma.StringWithAggregatesFilter<"ProfileArtist"> | string;
    image?: Prisma.StringNullableWithAggregatesFilter<"ProfileArtist"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ProfileArtist"> | Date | string;
};
export type ProfileArtistCreateInput = {
    id?: string;
    name: string;
    image?: string | null;
    createdAt?: Date | string;
    profile: Prisma.ProfileCreateNestedOneWithoutArtistsInput;
};
export type ProfileArtistUncheckedCreateInput = {
    id?: string;
    profile_id: string;
    name: string;
    image?: string | null;
    createdAt?: Date | string;
};
export type ProfileArtistUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.ProfileUpdateOneRequiredWithoutArtistsNestedInput;
};
export type ProfileArtistUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profile_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileArtistCreateManyInput = {
    id?: string;
    profile_id: string;
    name: string;
    image?: string | null;
    createdAt?: Date | string;
};
export type ProfileArtistUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileArtistUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profile_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileArtistListRelationFilter = {
    every?: Prisma.ProfileArtistWhereInput;
    some?: Prisma.ProfileArtistWhereInput;
    none?: Prisma.ProfileArtistWhereInput;
};
export type ProfileArtistOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProfileArtistCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profile_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProfileArtistMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profile_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProfileArtistMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profile_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProfileArtistCreateNestedManyWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.ProfileArtistCreateWithoutProfileInput, Prisma.ProfileArtistUncheckedCreateWithoutProfileInput> | Prisma.ProfileArtistCreateWithoutProfileInput[] | Prisma.ProfileArtistUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.ProfileArtistCreateOrConnectWithoutProfileInput | Prisma.ProfileArtistCreateOrConnectWithoutProfileInput[];
    createMany?: Prisma.ProfileArtistCreateManyProfileInputEnvelope;
    connect?: Prisma.ProfileArtistWhereUniqueInput | Prisma.ProfileArtistWhereUniqueInput[];
};
export type ProfileArtistUncheckedCreateNestedManyWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.ProfileArtistCreateWithoutProfileInput, Prisma.ProfileArtistUncheckedCreateWithoutProfileInput> | Prisma.ProfileArtistCreateWithoutProfileInput[] | Prisma.ProfileArtistUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.ProfileArtistCreateOrConnectWithoutProfileInput | Prisma.ProfileArtistCreateOrConnectWithoutProfileInput[];
    createMany?: Prisma.ProfileArtistCreateManyProfileInputEnvelope;
    connect?: Prisma.ProfileArtistWhereUniqueInput | Prisma.ProfileArtistWhereUniqueInput[];
};
export type ProfileArtistUpdateManyWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileArtistCreateWithoutProfileInput, Prisma.ProfileArtistUncheckedCreateWithoutProfileInput> | Prisma.ProfileArtistCreateWithoutProfileInput[] | Prisma.ProfileArtistUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.ProfileArtistCreateOrConnectWithoutProfileInput | Prisma.ProfileArtistCreateOrConnectWithoutProfileInput[];
    upsert?: Prisma.ProfileArtistUpsertWithWhereUniqueWithoutProfileInput | Prisma.ProfileArtistUpsertWithWhereUniqueWithoutProfileInput[];
    createMany?: Prisma.ProfileArtistCreateManyProfileInputEnvelope;
    set?: Prisma.ProfileArtistWhereUniqueInput | Prisma.ProfileArtistWhereUniqueInput[];
    disconnect?: Prisma.ProfileArtistWhereUniqueInput | Prisma.ProfileArtistWhereUniqueInput[];
    delete?: Prisma.ProfileArtistWhereUniqueInput | Prisma.ProfileArtistWhereUniqueInput[];
    connect?: Prisma.ProfileArtistWhereUniqueInput | Prisma.ProfileArtistWhereUniqueInput[];
    update?: Prisma.ProfileArtistUpdateWithWhereUniqueWithoutProfileInput | Prisma.ProfileArtistUpdateWithWhereUniqueWithoutProfileInput[];
    updateMany?: Prisma.ProfileArtistUpdateManyWithWhereWithoutProfileInput | Prisma.ProfileArtistUpdateManyWithWhereWithoutProfileInput[];
    deleteMany?: Prisma.ProfileArtistScalarWhereInput | Prisma.ProfileArtistScalarWhereInput[];
};
export type ProfileArtistUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileArtistCreateWithoutProfileInput, Prisma.ProfileArtistUncheckedCreateWithoutProfileInput> | Prisma.ProfileArtistCreateWithoutProfileInput[] | Prisma.ProfileArtistUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.ProfileArtistCreateOrConnectWithoutProfileInput | Prisma.ProfileArtistCreateOrConnectWithoutProfileInput[];
    upsert?: Prisma.ProfileArtistUpsertWithWhereUniqueWithoutProfileInput | Prisma.ProfileArtistUpsertWithWhereUniqueWithoutProfileInput[];
    createMany?: Prisma.ProfileArtistCreateManyProfileInputEnvelope;
    set?: Prisma.ProfileArtistWhereUniqueInput | Prisma.ProfileArtistWhereUniqueInput[];
    disconnect?: Prisma.ProfileArtistWhereUniqueInput | Prisma.ProfileArtistWhereUniqueInput[];
    delete?: Prisma.ProfileArtistWhereUniqueInput | Prisma.ProfileArtistWhereUniqueInput[];
    connect?: Prisma.ProfileArtistWhereUniqueInput | Prisma.ProfileArtistWhereUniqueInput[];
    update?: Prisma.ProfileArtistUpdateWithWhereUniqueWithoutProfileInput | Prisma.ProfileArtistUpdateWithWhereUniqueWithoutProfileInput[];
    updateMany?: Prisma.ProfileArtistUpdateManyWithWhereWithoutProfileInput | Prisma.ProfileArtistUpdateManyWithWhereWithoutProfileInput[];
    deleteMany?: Prisma.ProfileArtistScalarWhereInput | Prisma.ProfileArtistScalarWhereInput[];
};
export type ProfileArtistCreateWithoutProfileInput = {
    id?: string;
    name: string;
    image?: string | null;
    createdAt?: Date | string;
};
export type ProfileArtistUncheckedCreateWithoutProfileInput = {
    id?: string;
    name: string;
    image?: string | null;
    createdAt?: Date | string;
};
export type ProfileArtistCreateOrConnectWithoutProfileInput = {
    where: Prisma.ProfileArtistWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileArtistCreateWithoutProfileInput, Prisma.ProfileArtistUncheckedCreateWithoutProfileInput>;
};
export type ProfileArtistCreateManyProfileInputEnvelope = {
    data: Prisma.ProfileArtistCreateManyProfileInput | Prisma.ProfileArtistCreateManyProfileInput[];
    skipDuplicates?: boolean;
};
export type ProfileArtistUpsertWithWhereUniqueWithoutProfileInput = {
    where: Prisma.ProfileArtistWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProfileArtistUpdateWithoutProfileInput, Prisma.ProfileArtistUncheckedUpdateWithoutProfileInput>;
    create: Prisma.XOR<Prisma.ProfileArtistCreateWithoutProfileInput, Prisma.ProfileArtistUncheckedCreateWithoutProfileInput>;
};
export type ProfileArtistUpdateWithWhereUniqueWithoutProfileInput = {
    where: Prisma.ProfileArtistWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProfileArtistUpdateWithoutProfileInput, Prisma.ProfileArtistUncheckedUpdateWithoutProfileInput>;
};
export type ProfileArtistUpdateManyWithWhereWithoutProfileInput = {
    where: Prisma.ProfileArtistScalarWhereInput;
    data: Prisma.XOR<Prisma.ProfileArtistUpdateManyMutationInput, Prisma.ProfileArtistUncheckedUpdateManyWithoutProfileInput>;
};
export type ProfileArtistScalarWhereInput = {
    AND?: Prisma.ProfileArtistScalarWhereInput | Prisma.ProfileArtistScalarWhereInput[];
    OR?: Prisma.ProfileArtistScalarWhereInput[];
    NOT?: Prisma.ProfileArtistScalarWhereInput | Prisma.ProfileArtistScalarWhereInput[];
    id?: Prisma.StringFilter<"ProfileArtist"> | string;
    profile_id?: Prisma.StringFilter<"ProfileArtist"> | string;
    name?: Prisma.StringFilter<"ProfileArtist"> | string;
    image?: Prisma.StringNullableFilter<"ProfileArtist"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ProfileArtist"> | Date | string;
};
export type ProfileArtistCreateManyProfileInput = {
    id?: string;
    name: string;
    image?: string | null;
    createdAt?: Date | string;
};
export type ProfileArtistUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileArtistUncheckedUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileArtistUncheckedUpdateManyWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileArtistSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    profile_id?: boolean;
    name?: boolean;
    image?: boolean;
    createdAt?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["profileArtist"]>;
export type ProfileArtistSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    profile_id?: boolean;
    name?: boolean;
    image?: boolean;
    createdAt?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["profileArtist"]>;
export type ProfileArtistSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    profile_id?: boolean;
    name?: boolean;
    image?: boolean;
    createdAt?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["profileArtist"]>;
export type ProfileArtistSelectScalar = {
    id?: boolean;
    profile_id?: boolean;
    name?: boolean;
    image?: boolean;
    createdAt?: boolean;
};
export type ProfileArtistOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "profile_id" | "name" | "image" | "createdAt", ExtArgs["result"]["profileArtist"]>;
export type ProfileArtistInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type ProfileArtistIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type ProfileArtistIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type $ProfileArtistPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProfileArtist";
    objects: {
        profile: Prisma.$ProfilePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        profile_id: string;
        name: string;
        image: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["profileArtist"]>;
    composites: {};
};
export type ProfileArtistGetPayload<S extends boolean | null | undefined | ProfileArtistDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProfileArtistPayload, S>;
export type ProfileArtistCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProfileArtistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProfileArtistCountAggregateInputType | true;
};
export interface ProfileArtistDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProfileArtist'];
        meta: {
            name: 'ProfileArtist';
        };
    };
    /**
     * Find zero or one ProfileArtist that matches the filter.
     * @param {ProfileArtistFindUniqueArgs} args - Arguments to find a ProfileArtist
     * @example
     * // Get one ProfileArtist
     * const profileArtist = await prisma.profileArtist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileArtistFindUniqueArgs>(args: Prisma.SelectSubset<T, ProfileArtistFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProfileArtistClient<runtime.Types.Result.GetResult<Prisma.$ProfileArtistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ProfileArtist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileArtistFindUniqueOrThrowArgs} args - Arguments to find a ProfileArtist
     * @example
     * // Get one ProfileArtist
     * const profileArtist = await prisma.profileArtist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileArtistFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProfileArtistFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProfileArtistClient<runtime.Types.Result.GetResult<Prisma.$ProfileArtistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProfileArtist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileArtistFindFirstArgs} args - Arguments to find a ProfileArtist
     * @example
     * // Get one ProfileArtist
     * const profileArtist = await prisma.profileArtist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileArtistFindFirstArgs>(args?: Prisma.SelectSubset<T, ProfileArtistFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProfileArtistClient<runtime.Types.Result.GetResult<Prisma.$ProfileArtistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProfileArtist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileArtistFindFirstOrThrowArgs} args - Arguments to find a ProfileArtist
     * @example
     * // Get one ProfileArtist
     * const profileArtist = await prisma.profileArtist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileArtistFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProfileArtistFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProfileArtistClient<runtime.Types.Result.GetResult<Prisma.$ProfileArtistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ProfileArtists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileArtistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfileArtists
     * const profileArtists = await prisma.profileArtist.findMany()
     *
     * // Get first 10 ProfileArtists
     * const profileArtists = await prisma.profileArtist.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const profileArtistWithIdOnly = await prisma.profileArtist.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProfileArtistFindManyArgs>(args?: Prisma.SelectSubset<T, ProfileArtistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfileArtistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ProfileArtist.
     * @param {ProfileArtistCreateArgs} args - Arguments to create a ProfileArtist.
     * @example
     * // Create one ProfileArtist
     * const ProfileArtist = await prisma.profileArtist.create({
     *   data: {
     *     // ... data to create a ProfileArtist
     *   }
     * })
     *
     */
    create<T extends ProfileArtistCreateArgs>(args: Prisma.SelectSubset<T, ProfileArtistCreateArgs<ExtArgs>>): Prisma.Prisma__ProfileArtistClient<runtime.Types.Result.GetResult<Prisma.$ProfileArtistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ProfileArtists.
     * @param {ProfileArtistCreateManyArgs} args - Arguments to create many ProfileArtists.
     * @example
     * // Create many ProfileArtists
     * const profileArtist = await prisma.profileArtist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProfileArtistCreateManyArgs>(args?: Prisma.SelectSubset<T, ProfileArtistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ProfileArtists and returns the data saved in the database.
     * @param {ProfileArtistCreateManyAndReturnArgs} args - Arguments to create many ProfileArtists.
     * @example
     * // Create many ProfileArtists
     * const profileArtist = await prisma.profileArtist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ProfileArtists and only return the `id`
     * const profileArtistWithIdOnly = await prisma.profileArtist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProfileArtistCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProfileArtistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfileArtistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ProfileArtist.
     * @param {ProfileArtistDeleteArgs} args - Arguments to delete one ProfileArtist.
     * @example
     * // Delete one ProfileArtist
     * const ProfileArtist = await prisma.profileArtist.delete({
     *   where: {
     *     // ... filter to delete one ProfileArtist
     *   }
     * })
     *
     */
    delete<T extends ProfileArtistDeleteArgs>(args: Prisma.SelectSubset<T, ProfileArtistDeleteArgs<ExtArgs>>): Prisma.Prisma__ProfileArtistClient<runtime.Types.Result.GetResult<Prisma.$ProfileArtistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ProfileArtist.
     * @param {ProfileArtistUpdateArgs} args - Arguments to update one ProfileArtist.
     * @example
     * // Update one ProfileArtist
     * const profileArtist = await prisma.profileArtist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProfileArtistUpdateArgs>(args: Prisma.SelectSubset<T, ProfileArtistUpdateArgs<ExtArgs>>): Prisma.Prisma__ProfileArtistClient<runtime.Types.Result.GetResult<Prisma.$ProfileArtistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ProfileArtists.
     * @param {ProfileArtistDeleteManyArgs} args - Arguments to filter ProfileArtists to delete.
     * @example
     * // Delete a few ProfileArtists
     * const { count } = await prisma.profileArtist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProfileArtistDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProfileArtistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProfileArtists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileArtistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfileArtists
     * const profileArtist = await prisma.profileArtist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProfileArtistUpdateManyArgs>(args: Prisma.SelectSubset<T, ProfileArtistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProfileArtists and returns the data updated in the database.
     * @param {ProfileArtistUpdateManyAndReturnArgs} args - Arguments to update many ProfileArtists.
     * @example
     * // Update many ProfileArtists
     * const profileArtist = await prisma.profileArtist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ProfileArtists and only return the `id`
     * const profileArtistWithIdOnly = await prisma.profileArtist.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfileArtistUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProfileArtistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfileArtistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ProfileArtist.
     * @param {ProfileArtistUpsertArgs} args - Arguments to update or create a ProfileArtist.
     * @example
     * // Update or create a ProfileArtist
     * const profileArtist = await prisma.profileArtist.upsert({
     *   create: {
     *     // ... data to create a ProfileArtist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfileArtist we want to update
     *   }
     * })
     */
    upsert<T extends ProfileArtistUpsertArgs>(args: Prisma.SelectSubset<T, ProfileArtistUpsertArgs<ExtArgs>>): Prisma.Prisma__ProfileArtistClient<runtime.Types.Result.GetResult<Prisma.$ProfileArtistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ProfileArtists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileArtistCountArgs} args - Arguments to filter ProfileArtists to count.
     * @example
     * // Count the number of ProfileArtists
     * const count = await prisma.profileArtist.count({
     *   where: {
     *     // ... the filter for the ProfileArtists we want to count
     *   }
     * })
    **/
    count<T extends ProfileArtistCountArgs>(args?: Prisma.Subset<T, ProfileArtistCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProfileArtistCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ProfileArtist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileArtistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileArtistAggregateArgs>(args: Prisma.Subset<T, ProfileArtistAggregateArgs>): Prisma.PrismaPromise<GetProfileArtistAggregateType<T>>;
    /**
     * Group by ProfileArtist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileArtistGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ProfileArtistGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProfileArtistGroupByArgs['orderBy'];
    } : {
        orderBy?: ProfileArtistGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProfileArtistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileArtistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ProfileArtist model
     */
    readonly fields: ProfileArtistFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ProfileArtist.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ProfileArtistClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the ProfileArtist model
 */
export interface ProfileArtistFieldRefs {
    readonly id: Prisma.FieldRef<"ProfileArtist", 'String'>;
    readonly profile_id: Prisma.FieldRef<"ProfileArtist", 'String'>;
    readonly name: Prisma.FieldRef<"ProfileArtist", 'String'>;
    readonly image: Prisma.FieldRef<"ProfileArtist", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ProfileArtist", 'DateTime'>;
}
/**
 * ProfileArtist findUnique
 */
export type ProfileArtistFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProfileArtist to fetch.
     */
    where: Prisma.ProfileArtistWhereUniqueInput;
};
/**
 * ProfileArtist findUniqueOrThrow
 */
export type ProfileArtistFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProfileArtist to fetch.
     */
    where: Prisma.ProfileArtistWhereUniqueInput;
};
/**
 * ProfileArtist findFirst
 */
export type ProfileArtistFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProfileArtist to fetch.
     */
    where?: Prisma.ProfileArtistWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProfileArtists to fetch.
     */
    orderBy?: Prisma.ProfileArtistOrderByWithRelationInput | Prisma.ProfileArtistOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProfileArtists.
     */
    cursor?: Prisma.ProfileArtistWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProfileArtists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProfileArtists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProfileArtists.
     */
    distinct?: Prisma.ProfileArtistScalarFieldEnum | Prisma.ProfileArtistScalarFieldEnum[];
};
/**
 * ProfileArtist findFirstOrThrow
 */
export type ProfileArtistFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProfileArtist to fetch.
     */
    where?: Prisma.ProfileArtistWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProfileArtists to fetch.
     */
    orderBy?: Prisma.ProfileArtistOrderByWithRelationInput | Prisma.ProfileArtistOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProfileArtists.
     */
    cursor?: Prisma.ProfileArtistWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProfileArtists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProfileArtists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProfileArtists.
     */
    distinct?: Prisma.ProfileArtistScalarFieldEnum | Prisma.ProfileArtistScalarFieldEnum[];
};
/**
 * ProfileArtist findMany
 */
export type ProfileArtistFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProfileArtists to fetch.
     */
    where?: Prisma.ProfileArtistWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProfileArtists to fetch.
     */
    orderBy?: Prisma.ProfileArtistOrderByWithRelationInput | Prisma.ProfileArtistOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ProfileArtists.
     */
    cursor?: Prisma.ProfileArtistWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProfileArtists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProfileArtists.
     */
    skip?: number;
    distinct?: Prisma.ProfileArtistScalarFieldEnum | Prisma.ProfileArtistScalarFieldEnum[];
};
/**
 * ProfileArtist create
 */
export type ProfileArtistCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a ProfileArtist.
     */
    data: Prisma.XOR<Prisma.ProfileArtistCreateInput, Prisma.ProfileArtistUncheckedCreateInput>;
};
/**
 * ProfileArtist createMany
 */
export type ProfileArtistCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfileArtists.
     */
    data: Prisma.ProfileArtistCreateManyInput | Prisma.ProfileArtistCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ProfileArtist createManyAndReturn
 */
export type ProfileArtistCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileArtist
     */
    select?: Prisma.ProfileArtistSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProfileArtist
     */
    omit?: Prisma.ProfileArtistOmit<ExtArgs> | null;
    /**
     * The data used to create many ProfileArtists.
     */
    data: Prisma.ProfileArtistCreateManyInput | Prisma.ProfileArtistCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProfileArtistIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ProfileArtist update
 */
export type ProfileArtistUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a ProfileArtist.
     */
    data: Prisma.XOR<Prisma.ProfileArtistUpdateInput, Prisma.ProfileArtistUncheckedUpdateInput>;
    /**
     * Choose, which ProfileArtist to update.
     */
    where: Prisma.ProfileArtistWhereUniqueInput;
};
/**
 * ProfileArtist updateMany
 */
export type ProfileArtistUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfileArtists.
     */
    data: Prisma.XOR<Prisma.ProfileArtistUpdateManyMutationInput, Prisma.ProfileArtistUncheckedUpdateManyInput>;
    /**
     * Filter which ProfileArtists to update
     */
    where?: Prisma.ProfileArtistWhereInput;
    /**
     * Limit how many ProfileArtists to update.
     */
    limit?: number;
};
/**
 * ProfileArtist updateManyAndReturn
 */
export type ProfileArtistUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileArtist
     */
    select?: Prisma.ProfileArtistSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProfileArtist
     */
    omit?: Prisma.ProfileArtistOmit<ExtArgs> | null;
    /**
     * The data used to update ProfileArtists.
     */
    data: Prisma.XOR<Prisma.ProfileArtistUpdateManyMutationInput, Prisma.ProfileArtistUncheckedUpdateManyInput>;
    /**
     * Filter which ProfileArtists to update
     */
    where?: Prisma.ProfileArtistWhereInput;
    /**
     * Limit how many ProfileArtists to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProfileArtistIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ProfileArtist upsert
 */
export type ProfileArtistUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the ProfileArtist to update in case it exists.
     */
    where: Prisma.ProfileArtistWhereUniqueInput;
    /**
     * In case the ProfileArtist found by the `where` argument doesn't exist, create a new ProfileArtist with this data.
     */
    create: Prisma.XOR<Prisma.ProfileArtistCreateInput, Prisma.ProfileArtistUncheckedCreateInput>;
    /**
     * In case the ProfileArtist was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ProfileArtistUpdateInput, Prisma.ProfileArtistUncheckedUpdateInput>;
};
/**
 * ProfileArtist delete
 */
export type ProfileArtistDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which ProfileArtist to delete.
     */
    where: Prisma.ProfileArtistWhereUniqueInput;
};
/**
 * ProfileArtist deleteMany
 */
export type ProfileArtistDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileArtists to delete
     */
    where?: Prisma.ProfileArtistWhereInput;
    /**
     * Limit how many ProfileArtists to delete.
     */
    limit?: number;
};
/**
 * ProfileArtist without action
 */
export type ProfileArtistDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=ProfileArtist.d.ts.map