/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function SharewaowHeroLayout(props) {
  const { overrides, ...rest } = props;
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
      {...getOverrideProps(overrides, "SharewaowHeroLayout")}
      {...rest}
    >
      <Image
        width="100%"
        height="100%"
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
        objectFit="cover"
        src="https://sharewaow-storage-50c661a5182537-staging.s3.amazonaws.com/public/banner.jpg"
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="10px"
        direction="column"
        width="1440px"
        height="400px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="160px 240px 160px 240px"
        backgroundColor="rgba(0,0,0,0.25)"
        {...getOverrideProps(overrides, "HeroLayout3")}
      >
        <Flex
          gap="50px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Type Lock Up")}
        >
          <Text
            fontFamily="Inter"
            fontSize="50px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="SHAREWAOW"
            {...getOverrideProps(overrides, "LOREM IPSUM")}
          ></Text>
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Body Area")}
          >
            <Text
              fontFamily="Inter"
              fontSize="30px"
              fontWeight="600"
              color="rgba(255,255,255,1)"
              lineHeight="30px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Community Sharing Made Easy"
              {...getOverrideProps(
                overrides,
                "Ut enim ad minim veniam quis nostrud"
              )}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="24px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.05px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Sharewaow is a community-driven platform that connects people who want to share various items, from clothes and books to food and rides, making it easy and accessible to share with others."
              {...getOverrideProps(
                overrides,
                "Sharewaow is a community-driven platform that connects people who want to share various items, from clothes and books to food and rides, making it easy and accessible to share with others."
              )}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
    </View>
  );
}
