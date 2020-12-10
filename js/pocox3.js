    var pageController = 'Static';
    var pageAction = 'poco-x3-nfc';
    var APP_LOCAL = 'id',
        GTM_ID = '',
        GTAG_ID = '',
        GTAG_ACCESSORIES_ID = '',
        GTAG_CART_ID = '',
        GTAG_CONFIRM_ID = '',
        GTAG_AFTERPAYPAL_ID = '',
        ACCESSORIES_WORD = 'view_content',
        CART_WORD = 'Add_to_cart',
        CONFIRM_WORD = 'purchase',
        AFTERPAYPAL_WORD = 'payment_success',
        CURRENCY='';

    switch (APP_LOCAL) {
      case 'ru':
        // GTM_ID = 'GTM-PMKBW9N';
        GTAG_ID = 'AW-794078294';
        GTAG_ACCESSORIES_ID = 'AW-794078294/gCwWCL_uqYcBENbY0voC';
        GTAG_CART_ID = 'AW-794078294/pwkZCMSukocBENbY0voC';
        GTAG_CONFIRM_ID = 'AW-794078294/KARLCPf0oIcBENbY0voC';
        GTAG_AFTERPAYPAL_ID = 'AW-794078294/XtlYCImvkocBENbY0voC';
        CURRENCY='RUB';
        break;
      case 'id':
        // GTM_ID = 'GTM-5FDLVVG';
        GTAG_ID = 'AW-794078317';
        GTAG_ACCESSORIES_ID = 'AW-794078317/yl8tCLS6oIcBEO3Y0voC';
        GTAG_CART_ID = 'AW-794078317/IDwsCKinqYcBEO3Y0voC';
        GTAG_CONFIRM_ID = 'AW-794078317/8_rbCIuIpIcBEO3Y0voC';
        GTAG_AFTERPAYPAL_ID = 'AW-794078317/3z89CM24oIcBEO3Y0voC';
        CURRENCY='USD';
        break;
      case 'it':
        GTAG_ID = 'AW-794023508';
        GTAG_ACCESSORIES_ID = 'AW-794023508/XUDTCMKH65gBENSsz_oC';
        GTAG_CART_ID = 'AW-794023508/d5G6CO2I65gBENSsz_oC';
        GTAG_CONFIRM_ID = 'AW-794023508/OKONCM7j6pgBENSsz_oC';
        GTAG_AFTERPAYPAL_ID = 'AW-794023508/WSP2CKKF65gBENSsz_oC';
        CURRENCY='EUR';
        break;
      case 'fr':
        GTAG_ID = 'AW-794011041';
        GTAG_ACCESSORIES_ID = 'AW-794011041/AGR6CODm4JgBEKHLzvoC';
        GTAG_CART_ID = 'AW-794011041/3AKxCPHN9JgBEKHLzvoC';
        GTAG_CONFIRM_ID = 'AW-794011041/pdgdCO_p6pgBEKHLzvoC';
        GTAG_AFTERPAYPAL_ID = 'AW-794011041/R9s9COPp6pgBEKHLzvoC';
        CURRENCY='EUR';
        break;
      case 'es':
        GTAG_ID = 'AW-794024003';
        GTAG_ACCESSORIES_ID = 'AW-794024003/ti86COOK65gBEMOwz_oC';
        GTAG_CART_ID = 'AW-794024003/2cGSCICQ4ZgBEMOwz_oC';
        GTAG_CONFIRM_ID = 'AW-794024003/IHBMCKWO4ZgBEMOwz_oC';
        GTAG_AFTERPAYPAL_ID = 'AW-794024003/5vmiCMr34JgBEMOwz_oC';
        CURRENCY='EUR';
        break;
      case 'uk':
        GTAG_ID = 'AW-780214613';
        GTAG_ACCESSORIES_ID = 'AW-780214613/LJFGCITn4JgBENXChPQC';
        GTAG_CART_ID = 'AW-780214613/-fWQCMbq4JgBENXChPQC';
        GTAG_CONFIRM_ID = 'AW-780214613/KEzDCJyg-JMBENXChPQC';
        GTAG_AFTERPAYPAL_ID = 'AW-780214613/uWTJCNnu6pgBENXChPQC';
        CURRENCY='GBP';
        break;
      default:
        break;
    }


