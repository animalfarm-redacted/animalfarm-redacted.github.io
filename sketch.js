let dataText; //capitolo visualizzato
let dataChapter1; //carica json del capitolo 1
let dataChapter2; //carica json del capitolo 2
let dataChapter3;
let dataChapter4;
let dataChapter5;
let dataChapter6;
let dataChapter7;
let dataChapter8;
let dataChapter9;
let dataChapter10;

let dataPhotos;

var currentPage = 1; //indica la pagina corrente da visualizzare
var currentChapter = 1;
var currentTrigger = 0;
var topChapterSeen = 0;
var topPageSeen = 1;

var photoCommandments1;
var photoCommandments2;

var sound;

//utile tra un po'
let urlString = window.location.href;
let url = new URL(urlString);
console.log(urlString);
console.log(url);

function preload(){
  loadText();
  loadPhotos();
  loadSoundtrack();
}

function loadText() {
  dataChapter1 = loadJSON("assets/texts/chapter1.json");
  dataChapter2 = loadJSON("assets/texts/chapter2.json");
  dataChapter3 = loadJSON("assets/texts/chapter3.json");
  dataChapter4 = loadJSON("assets/texts/chapter4.json");
  dataChapter5 = loadJSON("assets/texts/chapter5.json");
  dataChapter6 = loadJSON("assets/texts/chapter6.json");
  dataChapter7 = loadJSON("assets/texts/chapter7.json");
  dataChapter8 = loadJSON("assets/texts/chapter8.json");
  dataChapter9 = loadJSON("assets/texts/chapter9.json");
  dataChapter10 = loadJSON("assets/texts/chapter10.json");

  dataPhotos = loadJSON("assets/texts/photos.json");
}

function loadPhotos() {
  photoCommandments1 = loadImage("assets/images/7comandamenti_1.png");
  photoCommandments2 = loadImage("assets/images/7comandamenti_2.png");
}

function loadSoundtrack() {
  sound = loadSound("assets/sounds/guida.mp3");
}

function setup() {
  noCanvas();
  dataText = dataChapter1;
  bookmark();
  showPhoto();
  document.getElementById("testo").innerHTML = dataText.pages[1].original;
}

//permessi di apertura capitoli

function allowChapter2() {
  let element = document.getElementById("openChapter2Button");
  element.classList.remove("notAvailableButton");
  element.classList.add("openChapterButton");

  if(topChapterSeen < 1) {
    topChapterSeen = 1;
  }
}

function allowChapter3() {
  let element = document.getElementById("openChapter3Button");
  element.classList.remove("notAvailableButton");
  element.classList.add("openChapterButton");

  if(topChapterSeen < 2) {
    topChapterSeen = 2; //il cap.3 apre con il 2 concluso, e così via
  }
}

function allowChapter4() {
  let element = document.getElementById("openChapter4Button");
  element.classList.remove("notAvailableButton");
  element.classList.add("openChapterButton");

  if(topChapterSeen < 3) {
    topChapterSeen = 3; //il cap.3 apre con il 2 concluso, e così via
  }
}

function allowChapter5() {
  let element = document.getElementById("openChapter5Button");
  element.classList.remove("notAvailableButton");
  element.classList.add("openChapterButton");

  if(topChapterSeen < 4) {
    topChapterSeen = 4; //il cap.3 apre con il 2 concluso, e così via
  }
}

function allowChapter6() {
  let element = document.getElementById("openChapter6Button");
  element.classList.remove("notAvailableButton");
  element.classList.add("openChapterButton");

  if(topChapterSeen < 5) {
    topChapterSeen = 5; //il cap.3 apre con il 2 concluso, e così via
  }
}

function allowChapter7() {
  let element = document.getElementById("openChapter7Button");
  element.classList.remove("notAvailableButton");
  element.classList.add("openChapterButton");

  if(topChapterSeen < 6) {
    topChapterSeen = 6; //il cap.3 apre con il 2 concluso, e così via
  }
}

