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
import { Button, Flex, Image } from "@aws-amplify/ui-react";
export default function MainNavBar(props) {
  const {
    Location = "import { Geo } from 'aws-amplify';  const location = await Geo.getCurrentLocation();  return location.name;",
    overrides,
    ...rest
  } = props;
  const sharewaowlogoOneOnClick = useNavigateAction({
    type: "url",
    url: "https://www.sharewaow.com/",
  });
  const buttonFourZeroEightSixTwoSevenThreeThreeOnClick = useNavigateAction({
    type: "url",
    url: "/Dashboard",
  });
  const buttonFourZeroEightSixTwoSevenThreeFourOnClick = useNavigateAction({
    type: "url",
    url: "/Dashboard",
  });
  return (
    <Flex
      gap="700px"
      direction="row"
      width="1440px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "MainNavBar")}
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
            sharewaowlogoOneOnClick();
          }}
          {...getOverrideProps(overrides, "sharewaowlogo 1")}
        ></Image>
      </Flex>
      <Flex
        gap="30px"
        direction="row"
        width="357px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Navbuttons")}
      >
        <Button
          width="127px"
          height="unset"
          shrink="0"
          alignSelf="stretch"
          size="small"
          isDisabled={false}
          variation="primary"
          children="SHARE ITEM"
          onClick={() => {
            buttonFourZeroEightSixTwoSevenThreeThreeOnClick();
          }}
          {...getOverrideProps(overrides, "Button40862733")}
        ></Button>
        <Button
          width="150px"
          height="unset"
          shrink="0"
          alignSelf="stretch"
          backgroundColor="rgba(250,86,10,1)"
          size="small"
          isDisabled={false}
          variation="primary"
          children="LOGIN"
          onClick={() => {
            buttonFourZeroEightSixTwoSevenThreeFourOnClick();
          }}
          {...getOverrideProps(overrides, "Button40862734")}
        ></Button>
      </Flex>
    </Flex>
  );
}
