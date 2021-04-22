import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Beyond Clouds",
      artist: "Saib",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/73c3f09a55221100b520fa131f14e2b09c7f4a81-1024x1024.jpg",
      id: uuidv4(),
      active: "true",
      color: ["#E5988F", "##ABBACD"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=6770",
    },
    {
      name: "Takin' You for a Ride",
      artist: "Pandrezz",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/73c3f09a55221100b520fa131f14e2b09c7f4a81-1024x1024.jpg",
      id: uuidv4(),
      active: "false",
      color: ["#E5988F", "##ABBACD"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=368",
    },
    {
      name: "Sundays",
      artist: "Aso",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/73c3f09a55221100b520fa131f14e2b09c7f4a81-1024x1024.jpg",
      id: uuidv4(),
      active: "false",
      color: ["#E5988F", "##ABBACD"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=324",
    },
    {
      name: "Coral Dreams",
      artist: "Saib",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/385d44fc6335bf676b30be524bcdfd7d640716a4-1024x1024.jpg",
      id: uuidv4(),
      active: "false",
      color: ["#467CB0", "#E1C3BE"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=1340",
    },
    {
      name: "Roses n Flames",
      artist: "C Y G N",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",
      id: uuidv4(),
      active: "false",
      color: ["#BA62CD", "#33274F"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=14984",
    },
    {
      name: "Rêverie",
      artist: "ØDYSSEE",
      cover:
        "https://uploads-ssl.webflow.com/5fc4bca9bd65e8f2bf87f576/605072dd8914772a1df825a9_ow9bl5athaeho9m.jpg",
      id: uuidv4(),
      active: "false",
      color: ["#31A099", "#FEEBC0"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12163",
    },
  ];
}

export default chillHop;
