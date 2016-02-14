import "../../../styles/article/main.less";
import earth from "../../common/earth.js";
import navigatorController from "../../controllers/common/navigatorController.js";
import loginController from "../../controllers/common/loginController.js";
import articleController from "../../controllers/articleController.js";
import articleService from "../../services/articleService.js";
import articleDirective from "../../directives/articleDirective.js";


earth.init(100, 100, 'images/sphere.png');
earth.animate();

var articleApp = angular.module('article',[]);
navigatorController.init(articleApp);
loginController.init(articleApp);
articleController.init(articleApp);
articleService.init(articleApp);
articleDirective.init(articleApp);