function allowChapter8() {
  let element = document.getElementById("openChapter8Button");
  element.classList.remove("notAvailableButton");
  element.classList.add("openChapterButton");

  if(topChapterSeen < 7) {
    topChapterSeen = 7; //il cap.3 apre con il 2 concluso, e così via
  }
}

function allowChapter9() {
  let element = document.getElementById("openChapter9Button");
  element.classList.remove("notAvailableButton");
  element.classList.add("openChapterButton");

  if(topChapterSeen < 8) {
    topChapterSeen = 8; //il cap.3 apre con il 2 concluso, e così via
  }
}

function allowChapter10() {
  let element = document.getElementById("openChapter10Button");
  element.classList.remove("notAvailableButton");
  element.classList.add("openChapterButton");

  if(topChapterSeen < 9) {
    topChapterSeen = 9; //il cap.3 apre con il 2 concluso, e così via
  }
}

//funzioni apri capitolo

function openChapter1() {
  dataText = dataChapter1;
  currentChapter = 1;
  currentPage = 1;
  selectText();

  bookmark();
}

function openChapter2() {
  if (topChapterSeen > 0) {
    dataText = dataChapter2;
    currentChapter = 2;
    currentPage = 1;
    selectText();
  }

  bookmark();
}

function openChapter3() {
  if (topChapterSeen > 1) {
    dataText = dataChapter3;
    currentChapter = 3;
    currentPage = 1; //page, non relativo al capitolo
    selectText();
  }

  bookmark();
}

function openChapter4() {
  if (topChapterSeen > 2) {
    dataText = dataChapter4;
    currentChapter = 4;
    currentPage = 1;
    selectText();
  }

  bookmark();
}

function openChapter5() {
  if (topChapterSeen > 3) {
    dataText = dataChapter5;
    currentChapter = 5;
    currentPage = 1; //page, non relativo al capitolo
    selectText();
  }

  bookmark();
}

function openChapter6() {
  if (topChapterSeen > 4) {
    dataText = dataChapter6;
    currentChapter = 6;
    currentPage = 1; //page, non relativo al capitolo
    selectText();
  }

  bookmark();
}

function openChapter7() {
  if (topChapterSeen > 5) {
    dataText = dataChapter7;
    currentChapter = 7;
    currentPage = 1;
    selectText();
  }

  bookmark();
}

function openChapter8() {
  if (topChapterSeen > 6) {
    dataText = dataChapter8;
    currentChapter = 8;
    currentPage = 1; //page, non relativo al capitolo
    selectText();
  }

  bookmark();
}

function openChapter9() {
  if (topChapterSeen > 7) {
    dataText = dataChapter9;
    currentChapter = 9;
    currentPage = 1; //page, non relativo al capitolo
    selectText();
  }

  bookmark();
}

function openChapter10() {
  if (topChapterSeen > 8) {
    dataText = dataChapter10;
    currentChapter = 10;
    currentPage = 1;
    selectText();
  }

  bookmark();
}

//funzioni per tornare all'ultima pagina del capitolo precedente
function backToLast01() {
  dataText = dataChapter1;
  currentChapter = 1;
  bookmark();

  currentPage = 7;
  selectText();
}

function backToLast02() {
  dataText = dataChapter2;
  currentChapter = 2;
  bookmark();

  currentPage = 6;
  selectText();
}

function backToLast03() {
  dataText = dataChapter3;
  currentChapter = 3;
  bookmark();

  currentPage = 5;
  selectText();
}

function backToLast04() {
  dataText = dataChapter4;
  currentChapter = 4;
  bookmark();

  currentPage = 4;
  selectText();
}

function backToLast05() {
  dataText = dataChapter5;
  currentChapter = 5;
  bookmark();

  currentPage = 8;
  selectText();
}

function backToLast06() {
  dataText = dataChapter6;
  currentChapter = 6;
  bookmark();

  currentPage = 7;
  selectText();
}

function backToLast07() {
  dataText = dataChapter7;
  currentChapter = 7;
  bookmark();

  currentPage = 9;
  selectText();
}

function backToLast08() {
  dataText = dataChapter8;
  currentChapter = 8;
  bookmark();

  currentPage = 10;
  selectText();
}

