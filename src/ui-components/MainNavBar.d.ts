/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MainNavBarOverridesProps = {
    MainNavBar?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<FlexProps>;
    "sharewaowlogo 1"?: PrimitiveOverrideProps<ImageProps>;
    Location?: PrimitiveOverrideProps<FlexProps>;
    "iconamoon:location-thin"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Your Current Location"?: PrimitiveOverrideProps<TextProps>;
    Navbuttons?: PrimitiveOverrideProps<FlexProps>;
    Button40862733?: PrimitiveOverrideProps<ButtonProps>;
    Button40862734?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type MainNavBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    Location?: String;
} & {
    overrides?: MainNavBarOverridesProps | undefined | null;
}>;
export default function MainNavBar(props: MainNavBarProps): React.ReactElement;
