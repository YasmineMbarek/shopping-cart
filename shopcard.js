document.getElementById("myDIV").style.display="none";
function article1 (){
  
    var nbr=document.getElementById('nbr-article1').value; nbr++; //console.log(nbr);
    document.getElementById('nbr-article1').value=nbr; //
    var pricetot=Number(document.getElementById('price-total').value);
    var pricearticle1=document.getElementById('price-article1').value; //console.log(Number(pricearticle1))
    document.getElementById('price-total').value=pricetot+=Number(pricearticle1);
}
function article1min () {
    var minus=document.getElementById('icon-minus-article1').value;
    var nbr=document.getElementById('nbr-article1').value; 
    if(nbr>0){
        nbr--; console.log(nbr)
        document.getElementById('nbr-article1').value=nbr; }
    var pricetot=Number(document.getElementById('price-total').value);
    var pricearticle1=document.getElementById('price-article1').value; //console.log(Number(pricearticle1))
    
    document.getElementById('price-total').value=pricetot-=Number(pricearticle1);
}
function heartarticle1 (){
    if(document.getElementById('icon-heart-artical1').style.color=="rgb(0, 0, 0)")
    document.getElementById('icon-heart-artical1').style.color="rgb(255, 0, 0)";
    else
    document.getElementById('icon-heart-artical1').style.color="rgb(0, 0, 0)";
}
function removearticle1(){
    var article1 =document.getElementById('article1');
    var pricetot=Number(document.getElementById('price-total').value);
    var pricearticle1=Number(document.getElementById('price-article1').value);
    var nbr=Number(document.getElementById('nbr-article1').value); 
    var pricetotarticle1= nbr*pricearticle1;
    document.getElementById('price-total').value=pricetot-=pricetotarticle1;
    document.getElementById('article1').remove();
}
function article2 (){
  
    var nbr=document.getElementById('nbr-article2').value; nbr++; //console.log(nbr);
    document.getElementById('nbr-article2').value=nbr; //
    var pricetot=Number(document.getElementById('price-total').value);
    var pricearticle2=document.getElementById('price-article2').value; //console.log(Number(pricearticle1))
    document.getElementById('price-total').value=pricetot+=Number(pricearticle2);
}
function article2min () {
    var minus=document.getElementById('icon-minus-article2').value;
    var nbr=document.getElementById('nbr-article2').value; 
    if(nbr>0){
        nbr--; console.log(nbr)
        document.getElementById('nbr-article2').value=nbr; }
    var pricetot=Number(document.getElementById('price-total').value);
    var pricearticle2=document.getElementById('price-article2').value; //console.log(Number(pricearticle1))
    document.getElementById('price-total').value=pricetot-=Number(pricearticle2);
}
function heartarticle2 (){
    if(document.getElementById('icon-heart-artical2').style.color=="rgb(0, 0, 0)")
    document.getElementById('icon-heart-artical2').style.color="rgb(255, 0, 0)";
    else
    document.getElementById('icon-heart-artical2').style.color="rgb(0, 0, 0)";}
function removearticle2(){
    var article2 =document.getElementById('article2');
    var pricetot=Number(document.getElementById('price-total').value);
    var pricearticle2=Number(document.getElementById('price-article2').value);
    var nbr=Number(document.getElementById('nbr-article2').value); 
    var pricetotarticle2= nbr*pricearticle2;
    document.getElementById('price-total').value=pricetot-=pricetotarticle2;
    document.getElementById('article2').remove();
}
function article3 (){
  
    var nbr=document.getElementById('nbr-article3').value; nbr++; //console.log(nbr);
    document.getElementById('nbr-article3').value=nbr; //
    var pricetot=Number(document.getElementById('price-total').value);
    var pricearticle3=document.getElementById('price-article3').value; //console.log(Number(pricearticle1))
    document.getElementById('price-total').value=pricetot+=Number(pricearticle3);
}
function article3min () {
    var minus=document.getElementById('icon-minus-article3').value;
    var nbr=document.getElementById('nbr-article3').value; 
    if(nbr>0){
        nbr--; console.log(nbr)
        document.getElementById('nbr-article3').value=nbr; }
    var pricetot=Number(document.getElementById('price-total').value);
    var pricearticle3=document.getElementById('price-article3').value; //console.log(Number(pricearticle1))
    document.getElementById('price-total').value=pricetot-=Number(pricearticle3);
}
function heartarticle3 (){
    if(document.getElementById('icon-heart-artical3').style.color=="rgb(0, 0, 0)")
    document.getElementById('icon-heart-artical3').style.color="rgb(255, 0, 0)";
    else
    document.getElementById('icon-heart-artical3').style.color="rgb(0, 0, 0)";
}
function removearticle3(){
    var article3 =document.getElementById('article3');
    var pricetot=Number(document.getElementById('price-total').value);
    var pricearticle3=Number(document.getElementById('price-article3').value);
    var nbr=Number(document.getElementById('nbr-article3').value); 
    var pricetotarticle3= nbr*pricearticle3;
    document.getElementById('price-total').value=pricetot-=pricetotarticle3;
    document.getElementById('article3').remove();
}
function article4 (){
  
    var nbr=document.getElementById('nbr-article4').value; nbr++; //console.log(nbr);
    document.getElementById('nbr-article4').value=nbr; //
    var pricetot=Number(document.getElementById('price-total').value);
    var pricearticle4=document.getElementById('price-article4').value; //console.log(Number(pricearticle1))
    document.getElementById('price-total').value=pricetot+=Number(pricearticle4);
}
function article4min () {
    var minus=document.getElementById('icon-minus-article4').value;
    var nbr=document.getElementById('nbr-article4').value; 
    if(nbr>0){
        nbr--; console.log(nbr)
        document.getElementById('nbr-article3').value=nbr; }
    var pricetot=Number(document.getElementById('price-total').value);
    var pricearticle4=document.getElementById('price-article4').value; //console.log(Number(pricearticle1))
    document.getElementById('price-total').value=pricetot-=Number(pricearticle4);
}
function heartarticle4 (){
    if(document.getElementById('icon-heart-artical4').style.color=="rgb(0, 0, 0)")
    document.getElementById('icon-heart-artical4').style.color="rgb(255, 0, 0)";
    else
    document.getElementById('icon-heart-artical4').style.color="rgb(0, 0, 0)";
}
function removearticle4(){
    var article4 =document.getElementById('article4');
    var pricetot=Number(document.getElementById('price-total').value);
    var pricearticle4=Number(document.getElementById('price-article4').value);
    var nbr=Number(document.getElementById('nbr-article4').value); 
    var pricetotarticle4= nbr*pricearticle4;
    document.getElementById('price-total').value=pricetot-=pricetotarticle4;
    document.getElementById('article4').remove();
}

