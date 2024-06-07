$(function(){
	/*--画像の切り替え--*/
	//サムネイル画像をクリックした際の処理
	$('#thumbnail img').on('click', function(){

	//ホバーされた画像のパス取得
	//$(this)はイベントが発生した要素を指す
	//1つ目のサムネイルがクリックされた際は1つ目のsrc、
	//2つ目のサムネイルがクリックされた際は2つ目のsrcを取得する
	let img_src = $(this).attr("src");

		//メイン画像と同じサムネイルがクリックされた際は画像切り替えを実行しない
		//（メイン画像のsrcとクリックされた画像のsrcが異なる場合のみ実行）
		if($('mainvisual img').attr("src") != img_src) {

			//メイン画像を0.5秒かけてフェードアウト
			//フェードアウト完了後、メイン画像のsrcをクリックされたサムネイルのsrcに変更
			//メイン画像を0.5秒でフェードイン
			//何かの処理が完了後に実行させる場合はコールバック関数を使用
			$('#mainvisual img').fadeOut(500, function() {
				$("#mainvisual img").attr({src:img_src});
				$("#mainvisual img").fadeIn(500);
			})
		}
	});
});
