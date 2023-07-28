/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ItemsSummaryCardProps } from "./ItemsSummaryCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RideCollectionOverridesProps = {
    RideCollection?: PrimitiveOverrideProps<CollectionProps>;
    ItemsSummaryCard?: ItemsSummaryCardProps;
} & EscapeHatchProps;
export declare type RideCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => ItemsSummaryCardProps;
} & {
    overrides?: RideCollectionOverridesProps | undefined | null;
}>;
export default function RideCollection(props: RideCollectionProps): React.ReactElement;
