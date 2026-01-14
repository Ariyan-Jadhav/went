import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Story_View
 *
 */
export type Story_ViewModel = runtime.Types.Result.DefaultSelection<Prisma.$Story_ViewPayload>;
export type AggregateStory_View = {
    _count: Story_ViewCountAggregateOutputType | null;
    _min: Story_ViewMinAggregateOutputType | null;
    _max: Story_ViewMaxAggregateOutputType | null;
};
export type Story_ViewMinAggregateOutputType = {
    id: string | null;
    story_id: string | null;
    viewer_id: string | null;
    viewedAt: Date | null;
};
export type Story_ViewMaxAggregateOutputType = {
    id: string | null;
    story_id: string | null;
    viewer_id: string | null;
    viewedAt: Date | null;
};
export type Story_ViewCountAggregateOutputType = {
    id: number;
    story_id: number;
    viewer_id: number;
    viewedAt: number;
    _all: number;
};
export type Story_ViewMinAggregateInputType = {
    id?: true;
    story_id?: true;
    viewer_id?: true;
    viewedAt?: true;
};
export type Story_ViewMaxAggregateInputType = {
    id?: true;
    story_id?: true;
    viewer_id?: true;
    viewedAt?: true;
};
export type Story_ViewCountAggregateInputType = {
    id?: true;
    story_id?: true;
    viewer_id?: true;
    viewedAt?: true;
    _all?: true;
};
export type Story_ViewAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Story_View to aggregate.
     */
    where?: Prisma.Story_ViewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Story_Views to fetch.
     */
    orderBy?: Prisma.Story_ViewOrderByWithRelationInput | Prisma.Story_ViewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.Story_ViewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Story_Views from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Story_Views.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Story_Views
    **/
    _count?: true | Story_ViewCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Story_ViewMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Story_ViewMaxAggregateInputType;
};
export type GetStory_ViewAggregateType<T extends Story_ViewAggregateArgs> = {
    [P in keyof T & keyof AggregateStory_View]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStory_View[P]> : Prisma.GetScalarType<T[P], AggregateStory_View[P]>;
};
export type Story_ViewGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Story_ViewWhereInput;
    orderBy?: Prisma.Story_ViewOrderByWithAggregationInput | Prisma.Story_ViewOrderByWithAggregationInput[];
    by: Prisma.Story_ViewScalarFieldEnum[] | Prisma.Story_ViewScalarFieldEnum;
    having?: Prisma.Story_ViewScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Story_ViewCountAggregateInputType | true;
    _min?: Story_ViewMinAggregateInputType;
    _max?: Story_ViewMaxAggregateInputType;
};
export type Story_ViewGroupByOutputType = {
    id: string;
    story_id: string;
    viewer_id: string;
    viewedAt: Date;
    _count: Story_ViewCountAggregateOutputType | null;
    _min: Story_ViewMinAggregateOutputType | null;
    _max: Story_ViewMaxAggregateOutputType | null;
};
type GetStory_ViewGroupByPayload<T extends Story_ViewGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Story_ViewGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Story_ViewGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Story_ViewGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Story_ViewGroupByOutputType[P]>;
}>>;
export type Story_ViewWhereInput = {
    AND?: Prisma.Story_ViewWhereInput | Prisma.Story_ViewWhereInput[];
    OR?: Prisma.Story_ViewWhereInput[];
    NOT?: Prisma.Story_ViewWhereInput | Prisma.Story_ViewWhereInput[];
    id?: Prisma.StringFilter<"Story_View"> | string;
    story_id?: Prisma.StringFilter<"Story_View"> | string;
    viewer_id?: Prisma.StringFilter<"Story_View"> | string;
    viewedAt?: Prisma.DateTimeFilter<"Story_View"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type Story_ViewOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    story_id?: Prisma.SortOrder;
    viewer_id?: Prisma.SortOrder;
    viewedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type Story_ViewWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    story_id_viewer_id?: Prisma.Story_ViewStory_idViewer_idCompoundUniqueInput;
    AND?: Prisma.Story_ViewWhereInput | Prisma.Story_ViewWhereInput[];
    OR?: Prisma.Story_ViewWhereInput[];
    NOT?: Prisma.Story_ViewWhereInput | Prisma.Story_ViewWhereInput[];
    story_id?: Prisma.StringFilter<"Story_View"> | string;
    viewer_id?: Prisma.StringFilter<"Story_View"> | string;
    viewedAt?: Prisma.DateTimeFilter<"Story_View"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "story_id_viewer_id">;
export type Story_ViewOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    story_id?: Prisma.SortOrder;
    viewer_id?: Prisma.SortOrder;
    viewedAt?: Prisma.SortOrder;
    _count?: Prisma.Story_ViewCountOrderByAggregateInput;
    _max?: Prisma.Story_ViewMaxOrderByAggregateInput;
    _min?: Prisma.Story_ViewMinOrderByAggregateInput;
};
export type Story_ViewScalarWhereWithAggregatesInput = {
    AND?: Prisma.Story_ViewScalarWhereWithAggregatesInput | Prisma.Story_ViewScalarWhereWithAggregatesInput[];
    OR?: Prisma.Story_ViewScalarWhereWithAggregatesInput[];
    NOT?: Prisma.Story_ViewScalarWhereWithAggregatesInput | Prisma.Story_ViewScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Story_View"> | string;
    story_id?: Prisma.StringWithAggregatesFilter<"Story_View"> | string;
    viewer_id?: Prisma.StringWithAggregatesFilter<"Story_View"> | string;
    viewedAt?: Prisma.DateTimeWithAggregatesFilter<"Story_View"> | Date | string;
};
export type Story_ViewCreateInput = {
    id?: string;
    story_id: string;
    viewedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutStory_viewsInput;
};
export type Story_ViewUncheckedCreateInput = {
    id?: string;
    story_id: string;
    viewer_id: string;
    viewedAt?: Date | string;
};
export type Story_ViewUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    story_id?: Prisma.StringFieldUpdateOperationsInput | string;
    viewedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutStory_viewsNestedInput;
};
export type Story_ViewUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    story_id?: Prisma.StringFieldUpdateOperationsInput | string;
    viewer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    viewedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Story_ViewCreateManyInput = {
    id?: string;
    story_id: string;
    viewer_id: string;
    viewedAt?: Date | string;
};
export type Story_ViewUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    story_id?: Prisma.StringFieldUpdateOperationsInput | string;
    viewedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Story_ViewUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    story_id?: Prisma.StringFieldUpdateOperationsInput | string;
    viewer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    viewedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Story_ViewListRelationFilter = {
    every?: Prisma.Story_ViewWhereInput;
    some?: Prisma.Story_ViewWhereInput;
    none?: Prisma.Story_ViewWhereInput;
};
export type Story_ViewOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Story_ViewStory_idViewer_idCompoundUniqueInput = {
    story_id: string;
    viewer_id: string;
};
export type Story_ViewCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    story_id?: Prisma.SortOrder;
    viewer_id?: Prisma.SortOrder;
    viewedAt?: Prisma.SortOrder;
};
export type Story_ViewMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    story_id?: Prisma.SortOrder;
    viewer_id?: Prisma.SortOrder;
    viewedAt?: Prisma.SortOrder;
};
export type Story_ViewMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    story_id?: Prisma.SortOrder;
    viewer_id?: Prisma.SortOrder;
    viewedAt?: Prisma.SortOrder;
};
export type Story_ViewCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.Story_ViewCreateWithoutUserInput, Prisma.Story_ViewUncheckedCreateWithoutUserInput> | Prisma.Story_ViewCreateWithoutUserInput[] | Prisma.Story_ViewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.Story_ViewCreateOrConnectWithoutUserInput | Prisma.Story_ViewCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.Story_ViewCreateManyUserInputEnvelope;
    connect?: Prisma.Story_ViewWhereUniqueInput | Prisma.Story_ViewWhereUniqueInput[];
};
export type Story_ViewUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.Story_ViewCreateWithoutUserInput, Prisma.Story_ViewUncheckedCreateWithoutUserInput> | Prisma.Story_ViewCreateWithoutUserInput[] | Prisma.Story_ViewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.Story_ViewCreateOrConnectWithoutUserInput | Prisma.Story_ViewCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.Story_ViewCreateManyUserInputEnvelope;
    connect?: Prisma.Story_ViewWhereUniqueInput | Prisma.Story_ViewWhereUniqueInput[];
};
export type Story_ViewUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.Story_ViewCreateWithoutUserInput, Prisma.Story_ViewUncheckedCreateWithoutUserInput> | Prisma.Story_ViewCreateWithoutUserInput[] | Prisma.Story_ViewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.Story_ViewCreateOrConnectWithoutUserInput | Prisma.Story_ViewCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.Story_ViewUpsertWithWhereUniqueWithoutUserInput | Prisma.Story_ViewUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.Story_ViewCreateManyUserInputEnvelope;
    set?: Prisma.Story_ViewWhereUniqueInput | Prisma.Story_ViewWhereUniqueInput[];
    disconnect?: Prisma.Story_ViewWhereUniqueInput | Prisma.Story_ViewWhereUniqueInput[];
    delete?: Prisma.Story_ViewWhereUniqueInput | Prisma.Story_ViewWhereUniqueInput[];
    connect?: Prisma.Story_ViewWhereUniqueInput | Prisma.Story_ViewWhereUniqueInput[];
    update?: Prisma.Story_ViewUpdateWithWhereUniqueWithoutUserInput | Prisma.Story_ViewUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.Story_ViewUpdateManyWithWhereWithoutUserInput | Prisma.Story_ViewUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.Story_ViewScalarWhereInput | Prisma.Story_ViewScalarWhereInput[];
};
export type Story_ViewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.Story_ViewCreateWithoutUserInput, Prisma.Story_ViewUncheckedCreateWithoutUserInput> | Prisma.Story_ViewCreateWithoutUserInput[] | Prisma.Story_ViewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.Story_ViewCreateOrConnectWithoutUserInput | Prisma.Story_ViewCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.Story_ViewUpsertWithWhereUniqueWithoutUserInput | Prisma.Story_ViewUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.Story_ViewCreateManyUserInputEnvelope;
    set?: Prisma.Story_ViewWhereUniqueInput | Prisma.Story_ViewWhereUniqueInput[];
    disconnect?: Prisma.Story_ViewWhereUniqueInput | Prisma.Story_ViewWhereUniqueInput[];
    delete?: Prisma.Story_ViewWhereUniqueInput | Prisma.Story_ViewWhereUniqueInput[];
    connect?: Prisma.Story_ViewWhereUniqueInput | Prisma.Story_ViewWhereUniqueInput[];
    update?: Prisma.Story_ViewUpdateWithWhereUniqueWithoutUserInput | Prisma.Story_ViewUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.Story_ViewUpdateManyWithWhereWithoutUserInput | Prisma.Story_ViewUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.Story_ViewScalarWhereInput | Prisma.Story_ViewScalarWhereInput[];
};
export type Story_ViewCreateWithoutUserInput = {
    id?: string;
    story_id: string;
    viewedAt?: Date | string;
};
export type Story_ViewUncheckedCreateWithoutUserInput = {
    id?: string;
    story_id: string;
    viewedAt?: Date | string;
};
export type Story_ViewCreateOrConnectWithoutUserInput = {
    where: Prisma.Story_ViewWhereUniqueInput;
    create: Prisma.XOR<Prisma.Story_ViewCreateWithoutUserInput, Prisma.Story_ViewUncheckedCreateWithoutUserInput>;
};
export type Story_ViewCreateManyUserInputEnvelope = {
    data: Prisma.Story_ViewCreateManyUserInput | Prisma.Story_ViewCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type Story_ViewUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.Story_ViewWhereUniqueInput;
    update: Prisma.XOR<Prisma.Story_ViewUpdateWithoutUserInput, Prisma.Story_ViewUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.Story_ViewCreateWithoutUserInput, Prisma.Story_ViewUncheckedCreateWithoutUserInput>;
};
export type Story_ViewUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.Story_ViewWhereUniqueInput;
    data: Prisma.XOR<Prisma.Story_ViewUpdateWithoutUserInput, Prisma.Story_ViewUncheckedUpdateWithoutUserInput>;
};
export type Story_ViewUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.Story_ViewScalarWhereInput;
    data: Prisma.XOR<Prisma.Story_ViewUpdateManyMutationInput, Prisma.Story_ViewUncheckedUpdateManyWithoutUserInput>;
};
export type Story_ViewScalarWhereInput = {
    AND?: Prisma.Story_ViewScalarWhereInput | Prisma.Story_ViewScalarWhereInput[];
    OR?: Prisma.Story_ViewScalarWhereInput[];
    NOT?: Prisma.Story_ViewScalarWhereInput | Prisma.Story_ViewScalarWhereInput[];
    id?: Prisma.StringFilter<"Story_View"> | string;
    story_id?: Prisma.StringFilter<"Story_View"> | string;
    viewer_id?: Prisma.StringFilter<"Story_View"> | string;
    viewedAt?: Prisma.DateTimeFilter<"Story_View"> | Date | string;
};
export type Story_ViewCreateManyUserInput = {
    id?: string;
    story_id: string;
    viewedAt?: Date | string;
};
export type Story_ViewUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    story_id?: Prisma.StringFieldUpdateOperationsInput | string;
    viewedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Story_ViewUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    story_id?: Prisma.StringFieldUpdateOperationsInput | string;
    viewedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Story_ViewUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    story_id?: Prisma.StringFieldUpdateOperationsInput | string;
    viewedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Story_ViewSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    story_id?: boolean;
    viewer_id?: boolean;
    viewedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["story_View"]>;
