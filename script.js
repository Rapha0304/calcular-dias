
const countDays = clicked_id => {

  const calcula = (elemento1, elemento2, day) => {
    const initialDate = document.getElementById(elemento1).value
    const dayIni = new Date(initialDate).getUTCDate()
      
    const finalDate = document.getElementById(elemento2).value
    const dayEnd = new Date(finalDate).getUTCDate()
  
    const diff = (dayEnd - dayIni) + ' Dias'

    document.getElementById(day).innerHTML = diff
  }
    
  if(clicked_id === "button1"){
    calcula('date_ini1', 'date_end1', 'days1')
  } else {
    calcula('date_ini2', 'date_end2', 'days2')
  }

}
