module.exports = {
  ci: {
       collect: {
      url: ['https://gamesglobal.com/',
	    //'https://gamesglobal.com/OurBusiness',
	    //'https://gamesglobal.com/Media',
	    //'https://gamesglobal.com/ContactUs'
	   ],
      numberOfRuns: 1
    },
    assert: {
      assertions: {
		'categories.performance' : ["error", {"minScore": 0.8, "aggregationMethod": "pessimistic"}],     
        	'categories.accessibility' : ["error", {"minScore": 0.75, "aggregationMethod": "optimistic"}],
		'categories.seo' : ["error", {"minScore":  0.65, "aggregationMethod": "median-run"}],
        	'categories.best-practices' : ["error", {"minScore":  0.7, "aggregationMethod": "median"}],
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
