import React, { Component } from "react";
import { Header, Card, Image } from "semantic-ui-react";
import appleLogo from "../icons/apple.png";
import boxyCharmLogo from "../icons/boxycharm.jpg";
import ipsyLogo from "../icons/ipsy.png";
import etsyLogo from "../icons/etsy.svg";
import indeedLogo from "../icons/indeed.png";
import twitterLogo from "../icons/twitter.png";
import buzzfeedLogo from "../icons/buzzfeed.png";
import rentTheRunwayLogo from "../icons/rtr.png";

const dreamCompanies = [
  {
    name: "Etsy",
    website: "https://www.etsy.com",
    logo: etsyLogo
  },
  {
    name: "RTR",
    website: "https://www.renttherunway.com",
    logo: rentTheRunwayLogo
  },
  {
    name: "Buzzfeed",
    website: "https://www.buzzfeed.com",
    logo: buzzfeedLogo
  },
  {
    name: "Twitter",
    website: "https://www.twitter.com",
    logo: twitterLogo
  },
  {
    name: "Indeed",
    website: "https://www.indeed.com",
    logo: indeedLogo
  },
  { name: "Apple", website: "https://www.apple.com", logo: appleLogo },
  {
    name: "BoxyCharm",
    website: "https://www.boxycharm.com",
    logo: boxyCharmLogo
  },
  { name: "IPSY", website: "https://www.ipsy.com", logo: ipsyLogo }
];

export default class Top8 extends Component {
  render() {
    return (
      <>
        <Header id="myspace">Syd's Dream Company Space (Top 8)</Header>
        <Card.Group itemsPerRow={4} style={{ marginBottom: "15px" }}>
          {dreamCompanies.map((company, index) => {
            return (
              <>
                <Card basic id="top8">
                  <Header id="friends">
                    <a href={company.website} style={{ color: "000000" }}>
                      {company.name}
                    </a>
                  </Header>
                  <Image src={company.logo} id="logos" key={index} />
                </Card>
              </>
            );
          })}
        </Card.Group>
      </>
    );
  }
}
