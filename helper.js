window.onload = function () {

    document.getElementById("save").onclick = function () {
        const key = document.getElementById("saveTitle").value
        const value = document.getElementById("saveDetails").value
        
        if(key.length !== 0 && value.length !== 0){
            const jsonfile = {};
            jsonfile[key] = value 

            chrome.storage.local.set(jsonfile, function(){
            })  
        }
        else{
            return;
        }
    }

    document.getElementById("viewSavedItem").onclick = function () {
        let data = ""
        chrome.storage.local.get(null, function(items) {
            keyArr = JSON.stringify(items);
            data = JSON.parse(keyArr)
            const obj1 = document.getElementById("submitForm"), obj2 = document.getElementById("showContent"), obj3 = document.getElementById("content")
            
            for (let key in data) {
                let value = data[key]
                let valueWithoutQuotes = value.replace(/['"]+/g, '')
                let valueFinal = valueWithoutQuotes; 
                console.log("valueFinal "+ valueFinal)
                let h3 = document.createElement("H3"), br = document.createElement("BR")
                let t3 = document.createTextNode(key)
                let h4 = document.createElement("P")
                let t4 = document.createTextNode(valueFinal)
                let copyButton = document.createElement('button');
                h3.setAttribute("class", "contentTitle")
                h4.setAttribute("class", "contentDetails")
                copyButton.setAttribute("class", "copyButton")
                copyButton.innerHTML = 'Copy';
                copyButton.onclick = function(){
                    const el = document.createElement('textarea');
                    el.value = valueFinal;
                    document.body.appendChild(el);
                    el.select();
                    document.execCommand('copy');
                    document.body.removeChild(el);
                };

                let deleteButton = document.createElement('button');
                deleteButton.setAttribute("class", "deleteButton")
                deleteButton.innerHTML = 'Delete';
                deleteButton.onclick = function(){
                    chrome.storage.local.remove(key)
                    h3.style.display = "none"
                    h4.style.display = "none"
                };
                
                h3.appendChild(t3)
                h3.appendChild(copyButton)
                h3.appendChild(deleteButton)
                h4.appendChild(t4)

                obj2.appendChild(h3)
                obj2.appendChild(h4)
            }

            obj2.style.display = "block"
            obj1.style.display = "none"
        });
    }
}
