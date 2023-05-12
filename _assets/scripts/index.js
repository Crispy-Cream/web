async function SpotifyNP() {
  document
    .getElementById("centered")
    .getElementsByTagName(
      "p"
    )[0].innerHTML = `<i class="fa-duotone fa-rocket-launch"></i>&ensp;tysm.dev/github`;

  let res = await fetch("https://spotify.tysm.dev/now-playing").then((res) =>
    res.json()
  );

  if (res.isPlaying === false) {
    document
      .getElementById("spotify")
      .getElementsByTagName(
        "h2"
      )[0].innerHTML = `<i class="fa-brands fa-spotify"></i>&ensp;Nothing playing...`;
    return;
  }

  if (res.explicit === true) {
    document
      .getElementById("spotify")
      .getElementsByTagName(
        "h2"
      )[0].innerHTML = `<i class="fa-brands fa-spotify"></i>&ensp;Nothing playing...`;
    return;
  }

  document
    .getElementById("spotify")
    .getElementsByTagName(
      "h2"
    )[0].innerHTML = `<i class="fa-brands fa-spotify"></i>&ensp;<a href="${res.data.trackurl}">${res.data.track}</a> by ${res.data.artist}`;
}

async function consoleInformation() {
  console.log("%c🛑STOP🛑", "font-size: 30px");
  console.log(
    "%cThis website was specific developed for tysm.dev only.",
    "font-weight: bold; font-size: 30px"
  );
}

async function Intervals() {
  SpotifyNP();
  setInterval(Intervals, 60000);
}
