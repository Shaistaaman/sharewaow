/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Rides } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ItemsCardPhoneOverridesProps = {
    ItemsCardPhone?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group"?: PrimitiveOverrideProps<ViewProps>;
    "Rs. 99"?: PrimitiveOverrideProps<TextProps>;
    "Title of the Item Title of the Item"?: PrimitiveOverrideProps<TextProps>;
    CreateAt?: PrimitiveOverrideProps<TextProps>;
    "Contact for Ride:"?: PrimitiveOverrideProps<TextProps>;
    "Frame 28"?: PrimitiveOverrideProps<FlexProps>;
    EditButton?: PrimitiveOverrideProps<ViewProps>;
    Vector4146693?: PrimitiveOverrideProps<IconProps>;
    MyIcon?: PrimitiveOverrideProps<ViewProps>;
    Vector4146695?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type ItemsCardPhoneProps = React.PropsWithChildren<Partial<FlexProps> & {
    phoneride?: Rides;
} & {
    overrides?: ItemsCardPhoneOverridesProps | undefined | null;
}>;
export default function ItemsCardPhone(props: ItemsCardPhoneProps): React.ReactElement;
