import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ProfileAlbum
 *
 */
export type ProfileAlbumModel = runtime.Types.Result.DefaultSelection<Prisma.$ProfileAlbumPayload>;
export type AggregateProfileAlbum = {
    _count: ProfileAlbumCountAggregateOutputType | null;
    _min: ProfileAlbumMinAggregateOutputType | null;
    _max: ProfileAlbumMaxAggregateOutputType | null;
};
export type ProfileAlbumMinAggregateOutputType = {
    id: string | null;
    profile_id: string | null;
    name: string | null;
    image: string | null;
    createdAt: Date | null;
};
export type ProfileAlbumMaxAggregateOutputType = {
    id: string | null;
    profile_id: string | null;
    name: string | null;
    image: string | null;
    createdAt: Date | null;
};
export type ProfileAlbumCountAggregateOutputType = {
    id: number;
    profile_id: number;
    name: number;
    image: number;
    createdAt: number;
    _all: number;
};
export type ProfileAlbumMinAggregateInputType = {
    id?: true;
    profile_id?: true;
    name?: true;
    image?: true;
    createdAt?: true;
};
export type ProfileAlbumMaxAggregateInputType = {
    id?: true;
    profile_id?: true;
    name?: true;
    image?: true;
    createdAt?: true;
};
export type ProfileAlbumCountAggregateInputType = {
    id?: true;
    profile_id?: true;
    name?: true;
    image?: true;
    createdAt?: true;
    _all?: true;
};
export type ProfileAlbumAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileAlbum to aggregate.
     */
    where?: Prisma.ProfileAlbumWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProfileAlbums to fetch.
     */
    orderBy?: Prisma.ProfileAlbumOrderByWithRelationInput | Prisma.ProfileAlbumOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ProfileAlbumWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProfileAlbums from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProfileAlbums.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ProfileAlbums
    **/
    _count?: true | ProfileAlbumCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProfileAlbumMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProfileAlbumMaxAggregateInputType;
};
export type GetProfileAlbumAggregateType<T extends ProfileAlbumAggregateArgs> = {
    [P in keyof T & keyof AggregateProfileAlbum]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProfileAlbum[P]> : Prisma.GetScalarType<T[P], AggregateProfileAlbum[P]>;
};
export type ProfileAlbumGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfileAlbumWhereInput;
    orderBy?: Prisma.ProfileAlbumOrderByWithAggregationInput | Prisma.ProfileAlbumOrderByWithAggregationInput[];
    by: Prisma.ProfileAlbumScalarFieldEnum[] | Prisma.ProfileAlbumScalarFieldEnum;
    having?: Prisma.ProfileAlbumScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProfileAlbumCountAggregateInputType | true;
    _min?: ProfileAlbumMinAggregateInputType;
    _max?: ProfileAlbumMaxAggregateInputType;
};
export type ProfileAlbumGroupByOutputType = {
    id: string;
    profile_id: string;
    name: string;
    image: string | null;
    createdAt: Date;
    _count: ProfileAlbumCountAggregateOutputType | null;
    _min: ProfileAlbumMinAggregateOutputType | null;
    _max: ProfileAlbumMaxAggregateOutputType | null;
};
type GetProfileAlbumGroupByPayload<T extends ProfileAlbumGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProfileAlbumGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProfileAlbumGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProfileAlbumGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProfileAlbumGroupByOutputType[P]>;
}>>;
export type ProfileAlbumWhereInput = {
    AND?: Prisma.ProfileAlbumWhereInput | Prisma.ProfileAlbumWhereInput[];
    OR?: Prisma.ProfileAlbumWhereInput[];
    NOT?: Prisma.ProfileAlbumWhereInput | Prisma.ProfileAlbumWhereInput[];
    id?: Prisma.StringFilter<"ProfileAlbum"> | string;
    profile_id?: Prisma.StringFilter<"ProfileAlbum"> | string;
    name?: Prisma.StringFilter<"ProfileAlbum"> | string;
    image?: Prisma.StringNullableFilter<"ProfileAlbum"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ProfileAlbum"> | Date | string;
    profile?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
};
export type ProfileAlbumOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    profile_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    image?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    profile?: Prisma.ProfileOrderByWithRelationInput;
};
export type ProfileAlbumWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    profile_id?: string;
    AND?: Prisma.ProfileAlbumWhereInput | Prisma.ProfileAlbumWhereInput[];
    OR?: Prisma.ProfileAlbumWhereInput[];
    NOT?: Prisma.ProfileAlbumWhereInput | Prisma.ProfileAlbumWhereInput[];
    name?: Prisma.StringFilter<"ProfileAlbum"> | string;
    image?: Prisma.StringNullableFilter<"ProfileAlbum"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ProfileAlbum"> | Date | string;
    profile?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
}, "id" | "profile_id">;
export type ProfileAlbumOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    profile_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    image?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ProfileAlbumCountOrderByAggregateInput;
    _max?: Prisma.ProfileAlbumMaxOrderByAggregateInput;
    _min?: Prisma.ProfileAlbumMinOrderByAggregateInput;
};
export type ProfileAlbumScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProfileAlbumScalarWhereWithAggregatesInput | Prisma.ProfileAlbumScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProfileAlbumScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProfileAlbumScalarWhereWithAggregatesInput | Prisma.ProfileAlbumScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ProfileAlbum"> | string;
    profile_id?: Prisma.StringWithAggregatesFilter<"ProfileAlbum"> | string;
    name?: Prisma.StringWithAggregatesFilter<"ProfileAlbum"> | string;
    image?: Prisma.StringNullableWithAggregatesFilter<"ProfileAlbum"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ProfileAlbum"> | Date | string;
};
export type ProfileAlbumCreateInput = {
    id?: string;
    name: string;
    image?: string | null;
    createdAt?: Date | string;
    profile: Prisma.ProfileCreateNestedOneWithoutAlbumsInput;
};
export type ProfileAlbumUncheckedCreateInput = {
    id?: string;
    profile_id: string;
    name: string;
    image?: string | null;
    createdAt?: Date | string;
};
export type ProfileAlbumUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.ProfileUpdateOneRequiredWithoutAlbumsNestedInput;
};
export type ProfileAlbumUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profile_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileAlbumCreateManyInput = {
    id?: string;
    profile_id: string;
    name: string;
    image?: string | null;
    createdAt?: Date | string;
};
export type ProfileAlbumUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileAlbumUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profile_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileAlbumListRelationFilter = {
    every?: Prisma.ProfileAlbumWhereInput;
    some?: Prisma.ProfileAlbumWhereInput;
    none?: Prisma.ProfileAlbumWhereInput;
};
export type ProfileAlbumOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProfileAlbumCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profile_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProfileAlbumMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profile_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProfileAlbumMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profile_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProfileAlbumCreateNestedManyWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.ProfileAlbumCreateWithoutProfileInput, Prisma.ProfileAlbumUncheckedCreateWithoutProfileInput> | Prisma.ProfileAlbumCreateWithoutProfileInput[] | Prisma.ProfileAlbumUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.ProfileAlbumCreateOrConnectWithoutProfileInput | Prisma.ProfileAlbumCreateOrConnectWithoutProfileInput[];
    createMany?: Prisma.ProfileAlbumCreateManyProfileInputEnvelope;
    connect?: Prisma.ProfileAlbumWhereUniqueInput | Prisma.ProfileAlbumWhereUniqueInput[];
};
export type ProfileAlbumUncheckedCreateNestedManyWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.ProfileAlbumCreateWithoutProfileInput, Prisma.ProfileAlbumUncheckedCreateWithoutProfileInput> | Prisma.ProfileAlbumCreateWithoutProfileInput[] | Prisma.ProfileAlbumUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.ProfileAlbumCreateOrConnectWithoutProfileInput | Prisma.ProfileAlbumCreateOrConnectWithoutProfileInput[];
    createMany?: Prisma.ProfileAlbumCreateManyProfileInputEnvelope;
    connect?: Prisma.ProfileAlbumWhereUniqueInput | Prisma.ProfileAlbumWhereUniqueInput[];
};
export type ProfileAlbumUpdateManyWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileAlbumCreateWithoutProfileInput, Prisma.ProfileAlbumUncheckedCreateWithoutProfileInput> | Prisma.ProfileAlbumCreateWithoutProfileInput[] | Prisma.ProfileAlbumUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.ProfileAlbumCreateOrConnectWithoutProfileInput | Prisma.ProfileAlbumCreateOrConnectWithoutProfileInput[];
    upsert?: Prisma.ProfileAlbumUpsertWithWhereUniqueWithoutProfileInput | Prisma.ProfileAlbumUpsertWithWhereUniqueWithoutProfileInput[];
    createMany?: Prisma.ProfileAlbumCreateManyProfileInputEnvelope;
    set?: Prisma.ProfileAlbumWhereUniqueInput | Prisma.ProfileAlbumWhereUniqueInput[];
    disconnect?: Prisma.ProfileAlbumWhereUniqueInput | Prisma.ProfileAlbumWhereUniqueInput[];
    delete?: Prisma.ProfileAlbumWhereUniqueInput | Prisma.ProfileAlbumWhereUniqueInput[];
    connect?: Prisma.ProfileAlbumWhereUniqueInput | Prisma.ProfileAlbumWhereUniqueInput[];
    update?: Prisma.ProfileAlbumUpdateWithWhereUniqueWithoutProfileInput | Prisma.ProfileAlbumUpdateWithWhereUniqueWithoutProfileInput[];
    updateMany?: Prisma.ProfileAlbumUpdateManyWithWhereWithoutProfileInput | Prisma.ProfileAlbumUpdateManyWithWhereWithoutProfileInput[];
    deleteMany?: Prisma.ProfileAlbumScalarWhereInput | Prisma.ProfileAlbumScalarWhereInput[];
};
export type ProfileAlbumUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileAlbumCreateWithoutProfileInput, Prisma.ProfileAlbumUncheckedCreateWithoutProfileInput> | Prisma.ProfileAlbumCreateWithoutProfileInput[] | Prisma.ProfileAlbumUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.ProfileAlbumCreateOrConnectWithoutProfileInput | Prisma.ProfileAlbumCreateOrConnectWithoutProfileInput[];
    upsert?: Prisma.ProfileAlbumUpsertWithWhereUniqueWithoutProfileInput | Prisma.ProfileAlbumUpsertWithWhereUniqueWithoutProfileInput[];
    createMany?: Prisma.ProfileAlbumCreateManyProfileInputEnvelope;
    set?: Prisma.ProfileAlbumWhereUniqueInput | Prisma.ProfileAlbumWhereUniqueInput[];
    disconnect?: Prisma.ProfileAlbumWhereUniqueInput | Prisma.ProfileAlbumWhereUniqueInput[];
    delete?: Prisma.ProfileAlbumWhereUniqueInput | Prisma.ProfileAlbumWhereUniqueInput[];
    connect?: Prisma.ProfileAlbumWhereUniqueInput | Prisma.ProfileAlbumWhereUniqueInput[];
    update?: Prisma.ProfileAlbumUpdateWithWhereUniqueWithoutProfileInput | Prisma.ProfileAlbumUpdateWithWhereUniqueWithoutProfileInput[];
    updateMany?: Prisma.ProfileAlbumUpdateManyWithWhereWithoutProfileInput | Prisma.ProfileAlbumUpdateManyWithWhereWithoutProfileInput[];
    deleteMany?: Prisma.ProfileAlbumScalarWhereInput | Prisma.ProfileAlbumScalarWhereInput[];
};
export type ProfileAlbumCreateWithoutProfileInput = {
    id?: string;
    name: string;
    image?: string | null;
    createdAt?: Date | string;
};
export type ProfileAlbumUncheckedCreateWithoutProfileInput = {
    id?: string;
    name: string;
    image?: string | null;
    createdAt?: Date | string;
};
export type ProfileAlbumCreateOrConnectWithoutProfileInput = {
    where: Prisma.ProfileAlbumWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileAlbumCreateWithoutProfileInput, Prisma.ProfileAlbumUncheckedCreateWithoutProfileInput>;
};
export type ProfileAlbumCreateManyProfileInputEnvelope = {
    data: Prisma.ProfileAlbumCreateManyProfileInput | Prisma.ProfileAlbumCreateManyProfileInput[];
    skipDuplicates?: boolean;
};
export type ProfileAlbumUpsertWithWhereUniqueWithoutProfileInput = {
    where: Prisma.ProfileAlbumWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProfileAlbumUpdateWithoutProfileInput, Prisma.ProfileAlbumUncheckedUpdateWithoutProfileInput>;
    create: Prisma.XOR<Prisma.ProfileAlbumCreateWithoutProfileInput, Prisma.ProfileAlbumUncheckedCreateWithoutProfileInput>;
};
export type ProfileAlbumUpdateWithWhereUniqueWithoutProfileInput = {
    where: Prisma.ProfileAlbumWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProfileAlbumUpdateWithoutProfileInput, Prisma.ProfileAlbumUncheckedUpdateWithoutProfileInput>;
};
export type ProfileAlbumUpdateManyWithWhereWithoutProfileInput = {
    where: Prisma.ProfileAlbumScalarWhereInput;
    data: Prisma.XOR<Prisma.ProfileAlbumUpdateManyMutationInput, Prisma.ProfileAlbumUncheckedUpdateManyWithoutProfileInput>;
};
export type ProfileAlbumScalarWhereInput = {
    AND?: Prisma.ProfileAlbumScalarWhereInput | Prisma.ProfileAlbumScalarWhereInput[];
    OR?: Prisma.ProfileAlbumScalarWhereInput[];
    NOT?: Prisma.ProfileAlbumScalarWhereInput | Prisma.ProfileAlbumScalarWhereInput[];
    id?: Prisma.StringFilter<"ProfileAlbum"> | string;
    profile_id?: Prisma.StringFilter<"ProfileAlbum"> | string;
    name?: Prisma.StringFilter<"ProfileAlbum"> | string;
    image?: Prisma.StringNullableFilter<"ProfileAlbum"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ProfileAlbum"> | Date | string;
};
export type ProfileAlbumCreateManyProfileInput = {
    id?: string;
    name: string;
    image?: string | null;
    createdAt?: Date | string;
};
export type ProfileAlbumUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileAlbumUncheckedUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileAlbumUncheckedUpdateManyWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileAlbumSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    profile_id?: boolean;
    name?: boolean;
    image?: boolean;
    createdAt?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["profileAlbum"]>;
