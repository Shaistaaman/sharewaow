/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function SharewaowMarketingFooter(props) {
  const { overrides, ...rest } = props;
  const aboutOnClick = useNavigateAction({ type: "url", url: "/about" });
  const ridesOnClick = useNavigateAction({ type: "url", url: "/rides" });
  const foodsOnClick = useNavigateAction({ type: "url", url: "/foods" });
  const clothesOnClick = useNavigateAction({ type: "url", url: "/clothes" });
  const booksOnClick = useNavigateAction({ type: "url", url: "/books" });
  const privacyPolicyOnClick = useNavigateAction({
    type: "url",
    url: "/privacy",
  });
  const termsofUseOnClick = useNavigateAction({ type: "url", url: "/terms" });
  return (
    <View
      width="1440px"
      height="400px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "SharewaowMarketingFooter")}
      {...rest}
    >
      <View
        width="1440px"
        height="400px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 738")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(253,153,3,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        bottom="40px"
        left="40px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Free Community sharing in Pakistan"
        {...getOverrideProps(overrides, "Free Community sharing in Pakistan")}
      ></Text>
      <Flex
        gap="24px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="40px"
        right="140px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 405")}
      >
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 403")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(5,134,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            textDecoration="underline"
            letterSpacing="0.01px"
            width="272px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="About"
            onClick={() => {
              aboutOnClick();
            }}
            {...getOverrideProps(overrides, "About")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(5,134,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            textDecoration="underline"
            letterSpacing="0.01px"
            width="272px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Rides"
            onClick={() => {
              ridesOnClick();
            }}
            {...getOverrideProps(overrides, "Rides")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(5,134,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            textDecoration="underline"
            letterSpacing="0.01px"
            width="272px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Foods"
            onClick={() => {
              foodsOnClick();
            }}
            {...getOverrideProps(overrides, "Foods")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(5,134,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            textDecoration="underline"
            letterSpacing="0.01px"
            width="272px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Clothes"
            onClick={() => {
              clothesOnClick();
            }}
            {...getOverrideProps(overrides, "Clothes")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(5,134,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            textDecoration="underline"
            letterSpacing="0.01px"
            width="272px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Books"
            onClick={() => {
              booksOnClick();
            }}
            {...getOverrideProps(overrides, "Books")}
          ></Text>
        </Flex>
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 404")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(5,134,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="272px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="help@sharewaow.com"
            {...getOverrideProps(overrides, "help@sharewaow.com")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(5,134,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            textDecoration="underline"
            letterSpacing="0.01px"
            width="272px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Privacy Policy"
            onClick={() => {
              privacyPolicyOnClick();
            }}
            {...getOverrideProps(overrides, "Privacy Policy")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(5,134,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            textDecoration="underline"
            letterSpacing="0.01px"
            width="272px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Terms of Use "
            onClick={() => {
              termsofUseOnClick();
            }}
            {...getOverrideProps(overrides, "Terms of Use")}
          ></Text>
        </Flex>
      </Flex>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(253,153,3,1)"
        lineHeight="24px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        bottom="40px"
        right="40px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="© Copyright Sharewaow. All Rights Reserved"
        {...getOverrideProps(
          overrides,
          "\u00A9 Copyright Sharewaow. All Rights Reserved"
        )}
      ></Text>
      <Flex
        gap="16px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="40px"
        left="40px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 313")}
      >
        <Image
          width="149px"
          height="53px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://sharewaow-storage-50c661a5182537-staging.s3.amazonaws.com/public/sharewaowlogo.png"
          {...getOverrideProps(overrides, "sharewaowlogo 3")}
        ></Image>
        <Text
          fontFamily="Inter"
          fontSize="30px"
          fontWeight="600"
          color="rgba(255,143,2,1)"
          lineHeight="30px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="471px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Community Sharing Made Easy"
          {...getOverrideProps(overrides, "Community Sharing Made Easy")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="471px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Sharewaow is a community-driven platform that connects people who want to share various items, from food and books to clothes and rides, making it easy and accessible to share with others."
          {...getOverrideProps(
            overrides,
            "Sharewaow is a community-driven platform that connects people who want to share various items, from food and books to clothes and rides, making it easy and accessible to share with others."
          )}
        ></Text>
      </Flex>
    </View>
  );
}
