/*
 * tsbar - v0.1.0 - 2013-08-02
 * https://github.com/tiddlyspace/tsbar
 * Copyright (c) 2013 Osmosoft; Licensed BSD New 
 */
/**
 A stub to get the tsbar into TiddlySpace as a tiddler.
 The common recipe in TiddlySpace refers to this file.
 **/
(function() {

    var body = document.getElementsByTagName('body')[0];
    var tsBar = document.createElement('div');
    tsBar.appendChild(document.createTextNode('TS Bar (Coming Soon)'));
    body.insertBefore(tsBar, body.firstChild);
})();