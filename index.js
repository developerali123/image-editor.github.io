var btn=document.getElementById("btn");
        var img=document.getElementById("img");
        var reset=document.getElementById("reset");
        var left=document.getElementById('left');
        var right=document.getElementById('right');
        var show=document.getElementById("show");
        var hide=document.getElementById("hide");
        var box=document.getElementById("box");
        function submit(){
            let url=document.getElementById("input").value;
            if(url==""){
                alert("please provide url");
                return false;
            }else{
                img.src=url;
            }
        }
        function display(){
            left.style.display="none";
            right.style.width="100%";
            show.style.display="none";
            hide.style.display="block";
        }
        function escape(){
            show.style.display="block";
            hide.style.display="none";
            left.style.display="block";
        }
        function slider(){
            var bright=document.getElementById("bright").value;
            var contrast=document.getElementById("contrast").value;
            var saturate=document.getElementById("saturate").value;
            var gray=document.getElementById("gray").value;
            var invert=document.getElementById("invert").value;
        var blur=document.getElementById("blur").value;
        var hue=document.getElementById("hue").value;
        var sepia=document.getElementById("sepia").value;
        img.style.filter=`brightness(`+bright+`%) contrast(`+contrast+`%) saturate(`+saturate+`%) grayscale(`+gray+`%) invert(`+invert+`%) blur(`+blur+`px) hue-rotate(`+hue+`deg) sepia(`+sepia+`%)`;
        }
        reset.addEventListener("click",function(){
            setTimeout(slider);
        })