function backToLast09() {
  dataText = dataChapter9;
  currentChapter = 9;
  bookmark();

  currentPage = 9;
  selectText();
}

//previousPage e nextPage per cambiare le pagine
function previousPage() {
    currentPage -= 1;
    selectText();
    // console.log("welcome to "+currentPage+" page");
}

function nextPage() {
    currentPage += 1;
    selectText();
    // console.log("welcome to "+currentPage+" page");
  }


//visualizzazione trigger
function selectText() {
  if(currentTrigger == 0) {
    document.getElementById("testo").innerHTML = dataText.pages[currentPage].original;
  } else if (currentTrigger == 1) {
    document.getElementById("testo").innerHTML = dataText.pages[currentPage].modified1;
  } else if (currentTrigger == 2) {
    document.getElementById("testo").innerHTML = dataText.pages[currentPage].modified2;
  } else if (currentTrigger == 3) {
    document.getElementById("testo").innerHTML = dataText.pages[currentPage].modified3;
  } else if (currentTrigger == 4) {
    document.getElementById("testo").innerHTML = dataText.pages[currentPage].modified4;
  } else if (currentTrigger == 5) {
    document.getElementById("testo").innerHTML = dataText.pages[currentPage].modified5;
  } else if (currentTrigger == 6) {
    document.getElementById("testo").innerHTML = dataText.pages[currentPage].modified6;
  } else if (currentTrigger == 7) {
    document.getElementById("testo").innerHTML = dataText.pages[currentPage].modified7;
  } else if (currentTrigger == 8) {
    document.getElementById("testo").innerHTML = dataText.pages[currentPage].modified8;
  } else if (currentTrigger == 9) {
    document.getElementById("testo").innerHTML = dataText.pages[currentPage].modified9;
  } else if (currentTrigger == 10) {
    document.getElementById("testo").innerHTML = dataText.pages[currentPage].modified10;
  } else if (currentTrigger == 11) {
    document.getElementById("testo").innerHTML = dataText.pages[currentPage].modified11;
  } else if (currentTrigger == 12) {
    document.getElementById("testo").innerHTML = dataText.pages[currentPage].modified12;
  } else if (currentTrigger == 13) {
    document.getElementById("testo").innerHTML = dataText.pages[currentPage].modified13;
  } else if (currentTrigger == 14) {
    document.getElementById("testo").innerHTML = dataText.pages[currentPage].modified14;
  } else if (currentTrigger == 15) {
    document.getElementById("testo").innerHTML = dataText.pages[currentPage].modified15;
  } else if (currentTrigger == 16) {
    document.getElementById("testo").innerHTML = dataText.pages[currentPage].modified16;
  } else if (currentTrigger == 17) {
    document.getElementById("testo").innerHTML = dataText.pages[currentPage].modified17;
  } else if (currentTrigger == 18) {
    document.getElementById("testo").innerHTML = dataText.pages[currentPage].modified18;
  } else {
    document.getElementById("testo").innerHTML = dataText.pages[currentPage].modified19;
  }

  //per last Seen
  let c = currentChapter;
  let p = currentPage;
  let sum = (c*100)+p;
  if(topPageSeen < sum) {
    topPageSeen = sum;
  }

  //per foto a lato
  showPhoto();
}

function lastSeen() {
  currentChapter = topChapterSeen+1;
  if(currentChapter==1) {
    dataText = dataChapter1;
  } else if (currentChapter==2) {
    dataText = dataChapter2;
  } else if (currentChapter==3) {
    dataText = dataChapter3;
  } else if (currentChapter==4) {
    dataText = dataChapter4;
  } else if (currentChapter==5) {
    dataText = dataChapter5;
  } else if (currentChapter==6) {
    dataText = dataChapter6;
  } else if (currentChapter==7) {
    dataText = dataChapter7;
  }else if (currentChapter==8) {
    dataText = dataChapter8;
  }else if (currentChapter==9) {
    dataText = dataChapter9;
  }else if (currentChapter==10) {
    dataText = dataChapter10;
  }
  bookmark();

  currentPage = topPageSeen-(currentChapter*100);
  selectText();
}

