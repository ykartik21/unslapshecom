import "./Home.css";
import React, { useContext } from "react";
import Image from "../../components/Image/Image";
import { Context, ContextProvider } from "../../context/context";

const Home = () => {
  const allPhotos = useContext(Context).allPhotos;
  const images = allPhotos.map((img, index) => (
    <Image
      src={img.url}
      key={index}
      alt={index}
      id={img.id}
      isFavorite={img.isFavorite}
      img={img}
    />
  ));
  return <div className="home">{images}</div>;
};

export default Home;
