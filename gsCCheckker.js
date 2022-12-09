function gscVerification(url) {
    const gsc = 'google-site-verification';
    const xhr = new XMLHttpRequest();
    let gscInstalled = false;
    
    xhr.open("GET", url, true);
    xhr.responseType = "document";
    xhr.setRequestHeader('Access-Control-Allow-Headers', '*');
    xhr.setRequestHeader('Content-Type', 'application/ecmascript');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.withCredentials = true;

    xhr.onload = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            const response = xhr.responseXML;
            const allMetaTags = response.querySelectorAll('meta');
            
            for(let i = 0; i < allMetaTags.length; i++) {
                if(allMetaTags[i].name === gsc) {
                    gscInstalled = true;
                    break;
                }
            }

            if(gscInstalled) {
                answerValue.className = 'gscInstalled';
                answerValue.innerHTML = `Strona o podanym linku (${url}) posiada Google Search Console Tool.`;
            } else {
                answerValue.className = 'gscNotInstalled';
                answerValue.innerHTML = `Strona o podanym linku (${url}) nie posiada Google Search Console Tool.`;
            }

            answerContainer.append(answerValue);
            mainContent.append(answerContainer);
        }
    };

    xhr.onerror = function() {
        console.error(xhr.status, xhr.statusText);
    }

    xhr.send();
 
}