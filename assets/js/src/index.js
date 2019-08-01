$(document).ready(function () {
  var wechatPage = document.createElement('div');
  var img = document.createElement('img');
  wechatPage.classList.add('wechatPage');
  img.setAttribute('src','../../../assets/images/wechat.png');
  wechatPage.append(img);
  $('.links-of-author-item').eq(2).addClass('wechat');
  $('.links-of-author-item').eq(2).css({'position':'relative'});
  $('.links-of-author-item').eq(2).append(wechatPage);
  console.log( $('.links-of-author-item'))
});