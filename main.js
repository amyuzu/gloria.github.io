$(function(){
	/*--画像の切り替え--*/
	//サムネイル画像をクリックした際の処理
	$('#thumbnail li').on('click', function(){

		//ホバーされた画像のパスと見出し、説明を取得
		//$(this)はイベントが発生した要素を指す
		//1つ目のサムネイルがクリックされた際は1つ目のsrcとheading,description、
		//2つ目のサムネイルがクリックされた際は2つ目のsrcとheading,descriptionを取得する
		let img_src = $(this).data("image");
		let img_heading = $(this).data("heading");
		let img_description = $(this).find('.thumbnail-description').text();

		//メイン画像と同じサムネイルがクリックされた際は画像切り替えを実行しない
		//（メイン画像のsrcとクリックされた画像のsrcが異なる場合のみ実行）
		if($('#main-image').attr("src") != img_src) {

			//メイン画像を0.5秒かけてフェードアウト
			$('#main-image').fadeOut(500, function() {
				//フェードアウト完了後、メイン画像のsrcをクリックされたサムネイルのsrcに変更
				$("#main-image").attr("src", img_src);
				//メイン画像を0.5秒でフェードイン
				//何かの処理が完了後に実行させる場合はコールバック関数を使用
				$("#main-image").fadeIn(500);
			});

			//見出しを変更
			$('#main-heading').text(img_heading);
			$('#main-description').text(img_description);

			//説明文表示
			$('.description').fadeIn(500);
		}
	});
});
