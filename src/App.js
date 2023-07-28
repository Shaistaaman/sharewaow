import {Books, Clothes, Features, Foods, MainNavBar, RideCollection, Rides, SharewaowHeroLayout, SharewaowMarketingFooter} from "./ui-components"

function App () {
  return (
    <>
      <MainNavBar width="100%"/>
      <div className="container">
      <SharewaowHeroLayout  />
      <div className="row">
      <div className="col"><Rides /></div>
      <div className="col"><Foods /></div>      
      <div className="col"><Clothes /></div> 
      <div className="col"><Books /></div> 
      </div>
      <RideCollection />
      <Features />
      <SharewaowMarketingFooter  />
      </div>
    </>
  );
}

export default (App);
