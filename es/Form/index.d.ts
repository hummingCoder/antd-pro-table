import React from 'react';
import { FormInstance, FormItemProps, FormProps } from 'antd/lib/form';
import { IntlType } from '@ant-design/pro-provider';
import { ProSchemaComponentTypes } from '@ant-design/pro-utils';
import { ProColumns } from '../index';
import { FormOptionProps } from './FormOption';
import './index.less';
/**
 * 默认的查询表单配置
 */
declare const defaultColConfig: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
};
/**
 * 用于配置操作栏
 */
export interface SearchConfig {
    /**
     * 查询按钮的文本
     */
    searchText?: string;
    /**
     * 重置按钮的文本
     */
    resetText?: string;
    /**
     * 配置列数
     */
    span?: number | typeof defaultColConfig;
    /**
     * 收起按钮的 render
     */
    collapseRender?: (collapsed: boolean, 
    /**
     * 是否应该展示，有两种情况
     * 列只有三列，不需要收起
     * form 模式 不需要收起
     */
    showCollapseButton?: boolean) => React.ReactNode;
    /**
     * 底部操作栏的 render
     * searchConfig 基础的配置
     * props 更加详细的配置
     * {
        type?: 'form' | 'list' | 'table' | 'cardList' | undefined;
        form: FormInstance;
        submit: () => void;
        collapse: boolean;
        setCollapse: (collapse: boolean) => void;
        showCollapseButton: boolean;
     * }
     */
    optionRender?: ((searchConfig: Omit<SearchConfig, 'optionRender'>, props: Omit<FormOptionProps, 'searchConfig'>) => React.ReactNode) | false;
    /**
     * 是否收起
     */
    collapsed?: boolean;
    /**
     * 收起按钮的事件
     */
    onCollapse?: (collapsed: boolean) => void;
    /**
     * 提交按钮的文本
     */
    submitText?: string;
}
export interface TableFormItem<T> extends Omit<FormItemProps, 'children'> {
    onSubmit?: (value: T) => void;
    onReset?: () => void;
    form?: Omit<FormProps, 'form'>;
    type?: ProSchemaComponentTypes;
    dateFormatter?: 'string' | 'number' | false;
    search?: boolean | SearchConfig;
    formRef?: React.MutableRefObject<FormInstance | undefined> | ((actionRef: FormInstance) => void);
}
export declare const FormInputRender: React.FC<{
    item: ProColumns<any>;
    value?: any;
    form?: FormInstance;
    type: ProSchemaComponentTypes;
    intl: IntlType;
    onChange?: (value: any) => void;
    onSelect?: (value: any) => void;
}>;
export declare const proFormItemRender: (props: {
    item: ProColumns<any>;
    isForm: boolean;
    type: ProSchemaComponentTypes;
    intl: IntlType;
    formInstance?: FormInstance;
    colConfig: {
        lg: number;
        md: number;
        xxl: number;
        xl: number;
        sm: number;
        xs: number;
    } | {
        span: number;
    } | undefined;
}) => null | JSX.Element;
declare const FormSearch: <T, U = any>({ onSubmit, formRef, dateFormatter, search: propsSearch, type, form: formConfig, onReset, }: TableFormItem<T>) => JSX.Element;
export default FormSearch;
