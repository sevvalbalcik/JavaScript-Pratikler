const container = document.querySelector('.container')
const count = document.getElementById("count")
const amount = document.getElementById("amount")
const movie = document.getElementById("movie")
const seats = document.querySelectorAll(".seat:not(.reserved)")

getFromLocalStorage();
calculateTotal();

container.addEventListener('click',function(e){
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){
        e.target.classList.toggle('selected')
        calculateTotal()
    }
})

movie.addEventListener('change',function(e){
    calculateTotal()
})
    
function calculateTotal(){
    const selectedSeats = container.querySelectorAll('.seat.selected')

    const selectedSeatsArr = []
    const seatsArr = []

    selectedSeats.forEach(function(seat){
        selectedSeatsArr.push(seat)
    })

    seats.forEach(function(seat){
        seatsArr.push(seat)
    })

    let selectedSeatIndex = selectedSeatsArr.map(function(seat){
        return seatsArr.indexOf(seat)
    })

    const selectedCount = selectedSeats.length
    count.innerText=selectedCount
    amount.innerText=movie.value*selectedCount

    saveToLocalStorage(selectedSeatIndex)
}

function getFromLocalStorage(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))

    if(selectedSeats != null && selectedSeats.length>0){
        seats.forEach(function(seat,index){
            if(selectedSeats.indexOf(index)>-1){
                seat.classList.add('selected')
            }
        })
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex')

    if(selectedMovieIndex!=null){
        movie.selectedIndex=selectedMovieIndex
    }
}

function saveToLocalStorage(index){
    localStorage.setItem('selectedSeats',JSON.stringify(index))
    localStorage.setItem('selectedMovieIndex',movie.selectedIndex)
}


