//Math.ceil() =====> fungsi pembulatan angka ke atas
<script>
		var a1 = 0.7;
		var b1 = Math.ceil(a1);
		console.log(b1); // Hasil 1
		
		var a2 = 1.2;
		var b2 = Math.ceil(a2);
		console.log(b2); // Hasil 2
		
		var a3 = 3.6;
		var b3 = Math.ceil(a3);
		console.log(b3); // Hasil 4
	</script>


//Math.floor() ========> fungsi pembulatan angka ke bawah

<script>
		var a1 = 0.7;
		var b1 = Math.floor(a1);
		console.log(b1); // Hasil 0
		
		var a2 = 1.2;
		var b2 = Math.floor(a2);
		console.log(b2); // Hasil 1
		
		var a3 = 3.9;
		var b3 = Math.floor(a3);
		console.log(b3); // Hasil 3
	</script>

// Math.round() ======> fungsi pembulatan yang menghasilkan bilangan bulat terdekat dari bilangan aslinya


<script>
		var a1 = 0.7;
		var b1 = Math.round(a1);
		console.log(b1); // Hasil 1
		
		var a2 = 1.2;
		var b2 = Math.round(a2);
		console.log(b2); // Hasil 1
		
		var a3 = 3.9;
		var b3 = Math.round(a3);
		console.log(b3); // Hasil 4


var number = 12.3456789
var rounded = Math.round(number * 10) / 10
// rounded is 12.3

	</script>

// toFixed();  Memotong beberapa angka di belakang koma(,)
<script>
var angka = 5.3428419;
hasil = angka.toFixed(4);
document.write(hasil); // hasil 5.3428
</script>



<script>
  var original=28.453

// 1.- round "original" to two decimals
var result = Math.round (original * 100) / 100  //returns 28.45

// 2.- round "original" to 1 decimal
var result = Math.round (original * 10) / 10  //returns 28.5

// 3.- round 8.111111 to 3 decimals
var result = Math.round (8.111111 * 1000) / 1000  //returns 8.111

</script>

<script>
    function RoundAndFix (n, d) {
    var m = Math.pow (10, d);
    return Math.round (n * m) / m;
}
</script>
<script>
    var value = Math.round(234.567*100)/100
</script>
