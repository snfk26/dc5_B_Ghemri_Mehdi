
function negative(chiffre)
{
    if(chiffre > 0){
        console.log('N');
        return chiffre;
    } else {

        console.log('P');
        return chiffre;
    }
}

     
negative(25);
negative(-25);