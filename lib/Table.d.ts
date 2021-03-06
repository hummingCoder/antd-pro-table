import './index.less';
import React, { CSSProperties } from 'react';
import { IntlType, ParamsType } from '@ant-design/pro-provider';
import { TableProps, ColumnType } from 'antd/lib/table';
import { FormItemProps, FormProps } from 'antd/lib/form';
import { SortOrder, ColumnFilterItem } from 'antd/lib/table/interface';
import { ProFieldEmptyText, ProFieldValueType } from '@ant-design/pro-field';
import { ProSchema, ProSchemaComponentTypes, ProCoreActionType } from '@ant-design/pro-utils';
import { RequestData } from './useFetchData';
import { ColumnsState } from './container';
import { OptionConfig, ToolBarProps } from './component/ToolBar';
import { SearchConfig, TableFormItem } from './Form';
import { ProColumnsValueTypeFunction } from './defaultRender';
import { DensitySize } from './component/ToolBar/DensityIcon';
export declare type ExtraProColumnType<T> = Omit<ColumnType<T>, 'render' | 'children' | 'title' | 'filters'> & Partial<Omit<FormItemProps, 'children'>>;
export declare type ProColumnType<T = unknown> = ProSchema<T, ProFieldValueType | ProColumnsValueTypeFunction<T>, ExtraProColumnType<T> & {
    index?: number;
    /**
     * 搜索表单的默认值
     */
    initialValue?: any;
    /**
     * 是否缩略
     */
    ellipsis?: boolean;
    /**
     * 是否拷贝
     */
    copyable?: boolean;
    /**
     * 在查询表单中隐藏
     */
    hideInSearch?: boolean;
    /**
     * 在 table 中隐藏
     */
    hideInTable?: boolean;
    /**
     * 在新建表单中删除
     */
    hideInForm?: boolean;
    /**
     * 表头的筛选菜单项
     */
    filters?: boolean | ColumnFilterItem[];
    /**
     * form 的排序
     */
    order?: number;
}>;
export interface ProColumnGroupType<RecordType> extends ProColumnType<RecordType> {
    children: ProColumns<RecordType>;
}
export declare type ProColumns<T = {}> = ProColumnGroupType<T> | ProColumnType<T>;
export interface ProTableProps<T, U extends ParamsType> extends Omit<TableProps<T>, 'columns' | 'rowSelection'> {
    columns?: ProColumns<T>[];
    params?: U;
    columnsStateMap?: {
        [key: string]: ColumnsState;
    };
    onColumnsStateChange?: (map: {
        [key: string]: ColumnsState;
    }) => void;
    onSizeChange?: (size: DensitySize) => void;
    /**
     * 渲染 table
     */
    tableRender?: (props: ProTableProps<T, U>, defaultDom: JSX.Element, 
    /**
     * 各个区域的 dom
     */
    domList: {
        toolbar: JSX.Element | undefined;
        alert: JSX.Element | undefined;
        table: JSX.Element | undefined;
    }) => React.ReactNode;
    tableExtraRender?: (props: ProTableProps<T, U>, dataSource: T[]) => React.ReactNode;
    /**
     * 一个获得 dataSource 的方法
     */
    request?: (params: U & {
        pageSize?: number;
        current?: number;
    }, sort: {
        [key: string]: SortOrder;
    }, filter: {
        [key: string]: React.ReactText[];
    }) => Promise<RequestData<T>>;
    /**
     * 对数据进行一些处理
     */
    postData?: (data: any[]) => any[];
    /**
     * 默认的数据
     */
    defaultData?: T[];
    /**
     * 初始化的参数，可以操作 table
     */
    actionRef?: React.MutableRefObject<ProCoreActionType | undefined> | ((actionRef: ProCoreActionType) => void);
    /**
     * 操作自带的 form
     */
    formRef?: TableFormItem<T>['formRef'];
    /**
     * 渲染操作栏
     */
    toolBarRender?: ToolBarProps<T>['toolBarRender'] | false;
    /**
     * 数据加载完成后触发
     */
    onLoad?: (dataSource: T[]) => void;
    /**
     * 数据加载失败时触发
     */
    onRequestError?: (e: Error) => void;
    /**
     * 给封装的 table 的 className
     */
    tableClassName?: string;
    /**
     * 给封装的 table 的 style
     */
    tableStyle?: CSSProperties;
    /**
     * 左上角的 title
     */
    headerTitle?: React.ReactNode;
    /**
     * 默认的操作栏配置
     */
    options?: OptionConfig<T> | false;
    /**
     * 是否显示搜索表单
     */
    search?: boolean | SearchConfig;
    /**
     * type="form" 和 搜索表单 的 Form 配置
     * 基本配置与 antd Form 相同
     *  但是劫持了 form 的配置
     */
    form?: Omit<FormProps, 'form'>;
    /**
     * 如何格式化日期
     * 暂时只支持 moment
     * string 会格式化为 YYYY-DD-MM
     * number 代表时间戳
     */
    dateFormatter?: 'string' | 'number' | false;
    /**
     * 格式化搜索表单提交数据
     */
    beforeSearchSubmit?: (params: Partial<U>) => Partial<U>;
    /**
     * 自定义 table 的 alert
     * 设置或者返回false 即可关闭
     */
    tableAlertRender?: ((props: {
        intl: IntlType;
        selectedRowKeys: (string | number)[];
        selectedRows: T[];
    }) => React.ReactNode) | false;
    /**
     * 自定义 table 的 alert 的操作
     * 设置或者返回false 即可关闭
     */
    tableAlertOptionRender?: ((props: {
        intl: IntlType;
        onCleanSelected: () => void;
    }) => React.ReactNode) | false;
    rowSelection?: TableProps<T>['rowSelection'] | false;
    style?: React.CSSProperties;
    /**
     * 支持 ProTable 的类型
     */
    type?: ProSchemaComponentTypes;
    /**
     * 提交表单时触发
     */
    onSubmit?: (params: U) => void;
    /**
     * 重置表单时触发
     */
    onReset?: () => void;
    /**
     * 空值时显示
     */
    columnEmptyText?: ProFieldEmptyText;
    /**
     * 是否手动触发请求
     */
    manualRequest?: boolean;
}
/**
 * 🏆 Use Ant Design Table like a Pro!
 * 更快 更好 更方便
 * @param props
 */
declare const ProviderWarp: <T, U extends {
    [key: string]: any;
} = {}>(props: ProTableProps<T, U>) => JSX.Element;
export default ProviderWarp;
