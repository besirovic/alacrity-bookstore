/** @file Config file contains all configuration variables at one place. */
export default {
  apollo: {
    /** @type {sting} URI of Apollo server */
    uri: process.env.REACT_APP_APOLLO_SERVER_URI || 'http://localhost:4567/graphql',
  },
};
