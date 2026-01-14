import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Saved_Post
 *
 */
export type Saved_PostModel = runtime.Types.Result.DefaultSelection<Prisma.$Saved_PostPayload>;
export type AggregateSaved_Post = {
    _count: Saved_PostCountAggregateOutputType | null;
    _min: Saved_PostMinAggregateOutputType | null;
    _max: Saved_PostMaxAggregateOutputType | null;
};
export type Saved_PostMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    post_id: string | null;
    savedAt: Date | null;
};
export type Saved_PostMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    post_id: string | null;
    savedAt: Date | null;
};
export type Saved_PostCountAggregateOutputType = {
    id: number;
    user_id: number;
    post_id: number;
    savedAt: number;
    _all: number;
};
export type Saved_PostMinAggregateInputType = {
    id?: true;
    user_id?: true;
    post_id?: true;
    savedAt?: true;
};
export type Saved_PostMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    post_id?: true;
    savedAt?: true;
};
export type Saved_PostCountAggregateInputType = {
    id?: true;
    user_id?: true;
    post_id?: true;
    savedAt?: true;
    _all?: true;
};
export type Saved_PostAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Saved_Post to aggregate.
     */
    where?: Prisma.Saved_PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Saved_Posts to fetch.
     */
    orderBy?: Prisma.Saved_PostOrderByWithRelationInput | Prisma.Saved_PostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.Saved_PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Saved_Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Saved_Posts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Saved_Posts
    **/
    _count?: true | Saved_PostCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Saved_PostMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Saved_PostMaxAggregateInputType;
};
export type GetSaved_PostAggregateType<T extends Saved_PostAggregateArgs> = {
    [P in keyof T & keyof AggregateSaved_Post]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSaved_Post[P]> : Prisma.GetScalarType<T[P], AggregateSaved_Post[P]>;
};
export type Saved_PostGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Saved_PostWhereInput;
    orderBy?: Prisma.Saved_PostOrderByWithAggregationInput | Prisma.Saved_PostOrderByWithAggregationInput[];
    by: Prisma.Saved_PostScalarFieldEnum[] | Prisma.Saved_PostScalarFieldEnum;
    having?: Prisma.Saved_PostScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Saved_PostCountAggregateInputType | true;
    _min?: Saved_PostMinAggregateInputType;
    _max?: Saved_PostMaxAggregateInputType;
};
export type Saved_PostGroupByOutputType = {
    id: string;
    user_id: string;
    post_id: string;
    savedAt: Date;
    _count: Saved_PostCountAggregateOutputType | null;
    _min: Saved_PostMinAggregateOutputType | null;
    _max: Saved_PostMaxAggregateOutputType | null;
};
type GetSaved_PostGroupByPayload<T extends Saved_PostGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Saved_PostGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Saved_PostGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Saved_PostGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Saved_PostGroupByOutputType[P]>;
}>>;
export type Saved_PostWhereInput = {
    AND?: Prisma.Saved_PostWhereInput | Prisma.Saved_PostWhereInput[];
    OR?: Prisma.Saved_PostWhereInput[];
    NOT?: Prisma.Saved_PostWhereInput | Prisma.Saved_PostWhereInput[];
    id?: Prisma.StringFilter<"Saved_Post"> | string;
    user_id?: Prisma.StringFilter<"Saved_Post"> | string;
    post_id?: Prisma.StringFilter<"Saved_Post"> | string;
    savedAt?: Prisma.DateTimeFilter<"Saved_Post"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type Saved_PostOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    post_id?: Prisma.SortOrder;
    savedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type Saved_PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    user_id_post_id?: Prisma.Saved_PostUser_idPost_idCompoundUniqueInput;
    AND?: Prisma.Saved_PostWhereInput | Prisma.Saved_PostWhereInput[];
    OR?: Prisma.Saved_PostWhereInput[];
    NOT?: Prisma.Saved_PostWhereInput | Prisma.Saved_PostWhereInput[];
    user_id?: Prisma.StringFilter<"Saved_Post"> | string;
    post_id?: Prisma.StringFilter<"Saved_Post"> | string;
    savedAt?: Prisma.DateTimeFilter<"Saved_Post"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "user_id_post_id">;
export type Saved_PostOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    post_id?: Prisma.SortOrder;
    savedAt?: Prisma.SortOrder;
    _count?: Prisma.Saved_PostCountOrderByAggregateInput;
    _max?: Prisma.Saved_PostMaxOrderByAggregateInput;
    _min?: Prisma.Saved_PostMinOrderByAggregateInput;
};
export type Saved_PostScalarWhereWithAggregatesInput = {
    AND?: Prisma.Saved_PostScalarWhereWithAggregatesInput | Prisma.Saved_PostScalarWhereWithAggregatesInput[];
    OR?: Prisma.Saved_PostScalarWhereWithAggregatesInput[];
    NOT?: Prisma.Saved_PostScalarWhereWithAggregatesInput | Prisma.Saved_PostScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Saved_Post"> | string;
    user_id?: Prisma.StringWithAggregatesFilter<"Saved_Post"> | string;
    post_id?: Prisma.StringWithAggregatesFilter<"Saved_Post"> | string;
    savedAt?: Prisma.DateTimeWithAggregatesFilter<"Saved_Post"> | Date | string;
};
export type Saved_PostCreateInput = {
    id?: string;
    post_id: string;
    savedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutSaved_postInput;
};
export type Saved_PostUncheckedCreateInput = {
    id?: string;
    user_id: string;
    post_id: string;
    savedAt?: Date | string;
};
export type Saved_PostUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    post_id?: Prisma.StringFieldUpdateOperationsInput | string;
    savedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSaved_postNestedInput;
};
export type Saved_PostUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    post_id?: Prisma.StringFieldUpdateOperationsInput | string;
    savedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Saved_PostCreateManyInput = {
    id?: string;
    user_id: string;
    post_id: string;
    savedAt?: Date | string;
};
export type Saved_PostUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    post_id?: Prisma.StringFieldUpdateOperationsInput | string;
    savedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Saved_PostUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    post_id?: Prisma.StringFieldUpdateOperationsInput | string;
    savedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Saved_PostListRelationFilter = {
    every?: Prisma.Saved_PostWhereInput;
    some?: Prisma.Saved_PostWhereInput;
    none?: Prisma.Saved_PostWhereInput;
};
export type Saved_PostOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Saved_PostUser_idPost_idCompoundUniqueInput = {
    user_id: string;
    post_id: string;
};
export type Saved_PostCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    post_id?: Prisma.SortOrder;
    savedAt?: Prisma.SortOrder;
};
export type Saved_PostMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    post_id?: Prisma.SortOrder;
    savedAt?: Prisma.SortOrder;
};
export type Saved_PostMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    post_id?: Prisma.SortOrder;
    savedAt?: Prisma.SortOrder;
};
export type Saved_PostCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.Saved_PostCreateWithoutUserInput, Prisma.Saved_PostUncheckedCreateWithoutUserInput> | Prisma.Saved_PostCreateWithoutUserInput[] | Prisma.Saved_PostUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.Saved_PostCreateOrConnectWithoutUserInput | Prisma.Saved_PostCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.Saved_PostCreateManyUserInputEnvelope;
    connect?: Prisma.Saved_PostWhereUniqueInput | Prisma.Saved_PostWhereUniqueInput[];
};
export type Saved_PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.Saved_PostCreateWithoutUserInput, Prisma.Saved_PostUncheckedCreateWithoutUserInput> | Prisma.Saved_PostCreateWithoutUserInput[] | Prisma.Saved_PostUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.Saved_PostCreateOrConnectWithoutUserInput | Prisma.Saved_PostCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.Saved_PostCreateManyUserInputEnvelope;
    connect?: Prisma.Saved_PostWhereUniqueInput | Prisma.Saved_PostWhereUniqueInput[];
};
export type Saved_PostUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.Saved_PostCreateWithoutUserInput, Prisma.Saved_PostUncheckedCreateWithoutUserInput> | Prisma.Saved_PostCreateWithoutUserInput[] | Prisma.Saved_PostUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.Saved_PostCreateOrConnectWithoutUserInput | Prisma.Saved_PostCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.Saved_PostUpsertWithWhereUniqueWithoutUserInput | Prisma.Saved_PostUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.Saved_PostCreateManyUserInputEnvelope;
    set?: Prisma.Saved_PostWhereUniqueInput | Prisma.Saved_PostWhereUniqueInput[];
    disconnect?: Prisma.Saved_PostWhereUniqueInput | Prisma.Saved_PostWhereUniqueInput[];
    delete?: Prisma.Saved_PostWhereUniqueInput | Prisma.Saved_PostWhereUniqueInput[];
    connect?: Prisma.Saved_PostWhereUniqueInput | Prisma.Saved_PostWhereUniqueInput[];
    update?: Prisma.Saved_PostUpdateWithWhereUniqueWithoutUserInput | Prisma.Saved_PostUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.Saved_PostUpdateManyWithWhereWithoutUserInput | Prisma.Saved_PostUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.Saved_PostScalarWhereInput | Prisma.Saved_PostScalarWhereInput[];
};
export type Saved_PostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.Saved_PostCreateWithoutUserInput, Prisma.Saved_PostUncheckedCreateWithoutUserInput> | Prisma.Saved_PostCreateWithoutUserInput[] | Prisma.Saved_PostUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.Saved_PostCreateOrConnectWithoutUserInput | Prisma.Saved_PostCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.Saved_PostUpsertWithWhereUniqueWithoutUserInput | Prisma.Saved_PostUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.Saved_PostCreateManyUserInputEnvelope;
    set?: Prisma.Saved_PostWhereUniqueInput | Prisma.Saved_PostWhereUniqueInput[];
    disconnect?: Prisma.Saved_PostWhereUniqueInput | Prisma.Saved_PostWhereUniqueInput[];
    delete?: Prisma.Saved_PostWhereUniqueInput | Prisma.Saved_PostWhereUniqueInput[];
    connect?: Prisma.Saved_PostWhereUniqueInput | Prisma.Saved_PostWhereUniqueInput[];
    update?: Prisma.Saved_PostUpdateWithWhereUniqueWithoutUserInput | Prisma.Saved_PostUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.Saved_PostUpdateManyWithWhereWithoutUserInput | Prisma.Saved_PostUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.Saved_PostScalarWhereInput | Prisma.Saved_PostScalarWhereInput[];
};
export type Saved_PostCreateWithoutUserInput = {
    id?: string;
    post_id: string;
    savedAt?: Date | string;
};
export type Saved_PostUncheckedCreateWithoutUserInput = {
    id?: string;
    post_id: string;
    savedAt?: Date | string;
};
export type Saved_PostCreateOrConnectWithoutUserInput = {
    where: Prisma.Saved_PostWhereUniqueInput;
    create: Prisma.XOR<Prisma.Saved_PostCreateWithoutUserInput, Prisma.Saved_PostUncheckedCreateWithoutUserInput>;
};
export type Saved_PostCreateManyUserInputEnvelope = {
    data: Prisma.Saved_PostCreateManyUserInput | Prisma.Saved_PostCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type Saved_PostUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.Saved_PostWhereUniqueInput;
    update: Prisma.XOR<Prisma.Saved_PostUpdateWithoutUserInput, Prisma.Saved_PostUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.Saved_PostCreateWithoutUserInput, Prisma.Saved_PostUncheckedCreateWithoutUserInput>;
};
export type Saved_PostUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.Saved_PostWhereUniqueInput;
    data: Prisma.XOR<Prisma.Saved_PostUpdateWithoutUserInput, Prisma.Saved_PostUncheckedUpdateWithoutUserInput>;
};
export type Saved_PostUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.Saved_PostScalarWhereInput;
    data: Prisma.XOR<Prisma.Saved_PostUpdateManyMutationInput, Prisma.Saved_PostUncheckedUpdateManyWithoutUserInput>;
};
export type Saved_PostScalarWhereInput = {
    AND?: Prisma.Saved_PostScalarWhereInput | Prisma.Saved_PostScalarWhereInput[];
    OR?: Prisma.Saved_PostScalarWhereInput[];
    NOT?: Prisma.Saved_PostScalarWhereInput | Prisma.Saved_PostScalarWhereInput[];
    id?: Prisma.StringFilter<"Saved_Post"> | string;
    user_id?: Prisma.StringFilter<"Saved_Post"> | string;
    post_id?: Prisma.StringFilter<"Saved_Post"> | string;
    savedAt?: Prisma.DateTimeFilter<"Saved_Post"> | Date | string;
};
export type Saved_PostCreateManyUserInput = {
    id?: string;
    post_id: string;
    savedAt?: Date | string;
};
export type Saved_PostUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    post_id?: Prisma.StringFieldUpdateOperationsInput | string;
    savedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Saved_PostUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    post_id?: Prisma.StringFieldUpdateOperationsInput | string;
    savedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Saved_PostUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    post_id?: Prisma.StringFieldUpdateOperationsInput | string;
    savedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Saved_PostSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    post_id?: boolean;
    savedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["saved_Post"]>;
