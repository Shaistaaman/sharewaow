import React, {useEffect, useState} from "react";
import {
  Category,
  Features,
  MainNavBar,
  RideCollection,
  SharewaowHeroLayout,
  SharewaowMarketingFooter,
} from "./ui-components";

function LandingPage() {
  return (
    <>
      {/* <Authenticator> */}
      <MainNavBar width="100%" />
      <div className="container">
        <SharewaowHeroLayout />
        <Category />
        <div className="ridecollection">
          <RideCollection />
        </div>
        <Features />
        <SharewaowMarketingFooter />
      </div>
      {/* </Authenticator> */}
    </>
  );
}

export default LandingPage;
