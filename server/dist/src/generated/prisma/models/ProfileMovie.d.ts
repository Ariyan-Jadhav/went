import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ProfileMovie
 *
 */
export type ProfileMovieModel = runtime.Types.Result.DefaultSelection<Prisma.$ProfileMoviePayload>;
export type AggregateProfileMovie = {
    _count: ProfileMovieCountAggregateOutputType | null;
    _min: ProfileMovieMinAggregateOutputType | null;
    _max: ProfileMovieMaxAggregateOutputType | null;
};
export type ProfileMovieMinAggregateOutputType = {
    id: string | null;
    profile_id: string | null;
    title: string | null;
    year: string | null;
    type: string | null;
    poster: string | null;
    createdAt: Date | null;
};
export type ProfileMovieMaxAggregateOutputType = {
    id: string | null;
    profile_id: string | null;
    title: string | null;
    year: string | null;
    type: string | null;
    poster: string | null;
    createdAt: Date | null;
};
export type ProfileMovieCountAggregateOutputType = {
    id: number;
    profile_id: number;
    title: number;
    year: number;
    type: number;
    poster: number;
    createdAt: number;
    _all: number;
};
export type ProfileMovieMinAggregateInputType = {
    id?: true;
    profile_id?: true;
    title?: true;
    year?: true;
    type?: true;
    poster?: true;
    createdAt?: true;
};
export type ProfileMovieMaxAggregateInputType = {
    id?: true;
    profile_id?: true;
    title?: true;
    year?: true;
    type?: true;
    poster?: true;
    createdAt?: true;
};
export type ProfileMovieCountAggregateInputType = {
    id?: true;
    profile_id?: true;
    title?: true;
    year?: true;
    type?: true;
    poster?: true;
    createdAt?: true;
    _all?: true;
};
export type ProfileMovieAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileMovie to aggregate.
     */
    where?: Prisma.ProfileMovieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProfileMovies to fetch.
     */
    orderBy?: Prisma.ProfileMovieOrderByWithRelationInput | Prisma.ProfileMovieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ProfileMovieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProfileMovies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProfileMovies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ProfileMovies
    **/
    _count?: true | ProfileMovieCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMovieMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMovieMaxAggregateInputType;
};
export type GetProfileMovieAggregateType<T extends ProfileMovieAggregateArgs> = {
    [P in keyof T & keyof AggregateProfileMovie]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProfileMovie[P]> : Prisma.GetScalarType<T[P], AggregateProfileMovie[P]>;
};
export type ProfileMovieGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfileMovieWhereInput;
    orderBy?: Prisma.ProfileMovieOrderByWithAggregationInput | Prisma.ProfileMovieOrderByWithAggregationInput[];
    by: Prisma.ProfileMovieScalarFieldEnum[] | Prisma.ProfileMovieScalarFieldEnum;
    having?: Prisma.ProfileMovieScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProfileMovieCountAggregateInputType | true;
    _min?: ProfileMovieMinAggregateInputType;
    _max?: ProfileMovieMaxAggregateInputType;
};
export type ProfileMovieGroupByOutputType = {
    id: string;
    profile_id: string;
    title: string;
    year: string;
    type: string;
    poster: string | null;
    createdAt: Date;
    _count: ProfileMovieCountAggregateOutputType | null;
    _min: ProfileMovieMinAggregateOutputType | null;
    _max: ProfileMovieMaxAggregateOutputType | null;
};
type GetProfileMovieGroupByPayload<T extends ProfileMovieGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProfileMovieGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProfileMovieGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProfileMovieGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProfileMovieGroupByOutputType[P]>;
}>>;
export type ProfileMovieWhereInput = {
    AND?: Prisma.ProfileMovieWhereInput | Prisma.ProfileMovieWhereInput[];
    OR?: Prisma.ProfileMovieWhereInput[];
    NOT?: Prisma.ProfileMovieWhereInput | Prisma.ProfileMovieWhereInput[];
    id?: Prisma.StringFilter<"ProfileMovie"> | string;
    profile_id?: Prisma.StringFilter<"ProfileMovie"> | string;
    title?: Prisma.StringFilter<"ProfileMovie"> | string;
    year?: Prisma.StringFilter<"ProfileMovie"> | string;
    type?: Prisma.StringFilter<"ProfileMovie"> | string;
    poster?: Prisma.StringNullableFilter<"ProfileMovie"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ProfileMovie"> | Date | string;
    profile?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
};
export type ProfileMovieOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    profile_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    poster?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    profile?: Prisma.ProfileOrderByWithRelationInput;
};
export type ProfileMovieWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    profile_id?: string;
    AND?: Prisma.ProfileMovieWhereInput | Prisma.ProfileMovieWhereInput[];
    OR?: Prisma.ProfileMovieWhereInput[];
    NOT?: Prisma.ProfileMovieWhereInput | Prisma.ProfileMovieWhereInput[];
    title?: Prisma.StringFilter<"ProfileMovie"> | string;
    year?: Prisma.StringFilter<"ProfileMovie"> | string;
    type?: Prisma.StringFilter<"ProfileMovie"> | string;
    poster?: Prisma.StringNullableFilter<"ProfileMovie"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ProfileMovie"> | Date | string;
    profile?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
}, "id" | "profile_id">;
export type ProfileMovieOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    profile_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    poster?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ProfileMovieCountOrderByAggregateInput;
    _max?: Prisma.ProfileMovieMaxOrderByAggregateInput;
    _min?: Prisma.ProfileMovieMinOrderByAggregateInput;
};
export type ProfileMovieScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProfileMovieScalarWhereWithAggregatesInput | Prisma.ProfileMovieScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProfileMovieScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProfileMovieScalarWhereWithAggregatesInput | Prisma.ProfileMovieScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ProfileMovie"> | string;
    profile_id?: Prisma.StringWithAggregatesFilter<"ProfileMovie"> | string;
    title?: Prisma.StringWithAggregatesFilter<"ProfileMovie"> | string;
    year?: Prisma.StringWithAggregatesFilter<"ProfileMovie"> | string;
    type?: Prisma.StringWithAggregatesFilter<"ProfileMovie"> | string;
    poster?: Prisma.StringNullableWithAggregatesFilter<"ProfileMovie"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ProfileMovie"> | Date | string;
};
export type ProfileMovieCreateInput = {
    id?: string;
    title: string;
    year: string;
    type: string;
    poster?: string | null;
    createdAt?: Date | string;
    profile: Prisma.ProfileCreateNestedOneWithoutMoviesInput;
};
export type ProfileMovieUncheckedCreateInput = {
    id?: string;
    profile_id: string;
    title: string;
    year: string;
    type: string;
    poster?: string | null;
    createdAt?: Date | string;
};
export type ProfileMovieUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    poster?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.ProfileUpdateOneRequiredWithoutMoviesNestedInput;
};
export type ProfileMovieUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profile_id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    poster?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileMovieCreateManyInput = {
    id?: string;
    profile_id: string;
    title: string;
    year: string;
    type: string;
    poster?: string | null;
    createdAt?: Date | string;
};
export type ProfileMovieUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    poster?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileMovieUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profile_id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    poster?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileMovieListRelationFilter = {
    every?: Prisma.ProfileMovieWhereInput;
    some?: Prisma.ProfileMovieWhereInput;
    none?: Prisma.ProfileMovieWhereInput;
};
export type ProfileMovieOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProfileMovieCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profile_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    poster?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProfileMovieMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profile_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    poster?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProfileMovieMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profile_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    poster?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProfileMovieCreateNestedManyWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.ProfileMovieCreateWithoutProfileInput, Prisma.ProfileMovieUncheckedCreateWithoutProfileInput> | Prisma.ProfileMovieCreateWithoutProfileInput[] | Prisma.ProfileMovieUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.ProfileMovieCreateOrConnectWithoutProfileInput | Prisma.ProfileMovieCreateOrConnectWithoutProfileInput[];
    createMany?: Prisma.ProfileMovieCreateManyProfileInputEnvelope;
    connect?: Prisma.ProfileMovieWhereUniqueInput | Prisma.ProfileMovieWhereUniqueInput[];
};
export type ProfileMovieUncheckedCreateNestedManyWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.ProfileMovieCreateWithoutProfileInput, Prisma.ProfileMovieUncheckedCreateWithoutProfileInput> | Prisma.ProfileMovieCreateWithoutProfileInput[] | Prisma.ProfileMovieUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.ProfileMovieCreateOrConnectWithoutProfileInput | Prisma.ProfileMovieCreateOrConnectWithoutProfileInput[];
    createMany?: Prisma.ProfileMovieCreateManyProfileInputEnvelope;
    connect?: Prisma.ProfileMovieWhereUniqueInput | Prisma.ProfileMovieWhereUniqueInput[];
};
export type ProfileMovieUpdateManyWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileMovieCreateWithoutProfileInput, Prisma.ProfileMovieUncheckedCreateWithoutProfileInput> | Prisma.ProfileMovieCreateWithoutProfileInput[] | Prisma.ProfileMovieUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.ProfileMovieCreateOrConnectWithoutProfileInput | Prisma.ProfileMovieCreateOrConnectWithoutProfileInput[];
    upsert?: Prisma.ProfileMovieUpsertWithWhereUniqueWithoutProfileInput | Prisma.ProfileMovieUpsertWithWhereUniqueWithoutProfileInput[];
    createMany?: Prisma.ProfileMovieCreateManyProfileInputEnvelope;
    set?: Prisma.ProfileMovieWhereUniqueInput | Prisma.ProfileMovieWhereUniqueInput[];
    disconnect?: Prisma.ProfileMovieWhereUniqueInput | Prisma.ProfileMovieWhereUniqueInput[];
    delete?: Prisma.ProfileMovieWhereUniqueInput | Prisma.ProfileMovieWhereUniqueInput[];
    connect?: Prisma.ProfileMovieWhereUniqueInput | Prisma.ProfileMovieWhereUniqueInput[];
    update?: Prisma.ProfileMovieUpdateWithWhereUniqueWithoutProfileInput | Prisma.ProfileMovieUpdateWithWhereUniqueWithoutProfileInput[];
    updateMany?: Prisma.ProfileMovieUpdateManyWithWhereWithoutProfileInput | Prisma.ProfileMovieUpdateManyWithWhereWithoutProfileInput[];
    deleteMany?: Prisma.ProfileMovieScalarWhereInput | Prisma.ProfileMovieScalarWhereInput[];
};
export type ProfileMovieUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileMovieCreateWithoutProfileInput, Prisma.ProfileMovieUncheckedCreateWithoutProfileInput> | Prisma.ProfileMovieCreateWithoutProfileInput[] | Prisma.ProfileMovieUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.ProfileMovieCreateOrConnectWithoutProfileInput | Prisma.ProfileMovieCreateOrConnectWithoutProfileInput[];
    upsert?: Prisma.ProfileMovieUpsertWithWhereUniqueWithoutProfileInput | Prisma.ProfileMovieUpsertWithWhereUniqueWithoutProfileInput[];
    createMany?: Prisma.ProfileMovieCreateManyProfileInputEnvelope;
    set?: Prisma.ProfileMovieWhereUniqueInput | Prisma.ProfileMovieWhereUniqueInput[];
    disconnect?: Prisma.ProfileMovieWhereUniqueInput | Prisma.ProfileMovieWhereUniqueInput[];
    delete?: Prisma.ProfileMovieWhereUniqueInput | Prisma.ProfileMovieWhereUniqueInput[];
    connect?: Prisma.ProfileMovieWhereUniqueInput | Prisma.ProfileMovieWhereUniqueInput[];
    update?: Prisma.ProfileMovieUpdateWithWhereUniqueWithoutProfileInput | Prisma.ProfileMovieUpdateWithWhereUniqueWithoutProfileInput[];
    updateMany?: Prisma.ProfileMovieUpdateManyWithWhereWithoutProfileInput | Prisma.ProfileMovieUpdateManyWithWhereWithoutProfileInput[];
    deleteMany?: Prisma.ProfileMovieScalarWhereInput | Prisma.ProfileMovieScalarWhereInput[];
};
export type ProfileMovieCreateWithoutProfileInput = {
    id?: string;
    title: string;
    year: string;
    type: string;
    poster?: string | null;
    createdAt?: Date | string;
};
export type ProfileMovieUncheckedCreateWithoutProfileInput = {
    id?: string;
    title: string;
    year: string;
    type: string;
    poster?: string | null;
    createdAt?: Date | string;
};
export type ProfileMovieCreateOrConnectWithoutProfileInput = {
    where: Prisma.ProfileMovieWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileMovieCreateWithoutProfileInput, Prisma.ProfileMovieUncheckedCreateWithoutProfileInput>;
};
export type ProfileMovieCreateManyProfileInputEnvelope = {
    data: Prisma.ProfileMovieCreateManyProfileInput | Prisma.ProfileMovieCreateManyProfileInput[];
    skipDuplicates?: boolean;
};
export type ProfileMovieUpsertWithWhereUniqueWithoutProfileInput = {
    where: Prisma.ProfileMovieWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProfileMovieUpdateWithoutProfileInput, Prisma.ProfileMovieUncheckedUpdateWithoutProfileInput>;
    create: Prisma.XOR<Prisma.ProfileMovieCreateWithoutProfileInput, Prisma.ProfileMovieUncheckedCreateWithoutProfileInput>;
};
export type ProfileMovieUpdateWithWhereUniqueWithoutProfileInput = {
    where: Prisma.ProfileMovieWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProfileMovieUpdateWithoutProfileInput, Prisma.ProfileMovieUncheckedUpdateWithoutProfileInput>;
};
export type ProfileMovieUpdateManyWithWhereWithoutProfileInput = {
    where: Prisma.ProfileMovieScalarWhereInput;
    data: Prisma.XOR<Prisma.ProfileMovieUpdateManyMutationInput, Prisma.ProfileMovieUncheckedUpdateManyWithoutProfileInput>;
};
export type ProfileMovieScalarWhereInput = {
    AND?: Prisma.ProfileMovieScalarWhereInput | Prisma.ProfileMovieScalarWhereInput[];
    OR?: Prisma.ProfileMovieScalarWhereInput[];
    NOT?: Prisma.ProfileMovieScalarWhereInput | Prisma.ProfileMovieScalarWhereInput[];
    id?: Prisma.StringFilter<"ProfileMovie"> | string;
    profile_id?: Prisma.StringFilter<"ProfileMovie"> | string;
    title?: Prisma.StringFilter<"ProfileMovie"> | string;
    year?: Prisma.StringFilter<"ProfileMovie"> | string;
    type?: Prisma.StringFilter<"ProfileMovie"> | string;
    poster?: Prisma.StringNullableFilter<"ProfileMovie"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ProfileMovie"> | Date | string;
};
export type ProfileMovieCreateManyProfileInput = {
    id?: string;
    title: string;
    year: string;
    type: string;
    poster?: string | null;
    createdAt?: Date | string;
};
export type ProfileMovieUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    poster?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileMovieUncheckedUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    poster?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileMovieUncheckedUpdateManyWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    poster?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileMovieSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    profile_id?: boolean;
    title?: boolean;
    year?: boolean;
    type?: boolean;
    poster?: boolean;
    createdAt?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["profileMovie"]>;
