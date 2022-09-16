import React, { useRef } from "react";
import { Card } from "./Card";
import { CardData } from "./CardData";
import { Spinner, SpinnerContainer } from "./style";
import useLazyLoad from "./UseLazyLoad";
import { IImage } from "../../interfaces";

const NUM_PER_PAGE = 6;
const TOTAL_PAGES = 3;

const Home: React.FC = () => {
  let triggerRef = useRef(null);
  function onGrabData(currentPage: number) {
    // This would be where you'll call your API
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = CardData.slice(
          ((currentPage - 1) % TOTAL_PAGES) * NUM_PER_PAGE,
          NUM_PER_PAGE * (currentPage % TOTAL_PAGES)
        );
        resolve(data);
      }, 1500);
    });
  }
  const { data } = useLazyLoad({ triggerRef, onGrabData });
  return (
    <div>
      <div>
        {data.map((image: IImage, key: any) => {
          return (
            <Card
              key={key}
              owner={image["owner"]}
              imageUrl={image["imageUrl"]}
            />
          );
        })}
      </div>
      <SpinnerContainer>
        <Spinner ref={triggerRef} />
      </SpinnerContainer>
    </div>
  );
};

export default Home;
