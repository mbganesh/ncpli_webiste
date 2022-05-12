import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function CustomTabs() {
  const [TabItems, setTabItems] = useState([
    {
      text: "E-Commerce",
      isSeleted: true,
      content:
        "Electronic Commerce is also known as e-commerce that consists of the purchasing and selling of products or services through electronic systems like computer networks and the Internet. In this modern world of technology, e-commerce is becoming a very significant option for many businesses as there are lots of companies that are interested in developing their online stores. Our e-commerce software Package targets efficiently capturing the prospective clients, identifying their queries and demands, checking our databases for business solutions and supplying products, services, billing, payment and the overall execution. Portals and standard websites are all developed with modules and software by keeping the commercial needs of our clients and their benefits in mind.",
      img: "https://www.albegasolutions.com/assets/images/products/e-commerce.svg",
    },
    {
      text: "Wallets",
      isSeleted: false,
      content:
        "A digital wallet is a virtual wallet. It stores all your wallet contents in a digitized form and allows easy payments and other money transactions. The wallets can hold not only money but also coupons, loyalty points, stored value cards and membership cards. Create a safe, secure and fast application for easy online commercial transactions comprising of vouchers, payments, coupons, loyalty cards, gift cards and more.",
      img: "https://www.albegasolutions.com/assets/images/products/digital-wallet.svg",
    },
    {
      text: "Blockchain",
      isSeleted: false,
      content:
        "The blockchain formation. The main chain (black) consists of the longest series of blocks from the genesis block (green) to the current block. Orphan blocks (purple) exist outside of the main chain.A blockchain, originally block chain, is a continuously growing list of records, called blocks, which are linked and secured using cryptography. Each block typically contains a cryptographic hash of the previous block, a timestamp, and transaction data. By design, a blockchain is resistant to modification of the data.",
      img: "https://www.albegasolutions.com/assets/images/products/blockchain.svg",
    },
    {
      text: "Property Management",
      isSeleted: false,
      content:
        "You can see all property news in India and worldwide status, property gateway give you insights about the area. Where you can see what territory you should consider for your home and what you need to purchase. The data given in this entry depends on property information which is gathered from different open sources by means of, sites, records and maps including restrictive information assets, and from the inputs of unidentified people.Property management systems are utilized by hotels of all sizes, resorts, casinos, and even conference centres and multi-property organizations. They can be based online with an application service provider to (ASP), or hosted internally on the current computer systems of the business. Property management systems can be used to manage single or multiple properties, and basic functions might include features like these: guest check-in and check-out, guest profiles, tracking services, report generation, auditing, front and back office services, and security systems. Additional features are generally highly customized and can include amenities like restaurant or spa scheduling, housekeeping schedules, and gift card management.",
      img: "https://www.albegasolutions.com/assets/images/products/property-management.svg",
    },
    {
      text: "Animation & Educational Software",
      isSeleted: false,
      content:
        "We at Albega Solutions provided end to end animation solutions for your advertising and educational videos. We have been servicing the clients for the past one year by providing quality animation videos which includes industries like hospitals, schools, advertising agencies and schools.One of our pioneer product is the CBSE smart teacher which we are selling as white label to schools. This is an offline product and students can learn and revise without internet.",
      img: "https://www.albegasolutions.com/assets/images/products/software.svg",
    },
    {
      text: "News CMS",
      isSeleted: false,
      content:
        "CMS development has brought websites in tune with the demand of the modern times. With a CMS, it is possible to control and manage the content of a website or a portal in line with the demands and likings of your target audience. Consider taking on Albega Solutions as your CMS development partner to take your site to the forefront of business and technology.A CMS allows the website owner to add, edit, or modify the content such as photos, text, and videos so that the site is constantly kept up-to-date without the need of the intervention of the developers. Today's CMS systems even let you edit HTML right on your site, if you want. If not, they can be configured to let you quickly and easily edit certain areas or documents and you can still route more complex requests to developers. At Microtelesoft, we can create some of the most advanced and complex CMS solutions in the industry. Our custom CMS development services are extremely effective and they come at a very affordable price. Hiring us for your CMS development needs can surely be of immense benefit to you.",
      img: "https://www.albegasolutions.com/assets/images/products/news.svg",
    },
  ]);

  const HandleTabTitle = (ob) => {
    for (let i = 0; i < TabItems.length; i++) {
      if (ob.text != TabItems[i].text) {
        TabItems[i].isSeleted = false;
      } else {
        TabItems[i].isSeleted = true;
      }
    }

    let updateTab = TabItems.map(el => (
      el.text===ob.text? {...el, isSeleted: true}: el
))

    setTabItems(updateTab);
  };



  return (
    <div>
      {/* tab title */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {TabItems.map((obj, index) => (
          <Typography
            key={index}
            sx={{
               boxShadow:  `1px 2px 3px 0px rgba(194,194,194,0.98)`,
              padding: "10px 20px",
              margin: "10px",
              border: "1px solid #5956e9",
              borderRadius: "100px",
              cursor: "pointer",
              backgroundColor: obj.isSeleted ? "#5956e9" : "white",
              color: obj.isSeleted ? "white" : "#5956e9",
            }}
            onClick={() => HandleTabTitle(obj)}
          >
            {obj.text}
          </Typography>
        ))}
      </div>

      {/* tab content */}

      <div style={{margin:'20px 0' , }}>
        {
          TabItems.filter(obj => obj.isSeleted === true).map(obj => (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <img
                src={obj.img}
                alt="loading"
                style={{
                width:'320px',
                objectFit:'contain'
                }}
              />
              <div style={{ width:'50%' ,}}>
                <Typography variant="h4"> {obj.text} </Typography>

                <Typography variant="subtitle1" >
                  {" "}
                  {obj.content}{" "}
                </Typography>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