$(function () {
  xiaomi.buyWay($('.J-btn'),
                {
                  bespeakUrl: "https://www.mi.co.id/id/hdindex/openbuy/",
                  productType: 'poco-x3-nfc',
                  text: {
                    outOfStock: '' || 'Stok habis',
                    buy: '' || 'Beli sekarang',
                    bespeak: '' || 'Daftar',
                    beforeFlashSale: '' || 'Segera',
                    notify: '' || 'Beritahu saya',
                  }
                });
});

    
    xmot('clickWith', {
          targetSelector       :'.main-category a[data-ot-info]',
          targetDataAttr       : 'data-ot-info',
        }, function(data, el) {
          data.elementName     = data.elementName || ''
          data.elementTitle    = data.elementTitle || ''
          data.subModuleTitle  = data.subModuleTitle || ''
          data.linkUrl         = el.href
          data.tip             = data.tip || {}
          data.tip.d           = data.d
          data.tip.c           = 3
          data.tip.e           = 3084

          return data
        })

        
        var _msq = _msq || [],
            idc = 'id';
        
        _msq.push(['setDomainId', 109]);
        _msq.push(['trackPageView']);
        (function() {
          var ms = document.createElement('script');
          ms.type = 'text/javascript';
          ms.async = true;
          switch (idc)
          {
            case 'in':
              ms.src = "https://s01.appmifile.com/stat/xmst-in.js";
              break;
            case 'ru':
              ms.src = 'https://i01.appmifile.com/webfile/globalweb/stat/js/xmst_ru.js';
              break;
            default:
              ms.src = 'https://i01.appmifile.com/webfile/globalweb/stat/js/xmst-sg.js?v=20180712';
          }
          var s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(ms, s);
        })();
        
        
        xmot('clickWith', {
          targetSelector: '.footer [data-ot-click]',
        }, function(data) {
          data.modulePos = 0
          data.moduleTitle = 'footer'
          data.tip = data.tip || {}
          data.tip.e = 3086
          return data
        })
       

var isTob = "" === '1',
  specialPage = Number(""),
  specialPageId = Number(""),
  proTag = "poco-x3-nfc",
  needPriceBuy = $('.J_xmProPrice') && $('.J_xmProPrice').length;


function productOtView(productId) {
  var bValue = {
    'overview': 21,
    'specs': 22,
    'review': 23,
    'faq': 24,
    'gallery': 25,
    'features': 26,
    'filter': 27
  }
  var eValue = {
    'overview': 2845,
    'specs': 2848,
    'review': 2849,
    'faq': 2850,
    'gallery': 2851,
    'features': 2852,
    'filter': 2853
  }
  var currentPage = $('.J_nav-bar-con .tab.current').attr('data-ot-tab')
  currentPage = ( currentPage === 'index' || currentPage === 'overall' ) ? 'overview' : currentPage

  if(!currentPage) return

  if(!eValue[currentPage]) {
    if(!specialPage) return

    eValue[currentPage] = specialPage
    bValue[currentPage] = specialPageId || 0
  }

  var extraOtData = {
    tip: {
      b: bValue[currentPage],
      c: 0,
      d: 0,
      e: eValue[currentPage]
    },
    tag: proTag,
    productId: productId || '',
    viewTipDisabledB: [21, 22, 23, 24, 25, 26, 27], 
    viewTipEnabledE: [3086, 3087, 3088, 3089, 3090, 3092, 3093, 3094, 3095, 3096, 3097, 3098, 3099, 3100],
  }

  window.xmot('view', extraOtData)
}

function navTabOtClick(productId) {
  var $navTabDom = $('.J_nav-bar-con [data-ot-tab]')

  if(!!$navTabDom.length) {
    $navTabDom.each(function(index) {
      var $this = $(this)
      var extraOtData = {
        tip: {
          c: 1,
          d: index + 1,
          e: 2846
        },
        modulePos: 0,
        moduleTitle: 'nav',
        elementName: $this.attr('data-ot-tab') === 'index' ? 'overview' : $this.attr('data-ot-tab'),
        elementTitle: $.trim($this.text().replace(/\\\n/g, '')),
        tag: proTag || '',
        productId: productId || ''
      }

      $(this).on('click', 'a', function() {
       
        if($this.hasClass('current')) return

        extraOtData['linkUrl'] = $(this).attr('href') || ''
        xmot('click', extraOtData)
      })
    })
  }
}

function navRelatedOtClick(productId) {
  var $navRelatedDom = $('.J_nav-bar-con [data-ot-related]')

  if(!!$navRelatedDom.length) {
    $navRelatedDom.each(function(index) {
      var $this = $(this)
      var extraOtData = {
        tip: {
          c: 2,
          d: index + 1,
          e: 2847
        },
        modulePos: 0,
        moduleTitle: 'related_product',
        elementName: index + 1,
        tag: proTag || '',
        productId: productId || ''
      }

      $this.on('click', 'a', function() {
        var _this = $(this)
        extraOtData['elementTitle'] = _this.text() ? $.trim(_this.text().replace(/\\\n/g, '')) : ''
        extraOtData['linkUrl'] = _this.attr('href') || ''
        xmot('click', extraOtData)
      })
    })
  }
}

