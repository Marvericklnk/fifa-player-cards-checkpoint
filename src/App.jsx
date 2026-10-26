import PlayersList from "./PlayersList.jsx";

function App() {
  return (
    <div className="App">
      <header className="site-header container">
        <a href="#players" className="brand">M / FOOTBALL</a>
        <span className="header-caption">MARVIN'S REACT CHECKPOINT</span>
      </header>
      <main className="container pb-5">
        <section className="intro" aria-labelledby="page-title">
          <p className="eyebrow">THE BEAUTIFUL GAME / PLAYER COLLECTION</p>
          <h1 id="page-title">Big names.<br /><span>Unforgettable moments.</span></h1>
          <p className="intro-copy">
            Four players. Four national teams. One love for football.
          </p>
          <div className="collection-note">
            2022 World Cup edition · Ages and national-team jersey numbers
            recorded at the tournament's opening on 20 November 2022.
          </div>
        </section>
        <section id="players" aria-labelledby="players-heading">
          <div className="collection-heading">
            <h2 id="players-heading">Meet the players</h2>
            <span>04 / PLAYER CARDS</span>
          </div>
          <PlayersList />
        </section>
      </main>
      <footer>Built by Marvin with React, Vite &amp; Bootstrap · Educational showcase</footer>
    </div>
  );
}

export default App;
