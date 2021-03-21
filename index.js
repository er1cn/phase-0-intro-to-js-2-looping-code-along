function writeCards(names,event) {
 const thankYouNotes = []
 for (let i = 0; i < names.length; i++) {
     const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
     thankYouNotes.push(message);
 }   
 return thankYouNotes;
}


function countDown(number) {
    for (let i= number; i >= 0; i--) {
        console.log(i);
    }
    
}