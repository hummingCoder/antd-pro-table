export interface RequestData<T> {
    data: T[];
    success?: boolean;
    total?: number;
    [key: string]: any;
}
export interface UseFetchDataAction<T extends RequestData<any>> {
    setDataSource: (value: any) => void;
    dataSource: T['data'] | T;
    loading: boolean | undefined;
    hasMore: boolean;
    current: number;
    pageSize: number;
    total: number;
    cancel: () => void;
    reload: () => Promise<void>;
    fetchMore: () => void;
    fullScreen?: () => void;
    resetPageIndex: () => void;
    reset: () => void;
    setPageInfo: (pageInfo: Partial<PageInfo>) => void;
}
interface PageInfo {
    hasMore: boolean;
    page: number;
    pageSize: number;
    total: number;
}
declare const useFetchData: <T extends RequestData<any>>(getData: (params: {
    pageSize: number;
    current: number;
}) => Promise<T>, defaultData?: Partial<T["data"]> | undefined, options?: {
    defaultCurrent?: number | undefined;
    defaultPageSize?: number | undefined;
    effects?: any[] | undefined;
    onLoad?: ((dataSource: T["data"]) => void) | undefined;
    onRequestError?: ((e: Error) => void) | undefined;
    manual: boolean;
} | undefined) => UseFetchDataAction<T>;
export default useFetchData;
