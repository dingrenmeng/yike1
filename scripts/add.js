var yike = angular.module("yike",[]);
yike.run(["$rootScope",function($rootScope){
	$rootScope.collapsed = false;
	$rootScope.toggle = function(){
		$rootScope.collapsed = !$rootScope.collapsed;
		var dd = document.querySelectorAll("dd");
		if($rootScope.collapsed) {
			for(var i=0; i<dd.length; i++) {
				dd[i].style.transitionDuration = (i + 1) * 0.15 + 's';
				dd[i].style.transitionProperty = 'all';
				dd[i].style.transitionDelay = '0.2s';
				dd[i].style.transitionTimingFunction = 'ease-out';
				dd[i].style.transform = 'translate(0)';
			}
		} else {
			for(var i=dd.length - 1; i>=0; i--) {
				dd[i].style.transitionDuration = (dd.length - i + 1) * 0.05 + 's';
				dd[i].style.transitionProperty = 'all';
				dd[i].style.transitionDelay = '';
				dd[i].style.transitionTimingFunction = 'ease-out';
				dd[i].style.transform = 'translate(-100%)';
			}
		}

	}
}])





