/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LogedinNavBarOverridesProps = {
    LogedinNavBar?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<FlexProps>;
    "sharewaowlogo 2"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 321"?: PrimitiveOverrideProps<FlexProps>;
    UserName?: PrimitiveOverrideProps<TextProps>;
    Button412815?: PrimitiveOverrideProps<ButtonProps>;
    Button4112333?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type LogedinNavBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: LogedinNavBarOverridesProps | undefined | null;
}>;
export default function LogedinNavBar(props: LogedinNavBarProps): React.ReactElement;
