async function getStatus() {
  let res = await fetch(
    "https://api.lanyard.rest/v1/users/455139054464270345"
  ).then((res) => res.json());

  CurrentStatus(res.data.activities[0]);

  switch (res.data.discord_status) {
    case "dnd": {
      document.getElementById("pfp").style["box-shadow"] =
        "0px 0px 9px #f04747";
      break;
    }
    case "online": {
      document.getElementById("pfp").style["box-shadow"] =
        "0px 0px 9px #43b581";
      break;
    }
    case "idle": {
      document.getElementById("pfp").style["box-shadow"] =
        "0px 0px 9px #faa61a";
      break;
    }
    case "offline": {
      document.getElementById("pfp").style["box-shadow"] =
        "0px 0px 9px #707b88"; // #b59f8e
      break;
    }
  }
}

async function CurrentStatus(data) {
  if (data === undefined) {
    document
      .getElementById("centered")
      .getElementsByTagName(
        "p"
      )[0].innerHTML = `<i class="fa-duotone fa-rocket-launch"></i>&ensp;tysm.dev/github`;
    return;
  } else if (data.id !== "custom") {
    document
      .getElementById("centered")
      .getElementsByTagName(
        "p"
      )[0].innerHTML = `<i class="fa-duotone fa-rocket-launch"></i>&ensp;tysm.dev/github`;
    return;
  }

  document
    .getElementById("centered")
    .getElementsByTagName(
      "p"
    )[0].innerHTML = `<i class="fa-brands fa-discord"></i>&ensp;${data.state}`;
}

async function SpotifyNP() {
  let res = await fetch("https://spotify.tysm.dev/now-playingjson").then(
    (res) => res.json()
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
    )[0].innerHTML = `<i class="fa-brands fa-spotify"></i>&ensp;<a href="${res.trackurl.spotify}">${res.track}</a> by ${res.artist}`;
}

async function consoleInformation() {
  console.log("%c🛑STOP🛑", "font-size: 30px");
  console.log(
    "%cThis website was specific developed for tysm.dev only.",
    "font-weight: bold; font-size: 30px"
  );
}

async function Intervals() {
  getStatus();
  //SpotifyNP(); ! Removed due to rate limits
  consoleInformation();
  setInterval(Intervals, 50000);
}
