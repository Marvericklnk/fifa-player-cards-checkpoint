# FIFA Player Cards Checkpoint

A React + Vite project by Marvin. Uses Bootstrap's card and responsive grid classes.

## Run on Windows in VS Code
Install Node.js 20.19+ or 22.12+. Open this project folder, then choose Terminal > New Terminal:
```bash
npm install
npm run dev
```
Open the local address printed by Vite. Use npm run build for a production build and npm run preview to preview it. Do not use Live Server.

## Vite setup
To scaffold a similar project from scratch:
```bash
npm create vite@latest fifa-player-cards-checkpoint -- --template react
cd fifa-player-cards-checkpoint
npm install
npm install bootstrap
```
The supplied source is prepared for Vite. The source is configured for Vite and was verified with a production build.

## Requirements
- src/players.js exports four player objects with name, team, nationality, jerseyNumber, age, and image URL.
- src/Player.jsx destructures every prop and renders a Bootstrap card.
- Default parameter values supply default props for every attribute, compatible with React 19.
- Player.jsx includes inline styles.
- src/PlayersList.jsx imports the data and Player and uses map to pass props.
- src/App.jsx renders PlayersList.
- src/main.jsx imports Bootstrap CSS.

## Historical data
This is a 2022 World Cup collection. Teams mean national teams, and ages and jersey numbers refer to 20 November 2022, not today's club squads. Player images are remote Wikimedia portraits; external URLs may change and are not guaranteed to depict the 2022 tournament. Failed or missing images show initials.

## Check before submission
Run npm run build. Check four cards and every attribute; resize the browser; check no horizontal scrolling. Render <Player /> to inspect the default values and initials fallback. Change one image URL to an invalid URL and check the fallback. Restore the valid URL afterwards.

Prepared with ChatGPT assistance. Verified: production build, rendering all four cards, and default props. Interactive browser testing was not performed.

## Image credits
Image URLs were obtained from Wikipedia thumbnails. Each Wikimedia Commons file page provides the author and license:
- https://commons.wikimedia.org/wiki/File:Leo_Messi_Argentina_v_Egypt_7_July_2026-1.jpg
- https://commons.wikimedia.org/wiki/File:Kylian_Mbappe_France_v_Senegal_16_June_2026-391_%28cropped%29.jpg
- https://commons.wikimedia.org/wiki/File:Cristiano_Ronaldo_Croatia_v_Portugal_2_July_2026-075_%28cropped%29.jpg
- https://commons.wikimedia.org/wiki/File:Neymar_Junior_Brazil_V_Morocco_13_June_2026-40.jpg
