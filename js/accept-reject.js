var names = [
  "Carl Grimes",
  "Tenth Doctor",
  "Jennifer Lawrence",
  "Kim Kardashian",
  "Klaus Heisler",
  "Bob the Minion",
  "Barack Obama",
  "Common Pepe",
  "John Rambo",
  "Rick Sanchez",
  "Shia LaBeouf"
];

var pics = [
  "profiles/carl",
  "profiles/davidtennant",
  "profiles/jenlaw",
  "profiles/kimkardash",
  "profiles/klaus",
  "profiles/minion",
  "profiles/obama",
  "profiles/pepe",
  "profiles/rambo",
  "profiles/rick",
  "profiles/shia"
]

var heights = [
  "5\x274\x22",
  "6\x271\x22",
  "5\x279\x22",
  "5\x273\x22",
  "1.5\x22",
  "2\x22",
  "6\x271\x22",
  "3.5\x22",
  "5\x2710\x22",
  "6\x272\x22",
  "5\x279\x22",
]

var weights = [
  "120 lbs",
  "161 lbs",
  "139 lbs",
  "139 lbs",
  "0.5 lbs",
  "40 lbs",
  "180 lbs",
  "0.05 lbs",
  "180 lbs",
  "153 lbs",
  "159 lbs",
]

var locations = [
  "Alexandria Safe-Zone,<br> Virginia",
  "Literally everywhere",
  "Beverly Hills, California",
  "Calabasas, California",
  "Great Falls, Virginia",
  "Venice, California",
  "Washington, D.C.",
  "Shrek’s swamp",
  "Thailand",
  "C-137",
  "Los Angeles, California"

]

var interests = [
  "zombies, survival, fighting",
  "aliens, time travel, fighting",
  "acting, tripping, fighting",
  "being famous, spending<br> money, fighting",
  "swimming, talking,<br>fighting",
  "serving, building, fighting",
  "presidenting, long walks<br>on the beach, fighting",
  "memes, feeling, fighting",
  "river boating, catching<br>snakes, fighting",
  "inter-dimensional travel,<br>drinking, fighting",
  "acting, motivational<br>speaking, fighting"
]


var selection = 0;


$(document).ready(function(){
  newPerson();
  $("#accept").click(function(){
    if (selection < names.length) {
        $("#accepts").append("<li>" + $("h3").html() + "</li>" );
      newPerson();
    } else {
      alert("NO MORE PEOPLE TO FIGHT");
    }
  });
  

  $("#reject").click(function(){
    if (selection < names.length) {
        $("#rejects").append("<li>" + $("h3").html() + "</li>" );
      newPerson();
    } else {
      alert("NO MORE PEOPLE TO FIGHT");
    }
  });
    
});

function newPerson() {
  $("img").attr("src", pics[selection]);
  $("h3").html(names[selection]);
  $("#stats").html("<p><strong>Height: </strong>" + heights[selection] + "</p><p><strong>Weight: </strong>" + weights[selection] + "</p><p><strong>Location: </strong>" + locations[selection] + "</p><p><strong>Interests: </strong>" + interests[selection] + "</p>" );
  selection++;
  $("#sidebar").css("height:100%");
}