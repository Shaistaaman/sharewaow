/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SharewaowHeroLayoutOverridesProps = {
    SharewaowHeroLayout?: PrimitiveOverrideProps<ViewProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    HeroLayout3?: PrimitiveOverrideProps<FlexProps>;
    "Type Lock Up"?: PrimitiveOverrideProps<FlexProps>;
    "LOREM IPSUM"?: PrimitiveOverrideProps<TextProps>;
    "Body Area"?: PrimitiveOverrideProps<FlexProps>;
    "Ut enim ad minim veniam quis nostrud"?: PrimitiveOverrideProps<TextProps>;
    "Sharewaow is a community-driven platform that connects people who want to share various items, from clothes and books to food and rides, making it easy and accessible to share with others."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SharewaowHeroLayoutProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SharewaowHeroLayoutOverridesProps | undefined | null;
}>;
export default function SharewaowHeroLayout(props: SharewaowHeroLayoutProps): React.ReactElement;
