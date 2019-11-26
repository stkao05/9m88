const https = require("https")
const fs = require("fs")
const csv = require("csvtojson")

const SITE_DATA_PATH = "./src/site_data.json"
const DEFAULT_DATA = {
  links: {
    instagram: "https://www.instagram.com/9m88/?hl=zh-tw",
    facebook: "https://www.facebook.com/9m88baba/",
    youtube: "https://www.youtube.com/channel/UCo95y8CD2JpOR5eePxB1a7w",
    email: "mailto:9m88baba@gmail.com",
  },
  album_songs: [
    "01 Intro - She Is",
    "02 平庸之上 Beyond Mediocrity",
    "03 最高品質靜悄悄 Airplane Mode",
    "04 Aim High",
    "05 浪費時間 Waste Of Time",
    "06 廚餘戀人 Leftlovers",
    "07 愛情雨 Love Rain",
    "08 九頭身日奈 Nine Head Hinano",
    "09 Inner",
    "10 如果可以 If I Could",
  ],
  tours: [
    {
      time: "09 October 2019",
      venue: "The Wall Live House 這牆音樂藝文展演空間",
      location: "Taipei, Taiwan",
    },
    {
      time: "19 October 2019",
      venue: "Pepsi Center",
      location: "Denver, CO",
    },
    {
      time: "01 November 2019",
      venue: "EagleBank Arena",
      location: "Fairfax, VA",
    },
  ],
}

// configuration
const SHEET_KEY = "1JKMsuVMrNNFBKc6x4ob8WG1bCwJ_GF5dUUmOioqX8x8"
const TOUR_CSV_PATH = "./.tmp/tour.csv"
const sheetURL = `https://docs.google.com/spreadsheets/d/${SHEET_KEY}/export?format=csv&gid=0`

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest)
    const request = https.get(url, function(response) {
      if (response.statusCode !== 200) {
        reject(response.statusCode)
      } else {
        response.pipe(file)
      }
    })

    file.on("finish", resolve)
    file.on("error", reject)
  })
}

const writeToFile = (stringData, dest) => {
  return new Promise((resolve, reject) => {
    const ws = fs.createWriteStream(dest)
    ws.once("open", function(fd) {
      ws.write(stringData)
      ws.end()
    })

    ws.on("finish", resolve)
    ws.on("error", reject)
  })
}

const checkFields = tours => {
  if (tours.find(t => !t.time || !t.venue || !t.location)) {
    throw new Error(
      "Expect csv file should have the header defined: time, venue, location."
    )
  }
}

const createDataJson = () => {
  return csv()
    .fromFile(TOUR_CSV_PATH)
    .then(tours => {
      checkFields(tours)

      const siteData = { ...DEFAULT_DATA, tours }
      const dataJson = JSON.stringify(siteData, null, 2)

      writeToFile(dataJson, SITE_DATA_PATH)
    })
}

const main = () => {
  if (!fs.existsSync("./.tmp")) {
    fs.mkdirSync("./.tmp")
  }

  download(sheetURL, TOUR_CSV_PATH)
    .then(createDataJson)
    .catch(console.error)
}

main()
