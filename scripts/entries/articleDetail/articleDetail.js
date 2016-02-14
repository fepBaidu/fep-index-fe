import "../../../styles/articleDetail/main.less";
import earth from "../../common/earth.js";
import navigatorController from "../../controllers/common/navigatorController.js";
import loginController from "../../controllers/common/loginController.js";
import articleDetailController from "../../controllers/articleDetailController.js";
import articleDetailService from "../../services/articleDetailService.js";


earth.init(100, 100, '/images/sphere.png');
earth.animate();

var articleDetailApp = angular.module('articleDetail',['ngSanitize']);
navigatorController.init(articleDetailApp);
loginController.init(articleDetailApp);
articleDetailController.init(articleDetailApp);
articleDetailService.init(articleDetailApp);