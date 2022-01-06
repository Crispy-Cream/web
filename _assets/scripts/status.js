async function getStatus() {
    let res = await fetch('https://api.lanyard.rest/v1/users/455139054464270345').then(res => res.json());
    switch (res.data.discord_status) {
        case "dnd": {
            document.getElementById('pfp').style['box-shadow'] = "0px 0px 9px #f04747";
            break;
        };
        case "online": {
            document.getElementById('pfp').style['box-shadow'] = "0px 0px 9px #43b581";
            break;
        };
        case "idle": {
            document.getElementById('pfp').style['box-shadow'] = "0px 0px 9px #faa61a";
            break;
        };
        case "offline": {
            document.getElementById('pfp').style['box-shadow'] = "0px 0px 9px #b59f8e";
            break;
        };
    }
}