export type ProfileAlbumSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    profile_id?: boolean;
    name?: boolean;
    image?: boolean;
    createdAt?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["profileAlbum"]>;
export type ProfileAlbumSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    profile_id?: boolean;
    name?: boolean;
    image?: boolean;
    createdAt?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["profileAlbum"]>;
export type ProfileAlbumSelectScalar = {
    id?: boolean;
    profile_id?: boolean;
    name?: boolean;
    image?: boolean;
    createdAt?: boolean;
};
export type ProfileAlbumOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "profile_id" | "name" | "image" | "createdAt", ExtArgs["result"]["profileAlbum"]>;
export type ProfileAlbumInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type ProfileAlbumIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type ProfileAlbumIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type $ProfileAlbumPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProfileAlbum";
    objects: {
        profile: Prisma.$ProfilePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        profile_id: string;
        name: string;
        image: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["profileAlbum"]>;
    composites: {};
};
export type ProfileAlbumGetPayload<S extends boolean | null | undefined | ProfileAlbumDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProfileAlbumPayload, S>;
export type ProfileAlbumCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProfileAlbumFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProfileAlbumCountAggregateInputType | true;
};
export interface ProfileAlbumDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProfileAlbum'];
        meta: {
            name: 'ProfileAlbum';
        };
    };
    /**
     * Find zero or one ProfileAlbum that matches the filter.
     * @param {ProfileAlbumFindUniqueArgs} args - Arguments to find a ProfileAlbum
     * @example
     * // Get one ProfileAlbum
     * const profileAlbum = await prisma.profileAlbum.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileAlbumFindUniqueArgs>(args: Prisma.SelectSubset<T, ProfileAlbumFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProfileAlbumClient<runtime.Types.Result.GetResult<Prisma.$ProfileAlbumPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ProfileAlbum that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileAlbumFindUniqueOrThrowArgs} args - Arguments to find a ProfileAlbum
     * @example
     * // Get one ProfileAlbum
     * const profileAlbum = await prisma.profileAlbum.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileAlbumFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProfileAlbumFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProfileAlbumClient<runtime.Types.Result.GetResult<Prisma.$ProfileAlbumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProfileAlbum that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAlbumFindFirstArgs} args - Arguments to find a ProfileAlbum
     * @example
     * // Get one ProfileAlbum
     * const profileAlbum = await prisma.profileAlbum.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileAlbumFindFirstArgs>(args?: Prisma.SelectSubset<T, ProfileAlbumFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProfileAlbumClient<runtime.Types.Result.GetResult<Prisma.$ProfileAlbumPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProfileAlbum that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAlbumFindFirstOrThrowArgs} args - Arguments to find a ProfileAlbum
     * @example
     * // Get one ProfileAlbum
     * const profileAlbum = await prisma.profileAlbum.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileAlbumFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProfileAlbumFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProfileAlbumClient<runtime.Types.Result.GetResult<Prisma.$ProfileAlbumPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ProfileAlbums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAlbumFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfileAlbums
     * const profileAlbums = await prisma.profileAlbum.findMany()
     *
     * // Get first 10 ProfileAlbums
     * const profileAlbums = await prisma.profileAlbum.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const profileAlbumWithIdOnly = await prisma.profileAlbum.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProfileAlbumFindManyArgs>(args?: Prisma.SelectSubset<T, ProfileAlbumFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfileAlbumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ProfileAlbum.
     * @param {ProfileAlbumCreateArgs} args - Arguments to create a ProfileAlbum.
     * @example
     * // Create one ProfileAlbum
     * const ProfileAlbum = await prisma.profileAlbum.create({
     *   data: {
     *     // ... data to create a ProfileAlbum
     *   }
     * })
     *
     */
    create<T extends ProfileAlbumCreateArgs>(args: Prisma.SelectSubset<T, ProfileAlbumCreateArgs<ExtArgs>>): Prisma.Prisma__ProfileAlbumClient<runtime.Types.Result.GetResult<Prisma.$ProfileAlbumPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ProfileAlbums.
     * @param {ProfileAlbumCreateManyArgs} args - Arguments to create many ProfileAlbums.
     * @example
     * // Create many ProfileAlbums
     * const profileAlbum = await prisma.profileAlbum.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProfileAlbumCreateManyArgs>(args?: Prisma.SelectSubset<T, ProfileAlbumCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ProfileAlbums and returns the data saved in the database.
     * @param {ProfileAlbumCreateManyAndReturnArgs} args - Arguments to create many ProfileAlbums.
     * @example
     * // Create many ProfileAlbums
     * const profileAlbum = await prisma.profileAlbum.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ProfileAlbums and only return the `id`
     * const profileAlbumWithIdOnly = await prisma.profileAlbum.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProfileAlbumCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProfileAlbumCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfileAlbumPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ProfileAlbum.
     * @param {ProfileAlbumDeleteArgs} args - Arguments to delete one ProfileAlbum.
     * @example
     * // Delete one ProfileAlbum
     * const ProfileAlbum = await prisma.profileAlbum.delete({
     *   where: {
     *     // ... filter to delete one ProfileAlbum
     *   }
     * })
     *
     */
    delete<T extends ProfileAlbumDeleteArgs>(args: Prisma.SelectSubset<T, ProfileAlbumDeleteArgs<ExtArgs>>): Prisma.Prisma__ProfileAlbumClient<runtime.Types.Result.GetResult<Prisma.$ProfileAlbumPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ProfileAlbum.
     * @param {ProfileAlbumUpdateArgs} args - Arguments to update one ProfileAlbum.
     * @example
     * // Update one ProfileAlbum
     * const profileAlbum = await prisma.profileAlbum.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProfileAlbumUpdateArgs>(args: Prisma.SelectSubset<T, ProfileAlbumUpdateArgs<ExtArgs>>): Prisma.Prisma__ProfileAlbumClient<runtime.Types.Result.GetResult<Prisma.$ProfileAlbumPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ProfileAlbums.
     * @param {ProfileAlbumDeleteManyArgs} args - Arguments to filter ProfileAlbums to delete.
     * @example
     * // Delete a few ProfileAlbums
     * const { count } = await prisma.profileAlbum.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProfileAlbumDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProfileAlbumDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProfileAlbums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAlbumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfileAlbums
     * const profileAlbum = await prisma.profileAlbum.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProfileAlbumUpdateManyArgs>(args: Prisma.SelectSubset<T, ProfileAlbumUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProfileAlbums and returns the data updated in the database.
     * @param {ProfileAlbumUpdateManyAndReturnArgs} args - Arguments to update many ProfileAlbums.
     * @example
     * // Update many ProfileAlbums
     * const profileAlbum = await prisma.profileAlbum.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ProfileAlbums and only return the `id`
     * const profileAlbumWithIdOnly = await prisma.profileAlbum.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfileAlbumUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProfileAlbumUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfileAlbumPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ProfileAlbum.
     * @param {ProfileAlbumUpsertArgs} args - Arguments to update or create a ProfileAlbum.
     * @example
     * // Update or create a ProfileAlbum
     * const profileAlbum = await prisma.profileAlbum.upsert({
     *   create: {
     *     // ... data to create a ProfileAlbum
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfileAlbum we want to update
     *   }
     * })
     */
    upsert<T extends ProfileAlbumUpsertArgs>(args: Prisma.SelectSubset<T, ProfileAlbumUpsertArgs<ExtArgs>>): Prisma.Prisma__ProfileAlbumClient<runtime.Types.Result.GetResult<Prisma.$ProfileAlbumPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ProfileAlbums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAlbumCountArgs} args - Arguments to filter ProfileAlbums to count.
     * @example
     * // Count the number of ProfileAlbums
     * const count = await prisma.profileAlbum.count({
     *   where: {
     *     // ... the filter for the ProfileAlbums we want to count
     *   }
     * })
    **/
    count<T extends ProfileAlbumCountArgs>(args?: Prisma.Subset<T, ProfileAlbumCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProfileAlbumCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ProfileAlbum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAlbumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAlbumAggregateArgs>(args: Prisma.Subset<T, ProfileAlbumAggregateArgs>): Prisma.PrismaPromise<GetProfileAlbumAggregateType<T>>;
    /**
     * Group by ProfileAlbum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAlbumGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ProfileAlbumGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProfileAlbumGroupByArgs['orderBy'];
    } : {
        orderBy?: ProfileAlbumGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProfileAlbumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileAlbumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ProfileAlbum model
     */
    readonly fields: ProfileAlbumFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ProfileAlbum.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ProfileAlbumClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the ProfileAlbum model
 */
export interface ProfileAlbumFieldRefs {
    readonly id: Prisma.FieldRef<"ProfileAlbum", 'String'>;
    readonly profile_id: Prisma.FieldRef<"ProfileAlbum", 'String'>;
    readonly name: Prisma.FieldRef<"ProfileAlbum", 'String'>;
    readonly image: Prisma.FieldRef<"ProfileAlbum", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ProfileAlbum", 'DateTime'>;
}
/**
 * ProfileAlbum findUnique
 */
export type ProfileAlbumFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProfileAlbum to fetch.
     */
    where: Prisma.ProfileAlbumWhereUniqueInput;
};
/**
 * ProfileAlbum findUniqueOrThrow
 */
export type ProfileAlbumFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProfileAlbum to fetch.
     */
    where: Prisma.ProfileAlbumWhereUniqueInput;
};
/**
 * ProfileAlbum findFirst
 */
