function whomWeLove (options) {

        // stops
        var gilbertBg = 'rgba(0, 0, 0, 0) linear-gradient(to right, rgb(229, 0, 0) 0%, rgb(229, 0, 0) 17%, rgb(255, 141, 0) 17%, rgb(255, 141, 0) 33%, rgb(255, 255, 29) 33%, rgb(255, 255, 29) 33%, rgb(255, 255, 29) 50%, rgb(0, 129, 33) 50%, rgb(0, 129, 33) 67%, rgb(0, 76, 255) 67%, rgb(0, 76, 255) 84%, rgb(117, 1, 136) 84%, rgb(117, 1, 136) 100%) repeat scroll 0% 0% / auto padding-box text';
        var gilbertBgImage = 'linear-gradient(to right, rgb(229, 0, 0) 0%, rgb(229, 0, 0) 17%, rgb(255, 141, 0) 17%, rgb(255, 141, 0) 33%, rgb(255, 255, 29) 33%, rgb(255, 255, 29) 33%, rgb(255, 255, 29) 50%, rgb(0, 129, 33) 50%, rgb(0, 129, 33) 67%, rgb(0, 76, 255) 67%, rgb(0, 76, 255) 84%, rgb(117, 1, 136) 84%, rgb(117, 1, 136) 100%)';

        // gradient
        var bakerBg = 'rgba(0, 0, 0, 0) linear-gradient(to right, rgb(229, 0, 0) 0%, rgb(255, 141, 0) 20%, rgb(255, 255, 29) 40%, rgb(0, 129, 33) 60%, rgb(0, 76, 255) 80%, rgb(117, 1, 136) 100%) repeat scroll 0% 0% / auto padding-box text'
        var bakerBgImage = 'linear-gradient(to right, rgb(229, 0, 0) 0%, rgb(255, 141, 0) 20%, rgb(255, 255, 29) 40%, rgb(0, 129, 33) 60%, rgb(0, 76, 255) 80%, rgb(117, 1, 136) 100%)'

        // gradient-p
        var bustyRossBg ='rgba(0, 0, 0, 0) linear-gradient(to right, rgb(229, 0, 0) 0%, rgb(255, 141, 0) 20%, rgb(255, 255, 29) 40%, rgb(0, 129, 33) 60%, rgb(0, 76, 255) 80%, rgb(117, 1, 136) 100%) repeat scroll 0% 0% / auto padding-box text';
        var bustyRossBgImage = 'linear-gradient(to right, rgb(229, 0, 0) 0%, rgb(255, 141, 0) 20%, rgb(255, 255, 29) 40%, rgb(0, 129, 33) 60%, rgb(0, 76, 255) 80%, rgb(117, 1, 136) 100%)';

        options.howWeLove = options.howWeLove || 'stops';
        options.whereToShowVisibility = options.whereToShowVisibility || '.here-i-am';

        var replaceMe = options.whereToShowVisibility.slice(0,1)
        var withMe = options.whereToShowVisibility.substring(1)
        if (options.whereToShowVisibility.slice(0,1) === '#') {
            var elementId = document.getElementById(withMe).innerHTML;
            function dontBreakMePls() {
                document.getElementById(withMe).style.backgroundClip = 'text';
                document.getElementById(withMe).style.webkitBackgroundClip = 'text';
                document.getElementById(withMe).style.webkitTextFillColor = 'transparent';
            }
            if (options.howWeLove === 'stops') {
                document.getElementById(withMe).style.background = gilbertBg;
                document.getElementById(withMe).style.backgroundImage = gilbertBgImage;
                dontBreakMePls()
            } else if (options.howWeLove === 'gradient') {
                document.getElementById(withMe).style.background = bakerBg;
                document.getElementById(withMe).style.backgroundImage = bakerBgImage;
                dontBreakMePls()
            } else if (options.howWeLove === 'gradient-p') {
                document.getElementById(withMe).style.background = bustyRossBg;
                document.getElementById(withMe).style.backgroundImage = bustyRossBgImage;
                dontBreakMePls()
            } else {
                console.log("seems you've entered an unexpected value for howWeLove :( you can use, 'stops', 'gradient', or 'padded-gradient'. please try again! :)")
            }
        } else if (options.whereToShowVisibility.slice(0,1) === '.') {
            var elementClass = document.getElementsByClassName(withMe);
            function meNeither() {
                document.getElementsByClassName(withMe)[i].style.backgroundClip = 'text';
                document.getElementsByClassName(withMe)[i].style.webkitBackgroundClip = 'text';
                document.getElementsByClassName(withMe)[i].style.webkitTextFillColor = 'transparent';
            }
            for (var i=0;i<elementClass.length;i++){
                if (options.howWeLove === 'stops') {
                    document.getElementsByClassName(withMe)[i].style.background = gilbertBg;
                    document.getElementsByClassName(withMe)[i].style.backgroundImage = gilbertBgImage;
                    meNeither()
                } else if (options.howWeLove === 'gradient') {
                    document.getElementsByClassName(withMe)[i].style.background = bakerBg;
                    document.getElementsByClassName(withMe)[i].style.backgroundImage = bakerBgImage;
                    meNeither()
                } else if (options.howWeLove === 'gradient-p') {
                    document.getElementsByClassName(withMe)[i].style.background = bustyRossBg;
                    document.getElementsByClassName(withMe)[i].style.backgroundImage = bustyRossBgImage;
                    meNeither()
                } else {
                    console.log("seems you've entered an unexpected value for howWeLove :( you can use, 'stops', 'gradient', or 'padded-gradient'. please try again! :)")
                }
            }
        } else {
            console.log('please double check that you\'re targeting the right div with \'whereToShowVisibility\'!')
        }
}
