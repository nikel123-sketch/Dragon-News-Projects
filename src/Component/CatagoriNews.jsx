import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "./NewsCard";

const CatagoriNews = () => {
  // state---
  const [filternews, setfilternews] = useState([]);
  //   console.log(filternews);
  const newsdata = useLoaderData();
  //   console.log(newsdata)
  const { id } = useParams();
  //  console.log(id)

  useEffect(() => {
    if (id == "0") {
      setfilternews(newsdata);
      return;
    } else if (id == "1") {
      const filterdata = newsdata.filter(
        (news) => news.others.is_today_pick == id
      );
      console.log(filterdata);
      setfilternews(filterdata);
    } else {
      const filterdata = newsdata.filter((news) => news.category_id == id);
      setfilternews(filterdata);
    }
  }, [newsdata, id]);

  return (
    <div>
      <h2 className="font-bold text-xl">Dragon News Home</h2>

      <div className="grid grid-cols-1  gap-3">
        {filternews.map((onedata) => (
          <NewsCard onedata={onedata}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CatagoriNews;
