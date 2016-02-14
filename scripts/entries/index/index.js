import "../../../styles/index/main.less";
import earth from "../../common/earth.js";
import navigatorController from "../../controllers/common/navigatorController.js";
import loginController from "../../controllers/common/loginController.js";
import articleListController from "../../controllers/index/articleListController.js";
import articleService from "../../services/articleService.js";
import indexDirective from "../../directives/indexDirective.js";

earth.init(100, 100, 'images/sphere.png');
earth.animate();

var indexApp = angular.module('index',[]);
navigatorController.init(indexApp);
loginController.init(indexApp);
articleListController.init(indexApp);
articleService.init(indexApp);
indexDirective.init(indexApp);