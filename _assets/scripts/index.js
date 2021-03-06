async function getStatus() {
  let res = await fetch(
    "https://api.lanyard.rest/v1/users/455139054464270345"
  ).then((res) => res.json());

  if (
    `https://cdn.discordapp.com/avatars/455139054464270345/${res.data.discord_user.avatar}.webp?size=4096` !=
    "https://cdn.discordapp.com/avatars/455139054464270345/74d4e3b043c3b1936144106a4c8cbf8c.webp?size=4096"
  )
    document.getElementById("pfp").style[
      "background-image"
    ] = `url("https://cdn.discordapp.com/avatars/455139054464270345/${res.data.discord_user.avatar}.webp?size=4096")`;

  CurrentStatus(res.data.activities[0]);

  switch (res.data.discord_status) {
    case "dnd": {
      document.documentElement.style.setProperty("--currentStatus", "#f04747");
      break;
    }
    case "online": {
      document.documentElement.style.setProperty("--currentStatus", "#43b581");
      break;
    }
    case "idle": {
      document.documentElement.style.setProperty("--currentStatus", "#faa61a");
      break;
    }
    case "offline": {
      document.documentElement.style.setProperty("--currentStatus", "#707b88");
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
  let res = await fetch("https://spotify.tysm.dev/now-playing").then((res) => res.json());

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
  console.log("%c????STOP????", "font-size: 30px");
  console.log(
    "%cThis website was specific developed for tysm.dev only.",
    "font-weight: bold; font-size: 30px"
  );
}

async function Intervals() {
  SpotifyNP();
  getStatus();
  setInterval(Intervals, 60000);
}
