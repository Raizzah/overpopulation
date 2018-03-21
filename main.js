var canvas = document.getElementById("canvas");
var counter = document.getElementById("counter");

window.onscroll = function(){


  var x = window.pageXOffset;

  console.log(x);

};
document.getElementById("towninfo").onclick = function() {myFunction()};

function myFunction() {
    document.getElementById("towninfo").innerHTML = "As the population of early farming villages increased and became more complex, socities started the change from a nomadic hunting gathering way of life to a settled village life.";
};

function mouseDown() {
    document.getElementById("message2").innerHTML = "  Towns started developing into small cities that had complex systems that created divisions of labor. The boom of the population created much more socially diverse roles that no longer dealt with agriculture but more with technology advancements. ";


}

function mouseUp() {
    document.getElementById("message2").innerHTML = "What about cities!";
};


document.getElementById("newcity").onmouseover = function() {mouseOver()};
document.getElementById("newcity").onmouseout = function() {mouseOut()};

function mouseOver() {
    document.getElementById("newcity").style.color = "darkorange";
}

function mouseOut() {
    document.getElementById("newcity").style.color = "black";
};

test.onclick = function() {
  let start = Date.now();

  let timer = setInterval(function() {
    let timePassed = Date.now() - start;

    test.style.left = timePassed / 3 + 'px';

    if (timePassed > 100000) clearInterval(timer);

  }, 50);
};

$(document).ready(function() {
                // Notice the .on instead of .click, it's the new style for events
                // in jQuery and the e argument
                $("#counter").on('click', function (e) {
                    e.preventDefault();
                    $(".target").effect( "bounce", { times : 3 }, 300);
                });
            });
