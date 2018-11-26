// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "내가 누구게?",
					answer: "안태현",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 1
				},
			 	{
					clue: "태현이가 가장 좋아하는 부침개는?",
					answer: "오징어김치부침개",
					position: 2,
					orientation: "across",
					startx: 2,
					starty: 6
				},
				{
					clue: "태현이가 가장 좋아하는 영화는",
					answer: "컨택트",
					position: 3,
					orientation: "across",
					startx: 3,
					starty: 8
				},

				{
					clue: "태현이가 아들을 낳으면 지어줄 이름은?",
					answer: "안녕",
					position: 1,
					orientation: "down",
					startx: 1,
					starty: 1
				},
				{
					clue: "태현이가 초등학교 때 가장 좋아하던 시간은 OOOO학습시간이다.",
					answer: "현장체험",
					position: 2,
					orientation: "down",
					startx: 3,
					starty: 1
				},
				{
					clue: "태현이가 다니는 과는?",
					answer: "기술경영학부",
					position: 3,
					orientation: "down",
					startx: 7,
					starty: 1
				},
				{
					clue: "응답하라1994에서 태현이가 지지했던 파는?",
					answer: "어남택",
					position: 4,
					orientation: "down",
					startx: 4,
					starty: 6
				},
				{
					clue: "태현이가 가장 좋아하는 곳은?",
					answer: "침대",
					position: 5,
					orientation: "down",
					startx: 8,
					starty: 6
				},
				{
                    clue: "태현이가 가장 잘 잡는 것은? Hint : OO 좀 그만 잡아",
					answer: "트집",
					position: 6,
					orientation: "down",
					startx: 5,
					starty: 8
				}
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
