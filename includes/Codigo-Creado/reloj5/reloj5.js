
            colourArray = ["orange","gold","lime","green","violet","purple","black","blue","cyan","brown","red"];
            var pointer = 0;
            
            var circle1 = document.getElementById('circle1');
            var radius1 = circle1.r.baseVal.value;
            var circumference1 = radius1 * 2 * Math.PI;

            var circle2 = document.getElementById('circle2');
            var radius2 = circle2.r.baseVal.value;
            var circumference2 = radius2 * 2 * Math.PI;

            var circle3 = document.getElementById('circle3');
            var radius3 = circle3.r.baseVal.value;
            var circumference3 = radius3 * 2 * Math.PI;


            circle1.style.strokeDasharray = `${circumference1} ${circumference1}`;
            circle1.style.strokeDashoffset = `${circumference1}`;

            circle2.style.strokeDasharray = `${circumference2} ${circumference2}`;
            circle2.style.strokeDashoffset = `${circumference2}`;

            circle3.style.strokeDasharray = `${circumference3} ${circumference3}`;
            circle3.style.strokeDashoffset = `${circumference3}`;

            function setProgress(percent1){
                const offset1 = circumference1 - percent1 / 60 * circumference1;
                circle1.style.strokeDashoffset = offset1;
            }

            function setProgress2(percent2){
                const offset2 = circumference2 - percent2 / 60 * circumference2;
                circle2.style.strokeDashoffset = offset2;
            }

            function setProgress3(percent3){
                const offset3 = circumference3 - (percent3%12) / 12 * circumference3;
                circle3.style.strokeDashoffset = offset3;
            }

            function setTime(secs,mins,hrs){

                if(secs%30 == 0){

                    document.body.style.backgroundColor = ""+colourArray[pointer%colourArray.length];
                    document.body.style.transition = "background-color 0.35s linear";
                    pointer++;

                }

                var currTime = (hrs >= 10 ? hrs : (hrs >= 1 ? "0"+hrs : "00"))+":"+(mins >= 10 ? mins : (mins >= 1 ? "0"+mins : "00"))+":"+(secs >= 10 ? secs : (secs >= 1 ? "0"+secs : "00"));

                document.getElementById("timeOutput").innerHTML = ""+currTime;

            }

            function startTime(){
                var date = new Date();
                var seconds = date.getSeconds();
                var minutes = date.getMinutes();
                var hours = date.getHours();
                setTimeout(startTime, 1000);
                setProgress(seconds);
                setProgress2(minutes);
                setProgress3(hours);
                setTime(seconds,minutes,hours);
            }

            startTime();

            /*
                Svg clock using that progress wheel from css tricks

                Radius = (width / 2) - (strokeWidth * 2) 

                So Radius = (120 / 2) - (4 * 2) = 52

                circumference = radius * 2 * PI

                So circumference = 52 * 2 * PI ~= 326.7

                perhaps 3 wheels for (hours, mins, secs)?

            */