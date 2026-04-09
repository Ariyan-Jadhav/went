import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Saved_Think
 *
 */
export type Saved_ThinkModel = runtime.Types.Result.DefaultSelection<Prisma.$Saved_ThinkPayload>;
export type AggregateSaved_Think = {
    _count: Saved_ThinkCountAggregateOutputType | null;
    _min: Saved_ThinkMinAggregateOutputType | null;
    _max: Saved_ThinkMaxAggregateOutputType | null;
};
export type Saved_ThinkMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    post_id: string | null;
    savedAt: Date | null;
};
export type Saved_ThinkMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    post_id: string | null;
    savedAt: Date | null;
};
export type Saved_ThinkCountAggregateOutputType = {
    id: number;
    user_id: number;
    post_id: number;
    savedAt: number;
    _all: number;
};
export type Saved_ThinkMinAggregateInputType = {
    id?: true;
    user_id?: true;
    post_id?: true;
    savedAt?: true;
};
export type Saved_ThinkMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    post_id?: true;
    savedAt?: true;
};
export type Saved_ThinkCountAggregateInputType = {
    id?: true;
    user_id?: true;
    post_id?: true;
    savedAt?: true;
    _all?: true;
};
export type Saved_ThinkAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Saved_Think to aggregate.
     */
    where?: Prisma.Saved_ThinkWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Saved_Thinks to fetch.
     */
    orderBy?: Prisma.Saved_ThinkOrderByWithRelationInput | Prisma.Saved_ThinkOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.Saved_ThinkWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Saved_Thinks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Saved_Thinks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Saved_Thinks
    **/
    _count?: true | Saved_ThinkCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Saved_ThinkMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Saved_ThinkMaxAggregateInputType;
};
export type GetSaved_ThinkAggregateType<T extends Saved_ThinkAggregateArgs> = {
    [P in keyof T & keyof AggregateSaved_Think]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSaved_Think[P]> : Prisma.GetScalarType<T[P], AggregateSaved_Think[P]>;
};
export type Saved_ThinkGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Saved_ThinkWhereInput;
    orderBy?: Prisma.Saved_ThinkOrderByWithAggregationInput | Prisma.Saved_ThinkOrderByWithAggregationInput[];
    by: Prisma.Saved_ThinkScalarFieldEnum[] | Prisma.Saved_ThinkScalarFieldEnum;
    having?: Prisma.Saved_ThinkScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Saved_ThinkCountAggregateInputType | true;
    _min?: Saved_ThinkMinAggregateInputType;
    _max?: Saved_ThinkMaxAggregateInputType;
};
export type Saved_ThinkGroupByOutputType = {
    id: string;
    user_id: string;
    post_id: string;
    savedAt: Date;
    _count: Saved_ThinkCountAggregateOutputType | null;
    _min: Saved_ThinkMinAggregateOutputType | null;
    _max: Saved_ThinkMaxAggregateOutputType | null;
};
type GetSaved_ThinkGroupByPayload<T extends Saved_ThinkGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Saved_ThinkGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Saved_ThinkGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Saved_ThinkGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Saved_ThinkGroupByOutputType[P]>;
}>>;
export type Saved_ThinkWhereInput = {
    AND?: Prisma.Saved_ThinkWhereInput | Prisma.Saved_ThinkWhereInput[];
    OR?: Prisma.Saved_ThinkWhereInput[];
    NOT?: Prisma.Saved_ThinkWhereInput | Prisma.Saved_ThinkWhereInput[];
    id?: Prisma.StringFilter<"Saved_Think"> | string;
    user_id?: Prisma.StringFilter<"Saved_Think"> | string;
    post_id?: Prisma.StringFilter<"Saved_Think"> | string;
    savedAt?: Prisma.DateTimeFilter<"Saved_Think"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type Saved_ThinkOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    post_id?: Prisma.SortOrder;
    savedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type Saved_ThinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    user_id_post_id?: Prisma.Saved_ThinkUser_idPost_idCompoundUniqueInput;
    AND?: Prisma.Saved_ThinkWhereInput | Prisma.Saved_ThinkWhereInput[];
    OR?: Prisma.Saved_ThinkWhereInput[];
    NOT?: Prisma.Saved_ThinkWhereInput | Prisma.Saved_ThinkWhereInput[];
    user_id?: Prisma.StringFilter<"Saved_Think"> | string;
    post_id?: Prisma.StringFilter<"Saved_Think"> | string;
    savedAt?: Prisma.DateTimeFilter<"Saved_Think"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "user_id_post_id">;
export type Saved_ThinkOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    post_id?: Prisma.SortOrder;
    savedAt?: Prisma.SortOrder;
    _count?: Prisma.Saved_ThinkCountOrderByAggregateInput;
    _max?: Prisma.Saved_ThinkMaxOrderByAggregateInput;
    _min?: Prisma.Saved_ThinkMinOrderByAggregateInput;
};
export type Saved_ThinkScalarWhereWithAggregatesInput = {
    AND?: Prisma.Saved_ThinkScalarWhereWithAggregatesInput | Prisma.Saved_ThinkScalarWhereWithAggregatesInput[];
    OR?: Prisma.Saved_ThinkScalarWhereWithAggregatesInput[];
    NOT?: Prisma.Saved_ThinkScalarWhereWithAggregatesInput | Prisma.Saved_ThinkScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Saved_Think"> | string;
    user_id?: Prisma.StringWithAggregatesFilter<"Saved_Think"> | string;
    post_id?: Prisma.StringWithAggregatesFilter<"Saved_Think"> | string;
    savedAt?: Prisma.DateTimeWithAggregatesFilter<"Saved_Think"> | Date | string;
};
export type Saved_ThinkCreateInput = {
    id?: string;
    post_id: string;
    savedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutSaved_postInput;
};
export type Saved_ThinkUncheckedCreateInput = {
    id?: string;
    user_id: string;
    post_id: string;
    savedAt?: Date | string;
};
export type Saved_ThinkUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    post_id?: Prisma.StringFieldUpdateOperationsInput | string;
    savedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSaved_postNestedInput;
};
export type Saved_ThinkUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    post_id?: Prisma.StringFieldUpdateOperationsInput | string;
    savedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Saved_ThinkCreateManyInput = {
    id?: string;
    user_id: string;
    post_id: string;
    savedAt?: Date | string;
};
export type Saved_ThinkUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    post_id?: Prisma.StringFieldUpdateOperationsInput | string;
    savedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Saved_ThinkUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    post_id?: Prisma.StringFieldUpdateOperationsInput | string;
    savedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Saved_ThinkListRelationFilter = {
    every?: Prisma.Saved_ThinkWhereInput;
    some?: Prisma.Saved_ThinkWhereInput;
    none?: Prisma.Saved_ThinkWhereInput;
};
export type Saved_ThinkOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Saved_ThinkUser_idPost_idCompoundUniqueInput = {
    user_id: string;
    post_id: string;
};
export type Saved_ThinkCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    post_id?: Prisma.SortOrder;
    savedAt?: Prisma.SortOrder;
};
export type Saved_ThinkMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    post_id?: Prisma.SortOrder;
    savedAt?: Prisma.SortOrder;
};
export type Saved_ThinkMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    post_id?: Prisma.SortOrder;
    savedAt?: Prisma.SortOrder;
};
export type Saved_ThinkCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.Saved_ThinkCreateWithoutUserInput, Prisma.Saved_ThinkUncheckedCreateWithoutUserInput> | Prisma.Saved_ThinkCreateWithoutUserInput[] | Prisma.Saved_ThinkUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.Saved_ThinkCreateOrConnectWithoutUserInput | Prisma.Saved_ThinkCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.Saved_ThinkCreateManyUserInputEnvelope;
    connect?: Prisma.Saved_ThinkWhereUniqueInput | Prisma.Saved_ThinkWhereUniqueInput[];
};
export type Saved_ThinkUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.Saved_ThinkCreateWithoutUserInput, Prisma.Saved_ThinkUncheckedCreateWithoutUserInput> | Prisma.Saved_ThinkCreateWithoutUserInput[] | Prisma.Saved_ThinkUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.Saved_ThinkCreateOrConnectWithoutUserInput | Prisma.Saved_ThinkCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.Saved_ThinkCreateManyUserInputEnvelope;
    connect?: Prisma.Saved_ThinkWhereUniqueInput | Prisma.Saved_ThinkWhereUniqueInput[];
};
export type Saved_ThinkUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.Saved_ThinkCreateWithoutUserInput, Prisma.Saved_ThinkUncheckedCreateWithoutUserInput> | Prisma.Saved_ThinkCreateWithoutUserInput[] | Prisma.Saved_ThinkUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.Saved_ThinkCreateOrConnectWithoutUserInput | Prisma.Saved_ThinkCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.Saved_ThinkUpsertWithWhereUniqueWithoutUserInput | Prisma.Saved_ThinkUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.Saved_ThinkCreateManyUserInputEnvelope;
    set?: Prisma.Saved_ThinkWhereUniqueInput | Prisma.Saved_ThinkWhereUniqueInput[];
    disconnect?: Prisma.Saved_ThinkWhereUniqueInput | Prisma.Saved_ThinkWhereUniqueInput[];
    delete?: Prisma.Saved_ThinkWhereUniqueInput | Prisma.Saved_ThinkWhereUniqueInput[];
    connect?: Prisma.Saved_ThinkWhereUniqueInput | Prisma.Saved_ThinkWhereUniqueInput[];
    update?: Prisma.Saved_ThinkUpdateWithWhereUniqueWithoutUserInput | Prisma.Saved_ThinkUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.Saved_ThinkUpdateManyWithWhereWithoutUserInput | Prisma.Saved_ThinkUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.Saved_ThinkScalarWhereInput | Prisma.Saved_ThinkScalarWhereInput[];
};
export type Saved_ThinkUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.Saved_ThinkCreateWithoutUserInput, Prisma.Saved_ThinkUncheckedCreateWithoutUserInput> | Prisma.Saved_ThinkCreateWithoutUserInput[] | Prisma.Saved_ThinkUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.Saved_ThinkCreateOrConnectWithoutUserInput | Prisma.Saved_ThinkCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.Saved_ThinkUpsertWithWhereUniqueWithoutUserInput | Prisma.Saved_ThinkUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.Saved_ThinkCreateManyUserInputEnvelope;
    set?: Prisma.Saved_ThinkWhereUniqueInput | Prisma.Saved_ThinkWhereUniqueInput[];
    disconnect?: Prisma.Saved_ThinkWhereUniqueInput | Prisma.Saved_ThinkWhereUniqueInput[];
    delete?: Prisma.Saved_ThinkWhereUniqueInput | Prisma.Saved_ThinkWhereUniqueInput[];
    connect?: Prisma.Saved_ThinkWhereUniqueInput | Prisma.Saved_ThinkWhereUniqueInput[];
    update?: Prisma.Saved_ThinkUpdateWithWhereUniqueWithoutUserInput | Prisma.Saved_ThinkUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.Saved_ThinkUpdateManyWithWhereWithoutUserInput | Prisma.Saved_ThinkUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.Saved_ThinkScalarWhereInput | Prisma.Saved_ThinkScalarWhereInput[];
};
export type Saved_ThinkCreateWithoutUserInput = {
    id?: string;
    post_id: string;
    savedAt?: Date | string;
};
export type Saved_ThinkUncheckedCreateWithoutUserInput = {
    id?: string;
    post_id: string;
    savedAt?: Date | string;
};
export type Saved_ThinkCreateOrConnectWithoutUserInput = {
    where: Prisma.Saved_ThinkWhereUniqueInput;
    create: Prisma.XOR<Prisma.Saved_ThinkCreateWithoutUserInput, Prisma.Saved_ThinkUncheckedCreateWithoutUserInput>;
};
export type Saved_ThinkCreateManyUserInputEnvelope = {
    data: Prisma.Saved_ThinkCreateManyUserInput | Prisma.Saved_ThinkCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type Saved_ThinkUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.Saved_ThinkWhereUniqueInput;
    update: Prisma.XOR<Prisma.Saved_ThinkUpdateWithoutUserInput, Prisma.Saved_ThinkUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.Saved_ThinkCreateWithoutUserInput, Prisma.Saved_ThinkUncheckedCreateWithoutUserInput>;
};
export type Saved_ThinkUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.Saved_ThinkWhereUniqueInput;
    data: Prisma.XOR<Prisma.Saved_ThinkUpdateWithoutUserInput, Prisma.Saved_ThinkUncheckedUpdateWithoutUserInput>;
};
export type Saved_ThinkUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.Saved_ThinkScalarWhereInput;
    data: Prisma.XOR<Prisma.Saved_ThinkUpdateManyMutationInput, Prisma.Saved_ThinkUncheckedUpdateManyWithoutUserInput>;
};
export type Saved_ThinkScalarWhereInput = {
    AND?: Prisma.Saved_ThinkScalarWhereInput | Prisma.Saved_ThinkScalarWhereInput[];
    OR?: Prisma.Saved_ThinkScalarWhereInput[];
    NOT?: Prisma.Saved_ThinkScalarWhereInput | Prisma.Saved_ThinkScalarWhereInput[];
    id?: Prisma.StringFilter<"Saved_Think"> | string;
    user_id?: Prisma.StringFilter<"Saved_Think"> | string;
    post_id?: Prisma.StringFilter<"Saved_Think"> | string;
    savedAt?: Prisma.DateTimeFilter<"Saved_Think"> | Date | string;
};
export type Saved_ThinkCreateManyUserInput = {
    id?: string;
    post_id: string;
    savedAt?: Date | string;
};
export type Saved_ThinkUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    post_id?: Prisma.StringFieldUpdateOperationsInput | string;
    savedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Saved_ThinkUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    post_id?: Prisma.StringFieldUpdateOperationsInput | string;
    savedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Saved_ThinkUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    post_id?: Prisma.StringFieldUpdateOperationsInput | string;
    savedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Saved_ThinkSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    post_id?: boolean;
    savedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["saved_Think"]>;
