/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Rides, Users } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RidesUpdateFormInputValues = {
    image?: string;
    price_per_seat?: number;
    title?: string;
    no_of_seats?: number;
    UsersRides?: Users;
    male_seats?: number;
    female_seats?: number;
    date_to_leave?: string;
    time_to_leave?: string;
    ride_destination?: string;
    ride_from?: string;
    expire_ride?: string;
};
export declare type RidesUpdateFormValidationValues = {
    image?: ValidationFunction<string>;
    price_per_seat?: ValidationFunction<number>;
    title?: ValidationFunction<string>;
    no_of_seats?: ValidationFunction<number>;
    UsersRides?: ValidationFunction<Users>;
    male_seats?: ValidationFunction<number>;
    female_seats?: ValidationFunction<number>;
    date_to_leave?: ValidationFunction<string>;
    time_to_leave?: ValidationFunction<string>;
    ride_destination?: ValidationFunction<string>;
    ride_from?: ValidationFunction<string>;
    expire_ride?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RidesUpdateFormOverridesProps = {
    RidesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    price_per_seat?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    no_of_seats?: PrimitiveOverrideProps<TextFieldProps>;
    UsersRides?: PrimitiveOverrideProps<AutocompleteProps>;
    male_seats?: PrimitiveOverrideProps<TextFieldProps>;
    female_seats?: PrimitiveOverrideProps<TextFieldProps>;
    date_to_leave?: PrimitiveOverrideProps<TextFieldProps>;
    time_to_leave?: PrimitiveOverrideProps<TextFieldProps>;
    ride_destination?: PrimitiveOverrideProps<SelectFieldProps>;
    ride_from?: PrimitiveOverrideProps<SelectFieldProps>;
    expire_ride?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RidesUpdateFormProps = React.PropsWithChildren<{
    overrides?: RidesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    rides?: Rides;
    onSubmit?: (fields: RidesUpdateFormInputValues) => RidesUpdateFormInputValues;
    onSuccess?: (fields: RidesUpdateFormInputValues) => void;
    onError?: (fields: RidesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RidesUpdateFormInputValues) => RidesUpdateFormInputValues;
    onValidate?: RidesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RidesUpdateForm(props: RidesUpdateFormProps): React.ReactElement;