export type ProfileMovieSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    profile_id?: boolean;
    title?: boolean;
    year?: boolean;
    type?: boolean;
    poster?: boolean;
    createdAt?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["profileMovie"]>;
export type ProfileMovieSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    profile_id?: boolean;
    title?: boolean;
    year?: boolean;
    type?: boolean;
    poster?: boolean;
    createdAt?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["profileMovie"]>;
export type ProfileMovieSelectScalar = {
    id?: boolean;
    profile_id?: boolean;
    title?: boolean;
    year?: boolean;
    type?: boolean;
    poster?: boolean;
    createdAt?: boolean;
};
export type ProfileMovieOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "profile_id" | "title" | "year" | "type" | "poster" | "createdAt", ExtArgs["result"]["profileMovie"]>;
export type ProfileMovieInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type ProfileMovieIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type ProfileMovieIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type $ProfileMoviePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProfileMovie";
    objects: {
        profile: Prisma.$ProfilePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        profile_id: string;
        title: string;
        year: string;
        type: string;
        poster: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["profileMovie"]>;
    composites: {};
};
export type ProfileMovieGetPayload<S extends boolean | null | undefined | ProfileMovieDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProfileMoviePayload, S>;
export type ProfileMovieCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProfileMovieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProfileMovieCountAggregateInputType | true;
};
export interface ProfileMovieDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProfileMovie'];
        meta: {
            name: 'ProfileMovie';
        };
    };
    /**
     * Find zero or one ProfileMovie that matches the filter.
     * @param {ProfileMovieFindUniqueArgs} args - Arguments to find a ProfileMovie
     * @example
     * // Get one ProfileMovie
     * const profileMovie = await prisma.profileMovie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileMovieFindUniqueArgs>(args: Prisma.SelectSubset<T, ProfileMovieFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProfileMovieClient<runtime.Types.Result.GetResult<Prisma.$ProfileMoviePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ProfileMovie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileMovieFindUniqueOrThrowArgs} args - Arguments to find a ProfileMovie
     * @example
     * // Get one ProfileMovie
     * const profileMovie = await prisma.profileMovie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileMovieFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProfileMovieFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProfileMovieClient<runtime.Types.Result.GetResult<Prisma.$ProfileMoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProfileMovie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileMovieFindFirstArgs} args - Arguments to find a ProfileMovie
     * @example
     * // Get one ProfileMovie
     * const profileMovie = await prisma.profileMovie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileMovieFindFirstArgs>(args?: Prisma.SelectSubset<T, ProfileMovieFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProfileMovieClient<runtime.Types.Result.GetResult<Prisma.$ProfileMoviePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProfileMovie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileMovieFindFirstOrThrowArgs} args - Arguments to find a ProfileMovie
     * @example
     * // Get one ProfileMovie
     * const profileMovie = await prisma.profileMovie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileMovieFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProfileMovieFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProfileMovieClient<runtime.Types.Result.GetResult<Prisma.$ProfileMoviePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ProfileMovies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileMovieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfileMovies
     * const profileMovies = await prisma.profileMovie.findMany()
     *
     * // Get first 10 ProfileMovies
     * const profileMovies = await prisma.profileMovie.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const profileMovieWithIdOnly = await prisma.profileMovie.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProfileMovieFindManyArgs>(args?: Prisma.SelectSubset<T, ProfileMovieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfileMoviePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ProfileMovie.
     * @param {ProfileMovieCreateArgs} args - Arguments to create a ProfileMovie.
     * @example
     * // Create one ProfileMovie
     * const ProfileMovie = await prisma.profileMovie.create({
     *   data: {
     *     // ... data to create a ProfileMovie
     *   }
     * })
     *
     */
    create<T extends ProfileMovieCreateArgs>(args: Prisma.SelectSubset<T, ProfileMovieCreateArgs<ExtArgs>>): Prisma.Prisma__ProfileMovieClient<runtime.Types.Result.GetResult<Prisma.$ProfileMoviePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ProfileMovies.
     * @param {ProfileMovieCreateManyArgs} args - Arguments to create many ProfileMovies.
     * @example
     * // Create many ProfileMovies
     * const profileMovie = await prisma.profileMovie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProfileMovieCreateManyArgs>(args?: Prisma.SelectSubset<T, ProfileMovieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ProfileMovies and returns the data saved in the database.
     * @param {ProfileMovieCreateManyAndReturnArgs} args - Arguments to create many ProfileMovies.
     * @example
     * // Create many ProfileMovies
     * const profileMovie = await prisma.profileMovie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ProfileMovies and only return the `id`
     * const profileMovieWithIdOnly = await prisma.profileMovie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProfileMovieCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProfileMovieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfileMoviePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ProfileMovie.
     * @param {ProfileMovieDeleteArgs} args - Arguments to delete one ProfileMovie.
     * @example
     * // Delete one ProfileMovie
     * const ProfileMovie = await prisma.profileMovie.delete({
     *   where: {
     *     // ... filter to delete one ProfileMovie
     *   }
     * })
     *
     */
    delete<T extends ProfileMovieDeleteArgs>(args: Prisma.SelectSubset<T, ProfileMovieDeleteArgs<ExtArgs>>): Prisma.Prisma__ProfileMovieClient<runtime.Types.Result.GetResult<Prisma.$ProfileMoviePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ProfileMovie.
     * @param {ProfileMovieUpdateArgs} args - Arguments to update one ProfileMovie.
     * @example
     * // Update one ProfileMovie
     * const profileMovie = await prisma.profileMovie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProfileMovieUpdateArgs>(args: Prisma.SelectSubset<T, ProfileMovieUpdateArgs<ExtArgs>>): Prisma.Prisma__ProfileMovieClient<runtime.Types.Result.GetResult<Prisma.$ProfileMoviePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ProfileMovies.
     * @param {ProfileMovieDeleteManyArgs} args - Arguments to filter ProfileMovies to delete.
     * @example
     * // Delete a few ProfileMovies
     * const { count } = await prisma.profileMovie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProfileMovieDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProfileMovieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProfileMovies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileMovieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfileMovies
     * const profileMovie = await prisma.profileMovie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProfileMovieUpdateManyArgs>(args: Prisma.SelectSubset<T, ProfileMovieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProfileMovies and returns the data updated in the database.
     * @param {ProfileMovieUpdateManyAndReturnArgs} args - Arguments to update many ProfileMovies.
     * @example
     * // Update many ProfileMovies
     * const profileMovie = await prisma.profileMovie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ProfileMovies and only return the `id`
     * const profileMovieWithIdOnly = await prisma.profileMovie.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfileMovieUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProfileMovieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfileMoviePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ProfileMovie.
     * @param {ProfileMovieUpsertArgs} args - Arguments to update or create a ProfileMovie.
     * @example
     * // Update or create a ProfileMovie
     * const profileMovie = await prisma.profileMovie.upsert({
     *   create: {
     *     // ... data to create a ProfileMovie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfileMovie we want to update
     *   }
     * })
     */
    upsert<T extends ProfileMovieUpsertArgs>(args: Prisma.SelectSubset<T, ProfileMovieUpsertArgs<ExtArgs>>): Prisma.Prisma__ProfileMovieClient<runtime.Types.Result.GetResult<Prisma.$ProfileMoviePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ProfileMovies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileMovieCountArgs} args - Arguments to filter ProfileMovies to count.
     * @example
     * // Count the number of ProfileMovies
     * const count = await prisma.profileMovie.count({
     *   where: {
     *     // ... the filter for the ProfileMovies we want to count
     *   }
     * })
    **/
    count<T extends ProfileMovieCountArgs>(args?: Prisma.Subset<T, ProfileMovieCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProfileMovieCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ProfileMovie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileMovieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileMovieAggregateArgs>(args: Prisma.Subset<T, ProfileMovieAggregateArgs>): Prisma.PrismaPromise<GetProfileMovieAggregateType<T>>;
    /**
     * Group by ProfileMovie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileMovieGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ProfileMovieGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProfileMovieGroupByArgs['orderBy'];
    } : {
        orderBy?: ProfileMovieGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProfileMovieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileMovieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ProfileMovie model
     */
    readonly fields: ProfileMovieFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ProfileMovie.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ProfileMovieClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the ProfileMovie model
 */
export interface ProfileMovieFieldRefs {
    readonly id: Prisma.FieldRef<"ProfileMovie", 'String'>;
    readonly profile_id: Prisma.FieldRef<"ProfileMovie", 'String'>;
    readonly title: Prisma.FieldRef<"ProfileMovie", 'String'>;
    readonly year: Prisma.FieldRef<"ProfileMovie", 'String'>;
    readonly type: Prisma.FieldRef<"ProfileMovie", 'String'>;
    readonly poster: Prisma.FieldRef<"ProfileMovie", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ProfileMovie", 'DateTime'>;
}
/**
 * ProfileMovie findUnique
 */
export type ProfileMovieFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProfileMovie to fetch.
     */
    where: Prisma.ProfileMovieWhereUniqueInput;
};
/**
 * ProfileMovie findUniqueOrThrow
 */
export type ProfileMovieFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProfileMovie to fetch.
     */
    where: Prisma.ProfileMovieWhereUniqueInput;
};
/**
 * ProfileMovie findFirst
 */