export type Saved_ThinkSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    post_id?: boolean;
    savedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["saved_Think"]>;
export type Saved_ThinkSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    post_id?: boolean;
    savedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["saved_Think"]>;
export type Saved_ThinkSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    post_id?: boolean;
    savedAt?: boolean;
};
export type Saved_ThinkOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "post_id" | "savedAt", ExtArgs["result"]["saved_Think"]>;
export type Saved_ThinkInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type Saved_ThinkIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type Saved_ThinkIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $Saved_ThinkPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Saved_Think";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        user_id: string;
        post_id: string;
        savedAt: Date;
    }, ExtArgs["result"]["saved_Think"]>;
    composites: {};
};
export type Saved_ThinkGetPayload<S extends boolean | null | undefined | Saved_ThinkDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$Saved_ThinkPayload, S>;
export type Saved_ThinkCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<Saved_ThinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Saved_ThinkCountAggregateInputType | true;
};
export interface Saved_ThinkDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Saved_Think'];
        meta: {
            name: 'Saved_Think';
        };
    };
    /**
     * Find zero or one Saved_Think that matches the filter.
     * @param {Saved_ThinkFindUniqueArgs} args - Arguments to find a Saved_Think
     * @example
     * // Get one Saved_Think
     * const saved_Think = await prisma.saved_Think.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Saved_ThinkFindUniqueArgs>(args: Prisma.SelectSubset<T, Saved_ThinkFindUniqueArgs<ExtArgs>>): Prisma.Prisma__Saved_ThinkClient<runtime.Types.Result.GetResult<Prisma.$Saved_ThinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Saved_Think that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Saved_ThinkFindUniqueOrThrowArgs} args - Arguments to find a Saved_Think
     * @example
     * // Get one Saved_Think
     * const saved_Think = await prisma.saved_Think.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Saved_ThinkFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, Saved_ThinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__Saved_ThinkClient<runtime.Types.Result.GetResult<Prisma.$Saved_ThinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Saved_Think that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Saved_ThinkFindFirstArgs} args - Arguments to find a Saved_Think
     * @example
     * // Get one Saved_Think
     * const saved_Think = await prisma.saved_Think.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Saved_ThinkFindFirstArgs>(args?: Prisma.SelectSubset<T, Saved_ThinkFindFirstArgs<ExtArgs>>): Prisma.Prisma__Saved_ThinkClient<runtime.Types.Result.GetResult<Prisma.$Saved_ThinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Saved_Think that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Saved_ThinkFindFirstOrThrowArgs} args - Arguments to find a Saved_Think
     * @example
     * // Get one Saved_Think
     * const saved_Think = await prisma.saved_Think.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Saved_ThinkFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, Saved_ThinkFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__Saved_ThinkClient<runtime.Types.Result.GetResult<Prisma.$Saved_ThinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Saved_Thinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Saved_ThinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Saved_Thinks
     * const saved_Thinks = await prisma.saved_Think.findMany()
     *
     * // Get first 10 Saved_Thinks
     * const saved_Thinks = await prisma.saved_Think.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const saved_ThinkWithIdOnly = await prisma.saved_Think.findMany({ select: { id: true } })
     *
     */
    findMany<T extends Saved_ThinkFindManyArgs>(args?: Prisma.SelectSubset<T, Saved_ThinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Saved_ThinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Saved_Think.
     * @param {Saved_ThinkCreateArgs} args - Arguments to create a Saved_Think.
     * @example
     * // Create one Saved_Think
     * const Saved_Think = await prisma.saved_Think.create({
     *   data: {
     *     // ... data to create a Saved_Think
     *   }
     * })
     *
     */
    create<T extends Saved_ThinkCreateArgs>(args: Prisma.SelectSubset<T, Saved_ThinkCreateArgs<ExtArgs>>): Prisma.Prisma__Saved_ThinkClient<runtime.Types.Result.GetResult<Prisma.$Saved_ThinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Saved_Thinks.
     * @param {Saved_ThinkCreateManyArgs} args - Arguments to create many Saved_Thinks.
     * @example
     * // Create many Saved_Thinks
     * const saved_Think = await prisma.saved_Think.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends Saved_ThinkCreateManyArgs>(args?: Prisma.SelectSubset<T, Saved_ThinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Saved_Thinks and returns the data saved in the database.
     * @param {Saved_ThinkCreateManyAndReturnArgs} args - Arguments to create many Saved_Thinks.
     * @example
     * // Create many Saved_Thinks
     * const saved_Think = await prisma.saved_Think.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Saved_Thinks and only return the `id`
     * const saved_ThinkWithIdOnly = await prisma.saved_Think.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends Saved_ThinkCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, Saved_ThinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Saved_ThinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Saved_Think.
     * @param {Saved_ThinkDeleteArgs} args - Arguments to delete one Saved_Think.
     * @example
     * // Delete one Saved_Think
     * const Saved_Think = await prisma.saved_Think.delete({
     *   where: {
     *     // ... filter to delete one Saved_Think
     *   }
     * })
     *
     */
    delete<T extends Saved_ThinkDeleteArgs>(args: Prisma.SelectSubset<T, Saved_ThinkDeleteArgs<ExtArgs>>): Prisma.Prisma__Saved_ThinkClient<runtime.Types.Result.GetResult<Prisma.$Saved_ThinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Saved_Think.
     * @param {Saved_ThinkUpdateArgs} args - Arguments to update one Saved_Think.
     * @example
     * // Update one Saved_Think
     * const saved_Think = await prisma.saved_Think.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends Saved_ThinkUpdateArgs>(args: Prisma.SelectSubset<T, Saved_ThinkUpdateArgs<ExtArgs>>): Prisma.Prisma__Saved_ThinkClient<runtime.Types.Result.GetResult<Prisma.$Saved_ThinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Saved_Thinks.
     * @param {Saved_ThinkDeleteManyArgs} args - Arguments to filter Saved_Thinks to delete.
     * @example
     * // Delete a few Saved_Thinks
     * const { count } = await prisma.saved_Think.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends Saved_ThinkDeleteManyArgs>(args?: Prisma.SelectSubset<T, Saved_ThinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Saved_Thinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Saved_ThinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Saved_Thinks
     * const saved_Think = await prisma.saved_Think.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends Saved_ThinkUpdateManyArgs>(args: Prisma.SelectSubset<T, Saved_ThinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Saved_Thinks and returns the data updated in the database.
     * @param {Saved_ThinkUpdateManyAndReturnArgs} args - Arguments to update many Saved_Thinks.
     * @example
     * // Update many Saved_Thinks
     * const saved_Think = await prisma.saved_Think.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Saved_Thinks and only return the `id`
     * const saved_ThinkWithIdOnly = await prisma.saved_Think.updateManyAndReturn({
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
    updateManyAndReturn<T extends Saved_ThinkUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, Saved_ThinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Saved_ThinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Saved_Think.
     * @param {Saved_ThinkUpsertArgs} args - Arguments to update or create a Saved_Think.
     * @example
     * // Update or create a Saved_Think
     * const saved_Think = await prisma.saved_Think.upsert({
     *   create: {
     *     // ... data to create a Saved_Think
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Saved_Think we want to update
     *   }
     * })
     */
    upsert<T extends Saved_ThinkUpsertArgs>(args: Prisma.SelectSubset<T, Saved_ThinkUpsertArgs<ExtArgs>>): Prisma.Prisma__Saved_ThinkClient<runtime.Types.Result.GetResult<Prisma.$Saved_ThinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Saved_Thinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Saved_ThinkCountArgs} args - Arguments to filter Saved_Thinks to count.
     * @example
     * // Count the number of Saved_Thinks
     * const count = await prisma.saved_Think.count({
     *   where: {
     *     // ... the filter for the Saved_Thinks we want to count
     *   }
     * })
    **/
    count<T extends Saved_ThinkCountArgs>(args?: Prisma.Subset<T, Saved_ThinkCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Saved_ThinkCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Saved_Think.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Saved_ThinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Saved_ThinkAggregateArgs>(args: Prisma.Subset<T, Saved_ThinkAggregateArgs>): Prisma.PrismaPromise<GetSaved_ThinkAggregateType<T>>;
    /**
     * Group by Saved_Think.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Saved_ThinkGroupByArgs} args - Group by arguments.
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
    groupBy<T extends Saved_ThinkGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: Saved_ThinkGroupByArgs['orderBy'];
    } : {
        orderBy?: Saved_ThinkGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, Saved_ThinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaved_ThinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Saved_Think model
     */
    readonly fields: Saved_ThinkFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Saved_Think.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__Saved_ThinkClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the Saved_Think model
 */
export interface Saved_ThinkFieldRefs {
    readonly id: Prisma.FieldRef<"Saved_Think", 'String'>;
    readonly user_id: Prisma.FieldRef<"Saved_Think", 'String'>;
    readonly post_id: Prisma.FieldRef<"Saved_Think", 'String'>;
    readonly savedAt: Prisma.FieldRef<"Saved_Think", 'DateTime'>;
}
/**
 * Saved_Think findUnique
 */
export type Saved_ThinkFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_Think
     */
    select?: Prisma.Saved_ThinkSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Saved_Think
     */
    omit?: Prisma.Saved_ThinkOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Saved_ThinkInclude<ExtArgs> | null;
    /**
     * Filter, which Saved_Think to fetch.
     */
    where: Prisma.Saved_ThinkWhereUniqueInput;
};
/**
 * Saved_Think findUniqueOrThrow
 */
export type Saved_ThinkFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_Think
     */
    select?: Prisma.Saved_ThinkSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Saved_Think
     */
    omit?: Prisma.Saved_ThinkOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Saved_ThinkInclude<ExtArgs> | null;
    /**
     * Filter, which Saved_Think to fetch.
     */
    where: Prisma.Saved_ThinkWhereUniqueInput;
};
/**
 * Saved_Think findFirst
 */
export type Saved_ThinkFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_Think
     */
    select?: Prisma.Saved_ThinkSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Saved_Think
     */
    omit?: Prisma.Saved_ThinkOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Saved_ThinkInclude<ExtArgs> | null;
    /**
     * Filter, which Saved_Think to fetch.
     */
    where?: Prisma.Saved_ThinkWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Saved_Thinks to fetch.
     */
    orderBy?: Prisma.Saved_ThinkOrderByWithRelationInput | Prisma.Saved_ThinkOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Saved_Thinks.
     */
    cursor?: Prisma.Saved_ThinkWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Saved_Thinks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Saved_Thinks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Saved_Thinks.
     */
    distinct?: Prisma.Saved_ThinkScalarFieldEnum | Prisma.Saved_ThinkScalarFieldEnum[];
};
/**
 * Saved_Think findFirstOrThrow
 */
export type Saved_ThinkFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_Think
     */
    select?: Prisma.Saved_ThinkSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Saved_Think
     */
    omit?: Prisma.Saved_ThinkOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Saved_ThinkInclude<ExtArgs> | null;
    /**
     * Filter, which Saved_Think to fetch.
     */
    where?: Prisma.Saved_ThinkWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Saved_Thinks to fetch.
     */
    orderBy?: Prisma.Saved_ThinkOrderByWithRelationInput | Prisma.Saved_ThinkOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Saved_Thinks.
     */
    cursor?: Prisma.Saved_ThinkWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Saved_Thinks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Saved_Thinks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Saved_Thinks.
     */
    distinct?: Prisma.Saved_ThinkScalarFieldEnum | Prisma.Saved_ThinkScalarFieldEnum[];
};
/**
 * Saved_Think findMany
 */
export type Saved_ThinkFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_Think
     */
    select?: Prisma.Saved_ThinkSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Saved_Think
     */
    omit?: Prisma.Saved_ThinkOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Saved_ThinkInclude<ExtArgs> | null;
    /**
     * Filter, which Saved_Thinks to fetch.
     */
    where?: Prisma.Saved_ThinkWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Saved_Thinks to fetch.
     */
    orderBy?: Prisma.Saved_ThinkOrderByWithRelationInput | Prisma.Saved_ThinkOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Saved_Thinks.
     */
    cursor?: Prisma.Saved_ThinkWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Saved_Thinks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Saved_Thinks.
     */
    skip?: number;
    distinct?: Prisma.Saved_ThinkScalarFieldEnum | Prisma.Saved_ThinkScalarFieldEnum[];
};
/**
 * Saved_Think create
 */
export type Saved_ThinkCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_Think
     */
    select?: Prisma.Saved_ThinkSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Saved_Think
     */
    omit?: Prisma.Saved_ThinkOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Saved_ThinkInclude<ExtArgs> | null;
    /**
     * The data needed to create a Saved_Think.
     */
    data: Prisma.XOR<Prisma.Saved_ThinkCreateInput, Prisma.Saved_ThinkUncheckedCreateInput>;
};
/**
 * Saved_Think createMany
 */
