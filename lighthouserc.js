module.exports = {
  ci: {
       collect: {
      url: ['https://gamesglobal.com/'],
      numberOfRuns: 1,
	settings: {
       		configPath: "./desktop_config.js"
      }
    },
    assert: {
      assertions: {
		'categories.performance' : ["warn", {"minScore": 1, "aggregationMethod": "pessimistic"}],
        	'categories.accessibility' : ["warn", {"minScore": 1, "aggregationMethod": "optimistic"}],
		'categories.seo' : ["warn", {"minScore":  1, "aggregationMethod": "median-run"}],
        	'categories.best-practices' : ["warn", {"minScore":  1, "aggregationMethod": "median"}],
        	'categories.pwa' : "off"
      }
    },
    upload: {
      target: 'temporary-public-storage'
    },
    server: {
      // server options here
    },
    wizard: {
      // wizard options here
    },
  },
};