export type ProfileMovieFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProfileMovie to fetch.
     */
    where?: Prisma.ProfileMovieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProfileMovies to fetch.
     */
    orderBy?: Prisma.ProfileMovieOrderByWithRelationInput | Prisma.ProfileMovieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProfileMovies.
     */
    cursor?: Prisma.ProfileMovieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProfileMovies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProfileMovies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProfileMovies.
     */
    distinct?: Prisma.ProfileMovieScalarFieldEnum | Prisma.ProfileMovieScalarFieldEnum[];
};
/**
 * ProfileMovie findFirstOrThrow
 */
export type ProfileMovieFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProfileMovie to fetch.
     */
    where?: Prisma.ProfileMovieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProfileMovies to fetch.
     */
    orderBy?: Prisma.ProfileMovieOrderByWithRelationInput | Prisma.ProfileMovieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProfileMovies.
     */
    cursor?: Prisma.ProfileMovieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProfileMovies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProfileMovies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProfileMovies.
     */
    distinct?: Prisma.ProfileMovieScalarFieldEnum | Prisma.ProfileMovieScalarFieldEnum[];
};
/**
 * ProfileMovie findMany
 */
export type ProfileMovieFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProfileMovies to fetch.
     */
    where?: Prisma.ProfileMovieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProfileMovies to fetch.
     */
    orderBy?: Prisma.ProfileMovieOrderByWithRelationInput | Prisma.ProfileMovieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ProfileMovies.
     */
    cursor?: Prisma.ProfileMovieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProfileMovies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProfileMovies.
     */
    skip?: number;
    distinct?: Prisma.ProfileMovieScalarFieldEnum | Prisma.ProfileMovieScalarFieldEnum[];
};
/**
 * ProfileMovie create
 */
