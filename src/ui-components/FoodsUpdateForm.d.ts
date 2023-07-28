/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Foods, Users } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FoodsUpdateFormInputValues = {
    image?: string;
    condition?: string;
    price?: number;
    title?: string;
    UsersFoods?: Users;
    expire_foods?: string;
};
export declare type FoodsUpdateFormValidationValues = {
    image?: ValidationFunction<string>;
    condition?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    title?: ValidationFunction<string>;
    UsersFoods?: ValidationFunction<Users>;
    expire_foods?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FoodsUpdateFormOverridesProps = {
    FoodsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    condition?: PrimitiveOverrideProps<SelectFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    UsersFoods?: PrimitiveOverrideProps<AutocompleteProps>;
    expire_foods?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FoodsUpdateFormProps = React.PropsWithChildren<{
    overrides?: FoodsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    foods?: Foods;
    onSubmit?: (fields: FoodsUpdateFormInputValues) => FoodsUpdateFormInputValues;
    onSuccess?: (fields: FoodsUpdateFormInputValues) => void;
    onError?: (fields: FoodsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FoodsUpdateFormInputValues) => FoodsUpdateFormInputValues;
    onValidate?: FoodsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FoodsUpdateForm(props: FoodsUpdateFormProps): React.ReactElement;
