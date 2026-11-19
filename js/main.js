//The user will enter a date. 
//Use that date to get the NASA picture of the day from that date!
//https://api.nasa.gov/
// const apod = document.querySelector('input'); 

//cmRT0wdkErUvSN59j8HcmguhBkzb8CfddoVDMw0h

document.querySelector('.btn').addEventListener('click', getNasa);
// console.log(apod)

function getNasa(){ 
    let variable = document.querySelector('input').value
    console.log(variable)

    fetch(
        `https://science.nasa.gov/wp-json/wp/v2/apod-basic/250621`
    )
    .then((res) => res.json())
    .then((data) => { 
        console.log(data);
        console.log(data.url);
        console.log(data.title);
        console.log(data.media_type);


        document.querySelector('h2').innerText = data.title; 
        document.querySelector('h3').innerHTML = data.explanation;

        //create virtual DOM
        if (data.media_type === "image") { 
            document.querySelector("img").src = data.hdurl || data.url; 
            document.querySelector("img").style.display = "block";
            document.querySelector("video").style.display = "none"; 
        }else if (data.media_type === "video") {
            document.querySelector("video").src = data.url; 
            document.querySelector("video").style.display = "block";
            document.querySelector("img").style.display = "none";  
        }
    })
    .catch(err => { 
        console.log(`error ${err}`)
    });
}




//User selects a date: 2026-09-18
//apod.value gets the date 
//fetch() sends the date back to NASA
//NASA sends back an object 
//data contains that object
//data.title gets the title 
//data.hdurl gets the image URL 
//data.description gets the description
//Nasa sends back an object containing the outputs 
//console log the data

//document.QuerySelector - PROPERTIES PROVIDED BY NASA
//hdurl - element for the image 
//description - explanation
//h2 - title


//issue getting. undefind on when I enter a date ********