function productOtInit(productId) {
  productOtView(productId)
  navTabOtClick(productId)
  navRelatedOtClick(productId)
}

try {
  
  if(isTob || !needPriceBuy) {
    productOtInit()
  }
} catch(e) {}


var isToB = "" === '1';
function handleModal(event) {
if (/(mi|mistore|mi-store)\.(com|co)/g.test(event.currentTarget.href) && !/(i18n-)?cms\./g.test(location.href)) {
    window.location.href = event.currentTarget.href
} else {
    $('#buy-confirm-modal').css('display', 'block');
    $('#buy-confirm-modal-ok').attr("href", event.currentTarget.href);
}
$('#buy-confirm-modal-x').on('click', function(e) {
  $('#buy-confirm-modal').css('display', 'none');
});
$('#buy-confirm-modal-cancel').on('click', function(e) {
  $('#buy-confirm-modal').css('display', 'none');
});
$('#buy-confirm-modal-ok').on('click', function(e) {
  $('#buy-confirm-modal').css('display', 'none');
});
}
// 购买按钮
$('.sub_nav').on('click', '.btn.btn-small.btn-orange:not(.J_channel_btn)', function(event) {
if (isToB) {
  handleModal(event);
  return false;
}
});
// sales 页面
$('.xm-sales-info .sale-company').on('click', 'a', function(event) {
handleModal(event);
return false;
});
$('.xm-service-content .sale-icon-list').on('click', 'a', function(event) {
handleModal(event);
return false;
});
$('.xm-service-content .discount-infolist').on('click', 'a', function(event) {
handleModal(event);
return false;
});

// wheretobuy 页面
$('.section-supplier .logo-item').on('click', 'a', function(event) {
handleModal(event);
return false;
});
// channel 页面
$('.channel-group .channel-item-list').on('click', 'li a', function(event) {
handleModal(event);
return false;
});


var GLOBAL_CONFIG = {
  goeventurl: 'https://hd.mi.co.id/id',
  wwwSite: 'https://www.mi.co.id/id',
  damiaoSite: "https://tp.mi.co.id/",
  orderSite: "https://buy.mi.co.id/id",
  httpsOrderSite: "https://buy.mi.co.id/id",
  protocol: "",
  damiaoGoodsId:[],
  prsSite: "",
  recSite: "https://rec.store.mi.com/",
  goUrl: "https://go.buy.mi.co.id/id",
  privacyAllow:true,
  uploadUrl : "",
  hdUrl: "https://hd.mi.co.id/id",
  apiUrl: "https://sgp-api.buy.mi.com/id",
  appLocal: {
    name: "id",
    id: "512",
    xmst: "109",
    isUploadGA: "1"
  }
}
;

xiaomi = new Xiaomi(GLOBAL_CONFIG);
xiaomi.logonUser();
    xiaomi.loadMiniCart();
  


