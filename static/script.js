function reload_memos(){
    /* Function to load the memos from teh LocalStorage to the actual DOM container.
    Run both upon page load and saving of a memo */


    // Find and empty the Logs Container
    memo_logs_container = document.querySelector("#memo_logs_container");
    memo_logs_container.innerHTML = "";

    // Get all the Saved Memos 
    memos = JSON.parse(localStorage.getItem("logs"));

    // Add each of the memos to the emptied Logs Container
    memos.forEach(memo_text => {
       memo = document.createElement("div");
       memo.setAttribute("class", "memo");
       memo.innerHTML = memo_text;
       memo_logs_container.appendChild(memo);   
    });
}

document.addEventListener("DOMContentLoaded", ()=>{

    // On First visit, create an empty logs array in LocalStorage
    if(!localStorage.getItem("logs")){
        localStorage.setItem("logs", "[]")
    }
    else{
        reload_memos() // Load the current memos
    }

    const memo_form = document.querySelector("#memo_form");
    memo_form.addEventListener("submit", (e)=>{
        e.preventDefault();

        var memo_text = document.querySelector("#memo_text")

        if(memo_text.value)   // If the memo_text is not null
        { 
            var memos = JSON.parse(localStorage.getItem("logs"))

            memos.unshift(memo_text.value) // Add to the beginning

            localStorage.setItem("logs", JSON.stringify(memos))
            reload_memos()
        }


    });
    
    const clear_btn = document.querySelector("#clear_btn");
    clear_btn.addEventListener("click", ()=>{
        localStorage.setItem("logs", "[]")
        reload_memos()
        
    })

});