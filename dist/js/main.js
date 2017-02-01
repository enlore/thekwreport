/* @global PhotoSwipe, PhotoSwipeUI_Default */

var $gallery  = $('.gallery')
  , pswp      = $('.pswp')[0]


/*
 *var items = $figures.map(function (index, elem) {
 *  var $elem = $(elem)
 *
 *  var wxh   = $elem.find('a').data('size').split('x')
 *
 *  return {
 *    src: $elem.find('a').attr('href'),
 *    msrc: $elem.find('img').attr('src'),
 *    w: wxh[0],
 *    h: wxh[1]
 *  }
 *})
 */

function buildItemList (gallerySelector) {
  var $gallery = $(gallerySelector)

  var items = $gallery.find('figure').map(function (index, elem) {
    var $elem = $(elem)
      , $a    = $elem.find('a')
      , $img  = $elem.find('img')
      , wxh   = $a.data('size').split('x')
      , src   = $a.attr('href')
      , msrc  = $img.attr('src')

    return {
      index: index,
      src: src,
      msrc: msrc,
      w: wxh[0],
      h: wxh[1]
    }
  })

  return items
}

var items = buildItemList('.gallery')
  , $figures  = $('.gallery figure')

$figures.on('click', 'a', function (e) {
  e.preventDefault()
  var index = $(e.target).parent('a').data('index')

  var options = {
    index: index
  }

  var galleryBiz = new PhotoSwipe(pswp, PhotoSwipeUI_Default, items, options)

  galleryBiz.init()

  console.log("init")
})

console.log(items)
