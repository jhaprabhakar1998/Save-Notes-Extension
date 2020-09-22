window.onload = function () {

    document.getElementById("save").onclick = function () {
        const key = document.getElementById("saveTitle").value
        const value = document.getElementById("saveDetails").value

        if (key.length !== 0 && value.length !== 0) {
            const jsonfile = {}
            jsonfile[key] = value

            chrome.storage.local.set(jsonfile, function () {
            })
        }
        else {
            return;
        }
    }

    document.getElementById("viewSavedItem").onclick = function () {
        chrome.storage.local.get(null, function (items) {
            keyValueJson = JSON.parse(JSON.stringify(items));
            console.log("keyArr " + JSON.stringify(keyValueJson))
            const obj1 = document.getElementById("submitForm")
            const obj2 = document.getElementById("showContent")

            for (let key in keyValueJson) {
                const value = keyValueJson[key].replace(/['"]+/g, '')

                const h3 = document.createElement("H3")
                const t3 = document.createTextNode(key)
                const h4 = document.createElement("P")
                const t4 = document.createTextNode(value)
                const copyButton = document.createElement('button');

                h3.setAttribute("class", "contentTitle")
                h4.setAttribute("class", "contentDetails")
                copyButton.setAttribute("class", "copyButton")
                copyButton.innerHTML = "Copy";

                copyButton.onclick = function () {
                    const el = document.createElement("textarea")
                    el.value = value
                    document.body.appendChild(el)
                    el.select()
                    document.execCommand("copy")
                    document.body.removeChild(el)
                };

                const deleteButton = document.createElement("button")
                deleteButton.setAttribute("class", "deleteButton")
                deleteButton.innerHTML = "Delete";

                deleteButton.onclick = function () {
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
