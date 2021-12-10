module.exports = {
  ci: {
       collect: {
      url: ['https://gamesglobal.com/'],
      numberOfRuns: 3,
	    settings: {
        configPath: "./desktop_config.js"
      }
    },
    assert: {
      assertions: {
		      'categories.performance' : ["warn", {"minScore": 0.8, "aggregationMethod": "optimistic"}],
        	'categories.accessibility' : ["warn", {"minScore": 0.8}],
		      'categories.seo' : ["warn", {"minScore":  0.8}],
        	'categories.best-practices' : ["warn", {"minScore":  0.8}],
        	'categories.pwa' : "off"
      }
    },
    upload: {
      target: 'temporary-public-storage',
    },
    server: {
      // server options here
    },
    wizard: {
      // wizard options here
    },
  },
};