// Xiaomi.search.init();
    var _dlProd = [];
  _dlProd.push({id: "29925", name: "POCO X3 Grey 8GB+128GB", price: "3499000"});_dlProd.push({id: "29924", name: "POCO X3 Grey 6GB+64GB", price: "3099000"});_dlProd.push({id: "29927", name: "POCO X3 Blue 8GB+128GB", price: "3499000"});_dlProd.push({id: "29926", name: "POCO X3 Blue 6GB+64GB", price: "3099000"});
  dataLayer = [{
    'ecommerce': {
      'detail': {
        'actionField': {'list': 'Arraytitle'},
        'products': _dlProd
      }
    }
  }];


    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', GTAG_ID);

    if(GTM_ID !== '') {
      (function(w,d,s,l,i){
      w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer', GTM_ID);
    }

    try { // 防止埋点报错
      switch (pageController) {
        // 产品站
        case 'Static':
          gtag('event', 'conversion', {
            'send_to': GTAG_ACCESSORIES_ID,
            'value': 1.0,               //此处为产品总价值，求和
            'currency': CURRENCY           //俄罗斯币种：RUB
          });
          gtag('event', 'page_view', {
            'send_to': GTAG_ID,
            'ecomm_pagetype': 'product',   //此处为pagetype
            'ecomm_prodid': '',     //此处为产品id
            'ecomm_totalvalue': '',  //此处为产品价值，
            'user_id': ''          //此处为用户id，
          });
          break;
          // 单品页
        case 'Commodity':
          gtag('event', 'conversion', {
            'send_to': GTAG_ACCESSORIES_ID,
            'value': 1.0,               //此处为产品总价值，求和
            'currency': CURRENCY           //俄罗斯币种：RUB
          });
          gtag('event', ACCESSORIES_WORD, {
            'send_to': GTAG_ID,
            'ecomm_pagetype': 'product',   //此处为pagetype
            'ecomm_prodid': '',     //此处为产品id
            'ecomm_totalvalue': '',  //此处为产品价值，
            'user_id': ''          //此处为用户id，
          });
          break;
          // 配件列表页
        case 'Accessories':
          gtag('event', 'conversion', {
            'send_to': GTAG_ACCESSORIES_ID,
            'value': 1.0,               //此处为产品总价值，求和
            'currency': CURRENCY           //俄罗斯币种：RUB
          });
          gtag('event', 'page_view', {
            'send_to': GTAG_ID,
            'ecomm_pagetype': 'product',   //此处为pagetype
            'ecomm_prodid': '',     //此处为产品id
            'ecomm_totalvalue': '',  //此处为产品价值，
            'user_id': ''          //此处为用户id，
          });
          break;
        // 购物车
        case 'Cart':
          gtag('event', 'conversion', {
            'send_to': GTAG_CART_ID,
            'value': 1.0,               //此处为产品总价值，求和
            'currency': CURRENCY           //俄罗斯币种：RUB
          });
          gtag('event', CART_WORD, {
            'send_to': GTAG_ID,
            'ecomm_pagetype': 'cart',   //此处为pagetype
            'ecomm_prodid': '',     //此处为产品id
            'ecomm_totalvalue': '',  //此处为产品价值，
            'user_id': ''          //此处为用户id，
          });
          break;
        case 'Buy':
          // 订单
          if (pageAction == 'checkout') {
            if (['it','fr','es','uk'].indexOf(APP_LOCAL) !== -1 ) {
              gtag('event', 'conversion', {
                'send_to': GTAG_CONFIRM_ID,
                'value': 1.0,               //此处为产品总价值，求和
                'currency': CURRENCY,           //币种
                'transaction_id': ''      //具有唯一的订单 ID，比如交易的订单确认号
              });
              gtag('event', CONFIRM_WORD, {
                'send_to': GTAG_ID,
                'ecomm_pagetype': 'payment info',   //此处为pagetype
                'ecomm_prodid': '',     //此处为产品id
                'ecomm_totalvalue': '',  //此处为产品价值，
                'user_id': ''          //此处为用户id，
              });
            }
          } else if (pageAction == 'confirm') { // 支付页面
            if (['ru','id'].indexOf(APP_LOCAL) !== -1 ) {
              gtag('event', 'conversion', {
                'send_to': GTAG_CONFIRM_ID,
                'value': 1.0,               //此处为产品总价值，求和
                'currency': CURRENCY,           //俄罗斯币种：RUB
                'transaction_id': ''      //具有唯一的订单 ID，比如交易的订单确认号
              });
              gtag('event', CONFIRM_WORD, {
                'send_to': GTAG_ID,
                'ecomm_pagetype': 'payment info',   //此处为pagetype
                'ecomm_prodid': '',     //此处为产品id
                'ecomm_totalvalue': '',  //此处为产品价值，
                'user_id': ''          //此处为用户id，
              });
            }
          } else if (pageAction == 'afterpaypal') { // 支付成功页面
            gtag('event', 'conversion', {
              'send_to': GTAG_AFTERPAYPAL_ID,
              'value': 1.0,               //此处为产品总价值，求和
              'currency': CURRENCY,           //俄罗斯币种：RUB
              'transaction_id': ''      //具有唯一的订单 ID，比如交易的订单确认号
            });
            gtag('event', AFTERPAYPAL_WORD, {
              'send_to': GTAG_ID,
              'ecomm_pagetype': 'purchase success',   //此处为pagetype
              'ecomm_prodid': '',     //此处为产品id
              'ecomm_totalvalue': '',  //此处为产品价值，
              'user_id': ''          //此处为用户id，
            });
          }
          break;
        default:
          break;
      }
    }catch(e) {
      console.warn(e);
    }



      window.xmot=window.xmot||function(){(xmot.q=xmot.q||[]).push(arguments)}
      xmot('init', {
        local: 'id',
        platform: 'pc',
        tip: '',
        extra: JSON.parse('' || '{}'),
      })
