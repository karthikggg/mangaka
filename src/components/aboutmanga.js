import React from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";

export const ABOUTMANGA = ({ currentmanga, Targetchapter }) => {
  const [chapter, setchapter] = useState("1");

  return (
    <div>
      {currentmanga.map((manga, index) => {
        console.log(manga.img);
        return (
          <div key={index}>
            <div
              className="about-manga-image-div"
              style={{ backgroundImage: `url("${manga.img_2}")` }}
            >
              <div className="about-image">
                <img src={manga.img_2} alt="" />
              </div>
            </div>
            <div>
              <div className="side-image">
                <div className="all-manga-content" style={{ color: "white" }}>
                  <div className="manga-center">
                    <div className="manga-content">
                      <h1>{manga.manga_name}</h1>
                      <p>English</p>
                    </div>
                    <div>
                      <div className="star">
                        <MdOutlineStarPurple500 />
                        <MdOutlineStarPurple500 />
                        <MdOutlineStarPurple500 />
                        <MdOutlineStarPurple500 />
                        <MdOutlineStarPurple500 />
                      </div>
                      <p>
                        Average rating: <span>4.9</span>
                      </p>
                      <p>245 reviews</p>
                    </div>
                    <Link to={"/mangaread"}>
                      <button className="button-80">Start Reading</button>
                    </Link>
                    <div className="chapter">
                      {manga.chapters.map((chap) => {
                        return (
                          <div key={chap.id}>
                            <Link
                              className="L"
                              to={"/mangaread"}
                              onClick={() => Targetchapter(chap.id)}
                            >
                              <div className="chap">chapter {chap.id}</div>{" "}
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <img src={manga.img} alt="" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
