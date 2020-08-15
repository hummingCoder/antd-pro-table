import React from 'react';
import { FormInstance } from 'antd/lib/form';
import { ProSchemaComponentTypes } from '@ant-design/pro-utils';
import { SearchConfig } from './index';
export interface FormOptionProps {
    searchConfig: SearchConfig;
    type?: ProSchemaComponentTypes;
    form: FormInstance;
    submit: () => void;
    collapse: boolean;
    setCollapse: (collapse: boolean) => void;
    showCollapseButton: boolean;
    onReset?: () => void;
}
/**
 * FormFooter 的组件，可以自动进行一些配置
 * @param props
 */
declare const FormOption: React.FC<FormOptionProps>;
export default FormOption;
