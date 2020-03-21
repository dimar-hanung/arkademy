
    	if (isNaN(jumlah)) {return 'harus berupa angka'}
    	if (jumlah<=0) {return 'harus lebih dari 0'}

        let pagar = "";
        for (let row = 0; row < jumlah; row++) {

            for (let col = -1; col < row; col++) {
                pagar += "#";
            }
            pagar += "\n";
        }

        return pagar

    }


    console.log(triangle(5));
