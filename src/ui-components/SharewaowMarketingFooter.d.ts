/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SharewaowMarketingFooterOverridesProps = {
    SharewaowMarketingFooter?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 738"?: PrimitiveOverrideProps<ViewProps>;
    "Free Community sharing in Pakistan"?: PrimitiveOverrideProps<TextProps>;
    "Frame 405"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 403"?: PrimitiveOverrideProps<FlexProps>;
    About?: PrimitiveOverrideProps<TextProps>;
    Rides?: PrimitiveOverrideProps<TextProps>;
    Foods?: PrimitiveOverrideProps<TextProps>;
    Clothes?: PrimitiveOverrideProps<TextProps>;
    Books?: PrimitiveOverrideProps<TextProps>;
    "Frame 404"?: PrimitiveOverrideProps<FlexProps>;
    "help@sharewaow.com"?: PrimitiveOverrideProps<TextProps>;
    "Privacy Policy"?: PrimitiveOverrideProps<TextProps>;
    "Terms of Use"?: PrimitiveOverrideProps<TextProps>;
    "\u00A9 Copyright Sharewaow. All Rights Reserved"?: PrimitiveOverrideProps<TextProps>;
    "Frame 313"?: PrimitiveOverrideProps<FlexProps>;
    "sharewaowlogo 3"?: PrimitiveOverrideProps<ImageProps>;
    "Community Sharing Made Easy"?: PrimitiveOverrideProps<TextProps>;
    "Sharewaow is a community-driven platform that connects people who want to share various items, from food and books to clothes and rides, making it easy and accessible to share with others."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SharewaowMarketingFooterProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SharewaowMarketingFooterOverridesProps | undefined | null;
}>;
export default function SharewaowMarketingFooter(props: SharewaowMarketingFooterProps): React.ReactElement;
