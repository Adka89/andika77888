const nama = "andika";
let usia = 31; 

const biodata = document.getElementById("biodata");
console.log(biodata);

function generateBiodata () {
    let generasi;

    if (usia > 10 && usia <19 ) {
  generasi="generasi remaja";
    }
     else if (usia > 20 && usia < 30 ) {
    generasi="generasi mapan";
     }
     else if (usia > 30 && usia < 70 ) {
    generasi="generasi tua";
     }
     else {
        
}
 return biodata.innerHTML=generasi;
} 



console.log (nama);
console.log (usia);

generateBiodata();