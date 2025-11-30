import React, { useState } from "react";
import favarite from "../assets/favarite.png";
import share from "../assets/share.png";
import star from "../assets/star.png";
import { Link } from "react-router";
const NewsCard = ({ onedata }) => {
  const [showFull, setShowFull] = useState(false);
 
  const details = onedata.details;
  
  const{id}=onedata;
  
 
  return (
    <div>
      <section className="p-4">
        {/* header */}
        <div className="flex justify-between items-center p-4 bg-[#f3f3f3]">
          <div className="flex gap-2 items-center">
            <img className="h-10 rounded-2xl" src={onedata.author.img} alt="" />
            <div>
              <h2 className="font-bold">{onedata.author.name}</h2>
              <p>{onedata.author.published_date}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <img className="w-6 h-6" src={favarite} alt="" />
            <img className="w-6 h-6" src={share} alt="" />
          </div>
        </div>

        {/* main div */}
        <div>
          <div>
            <h1 className="font-bold text-xl">{onedata.title}</h1>
            <img
              className="mt-2.5 mb-2 rounded-xl"
              src={onedata.image_url}
              alt=""
            />

            {/* ditails */}

            <div className="px-4 text-gray-600">
              {details.length > 200 ? (
                <>
                  {details.slice(0, 200)}...
                  <Link
                    to={`/NewsDetails/${id}`}
                    className="text-primary font-semibold cursor-pointer hover:underline"
                  >
                    Read More
                  </Link>
                </>
              ) : (
                details
              )}
            </div>
          </div>
        </div>

        <div className="border-1 border-[#706f6f] mt-2.5 mb-2"></div>

        {/* futter div */}
        <div>
          <div className="flex">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <p>{}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsCard;
