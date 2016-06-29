'use strict';

var meta = require('./lib/meta');

module.exports = {

  error: {
    CaseNotFoundError: require('./lib/error/caseNotFoundError').CaseNotFoundError,
    ServiceUnavailableError: require('./lib/error/serviceUnavailableError').ServiceUnavailableError
  },
  enum: {
    CountryEnum: require('./lib/model/countryEnum').CountryEnum,
    StatusEnum: require('./lib/model/statusEnum').StatusEnum
  },
  model: {
    /**
     * the authorResponse model and builder.
     * @property authorResponse
     * @type authorResponse
     * @static
     */
    authorResponse: require('./lib/model/response/authorResponse'),

    /**
     * the caseResponse model and builder.
     * @property caseResponse
     * @type caseResponse
     * @static
     */
    caseResponse: require('./lib/model/response/caseResponse'),

    /**
     * the mainImageResponse model and builder.
     * @property mainImageResponse
     * @type mainImageResponse
     * @static
     */
    mainImageResponse: require('./lib/model/response/mainImageResponse'),

    /**
     * the newsCollectionResponse model and builder.
     * @property newsCollectionResponse
     * @type newsCollectionResponse
     * @static
     */
    newsCollectionResponse: require('./lib/model/response/newsCollectionResponse'),

    /**
     * the newsResponse model and builder.
     * @property newsResponse
     * @type newsResponse
     * @static
     */
    newsResponse: require('./lib/model/response/newsResponse'),

    /**
     * the authorRequest model and builder.
     * @property authorRequest
     * @type authorRequest
     * @static
     */
    authorRequest: require('./lib/model/request/authorRequest'),

    /**
     * the imageRequest model and builder.
     * @property imageRequest
     * @type imageRequest
     * @static
     */
    imageRequest: require('./lib/model/request/imageRequest'),

    /**
     * the newsRequest model and builder.
     * @property newsRequest
     * @type newsRequest
     * @static
     */
    newsRequest: require('./lib/model/request/newsRequest')

  },

  /**
   * the version of the library
   * @property VERSION
   * @type String
   * @static
   */
  VERSION: meta.VERSION
};


