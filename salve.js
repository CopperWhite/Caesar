$(function(){
	var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	$('#start-button').on('click', function () {
		var result = [];
		var word = $('#text-content').val().toLowerCase().split('');
		var shift = Number($('#shift').val());
		for (var i = 0; i <word.length; i++) {
			for (var j = 0; j<26; j++) {
				if (word[i] == alphabet[j]) {
					if (j+shift>26) {
						var letter = alphabet[j+shift-26]
					} else {
						var letter = alphabet[j+shift];
					}
					$('#result-container').append(letter);
				}
			}
		}
	});
});