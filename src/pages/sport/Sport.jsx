import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import PopularNews from "../../components/catepagerightbar/PopularNews";
import Sportbanner from "../../components/sport/Sportbanner";
import Sportheader from "../../components/sport/Sportheader";
import SportMain from "../../components/sport/SportMain";
import SportPopular from "../../components/sport/SportPopular";
import "./sport.css";

export default function Sport() {
  return (
    <>
      <Sportheader />
      <Sportbanner />
      <section className="container">
        <div className="sportbody">
          <SportMain />
          <div className="allRightBar">
            {/* <SportPopular /> */}
            <PopularNews />
            <Latestbar />
          </div>
        </div>
      </section>
    </>
  );
}