export type Saved_PostSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    post_id?: boolean;
    savedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["saved_Post"]>;
export type Saved_PostSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    post_id?: boolean;
    savedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["saved_Post"]>;
export type Saved_PostSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    post_id?: boolean;
    savedAt?: boolean;
};
export type Saved_PostOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "post_id" | "savedAt", ExtArgs["result"]["saved_Post"]>;
export type Saved_PostInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type Saved_PostIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type Saved_PostIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $Saved_PostPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Saved_Post";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        user_id: string;
        post_id: string;
        savedAt: Date;
    }, ExtArgs["result"]["saved_Post"]>;
    composites: {};
};
export type Saved_PostGetPayload<S extends boolean | null | undefined | Saved_PostDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$Saved_PostPayload, S>;
export type Saved_PostCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<Saved_PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Saved_PostCountAggregateInputType | true;
};
export interface Saved_PostDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Saved_Post'];
        meta: {
            name: 'Saved_Post';
        };
    };
    /**
     * Find zero or one Saved_Post that matches the filter.
     * @param {Saved_PostFindUniqueArgs} args - Arguments to find a Saved_Post
     * @example
     * // Get one Saved_Post
     * const saved_Post = await prisma.saved_Post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Saved_PostFindUniqueArgs>(args: Prisma.SelectSubset<T, Saved_PostFindUniqueArgs<ExtArgs>>): Prisma.Prisma__Saved_PostClient<runtime.Types.Result.GetResult<Prisma.$Saved_PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Saved_Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Saved_PostFindUniqueOrThrowArgs} args - Arguments to find a Saved_Post
     * @example
     * // Get one Saved_Post
     * const saved_Post = await prisma.saved_Post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Saved_PostFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, Saved_PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__Saved_PostClient<runtime.Types.Result.GetResult<Prisma.$Saved_PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Saved_Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Saved_PostFindFirstArgs} args - Arguments to find a Saved_Post
     * @example
     * // Get one Saved_Post
     * const saved_Post = await prisma.saved_Post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Saved_PostFindFirstArgs>(args?: Prisma.SelectSubset<T, Saved_PostFindFirstArgs<ExtArgs>>): Prisma.Prisma__Saved_PostClient<runtime.Types.Result.GetResult<Prisma.$Saved_PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Saved_Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Saved_PostFindFirstOrThrowArgs} args - Arguments to find a Saved_Post
     * @example
     * // Get one Saved_Post
     * const saved_Post = await prisma.saved_Post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Saved_PostFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, Saved_PostFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__Saved_PostClient<runtime.Types.Result.GetResult<Prisma.$Saved_PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Saved_Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Saved_PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Saved_Posts
     * const saved_Posts = await prisma.saved_Post.findMany()
     *
     * // Get first 10 Saved_Posts
     * const saved_Posts = await prisma.saved_Post.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const saved_PostWithIdOnly = await prisma.saved_Post.findMany({ select: { id: true } })
     *
     */
    findMany<T extends Saved_PostFindManyArgs>(args?: Prisma.SelectSubset<T, Saved_PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Saved_PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Saved_Post.
     * @param {Saved_PostCreateArgs} args - Arguments to create a Saved_Post.
     * @example
     * // Create one Saved_Post
     * const Saved_Post = await prisma.saved_Post.create({
     *   data: {
     *     // ... data to create a Saved_Post
     *   }
     * })
     *
     */
    create<T extends Saved_PostCreateArgs>(args: Prisma.SelectSubset<T, Saved_PostCreateArgs<ExtArgs>>): Prisma.Prisma__Saved_PostClient<runtime.Types.Result.GetResult<Prisma.$Saved_PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Saved_Posts.
     * @param {Saved_PostCreateManyArgs} args - Arguments to create many Saved_Posts.
     * @example
     * // Create many Saved_Posts
     * const saved_Post = await prisma.saved_Post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends Saved_PostCreateManyArgs>(args?: Prisma.SelectSubset<T, Saved_PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Saved_Posts and returns the data saved in the database.
     * @param {Saved_PostCreateManyAndReturnArgs} args - Arguments to create many Saved_Posts.
     * @example
     * // Create many Saved_Posts
     * const saved_Post = await prisma.saved_Post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Saved_Posts and only return the `id`
     * const saved_PostWithIdOnly = await prisma.saved_Post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends Saved_PostCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, Saved_PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Saved_PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Saved_Post.
     * @param {Saved_PostDeleteArgs} args - Arguments to delete one Saved_Post.
     * @example
     * // Delete one Saved_Post
     * const Saved_Post = await prisma.saved_Post.delete({
     *   where: {
     *     // ... filter to delete one Saved_Post
     *   }
     * })
     *
     */
    delete<T extends Saved_PostDeleteArgs>(args: Prisma.SelectSubset<T, Saved_PostDeleteArgs<ExtArgs>>): Prisma.Prisma__Saved_PostClient<runtime.Types.Result.GetResult<Prisma.$Saved_PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Saved_Post.
     * @param {Saved_PostUpdateArgs} args - Arguments to update one Saved_Post.
     * @example
     * // Update one Saved_Post
     * const saved_Post = await prisma.saved_Post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends Saved_PostUpdateArgs>(args: Prisma.SelectSubset<T, Saved_PostUpdateArgs<ExtArgs>>): Prisma.Prisma__Saved_PostClient<runtime.Types.Result.GetResult<Prisma.$Saved_PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Saved_Posts.
     * @param {Saved_PostDeleteManyArgs} args - Arguments to filter Saved_Posts to delete.
     * @example
     * // Delete a few Saved_Posts
     * const { count } = await prisma.saved_Post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends Saved_PostDeleteManyArgs>(args?: Prisma.SelectSubset<T, Saved_PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Saved_Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Saved_PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Saved_Posts
     * const saved_Post = await prisma.saved_Post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends Saved_PostUpdateManyArgs>(args: Prisma.SelectSubset<T, Saved_PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Saved_Posts and returns the data updated in the database.
     * @param {Saved_PostUpdateManyAndReturnArgs} args - Arguments to update many Saved_Posts.
     * @example
     * // Update many Saved_Posts
     * const saved_Post = await prisma.saved_Post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Saved_Posts and only return the `id`
     * const saved_PostWithIdOnly = await prisma.saved_Post.updateManyAndReturn({
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
    updateManyAndReturn<T extends Saved_PostUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, Saved_PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Saved_PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Saved_Post.
     * @param {Saved_PostUpsertArgs} args - Arguments to update or create a Saved_Post.
     * @example
     * // Update or create a Saved_Post
     * const saved_Post = await prisma.saved_Post.upsert({
     *   create: {
     *     // ... data to create a Saved_Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Saved_Post we want to update
     *   }
     * })
     */
    upsert<T extends Saved_PostUpsertArgs>(args: Prisma.SelectSubset<T, Saved_PostUpsertArgs<ExtArgs>>): Prisma.Prisma__Saved_PostClient<runtime.Types.Result.GetResult<Prisma.$Saved_PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Saved_Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Saved_PostCountArgs} args - Arguments to filter Saved_Posts to count.
     * @example
     * // Count the number of Saved_Posts
     * const count = await prisma.saved_Post.count({
     *   where: {
     *     // ... the filter for the Saved_Posts we want to count
     *   }
     * })
    **/
    count<T extends Saved_PostCountArgs>(args?: Prisma.Subset<T, Saved_PostCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Saved_PostCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Saved_Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Saved_PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Saved_PostAggregateArgs>(args: Prisma.Subset<T, Saved_PostAggregateArgs>): Prisma.PrismaPromise<GetSaved_PostAggregateType<T>>;
    /**
     * Group by Saved_Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Saved_PostGroupByArgs} args - Group by arguments.
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
    groupBy<T extends Saved_PostGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: Saved_PostGroupByArgs['orderBy'];
    } : {
        orderBy?: Saved_PostGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, Saved_PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaved_PostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Saved_Post model
     */
    readonly fields: Saved_PostFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Saved_Post.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__Saved_PostClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Saved_Post model
 */
export interface Saved_PostFieldRefs {
    readonly id: Prisma.FieldRef<"Saved_Post", 'String'>;
    readonly user_id: Prisma.FieldRef<"Saved_Post", 'String'>;
    readonly post_id: Prisma.FieldRef<"Saved_Post", 'String'>;
    readonly savedAt: Prisma.FieldRef<"Saved_Post", 'DateTime'>;
}
/**
 * Saved_Post findUnique
 */
export type Saved_PostFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Saved_Post to fetch.
     */
    where: Prisma.Saved_PostWhereUniqueInput;
};
/**
 * Saved_Post findUniqueOrThrow
 */
export type Saved_PostFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Saved_Post to fetch.
     */
    where: Prisma.Saved_PostWhereUniqueInput;
};
/**
 * Saved_Post findFirst
 */
export type Saved_PostFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Saved_Post to fetch.
     */
    where?: Prisma.Saved_PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Saved_Posts to fetch.
     */
    orderBy?: Prisma.Saved_PostOrderByWithRelationInput | Prisma.Saved_PostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Saved_Posts.
     */
    cursor?: Prisma.Saved_PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Saved_Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Saved_Posts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Saved_Posts.
     */
    distinct?: Prisma.Saved_PostScalarFieldEnum | Prisma.Saved_PostScalarFieldEnum[];
};
/**
 * Saved_Post findFirstOrThrow
 */
export type Saved_PostFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Saved_Post to fetch.
     */
    where?: Prisma.Saved_PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Saved_Posts to fetch.
     */
    orderBy?: Prisma.Saved_PostOrderByWithRelationInput | Prisma.Saved_PostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Saved_Posts.
     */
    cursor?: Prisma.Saved_PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Saved_Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Saved_Posts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Saved_Posts.
     */
    distinct?: Prisma.Saved_PostScalarFieldEnum | Prisma.Saved_PostScalarFieldEnum[];
};
/**
 * Saved_Post findMany
 */
export type Saved_PostFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Saved_Posts to fetch.
     */
    where?: Prisma.Saved_PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Saved_Posts to fetch.
     */
    orderBy?: Prisma.Saved_PostOrderByWithRelationInput | Prisma.Saved_PostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Saved_Posts.
     */
    cursor?: Prisma.Saved_PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Saved_Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Saved_Posts.
     */
    skip?: number;
    distinct?: Prisma.Saved_PostScalarFieldEnum | Prisma.Saved_PostScalarFieldEnum[];
};
/**
 * Saved_Post create
 */
export type Saved_PostCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Saved_Post.
     */
    data: Prisma.XOR<Prisma.Saved_PostCreateInput, Prisma.Saved_PostUncheckedCreateInput>;
};
/**
 * Saved_Post createMany
 */
