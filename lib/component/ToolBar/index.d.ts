import React from 'react';
import { SearchProps } from 'antd/lib/input';
import { UseFetchDataAction, RequestData } from '../../useFetchData';
import './index.less';
export interface OptionConfig<T> {
    density?: boolean;
    fullScreen?: OptionsType<T>;
    reload?: OptionsType<T>;
    setting?: boolean;
    search?: (SearchProps & {
        name?: string;
    }) | boolean;
}
export declare type OptionsType<T = unknown> = ((e: React.MouseEvent<HTMLSpanElement>, action: UseFetchDataAction<RequestData<T>>) => void) | boolean;
export interface ToolBarProps<T = unknown> {
    headerTitle?: React.ReactNode;
    tip?: string;
    toolBarRender?: (action: UseFetchDataAction<RequestData<T>>, rows: {
        selectedRowKeys?: (string | number)[];
        selectedRows?: T[];
    }) => React.ReactNode[];
    action: UseFetchDataAction<RequestData<T>>;
    options?: OptionConfig<T> | false;
    selectedRowKeys?: (string | number)[];
    selectedRows?: T[];
    className?: string;
    onSearch?: (keyWords: string) => void;
}
declare const ToolBar: <T, U = {}>({ headerTitle, tip, toolBarRender, action, options: propsOptions, selectedRowKeys, selectedRows, onSearch, }: ToolBarProps<T>) => JSX.Element;
export default ToolBar;
