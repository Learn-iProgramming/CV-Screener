console.log("Welcome");

// Data is an array of objects which contains information about the candidates
const data = [
    {
        name: 'Harsh',
        age: 25,
        city: 'Osmanabad',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },

    {
        name: 'Shubham',
        age: 25,
        city: 'Osmanabad',
        language: 'Javascript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/55.jpg'
    },

    {
        name: 'Bhagyshri',
        age: 21,
        city: 'Osmanabad',
        language: 'Web Development',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/women/79.jpg'
    },

    {
        name: 'Samir',
        age: 19,
        city: 'Osmanabad',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/59.jpg'
    },

    {
        name: 'Aarohi',
        age: 18,
        city: 'Kolkatta',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/41.jpg'
    },

    {
        name: 'Rohit',
        age: 30,
        city: 'Nagpur',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/men/95.jpg'
    },
]

// CV Iterator
function cvIterator(profiles){
    let nextIndex=0;
    return{
        next: function(){
            return nextIndex<profiles.length ? {value:profiles[nextIndex++], done:false}:
            {done:true}
        }
    };
}
const candidates = cvIterator(data);

nextCV();
// Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);

function nextCV(){
    const currentCandidate = candidates.next().value;

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){

    image.innerHTML = `<img src='${currentCandidate.image}'>`

    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item border-dark">Name:${currentCandidate.name}</li>
    <li class="list-group-item border-dark">${currentCandidate.age} years old</li>
    <li class="list-group-item border-dark">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item border-dark">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item border-dark">Uses ${currentCandidate.framework} framework</li>
  </ul>`;
    }
    else{
        alert('End of Candidate Applications');
        window.location.reload();
    }
}