// PixelLatLong
//
// Draws 60 lat/long lines per degree.
var img = ee.Image.pixelLonLat().multiply(60.0);
img = img.subtract(img.floor()).lt(0.05);
var grid = img.select('latitude').or(img.select('longitude'));
centerMap(-122.09228, 37.42330, 12);
addToMap(grid.mask(grid),
         {min: 0, max: 1, palette: '008000'}, 'nautical_mile_grid');