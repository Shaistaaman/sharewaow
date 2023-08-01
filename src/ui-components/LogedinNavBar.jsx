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
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function LogedinNavBar(props) {
  const { overrides, ...rest } = props;
  const sharewaowlogoTwoOnClick = useNavigateAction({
    type: "url",
    url: "https://www.sharewaow.com/",
  });
  const buttonFourOneOneTwoThreeThreeThreeOnClick = useNavigateAction({
    type: "url",
    url: "https://www.sharewaow.com/",
  });
  return (
    <Flex
      gap="600px"
      direction="row"
      width="1440px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "LogedinNavBar")}
      {...rest}
    >
      <Flex
        gap="50px"
        direction="row"
        width="198px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Logo")}
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
          onClick={() => {
            sharewaowlogoTwoOnClick();
          }}
          {...getOverrideProps(overrides, "sharewaowlogo 2")}
        ></Image>
      </Flex>
      <Flex
        gap="27px"
        direction="row"
        width="446px"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 321")}
      >
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="UserName"
          {...getOverrideProps(overrides, "UserName")}
        ></Text>
        <Button
          width="127px"
          height="unset"
          shrink="0"
          alignSelf="stretch"
          size="small"
          isDisabled={false}
          variation="primary"
          children="Share Ride"
          {...getOverrideProps(overrides, "Button412815")}
        ></Button>
        <Button
          width="127px"
          height="unset"
          shrink="0"
          alignSelf="stretch"
          backgroundColor="rgba(250,86,10,1)"
          size="small"
          isDisabled={false}
          variation="primary"
          children="Sign Out"
          onClick={() => {
            buttonFourOneOneTwoThreeThreeThreeOnClick();
          }}
          {...getOverrideProps(overrides, "Button4112333")}
        ></Button>
      </Flex>
    </Flex>
  );
}
