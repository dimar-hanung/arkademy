function findSame(words){

if (words.constructor.toString().indexOf("Array") != -1) {
    map = {};

let normalizedWords = words.map( function( word ){
  return word.split('').sort().join('');
});


normalizedWords.forEach( function ( normalizedWord, index){
  map[normalizedWord] = map[normalizedWord] || [];
  map[normalizedWord].push( words[index] );
});


Object.keys( map ).forEach( function( normalizedWord , index  ){
  let combinations = map[normalizedWord];
  if( combinations.length > 1 ){
    console.log(combinations.join(' ') );
  }else{
  	console.log('tidak ditemukan')
  }
});
}else{
	console.log('bukan array')
	return false;
}

}


//###test

findSame(["cat", "listen", "code", "act", "silent", "tac"])
findSame(["cat", "listen"])
