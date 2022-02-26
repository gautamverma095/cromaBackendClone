const express = require("express");
router = express();
const prod = [
  {
    title: "Vivo V23 Pro 5G (256GB ROM, 12GB RAM, V2132, Stardust Black)",
    id: "229942",
    price: 43990.0,
    image:
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1641445057/Croma%20Assets/Communication/Mobiles/Images/246699_8_k8bhmm.png/mxw_1440,f_auto",
  },
  {
    title:
      "Croma Fire TV 80cm (32 Inch) HD Ready LED Smart TV (Alexa Voice Assistant Remote, CREL7364, Black)",
    id: "229941",
    price: 58990.0,
    image:
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605263642/Croma%20Assets/Communication/Mobiles/Images/8999511228446.png/mxw_1440,f_auto",
  },
  {
    title: "OnePlus Nord 2 5G (128GB ROM, 8GB RAM, DN2101, Blue Haze)",
    id: "229943",
    price: 29999.0,
    image:
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1627022121/Croma%20Assets/Communication/Mobiles/Images/240335_6_ospqym.png/mxw_1440,f_auto",
  },
  {
    title: "Apple MacBook Air M1 Chip macOS Big Sur Laptop ",
    id: "229944",
    price: 83900.0,
    image:
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1606585888/Croma%20Assets/Computers%20Peripherals/Laptop/Images/9009479057438.png/mxw_1440,f_auto",
  },
  {
    title:
      "Croma Fire TV 80cm (32 Inch) HD Ready LED Smart TV (Alexa Voice Assistant Remote, CREL7364, Black)",
    id: "229945",
    price: 13999,
    image:
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1631084878/Croma%20Assets/Entertainment/Television/Images/242944_e5jvij.png/mxw_1440,f_auto",
  },
];
router.get("/:id", async (req, res) => {
  if (req.params.id >= prod.length) return res.send("Envalid link");
  try {
    res.render("product", { prod: prod[req.params.id] });
  } catch (error) {
    res.send({ error: error.message });
  }
});

module.exports = router;
