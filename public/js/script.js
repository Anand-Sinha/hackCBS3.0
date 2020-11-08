
var lightFlag = true;
    if(localStorage.getItem('theme') === null){
        localStorage.setItem('theme',JSON.stringify(lightFlag))
    } else{
        lightFlag = JSON.parse(localStorage.getItem('theme'))
        if(!lightFlag) {
            lightFlag = !lightFlag;
            change();
        }
    }

    window.addEventListener("scroll",function(){
    var nav = document.getElementById("navBar");
    var ham = document.getElementById("hamMenu");
    // var top = document.getElementById("goToTop");
    nav.classList.toggle("sticky",window.scrollY>0);
    ham.classList.toggle("hide",window.scrollY==0);
    if(window.scrollY<100)
        $(".btn-dange").hide();
    else{
        $(".btn-dange").show();
    }
    $(".toShow").show();
    });
    $(".toShow").show();
    var chk = document.getElementById("checkbox");
    chk.addEventListener("change",change);

    function change(){
        lightFlag = !lightFlag;
        localStorage.setItem('theme',JSON.stringify(lightFlag));
        // console.log(lightFlag);
        $("body").toggleClass('dark');
        // $(".navbar").toggleClass('navDark');
        if (!lightFlag){
            $("body").css("background-image", "url('./img/bgDark1.png')");
            $(".iphoneDark").attr("src", "img/iphoneDark.png");
            setTimeout(function(){
          $(".textBox").text("Go Light");
        }, 700);
          }
        else{
            $("body").css("background-image", "url('./img/bg8.png')");
            $(".iphoneDark").attr("src", "img/iphone.png");
            setTimeout(function(){
          $(".textBox").text("Go Dark");
        }, 750);
          }
        $(".fontWhite").toggleClass("colorWhite");
        $(".blueBack").toggleClass("BackBlue");
        $(".bgCol").toggleClass("bgColAdd");
        $("#hamMenu").toggleClass("bgColWhite");
        $(".font-black").toggleClass("fontBlack");
    }


    // JAVASCRIPT for LOGGING-OUT
    const logoutBtn = document.getElementById('logout');
    logoutBtn.addEventListener('click',async ()=>{
        try {
            const result = await axios({
                method:"GET",
                url:'http://localhost:3000/api/user/logout'
            })
            console.log(result)
            if(result.data.status === 'success') location.reload(true)
        } catch (error) {
            console.log(error)
        }
    })