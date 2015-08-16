(function(){

    var _pri = {
        node:{
            bgLight: $('.bgLight'),
            startBtn:　$('#startBtn'),
            page0: $('.page0'),
            page1: $('.page1'),
            feiye: $('.feiye'),
            styry1Img: $('.styry1Img'),
            tishi1: $('.tishi1'),
            dot: $('.dot'),
            kuangWrap: $('.kuangWrap'),
            dotWrap: $('.dotWrap'),
            keyword_other: $('.keyword_other'),
            tishi3: $('.tishi3'),
            dotItem2: $('.dotItem2'),
            dot2Wrap: $('.dot2Wrap'),
            keyword: $('.keyword'),
            question: $('.question'),
            issue: $('.question .issue'),
            questionBtn: $('#questionBtn'),
            questionWrap: $('.questionWrap'),
            answerWrap: $('.answerWrap'),
            ansItem: $('.ansItem'),
            answer: $('.answer'),
        },
        conf:{
            story:{
                keyword1:0,
                keyword2:0,
            },
            answer:{
                question1:[0,1,1,1],
                question2:[0,1,1,1],
                question3:[0,1,1,1],
                question4:[0,1,1,1]
            },
        },
        bindUI: function(){
            _pri.node.startBtn.on('click', _pri.util.startFun);
            _pri.node.tishi1.on('click', _pri.util.hideNode);
            _pri.node.dot.on('click', _pri.util.keywordShow);
            _pri.node.dotItem2.on('click', _pri.util.questionStart);
            _pri.node.tishi3.on('click', _pri.util.zhoubianStart);
            _pri.node.questionBtn.on('click', _pri.util.answerStart);
        },
        util:{
            answerStart: function(){
                $(this).hide();
                $(_pri.node.questionWrap).hide();
                $(_pri.node.answerWrap).show();
                _pri.util.answerFunc();
            },
            answerFunc: function(){
                switch(_pri.conf.story.keyword1){
                    case 1:
                        $(_pri.node.answer[0]).show();
                        $(_pri.node.ansItem[_pri.conf.story.keyword2-1]).css('display','block');
                        break;
                    case 2:
                        $(_pri.node.answer[1]).show();
                        $(_pri.node.ansItem[4+_pri.conf.story.keyword2-1]).css('display','block');

                        break;
                    case 3:
                        $(_pri.node.answer[2]).show();
                        $(_pri.node.ansItem[8+_pri.conf.story.keyword2-1]).css('display','block');
                        break;
                    case 4:
                        $(_pri.node.answer[3]).show();
                        $(_pri.node.ansItem[12+_pri.conf.story.keyword2-1]).css('display','block');
                        break;
                }
            },
            zhoubianStart: function(){
                $(this).hide();
                $(_pri.node.dot2Wrap).show();
            },
            questionStart: function(){
                _pri.conf.story.keyword2 = $(this).data('num');
                _pri.util.showKeyword2();
                $(_pri.node.dot2Wrap).hide();
                $(_pri.node.keyword_other).hide();
                $(_pri.node.questionBtn).show();
            },
            keywordShow: function(){
                _pri.conf.story.keyword1 = $(this).data('num');
                console.log(_pri.conf.story.keyword1);
                $(_pri.node.kuangWrap).hide();
                $(_pri.node.dotWrap).hide();
                $(_pri.node.keyword_other).show();
                $(_pri.node.tishi3).show();
                _pri.util.showKeyword1();
            },
            showKeyword1: function(){
                switch(_pri.conf.story.keyword1){
                    case 1:
                        $(_pri.node.keyword[0]).show();
                        break;
                    case 2:
                        $(_pri.node.keyword[1]).show();
                        break;
                    case 3:
                        $(_pri.node.keyword[2]).show();
                        break;
                    case 4:
                        $(_pri.node.keyword[3]).show();
                        break;
                }
            },
            showKeyword2: function(){
                switch(_pri.conf.story.keyword1){
                    case 1:
                        $(_pri.node.question[0]).show();
                        $(_pri.node.issue[_pri.conf.story.keyword2-1]).css('display','block');
                        break;
                    case 2:
                        $(_pri.node.question[1]).show();
                        $(_pri.node.issue[4+_pri.conf.story.keyword2-1]).css('display','block');

                        break;
                    case 3:
                        $(_pri.node.question[2]).show();
                        $(_pri.node.issue[8+_pri.conf.story.keyword2-1]).css('display','block');
                        break;
                    case 4:
                        $(_pri.node.question[3]).show();
                        $(_pri.node.issue[12+_pri.conf.story.keyword2-1]).css('display','block');
                        break;
                }

            },
            hideNode: function(){
                $(this).hide();
            },
            lighttoggle: function(){
               var lightClock = setInterval(function(){
                   $(_pri.node.bgLight).animate({
                       opacity: 1,
                   }, 500, 'ease-out',function(){
                       $(_pri.node.bgLight).animate({opacity: 0,},700,'ease-out');
                   });
                },1500);
            },
            startFun: function(){
                $(_pri.node.page0).hide();
                $(_pri.node.page1).show();
                var clock = setTimeout(function(){
                    $(_pri.node.feiye).hide();
                    $(_pri.node.styry1Img).css('visibility','visible');
                },2000)
             },
        },
    }
    init = function(){
        _pri.bindUI();
        _pri.util.lighttoggle();
    }
    init();

})();//end of ()