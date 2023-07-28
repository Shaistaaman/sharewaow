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
export declare type ClothesCreateFormInputValues = {
    image?: string;
    condition?: string;
    price?: number;
    UsersClothes?: Users;
    title?: string;
    expire_clothes?: string;
};
export declare type ClothesCreateFormValidationValues = {
    image?: ValidationFunction<string>;
    condition?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    UsersClothes?: ValidationFunction<Users>;
    title?: ValidationFunction<string>;
    expire_clothes?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClothesCreateFormOverridesProps = {
    ClothesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    condition?: PrimitiveOverrideProps<SelectFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    UsersClothes?: PrimitiveOverrideProps<AutocompleteProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    expire_clothes?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ClothesCreateFormProps = React.PropsWithChildren<{
    overrides?: ClothesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ClothesCreateFormInputValues) => ClothesCreateFormInputValues;
    onSuccess?: (fields: ClothesCreateFormInputValues) => void;
    onError?: (fields: ClothesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClothesCreateFormInputValues) => ClothesCreateFormInputValues;
    onValidate?: ClothesCreateFormValidationValues;
} & React.CSSProperties>;
export default function ClothesCreateForm(props: ClothesCreateFormProps): React.ReactElement;
