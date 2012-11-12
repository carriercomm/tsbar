/*
 * Provide a search widget with a popup to enter and clear search terms.
 * Test suite can get a handle on this for clean slate testing.
 */
tsbar.initSearchWidget = function(exports, $) {

    function SearchWidget() {

        this.$el = $('<button class="tsbar-search-btn">Search</button>');

        this.$popup = $('<div class="tsbar-popup">' +
            '<span>Search:</span>' +
            '<input id="query-text" type="text" name="query"/>' +
            '<input id="search-button" type="submit" value="Find"/>' +
            '<input id="clear-button" type="submit" value="Clear"/>' +
            '<div id="search-results"></div>' +
            '</div>');

        this._widget = tsbar.Widget({
            el: this.$el,
            popup: this.$popup
        });
    }

    SearchWidget.prototype.getWidget = function() {
        return this._widget;
    };

    SearchWidget.prototype._registerListeners = function() {
        this.$popup.find('#search-button').click(this._doSearch);
        this.$popup.find('#clear-button').click(this._doClear);
    };

    SearchWidget.prototype._doSearch = function() {
        var query = $('#query-text').val();
        $('#search-results').load('/hsearch?q=' + query + ' #container');
    };

    SearchWidget.prototype._doClear = function() {
        $('#search-results').html('');
        $('#query-text').val('');
    };

    function main() {
        var searchWidget = new SearchWidget();
        searchWidget._registerListeners();

        exports.tsbar.searchWidget = searchWidget.getWidget();
    }

    main();

};

(function(exports, $) {

    tsbar.initSearchWidget(exports, $);

}(window, jQuery));
