/**
 * Main App Controller for the Angular Material Starter App
 * @param $scope
 * @param $mdSidenav
 * @param avatarsService
 * @constructor
 */
function FilesController( filesService, $mdSidenav, $mdBottomSheet, $log ) {

  $log = $log.getInstance( "SessionController" );
  $log.debug( "instanceOf() ");

  var self = this;

  self.selected     = null;
  self.files        = [ ];
  self.selectFile   = selectFile;
  self.toggleList   = toggleFilesList;
  self.toggleLayout = toggleFilesView;
  self.share        = share;
  self.layout       = 'list';

  // Load all registered files

  filesService
        .loadAll()
        .then( function( files ) {
          self.files    = [].concat(files);
        });

  // *********************************
  // Internal methods
  // *********************************

  /**
   * Hide or Show the 'left' sideNav area
   */
  function toggleFilesList() {
    $log.debug( "toggleFilesList() ");
    $mdSidenav('left').toggle();
  }

  /**
   * Toggle between list and grid views.
   */
  function toggleFilesView() {
    $log.debug( "toggleFilesView() ");
    self.layout = self.layout == 'list' ? 'grid' : 'list';
    $mdSidenav('left').toggle();
  }

  /**
   * Select the current avatars
   * @param menuId
   */
  function selectFile ( file ) {
    $log.debug( "selectFile( {name} ) ", file);

    self.selected = angular.isNumber(file) ? $scope.files[file] : file;
    self.toggleList();
  }

  /**
   * Show the bottom sheet
   */
  function share($event) {
      $log.debug( "contactFile()");

      var file = self.selected;

      $mdBottomSheet.show({
        parent: angular.element(document.getElementById('content')),
        templateUrl: 'src/files/view/contactSheet.html',
        controller: [ '$mdBottomSheet', '$log', FileSheetController],
        controllerAs: "vm",
        bindToController : true,
        targetEvent: $event
      }).then(function(clickedItem) {
        $log.debug( clickedItem.name + ' clicked!');
      });

      /**
       * Bottom Sheet controller for the Avatar Actions
       */
      function FileSheetController( $mdBottomSheet, $log ) {

        $log = $log.getInstance( "FileSheetController" );
        $log.debug( "instanceOf() ");

        this.file = file;
        this.items = [
          { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
          { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
          { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
          { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
        ];
        this.performAction = function(action) {
          $log.debug( "makeContactWith( {name} )", action);
          $mdBottomSheet.hide(action);
        };

      }
  }
}

export default [
    'filesService', '$mdSidenav', '$mdBottomSheet', '$log',
    FilesController
  ];

