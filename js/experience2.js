document.onreadystatechange = function () {
    if (document.readyState === 'interactive') {

        var timeline = new TimelineLite()
        .to('#message2', 1, {scale: 0})
        .to('#message2', 1, {scale: 2})
        .to('#message2', 1, {scale: 1.25})

        var logo = document.getElementById('shark');
        TweenLite.to('#shark', 5, {bottom:'250px'});
        // .to('#shark', 1, {scale: 2});

        var logoHere2 = document.getElementById('logoHere2');
        TweenLite.to('#logoHere2', 5, {top:'225px'});
    }
}
