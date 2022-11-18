const hoursElement = document.querySelector('.hora');
const fechaElement = document.querySelector('.fecha');

const months = ['Jan', 'Feb', 'mar', 'apr',
                'May', 'Jun', 'jul', 'Ago',
                'Sep', 'Oct', 'Nov', 'Dic'];
const day = ['Son', 'Mon', 'Tue', 'wed', 'thu', 'fri', 'Sat', ];


const actuualizarHora = setInterval(() => {
    const watch = new Date();
    let getHours = '0' + watch.getHours();
    let getMinutes = '0' + watch.getMinutes();
    let getSeconds = '0' + watch.getSeconds();
    let getMonths = watch.getMonth();
    let getYear = watch.getFullYear();
    let getDay = watch.getDate();
    let amPm = 'A.M.';
    
    if(Number(getHours) > 12) {
        getHours = getHours - 12
        amPm = 'P.M.'
    }
    
    getHours = getHours.toString().slice(-2);
    getMinutes = getMinutes.slice(-2);
    getSeconds = getSeconds.slice(-2);

    hoursElement.textContent = `${getHours}:${getMinutes}:${getSeconds} ${amPm}`;
    fechaElement.textContent = `${months[getMonths]}/${getDay}/${getYear}`;
}, 1000);

/* Se puede parar la ejecucion de un setInterval con cleanSetInterval 
clearInterval(actuualizarHora)
*/