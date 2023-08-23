import React from "react";
import { Link } from "react-router-dom";
import NextPageIcon from "../../assets/images/nextpage_icon.png";

const NextPageButton = () => {
  return (
    <Link>
      <button
        className="bg-gray-600 hover:bg-green-600 rounded-full py-3 px-3 animate-bounce opacity-50 hover:opacity-100"
        onClick=""
        title="Next Page"
      >
        <img src={NextPageIcon} alt="next-page-icon"></img>
      </button>
    </Link>
  );
};

export default NextPageButton;
