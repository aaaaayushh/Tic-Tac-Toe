const playerFactory = (name)=>{
    const getName =()=>name;
    
    return {getName}
}; 

const sub = document.getElementById('submit');
    const p1 = document.getElementById('player1');
    const p2 = document.getElementById('player2');
    sub.onclick = ()=>{
        console.log('clicked submit');
        if(p1.value === '' || p2.value === '' || p1.value === p2.value){
            alert('Please enter valid names');
        }
    const PLAYER1 = playerFactory(p1.value);
    console.log(PLAYER1.getName());
    const PLAYER2 = playerFactory(p2.value);
    console.log(PLAYER2.getName());
    }
const gameBoard = (()=>{
    
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
    /*const result =(num)=>{
        //console.log('result called');
        if(num==0){
            console.log('1 wins');
            alert(PLAYER1.getName()+' wins');
        }
        else    
            alert(PLAYER2.getName()+' wins');
    }*/
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
                        alert(PLAYER1.getName()+' wins!');
                    }
                    if(!gameboard.some(checkNum)){
                        alert("Tie");
                    }
                }
                else{
                    item.innerHTML = 'O';
                    gameboard[item.id]= 'O';
                    if(checkRes(gameboard,item.id)){
                        alert(PLAYER2.getName()+' wins!');
                    }
                    if(!gameboard.some(checkNum)){
                        alert("Tie");
                    }
                }
                i++;
            }
        })
        
    });

})();
