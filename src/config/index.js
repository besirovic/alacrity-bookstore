/**
 * Config object contains all configuration variables at one place.
 * You can extend this object to add more configuration variables as needed.
 */
export default {
  apollo: {
    /** URI of Apollo server */
    uri: process.env.REACT_APP_APOLLO_SERVER_URI || 'http://localhost:4567/graphql',
  },
};
