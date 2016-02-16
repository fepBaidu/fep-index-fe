import "../../../styles/editArticle/main.less";
import earth from "../../common/earth.js";
import navigatorController from "../../controllers/common/navigatorController.js";
import loginController from "../../controllers/common/loginController.js";
import editArticleController from "../../controllers/editArticleController.js";
import editArticleService from "../../services/editArticleService.js";

earth.init(100, 100, '/images/sphere.png');
earth.animate();

var indexApp = angular.module('editArticle',['file-model']);
navigatorController.init(indexApp);
loginController.init(indexApp);
editArticleController.init(indexApp);
editArticleService.init(indexApp);