export type Saved_PostCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Saved_Posts.
     */
    data: Prisma.Saved_PostCreateManyInput | Prisma.Saved_PostCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Saved_Post createManyAndReturn
 */
export type Saved_PostCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_Post
     */
    select?: Prisma.Saved_PostSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Saved_Post
     */
    omit?: Prisma.Saved_PostOmit<ExtArgs> | null;
    /**
     * The data used to create many Saved_Posts.
     */
    data: Prisma.Saved_PostCreateManyInput | Prisma.Saved_PostCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Saved_PostIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Saved_Post update
 */
export type Saved_PostUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Saved_Post.
     */
    data: Prisma.XOR<Prisma.Saved_PostUpdateInput, Prisma.Saved_PostUncheckedUpdateInput>;
    /**
     * Choose, which Saved_Post to update.
     */
    where: Prisma.Saved_PostWhereUniqueInput;
};
/**
 * Saved_Post updateMany
 */
export type Saved_PostUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Saved_Posts.
     */
    data: Prisma.XOR<Prisma.Saved_PostUpdateManyMutationInput, Prisma.Saved_PostUncheckedUpdateManyInput>;
    /**
     * Filter which Saved_Posts to update
     */
    where?: Prisma.Saved_PostWhereInput;
    /**
     * Limit how many Saved_Posts to update.
     */
    limit?: number;
};
/**
 * Saved_Post updateManyAndReturn
 */
