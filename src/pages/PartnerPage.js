import React, { useEffect, useState } from "react";
import BorderBox from "../components/BorderBox";
import "../styles/PartnerPage.css";
import PartnerCell from "../components/PartnerCell";
import ListingWebService from "../web_services/listing_webservice";
import { ConfigService } from "../services/config_service";
import SRLoader from "../components/SRLoader";
import PartnerBankInfo from "../components/PartnerBankInfo";

const PartnerPage = () => {
  const [listingInfo, setListingInfo] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      var service = new ListingWebService();
      var listingResult = await service.getPartnerProfile(
        ConfigService.data.apiUrl,
        ConfigService.data.returnUrl
      );
      if (!listingResult.Errored) {
        setListingInfo(listingResult.Payload);
      }
      setIsLoading(false);
    };
    loadData();
  }, []);

  return !isLoading ? (
    <div className="partner-page-wrapper">
      <div className="partner-page-header">
        <BorderBox width="400px" height="250px">
          <div className="referral-wrapper">
            <h2>Your Referral Code</h2>
            <h2 style={{ color: "var(--ocean-blue)" }}>
              {listingInfo.AccessCode}
            </h2>
            <p>
              Share this code in private channels with hosts you're onboarding
            </p>
          </div>
        </BorderBox>

        <PartnerBankInfo
          paymentStatus={listingInfo.PaymentStatus}
          paymentUrl={listingInfo.PaymentUrl}
        />
      </div>
      {listingInfo.Hosts.length > 0 && (
        <div className="partner-page-network">
          <h1 style={{ alignSelf: "center" }}>Your Network</h1>
          {listingInfo.Hosts.map((record) => {
            return (
              <PartnerCell
                hostName={record.HostName}
                hostImg={record.HostImage}
                commissionRate={listingInfo.CommissionRate}
                commissionEarned={record.CommissionEarned}
                totalCalls={record.TotalCalls}
              />
            );
          })}
        </div>
      )}
    </div>
  ) : (
    <SRLoader label="loading event details..." />
  );
};

export default PartnerPage;