//funzioni triggerX()
function trigger1() {
  if(currentTrigger < 1) {
    currentTrigger = 1;
    console.log("current trigger = "+currentTrigger);
  }
}

function trigger2() {
  if(currentTrigger < 2) {
    currentTrigger = 2;
    console.log("current trigger = "+currentTrigger);
  }
}

function trigger3() {
  if(currentTrigger < 3) {
    currentTrigger = 3;
    console.log("current trigger = "+currentTrigger);
  }
}

function trigger4() {
  if(currentTrigger < 4) {
    currentTrigger = 4;
    console.log("current trigger = "+currentTrigger);
  }
}

function trigger5() {
  if(currentTrigger < 5) {
    currentTrigger = 5;
    console.log("current trigger = "+currentTrigger);
  }
}

function trigger6() {
  if(currentTrigger < 6) {
    currentTrigger = 6;
    console.log("current trigger = "+currentTrigger);
  }
}

function trigger7() {
  if(currentTrigger < 7) {
    currentTrigger = 7;
    console.log("current trigger = "+currentTrigger);
  }
}

function trigger8() {
  if(currentTrigger < 8) {
    currentTrigger = 8;
    console.log("current trigger = "+currentTrigger);
  }
}

function trigger9() {
  if(currentTrigger < 9) {
    currentTrigger = 9;
    console.log("current trigger = "+currentTrigger);
  }
}

function trigger10() {
  if(currentTrigger < 10) {
    currentTrigger = 10;
    console.log("current trigger = "+currentTrigger);
  }
}

function trigger11() {
  if(currentTrigger < 11) {
    currentTrigger = 11;
    console.log("current trigger = "+currentTrigger);
  }
}

function trigger12() {
  if(currentTrigger < 12) {
    currentTrigger = 12;
    console.log("current trigger = "+currentTrigger);
  }
}

function trigger13() {
  if(currentTrigger < 13) {
    currentTrigger = 13;
    console.log("current trigger = "+currentTrigger);
  }
}

function trigger14() {
  if(currentTrigger < 14) {
    currentTrigger = 14;
    console.log("current trigger = "+currentTrigger);
  }
}

function trigger15() {
  if(currentTrigger < 15) {
    currentTrigger = 15;
    console.log("current trigger = "+currentTrigger);
  }
}

function trigger16() {
  if(currentTrigger < 16) {
    currentTrigger = 16;
    console.log("current trigger = "+currentTrigger);
  }
}

function trigger17() {
  if(currentTrigger < 17) {
    currentTrigger = 17;
    console.log("current trigger = "+currentTrigger);
  }
}

function trigger18() {
  if(currentTrigger < 18) {
    currentTrigger = 18;
    console.log("current trigger = "+currentTrigger);
  }
}

function trigger19() {
  if(currentTrigger < 19) {
    currentTrigger = 19;
    console.log("current trigger = "+currentTrigger);
  }
}

//reindirizzamento simile a link
function change1() {
  dataText = dataChapter5;
  currentChapter = 5;
  bookmark();

  currentPage = 2;
  selectText();
}

function change2() {
  dataText = dataChapter1;
  currentChapter = 1;
  bookmark();

  currentPage = 5;
  selectText();
}

function change3uno() {
  dataText = dataChapter1;
  currentChapter = 1;
  bookmark();

  currentPage = 5;
  selectText();
}

function change3due() {
  dataText = dataChapter2;
  currentChapter = 2;
  bookmark();

  currentPage = 6;
  selectText();
}

function change4uno() {
  dataText = dataChapter4;
  currentChapter = 4;
  bookmark();

  currentPage = 4;
  selectText();
}

function change4due() {
  dataText = dataChapter4;
  currentChapter = 4;
  bookmark();

  currentPage = 3;
  selectText();
}

function change4tre() {
  dataText = dataChapter2;
  currentChapter = 2;
  bookmark();

  currentPage = 1;
  selectText();
}

