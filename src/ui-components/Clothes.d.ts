/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClothesOverridesProps = {
    Clothes?: PrimitiveOverrideProps<FlexProps>;
    "noto:dress"?: PrimitiveOverrideProps<ViewProps>;
    Vector40673019?: PrimitiveOverrideProps<IconProps>;
    Vector40673020?: PrimitiveOverrideProps<IconProps>;
    Vector40673021?: PrimitiveOverrideProps<IconProps>;
    Vector40673022?: PrimitiveOverrideProps<IconProps>;
    Vector40673023?: PrimitiveOverrideProps<IconProps>;
    Vector40673024?: PrimitiveOverrideProps<IconProps>;
    CLOTHES?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ClothesProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ClothesOverridesProps | undefined | null;
}>;
export default function Clothes(props: ClothesProps): React.ReactElement;
