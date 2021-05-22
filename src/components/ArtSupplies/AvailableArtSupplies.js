import classes from "./AvailableArtSupplies.module.css";
import Card from "./../UI/Card";
import ArtSupplyItem from "./ArtSupplyItem/ArtSupplyItem";
const DUMMY_ART_SUPPLIES = [
  {
    id: "m1",
    name: " Faber-Castell pitt Artist Charcoal Pencils (white)",
    description: " Finest Quality & Brittle proof leads",
    price: 50.67,
  },
  {
    id: "m2",
    name: " Mungyo Gallery Artists Soft pastels",
    description: "A german specialty! (70 colors)",
    price: 700,
  },
  {
    id: "m3",
    name: " Brustro Artists Gouache",
    description: "Premium Quality paints ideal for experts",
    price: 5000,
  },
  {
    id: "m4",
    name: "Brusto Artist waster color pad",
    description: "Acid free 110 GSM sheets",
    price: 315,
  },
];

const AvailableArtSupplies = () => {
  const artSupply = DUMMY_ART_SUPPLIES.map((art) => (
    <ArtSupplyItem
    key = {art.id}
    id = {art.id}
      name={art.name}
      price={art.price}
      description={art.description}
    />
  ));
  return (
    <section className={classes.artSupplies}>
      <Card>
        <ul>{artSupply}</ul>
      </Card>
    </section>
  );
};

export default AvailableArtSupplies;
