var button = document.querySelector('.btn');
var inputValue = document.querySelector('.inputValue');
var nama = document.querySelector('.nama');
var ket = document.querySelector('.ket');
var suhu = document.querySelector('.suhu');

button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=7f27214484dc61d89cc71da5d61378ec')
    .then(response => response.json())
    .then(data => {
        var namaValue = data['name'];
        var suhuValue = data['main']['temp'];
        var ketValue = data['weather'][0]['description'];

        nama.innerHTML = namaValue;
        suhu.innerHTML = suhuValue;
        ket.innerHTML = ketValue;
    })


    .catch(err => alert("Salah memasukkan nama kota!"))
})