export type Story_ViewSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    story_id?: boolean;
    viewer_id?: boolean;
    viewedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["story_View"]>;
export type Story_ViewSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    story_id?: boolean;
    viewer_id?: boolean;
    viewedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["story_View"]>;
export type Story_ViewSelectScalar = {
    id?: boolean;
    story_id?: boolean;
    viewer_id?: boolean;
    viewedAt?: boolean;
};
export type Story_ViewOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "story_id" | "viewer_id" | "viewedAt", ExtArgs["result"]["story_View"]>;
export type Story_ViewInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type Story_ViewIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type Story_ViewIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $Story_ViewPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Story_View";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        story_id: string;
        viewer_id: string;
        viewedAt: Date;
    }, ExtArgs["result"]["story_View"]>;
    composites: {};
};
export type Story_ViewGetPayload<S extends boolean | null | undefined | Story_ViewDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$Story_ViewPayload, S>;
export type Story_ViewCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<Story_ViewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Story_ViewCountAggregateInputType | true;
};
export interface Story_ViewDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Story_View'];
        meta: {
            name: 'Story_View';
        };
    };
    /**
     * Find zero or one Story_View that matches the filter.
     * @param {Story_ViewFindUniqueArgs} args - Arguments to find a Story_View
     * @example
     * // Get one Story_View
     * const story_View = await prisma.story_View.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Story_ViewFindUniqueArgs>(args: Prisma.SelectSubset<T, Story_ViewFindUniqueArgs<ExtArgs>>): Prisma.Prisma__Story_ViewClient<runtime.Types.Result.GetResult<Prisma.$Story_ViewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Story_View that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Story_ViewFindUniqueOrThrowArgs} args - Arguments to find a Story_View
     * @example
     * // Get one Story_View
     * const story_View = await prisma.story_View.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Story_ViewFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, Story_ViewFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__Story_ViewClient<runtime.Types.Result.GetResult<Prisma.$Story_ViewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Story_View that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Story_ViewFindFirstArgs} args - Arguments to find a Story_View
     * @example
     * // Get one Story_View
     * const story_View = await prisma.story_View.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Story_ViewFindFirstArgs>(args?: Prisma.SelectSubset<T, Story_ViewFindFirstArgs<ExtArgs>>): Prisma.Prisma__Story_ViewClient<runtime.Types.Result.GetResult<Prisma.$Story_ViewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Story_View that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Story_ViewFindFirstOrThrowArgs} args - Arguments to find a Story_View
     * @example
     * // Get one Story_View
     * const story_View = await prisma.story_View.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Story_ViewFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, Story_ViewFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__Story_ViewClient<runtime.Types.Result.GetResult<Prisma.$Story_ViewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Story_Views that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Story_ViewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Story_Views
     * const story_Views = await prisma.story_View.findMany()
     *
     * // Get first 10 Story_Views
     * const story_Views = await prisma.story_View.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const story_ViewWithIdOnly = await prisma.story_View.findMany({ select: { id: true } })
     *
     */
    findMany<T extends Story_ViewFindManyArgs>(args?: Prisma.SelectSubset<T, Story_ViewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Story_ViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Story_View.
     * @param {Story_ViewCreateArgs} args - Arguments to create a Story_View.
     * @example
     * // Create one Story_View
     * const Story_View = await prisma.story_View.create({
     *   data: {
     *     // ... data to create a Story_View
     *   }
     * })
     *
     */
    create<T extends Story_ViewCreateArgs>(args: Prisma.SelectSubset<T, Story_ViewCreateArgs<ExtArgs>>): Prisma.Prisma__Story_ViewClient<runtime.Types.Result.GetResult<Prisma.$Story_ViewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Story_Views.
     * @param {Story_ViewCreateManyArgs} args - Arguments to create many Story_Views.
     * @example
     * // Create many Story_Views
     * const story_View = await prisma.story_View.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends Story_ViewCreateManyArgs>(args?: Prisma.SelectSubset<T, Story_ViewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Story_Views and returns the data saved in the database.
     * @param {Story_ViewCreateManyAndReturnArgs} args - Arguments to create many Story_Views.
     * @example
     * // Create many Story_Views
     * const story_View = await prisma.story_View.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Story_Views and only return the `id`
     * const story_ViewWithIdOnly = await prisma.story_View.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends Story_ViewCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, Story_ViewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Story_ViewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Story_View.
     * @param {Story_ViewDeleteArgs} args - Arguments to delete one Story_View.
     * @example
     * // Delete one Story_View
     * const Story_View = await prisma.story_View.delete({
     *   where: {
     *     // ... filter to delete one Story_View
     *   }
     * })
     *
     */
    delete<T extends Story_ViewDeleteArgs>(args: Prisma.SelectSubset<T, Story_ViewDeleteArgs<ExtArgs>>): Prisma.Prisma__Story_ViewClient<runtime.Types.Result.GetResult<Prisma.$Story_ViewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Story_View.
     * @param {Story_ViewUpdateArgs} args - Arguments to update one Story_View.
     * @example
     * // Update one Story_View
     * const story_View = await prisma.story_View.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends Story_ViewUpdateArgs>(args: Prisma.SelectSubset<T, Story_ViewUpdateArgs<ExtArgs>>): Prisma.Prisma__Story_ViewClient<runtime.Types.Result.GetResult<Prisma.$Story_ViewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Story_Views.
     * @param {Story_ViewDeleteManyArgs} args - Arguments to filter Story_Views to delete.
     * @example
     * // Delete a few Story_Views
     * const { count } = await prisma.story_View.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends Story_ViewDeleteManyArgs>(args?: Prisma.SelectSubset<T, Story_ViewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Story_Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Story_ViewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Story_Views
     * const story_View = await prisma.story_View.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends Story_ViewUpdateManyArgs>(args: Prisma.SelectSubset<T, Story_ViewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Story_Views and returns the data updated in the database.
     * @param {Story_ViewUpdateManyAndReturnArgs} args - Arguments to update many Story_Views.
     * @example
     * // Update many Story_Views
     * const story_View = await prisma.story_View.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Story_Views and only return the `id`
     * const story_ViewWithIdOnly = await prisma.story_View.updateManyAndReturn({
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
    updateManyAndReturn<T extends Story_ViewUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, Story_ViewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Story_ViewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Story_View.
     * @param {Story_ViewUpsertArgs} args - Arguments to update or create a Story_View.
     * @example
     * // Update or create a Story_View
     * const story_View = await prisma.story_View.upsert({
     *   create: {
     *     // ... data to create a Story_View
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Story_View we want to update
     *   }
     * })
     */
    upsert<T extends Story_ViewUpsertArgs>(args: Prisma.SelectSubset<T, Story_ViewUpsertArgs<ExtArgs>>): Prisma.Prisma__Story_ViewClient<runtime.Types.Result.GetResult<Prisma.$Story_ViewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Story_Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Story_ViewCountArgs} args - Arguments to filter Story_Views to count.
     * @example
     * // Count the number of Story_Views
     * const count = await prisma.story_View.count({
     *   where: {
     *     // ... the filter for the Story_Views we want to count
     *   }
     * })
    **/
    count<T extends Story_ViewCountArgs>(args?: Prisma.Subset<T, Story_ViewCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Story_ViewCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Story_View.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Story_ViewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Story_ViewAggregateArgs>(args: Prisma.Subset<T, Story_ViewAggregateArgs>): Prisma.PrismaPromise<GetStory_ViewAggregateType<T>>;
    /**
     * Group by Story_View.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Story_ViewGroupByArgs} args - Group by arguments.
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
    groupBy<T extends Story_ViewGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: Story_ViewGroupByArgs['orderBy'];
    } : {
        orderBy?: Story_ViewGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, Story_ViewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStory_ViewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Story_View model
     */
    readonly fields: Story_ViewFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Story_View.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__Story_ViewClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the Story_View model
 */
export interface Story_ViewFieldRefs {
    readonly id: Prisma.FieldRef<"Story_View", 'String'>;
    readonly story_id: Prisma.FieldRef<"Story_View", 'String'>;
    readonly viewer_id: Prisma.FieldRef<"Story_View", 'String'>;
    readonly viewedAt: Prisma.FieldRef<"Story_View", 'DateTime'>;
}
/**
 * Story_View findUnique
 */
export type Story_ViewFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Story_View to fetch.
     */
    where: Prisma.Story_ViewWhereUniqueInput;
};
/**
 * Story_View findUniqueOrThrow
 */
export type Story_ViewFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Story_View to fetch.
     */
    where: Prisma.Story_ViewWhereUniqueInput;
};
/**
 * Story_View findFirst
 */
export type Story_ViewFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Story_View to fetch.
     */
    where?: Prisma.Story_ViewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Story_Views to fetch.
     */
    orderBy?: Prisma.Story_ViewOrderByWithRelationInput | Prisma.Story_ViewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Story_Views.
     */
    cursor?: Prisma.Story_ViewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Story_Views from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Story_Views.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Story_Views.
     */
    distinct?: Prisma.Story_ViewScalarFieldEnum | Prisma.Story_ViewScalarFieldEnum[];
};
/**
 * Story_View findFirstOrThrow
 */
export type Story_ViewFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Story_View to fetch.
     */
    where?: Prisma.Story_ViewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Story_Views to fetch.
     */
    orderBy?: Prisma.Story_ViewOrderByWithRelationInput | Prisma.Story_ViewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Story_Views.
     */
    cursor?: Prisma.Story_ViewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Story_Views from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Story_Views.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Story_Views.
     */
    distinct?: Prisma.Story_ViewScalarFieldEnum | Prisma.Story_ViewScalarFieldEnum[];
};
/**
 * Story_View findMany
 */
export type Story_ViewFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Story_Views to fetch.
     */
    where?: Prisma.Story_ViewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Story_Views to fetch.
     */
    orderBy?: Prisma.Story_ViewOrderByWithRelationInput | Prisma.Story_ViewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Story_Views.
     */
    cursor?: Prisma.Story_ViewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Story_Views from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Story_Views.
     */
    skip?: number;
    distinct?: Prisma.Story_ViewScalarFieldEnum | Prisma.Story_ViewScalarFieldEnum[];
};
/**
 * Story_View create
 */
export type Story_ViewCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Story_View.
     */
    data: Prisma.XOR<Prisma.Story_ViewCreateInput, Prisma.Story_ViewUncheckedCreateInput>;
};
/**
 * Story_View createMany
 */
