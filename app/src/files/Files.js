const URL_AVATAR_ICONS = 'assets/svg/avatars.svg';
const URL_ICON_GRID    = 'assets/svg/grid.svg';
const URL_ICON_INFO    = 'assets/svg/info.svg';
const URL_ICON_LIST    = 'assets/svg/list.svg';
const URL_ICON_MENU    = 'assets/svg/menu.svg';
const URL_ICON_SEARCH    = 'assets/svg/search.svg';

// Load the custom app ES6 modules

import FilesController from 'files/FilesController'
import FilesService    from 'files/FilesDataservice'

import { ExternalLogger } from 'utils/LogDecorator';

let $log = new ExternalLogger();
    $log = $log.getInstance( "BOOTSTRAP" );
    $log.debug( "Configuring 'files' module" );

// Define the Angular 'files' module

let moduleName = angular
      .module( "files", [ ] )
      .service("filesService"       , FilesService )
      .controller("FilesController" , FilesController )
      .config( ($mdIconProvider) => {


        $log.debug( "Configuring $mdIconProvider" );

        // Register `dashboard` iconset & icons for $mdIcon service lookups

        $mdIconProvider
          .defaultIconSet( URL_AVATAR_ICONS, 128 )
          .icon('grid' ,URL_ICON_GRID, 24)
          .icon('info' ,URL_ICON_INFO, 24)
          .icon('list' ,URL_ICON_LIST, 24)
          .icon('menu' ,URL_ICON_MENU, 24)
          .icon('search' ,URL_ICON_SEARCH, 24);

      })
      .name;

export default moduleName;



