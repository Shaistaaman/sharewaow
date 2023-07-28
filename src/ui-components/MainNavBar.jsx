/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function MainNavBar(props) {
  const { overrides, ...rest } = props;
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
        {...getOverrideProps(overrides, "Logo40862723")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          width="150px"
          height="53px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Logo40862724")}
        >
          <Text
            fontFamily="Pacifico"
            fontSize="30px"
            fontWeight="400"
            color="rgba(255,143,2,1)"
            lineHeight="52.68000030517578px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="-0.2px"
            left="-0.2px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Share"
            {...getOverrideProps(overrides, "Share")}
          ></Text>
          <Text
            fontFamily="Pacifico"
            fontSize="18px"
            fontWeight="400"
            color="rgba(4,135,255,1)"
            lineHeight="31.608001708984375px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="14.8px"
            left="76.8px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="WAOW"
            {...getOverrideProps(overrides, "WAOW")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Location")}
        >
          <View
            width="12px"
            height="12px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "iconamoon:location-thin")}
          >
            <Icon
              width="7.83px"
              height="7.83px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 7.8330078125,
                height: 7.83349609375,
              }}
              paths={[
                {
                  d: "M0.569626 2.87703L0.354672 2.4256L0.354561 2.42565L0.569626 2.87703ZM6.39963 0.101033L6.61458 0.552469L6.6147 0.552414L6.39963 0.101033ZM7.73213 1.43403L8.18355 1.649L8.18366 1.64878L7.73213 1.43403ZM4.95613 7.26353L5.40751 7.4786L5.40756 7.4785L4.95613 7.26353ZM3.11663 7.18453L2.6484 7.35993L2.64847 7.36013L3.11663 7.18453ZM2.60363 5.81503L3.07185 5.63964L3.07176 5.6394L2.60363 5.81503ZM2.01863 5.23003L2.19426 4.7619L2.19411 4.76184L2.01863 5.23003ZM0.648626 4.71653L0.47294 5.18465L0.47314 5.18473L0.648626 4.71653ZM0.784581 3.32847L6.61458 0.552469L6.18467 -0.350403L0.354672 2.4256L0.784581 3.32847ZM6.6147 0.552414C7.03866 0.350408 7.48339 0.792878 7.28059 1.21928L8.18366 1.64878C8.78986 0.374189 7.46059 -0.958342 6.18456 -0.350348L6.6147 0.552414ZM7.2807 1.21906L4.5047 7.04856L5.40756 7.4785L8.18355 1.649L7.2807 1.21906ZM4.50474 7.04847C4.3149 7.44692 3.7398 7.42225 3.58478 7.00894L2.64847 7.36013C3.11345 8.59981 4.83836 8.67315 5.40751 7.4786L4.50474 7.04847ZM3.58485 7.00914L3.07185 5.63964L2.1354 5.99043L2.6484 7.35993L3.58485 7.00914ZM3.07176 5.6394C2.99657 5.43899 2.87937 5.257 2.72801 5.10565L2.02091 5.81275C2.07136 5.8632 2.11043 5.92387 2.13549 5.99067L3.07176 5.6394ZM2.72801 5.10565C2.57666 4.95429 2.39467 4.83708 2.19426 4.7619L1.84299 5.69817C1.90979 5.72323 1.97046 5.7623 2.02091 5.81275L2.72801 5.10565ZM2.19411 4.76184L0.824113 4.24834L0.47314 5.18473L1.84314 5.69823L2.19411 4.76184ZM0.824312 4.24841C0.410999 4.0933 0.386606 3.51809 0.784692 3.32842L0.354561 2.42565C-0.840354 2.99498 -0.765746 4.71977 0.47294 5.18465L0.824312 4.24841Z",
                  stroke: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                  strokeLinejoin: "round",
                  strokeWidth: 1,
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="17.59%"
              bottom="17.13%"
              left="17.14%"
              right="17.59%"
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </View>
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
            children="Your Current Location"
            {...getOverrideProps(overrides, "Your Current Location")}
          ></Text>
        </Flex>
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
          children="REQUEST ITEM"
          {...getOverrideProps(overrides, "Button40862734")}
        ></Button>
      </Flex>
    </Flex>
  );
}
