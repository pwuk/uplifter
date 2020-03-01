import React, { useState } from "react";
import FlickrImage from "./FlickrImage";
import { useFetch } from "./hooks";
import InfiniteScroll from "react-infinite-scroll-component";

const PageOne = () => {
  const [triggerFetch, setTriggerFetch] = useState(0);
  const theData = useFetch(triggerFetch);

  return (
    <div className={"task"}>
      <h2>Flickr data - {theData && theData.title}</h2>

      <InfiniteScroll
        dataLength={theData && theData.items.length}
        next={() => setTriggerFetch(triggerFetch + 1)}
        hasMore={true}
        loader={<h3>Loading...</h3>}
      >
        <div className="flickr-container">
          {theData &&
            theData.items.map((flickrItem, index) => (
              <FlickrImage key={index} {...flickrItem} />
            ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default PageOne;
