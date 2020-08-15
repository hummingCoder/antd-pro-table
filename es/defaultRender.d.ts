import React from 'react';
import { ProFieldValueType, ProFieldValueObjectType } from '@ant-design/pro-field';
/**
 * value type by function
 */
export declare type ProColumnsValueTypeFunction<T> = (item: T) => ProFieldValueType | ProFieldValueObjectType;
/**
 * 根据不同的类型来转化数值
 * @param text
 * @param valueType
 */
declare const defaultRenderText: <T, U = any>(text: string | number | React.ReactText[], valueType: "index" | "code" | "option" | "progress" | "textarea" | "time" | "text" | "money" | "date" | "dateRange" | "dateTimeRange" | "dateTime" | "indexBorder" | "percent" | "digit" | "avatar" | "jsonCode" | ProColumnsValueTypeFunction<T>, index: number, item?: T | undefined, columnEmptyText?: string | false | undefined, props?: import("@ant-design/pro-utils").ProSchema<T, "index" | "code" | "option" | "progress" | "textarea" | "time" | "text" | "money" | "date" | "dateRange" | "dateTimeRange" | "dateTime" | "indexBorder" | "percent" | "digit" | "avatar" | "jsonCode" | ProColumnsValueTypeFunction<T>, Pick<import("antd/lib/table").ColumnType<T>, "sorter" | "sortOrder" | "defaultSortOrder" | "sortDirections" | "showSorterTooltip" | "filtered" | "filterDropdown" | "filterMultiple" | "filteredValue" | "defaultFilteredValue" | "filterIcon" | "onFilter" | "filterDropdownVisible" | "onFilterDropdownVisibleChange" | "responsive" | "colSpan" | "dataIndex" | "shouldCellUpdate" | "rowSpan" | "width" | "onCell" | "onCellClick" | "key" | "className" | "fixed" | "onHeaderCell" | "ellipsis" | "align"> & Partial<Pick<import("antd/lib/form").FormItemProps, "id" | "label" | "style" | "help" | "className" | "name" | "dependencies" | "getValueFromEvent" | "normalize" | "rules" | "shouldUpdate" | "trigger" | "validateTrigger" | "validateFirst" | "valuePropName" | "getValueProps" | "messageVariables" | "initialValue" | "onReset" | "preserve" | "isListField" | "prefixCls" | "noStyle" | "hasFeedback" | "validateStatus" | "required" | "hidden" | "fieldKey" | "colon" | "htmlFor" | "labelAlign" | "labelCol" | "wrapperCol" | "extra">> & {
    index?: number | undefined;
    initialValue?: any;
    ellipsis?: boolean | undefined;
    copyable?: boolean | undefined;
    hideInSearch?: boolean | undefined;
    hideInTable?: boolean | undefined;
    hideInForm?: boolean | undefined;
    filters?: boolean | import("antd/lib/table/interface").ColumnFilterItem[] | undefined;
    order?: number | undefined;
}> | undefined) => React.ReactNode;
export default defaultRenderText;
