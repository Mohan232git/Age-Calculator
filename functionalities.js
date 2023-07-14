function yearcal(brith_year , brith_date, brith_month) {
    let date= new Date() ;
    let todayDate = date.getDate() ;
    let present_date = date.getDate();
    let present_month = date.getMonth()+1;
    let count_date = 0;
    let nothing = 0 ;
    let Year = date.getFullYear() - brith_year;
    if(brith_month <= present_month && brith_date <= present_date)  {
        if (brith_date==present_date && brith_month == present_month ) {
                
                present_date = nothing ;
            return[present_date , Year ]
        }
        else if(brith_month == present_month && brith_date < present_date) {
            let differ = present_date - brith_date;
            
            return[differ,Year] ;
        }
      
        else {

            Year;
            return[present_date ,Year]
        }
        
    }
    else {
        Year--;
        return [present_date , Year] ;
    }

}


function monthcount(brith_month , brith_date ) {
    let newDate = new Date() ;
    let present_month = newDate.getMonth()+1 ;
    let present_date = newDate.getDate() ;
    let count_month = null ;
    let new_count_month = 0 ;
   if (brith_month <= present_month) {
    if(brith_month==present_month ) {
        if(brith_date==present_date) {
            return new_count_month ;
        }
        else if(present_date < brith_date) {
            new_count_month = 12 ;
            return new_count_month ;
        }
        else {
            return new_count_month ;
        }
        
    }
  
    else {
        let sub_count = present_month -brith_month;
        return sub_count ;
    }
      
   }
   else {
        for (i = brith_month ; i< 12 ; i++) {
            count_month++ ;
            
        }
        let new_count_month =  count_month + present_month ;
        return new_count_month ;
    }
    
   }





function agecal() {
    let date = new Date();
    let present_month = date.getMonth()+1 ;
    const brith_year = Number( document.getElementById('Year').value );
    const brith_Month = Number(document.getElementById('Month').value );
    const brith_date= Number(document.getElementById('Day').value) ;
    let display_Years = document.getElementById('years') ;
    let display_month = document.getElementById('months') ;
    let display_days = document.getElementById('days') ;
    let tempYear =yearcal(brith_year , brith_date,brith_Month) ;
    let tempMonth =monthcount(brith_Month,brith_date) ;
    display_Years.innerHTML = tempYear[1] ;
    display_month.innerHTML = tempMonth ;
    display_days.innerHTML = tempYear[0] ;
}




    






