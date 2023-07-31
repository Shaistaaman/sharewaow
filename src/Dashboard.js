import {LogedinNavBar} from "./ui-components";
//import {Authenticator} from "@aws-amplify/ui-react";

function Dashboard({user, signOut}) {
  return (
    // <Authenticator>
    //   {({signOut, user}) => (
    <>
      <LogedinNavBar
        width="100%"
        overrides={{
          Button: {
            onClick: async () => {
              signOut();
            },
          },
          image: {
            src: user.attributes.picture,
          },
        }}
      />
    </>
    //   )}
    // </Authenticator>
  );
}

export default Dashboard;