function change5() {
  dataText = dataChapter1;
  currentChapter = 1;
  bookmark();

  currentPage = 5;
  selectText();
}

function change6() {
  dataText = dataChapter4;
  currentChapter = 4;
  bookmark();

  currentPage = 4;
  selectText();
}

function change7() {
  dataText = dataChapter2;
  currentChapter = 2;
  bookmark();

  currentPage = 6;
  selectText();
}

//verificareee
function change8() {
  dataText = dataChapter1;
  currentChapter = 1;
  bookmark();

  currentPage = 5;
  selectText();
}

function change9() {
  dataText = dataChapter2;
  currentChapter = 2;
  bookmark();

  currentPage = 2;
  selectText();
}

function change10() {
  dataText = dataChapter2;
  currentChapter = 2;
  bookmark();

  currentPage = 6;
  selectText();
}

function change11uno() {
  dataText = dataChapter7;
  currentChapter = 7;
  bookmark();

  currentPage = 4;
  selectText();
}

function change11due() {
  dataText = dataChapter7;
  currentChapter = 7;
  bookmark();

  currentPage = 5;
  selectText();
}

function change11tre() {
  dataText = dataChapter7;
  currentChapter = 7;
  bookmark();

  currentPage = 5;
  selectText();
}

function change11quattro() {
  dataText = dataChapter2;
  currentChapter = 2;
  bookmark();

  currentPage = 6;
  selectText();
}

function change12uno() {
  dataText = dataChapter9;
  currentChapter = 9;
  bookmark();

  currentPage = 8;
  selectText();
}

function change12due() {
  dataText = dataChapter9;
  currentChapter = 9;
  bookmark();

  currentPage = 7;
  selectText();
}

function change13() {
  dataText = dataChapter2;
  currentChapter = 2;
  bookmark();

  currentPage = 6;
  selectText();
}

function change14() {
  dataText = dataChapter5;
  currentChapter = 5;
  bookmark();

  currentPage = 2;
  selectText();
}

function change15() {
  dataText = dataChapter2;
  currentChapter = 2;
  bookmark();

  currentPage = 6;
  selectText();
}

function change16() {
  dataText = dataChapter3;
  currentChapter = 3;
  bookmark();

  currentPage = 4;
  selectText();
}

function change17uno() {
  dataText = dataChapter2;
  currentChapter = 2;
  bookmark();

  currentPage = 6;
  selectText();
}

function change17due() {
  dataText = dataChapter2;
  currentChapter = 2;
  bookmark();

  currentPage = 4;
  selectText();
}

function change18uno() {
  dataText = dataChapter1;
  currentChapter = 1;
  bookmark();

  currentPage = 2;
  selectText();
}

function change18due() {
  dataText = dataChapter4;
  currentChapter = 4;
  bookmark();

  currentPage = 4;
  selectText();
}

function change18tre() {
  dataText = dataChapter5;
  currentChapter = 5;
  bookmark();

  currentPage = 7;
  selectText();
}

function change19() {
  dataText = dataChapter2;
  currentChapter = 2;
  bookmark();

  currentPage = 5;
  selectText();
}

function changeTitle() {
  document.getElementById("prima-colonna").innerHTML = "<div><mark>MANOR</mark> FARM</div> <div id=\"credits\"><a href=\"credits.html\" target=\"_blank\">Info</a></div>";
}

