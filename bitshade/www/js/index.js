document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
  document.getElementById('deviceready').classList.add('ready');
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
var huel = 0;

const art = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [2, 2, 3, 3, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 3, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 3, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 3, 0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 3],
  [2, 2, 2, 2, 2, 2, 2, 3, 3, 0, 1, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 3, 0, 1, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 3, 0, 1, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 3, 0, 1, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 3, 0, 1, 1, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

document.getElementById("refresh").addEventListener('click', () => {
  window.location.reload(true);
});

function monochro() {
  var huel = Math.floor(Math.random() * (360));
  document.getElementById("four").style.backgroundColor = `hsl(${huel}, 50%, 20%)`;
  document.getElementById("three").style.backgroundColor = `hsl(${huel}, 50%, 40%)`;
  document.getElementById("two").style.backgroundColor = `hsl(${huel}, 50%, 60%)`;
  document.getElementById("one").style.backgroundColor = `hsl(${huel}, 50%, 80%)`;

  for(var i = 0; i < art.length; i++) {
    var cube = art[i];
    for(var j = 0; j < cube.length; j++) {
        var rectData = {
            "x": j,
            "y": i,
            "width": 1,
            "height": 1
            };
       if (cube[j] == 0) {
        ctx.fillStyle = `hsl(${huel}, 50%, 20%)`;
        ctx.beginPath();
        ctx.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
        ctx.closePath();
       }
       
       else if (cube[j] == 1) {
        ctx.fillStyle = `hsl(${huel}, 50%, 40%)`;
        ctx.beginPath();
        ctx.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
        ctx.closePath();
       }

       else if (cube[j] == 2) {
        ctx.fillStyle = `hsl(${huel}, 50%, 60%)`;
        ctx.beginPath();
        ctx.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
        ctx.closePath();
       }

       else {
        ctx.fillStyle = `hsl(${huel}, 50%, 80%)`;
        ctx.beginPath();
        ctx.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
        ctx.closePath();
       }
    }
  }  
}

document.getElementById("standard").addEventListener('click', () => {
  pallet();
});

document.getElementById("mono").addEventListener('click', () => {
  monochro();
});

function pallet() {
  var huel = Math.floor(Math.random() * (180));

  document.getElementById("four").style.backgroundColor = `hsl(${360- huel}, 50%, 20%)`;
  document.getElementById("three").style.backgroundColor = `hsl(${360-huel}, 50%, 40%)`;
  document.getElementById("two").style.backgroundColor = `hsl(${huel}, 50%, 60%)`;
  document.getElementById("one").style.backgroundColor = `hsl(${huel}, 50%, 80%)`;

  for(var i = 0; i < art.length; i++) {
      var cube = art[i];
      for(var j = 0; j < cube.length; j++) {
          var rectData = {
              "x": j,
              "y": i,
              "width": 1,
              "height": 1
              };
         if (cube[j] == 0) {
          ctx.fillStyle = `hsl(${360-huel}, 50%, 20%)`;
          ctx.beginPath();
          ctx.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
          ctx.closePath();
         }
         
         else if (cube[j] == 1) {
          ctx.fillStyle = `hsl(${360-huel}, 50%, 40%)`;
          ctx.beginPath();
          ctx.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
          ctx.closePath();
         }

         else if (cube[j] == 2) {
          ctx.fillStyle = `hsl(${huel}, 50%, 60%)`;
          ctx.beginPath();
          ctx.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
          ctx.closePath();
         }

         else {
          ctx.fillStyle = `hsl(${huel}, 50%, 80%)`;
          ctx.beginPath();
          ctx.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
          ctx.closePath();
         }
      }
  }
}