export type ProfileAlbumFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProfileAlbum to fetch.
     */
    where?: Prisma.ProfileAlbumWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProfileAlbums to fetch.
     */
    orderBy?: Prisma.ProfileAlbumOrderByWithRelationInput | Prisma.ProfileAlbumOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProfileAlbums.
     */
    cursor?: Prisma.ProfileAlbumWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProfileAlbums from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProfileAlbums.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProfileAlbums.
     */
    distinct?: Prisma.ProfileAlbumScalarFieldEnum | Prisma.ProfileAlbumScalarFieldEnum[];
};
/**
 * ProfileAlbum findFirstOrThrow
 */
export type ProfileAlbumFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProfileAlbum to fetch.
     */
    where?: Prisma.ProfileAlbumWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProfileAlbums to fetch.
     */
    orderBy?: Prisma.ProfileAlbumOrderByWithRelationInput | Prisma.ProfileAlbumOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProfileAlbums.
     */
    cursor?: Prisma.ProfileAlbumWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProfileAlbums from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProfileAlbums.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProfileAlbums.
     */
    distinct?: Prisma.ProfileAlbumScalarFieldEnum | Prisma.ProfileAlbumScalarFieldEnum[];
};
/**
 * ProfileAlbum findMany
 */
