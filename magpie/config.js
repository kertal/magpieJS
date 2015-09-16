var _magpieRootUrl = require.toUrl('magpie').replace(/\?.*$/,'');
require.config({

	packages : [ 
		{
			name : 'magpie',
			location : _magpieRootUrl,
			main : 'main'
		}, 
		{
			name : 'magpie/log',
			location : _magpieRootUrl + '/log',
		}, {
			name : 'magpie/dom/grid',
			location : _magpieRootUrl + '/dom/grid',
			main : 'dom-grid'
		}, {
			name : 'magpie/html5/widget/grid',
			location : _magpieRootUrl + '/html5/widget/grid',
			main : 'main'
		}, {
			name : 'magpie/html5/widget/select',
			location : _magpieRootUrl + '/html5/widget/select',
			main : 'main'
		}, {
			name : 'magpie/resource/properties',
			location : _magpieRootUrl + '/resource/properties',
			main : 'main'
		}, {
			name : 'magpie/html5/customElement',
			location :  _magpieRootUrl + '/html5/customElement',
			main : 'main'
		}
	]


});