//altro
function bookmark() {
  let element1 = document.getElementById("bookmark1");
  let element2 = document.getElementById("bookmark2");
  let element3 = document.getElementById("bookmark3");
  let element4 = document.getElementById("bookmark4");
  let element5 = document.getElementById("bookmark5");
  let element6 = document.getElementById("bookmark6");
  let element7 = document.getElementById("bookmark7");
  let element8 = document.getElementById("bookmark8");
  let element9 = document.getElementById("bookmark9");
  let element10 = document.getElementById("bookmark10");

  if(currentChapter == 1) {
    element1.classList.remove("hiddenBookmark");
    element1.classList.add("bookmark");

    element2.classList.remove("bookmark");
    element2.classList.add("hiddenBookmark");
    element3.classList.remove("bookmark");
    element3.classList.add("hiddenBookmark");
    element4.classList.remove("bookmark");
    element4.classList.add("hiddenBookmark");
    element5.classList.remove("bookmark");
    element5.classList.add("hiddenBookmark");
    element6.classList.remove("bookmark");
    element6.classList.add("hiddenBookmark");
    element7.classList.remove("bookmark");
    element7.classList.add("hiddenBookmark");
    element8.classList.remove("bookmark");
    element8.classList.add("hiddenBookmark");
    element9.classList.remove("bookmark");
    element9.classList.add("hiddenBookmark");
    element10.classList.remove("bookmark");
    element10.classList.add("hiddenBookmark");

  } else if(currentChapter == 2) {
    element2.classList.remove("hiddenBookmark");
    element2.classList.add("bookmark");

    element1.classList.remove("bookmark");
    element1.classList.add("hiddenBookmark");
    element3.classList.remove("bookmark");
    element3.classList.add("hiddenBookmark");
    element4.classList.remove("bookmark");
    element4.classList.add("hiddenBookmark");
    element5.classList.remove("bookmark");
    element5.classList.add("hiddenBookmark");
    element6.classList.remove("bookmark");
    element6.classList.add("hiddenBookmark");
    element7.classList.remove("bookmark");
    element7.classList.add("hiddenBookmark");
    element8.classList.remove("bookmark");
    element8.classList.add("hiddenBookmark");
    element9.classList.remove("bookmark");
    element9.classList.add("hiddenBookmark");
    element10.classList.remove("bookmark");
    element10.classList.add("hiddenBookmark");

  } else if(currentChapter == 3) {
    element3.classList.remove("hiddenBookmark");
    element3.classList.add("bookmark");

    element1.classList.remove("bookmark");
    element1.classList.add("hiddenBookmark");
    element2.classList.remove("bookmark");
    element2.classList.add("hiddenBookmark");
    element4.classList.remove("bookmark");
    element4.classList.add("hiddenBookmark");
    element5.classList.remove("bookmark");
    element5.classList.add("hiddenBookmark");
    element6.classList.remove("bookmark");
    element6.classList.add("hiddenBookmark");
    element7.classList.remove("bookmark");
    element7.classList.add("hiddenBookmark");
    element8.classList.remove("bookmark");
    element8.classList.add("hiddenBookmark");
    element9.classList.remove("bookmark");
    element9.classList.add("hiddenBookmark");
    element10.classList.remove("bookmark");
    element10.classList.add("hiddenBookmark");

  } else if(currentChapter == 4) {
    element4.classList.remove("hiddenBookmark");
    element4.classList.add("bookmark");

    element1.classList.remove("bookmark");
    element1.classList.add("hiddenBookmark");
    element2.classList.remove("bookmark");
    element2.classList.add("hiddenBookmark");
    element3.classList.remove("bookmark");
    element3.classList.add("hiddenBookmark");
    element5.classList.remove("bookmark");
    element5.classList.add("hiddenBookmark");
    element6.classList.remove("bookmark");
    element6.classList.add("hiddenBookmark");
    element7.classList.remove("bookmark");
    element7.classList.add("hiddenBookmark");
    element8.classList.remove("bookmark");
    element8.classList.add("hiddenBookmark");
    element9.classList.remove("bookmark");
    element9.classList.add("hiddenBookmark");
    element10.classList.remove("bookmark");
    element10.classList.add("hiddenBookmark");

  } else if(currentChapter == 5) {
    element5.classList.remove("hiddenBookmark");
    element5.classList.add("bookmark");

    element1.classList.remove("bookmark");
    element1.classList.add("hiddenBookmark");
    element2.classList.remove("bookmark");
    element2.classList.add("hiddenBookmark");
    element3.classList.remove("bookmark");
    element3.classList.add("hiddenBookmark");
    element4.classList.remove("bookmark");
    element4.classList.add("hiddenBookmark");
    element6.classList.remove("bookmark");
    element6.classList.add("hiddenBookmark");
    element7.classList.remove("bookmark");
    element7.classList.add("hiddenBookmark");
    element8.classList.remove("bookmark");
    element8.classList.add("hiddenBookmark");
    element9.classList.remove("bookmark");
    element9.classList.add("hiddenBookmark");
    element10.classList.remove("bookmark");
    element10.classList.add("hiddenBookmark");

  } else if(currentChapter == 6) {
    element6.classList.remove("hiddenBookmark");
    element6.classList.add("bookmark");

    element1.classList.remove("bookmark");
    element1.classList.add("hiddenBookmark");
    element2.classList.remove("bookmark");
    element2.classList.add("hiddenBookmark");
    element3.classList.remove("bookmark");
    element3.classList.add("hiddenBookmark");
    element4.classList.remove("bookmark");
    element4.classList.add("hiddenBookmark");
    element5.classList.remove("bookmark");
    element5.classList.add("hiddenBookmark");
    element7.classList.remove("bookmark");
    element7.classList.add("hiddenBookmark");
    element8.classList.remove("bookmark");
    element8.classList.add("hiddenBookmark");
    element9.classList.remove("bookmark");
    element9.classList.add("hiddenBookmark");
    element10.classList.remove("bookmark");
    element10.classList.add("hiddenBookmark");

  } else if(currentChapter == 7) {
    element7.classList.remove("hiddenBookmark");
    element7.classList.add("bookmark");

    element1.classList.remove("bookmark");
    element1.classList.add("hiddenBookmark");
    element2.classList.remove("bookmark");
    element2.classList.add("hiddenBookmark");
    element3.classList.remove("bookmark");
    element3.classList.add("hiddenBookmark");
    element4.classList.remove("bookmark");
    element4.classList.add("hiddenBookmark");
    element5.classList.remove("bookmark");
    element5.classList.add("hiddenBookmark");
    element6.classList.remove("bookmark");
    element6.classList.add("hiddenBookmark");
    element8.classList.remove("bookmark");
    element8.classList.add("hiddenBookmark");
    element9.classList.remove("bookmark");
    element9.classList.add("hiddenBookmark");
    element10.classList.remove("bookmark");
    element10.classList.add("hiddenBookmark");

  } else if(currentChapter == 8) {
    element8.classList.remove("hiddenBookmark");
    element8.classList.add("bookmark");

    element1.classList.remove("bookmark");
    element1.classList.add("hiddenBookmark");
    element2.classList.remove("bookmark");
    element2.classList.add("hiddenBookmark");
    element3.classList.remove("bookmark");
    element3.classList.add("hiddenBookmark");
    element4.classList.remove("bookmark");
    element4.classList.add("hiddenBookmark");
    element5.classList.remove("bookmark");
    element5.classList.add("hiddenBookmark");
    element6.classList.remove("bookmark");
    element6.classList.add("hiddenBookmark");
    element7.classList.remove("bookmark");
    element7.classList.add("hiddenBookmark");
    element9.classList.remove("bookmark");
    element9.classList.add("hiddenBookmark");
    element10.classList.remove("bookmark");
    element10.classList.add("hiddenBookmark");

  } else if(currentChapter == 9) {
    element9.classList.remove("hiddenBookmark");
    element9.classList.add("bookmark");

    element1.classList.remove("bookmark");
    element1.classList.add("hiddenBookmark");
    element2.classList.remove("bookmark");
    element2.classList.add("hiddenBookmark");
    element3.classList.remove("bookmark");
    element3.classList.add("hiddenBookmark");
    element4.classList.remove("bookmark");
    element4.classList.add("hiddenBookmark");
    element5.classList.remove("bookmark");
    element5.classList.add("hiddenBookmark");
    element6.classList.remove("bookmark");
    element6.classList.add("hiddenBookmark");
    element7.classList.remove("bookmark");
    element7.classList.add("hiddenBookmark");
    element8.classList.remove("bookmark");
    element8.classList.add("hiddenBookmark");
    element10.classList.remove("bookmark");
    element10.classList.add("hiddenBookmark");

  } else if(currentChapter == 10) {
    element10.classList.remove("hiddenBookmark");
    element10.classList.add("bookmark");

    element1.classList.remove("bookmark");
    element1.classList.add("hiddenBookmark");
    element2.classList.remove("bookmark");
    element2.classList.add("hiddenBookmark");
    element3.classList.remove("bookmark");
    element3.classList.add("hiddenBookmark");
    element4.classList.remove("bookmark");
    element4.classList.add("hiddenBookmark");
    element5.classList.remove("bookmark");
    element5.classList.add("hiddenBookmark");
    element6.classList.remove("bookmark");
    element6.classList.add("hiddenBookmark");
    element7.classList.remove("bookmark");
    element7.classList.add("hiddenBookmark");
    element8.classList.remove("bookmark");
    element8.classList.add("hiddenBookmark");
    element9.classList.remove("bookmark");
    element9.classList.add("hiddenBookmark");

  }

}

