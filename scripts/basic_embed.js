(function() {
	tinymce.create('tinymce.plugins.wpevs', {
		/**
		 * Initializes the plugin, this will be executed after the plugin has been created.
		 * This call is done before the editor instance has finished it's initialization so use the onInit event
		 * of the editor instance to intercept that event.
		 *
		 * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
		 * @param {string} url Absolute URL to where the plugin is located.
		 */
		init : function(ed, url) {
			var t = this;

			t.editor = ed;

			// Register commands
			ed.addCommand('mceWPEVS', function(ui) {
				ed.windowManager.open({
					file : url + '/basic_embed.html?v=9-3',
					width : 500,
					height : 400,
					inline : 1
				}, {
					plugin_url : url
				});
			});

			ed.addCommand('mceInsertTemplate', t._insertTemplate, t);

			// Register buttons
			ed.addButton('wpevs', {'title': 'Embed some EVS video code', 'image': url + '/../images/evs.png', 'cmd': 'mceWPEVS'});
		},

		/**
		 * Creates control instances based in the incomming name. This method is normally not
		 * needed since the addButton method of the tinymce.Editor class is a more easy way of adding buttons
		 * but you sometimes need to create more complex controls like listboxes, split buttons etc then this
		 * method can be used to create those.
		 *
		 * @param {String} n Name of the control to create.
		 * @param {tinymce.ControlManager} cm Control manager to use inorder to create new control.
		 * @return {tinymce.ui.Control} New control instance or null if no control was created.
		 */
		createControl : function(n, cm) {
			return null;
		},

		/**
		 * Returns information about the plugin as a name/value array.
		 * The current keys are longname, author, authorurl, infourl and version.
		 *
		 * @return {Object} Name/value array containing information about the plugin.
		 */
		getInfo : function() {
			return {
				longname : "WP EVS",
				author : 'WebActix',
				authorurl : 'http://webactix.com',
				infourl : 'http://webactix.com/wp-evs-plugin/',
				version : "1.3"
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('wpevs', tinymce.plugins.wpevs);
})();