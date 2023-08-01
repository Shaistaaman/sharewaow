/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FAQItemsharewaowProps } from "./FAQItemsharewaow";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FAQCollectionOverridesProps = {
    FAQCollection?: PrimitiveOverrideProps<CollectionProps>;
    FAQItemsharewaow?: FAQItemsharewaowProps;
} & EscapeHatchProps;
export declare type FAQCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => FAQItemsharewaowProps;
} & {
    overrides?: FAQCollectionOverridesProps | undefined | null;
}>;
export default function FAQCollection(props: FAQCollectionProps): React.ReactElement;
