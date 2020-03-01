import { useState, useEffect } from "react";
import { FLICKR_URL } from "./constants";
import fetchJsonp from "fetch-jsonp";

const useFetch = fetchCounter => {
  const [theData, setTheData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchJsonp(FLICKR_URL, {
        jsonpCallback: "jsoncallback"
      });
      const data = await result.json();
      if (!theData) {
        setTheData(data);
      } else {
        setTheData({ ...data, items: theData.items.concat(data.items) });
      }
    };
    fetchData();
  }, [fetchCounter]);

  return theData;
};

export { useFetch };
