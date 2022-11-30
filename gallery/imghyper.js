
    function switc(c) {
                  var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    c.className+=" active";
    filtdis=document.getElementsByClassName("filterdis")
    filt=c.innerHTML;
    filtmat=document.getElementsByClassName(filt);
    if(filt=="all"){
                      for(i=0;i<filtdis.length;i++)
    {
        filtdis[i].style.display = "block";
                      }
                    }
    else{
                      for(i=0;i<filtdis.length;i++)
    {
                        if(filtdis[i]==filtmat[0])
    {
        filtdis[i].style.display = "block";
                        }
    else{
        filtdis[i].style.display = "none";
                        }
                      }
                    }
                  }
    function showmodal(element) {
        document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    document.getElementById("caption").innerHTML = element.alt;
          }