export type ProfileMovieCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a ProfileMovie.
     */
    data: Prisma.XOR<Prisma.ProfileMovieCreateInput, Prisma.ProfileMovieUncheckedCreateInput>;
};
/**
 * ProfileMovie createMany
 */
export type ProfileMovieCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfileMovies.
     */
    data: Prisma.ProfileMovieCreateManyInput | Prisma.ProfileMovieCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ProfileMovie createManyAndReturn
 */
export type ProfileMovieCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileMovie
     */
    select?: Prisma.ProfileMovieSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProfileMovie
     */
    omit?: Prisma.ProfileMovieOmit<ExtArgs> | null;
    /**
     * The data used to create many ProfileMovies.
     */
    data: Prisma.ProfileMovieCreateManyInput | Prisma.ProfileMovieCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProfileMovieIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ProfileMovie update
 */
export type ProfileMovieUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a ProfileMovie.
     */
    data: Prisma.XOR<Prisma.ProfileMovieUpdateInput, Prisma.ProfileMovieUncheckedUpdateInput>;
    /**
     * Choose, which ProfileMovie to update.
     */
    where: Prisma.ProfileMovieWhereUniqueInput;
};
/**
 * ProfileMovie updateMany
 */
export type ProfileMovieUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfileMovies.
     */
    data: Prisma.XOR<Prisma.ProfileMovieUpdateManyMutationInput, Prisma.ProfileMovieUncheckedUpdateManyInput>;
    /**
     * Filter which ProfileMovies to update
     */
    where?: Prisma.ProfileMovieWhereInput;
    /**
     * Limit how many ProfileMovies to update.
     */
    limit?: number;
};
/**
 * ProfileMovie updateManyAndReturn
 */
