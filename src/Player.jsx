import { useState } from "react";

// Parameter defaults provide default props for React function components.
// They work with React 19, which no longer uses function.defaultProps.
function Player({
  name = "Unknown Player",
  team = "Unknown Team",
  nationality = "Unknown",
  jerseyNumber = 0,
  age = 18,
  image = "",
}) {
  const [failedImage, setFailedImage] = useState("");
  const showImage = Boolean(image) && failedImage !== image;

  const initials = name
    .trim()
    .split(/\s+/)
    .map((word) => word[0] || "")
    .slice(0, 2)
    .join("");

  return (
    <article
      className="card player-card h-100"
      style={{
        borderRadius: "22px",
        overflow: "hidden",
        backgroundColor: "#fffdf5",
      }}
    >
      <div className="player-portrait">
        <span className="jersey-tag" aria-label={"Jersey number " + jerseyNumber}>
          #{jerseyNumber}
        </span>
        {showImage ? (
          <img
            src={image}
            alt={name}
            className="player-photo"
            loading="lazy"
            onError={() => setFailedImage(image)}
            style={{ width: "100%", height: "260px", objectFit: "contain" }}
          />
        ) : (
          <div className="portrait-fallback" role="img" aria-label={name + " portrait unavailable"}>
            {initials || "?"}
          </div>
        )}
        <span className="portrait-caption">WORLD CUP COLLECTION</span>
      </div>

      <div className="card-body p-4">
        <p className="team-label mb-2">{team}</p>
        <h2 className="card-title player-name">{name}</h2>
        <dl className="player-facts mb-0 mt-4">
          <div><dt>Nationality</dt><dd>{nationality}</dd></div>
          <div><dt>Jersey number</dt><dd>{jerseyNumber}</dd></div>
          <div><dt>Age in 2022</dt><dd>{age}</dd></div>
        </dl>
      </div>
    </article>
  );
}

export default Player;
