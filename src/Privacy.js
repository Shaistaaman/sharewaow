import {
  Category,
  Features,
  MainNavBar,
  FAQCollection,
  SharewaowHeroLayout,
  SharewaowMarketingFooter,
} from "./ui-components";
function Privacy() {
  return (
    <>
      <MainNavBar width="100%" />
      <div className="container">
        <SharewaowHeroLayout />
        <Category />
        <div className="collection">
          <FAQCollection />
        </div>
        <Features />
        <SharewaowMarketingFooter />
      </div>
    </>
  );
}

export default Privacy;
