import {LogedinNavBar} from "./ui-components"
import { withAuthenticator } from '@aws-amplify/ui-react'

function Dashboard ({ signOut }) {
  return (
    <>
      <LogedinNavBar width="100%"/>
      
    </>
  );
}

export default withAuthenticator(Dashboard);
