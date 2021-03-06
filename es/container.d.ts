/// <reference types="react" />
import { ColumnType } from 'antd/lib/table';
import { RequestData, ProColumns, ProTableProps } from './index';
import { UseFetchDataAction } from './useFetchData';
import { DensitySize } from './component/ToolBar/DensityIcon';
export declare type ColumnsState = {
    show?: boolean;
    fixed?: 'right' | 'left' | undefined;
    order?: number;
};
export interface UseCounterProps {
    columnsStateMap?: {
        [key: string]: ColumnsState;
    };
    onColumnsStateChange?: (map: {
        [key: string]: ColumnsState;
    }) => void;
    size?: DensitySize;
    onSizeChange?: (size: DensitySize) => void;
}
declare function useCounter(props?: UseCounterProps): {
    action: import("react").MutableRefObject<UseFetchDataAction<RequestData<any>> | undefined>;
    setAction: (newAction: UseFetchDataAction<RequestData<any>>) => void;
    sortKeyColumns: string[];
    setSortKeyColumns: (keys: string[]) => void;
    columns: (ColumnType<any> & {
        index?: number | undefined;
    })[];
    setColumns: import("react").Dispatch<import("react").SetStateAction<(ColumnType<any> & {
        index?: number | undefined;
    })[]>>;
    propsRef: import("react").MutableRefObject<ProTableProps<any, any> | undefined>;
    columnsMap: {
        [key: string]: ColumnsState;
    };
    setTableSize: (value: DensitySize) => void;
    tableSize: DensitySize;
    setColumnsMap: (value: {
        [key: string]: ColumnsState;
    }) => void;
    proColumns: ProColumns<any>[];
    setProColumns: import("react").Dispatch<import("react").SetStateAction<ProColumns<any>[]>>;
};
declare const Counter: import("unstated-next").Container<{
    action: import("react").MutableRefObject<UseFetchDataAction<RequestData<any>> | undefined>;
    setAction: (newAction: UseFetchDataAction<RequestData<any>>) => void;
    sortKeyColumns: string[];
    setSortKeyColumns: (keys: string[]) => void;
    columns: (ColumnType<any> & {
        index?: number | undefined;
    })[];
    setColumns: import("react").Dispatch<import("react").SetStateAction<(ColumnType<any> & {
        index?: number | undefined;
    })[]>>;
    propsRef: import("react").MutableRefObject<ProTableProps<any, any> | undefined>;
    columnsMap: {
        [key: string]: ColumnsState;
    };
    setTableSize: (value: DensitySize) => void;
    tableSize: DensitySize;
    setColumnsMap: (value: {
        [key: string]: ColumnsState;
    }) => void;
    proColumns: ProColumns<any>[];
    setProColumns: import("react").Dispatch<import("react").SetStateAction<ProColumns<any>[]>>;
}, UseCounterProps>;
export declare type CounterType = typeof useCounter;
export { useCounter };
export default Counter;
