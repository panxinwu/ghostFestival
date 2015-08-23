(function(){
    var loadingAni = function(){
        var i = 0;
        var clock = setInterval(function(){
            if(i == 6) clearInterval(clock);
            $('#loadingimg').css({backgroundSize:'2345/40rem 322/40rem',backgroundPosition:'-' + (335/40*i++) + 'rem 0'});
        },60);
    };

    loadingAniClock = setInterval(function(){
        loadingAni();
    },360);
    halo.use('loader', function(m){
        m.loader([
            'img2/answer_beibao.png',
            'img2/answer_huochai.png',
            'img2/answer_shamo.png',
            'img2/answer_shiti.png',
            'commonImg/answertoplogo.png',
            'img2/aquestion1.png',
            'img2/kewwordkuang.png',
            'img2/keywordbeibao.png',
            'img2/baidugame.png',
            'commonImg/btn.png',
            'img2/question1.png',
            'img2/question2.png',
            'img2/question3.png',
            'img2/question4.png',
            'img2/story1.png',
            'img2/story1img.png',
            'img2/successFinal.png',
            'img2/successlogo.png',
            'commonImg/global_bg.png',
            'commonImg/globale1_bg.png',
            'commonImg/lose.png',
            'commonImg/lose1.png',
            'commonImg/shareIcon.png',
            'commonImg/sharelose.png',
            'commonImg/success1.png',
            'commonImg/yes.png',
            'commonImg/success.png',
            'commonImg/tishi1.png',])
            .loadend(function(percent){
                $('#percent').html(this.percent);
            })
            .complete(function(){
                $('#loading').css('display','none');
                var template = $('#template').html();
                $('#container').html(template);
                $('#loading').addClass('loadingAni');
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
            answering: $('.answering'),
            answerlose: $('.answerlose'),
            answersuccess: $('.answersuccess'),
            questionItem: $('.questionItem'),
            continueBtn: $('#continueBtn'),
            finalAnswer: $('.finalAnswer'),
            finalAnswerLink: $('.finalAnswerLink'),
            loseimg: $('.loseimg'),
            succimg: $('.succimg'),
            shareBtn: $('#shareBtn'),
            finalResultBtn: $('#finalResultBtn'),
            lastlogo: $('.lastlogo'),
            ansLogo: $('.ansLogo'),
            questionWrap: $('.questionWrap'),
            loseOrSucc: $('.loseOrSucc'),
            lastimg: $('.lastimg'),
            nextBtn: $('.nextBtn'),
            shareWrap: $('.shareWrap'),
            loseShareBtn: $('.loseShareBtn'),
            tishi4: $('.tishi4 .tishi'),
            shareIcon: $('.shareIcon'),
            loseshareIcon: $('.loseshareIcon'),
            continueBtn0: $('.continueBtn0'),
            numImg: $('.numImg'),
            repeatBtn: $('.repeatBtn'),
        },
        conf:{
            story:{
                keyword1:0,
                keyword2:0,
            },
            again:0,
            answerjinnang:0,
            answer:[
                [0,0,0,1],
                [1,0,0,1],
                [1,1,0,0],
                [0,1,1,1]
            ],
            gi:[
                [0,0,0,0],
                [0,0,0,0],
                [2,0,0,0],
                [0,0,0,0]
            ],
            finalAnswer:[3,1,3],
            ansnum:0,
            bool:1,
            succ:0,
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
            _pri.node.answerBtn.on('click', _pri.util.answerFun);
            _pri.node.continueBtn.on('click', _pri.util.continueFun);
            _pri.node.finalAnswerLink.on('click', _pri.util.finalAnswer);
            _pri.node.shareBtn.on('click', _pri.util.share);
            _pri.node.finalResultBtn.on('click', _pri.util.finalResult);
            _pri.node.shareWrap.on('click', _pri.util.hideShare);
            _pri.node.loseShareBtn.on('click', _pri.util.share);
            _pri.node.tishi4.on('click', _pri.util.hideNode);
            _pri.node.continueBtn0.on('click', _pri.util.storyStart);
            _pri.node.repeatBtn.on('click', _pri.util.repeatFun);
        },
        util:{
            repeatFun: function(){
                $(this).hide();
                $(_pri.node.answerBtn).show();
                $(_pri.node.jinnangBtn).hide();
                $(_pri.node.returnBtn).show().css('left','37%');
                $(_pri.node.returnBtn).show();
                $(_pri.node.kuangWrap).hide();
                $(_pri.node.dotWrap).hide();
                $(_pri.node.keyword_other).show();
                $(_pri.node.dot2Wrap).show();
                $(_pri.node.yesOrNoWrap).hide();
                $(_pri.node.goodOrImportant).hide();
                $(_pri.node.answerWrap).hide();
                $(_pri.node.questionWrap).show();
                $(_pri.node.yes).hide();
                $(_pri.node.no).hide();
            },
            hideShare: function(){
                $(this).hide();
            },
            share: function(){
                $(_pri.node.shareWrap).show();
            },
            finalResult: function(){
                $(this).hide();
                $(_pri.node.ansLogo).hide();
                $(_pri.node.loseOrSucc).hide();
                $(_pri.node.returnBtn).hide();
                $(_pri.node.lastlogo).css('display','block');
                $(_pri.node.lastimg).css('display','block');
                $(_pri.node.nextBtn).css('display','block');
            },
            finalAnswer: function(){
                if(_pri.conf.ansnum === 2){
                    $(_pri.node.answering).hide();
                    $(_pri.node.questionItem).hide();
                    $(_pri.node.jinnangBtn).hide();
                    if(_pri.conf.bool === 0){
                        $(_pri.node.answerlose).css('display','block');
                        $(_pri.node.loseimg).css('display','block');
                        $(_pri.node.loseShareBtn).css('display','block');
                        _pri.conf.ansnum = 0;
                        _pri.conf.bool = 1;
                        $(_pri.node.loseshareIcon).show();
                        share(2,0);
                    }else{
                        $(_pri.node.answersuccess).css('display','block');
                        $(_pri.node.succimg).css('display','block');
                        $(_pri.node.shareBtn).show();
                        $(_pri.node.finalResultBtn).show();
                        $(_pri.node.shareIcon).show();
                        _pri.util.ajaxPost();
                        share(2,1);
                    }
                    return;
                }
                if($(this).data('num') != _pri.conf.finalAnswer[_pri.conf.ansnum]){
                    _pri.conf.bool = 0;
                }
                _pri.conf.ansnum++;
                $(_pri.node.questionItem).hide();
                $(_pri.node.questionItem[_pri.conf.ansnum]).show();
            },
            continueFun: function(){
                $(this).hide();
                $(_pri.node.jinnangWrap).hide();
                $(_pri.node.finalAnswer).show();
                $(_pri.node.answering).css('display','block');
                $(_pri.node.jinnangBtn).show();
                $(_pri.node.returnBtn).show();

            },
            answerFun: function(){
                _pri.conf.answerjinnang = 1;
                $(_pri.node.story1).hide();
                $(_pri.node.jinnangWrap).hide();
                $(this).hide();
                _pri.util.hideAllStory();
                $(_pri.node.answering).show();
                $(_pri.node.questionWrap).show();
                $(_pri.node.returnBtn).show().css('left','78%');
                $(_pri.node.jinnangBtn).show();
                $(_pri.node.answering).css('display','block');
                $(_pri.node.questionItem[_pri.conf.ansnum]).show();
            },
            jinnangShow: function(){
                $(_pri.node.jinnangitem[$(this).data('num')]).css('display','block');
                $(_pri.node.threeWrap).hide();
            },
            jinnangFun: function(){
                $(_pri.node.answerBtn).hide();
                $(_pri.node.answering).hide();
                if(!_pri.conf.answerjinnang){
                    $(this).hide();
                    $(_pri.node.returnBtn).show().css('left','55%');
                    _pri.util.hideAllStory();
                    $(_pri.node.jinnangWrap).show();
                    $(_pri.node.jinnangitem).hide();
                    $(_pri.node.threeWrap).show();
                }else{
                    $(this).hide();
                    $(_pri.node.finalAnswer).hide();
                    $(_pri.node.continueBtn).css('display','block');
                    _pri.util.hideAllStory();
                    $(_pri.node.returnBtn).hide();
                    $(_pri.node.jinnangWrap).show();
                    $(_pri.node.jinnangitem).hide();
                    $(_pri.node.threeWrap).show();

                }
            },
            hideAllStory: function(){
                $(_pri.node.story1).hide();
            },
            returnStory: function(){
                _pri.conf.answerjinnang = 0;
                $(_pri.node.loseshareIcon).hide();
                $(_pri.node.shareIcon).hide();
                $(_pri.node.dotItem2).show();
                $(_pri.node.answerBtn).show();
                $(this).hide();
                $(_pri.node.answerlose).hide();
                $(_pri.node.loseShareBtn).hide();
                $(_pri.node.loseimg).hide();
                $(_pri.node.loseimg).show();
                $(_pri.node.story1).show();
                $(_pri.node.jinnangBtn).show();
                $(_pri.node.dot).show();
                $(_pri.node.jinnangWrap).show();
                $(_pri.node.yesOrNoWrap).hide();
                $(_pri.node.goodOrImportant).hide();
                $(_pri.node.answerWrap).hide();
                $(_pri.node.repeatBtn).hide();
                $(_pri.node.kuangWrap).show();
                $(_pri.node.dotWrap).show();
                _pri.util.hideAll();
                if(_pri.conf.answerjinnang){
                    $(_pri.node.returnBtn).hide();
                }
            },
            answerStart: function(){
                $(this).hide();
                $(_pri.node.issue).hide();
                $(_pri.node.good).hide();
                $(_pri.node.important).hide();
                $(_pri.node.questionWrap).hide();
                $(_pri.node.answerWrap).show();
                $(_pri.node.repeatBtn).show();
                $(_pri.node.returnBtn).show();
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
                    $(_pri.node.yes).show().addClass('slowShow');
                }else{
                    $(_pri.node.no).show().addClass('slowShow');
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
                        $(_pri.node.ansItem[_pri.conf.story.keyword2-1]).show().css('opacity','0');
                        var clock = setTimeout(function(){
                            $(_pri.node.ansItem[_pri.conf.story.keyword2-1]).show().addClass('slowShow');
                        },1000);
                        break;
                    case 2:
                        $(_pri.node.answer[1]).show();
                        $(_pri.node.ansItem[4+_pri.conf.story.keyword2-1]).show().css('opacity','0');
                        var clock = setTimeout(function(){
                            $(_pri.node.ansItem[4+_pri.conf.story.keyword2-1]).show().addClass('slowShow');
                        },1000);

                        break;
                    case 3:
                        $(_pri.node.answer[2]).show();
                        $(_pri.node.ansItem[8+_pri.conf.story.keyword2-1]).show().css('opacity','0');
                        var clock = setTimeout(function(){
                            $(_pri.node.ansItem[8+_pri.conf.story.keyword2-1]).show().addClass('slowShow');
                        },1000);

                        break;
                    case 4:
                        $(_pri.node.answer[3]).show();
                        $(_pri.node.ansItem[12+_pri.conf.story.keyword2-1]).show().css('opacity','0');
                        var clock = setTimeout(function(){
                            $(_pri.node.ansItem[12+_pri.conf.story.keyword2-1]).show().addClass('slowShow');
                        },1000);

                        break;
                }
            },
            zhoubianStart: function(){
                $(this).hide();
                $(_pri.node.dotItem2).show();
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
                $(_pri.node.returnBtn).show().css('left','37%');
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
                var lightClock = setTimeout(function(){
                    $(_pri.node.bgLight).animate({
                        opacity: 1,
                    }, 500, 'ease-out',function(){
                        $(_pri.node.bgLight).animate({opacity: 0,},400,'ease-out');
                    });
                },1000);
               var lightClock = setInterval(function(){
                   $(_pri.node.bgLight).animate({
                       opacity: 1,
                   }, 1000, 'ease-out',function(){
                       $(_pri.node.bgLight).animate({opacity: 0,},1000,'ease-out');
                   });
                },3000);
            },
            storyStart: function(){
                    $(_pri.node.jinnangBtn).show();
                    $(_pri.node.answerBtn).show();
                    $(_pri.node.feiye).hide();
                    $(_pri.node.continueBtn0).hide();
                    $(_pri.node.styry1Img).animate({
                        opacity: 1,
                    }, 500, 'ease-out');
                    var i = 0;
                    var clock2 = setInterval(function(){
                        $(_pri.node.line[i++]).addClass('slowShow');
                        if(i == 9)
                        {
                            $(_pri.node.dotWrap).show().addClass('slowShow');
                            var clock3 = setTimeout(function(){
                                $(_pri.node.tishi1).show().addClass('slowShow');
                            },700);
                            clearInterval(clock2);
                        }
                    },700);
            },
            startFun: function(){
                $(_pri.node.page0).hide();
                $(_pri.node.page1).show();
                $(_pri.node.continueBtn0).show();

             },
            ajaxPost: function(){
                $.ajax({
                    type: 'POST',
                    url:  'http://2015.str.fm/duanwujie/add/',
                    data: 2,
                    dataType: 'json',
                    timeout: 300,
                    success: function(data){
                        console.log(data);
                    },
                    error: function(xhr, type){
                    }
                })
            },
        },
    }
    init = function(){
        _pri.bindUI();
        _pri.util.lighttoggle();
    }
    init();
    var audio = document.createElement("audio");
    // audio.src = "./images/bj.mp3";
    audio.src = "commonImg/mbg3.mp3";
    audio.autoplay = false;
    audio.loop = true;
    audio.addEventListener("canplaythrough",function() {
        // audio.play();
        fadeIn();
        function fadeIn(v) {
            var v = v || 0.1;
            audio.volume = v;
            if((v+=0.1)<=1.0) {
                setTimeout(function() {
                    fadeIn(v)
                },500);
            }
        }
    },false);
    // 手Q微信需要手动触发播放
    // var flag = 0;
    // $('body').on('touchstart', function(event) {
    //     if(!$(event.target).hasClass('audio_ico')){
    //         if(flag == 0 && audio.paused){
    //             audio.play();
    //             $('.audio_ico').toggleClass('audio_ico_stop');
    //         }
    //         flag = 1;
    //     }
    // });
    $('.audio_ico').on('touchend',function(event){
        event.preventDefault();
        if($(this).hasClass('audio_ico')){
            if(audio.paused){
                audio.play();
            }else{
                audio.pause();
            }
            $('.audio_ico').toggleClass('audio_ico_stop');
        }
    },false);
    });//end of _pri

    });//end of halo.use
})();//end of ()