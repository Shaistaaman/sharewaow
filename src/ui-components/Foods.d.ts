/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FoodsOverridesProps = {
    Foods?: PrimitiveOverrideProps<FlexProps>;
    "fxemoji:potoffood"?: PrimitiveOverrideProps<ViewProps>;
    Vector40673009?: PrimitiveOverrideProps<IconProps>;
    Vector40673010?: PrimitiveOverrideProps<IconProps>;
    Vector40673011?: PrimitiveOverrideProps<IconProps>;
    Vector40673012?: PrimitiveOverrideProps<IconProps>;
    Vector40673013?: PrimitiveOverrideProps<IconProps>;
    Vector40673014?: PrimitiveOverrideProps<IconProps>;
    Vector40673015?: PrimitiveOverrideProps<IconProps>;
    Vector40673016?: PrimitiveOverrideProps<IconProps>;
    Vector40673017?: PrimitiveOverrideProps<IconProps>;
    FOODS?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FoodsProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FoodsOverridesProps | undefined | null;
}>;
export default function Foods(props: FoodsProps): React.ReactElement;
