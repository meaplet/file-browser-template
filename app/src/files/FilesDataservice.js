/**
 * Files DataService
 * Uses embedded, hard-coded data model; acts asynchronously to simulate
 * remote data service call(s).
 *
 * @returns {{loadAll: Function}}
 * @constructor
 */
function FilesDataservice($q, $log) {
  var files = [
        {
          name: 'IMG_4130.jpg',
          modified: new Date(),
          img: 'delete',
          offline: true
        },
        {
          name: 'IMG_4131.jpg',
          modified: new Date(),
          img: 'download'
        },
        {
          name: 'IMG_4132.jpg',
          modified: new Date(),
          img: 'folder'
        },
        {
          name: 'IMG_4133.jpg',
          modified: new Date(),
          img: 'grid'
        },
        {
          name: 'IMG_4134.jpg',
          modified: new Date(),
          img: 'info'
        },
        {
          name: 'IMG_4135.jpg',
          modified: new Date(),
          img: 'list'
        },
        {
          name: 'IMG_4136.jpg',
          modified: new Date(),
          img: 'camera'
        },
      ];

    $log = $log.getInstance( "FilesDataservice" );
    $log.debug( "instanceOf() ");

    // Promise-based API
    return {
      loadAll : function() {
        $log.debug("loadAll()");

        // Simulate async nature of real remote calls
        return $q.when(files);
      }
    };
}

export default [ '$q', '$log', FilesDataservice ];

