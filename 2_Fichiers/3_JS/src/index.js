
document.addEventListener('DOMContentLoaded',function(){

    'use strict';

    var page = 1;

        $("#Troisieme").click(function(){

            if(page == 2){

                $("#section2").addClass('gauche');
                $("#section2").removeClass('centre');
                $("#section3").addClass('centre');
                $("#section3").removeClass('droite');
                page = 3;
            }

            if(page == 1){

                $("#section1").addClass('gauche');
                $("#section1").removeClass('centre');
                $("#section3").addClass('centre');
                $("#section3").removeClass('droite');
                $("#section2").hide();
                $("#section2").addClass('gauche');
                $("#section2").removeClass('droite');
                page = 3;
            }
        });

        $("#Deuxieme").click(function(){

            if(page == 3){

                $("#section2").show();
                $("#section3").addClass('centre');
                $("#section3").removeClass('droite');
                $("#section2").addClass('centre');
                $("#section2").removeClass('gauche');
                page = 2;
            }

            if(page == 1){

                $("#section2").show();
                $("#section2").addClass('centre');
                $("#section2").removeClass('droite');
                $("#section2").removeClass('gauche');
                $("#section1").addClass('gauche');
                $("#section1").removeClass('centre');
                page = 2;
            }
        });

        $("#Premier").click(function(){

            if(page == 3){

                $("#section3").addClass('droite');
                $("#section3").removeClass('centre');
                $("#section2").hide();
                $("#section2").addClass('droite');
                $("#section2").removeClass('gauche');
                $("#section1").addClass('centre');
                $("#section1").removeClass('gauche');
                page = 1;
            }

            if(page == 2){

                $("#section2").show();
                $("#section2").addClass('droite');
                $("#section2").removeClass('centre');
                $("#section1").addClass('centre');
                $("#section1").removeClass('gauche');
                page = 1;
            }
        });

        const settings ={
            "asunc" : true,
            "crossDomain" : true,
            "method" : "GET",
            headers:{

            }
        };

        const settings2 ={
            "asunc" : true,
            "crossDomain" : true,
            "method" : "GET",
            headers:{

            }
        };

        const settings3 ={
            "asunc" : true,
            "crossDomain" : true,
            "method" : "GET",
            headers:{

            }
        };
});