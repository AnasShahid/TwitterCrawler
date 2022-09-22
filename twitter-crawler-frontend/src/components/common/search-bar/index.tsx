/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Input,
  StyledInput,
  SearchIcon,
  SearchIconContainer,
  SearchBarContainer,
  Select,
} from "./style";
import TweetCard from "../../tweet-card";
import debounce from "lodash.debounce";
import NoDataFound from "../../../assets/no-data-found.png";
import { Spinner } from "../../../example/pages/style";
import { IParams, TweetInfo } from "../../../interfaces";

const FilterSelect = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Tweets",
    value: "tweets",
  },
  {
    label: "User",
    value: "user",
  },
];

const SearchBar: React.FC = () => {
  const [nextToken, setNextToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isData, setIsData] = useState({ value: false });
  const [searchInput, setSearchInput] = useState("");
  const [twitterData, setTwitterData] = useState<TweetInfo[]>([]);

  const TWITTER_URL = `http://localhost:8089/api/twitter/search`;

  let params: IParams = {
    query: searchInput,
    expansions: "author_id",
    "tweet.fields": "created_at,public_metrics",
    "user.fields":
      "username,profile_image_url,public_metrics,verified,description",
  };

  const fetchTweetData = async () => {
    const queryParamString = JSON.stringify(params);
    const queryParamURI = encodeURI(queryParamString);
    const test = await fetch(`${TWITTER_URL}?query=${queryParamURI}`);
    const response = await test.json();
    setIsLoading(true);
    setTwitterData((twitterData) => {
      return [...twitterData, ...response.data.tweetData];
    });
    setNextToken(response.data.meta.next_token);
  };

  useEffect(() => {
    if (isData.value) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      params = {
        ...params,
        next_token: nextToken,
      };
      fetchTweetData();
    }
  }, [isData]);

  const loadMore = () => {
    console.log("hiiii");
    setIsData(() => ({ value: true }));
  };
  const pageEnd: any = useRef();
  const handleSearch = (e: any) => {
    setSearchInput(e.target.value);
  };
  useEffect(() => {
    if (searchInput.length > 0) {
      fetchTweetData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);
  const debouncedResults = useMemo(() => {
    return debounce(handleSearch, 1000);
  }, []);
  useEffect(() => {
    if (isLoading) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              loadMore();
            }, 1000);
          }
        });
      });
      observer.observe(pageEnd.current);
    }
  }, [isLoading]);
  return (
    <SearchBarContainer>
      <StyledInput className={"inputWithIcon"}>
        <Input type="text" onChange={debouncedResults} placeholder="Search" />
        <Select className="right-icon">
          {FilterSelect.map((selectItem, index) => (
            <option
              key={index}
              label={selectItem.label}
              value={selectItem.value}
            />
          ))}
        </Select>
        <SearchIconContainer>
          <SearchIcon />
        </SearchIconContainer>
      </StyledInput>
      {twitterData.length > 0 ? (
        twitterData.map((mapdata, index) => (
          <TweetCard key={index} tweetDetails={mapdata} />
        ))
      ) : (
        <img src={NoDataFound} alt="" />
      )}
      {isLoading && <Spinner ref={pageEnd} />}
    </SearchBarContainer>
  );
};
export default SearchBar;
