function getPosTop(i,j){
    return 20+i*120;
}//计算每个格子的top值
function getPosLeft(i,j){
    return 20+j*120;
}//计算每个格子的left值
function getNumberBackgroundColor( number ){
    switch( number ){
        case 2:return"#eee4da";break;
        case 4:return"#ede0c8";break;
        case 8:return"#f2b179";break;
        case 16:return"#f59563";break;
        case 32:return"#f67c5f";break;
        case 64:return"#f65e3b";break;
        case 128:return"#edcf72";break;
        case 256:return"#edcc61";break;
        case 512:return"#9c0";break;
        case 1024:return"#33b5e5";break;
        case 2048:return"#09c";break;
        case 4096:return"#a6c";break;
        case 8192:return"#93c";break;
    }
    return "black";
}

function getNumberText(number){
    switch(number){
        case 2:return "梦"; break;
        case 4:return "想"; break;
        case 8:return "还"; break;
        case 16:return "是"; break;
        case 32:return "要"; break;
        case 64:return "有"; break;
        case 128:return "的"; break;
        case 256:return "万"; break;
        case 512:return "一"; break;
        case 1024:return "实"; break;
        case 2048:return "现"; break	;
        case 4096:return "了"; break	;
        case 8192:return "呢"; break	;
    }
    return "black";
}
function getNumberColor( number ){
    if( number <=4)
    return"#776e65";

    return"white";
}
function nospace(board){
    for( var i=0;i<4;i++)
       for( var j=0;j<4;j++)
         if(board[i][j]==0)
          return false;
    return true;
}

function canMoveLeft(board){
    for( var i=0;i<4;i++)
    for(var j=1;j<4;j++)
    if( board[i][j]!=0)
      if( board[i][j-1]==0|| board[i][j-1]==board[i][j])
       return true;

    return false;
}

function noBlockHorizontal(row,coll,col2,board){
    for( var i=coll+1;i<col2;i++)
      if(board[row][i]!=0)
      return false;
    return true;
}

function noBlockVertical(col,row1,row2,board){
    for(var i=row1+1;i<row2;i++)
    if(board[i][col]!=0)
    return false;
    return true;
}
function canMoveRight(board){
    for( var i=0;i<4;i++)
        for(var j=2;j>=0;j--)
            if( board[i][j]!=0)
                if( board[i][j+1]==0|| board[i][j+1]==board[i][j])
                    return true;

    return false;
}
function canMoveUp(board){
    for( var j=0;j<4;j++)
        for(var i=1;i<4;i++)
            if( board[i][j]!=0)
                if( board[i-1][j]==0|| board[i-1][j]==board[i][j])
                    return true;

    return false;
}
function canMoveDown(board){
    for( var j=0;j<4;j++)
        for(var i=2;i>=0;i--)
            if( board[i][j]!=0)
                if( board[i+1][j]==0|| board[i+1][j]==board[i][j])
                    return true;

    return false;
}
function nomove(board){
    if(canMoveLeft(board)||
        canMoveRight(board)||
        canMoveUp(board)||
        canMoveDown(board))
    return false;
    return true;
}
