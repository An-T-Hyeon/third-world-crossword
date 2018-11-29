// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "위구르족의 종교이자 세계 5대 종교 중 하나로, 유일신 알라를 숭배하는 이 종교의 이름은?",
					answer: "이슬람",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 3
				},
			 	{
					clue: "위구르족이 주로 거주하는 중국의 행정 구역은 OO 위구르 자치구이다.",
					answer: "신장",
					position: 2,
					orientation: "across",
					startx: 3,
					starty: 1
				},
				{
					clue: "중국은 OOOO의 원칙 하에 모든 소수민족을 독립을 필사적으로 막으려 한다. 중국 정부의 4가지 소수민족 정책 기조 중 가장 중요한 이것은?",
					answer: "분리불가",
					position: 3,
					orientation: "across",
					startx: 5,
					starty: 2
				},
				{
					clue: "신해혁명으로 청이 멸망하고 내전으로 중국이 혼란에 빠지자 이를 틈타 위구르족이 건립하고 임시 정부를 세운 나라의 이름은?",
					answer: "동투르키스탄",
					position: 4,
					orientation: "across",
					startx: 2,
					starty: 7
				},
			
				{
					clue: "위구르족의 민족성을 억제하고 반강제적으로 그들을 한족에 동화시키기 위해 강행한 정책은?",
					answer: "한족이주정책",
					position: 1,
					orientation: "down",
					startx: 1,
					starty: 1
				},
				{
					clue: "중국 정부가 공식적으로 인정한 56개 민족의 하나로 터키계 민족이며, 카자흐스탄, 키르기스스탄, 러시아와 터키에도 소수가 살고 있는 이 민족의 이름은?",
					answer: "위구르족",
					position: 2,
					orientation: "down",
					startx: 4,
					starty: 5
				},
				{
					clue: "중국은 위구르족의 일부가 OO에 가입했다는 점을 근거로 탄압을 정당화하고 있다. *발음으로 적어주세요",
					answer: "아이에스",
					position: 3,
					orientation: "down",
					startx: 6,
					starty: 4
				},
				{
					clue: "2014년 9월 23일, 중국 정부의 위구르족 정책을 비판하던 위구르족 저명 경제학자인 일함 토티 전 중앙민족대학 교수가 OO OO죄죄죄죄 혐의로 무기징역을 선고받음",
					answer: "국가분열",
					position: 4,
					orientation: "down",
					startx: 8,
					starty: 1
				}
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
