
$(document).ready(function(){
    
     $(".reset").click(function()
       {
       location.reload(true); 
        });
    
    var last='';
    
    function clickdisable(){
            $("td").off('click');
            }
    
    $(".2player").click(function(){
        $(this).attr('disabled',true);
        $('.1player').css('display','none');
        $("td").css("opacity",1);
        
    $("td").click(function(){
         if(this.textContent==='' && last==='')
         {
             this.textContent="X";
             last='X';
        }
        else if(last==='X')
        {
            this.textContent="O";
            last='O';
        }
        else if(last==='O')
        { 
            this.textContent='X';
            last='X';
        }
       
        var winner = "nil"
        
        
        //rows
    if($(".cell1").text() === $(".cell2").text() && $(".cell2").text()===$(".cell3").text() && $(".cell1").text()!=""){
        winner = $(".cell1").text();
        $("#hl1").css("display","block");
        clickdisable();
    } 
    else if($(".cell4").text() === $(".cell5").text() && $(".cell5").text()===$(".cell6").text() && $(".cell4").text()!=""){
        winner = $(".cell4").text();
        $("#hl2").css("display","block");
        clickdisable();
    } 
    else if($(".cell7").text() === $(".cell8").text() && $(".cell8").text()===$(".cell9").text() && $(".cell7").text()!=""){
        winner = $(".cell7").text();
        $("#hl3").css("display","block");
        clickdisable();
    } 
        
        //columns
    else if($(".cell1").text() === $(".cell4").text() && $(".cell4").text()===$(".cell7").text() && $(".cell1").text()!=""){
        winner = $(".cell1").text();
        $("#vl1").css("display","block");
        clickdisable();
    } 
    else if($(".cell2").text() === $(".cell5").text() && $(".cell5").text()===$(".cell8").text() && $(".cell2").text()!=""){
        winner = $(".cell2").text();
        $("#vl2").css("display","block");
        clickdisable();
    } 
    else if($(".cell3").text() === $(".cell6").text() && $(".cell6").text()===$(".cell9").text() && $(".cell3").text()!=""){
        winner = $(".cell3").text();
        $("#vl3").css("display","block");
        clickdisable();
    }
        
        //diagonal
     else if($(".cell1").text() === $(".cell5").text() && $(".cell5").text()===$(".cell9").text() && $(".cell1").text()!=""){
        winner = $(".cell1").text();
        $("#dl1").css("display","block");
        clickdisable();
    }
     else if($(".cell3").text() === $(".cell5").text() && $(".cell5").text()===$(".cell7").text() && $(".cell3").text()!="" ){
        winner = $(".cell3").text();
        $("#dl2").css("display","block");
        clickdisable();
    }    
         $(".result").text(winner);  
           
       })
   
       
          
    
    });
    
    $(".1player").click(function(){
        $(this).attr('disabled',true);
        $('.2player').css('display','none');
        $(".instructions").fadeIn();
        $(".instructions").fadeOut(1500);
        
        var alltd = document.querySelectorAll("td");
        var numarr= [0,1,2,3,4,5,6,7,8];
         
        function ai(){
             for(var i=0;i<numarr.length;i++){
                if($(alltd[numarr[i]]).text()==='X'){
                    numarr.splice(i,1);
                    //$(".test").append("<p>X: "+numarr+"<p>");
                }
            }
            var num = Math.floor(Math.random()*(numarr.length));
            $(alltd[numarr[num]]).text("O").animate({opacity: 1},1000);
            numarr.splice(num,1);
            //$(".test").append("<p>O: "+numarr+"<p>");
        }
                

         $("td").click(function(){
         if(this.textContent==='')
         {
             this.textContent="X";
             this.style.opacity="1";
             ai();
        }
       
        var winner = "nil"
        
        
        
        //rows
    if($(".cell1").text() === $(".cell2").text() && $(".cell2").text()===$(".cell3").text() && $(".cell1").text()!=""){
        winner = $(".cell1").text();
        $("#hl1").css("display","block");
        clickdisable();
    } 
    else if($(".cell4").text() === $(".cell5").text() && $(".cell5").text()===$(".cell6").text() && $(".cell4").text()!=""){
        winner = $(".cell4").text();
        $("#hl2").css("display","block");
        clickdisable();
    } 
    else if($(".cell7").text() === $(".cell8").text() && $(".cell8").text()===$(".cell9").text() && $(".cell7").text()!=""){
        winner = $(".cell7").text();
        $("#hl3").css("display","block");
        clickdisable();
    } 
        
        //columns
    else if($(".cell1").text() === $(".cell4").text() && $(".cell4").text()===$(".cell7").text() && $(".cell1").text()!=""){
        winner = $(".cell1").text();
        $("#vl1").css("display","block");
        clickdisable();
    } 
    else if($(".cell2").text() === $(".cell5").text() && $(".cell5").text()===$(".cell8").text() && $(".cell2").text()!=""){
        winner = $(".cell2").text();
        $("#vl2").css("display","block");
        clickdisable();
    } 
    else if($(".cell3").text() === $(".cell6").text() && $(".cell6").text()===$(".cell9").text() && $(".cell3").text()!=""){
        winner = $(".cell3").text();
        $("#vl3").css("display","block");
        clickdisable();
    }
        
        //diagonal
     else if($(".cell1").text() === $(".cell5").text() && $(".cell5").text()===$(".cell9").text() && $(".cell1").text()!=""){
        winner = $(".cell1").text();
        $("#dl1").css("display","block");
        clickdisable();
    }
     else if($(".cell3").text() === $(".cell5").text() && $(".cell5").text()===$(".cell7").text() && $(".cell3").text()!="" ){
        winner = $(".cell3").text();
        $("#dl2").css("display","block");
        clickdisable();
    }    
            $(".result").text(winner);
           
       })
   
          
          
    });
  
});

 