import { Fragment } from "react";
import ArtSupplySummary from "./ArtSupplySummary";
import AvailableArtSupplies from "./AvailableArtSupplies";

const ArtSupplies = () => {
  return (
    <Fragment>
      <ArtSupplySummary />
      <AvailableArtSupplies />
    </Fragment>
  );
};

export default ArtSupplies;
