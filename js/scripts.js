


    let togg0 = document.getElementById("togg0");
    let togg1 = document.getElementById("togg1");
    let togg2 = document.getElementById("togg2");
    let togg3 = document.getElementById("togg3");
    let togg4 = document.getElementById("togg4");
    let d0 = document.getElementById("d0");
    let d1 = document.getElementById("d1");
    let d2 = document.getElementById("d2");
    let d3 = document.getElementById("d3");
    let d4 = document.getElementById("d4");
    $(document).ready(function(){
      $(togg0).click(function(){
        if(getComputedStyle(d0).display != "none"){
          $(d0).animate({
            height: 'toggle'
          });
          d1.style.display = "none";
          d2.style.display = "none";
          d3.style.display = "none";
          d4.style.display = "none";
        } else {
          $(d0).animate({
            height: 'toggle'
          });
          d1.style.display = "none";
          d2.style.display = "none";
          d3.style.display = "none";
          d4.style.display = "none";
        }
      });
    });
    $(document).ready(function(){
      $(togg1).click(function(){
        if(getComputedStyle(d1).display != "none"){
          d0.style.display = "none";
          $(d1).animate({
            height: 'toggle'
          });
          d2.style.display = "none";
          d3.style.display = "none";
          d4.style.display = "none";
        } else {
          d0.style.display = "none";
          $(d1).animate({
            height: 'toggle'
          });
          d2.style.display = "none";
          d3.style.display = "none";
          d4.style.display = "none";
        }
      });
    });
    $(document).ready(function(){
      $(togg2).click(function(){
        if(getComputedStyle(d2).display != "none"){
          d0.style.display = "none";
          d1.style.display = "none";
          $(d2).animate({
            height: 'toggle'
          });
          d3.style.display = "none";
          d4.style.display = "none";
        } else {
          d0.style.display = "none";
          d1.style.display = "none";
          $(d2).animate({
            height: 'toggle'
          });
          d3.style.display = "none";
          d4.style.display = "none";
        }
      });
    });
    $(document).ready(function(){
      $(togg3).click(function(){
        if(getComputedStyle(d3).display != "none"){
          d0.style.display = "none";
          d1.style.display = "none";
          d2.style.display = "none";
          $(d3).animate({
            height: 'toggle'
          });
          d4.style.display = "none";
        } else {
          d0.style.display = "none";
          d1.style.display = "none";
          d2.style.display = "none";
          //d3.style.display = "block";
          $(d3).animate({
            height: 'toggle'
          });
          d4.style.display = "none";
        }
      });
    });
    $(document).ready(function(){
      $(togg4).click(function(){
        if(getComputedStyle(d4).display != "none"){
          d0.style.display = "none";
          d1.style.display = "none";
          d2.style.display = "none";
          d3.style.display = "none";
          $(d4).animate({
            height: 'toggle'
          });
        } else {
          d0.style.display = "none";
          d1.style.display = "none";
          d2.style.display = "none";
          d3.style.display = "none";
          $(d4).animate({
            height: 'toggle'
          });
        }
      });
    });
   
    
    
 