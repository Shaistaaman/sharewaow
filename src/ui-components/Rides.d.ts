/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RidesOverridesProps = {
    Rides?: PrimitiveOverrideProps<FlexProps>;
    "fxemoji:recreationalvehicle"?: PrimitiveOverrideProps<ViewProps>;
    Vector41042708?: PrimitiveOverrideProps<IconProps>;
    Vector41042709?: PrimitiveOverrideProps<IconProps>;
    Vector41042710?: PrimitiveOverrideProps<IconProps>;
    Vector41042711?: PrimitiveOverrideProps<IconProps>;
    Vector41042712?: PrimitiveOverrideProps<IconProps>;
    Vector41042713?: PrimitiveOverrideProps<IconProps>;
    Vector41042714?: PrimitiveOverrideProps<IconProps>;
    Vector41042715?: PrimitiveOverrideProps<IconProps>;
    Vector41042716?: PrimitiveOverrideProps<IconProps>;
    RIDES?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type RidesProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: RidesOverridesProps | undefined | null;
}>;
export default function Rides(props: RidesProps): React.ReactElement;
