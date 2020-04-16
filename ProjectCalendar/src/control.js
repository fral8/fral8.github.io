document.getElementById("generate").addEventListener("click", function(){
  var selected=document.getElementById("anno").value;
  console.log(getDaysOfYear(selected));

});
function getDaysOfYear(year) {
  var totList=[]
  var defineResult={}
  for(var i=0;i<12;i++){
    var names = [ 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat' ];
    var months=["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"];
    var date = new Date(year, i, 1);
    var result = [];
    while (date.getMonth() == i) {
    var dayName=""
    switch (names[date.getDay()]) {
        case "mon":
          dayName="Lunedi'";
          break;
        case "tue":
          dayName="Martedi'";
          break;
        case "wed":
          dayName="Mercoledi'";
          break;
        case "thu":
          dayName="Giovedi'";
          break;
        case "fri":
            dayName="Venerdi'";
            break;
        case "sat":
            dayName="Sabato";
            break;
        case "sun":
            dayName="Domenica";
            break;



}
      result.push(date.getDate()+"/"+(i+1)+"/"+year + "-" + dayName);
      date.setDate(date.getDate() + 1);
    }

    defineResult[months[i]]=result

  }
    totList.push(defineResult);
  var a = document.body.appendChild(
    document.createElement("a")
);
let csvContent = "data:text/csv;charset=utf-8,";
for (monthName in totList[0]){
    csvContent+=monthName+","
    let row = totList[0][monthName].join(",");
    csvContent += row + "\r\n";


}
console.log(csvContent);
a.download = "calendar.csv";
a.href=csvContent;
//a.href = "data:text/plain;base64," + btoa(JSON.stringify(totList));
a.click();
document.body.removeChild(a);



  return totList;
}
