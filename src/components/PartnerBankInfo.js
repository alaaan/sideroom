import React from "react";
import BorderBox from "../components/BorderBox";
import SRButton from "../components/SRButton";

const PartnerBankInfo = (props) => {
  const paymentStatus = {
    goodStanding: 0,
    setupRequired: 1,
    updateRequired: 2,
  };
  if (props.paymentStatus === paymentStatus.setupRequired) {
    return (
      <>
        <BorderBox width="400px" height="250px">
          <div className="referral-wrapper">
            <h2>Bank Info</h2>
            <SRButton onClick={() => (window.location = props.paymentUrl)}>
              Connect to Stripe
            </SRButton>
            <p style={{ color: "var(--cerise)" }}>
              Your access code will not work until you set up your bank info.
              This is to be sure you are properly paid your commission.
            </p>
          </div>
        </BorderBox>
      </>
    );
  } else if (props.paymentStatus === paymentStatus.updateRequired) {
    return (
      <>
        <BorderBox width="400px" height="250px">
          <div className="referral-wrapper">
            <h2>Bank Info</h2>
            <SRButton onClick={() => (window.location = props.paymentUrl)}>
              Update Bank Info
            </SRButton>
            <p style={{ color: "var(--cerise)" }}>
              You're payment info needs to be updated or your payouts will be
              affected.
            </p>
          </div>
        </BorderBox>
      </>
    );
  }
  return (
    <>
      <div className="referral-wrapper">
        <SRButton onClick={() => (window.location = props.paymentUrl)}>
          View Payment Info
        </SRButton>
        <p style={{ color: "var(--cerise)" }}>
          Check your current payouts and transfers.
        </p>
      </div>
    </>
  );
};
export default PartnerBankInfo;
