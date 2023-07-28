/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Clothes, Users } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ClothesUpdateFormInputValues = {
    image?: string;
    condition?: string;
    price?: number;
    UsersClothes?: Users;
    title?: string;
    expire_clothes?: string;
};
export declare type ClothesUpdateFormValidationValues = {
    image?: ValidationFunction<string>;
    condition?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    UsersClothes?: ValidationFunction<Users>;
    title?: ValidationFunction<string>;
    expire_clothes?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClothesUpdateFormOverridesProps = {
    ClothesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    condition?: PrimitiveOverrideProps<SelectFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    UsersClothes?: PrimitiveOverrideProps<AutocompleteProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    expire_clothes?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ClothesUpdateFormProps = React.PropsWithChildren<{
    overrides?: ClothesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    clothes?: Clothes;
    onSubmit?: (fields: ClothesUpdateFormInputValues) => ClothesUpdateFormInputValues;
    onSuccess?: (fields: ClothesUpdateFormInputValues) => void;
    onError?: (fields: ClothesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClothesUpdateFormInputValues) => ClothesUpdateFormInputValues;
    onValidate?: ClothesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ClothesUpdateForm(props: ClothesUpdateFormProps): React.ReactElement;
