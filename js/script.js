window.onload = function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    ctx.imageSmoothingEnabled = true;

    // 初期化: キャンバスを白で塗りつぶす
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // DPR とキャンバスの大きさを取得
    const dpr = window.devicePixelRatio;
    const rect = canvas.getBoundingClientRect();

    // キャンバスの「実際の」大きさを設定
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    // 正しい描画操作を保証するためにコンテキストの変倍
    ctx.scale(dpr, dpr);

    // キャンバスの「描画される」大きさを設定
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;


    // キャンバスクリックイベントリスナーを設定
    canvas.addEventListener('click', (event) => {
        // クリック位置のピクセル座標を取得
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // クリック位置のピクセルの色を変更（例: 赤色）
        changePixelColor(ctx, x, y, '#FF0000');
    });

    canvas.addEventListener("mouseover", (event) => {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        changePixelColor(ctx, x, y, '#FF0000');
    });

    function changePixelColor(ctx, x, y, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, 1, 1);
    }
};
