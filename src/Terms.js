import {
  Category,
  Features,
  MainNavBar,
  FAQItemsharewaow,
  SharewaowHeroLayout,
  SharewaowMarketingFooter,
} from "./ui-components";
function Privacy() {
  return (
    <>
      <MainNavBar width="100%" />
      <div className="container">
        <SharewaowHeroLayout />
        {/* <Category />
         <FAQItemsharewaow /> */}
        <div className="collection">
          <h1>Terms and Conditions</h1>
          <p>
            Welcome to our intercity ride-sharing app. By using this app, you
            agree to the following terms and conditions:
          </p>
          <ol>
            <li>
              <b> Eligibility: </b>
              Users of this app must be at least 18 years old and legally
              capable of entering into a binding agreement.
            </li>
            <li>
              <b>User Accounts: </b>
              Users are responsible for maintaining the confidentiality of their
              account information and passwords. Any activities conducted under
              their account are their sole responsibility.
            </li>
            <li>
              <b>Sharing and Requesting Rides:</b>
              Users can share and request rides based on mutual understanding.
              The app acts as a platform for facilitating interactions, and any
              agreements made between users are their responsibility.
            </li>
            <li>
              <b>User Conduct:</b>
              Users must conduct themselves with respect and adhere to all
              applicable laws and regulations while using the app.
            </li>
            <li>
              <b>Liability: </b>
              The app and its developers are not liable for any loss, damage, or
              injury arising from the use of the app or any ride-sharing
              activities.
            </li>
            <li>
              <b>Content: </b>
              Users are responsible for the content they share on the app,
              ensuring it does not violate any third-party rights or contain
              harmful material.
            </li>
            <li>
              <b>Privacy:</b>
              The app collects and processes user data in accordance with our
              Privacy Policy, which users should review.
            </li>
            <li>
              <b>Modifications:</b>
              The app may update or modify the terms and conditions at any time,
              and users will be notified of significant changes.
            </li>
            <li>
              <b>Termination: </b>
              The app reserves the right to terminate or suspend user accounts
              for violations of these terms and conditions or any other reason.
            </li>
            <li>
              <b>Feedback:</b>
              Users may provide feedback or suggestions, which the app may use
              without any obligation.
            </li>
            <li>
              <b>Intellectual Property: </b>
              The app and its contents are protected by intellectual property
              rights and should not be copied or reproduced without permission.
            </li>
            <li>
              <b>Indemnification: </b>
              Users agree to indemnify and hold the app and its developers
              harmless from any claims or liabilities arising from their use of
              the app.
            </li>
          </ol>
          <p>
            By using the app, you acknowledge that you have read, understood,
            and agreed to these terms and conditions.
          </p>
        </div>
        <Features />
        <SharewaowMarketingFooter />
      </div>
    </>
  );
}

export default Privacy;
