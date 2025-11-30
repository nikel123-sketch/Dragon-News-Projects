import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCards = ({news}) => {
    const { image_url, title, details } = news;
    
    return (
      <div className="bg-[#ffffff]">
        <img className="rounded-2xl w-full" src={image_url} alt="" />
        <h1 className="font-bold text-2xl mt-2 mb-2">{title}</h1>
        <p>{details}</p>

        <Link
          className="font-bold text-xl btn btn-primary mt-5"
          to={`/catagorinews/${news.category_id}`}
        >
          All news in this category
        </Link>
      </div>
    );
};

export default NewsDetailsCards;