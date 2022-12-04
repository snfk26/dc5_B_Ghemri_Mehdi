
let n1;
let n2;
let n3;

function comb()
{
    
        let row=[]
        for (let n1 = 0; n1 < 10; n1++) {
          for (let n2 = n1 + 1; n2 < 10; n2++) {
            for (let n3 = n2 + 1; n3 < 10; n3++) {
                row+= [n1] + [n2] + [n3];
            }
          }
        
        console.log(row);
      }
   
}

     
comb();