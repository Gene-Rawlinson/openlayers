goog.provide('ol.test.layer.Tile');

describe('ol.layer.Tile', function() {

  describe('constructor (defaults)', function() {

    var layer;

    beforeEach(function() {
      layer = new ol.layer.Tile({
        source: new ol.source.OSM()
      });
    });

    afterEach(function() {
      goog.dispose(layer);
    });

    it('creates an instance', function() {
      expect(layer).to.be.a(ol.layer.Tile);
    });

    it('provides default preload', function() {
      expect(layer.getPreload()).to.be(0);
    });

  });

});

goog.require('goog.dispose');
goog.require('ol.layer.Tile');
goog.require('ol.source.OSM');
