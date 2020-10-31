$(function() {
	// リサイズ時の処理
	var resize = function() {/*()に何もなしは無名関数*/
		// 操作対象の要素を得る
		var $target = $(".col-xs-3");

		// 横幅を得る
		var w = $target.width();

		$target
		.height(w)	// 高さを横幅と同じに
		.css("font-size", Math.floor(w * 0.66) + "px")
			// フォントサイズを指定
		.css("line-height", w + "px");
			// 行の高さを要素の高さと同じに
	};

	// ウィンドウがリサイズされた際にリサイズを実行
	$(window).resize(resize);

	// 初回リサイズ実行
	resize();


	// 説明を表示
	var showExp = function(target) {
		// 説明を取得
		var exp = $(target).find(".exp").text();

		// 説明を表示
		$("#expArea").val(exp);
	};

	// 各要素にマウスを載せた/離れた際のイベントを追加
	$(".col-xs-3").hover(
		function() {
			$(this).css("background", "#ffc");	// 背景色を変更(カーソルを載せた時)
			showExp(this);	// 説明を表示
		},
		function() {
			$(this).css("background", "#fff");	// 背景色を変更
		}
	);
});


//関数の処理
// let fnc = function (){//無名関数
//    console.log("fncの処理１");
//    console.log("fncの処理２");
// };
// fnc();


//変数のスコープ
let a = 10000; //グローバル変数
let fnc = function(){
	let b = 100;  //ローカル変数
	let fnc2 = function(){
		console.log("fncの中"　+ a);
		console.log("fncの中" + b);
	};
	fnc2(); 
};
fnc();
console.log("fncの外" + a);


(function(){
	let c = 100;
	console.log(c + 100);
})();

// 引数を取る
let fnct = function(a,b) {
	let answer = a*b;
	console.log("計算結果"　+ answer);
};
fnct(2,3);

// 戻り値
// let getNumbers = function(){
// 	let text = "これは戻り値です";
// 	return text;
// 	// returnの後に何も無い場合はundefindと表示される
// };
// let res = getNumbers();
// console.log(res);

// 関数の基本構造
let getArea = function(width, height) {
	if (width < 0){return "error"}
	if (height < 0){return "error"}
	let area = width * height;
				//横かける縦
	return area;			
};
let res = getArea(-3,4);
// 一番上のfunction(width, height)にいれる値
console.log("面積は" + res);


