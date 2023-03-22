function Keres()
{
    console.log(tomb)

    var nev = document.getElementById("kereses").value
    var eredmeny = nev.toLowerCase();
    let sz = ""
    
    for (const elem of tomb.prizes) 
    {
        if (typeof elem.laureates === "undefined"){
                //"Nem ismert!"
            }
            else {
                for (const szemely of elem.laureates) {
                    var keresztnev = szemely.firstname
                    var csaladnev = szemely.surname
                    if (typeof keresztnev === "undefined"){
                        //"Nem ismert!
                        
                    }
                    else {
                        var keresztkicsi = keresztnev.toLowerCase();
                        //var csaladkicsi = csaladnev.toLowerCase();
                    if (keresztkicsi.includes(eredmeny))
                        {
                            //alert(csaladnev)
                            
                            sz+=`<tr>
                            <td>
                            ${szemely.firstname}
                            </td>
                            <td>
                            ${szemely.surname}
                            </td>
                            <td>
                            ${elem.year}
                            </td>
                            </tr>`
                        }  
                    }
                }
                document.getElementById("kiiratas").innerHTML= sz
            }
    }
}
