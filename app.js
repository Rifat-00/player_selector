
document.getElementById('btn').addEventListener('click',function(){
    // console.log('hello');
    const player_box = document.getElementById('item');
    const element = document.createElement('li');
    element.innerText = 'hello';
    player_box.appendChild(element)

    let numb = document.getElementById('item').children.length;
    if(numb > 5){
        alert('you should not add more')
    }
})