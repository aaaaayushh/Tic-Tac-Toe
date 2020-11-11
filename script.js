const playerFactory = (name)=>{
    const getName =()=>name;
    
    return {getName}
}; 
let PLAYER1,PLAYER2;
/*let t =0;
const sub = document.getElementById('submit');
    const p1 = document.getElementById('player1');
    const p2 = document.getElementById('player2');
    sub.onclick = ()=>{
        console.log('clicked submit');
        if(p1.value === '' || p2.value === '' || p1.value === p2.value){
            alert('Please enter valid names');
        }
    PLAYER1 = playerFactory(p1.value);
    //console.log(PLAYER1.getName());
    PLAYER2 = playerFactory(p2.value);
    //console.log(PLAYER2.getName());
    t=1;
    console.log(t);
    }

*/
const start = document.getElementById('start');

const gameBoard = ((x,y)=>{
    /*if(temp ==1){
        console.log(x.getName());
        console.log(y.getName());
    }*/
    const gameboard = [0,1,2,3,4,5,6,7,8];
    let i =0;
    const newGame = document.getElementById('new');
    newGame.onclick = ()=>{
        //console.log('new game clicked');
        location.reload();
    }
    
    const checkRes = (arr,id)=>{
        //console.log('checkRes called');
        switch(Number(id)){
            case 0: if(arr[1]==arr[2] && arr[0]==arr[1]){
                    console.log(arr[0]);
                        return 1;
                    }
                    else if(arr[3]==arr[6] && arr[0]==arr[3]){
                        return 1;
                    }
                    else if(arr[4]==arr[8]&& arr[0]==arr[4]){
                        return 1;
                    }
                    else return 0;
                    
            case 1:if(arr[0]==arr[2] && arr[0]==arr[1]){
                        return 1;
                    }
                    else if(arr[4]==arr[7] && arr[4]==arr[1] ){
                        return 1;
                    }
                    else return 0;
                    
            case 2:if(arr[0]==arr[1] && arr[2]==arr[1] ){
                        return 1;
                    }
                    else if(arr[4]==arr[6] && arr[2]==arr[4] ){
                        return 1;
                    }
                    else if(arr[5]==arr[8] && arr[2]==arr[5]){
                        return 1;
                    }
                    else return 0;
                    
            case 3:if(arr[0]==arr[6] && arr[3]==arr[0] ){
                        return 1;
                    }
                    else if(arr[4] == arr[5]&& arr[3]==arr[4]){
                        return 1;
                    }
                    else return 0;
                    
            case 4:if(arr[1]==arr[7] && arr[4]==arr[1]){
                        return 1;
                    }
                    else if(arr[3]==arr[5] && arr[4]==arr[3]){
                        return 1;
                    }
                    else return 0;
                    
            case 5:if(arr[2]==arr[8] && arr[5]==arr[2]){
                        return 1;
                    }
                    else if(arr[3]==arr[4] && arr[5]==arr[3] ){
                        return 1;
                    }
                    else return 0;
                    
            case 6:if(arr[0]==arr[3]  && arr[0]==arr[6]){
                        return 1;
                    }
                    else if(arr[7]==arr[8] && arr[7]==arr[6] ){
                        return 1;
                    }
                    else if(arr[2]==arr[4] && arr[2]==arr[6]){
                        return 1;
                    }
                    else return 0;
                    
            case 7:if(arr[6]==arr[8] && arr[6]==arr[7]){
                        return 1;
                    }
                    else if(arr[1]==arr[4] && arr[1]==arr[7]){
                        return 1;
                    }
                    else return 0;
                    
            case 8:if(arr[6]==arr[7] && arr[8]==arr[7]){
                        return 1;
                    }
                    else if(arr[0]==arr[4]  && arr[8]==arr[4]){
                        console.log('you are okay');
                        return 1;
                    }
                    else if(arr[2]==arr[5]  && arr[8]==arr[2]){
                        return 1;
                    }
                    else return 0;
                    
        }
    }

    const checkNum = (num)=>{
        let reg = /[0-9]/;
        return reg.test(num);
    }
    const gb = document.querySelectorAll('.gamebox');
    gb.forEach((item)=>{
        item.addEventListener('click',()=>{
            //console.log('clicked '+ item.id);
            if(item.innerHTML === ''){
                if(i%2==0){
                    item.innerHTML = 'X';
                    gameboard[item.id] = 'X';   
                    if(checkRes(gameboard,item.id)){
                        alert(x.getName() + ' wins!');
                        location.reload();
                    }
                    if(!gameboard.some(checkNum) && !checkRes(gameboard,item.id)){
                        alert("Tie");
                    }
                }
                else{
                    item.innerHTML = 'O';
                    gameboard[item.id]= 'O';
                    if(checkRes(gameboard,item.id)){
                        alert(y.getName() + ' wins!');
                        location.reload();
                    }
                    if(!gameboard.some(checkNum) && !checkRes(gameboard,item.id)){
                        alert("Tie");
                    }
                }
                i++;
            }
        })
        
    });

});
start.onclick = ()=>{
    const p1 = document.getElementById('player1');
    const p2 = document.getElementById('player2');
    if(p1.value === '' || p2.value === '' || p1.value === p2.value){
        alert('Please enter valid names');
    }
    PLAYER1 = playerFactory(p1.value);
    //console.log(PLAYER1.getName());
    PLAYER2 = playerFactory(p2.value);
    console.log('game started');
    gameBoard(PLAYER1,PLAYER2);
}