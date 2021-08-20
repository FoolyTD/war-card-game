// I wanted to put state to allow me to change the content on the screen
//  without having to change the url
import { useState } from "react";
// Link will be used to get back to the home page
import { Link } from "react-router-dom";

export default function Instructions() {
  // this variable is an integer that will change the content on the screen
  //  like a page number
  const [contentPage, setContentPage] = useState(0);

  // This function is attached to the "Next Page" text and adds 1 to the contentPage variable
  //      if it is within the available page range
  const handleNextPage = () => {
    if (contentPage < 2) {
      setContentPage((currentPageNumber) => currentPageNumber + 1);
    }
  };

  // This function is attached to the "Next Page" text and adds 1 to the contentPage variable
  //      if it is within the available page range
  const handlePreviousPage = () => {
    if (contentPage > 0)
      setContentPage((currentPageNumber) => currentPageNumber - 1);
  };

  const displayPage = () => {
    if (contentPage === 0) {
      return (
        <div className="page-container">
          <ul className="page-content">
            <li className="card-text">
              War is a two-player card game played with a standard{" "}
              <span className="highlight">52-CARD DECK</span>
            </li>
            <li className="card-text">
              The deck is shuffled and split in two (
              <span className="highlight">26</span> for{" "}
              <span className="highlight">YOU</span> &{" "}
              <span className="highlight">26</span> for your{" "}
              <span className="highlight">OPPONENT</span>)
            </li>
            <li className="card-text">
              Each turn you and your opponent play{" "}
              <span className="highlight">1</span> card{" "}
              <span className="highlight">FACE UP</span>
            </li>
            <li className="card-text">
              In this game, suit does <span className="highlight">NOT</span>{" "}
              matter, only the <span className="highlight">VALUE</span> (Ace is the <span className="highlight">LOWEST</span> King is the <span className="highlight">HIGHEST</span>)
            </li>
          </ul>
        </div>
      );
    } else if (contentPage === 1) {
      return (
        <div className="page-container">
          <ul className="page-content">
          <li className="card-text">
              The player with the{" "}
              <span className="highlight">HIGHER VALUE WINS</span> and takes
              both cards
            </li>
            <li className="card-text">
              If both cards have the <span className="highlight">SAME VALUE</span> , <span className="highlight">WAR</span> is triggered
            </li>
            <li className="card-text">
              In <span className="highlight">WAR</span> , both players play <span className="highlight">4 CARDS</span> (<span className="highlight">3</span> face <span className="highlight">DOWN</span> & <span className="highlight">1</span> face <span className="highlight">UP</span>).
              Winner takes <span className="highlight">ALL</span> cards on the table
            </li>
            <li className="card-text">First player get <span className="highlight">27+</span> cards <span className="highlight">WINS!</span></li>
          </ul>
        </div>
      );
    } else if (contentPage === 2) {
      return (
        <div className="page-container">
          <ul className="page-content">
            <li className="card-text">
              Once the game starts, click the <span className="highlight">"DEAL"</span> button to shuffle and deal
              you and the opponent's cards
            </li>
            <li className="card-text">
              After both cards are revealed, click <span className="highlight">"SCORE"</span> to give cards to the
              winner
            </li>
            <li className="card-text">
              If WAR breaks out, click <span className="highlight">"WAR"</span> to deal your tie-breaker
            </li>
          </ul>
        </div>
      );
    }
  };

  return (
    <section className="table-container">
      <div className="title-container">
        <h1 className="outcome-text">How To Play</h1>
        <div className="page-title">
          <h3 className="big-text rules">
            {contentPage < 2 ? "RULES" : "GAMEPLAY"}
          </h3>
        </div>
      </div>
      {displayPage()}
      <section className="navigation-container">
        <div className="navigation-item">
          <h1 onClick={handlePreviousPage} className="card-text next-text">
            {`<-`} Previous Page
          </h1>
        </div>
        <div className="navigation-item nav-btn">
          <div className="steel-texture">
            <div className="btn instruction-play-now">
              <Link to="/home">
                <h3 className="play-now-btn play-now-text">PLAY NOW</h3>
              </Link>
            </div>
          </div>
        </div>
        <div className="navigation-item next-text">
          <h1 onClick={handleNextPage} className="card-text next-text">
            Next Page {`->`}
          </h1>
        </div>
        <div className="navigation-item page-count">
          <p className="card-text">
            {" "}
            Page{" "}
            <span className="highlight page-number">{contentPage + 1}</span>/3
          </p>
        </div>
      </section>
    </section>
  );
}
