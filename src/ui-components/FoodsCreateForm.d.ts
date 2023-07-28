/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Users } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FoodsCreateFormInputValues = {
    image?: string;
    condition?: string;
    price?: number;
    title?: string;
    UsersFoods?: Users;
    expire_foods?: string;
};
export declare type FoodsCreateFormValidationValues = {
    image?: ValidationFunction<string>;
    condition?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    title?: ValidationFunction<string>;
    UsersFoods?: ValidationFunction<Users>;
    expire_foods?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FoodsCreateFormOverridesProps = {
    FoodsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    condition?: PrimitiveOverrideProps<SelectFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    UsersFoods?: PrimitiveOverrideProps<AutocompleteProps>;
    expire_foods?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FoodsCreateFormProps = React.PropsWithChildren<{
    overrides?: FoodsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FoodsCreateFormInputValues) => FoodsCreateFormInputValues;
    onSuccess?: (fields: FoodsCreateFormInputValues) => void;
    onError?: (fields: FoodsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FoodsCreateFormInputValues) => FoodsCreateFormInputValues;
    onValidate?: FoodsCreateFormValidationValues;
} & React.CSSProperties>;
export default function FoodsCreateForm(props: FoodsCreateFormProps): React.ReactElement;