//immagini

function showPhoto() {
  if(currentChapter == 1 && currentPage == 1) {
      changePhoto11();
  } else if(currentChapter == 2 && currentPage == 1) {
      changePhoto21();
  } else if(currentChapter == 2 && currentPage == 4) {
      changePhoto24();
  } else if(currentChapter == 2 && currentPage == 6) {
      changePhotoCommandments();
  } else if(currentChapter == 3 && currentPage == 1) {
      changePhoto31();
  } else if(currentChapter == 3 && currentPage == 5) {
      changePhoto35();
  } else if(currentChapter == 5 && currentPage == 1) {
      changePhoto51();
  } else if(currentChapter == 7 && currentPage == 6) {
      changePhoto76();
  } else if(currentChapter == 8 && currentPage == 4) {
      changePhoto84();
  } else if(currentChapter == 10 && currentPage == 4) {
      changePhoto104();
  } else {
      deletePhoto();
  }
}

function deletePhoto() {
  document.getElementById("photo").innerHTML = dataPhotos.photos[0].zero;
}

function changePhoto11() {
  document.getElementById("photo").innerHTML = dataPhotos.photos[0].one;
}

function changePhoto21() {
  document.getElementById("photo").innerHTML = dataPhotos.photos[0].eight;
}

function changePhoto24() {
  document.getElementById("photo").innerHTML = dataPhotos.photos[0].eleven;
}