export type ProfileAlbumFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProfileAlbums to fetch.
     */
    where?: Prisma.ProfileAlbumWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProfileAlbums to fetch.
     */
    orderBy?: Prisma.ProfileAlbumOrderByWithRelationInput | Prisma.ProfileAlbumOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ProfileAlbums.
     */
    cursor?: Prisma.ProfileAlbumWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProfileAlbums from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProfileAlbums.
     */
    skip?: number;
    distinct?: Prisma.ProfileAlbumScalarFieldEnum | Prisma.ProfileAlbumScalarFieldEnum[];
};
/**
 * ProfileAlbum create
 */
export type ProfileAlbumCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a ProfileAlbum.
     */
    data: Prisma.XOR<Prisma.ProfileAlbumCreateInput, Prisma.ProfileAlbumUncheckedCreateInput>;
};
/**
 * ProfileAlbum createMany
 */
export type ProfileAlbumCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfileAlbums.
     */
    data: Prisma.ProfileAlbumCreateManyInput | Prisma.ProfileAlbumCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ProfileAlbum createManyAndReturn
 */
export type ProfileAlbumCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAlbum
     */
    select?: Prisma.ProfileAlbumSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProfileAlbum
     */
    omit?: Prisma.ProfileAlbumOmit<ExtArgs> | null;
    /**
     * The data used to create many ProfileAlbums.
     */
    data: Prisma.ProfileAlbumCreateManyInput | Prisma.ProfileAlbumCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProfileAlbumIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ProfileAlbum update
 */
