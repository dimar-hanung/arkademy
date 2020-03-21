 console.log(longest('Seluruh Arkademian mengucapkan selamat Ramadhan'))
    //simbol masih dihitung
    function longest(kata) {

        kata = kata.split(' ');
        let dataKata = [];

        for (let i = 0; i < kata.length; i++) {

            dataKata.push(kata[i].length)

        }
        //console.log(dataKata)
        let max = Math.max.apply(Math, dataKata);

        for (let x = 0; x < max; x++) {
            if (kata[x].length == max) {
                return kata[x]
            }

        }


    }
