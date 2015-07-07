import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  isNewSerializerAPI: true
});
/*DS.RESTSerializer.extend({
   isNewSerializerAPI: true
  //defaultSerializer: '-json-api'
});
*/

