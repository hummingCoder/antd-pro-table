import React, { ReactText } from 'react';
import { TablePaginationConfig } from 'antd/lib/table';
import { ProCoreActionType } from '@ant-design/pro-utils';
import { IntlType } from '@ant-design/pro-provider';
import { ProColumns, ProTableProps } from './Table';
import { UseFetchDataAction, RequestData } from './useFetchData';
import { CounterType } from './container';
/**
 * 检查值是否存在
 * 为了 避开 0 和 false
 * @param value
 */
export declare const checkUndefinedOrNull: (value: any) => boolean;
/**
 *  根据 key 和 dataIndex 生成唯一 id
 * @param key 用户设置的 key
 * @param dataIndex 在对象中的数据
 * @param index 序列号，理论上唯一
 */
export declare const genColumnKey: (key?: React.ReactText | undefined, index?: number | undefined) => string;
/**
 * 减少 width，支持 string 和 number
 */
export declare const reduceWidth: (width?: string | number | undefined) => string | number | undefined;
/**
 * 生成 Ellipsis 的 tooltip
 * @param dom
 * @param item
 * @param text
 */
export declare const genEllipsis: (dom: React.ReactNode, item: ProColumns<any>, text: string) => {} | null | undefined;
export declare const genCopyable: (dom: React.ReactNode, item: ProColumns<any>, text: string) => {} | null | undefined;
/**
 * 合并用户 props 和 预设的 props
 * @param pagination
 * @param action
 * @param intl
 */
export declare const mergePagination: <T, U>(pagination: TablePaginationConfig | boolean | undefined, action: UseFetchDataAction<RequestData<T>>, intl: IntlType) => TablePaginationConfig | false | undefined;
/**
 * 八卦
 * @param actionRef
 * @param counter
 * @param onCleanSelected
 */
export declare const useActionType: <T, U = any>(action: UseFetchDataAction<RequestData<T>>, ref: React.MutableRefObject<ProCoreActionType | undefined> | ((actionRef: ProCoreActionType) => void) | undefined, counter: ReturnType<CounterType>, onCleanSelected: () => void) => void;
declare type PostDataType<T> = (data: T) => T;
/**
 * 一个转化的 pipeline 列表
 * @param data
 * @param pipeline
 */
export declare const postDataPipeline: <T, U>(data: T, pipeline: (PostDataType<T> | undefined)[]) => T;
export {};
