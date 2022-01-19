function makeTimer() {

	//		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
		var endTime = new Date("21 January 2022 00:00:00 GMT+05:30");			
			endTime = (Date.parse(endTime) / 1000);
			
			// console.log(Date());
			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;
			// console.log(timeLeft);
			

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

			console.log(hours);
  
			if (hours < "10") { hours = "0" + hours;}
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$("#days").html(days + "<span>Days</span>");
			$("#hours").html(hours + "<span>Hours</span>");
			$("#minutes").html(minutes + "<span>Minutes</span>");
			$("#seconds").html(seconds + "<span>Seconds</span>");
            	
			
			console.log(timeLeft);
			if (timeLeft < 0) {
				document.getElementById("timer").innerHTML = "";
				document.getElementById("greetings").innerHTML = "Happy Birthday Nikhila...!";
                
                $("#hour").html(hours + "<span>Hours</span>");
                $("#minute").html(minutes + "<span>Minutes</span>");
                $("#second").html(seconds + "<span>Seconds</span>");
			}
			console.log("minutes : " + minutes);
			console.log("hours : " + hours);
            console.log("endTime" + endTime);
            console.log("now" + now);

            
            let dt = new Date().getDate();
            let mt = new Date().getMonth();
            let yr = new Date().getFullYear();
            // let dt =20;
            console.log("Date " + dt);
            console.log("Month" + mt);
            console.log("Year" + yr);
            
            if(dt >= 21 && mt >=0 && yr >2021)
            // if(dt<=21)
            {

            
			
                setTimeout(function(){
                    // 
                    if(hours <= 23)
                    {
                        document.getElementById("wish1").innerHTML = "01.생일 축하해요"
                        
                    }
                    
                    if(hours <= 22)
                    {
                        document.getElementById("wish2").innerHTML = "02.ജന്മദിനാശംസകൾ"
                    }
                    
                    if(hours <= 21)
                    {
                        document.getElementById("wish3").innerHTML = "03.Zolm Disachim Porbim"
                    }
                    
                    if(hours <= 20)
                    {
                        document.getElementById("wish4").innerHTML = "04.سالگرہ مبارک"
                    }
                    
                    if(hours <= 19)
                    {
                        document.getElementById("wish5").innerHTML = "05.ଜନ୍ମଦିନର ଅଭିନନ୍ଦନ"
                    }
                    
                    if(hours <= 18)
                    {
                        document.getElementById("wish6").innerHTML = "06.¡Feliz cumpleaños!"
                    }
                    
                    if(hours <= 17)
                    {
                        document.getElementById("wish7").innerHTML = "07.பிறந்தநாள் வாழ்த்துக்கள்"
                    }
                    
                    if(hours <= 16)
                    {
                        document.getElementById("wish8").innerHTML = "08.Alles Gute zum Geburtstag!"
                    }
                    
                    if(hours <= 15)
                    {
                        document.getElementById("wish9").innerHTML = "09.Buon compleanno!"
                    }
                    
                    if(hours <= 14)
                    {
                        document.getElementById("wish10").innerHTML = "10.Feliz aniversário!"
                    }
                    
                    if(hours <= 13)
                    {
                        document.getElementById("wish11").innerHTML = "11.С Днём рождения!"
                    }
                    
                    if(hours <= 12)
                    {
                        document.getElementById("wish12").innerHTML = "12.eid milad saeid!"
                    }
                    
                    if(hours <= 11)
                    {
                        document.getElementById("wish13").innerHTML = "13.Shēngrì kuàilè!"
                    }
                    
                    if(hours <= 10)
                    {
                        document.getElementById("wish14").innerHTML = "14.Śubha janmadina"
                    }
                    
                    if(hours <= 9)
                    {
                        document.getElementById("wish15").innerHTML = "15.Charoúmena genéthlia!"
                    }
                    
                    if(hours <= 8)
                    {
                        document.getElementById("wish16").innerHTML = "16.janmadin mubaarak!"
                    }
                    
                    if(hours <= 7)
                    {
                        document.getElementById("wish17").innerHTML = "17.Buon compleanno!"
                    }
                
                    if(hours <= 6)
                    {
                        document.getElementById("wish18").innerHTML = "18.Janmadinada śubhāśayagaḷu!"
                    }
                    
                    if(hours <= 5)
                    {
                        document.getElementById("wish19").innerHTML = "19.Grattis på födelsedagen"
                    }
                    
                    if(hours <= 4)
                    {
                        document.getElementById("wish20").innerHTML = "20.Dhalasho Wacan!"
                    }
                
                    if(hours <= 3)
                    {
                        document.getElementById("wish21").innerHTML = "21.Heri ya siku ya kuzaliwa!"
                    }
                    
                    if(hours <= 2)
                    {
                        document.getElementById("wish22").innerHTML = "22.S̄uk̄hs̄ạnt̒ wạn keid!"
                    }
                    
                    if(hours <= 1)
                    {
                        document.getElementById("wish23").innerHTML = "23.La multi ani!"
                    }
                    if(hours <= 0 && minutes <=48)
                    {
                        document.getElementById("wish24").innerHTML = "24.Happy Birthday...!"
                    }

        
                }, 1000);

            }
			

	}

	setInterval(function() { makeTimer(); }, 1000);
