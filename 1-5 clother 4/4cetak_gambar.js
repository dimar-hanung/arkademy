   function cetak_gambar(besar) {


        let output = [];
        let printOutput = '';

        if (besar % 2 == 0) {
            return 'harus memasukan angka ganjil';
        }

        for (var i = 0; i < besar; i++) {

            let baris = '';
            let a = 0;
            while (a < besar) {
                if (a == 0) { baris += '*' }
                if (a == besar - 1) { baris += '*' }
                if (a != 0 && a != besar - 1) {
                    baris += '=';
                }

                a++;
                //console.log(baris);
            }

            output.push(baris);

        }

        let change = Math.floor(output.length / 2);
        output[change] = output[change].replace(/=/g, '*');

        for (var i = 0; i < output.length; i++) {
            printOutput += output[i] + '\n';
        }

        return ' ' + printOutput.split('').join(' ');

    }




    //#test 1
    console.log(cetak_gambar(5));