export type ProfileMovieUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileMovie
     */
    select?: Prisma.ProfileMovieSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProfileMovie
     */
    omit?: Prisma.ProfileMovieOmit<ExtArgs> | null;
    /**
     * The data used to update ProfileMovies.
     */
    data: Prisma.XOR<Prisma.ProfileMovieUpdateManyMutationInput, Prisma.ProfileMovieUncheckedUpdateManyInput>;
    /**
     * Filter which ProfileMovies to update
     */
    where?: Prisma.ProfileMovieWhereInput;
    /**
     * Limit how many ProfileMovies to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProfileMovieIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ProfileMovie upsert
 */
export type ProfileMovieUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the ProfileMovie to update in case it exists.
     */
    where: Prisma.ProfileMovieWhereUniqueInput;
    /**
     * In case the ProfileMovie found by the `where` argument doesn't exist, create a new ProfileMovie with this data.
     */
    create: Prisma.XOR<Prisma.ProfileMovieCreateInput, Prisma.ProfileMovieUncheckedCreateInput>;
    /**
     * In case the ProfileMovie was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ProfileMovieUpdateInput, Prisma.ProfileMovieUncheckedUpdateInput>;
};
/**
 * ProfileMovie delete
 */
export type ProfileMovieDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which ProfileMovie to delete.
     */
    where: Prisma.ProfileMovieWhereUniqueInput;
};
/**
 * ProfileMovie deleteMany
 */
export type ProfileMovieDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileMovies to delete
     */
    where?: Prisma.ProfileMovieWhereInput;
    /**
     * Limit how many ProfileMovies to delete.
     */
    limit?: number;
};
/**
 * ProfileMovie without action
 */
export type ProfileMovieDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=ProfileMovie.d.ts.map