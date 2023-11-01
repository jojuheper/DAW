function  sendInfo(){
    opener.document.getElementById('name').innerHTML= document.getElementById('name').value;
    opener.document.getElementById('address').innerHTML= document.getElementById('address').value;
    opener.document.getElementById('phone').innerHTML= document.getElementById('phone').value;
    opener.document.getElementById('email').innerHTML= document.getElementById('email').value;
    self.close();
}