function changePhoto31() {
  document.getElementById("photo").innerHTML = dataPhotos.photos[0].fourteen;
}

function changePhoto35() {
  document.getElementById("photo").innerHTML = dataPhotos.photos[0].eighteen;
}

function changePhoto51() {
  document.getElementById("photo").innerHTML = dataPhotos.photos[0].twentythree;
}

function changePhoto76() {
  document.getElementById("photo").innerHTML = dataPhotos.photos[0].fourtythree;
}

function changePhoto84() {
  document.getElementById("photo").innerHTML = dataPhotos.photos[0].fifty;
}

function changePhoto104() {
  document.getElementById("photo").innerHTML = dataPhotos.photos[0].sixtynine;
}

function changePhotoCommandments() {
  if(currentTrigger < 3) {
      document.getElementById("photo").innerHTML = dataPhotos.photos[0].comandamenti0;
  } else if(currentTrigger < 5) {
      document.getElementById("photo").innerHTML = dataPhotos.photos[0].comandamenti3;
  } else if(currentTrigger < 7) {
      document.getElementById("photo").innerHTML = dataPhotos.photos[0].comandamenti5;
  } else if(currentTrigger < 10) {
      document.getElementById("photo").innerHTML = dataPhotos.photos[0].comandamenti7;
  } else if(currentTrigger < 15) {
      document.getElementById("photo").innerHTML = dataPhotos.photos[0].comandamenti10;
  } else if(currentTrigger < 17) {
      document.getElementById("photo").innerHTML = dataPhotos.photos[0].comandamenti15;
  } else {
      document.getElementById("photo").innerHTML = dataPhotos.photos[0].comandamenti17;
  }
}

//suoni
function playSound() {
  // sound.play();
  console.log();
}
