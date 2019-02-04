function getValues(obj, key) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getValues(obj[i], key));
        } else if (i == key) {
            objects.push(obj[i]);
        }
    }
    return objects;
}

function getKeys(obj, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getKeys(obj[i], val));
        } else if (obj[i] == val) {
            objects.push(i);
        }
    }
    return objects;
}

document.getElementById("get-info").addEventListener('click',function(){
 
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = document.getElementById("website-url").value;
fetch(proxyurl + url) 
      .then(function(response) {
        return (response.text());
      })
      .then(function(responseText) {
        var parsedResponse = (new window.DOMParser()).parseFromString(responseText, "text/html");
        console.log(parsedResponse);
        document.getElementById("website-name").value =  parsedResponse.title;
        document.getElementById("description").value =  parsedResponse.getElementsByName("description")[0].getAttribute("content");
         document.getElementById("community-image-display").src =  parsedResponse.querySelector("meta[property='og:image']").getAttribute("content");
          document.getElementById("community-image-display").style.display = "block";
          document.getElementById("community-image").value = document.getElementById("community-image-display").src;   

var jsonld = JSON.parse(parsedResponse.querySelector('script[type="application/ld+json"]').innerText); 
var x = getKeys(jsonld,'Event');
console.log(x.toString());

if(x == "@type"){
  var jsonld = JSON.parse(parsedResponse.querySelector('script[type="application/ld+json"]').innerText); 
console.log(jsonld.endDate);

}

      });
  });