export type Story_ViewCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Story_Views.
     */
    data: Prisma.Story_ViewCreateManyInput | Prisma.Story_ViewCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Story_View createManyAndReturn
 */
export type Story_ViewCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story_View
     */
    select?: Prisma.Story_ViewSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Story_View
     */
    omit?: Prisma.Story_ViewOmit<ExtArgs> | null;
    /**
     * The data used to create many Story_Views.
     */
    data: Prisma.Story_ViewCreateManyInput | Prisma.Story_ViewCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Story_ViewIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Story_View update
 */
export type Story_ViewUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Story_View.
     */
    data: Prisma.XOR<Prisma.Story_ViewUpdateInput, Prisma.Story_ViewUncheckedUpdateInput>;
    /**
     * Choose, which Story_View to update.
     */
    where: Prisma.Story_ViewWhereUniqueInput;
};
/**
 * Story_View updateMany
 */
export type Story_ViewUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Story_Views.
     */
    data: Prisma.XOR<Prisma.Story_ViewUpdateManyMutationInput, Prisma.Story_ViewUncheckedUpdateManyInput>;
    /**
     * Filter which Story_Views to update
     */
    where?: Prisma.Story_ViewWhereInput;
    /**
     * Limit how many Story_Views to update.
     */
    limit?: number;
};
/**
 * Story_View updateManyAndReturn
 */