export type Saved_ThinkCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Saved_Thinks.
     */
    data: Prisma.Saved_ThinkCreateManyInput | Prisma.Saved_ThinkCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Saved_Think createManyAndReturn
 */
export type Saved_ThinkCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_Think
     */
    select?: Prisma.Saved_ThinkSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Saved_Think
     */
    omit?: Prisma.Saved_ThinkOmit<ExtArgs> | null;
    /**
     * The data used to create many Saved_Thinks.
     */
    data: Prisma.Saved_ThinkCreateManyInput | Prisma.Saved_ThinkCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Saved_ThinkIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Saved_Think update
 */
export type Saved_ThinkUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_Think
     */
    select?: Prisma.Saved_ThinkSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Saved_Think
     */
    omit?: Prisma.Saved_ThinkOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Saved_ThinkInclude<ExtArgs> | null;
    /**
     * The data needed to update a Saved_Think.
     */
    data: Prisma.XOR<Prisma.Saved_ThinkUpdateInput, Prisma.Saved_ThinkUncheckedUpdateInput>;
    /**
     * Choose, which Saved_Think to update.
     */
    where: Prisma.Saved_ThinkWhereUniqueInput;
};
/**
 * Saved_Think updateMany
 */
export type Saved_ThinkUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Saved_Thinks.
     */
    data: Prisma.XOR<Prisma.Saved_ThinkUpdateManyMutationInput, Prisma.Saved_ThinkUncheckedUpdateManyInput>;
    /**
     * Filter which Saved_Thinks to update
     */
    where?: Prisma.Saved_ThinkWhereInput;
    /**
     * Limit how many Saved_Thinks to update.
     */
    limit?: number;
};
/**
 * Saved_Think updateManyAndReturn
 */
