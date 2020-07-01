tday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
"Friday", "Saturday");
tmonth = new Array("January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December");

function GetClock() {
       var d = new Date();
       var nday = d.getDay();
       var nmonth = d.getMonth();
       var ndate = d.getDate();
       var nyear = d.getFullYear();
       var nhour = d.getHours();
       var nmin = d.getMinutes();
       var nsec = d.getSeconds();
       if (nmin <= 9)
              nmin = "0" + nmin;
       if (nsec <= 9)
              nsec = "0" + nsec;

       document.getElementById('clockbox').innerHTML = "" + tday[nday] + ", " + tmonth[nmonth]
+ " " + ndate + ", " + nyear + " " + nhour + ":" + nmin + ":" + nsec + "";

       if(tmonth[nmonth] === "January")
       {
           document.body.style.backgroundColor = "yellowgreen";
       }

       if(tmonth[nmonth] === "February")
       {
           document.body.style.backgroundColor = "lightpink";
       }

       if(tmonth[nmonth] === "March")
       {
           document.body.style.backgroundColor = "lightgreen";
       }

       if(tmonth[nmonth] === "April")
       {
           document.body.style.backgroundColor = "lightblue";
       }

       if(tmonth[nmonth] === "May")
       {
           document.body.style.backgroundColor = "orchid";
       }

       if(tmonth[nmonth] === "June")
       {
           document.body.style.backgroundColor = "lightgoldenrodyellow";
       }

       if(tmonth[nmonth] === "July")
       {
           document.body.style.backgroundColor = "lightcyan";
       }

       if(tmonth[nmonth] === "August")
       {
           document.body.style.backgroundColor = "lightyellow";
       }

       if(tmonth[nmonth] === "September")
       {
           document.body.style.backgroundColor = "plum";
       }

       if(tmonth[nmonth] === "October")
       {
           document.body.style.backgroundColor = "lightorange";
       }

       if(tmonth[nmonth] === "November")
       {
           document.body.style.backgroundColor = "sandybrown";
       }

       if(tmonth[nmonth] === "December")
       {
           document.body.style.backgroundColor = "indianred";
       }

       if(tmonth[nmonth] === "February" && ndate === 17)
       {
           var message = "Happy Birthday, Tejas Shah";

           document.getElementById('clockbox').innerHTML = "" + tday[nday] + ", " + tmonth[nmonth]
+ " " + ndate + ", " + nyear + " " + nhour + ":" + nmin + ":" + nsec + "<br><br>" + message;
       }

       if(tmonth[nmonth] === "December" && ndate === 25)
       {
           var message = "Merry Christmas!";

           document.getElementById('clockbox').innerHTML = "" + tday[nday] + ", " + tmonth[nmonth]
+ " " + ndate + ", " + nyear + " " + nhour + ":" + nmin + ":" + nsec + "<br><br>" + message;

           document.getElementById('left').style.display='block';
           document.getElementById('right').style.display='block';
       }



       if(tmonth[nmonth] === "October" && ndate === 31)
       {
           var message = "Happy Halloween!";

           document.getElementById('clockbox').innerHTML = "" + tday[nday] + ", " + tmonth[nmonth]
+ " " + ndate + ", " + nyear + " " + nhour + ":" + nmin + ":" + nsec + "<br><br>" + message;
       }

       if(tmonth[nmonth] === "February" && ndate === 29)
       {
           var message = "Leap Year";

           document.getElementById('clockbox').innerHTML = "" + tday[nday] + ", " + tmonth[nmonth]
+ " " + ndate + ", " + nyear + " " + nhour + ":" + nmin + ":" + nsec + "<br><br>" + message;
       }

       if(tmonth[nmonth] === "March" && ndate === 14)
       {
           var message = "Pi Day";

           document.getElementById('clockbox').innerHTML = "" + tday[nday] + ", " + tmonth[nmonth]
+ " " + ndate + ", " + nyear + " " + nhour + ":" + nmin + ":" + nsec + "<br><br>" + message;
       }

       if(tmonth[nmonth] === "May" && ndate === 4)
       {
           var message = "May the 4th be with you!";

           document.getElementById('clockbox').innerHTML = "" + tday[nday] + ", " + tmonth[nmonth]
+ " " + ndate + ", " + nyear + " " + nhour + ":" + nmin + ":" + nsec + "<br><br>" + message;
       }

       if(tmonth[nmonth] === "July" && ndate === 4)
       {
           var message = "Happy Independence Day";

           document.getElementById('clockbox').innerHTML = "" + tday[nday] + ", " + tmonth[nmonth]
+ " " + ndate + ", " + nyear + " " + nhour + ":" + nmin + ":" + nsec + "<br><br>" + message;
       }

       if(tmonth[nmonth] === "July" && ndate === 24)
       {
           var message = "Happy Pioneer Day";

           document.getElementById('clockbox').innerHTML = "" + tday[nday] + ", " + tmonth[nmonth]
+ " " + ndate + ", " + nyear + " " + nhour + ":" + nmin + ":" + nsec + "<br><br>" + message;
       }

       if(tmonth[nmonth] === "May" && ndate === 5)
       {
           var message = "Cinco de Mayo";

           document.getElementById('clockbox').innerHTML = "" + tday[nday] + ", " + tmonth[nmonth]
+ " " + ndate + ", " + nyear + " " + nhour + ":" + nmin + ":" + nsec + "<br><br>" + message;
       }

       if(tmonth[nmonth] === "January" && ndate === 1)
       {
           var message = "Happy New Year!";

           document.getElementById('clockbox').innerHTML = "" + tday[nday] + ", " + tmonth[nmonth]
+ " " + ndate + ", " + nyear + " " + nhour + ":" + nmin + ":" + nsec + "<br><br>" + message;

           document.getElementById('left').style.display='block';
           document.getElementById('right').style.display='block';
       }

       if(tmonth[nmonth] === "December" && ndate === 31)
       {
           var message = "New Year's Eve";

           document.getElementById('clockbox').innerHTML = "" + tday[nday] + ", " + tmonth[nmonth]
+ " " + ndate + ", " + nyear + " " + nhour + ":" + nmin + ":" + nsec + "<br><br>" + message;

           document.getElementById('left').style.display='block';
           document.getElementById('right').style.display='block';
       }

       if(tmonth[nmonth] === "December" && ndate === 24)
       {
           var message = "Christmas Eve";

           document.getElementById('clockbox').innerHTML = "" + tday[nday] + ", " + tmonth[nmonth]
+ " " + ndate + ", " + nyear + " " + nhour + ":" + nmin + ":" + nsec + "<br><br>" + message;

           document.getElementById('left').style.display='block';
           document.getElementById('right').style.display='block';

       }

       if(tmonth[nmonth] === "March" && ndate === 17)
       {
           var message = "St. Patrick's Day";

           document.getElementById('clockbox').innerHTML = "" + tday[nday] + ", " + tmonth[nmonth]
+ " " + ndate + ", " + nyear + " " + nhour + ":" + nmin + ":" + nsec + "<br><br>" + message;
       }

       if(tmonth[nmonth] === "April" && ndate === 1)
       {
           var message = "April Fools";

           document.getElementById('clockbox').innerHTML = "" + tday[nday] + ", " + tmonth[nmonth]
+ " " + ndate + ", " + nyear + " " + nhour + ":" + nmin + ":" + nsec + "<br><br>" + message;
       }



}

window.onload = function ()
{
       GetClock();
       setInterval(GetClock, 1000);
       GetClock2();
       setInterval(GetClock2,1000);
};


function GetClock2()
{
  var d=new Date();
  var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();
  var nhour=d.getHours(),nmin=d.getMinutes(),ap;
  if(nhour==0){ap=" AM";nhour=12;}
  else if(nhour<12){ap=" AM";}
  else if(nhour==12){ap=" PM";}
  else if(nhour>12){ap=" PM";nhour-=12;}

  if(nmin<=9) nmin="0"+nmin;

  var clocktext1=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+", "+nyear+" "+nhour+":"+nmin+ap+"";
document.getElementById('clockbox2').innerHTML=clocktext1;
}
