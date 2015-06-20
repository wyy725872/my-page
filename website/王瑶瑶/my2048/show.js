function showNumberWithAnimation( i,j,randNumber){
    var numberCell = $('#number-cell-' +i+"-"+j);

    numberCell.css('background-color',getNumberBackgroundColor( randNumber));
    numberCell.css('color' ,getNumberColor( randNumber));
    numberCell.text( getNumberText(randNumber));

    numberCell.animate({
       width:"100px",
       height:"100px",
       top:getPosTop(i,j),
       left:getPosLeft(i,j)
    },50);//第二个参数为执行时间，此处为50ms

}
function showMoveAnimation(fromx,fromy,tox,toy){
    var numberCell=$('#number-cell-'+fromx+'-'+fromy);
    numberCell.animate({
            top:getPosTop(tox,toy),
            left:getPosLeft(tox,toy)
        },200);
}
function updateScore(score){
    $('#score').text(score);
}