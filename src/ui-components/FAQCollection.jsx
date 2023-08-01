/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { FAQ } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import FAQItemsharewaow from "./FAQItemsharewaow";
import { Collection } from "@aws-amplify/ui-react";
export default function FAQCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: FAQ,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      isSearchable={true}
      isPaginated={true}
      searchPlaceholder="Search Here..."
      itemsPerPage={5}
      direction="column"
      justifyContent="left"
      items={items || []}
      {...getOverrideProps(overrides, "FAQCollection")}
      {...rest}
    >
      {(item, index) => (
        <FAQItemsharewaow
          Faq={item}
          margin="10px 10px 10px 10px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></FAQItemsharewaow>
      )}
    </Collection>
  );
}
