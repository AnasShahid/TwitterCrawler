import React, { useRef } from "react";
import { Card } from "./Card";
import { CardData } from "./CardData";
import { Spinner, SpinnerContainer } from "./style";
import useLazyLoad from "./UseLazyLoad";

const NUM_PER_PAGE = 6;
const TOTAL_PAGES = 3;

const Home = () => {
  let triggerRef = useRef(null);
  const onGrabData = (currentPage: number) => {
    // This would be where you'll call your API
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = CardData.slice(
          ((currentPage - 1) % TOTAL_PAGES) * NUM_PER_PAGE,
          NUM_PER_PAGE * (currentPage % TOTAL_PAGES)
        );
        console.log(data);
        resolve(data);
      }, 1500);
    });
  };
  const { data } = useLazyLoad({ triggerRef, onGrabData });
  // console.log("sadas", data1);
  return (
    <div>
      <div>
        {data.map((image: any) => {
          return <Card owner={image["owner"]} imageUrl={image["imageUrl"]} />;
        })}
      </div>
      <SpinnerContainer>
        <Spinner ref={triggerRef} />
      </SpinnerContainer>
    </div>
  );
};

export default Home;
