# ionic tab-slider-box plugin

### Clone
    git clone https://github.com/xudao520/ionic-tabslider-plugin.git;

### Run
    cd ionic-tabslider-plugin;
    npm install;
    gulp serve(you can also use node serve task);

### Options
1. for different versions of slider of ionic.

        Use ion-slide-box on the slideBox page and use the ion-slides page on the ionSlides page


2. slider-tabs.


	    <slider-tabs tabs="2" emitName="testTags" repeatData="message">
        <div class="tag" on-finish-render="testTags" ng-repeat="s in message"

        Due to the use of the flex layout, the tabs parameter represents a page showing several emitName.

        the tab parameter must be the same as the value of the following directive on-finish-render.

        You need to specify the tab in the current repeat need controller data like the example inside the message, and you need to specify the parameter repeatData slider-tabs value is also required repeat data name

3. initActiveIndex($index)".

        When a click event occurs, the tab must call the method initActiveIndex and the current index is passed in.

4. tabsContainer

        The root-tags-container container must have to bind a style value that is containerStyle to the flex layout

