let count_home = 0
let count_guest = 0
let show_home = document.getElementById('homeoutput')
let show_guest = document.getElementById('guestoutput')

function add1(type){
    if (type == 'home') {
        count_home +=1
        show_home.innerText = count_home
        
    } else {
        count_guest +=1
        show_guest.innerText = count_guest
    }
}

function add2(type){
    if (type == 'home') {
        count_home +=2
        show_home.innerText = count_home
        
    } else {
        count_guest +=2
        show_guest.innerText = count_guest
    }
}

function add3(type){
    if (type == 'home') {
        count_home +=3
        show_home.innerText = count_home
        
    } else {
        count_guest +=3
        show_guest.innerText = count_guest
    }
}

function reset(){
    count_home = 0
    count_guest = 0
    show_home.innerText = count_home
    show_guest.innerText = count_guest
}
