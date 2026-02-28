const { createCanvas, loadImage, registerFont } = require('canvas');
const path = require('path');

// Đăng ký font (Đảm bảo bạn có file font trong assets/fonts)
// registerFont(path.join(__dirname, '../../assets/fonts/bold.ttf'), { family: 'StatsFont' });

async function drawCard(player) {
    const canvas = createCanvas(400, 600);
    const ctx = canvas.getContext('2d');

    // 1. Load Background & Player
    const [bg, playerImg] = await Promise.all([
        loadImage(path.join(__dirname, `../../assets/frames/${player.rarity.toLowerCase()}.png`)),
        loadImage(player.image_url)
    ]);

    // 2. Vẽ nền và Cầu thủ
    ctx.drawImage(bg, 0, 0, 400, 600);
    ctx.drawImage(playerImg, 50, 80, 300, 320);

    // 3. Cấu hình Chữ
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    
    // Tên cầu thủ
    ctx.font = 'bold 36px sans-serif';
    ctx.fillText(player.player_name.toUpperCase(), 200, 440);

    // Chỉ số OVR (Trung bình cộng)
    const ovr = Math.round((player.pac + player.sho + player.pas + player.dri + player.def + player.phy) / 6);
    ctx.font = 'bold 48px sans-serif';
    ctx.fillText(ovr, 70, 130);

    // 6 Chỉ số chi tiết
    ctx.font = '22px sans-serif';
    ctx.textAlign = 'left';
    const sX1 = 90, sX2 = 230;
    ctx.fillText(`${player.pac} PAC`, sX1, 495);
    ctx.fillText(`${player.sho} SHO`, sX1, 530);
    ctx.fillText(`${player.pas} PAS`, sX1, 565);
    ctx.fillText(`${player.dri} DRI`, sX2, 495);
    ctx.fillText(`${player.def} DEF`, sX2, 530);
    ctx.fillText(`${player.phy} PHY`, sX2, 565);

    return canvas.toBuffer();
}

module.exports = { drawCard };
