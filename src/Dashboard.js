import React, {useEffect, useState} from "react";
import {
  LogedinNavBar,
  SharewaowMarketingFooter,
  RideCollection,
  RidesCreateForm,
  RidesUpdateForm,
  ItemsCardPhoneCollection,
} from "./ui-components";
import {withAuthenticator} from "@aws-amplify/ui-react";
import {Auth, DataStore} from "aws-amplify";

function Dashboard({user, signOut}) {
  const [userEmail, setUserEmail] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateItem, setUpdateItem] = useState();

  useEffect(() => {
    fetchUserEmail();
  }, []);

  const fetchUserEmail = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const userEmail = user.attributes.email;
      setUserEmail(userEmail);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  return (
    <>
      <LogedinNavBar
        width="100%"
        marginBottom="20px"
        overrides={{
          Button412815: {
            onClick: () => setShowCreateModal(true),
          },
          Button4112333: {
            onClick: async () => {
              signOut();
              await DataStore.clear();
            },
          },
          UserName: user.attributes.email,
        }}
      />

      <div className="ridecollection">
        <ItemsCardPhoneCollection
          overrideItems={({item, idx}) => {
            return {
              overrides: {
                EditButton: {
                  onClick: () => {
                    setShowUpdateModal(true);
                    setUpdateItem(item);
                  },
                },
              },
            };
          }}
        />
      </div>

      <SharewaowMarketingFooter />

      <div
        className="modal"
        style={{display: showUpdateModal === false && "none"}}
      >
        <RidesUpdateForm
          ride={updateItem}
          onSuccess={() => {
            setShowUpdateModal(false);
          }}
          overrides={{
            CancelButton: {
              onClick: () => setShowUpdateModal(false),
            },
          }}
        />
      </div>

      <div
        className="modal"
        style={{display: showCreateModal === false && "none"}}
      >
        <RidesCreateForm
          onSuccess={() => {
            setShowCreateModal(false);
          }}
          overrides={{
            CancelButton: {
              onClick: () => setShowCreateModal(false),
            },
          }}
        />
      </div>
    </>
  );
}

export default withAuthenticator(Dashboard);
