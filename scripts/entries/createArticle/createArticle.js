import "../../../styles/createArticle/main.less";
import earth from "../../common/earth.js";
import navigatorController from "../../controllers/common/navigatorController.js";
import loginController from "../../controllers/common/loginController.js";
import deployController from "../../controllers/createArticleController.js";

earth.init(100, 100, 'images/sphere.png');
earth.animate();

var indexApp = angular.module('createArticle',['file-model']);
navigatorController.init(indexApp);
loginController.init(indexApp);
deployController.init(indexApp);
