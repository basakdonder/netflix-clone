import React, { useState } from "react";
import Slider from "react-slick";
import "./styles/Main.css";
import img1 from "../../img/stranger-things-1.png";
import { ShowsList } from "../../ShowsList";
import { MyList } from "../../MyList";
const about =
  "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.";

const date = "2016";
const season = "4";

function Main() {
  const [selectedTitle, setSelectedTitle] = useState("Stranger Things");
  const [selectedImg, setSelectedImg] = useState(img1);
  const [selectedAbout, setSelectedAbout] = useState(about);
  const [selectedDate, setSelectedDate] = useState(date);
  const [selectedSeason, setSelectedSeason] = useState(season);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <div className="Main">
      <div className="main-img-container">
        <div className="main-info">
          <h1>{selectedTitle}</h1>
          <div className="about-show">
            {selectedDate} | {selectedSeason} Seasons
          </div>
          <div className="about-show">
            <p>{selectedAbout}</p>
          </div>
          <div className="buttons">
            <div className="button btn-mylist">
              <i class="fa-solid fa-plus"></i>MY LIST
            </div>
            <div className="button">
              <i class="fa-solid fa-thumbs-up"></i>
            </div>
            <div className="button">
              <i class="fa-solid fa-thumbs-down"></i>
            </div>
          </div>
        </div>
        <div className="main-gradient"></div>
        <img id="main-img" src={selectedImg} alt={selectedTitle} />
      </div>
      <div className="shows-container">
        <h3>Explore</h3>
        <Slider {...settings}>
          {ShowsList.map(({ id, title, img, img2, about, date, season }) => {
            return (
              <img
                key={id}
                className="show"
                src={img}
                alt={title}
                onClick={() => {
                  setSelectedTitle(title);
                  setSelectedImg(img2);
                  setSelectedAbout(about);
                  setSelectedDate(date);
                  setSelectedSeason(season);
                }}
              />
            );
          })}
        </Slider>
      </div>
      <div className="shows-container">
        <h3>My List</h3>
        <Slider {...settings}>
          {MyList.map(({ id, title, img, img2, about, date, season }) => {
            return (
              <img
                key={id}
                className="show"
                src={img}
                alt={title}
                onClick={() => {
                  setSelectedTitle(title);
                  setSelectedImg(img2);
                  setSelectedAbout(about);
                  setSelectedDate(date);
                  setSelectedSeason(season);
                }}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Main;