export type Story_ViewUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story_View
     */
    select?: Prisma.Story_ViewSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Story_View
     */
    omit?: Prisma.Story_ViewOmit<ExtArgs> | null;
    /**
     * The data used to update Story_Views.
     */
    data: Prisma.XOR<Prisma.Story_ViewUpdateManyMutationInput, Prisma.Story_ViewUncheckedUpdateManyInput>;
    /**
     * Filter which Story_Views to update
     */
    where?: Prisma.Story_ViewWhereInput;
    /**
     * Limit how many Story_Views to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Story_ViewIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Story_View upsert
 */
export type Story_ViewUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Story_View to update in case it exists.
     */
    where: Prisma.Story_ViewWhereUniqueInput;
    /**
     * In case the Story_View found by the `where` argument doesn't exist, create a new Story_View with this data.
     */
    create: Prisma.XOR<Prisma.Story_ViewCreateInput, Prisma.Story_ViewUncheckedCreateInput>;
    /**
     * In case the Story_View was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.Story_ViewUpdateInput, Prisma.Story_ViewUncheckedUpdateInput>;
};
/**
 * Story_View delete
 */
export type Story_ViewDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Story_View to delete.
     */
    where: Prisma.Story_ViewWhereUniqueInput;
};
/**
 * Story_View deleteMany
 */
export type Story_ViewDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Story_Views to delete
     */
    where?: Prisma.Story_ViewWhereInput;
    /**
     * Limit how many Story_Views to delete.
     */
    limit?: number;
};
/**
 * Story_View without action
 */
export type Story_ViewDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=Story_View.d.ts.map