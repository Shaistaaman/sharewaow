/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, HeadingProps, SelectFieldProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RidesCreateFormInputValues = {
    title?: string;
    no_of_seats?: number;
    price_per_seat?: number;
    male_seats?: number;
    female_seats?: number;
    date_to_leave?: string;
    time_to_leave?: string;
    ride_from?: string;
    ride_destination?: string;
    expire_ride?: string;
    phone?: string;
};
export declare type RidesCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    no_of_seats?: ValidationFunction<number>;
    price_per_seat?: ValidationFunction<number>;
    male_seats?: ValidationFunction<number>;
    female_seats?: ValidationFunction<number>;
    date_to_leave?: ValidationFunction<string>;
    time_to_leave?: ValidationFunction<string>;
    ride_from?: ValidationFunction<string>;
    ride_destination?: ValidationFunction<string>;
    expire_ride?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RidesCreateFormOverridesProps = {
    RidesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    RowGrid0?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    SectionalElement1?: PrimitiveOverrideProps<TextProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid2?: PrimitiveOverrideProps<GridProps>;
    no_of_seats?: PrimitiveOverrideProps<TextFieldProps>;
    price_per_seat?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid3?: PrimitiveOverrideProps<GridProps>;
    male_seats?: PrimitiveOverrideProps<TextFieldProps>;
    female_seats?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid4?: PrimitiveOverrideProps<GridProps>;
    date_to_leave?: PrimitiveOverrideProps<TextFieldProps>;
    time_to_leave?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid5?: PrimitiveOverrideProps<GridProps>;
    ride_from?: PrimitiveOverrideProps<SelectFieldProps>;
    ride_destination?: PrimitiveOverrideProps<SelectFieldProps>;
    expire_ride?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RidesCreateFormProps = React.PropsWithChildren<{
    overrides?: RidesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RidesCreateFormInputValues) => RidesCreateFormInputValues;
    onSuccess?: (fields: RidesCreateFormInputValues) => void;
    onError?: (fields: RidesCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: RidesCreateFormInputValues) => RidesCreateFormInputValues;
    onValidate?: RidesCreateFormValidationValues;
} & React.CSSProperties>;
export default function RidesCreateForm(props: RidesCreateFormProps): React.ReactElement;
