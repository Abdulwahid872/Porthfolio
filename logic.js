    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname){
        for(tablink of tablinks)
        {
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents)
        {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }
    

    function toggle(){
        var sid = document.querySelector(".sidemenu");
        if (sid.style.right == "-200px") {
            sid.style.right = "0"
        } else {
            sid.style.right = "-200px"    
        }
        
        // sid.classList.toggle("right_nv")
    }