export type ProfileAlbumUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a ProfileAlbum.
     */
    data: Prisma.XOR<Prisma.ProfileAlbumUpdateInput, Prisma.ProfileAlbumUncheckedUpdateInput>;
    /**
     * Choose, which ProfileAlbum to update.
     */
    where: Prisma.ProfileAlbumWhereUniqueInput;
};
/**
 * ProfileAlbum updateMany
 */
export type ProfileAlbumUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfileAlbums.
     */
    data: Prisma.XOR<Prisma.ProfileAlbumUpdateManyMutationInput, Prisma.ProfileAlbumUncheckedUpdateManyInput>;
    /**
     * Filter which ProfileAlbums to update
     */
    where?: Prisma.ProfileAlbumWhereInput;
    /**
     * Limit how many ProfileAlbums to update.
     */
    limit?: number;
};
/**
 * ProfileAlbum updateManyAndReturn
 */
export type ProfileAlbumUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAlbum
     */
    select?: Prisma.ProfileAlbumSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProfileAlbum
     */
    omit?: Prisma.ProfileAlbumOmit<ExtArgs> | null;
    /**
     * The data used to update ProfileAlbums.
     */
    data: Prisma.XOR<Prisma.ProfileAlbumUpdateManyMutationInput, Prisma.ProfileAlbumUncheckedUpdateManyInput>;
    /**
     * Filter which ProfileAlbums to update
     */
    where?: Prisma.ProfileAlbumWhereInput;
    /**
     * Limit how many ProfileAlbums to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProfileAlbumIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ProfileAlbum upsert
 */
export type ProfileAlbumUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the ProfileAlbum to update in case it exists.
     */
    where: Prisma.ProfileAlbumWhereUniqueInput;
    /**
     * In case the ProfileAlbum found by the `where` argument doesn't exist, create a new ProfileAlbum with this data.
     */
    create: Prisma.XOR<Prisma.ProfileAlbumCreateInput, Prisma.ProfileAlbumUncheckedCreateInput>;
    /**
     * In case the ProfileAlbum was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ProfileAlbumUpdateInput, Prisma.ProfileAlbumUncheckedUpdateInput>;
};
/**
 * ProfileAlbum delete
 */
export type ProfileAlbumDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which ProfileAlbum to delete.
     */
    where: Prisma.ProfileAlbumWhereUniqueInput;
};
/**
 * ProfileAlbum deleteMany
 */
export type ProfileAlbumDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileAlbums to delete
     */
    where?: Prisma.ProfileAlbumWhereInput;
    /**
     * Limit how many ProfileAlbums to delete.
     */
    limit?: number;
};
/**
 * ProfileAlbum without action
 */
export type ProfileAlbumDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=ProfileAlbum.d.ts.map