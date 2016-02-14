import "../../../styles/aboutus/main.less";
import earth from "../../common/earth.js";
import navigatorController from "../../controllers/common/navigatorController.js";
import loginController from "../../controllers/common/loginController.js";

earth.init(100, 100, 'images/sphere.png');
earth.animate();

var aboutusApp = angular.module('aboutus',[]);
navigatorController.init(aboutusApp);
loginController.init(aboutusApp);
