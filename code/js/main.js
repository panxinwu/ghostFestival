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
            issue: $('.issue'),
            questionBtn: $('#questionBtn'),
            questionWrap: $('.questionWrap'),
            answerWrap: $('.answerWrap'),
            ansItem: $('.ansItem'),
            answer: $('.answer'),
            yes: $('.yes'),
            no: $('.no'),
            good: $('.good'),
            important: $('.important'),
            line: $('.line'),
            jinnangBtn: $('#jinnangBtn'),
            answerBtn: $('#answerBtn'),
            returnBtn: $('#returnBtn'),
            yesOrNoWrap: $('.yesOrNo'),
            goodOrImportant: $('.goodOrImportant'),
            story1: $('.story1'),
            jinnangWrap: $('.jinnangWrap'),
            jinnangLink: $('.jinnangLink'),
            threeWrap: $('.threeWrap'),
            jinnangitem: $('.jinnangItem .item'),
        },
        conf:{
            story:{
                keyword1:0,
                keyword2:0,
            },
            again:0,
            answer:[
                [0,1,0,0],
                [0,1,1,1],
                [0,0,1,0],
                [0,1,1,0]
            ],
            gi:[
                [0,0,0,0],
                [0,0,0,0],
                [1,0,2,0],
                [0,0,0,0]
            ],
        },
        bindUI: function(){
            _pri.node.startBtn.on('click', _pri.util.startFun);
            _pri.node.tishi1.on('click', _pri.util.hideNode);
            _pri.node.dot.on('click', _pri.util.keywordShow);
            _pri.node.dotItem2.on('click', _pri.util.questionStart);
            _pri.node.tishi3.on('click', _pri.util.zhoubianStart);
            _pri.node.questionBtn.on('click', _pri.util.answerStart);
            _pri.node.returnBtn.on('click', _pri.util.returnStory);
            _pri.node.jinnangBtn.on('click', _pri.util.jinnangFun);
            _pri.node.jinnangLink.on('click', _pri.util.jinnangShow);
        },
        util:{
            jinnangShow: function(){
                $(_pri.node.jinnangitem[$(this).data('num')]).css('display','block');
                $(_pri.node.threeWrap).hide();
            },
            jinnangFun: function(){
                _pri.util.hideAllStory();
                $(_pri.node.jinnangWrap).show();
                $(_pri.node.jinnangitem).hide();
                $(_pri.node.threeWrap).show();
            },
            hideAllStory: function(){
                $(_pri.node.story1).hide()
            },
            returnStory: function(){
                $(_pri.node.yesOrNoWrap).hide();
                $(_pri.node.goodOrImportant).hide();
                $(_pri.node.answerWrap).hide();
                $(_pri.node.kuangWrap).show();
                $(_pri.node.dotWrap ).show();
                _pri.util.hideAll();
            },
            answerStart: function(){
                $(this).hide();
                $(_pri.node.questionWrap).hide();
                $(_pri.node.answerWrap).show();
                $(_pri.node.returnBtn).show();
                $(_pri.node.answerBtn).show();
                _pri.util.answerFunc();
                _pri.util.yesOrNo();
                _pri.util.goodOrImportant();
            },
            hideAll: function(){
                _pri.conf.again = 1;
                $(_pri.node.question).hide();
                $(_pri.node.yes).hide();
                $(_pri.node.no).hide();
                $(_pri.node.keyword_other).hide();
                $(_pri.node.tishi1).hide();
                $(_pri.node.tishi2).hide();
                $(_pri.node.tishi3).hide();
            },
            yesOrNo: function(){
                $(_pri.node.yesOrNoWrap).show();
                if(_pri.conf.answer[_pri.conf.story.keyword1-1][_pri.conf.story.keyword2-1]){
                    $(_pri.node.yes).show();
                }else{
                    $(_pri.node.no).show();
                }
            },
            goodOrImportant: function(){
                $(_pri.node.goodOrImportant).show();
                if(_pri.conf.gi[_pri.conf.story.keyword1-1][_pri.conf.story.keyword2-1] === 1){
                    $(_pri.node.good).css('display','block');
                }else if(_pri.conf.gi[_pri.conf.story.keyword1-1][_pri.conf.story.keyword2-1] === 2){
                    $(_pri.node.important).css('display','block');
                }
            },
            answerFunc: function(){
                $(_pri.node.answer).hide();
                $(_pri.node.ansItem).hide();
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
                $(_pri.node.answerBtn).hide();
                $(_pri.node.returnBtn).hide();
                $(_pri.node.dot2Wrap).hide();
                $(_pri.node.keyword_other).hide();
                $(_pri.node.questionBtn).show();
            },
            keywordShow: function(){
                _pri.conf.story.keyword1 = $(this).data('num');
                $(_pri.node.jinnangBtn).hide();
                $(_pri.node.returnBtn).show();
                $(_pri.node.kuangWrap).hide();
                $(_pri.node.dotWrap).hide();
                $(_pri.node.keyword_other).show();
                $(_pri.node.dot2Wrap).show();
                if(!_pri.conf.again){
                    $(_pri.node.tishi3).show();
                }
                _pri.util.showKeyword1();
            },
            showKeyword1: function(){
                $(_pri.node.keyword).hide();
                $(_pri.node.questionWrap).show();
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
                $(_pri.node.dot).show();
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
                        var i = 0;
                        var clock2 = setInterval(function(){
                            console.log(i);
                            $(_pri.node.line[i++]).addClass('slowShow');
                            if(i == 9)
                            {
                                $(_pri.node.dotWrap).show().addClass('printshake');
                                var clock3 = setTimeout(function(){
                                    $(_pri.node.tishi1).show().addClass('printshake');
                                },1000);
                                clearInterval(clock2);
                            }
                        },500);
                },3500);

                var clock = setTimeout(function(){
                    $(_pri.node.jinnangBtn).show();
                    $(_pri.node.answerBtn).show();
                    $(_pri.node.feiye).hide();
                    $(_pri.node.styry1Img).css('visibility','visible');
                },3000);
             },
        },
    }
    init = function(){
        _pri.bindUI();
        _pri.util.lighttoggle();
    }
    init();

})();//end of ()