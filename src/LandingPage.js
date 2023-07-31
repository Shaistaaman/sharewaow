import {
  Category,
  Features,
  MainNavBar,
  RideCollection,
  SharewaowHeroLayout,
  SharewaowMarketingFooter,
} from "./ui-components";
// import {Authenticator} from "@aws-amplify/ui-react";

function LandingPage() {
  return (
    <>
      {/* <Authenticator> */}
      <MainNavBar width="100%" />
      <div className="container">
        <SharewaowHeroLayout />
        <Category />
        <RideCollection />
        <Features />
        <SharewaowMarketingFooter />
      </div>
      {/* </Authenticator> */}
    </>
  );
}

export default LandingPage;