export type Saved_PostUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_Post
     */
    select?: Prisma.Saved_PostSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Saved_Post
     */
    omit?: Prisma.Saved_PostOmit<ExtArgs> | null;
    /**
     * The data used to update Saved_Posts.
     */
    data: Prisma.XOR<Prisma.Saved_PostUpdateManyMutationInput, Prisma.Saved_PostUncheckedUpdateManyInput>;
    /**
     * Filter which Saved_Posts to update
     */
    where?: Prisma.Saved_PostWhereInput;
    /**
     * Limit how many Saved_Posts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Saved_PostIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Saved_Post upsert
 */
export type Saved_PostUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Saved_Post to update in case it exists.
     */
    where: Prisma.Saved_PostWhereUniqueInput;
    /**
     * In case the Saved_Post found by the `where` argument doesn't exist, create a new Saved_Post with this data.
     */
    create: Prisma.XOR<Prisma.Saved_PostCreateInput, Prisma.Saved_PostUncheckedCreateInput>;
    /**
     * In case the Saved_Post was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.Saved_PostUpdateInput, Prisma.Saved_PostUncheckedUpdateInput>;
};
/**
 * Saved_Post delete
 */
export type Saved_PostDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Saved_Post to delete.
     */
    where: Prisma.Saved_PostWhereUniqueInput;
};
/**
 * Saved_Post deleteMany
 */
export type Saved_PostDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Saved_Posts to delete
     */
    where?: Prisma.Saved_PostWhereInput;
    /**
     * Limit how many Saved_Posts to delete.
     */
    limit?: number;
};
/**
 * Saved_Post without action
 */
export type Saved_PostDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=Saved_Post.d.ts.map