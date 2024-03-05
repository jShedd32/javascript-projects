//TODO: Add Your Code Below
window.addEventListener('load', function(){


    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then (function (response){

    response.json().then(function(data){
        data.sort((a,b)=>{
            return a.hoursInSpace < b.hoursInSpace ? 1: -1;
        });

        const count = document.getElementById('count');
        count.innerHTML = `These ${data.length} astronauts have seen the earth from a viewpoint that only few have seen!`

        for (let i=0; i <data.length; i++) {
            
            let astronaut = data[i];

            let activeClass = astronaut.active ? "active" : "";

            container.innerHTML += `
        <div class="astronaut">
            <div class="bio">
             <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
            <ul>
             <li>${astronaut.hoursInSpace}</li>
             <li class= "${activeClass}">Active: ${astronaut.active}</li>
             <li>Skills: ${astronaut.skills}</li>
            </ul>
        </div>
        <img class="avatar" src="${astronaut.picture}">
       </div>
       `;
    };

    });
    });
});