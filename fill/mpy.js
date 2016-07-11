function getSearchParameters() {
  var prmstr = window.location.search.substr(1);
  return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}

function transformToAssocArray( prmstr ) {
  var params = {};
  var prmarr = prmstr.split("&");
  for ( var i = 0; i < prmarr.length; i++) {
    var tmparr = prmarr[i].split("=");
    params[tmparr[0]] = tmparr[1];
  }
  return params;
}

var params = getSearchParameters();
var key = 'NwHRc_WkIkPHbCAJohIlZA';
var attribution;
var cover;
var direction;
var sequence;
var imgSize;
var renderMode;

if (params.key && params.cover
   && params.attribution && params.direction
    && params.sequence && params.imgSize
    && params.renderMode) {
  key = params.key;
  attribution = params.attribution == "true" ? true : false;
  cover = params.cover == "true" ? true : false;
  direction = params.direction == "true" ? true : false;
  sequence = params.sequence == "true" ? true : false;
  switch(params.imgSize) {
    case 320:
    imgSize = Mapillary.ImageSize.Size320;
    break;
    case 640:
    imgSize = Mapillary.ImageSize.Size640;
    break;
    case 1024:
    imgSize = Mapillary.ImageSize.Size1024;
    break;
    case 2048:
    imgSize = Mapillary.ImageSize.Size2048;
    break;
    default:
    imgSize = Mapillary.ImageSize.Size2048;
  }
  switch(params.renderMode) {
    case 1:
    renderMode = Mapillary.RenderMode.Fill
    break;
    case 2:
    renderMode = Mapillary.RenderMode.LetterBox;
    break;
    default:
    renderMode = Mapillary.RenderMode.Fill;
  }
}

  var options = {
    "cover": cover,
    "attribution": attribution,
    "direction":direction,
    "sequence": sequence,
    "baseImageSize": imgSize,
    "renderMode": renderMode,
  };


        var mly = new Mapillary.Viewer(
          'mly',
          'cjJ1SUtVOEMtdy11b21JM0tyYTZIQTo2ZmVjNTQ3YWQ0OWI2Yjgx',
          key, options);
