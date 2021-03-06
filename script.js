

var myJSON = [
  { "influencer": "PewDiePie",
    "Real Name": "Felix Arvid Ulf Kjellberg",
    "Height": "5ft 9in",
    "Birthday": "October 24, 1989 (age 30)",
    "Birthplace": "Gothenburg, Sweden",
    "Residence": "Brighton, England",
    "Spouse": "Marzia Bisognin (together since 2011)",
    "Genre": "Let's Play, Vlog, Comedy, Satire",
    "Total Views": "19.9 Billion+",
    "Subscribers": "104 Million+",
    "Channel Url": "https://www.youtube.com/user/PewDiePie",
    "Twitter":"https://twitter.com/pewdiepie?lang=en",
    "IG":"https://www.instagram.com/pewdiepie/?hl=en",
  },
  {
    "influencer": "Jeffree Star",
    "Real Name": "Jeffrey Lynn Steininger Jr.",
    "Height": "6ft 1in",
    "Birthday": "Novemebr 15, 1985 (age 35)",
    "Birthplace": "Los Angeles, CA",
    "Residence": "Los Angeles, CA",
    "Spouse":"single",
    "Genre":"Vlog, Makeup, Beauty",
    "Total Views": "2.16 Billion+",
    "Subscribers": "18.2 Million+",
    "Channel URL": "https://www.youtube.com/channel/UCkvK_5omS-42Ovgah8KRKtg",
    "Twitter": "https://twitter.com/JeffreeStar",
    "IG":"https://www.instagram.com/jeffreestar/?hl=en",
  },
  {
    "influencer": "Shameless Maya",
    "Real Name": "Maya Washington",
    "Height": "5ft 4in",
    "Birthday": "May 20, 1982 (age 37)",
    "Birthplace": "Toronto, Canada",
    "Residence": "Los Angeles, CA",
    "Spouse": "not married",
    "Genre": "Vlog, Tech, Experimental, Beauty",
    "Total Views": "",
    "Subscribers":"1.1 Million+",
    "Channel URL": "https://www.youtube.com/user/shamelessmaya",
    "Twitter":"https://twitter.com/mayasworld?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
    "IG":"https://www.instagram.com/mayasworld/?hl=en",
  },
  {
    "Influencer":"Shane Dawson",
    "Real Name": "Shane Lee Yaw",
    "Height": "6ft",
    "Birthday": "July 19, 1988 (age 31)",
    "Birthplace": "Long Beach, CA",
    "Residence" : "Calabasas, CA",
    "Spouse": "Ryland Adams (engaged)",
    "Genre": "Docuseries, Vlogs, Sketch, Comedy, Beauty",
    "Total Views": "5.58 Billion+ (Shane), 1.07 Billion+ (ShaneDawsonTV), 57.5 Million+ (ShaneGlossin)",
    "Subscribers": "23.3 Million+ (Shane), 8.41 million+ (ShaneDawsonTV), 3.74 Million+ (Shane Glossin)",
    "Channel URL1": "https://www.youtube.com/user/shane",
    "Channel URL2": "https://www.youtube.com/user/ShaneDawsonTV",
    "Channel URL3": "https://www.youtube.com/channel/UCAVojJ1k03GZzjSbdXXunkw",
    "Twitter": "https://twitter.com/shanedawson",
    "IG": "https://www.instagram.com/shanedawson/?hl=en",
  },
  {
    "Influencer": "MyLifeAsEva",
    "height": "5ft 6in",
    "Real Name": "Eva Marisol Gutowski",
    "Birthday": "July 29, 1994 (age 25)",
    "Birthplace": "Brea, CA",
    "Residence": "Brea, CA",
    "Spouse": "Adam Bartoshesky(dating not married)",
    "Genre": "Beauty, Fashion, Comedy, Lifestyle",
    "Total Views": "1.22 Billion Views",
    "Subscribers": "11 Million",
    "Channel URL": "https://www.youtube.com/user/mylifeaseva?app=desktop",
    "Twitter": "https://twitter.com/lifeaseva?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
    "IG": "https://www.instagram.com/mylifeaseva/?hl=en",
}
]

for (var i = 0; i < myJSON.length; i++){
  makeElement(myJSON[i]);
}

function makeElement(incomingJson){
  if(window.location.pathname == "documents/introtoweb/influencers/index.html"){
    var div = document.getElementsByClassName('place11');
  // let newElement= document.createElement('DIV');
  // newElement.classList.add('place11');

  let newimg = document.createElement('IMG');
  newimg.src="infobox-01.png";
  newimg.classList="infosize";
  div.appendChild(newimg);


      let newp = document.createElement('P');
      newp.classList.add('place10');
      newp.innerHTML = incomingJSON['influencer'];
      div.appendChild(newp);

      let newmark = document.createElement('MARK');
      newmark.classList.add('Pewcolor2');
      newp.appendChild(newmark);

  }

}
