const quote = document.querySelector('#quote')
const author = document.querySelector('#auth')
const btn = document.querySelector('#btn')

// const generatequotes = () => {
//     fetch('https://api.quotable.io/random?minLength=100&maxLength=140')
//     .then((res) =>  res.json()) 
//     .then((data) => {
//         quote.innerHTML = data.content;
//         author.innerHTML = data.author;
//     })

//     .catch((error) => {
//         console.log(error);
//     })
// }

// generatequotes();
// btn.addEventListener('click', generatequotes)


// Another method by async await

const generatequotes = async () =>{
    try{
        const res = await fetch('https://api.quotable.io/random?minLength=100&maxLength=140');
        const data = await res.json()
        quote.innerHTML = data.content;
        author.innerHTML = data.author;
    }catch(err){
        console.log('the error is ${err}');
    }

}
generatequotes();
btn.addEventListener('click', generatequotes)