function article5 (){
  
    var nbr=document.getElementById('nbr-article5').value; nbr++; //console.log(nbr);
    document.getElementById('nbr-article5').value=nbr; //
    var pricetot=Number(document.getElementById('price-total').value);
    var pricearticle5=document.getElementById('price-article5').value; //console.log(Number(pricearticle1))
    document.getElementById('price-total').value=pricetot+=Number(pricearticle5);
}
function article5min () {
    var minus=document.getElementById('icon-minus-article5').value;
    var nbr=document.getElementById('nbr-article5').value; 
    if(nbr>0){
        nbr--; console.log(nbr)
        document.getElementById('nbr-article5').value=nbr; }
    var pricetot=Number(document.getElementById('price-total').value);
    var pricearticle5=document.getElementById('price-article5').value; //console.log(Number(pricearticle1))
    document.getElementById('price-total').value=pricetot-=Number(pricearticle5);
}
function heartarticle5 (){
    if(document.getElementById('icon-heart-artical5').style.color=="rgb(0, 0, 0)")
    document.getElementById('icon-heart-artical5').style.color="rgb(255, 0, 0)";
    else
    document.getElementById('icon-heart-artical5').style.color="rgb(0, 0, 0)";
}
function removearticle5(){
    var article5 =document.getElementById('article5');
    var pricetot=Number(document.getElementById('price-total').value);
    var pricearticle5=Number(document.getElementById('price-article5').value);
    var nbr=Number(document.getElementById('nbr-article5').value); 
    var pricetotarticle5= nbr*pricearticle5;
    document.getElementById('price-total').value=pricetot-=pricetotarticle5;
    document.getElementById('article5').remove();
}
function article6 (){
  
    var nbr=document.getElementById('nbr-article6').value; nbr++; //console.log(nbr);
    document.getElementById('nbr-article6').value=nbr; //
    var pricetot=Number(document.getElementById('price-total').value);
    var pricearticle6=document.getElementById('price-article6').value; //console.log(Number(pricearticle1))
    document.getElementById('price-total').value=pricetot+=Number(pricearticle6);
}
function article6min () {
    var minus=document.getElementById('icon-minus-article6').value;
    var nbr=document.getElementById('nbr-article6').value; 
    if(nbr>0){
        nbr--; console.log(nbr)
        document.getElementById('nbr-article6').value=nbr; }
    var pricetot=Number(document.getElementById('price-total').value);
    var pricearticle6=document.getElementById('price-article6').value; //console.log(Number(pricearticle1))
    document.getElementById('price-total').value=pricetot-=Number(pricearticle6);
}
function heartarticle6 (){
    if(document.getElementById('icon-heart-artical6').style.color=="rgb(0, 0, 0)")
    document.getElementById('icon-heart-artical6').style.color="rgb(255, 0, 0)";
    else
    document.getElementById('icon-heart-artical6').style.color="rgb(0, 0, 0)";
}
function removearticle6(){
    var article6 =document.getElementById('article6');
    var pricetot=Number(document.getElementById('price-total').value);
    var pricearticle6=Number(document.getElementById('price-article6').value);
    var nbr=Number(document.getElementById('nbr-article6').value); 
    var pricetotarticle6= nbr*pricearticle6;
    document.getElementById('price-total').value=pricetot-=pricetotarticle6;
    document.getElementById('article6').remove();
}
////show and hide ///
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";

    } else {
        x.style.display = "none";
    }
}


