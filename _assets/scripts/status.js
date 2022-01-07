async function getStatus() {
  let res = await fetch(
    "https://api.lanyard.rest/v1/users/455139054464270345"
  ).then((res) => res.json());
  if (res.data.listening_to_spotify === true) nowPlaying(res);
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

async function nowPlaying(res) {
  document
    .getElementById("spotify")
    .getElementsByTagName(
      "h2"
    )[0].innerHTML = `<i class="fa-duotone fa-headphones"></i>&ensp;<a href="https://open.spotify.com/track/${res.data.spotify.track_id}">${res.data.spotify.song}</a> by ${res.data.spotify.artist}`;
}
