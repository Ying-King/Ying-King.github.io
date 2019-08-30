$(document).ready(function () {
  var wechatPage = document.createElement('div');
  var img = document.createElement('img');
  wechatPage.classList.add('wechatPage');
  img.setAttribute('src','../../../assets/images/wechat.png');
  wechatPage.append(img);
  $('.links-of-author-item').eq(2).addClass('wechat');
  $('.links-of-author-item').eq(2).css({'position':'relative'});
  $('.links-of-author-item').eq(2).append(wechatPage);

  var qrImg = document.createElement('img');
  qrImg.classList.add('qrImg');
  qrImg.setAttribute('src','../../../assets/images/ying-music.png');
  $('.qrPage').append(qrImg);
  $('.qrImg').eq(1).prop('src','../../../assets/images/ying-mall.png');
  $('.qrImg').eq(2).prop('src','../../../assets/images/ying-travel.png');
});