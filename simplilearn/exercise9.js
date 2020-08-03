//Update navigation bar when scrolling:

//select all div containers of class section
var sections = document.querySelectorAll(".section");
console.log("all divs of class section stored in sections, an array of objects :");
console.log(sections);

//an empty js object/dict.
var sectionsDict = {};

//Loop through and print each div container stored in the sections variable.
sections.forEach(function(e){
  //grab every div's id (which I named as section1,2,3...) and position form top in pixels.
  console.log("div id, div y pos :");
  console.log(e.id, e.offsetTop);
  //Fill up the keyvalue pairs in the empty object created earlier.
  sectionsDict[e.id] = e.offsetTop;
});
console.log("sectionsDict:");
console.log(sectionsDict);

//Method 1:
// My Ameteur way of solving it:
window.onscroll = function(){
  //grab current scroll pos.
  var scrollPos2 = document.documentElement.scrollTop || document.body.scrollTop;

  switch(true){
    case (scrollPos2 >= 0 && scrollPos2 < sectionsDict.section2):
    console.log("in section 1");
    setNavActive("a1");
    break;
    case (scrollPos2 >= sectionsDict.section2 && scrollPos2 < sectionsDict.section3):
    console.log("in section 2");
    setNavActive("a2");
    break;
    case (scrollPos2 >= sectionsDict.section3 && scrollPos2 < sectionsDict.section4):
    console.log("in section 3");
    setNavActive("a3");
    break;
    case (scrollPos2 >= sectionsDict.section4 && scrollPos2 < sectionsDict.section5):
    console.log("in section 4");
    setNavActive("a4");
    break;
    case (scrollPos2 >= sectionsDict.section5 && scrollPos2 < sectionsDict.section6):
    console.log("in section 5");
    setNavActive("a5");
    break;
    case (scrollPos2 >= sectionsDict.section6):
    console.log("in section 6");
    setNavActive("a6");
    break;
  }
}
var navlinks = document.querySelectorAll("#nav ul li a");
console.log(navlinks);

function setNavActive(x){
  //loop through nav links and match for id and set the anchor tag's class as active.
  for(i in navlinks){
    if(x != navlinks[i].id){
      navlinks[i].className = "";
    }
    else {
      navlinks[i].className = "active";
    }
  }
}
//Anchor tags with active as class name will have a border styled on it.

//Method 2:
//Professional way of solving the same:
//fire off a function everytime user scrolls
// window.onscroll = function(){
//   // console.log("scrolling");
//
//   // get the page's y position from the top in pixels, either of whichever works.
//   var scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
//   //console.log(scrollPos);
//
//   for(i in sectionsDict){
//     //console.log(sectionsDict[i]);
//     //Check if a section's y pos is less than current scroll's y pos.
//     if(sectionsDict[i] <= scrollPos){
//       //locate for .active class and set it as empty
//       document.querySelector(".active").setAttribute("class","");
//       document.querySelector("a[href*="+i+"]").setAttribute("class","active");
//     }
//   }
// }