export type Saved_ThinkUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_Think
     */
    select?: Prisma.Saved_ThinkSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Saved_Think
     */
    omit?: Prisma.Saved_ThinkOmit<ExtArgs> | null;
    /**
     * The data used to update Saved_Thinks.
     */
    data: Prisma.XOR<Prisma.Saved_ThinkUpdateManyMutationInput, Prisma.Saved_ThinkUncheckedUpdateManyInput>;
    /**
     * Filter which Saved_Thinks to update
     */
    where?: Prisma.Saved_ThinkWhereInput;
    /**
     * Limit how many Saved_Thinks to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Saved_ThinkIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Saved_Think upsert
 */
export type Saved_ThinkUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_Think
     */
    select?: Prisma.Saved_ThinkSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Saved_Think
     */
    omit?: Prisma.Saved_ThinkOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Saved_ThinkInclude<ExtArgs> | null;
    /**
     * The filter to search for the Saved_Think to update in case it exists.
     */
    where: Prisma.Saved_ThinkWhereUniqueInput;
    /**
     * In case the Saved_Think found by the `where` argument doesn't exist, create a new Saved_Think with this data.
     */
    create: Prisma.XOR<Prisma.Saved_ThinkCreateInput, Prisma.Saved_ThinkUncheckedCreateInput>;
    /**
     * In case the Saved_Think was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.Saved_ThinkUpdateInput, Prisma.Saved_ThinkUncheckedUpdateInput>;
};
/**
 * Saved_Think delete
 */
export type Saved_ThinkDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_Think
     */
    select?: Prisma.Saved_ThinkSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Saved_Think
     */
    omit?: Prisma.Saved_ThinkOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Saved_ThinkInclude<ExtArgs> | null;
    /**
     * Filter which Saved_Think to delete.
     */
    where: Prisma.Saved_ThinkWhereUniqueInput;
};
/**
 * Saved_Think deleteMany
 */
export type Saved_ThinkDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Saved_Thinks to delete
     */
    where?: Prisma.Saved_ThinkWhereInput;
    /**
     * Limit how many Saved_Thinks to delete.
     */
    limit?: number;
};
/**
 * Saved_Think without action
 */
export type Saved_ThinkDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saved_Think
     */
    select?: Prisma.Saved_ThinkSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Saved_Think
     */
    omit?: Prisma.Saved_ThinkOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Saved_ThinkInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Saved_Think.d.ts.map