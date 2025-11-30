import React, {  useEffect, useState } from "react";
import Header from "../Component/Header";
import {  useLoaderData, useParams } from "react-router";
import Rightassid from "../Component/Rightassid";
import NewsDetailsCards from "../Component/NewsDetailsCards";
import Navber from "../Component/Navber";

const NewsDetails = () => {
const [news,setnews]=useState({})

  const ditails=useLoaderData();
  const {id}=useParams();
 

  useEffect(()=>{
    const newsdetails = ditails.find(
      (singlenews) => singlenews.id == id
    );
    setnews(newsdetails)
  },[ditails,id])
 
  return (
    <div className="max-w-11/12 mx-auto">
      <div>
        <Header></Header>
        <Navber></Navber>
      </div>
      <main className="grid grid-cols-12 gap-5 ">
        <div className="col-span-9  p-5">
          <h2 className="font-bold text-2xl mb-5">News Details</h2>
          <NewsDetailsCards news={news}></NewsDetailsCards>
        </div>

        <div className="col-span-3   p-5">
          <Rightassid></Rightassid>
        </div>
      </main>
    </div>
  );
};

export default NewsDetails;
