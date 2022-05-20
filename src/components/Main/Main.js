import React, { useState } from "react";
import Slider from "react-slick";
import "./styles/Main.css";
import { ShowsList } from "../../ShowsList";
import { MyList } from "../../MyList";

function Main() {
  const [isShowed, setIsShowed] = useState(false);
  const [selected, setSelected] = useState({
    title: "Stranger Things",
    img: require("../../img/stranger-things-1.png"),
    about:
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    date: "2016",
    season: "4",
  });

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
          <h1>{selected.title}</h1>
          <div className="about-show">
            {selected.date} | {selected.season} Seasons
          </div>
          <div className="about-show">
            <p>{selected.about}</p>
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
        <img id="main-img" src={selected.img} alt={selected.title} />
      </div>
      <div className="shows-container">
        <h3>Netflix Originals</h3>
        <Slider {...settings}>
          {ShowsList.map((show) => {
            return (
              <img
                key={show.id}
                className="show"
                src={show.img}
                alt={show.title}
                onClick={() => {
                  setSelected({
                    title: show.title,
                    img: show.img2,
                    about: show.about,
                    date: show.date,
                    season: show.season,
                  });
                }}
              />
            );
          })}
        </Slider>
      </div>
      <div className="shows-container">
        <h3>My List</h3>
        <Slider {...settings}>
          {MyList.map((myList) => {
            return (
              <img
                key={myList.id}
                className="show"
                src={myList.img}
                alt={myList.title}
                onClick={() => {
                  setSelected({
                    title: myList.title,
                    img: myList.img2,
                    about: myList.about,
                    date: myList.date,
                    season: myList.season,
                  });
                  setIsShowed(true);
                }}
              />
            );
          })}
        </Slider>
      </div>
      <div
        className={isShowed ? "previev-container showed" : "previev-container"}
      >
        <div className="preview-box">
          <i
            class="fa-solid fa-xmark"
            onClick={() => {
              setIsShowed(false);
            }}
          ></i>
          <img src={selected.img} alt={selected.title} />
          <div className="main-info">
            <h1>{selected.title}</h1>
            <div className="about-show">
              {selected.date} | {selected.season} Seasons
            </div>
            <div className="about-show">
              <p>{selected.about}</p>
            </div>
            <div className="buttons">
              <button className="btn btn-watch">Watch Now</button>
              <button className="btn btn-add">My List</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
