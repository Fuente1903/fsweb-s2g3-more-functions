// Aşağıdaki görevleri tamamlayın

import { numbers } from "./sample_data";

/*
  GÖREV 1
  - Input:  Bir dosya yolunu (path) parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon, verilen bir dosya adresideki(path) dosyanın adını vermeli.
  * İpucu:  Dosya adresinin / işaretleri ile bölümlendiğine dikkat et.


  örnek input:  "C:/Users/johnsmith/Music/Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  "Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  ""
  örnek output: ""
*/

const uzanti = '\Users\doruk\Desktop\WORKINTECH\GUN2\fsweb-s2g3-more-functions';
const name = dosyaAdi(uzanti);
const dosyaAdi = (uzanti);
console.log(name);

function dosyaAdiniBul(path) {
  let parcalar = path.split('\Users\doruk\Desktop\WORKINTECH\GUN2\fsweb-s2g3-more-functions');
  let dosyaAdi = parcalar[parcalar.lenght - 1];
  return dosyaAdi;
}

/*
  GÖREV 2
  - Input:  Bir sayı arrayini parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasını dönmeli.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: 46

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: 104  
*/



function ortalamaBul(numbers) {
  if (numbers.length == 0) {
    return null;
  }
  let toplam = 0;
  for (let i = 0; i < numbers.length; i++) {
    toplam += numbers[i];
  }
  return toplam / numbers.length;
}

console.log (ortalamaBul([1,2,3,4,5,6,7,8,9]));




/*
  GÖREV 3
  - Input:  Bir sayı arrayini ve ortalama bulmaya yarayacak bir fonksiyonu parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasından büyük ya da eşit elemanlardan oluşan bir array dönmeli.
  * Çağırırken kendi ortalama fonksiyonunla çağırabilirsin, ama parametrenin tanımlama aşamasında soyut bir ifade olduğunu unutma.
  * f(x) = 2x+5 içerisindeki x değeri gibi.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: [50, 153]

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: [109, 216, 288, 143, 185, 194]
*/



function ortalamadanBuyukleriBul(numbers, buyuk) {
  const buyuktur = buyuk(numbers);
  const sonuc = null;
  for (let i = 0; < i numbers.length; i++) {
    if (numbers[i] >= buyuktur) {
      result.push(numbers[i]);
    }
  }
  return sonuc;
}
console.log(ortalamadanBuyukleriBul(1,2,3,4,5));

/* !!!! Burdan aşağısını değiştirmeyin !!!! */
function as() {
  console.log("Kodlar sorunsuz çalışıyor!");
  return "sa";
}
as();
export { dosyaAdiniBul, ortalamaBul, ortalamadanBuyukleriBul, as };
