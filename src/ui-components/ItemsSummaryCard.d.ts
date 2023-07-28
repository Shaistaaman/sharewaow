/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Rides } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ItemsSummaryCardOverridesProps = {
    ItemsSummaryCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group"?: PrimitiveOverrideProps<ViewProps>;
    "Rs. 99"?: PrimitiveOverrideProps<TextProps>;
    "Title of the Item Title of the Item"?: PrimitiveOverrideProps<TextProps>;
    CreateAt?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ItemsSummaryCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    rides?: Rides;
} & {
    overrides?: ItemsSummaryCardOverridesProps | undefined | null;
}>;
export default function ItemsSummaryCard(props: ItemsSummaryCardProps): React.ReactElement;
