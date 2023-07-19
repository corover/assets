// If mic connected
function micSuccess(stream) {
    checkOM();
}

// If mic not connected
function micFail(error) {
    $('.corover-start').addClass('hideThis');
    $('.mic-modal').removeClass('hideThis');
}

// Check if microphone can be accessed or not
navigator.getUserMedia({ audio: true }, micSuccess, micFail);

// Preload
function hidePreloader() {
    $('.preloader').hide();
}

// Open in full screen
function openFullscreen(elem) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}

// Check if Online or on Mobile
function checkOM() {
    if (navigator.onLine && window.innerWidth >= 500) {
        init();
    } else {
        $('.corover-start').addClass('hideThis');
        if (!navigator.onLine) {
            $('.online-modal').removeClass('hideThis');
        } else if (window.innerWidth <= 600) {
            $('.mobile-modal').removeClass('hideThis');
        }
    }
}

// Initialize function
function init() {
    let isListening = false;
    let shownTut = false;
    let handleUnknown = ['assets/nishid_to_take_this_up.mp4', 'assets/Real_Dilip_To_Take_This_Up.mp4'];

    // *** Mic button behavior handle ***
    $('.micBtn').click(function () {
        if (!isListening) {
            isListening = true;
            $('.arrow').addClass('hideThis');
            // $(this)[0].src = 'Micactive.svg';
            startSpeech();
            $('.video-response').get(0).src = '';
            $('.video-response').addClass('hideThis');
        }
        // else if (isListening) {
        //     isListening = false;
        //     // $(this)[0].src = 'Mic.svg';
        //     $('.video-response').get(0).src = '';
        //     $('.video-response').addClass('hideThis');
        //     // $('.thingking-modal').addClass('hideThis');
        //     $('.idle').removeClass('hideThis');
        //     // $('.video-response').get(0).play();
        // }
    });

    // *** Start Initial video ***
    $('.corover-start').click(function () {
        $(this).addClass('hideThis');
        $('.video-response').removeClass('hideThis');
        $('.npci-logo').addClass('hideThis');
        $('.video-response').get(0).play();
        $('.idle').get(0).play();
        openFullscreen(document.body);
    });

    // *** When video finishes playing ***
    $('.video-response').on('ended', function () {
        $('.video-response').get(0).src = '';
        $('.video-response').addClass('hideThis');
        // $('.thinking-modal').addClass('hideThis');
        $('.idle').removeClass('hideThis');
        // $('.micBtn').css('width', '20%');
        if (!shownTut) {
            shownTut = true;
            $('.arrow').removeClass('hideThis');
        }
        $('.micBtn')[0].src = 'Mic.svg';
        if (!$('.micBtn').hasClass('showMic')) {
            $('.micBtn').removeClass('hideThis');
            setTimeout(function () {
                $('.micBtn').addClass('showMic');
            }, 100);
        }
    });

    // *** Play video when it is playable ***
    function checkBuffer() {

        // setTimeout(function () {
        // console.log(document.querySelector('.video-response').buffered.end(0), document.querySelector('.video-response').duration);
        // },1000);
        // setTimeout(function () {
        // if (document.querySelector('.video-response').buffered.end(0) / document.querySelector('.video-response').duration * 100 >= 5) {
        //     $('.idle').addClass('hideThis');
        //     $('.video-response').removeClass('hideThis');
        //     $('.video-response').get(0).play();
        // }
        // }, 2000);

        setTimeout(function () {
            document.querySelector('.video-response').oncanplay = playVideo();
            // playVideo();
        }, 2500);
    }

    // *** Function to play video ***
    function playVideo() {
        // $('.thinking-modal').addClass('hideThis');
        $('.micBtn').removeClass('hideThis');
        // $('.idle').addClass('hideThis');
        $('.video-response').removeClass('hideThis');
        $('.video-response').get(0).play();
    }

    // API body for fetch
    var setQuestionRecordAPI = "/nlpAPI/getAnswer/";
    var setQuestionRecordBody = {"query":"hi","channel":"browser | Desktop User"};

    // *** Send API Logic ***
    function sendAPI(transcript) {
        setQuestionRecordBody.query = transcript;
        $.ajax({
            url: setQuestionRecordAPI,
            method: "POST",
            data: JSON.stringify(setQuestionRecordBody),
            beforeSend: function (xhr) {
                   
                xhr.setRequestHeader('partner-key', '006134668452862086110:j7ihqcuf4xz');
                xhr.setRequestHeader('app-id', '7cb9605c-692b-11ea-bc55-0242ac130003');
                xhr.setRequestHeader('auth-key', '8a16dfcc-692b-11ea-bc55-0242ac130003');
                xhr.setRequestHeader('content-type', 'application/json');
            }
        })
            .done(function (data) {
                // videoUrl = data.videos[0];
                // transcript = data.answers[0];
                // console.log(data.videos[0]);

                if (isListening) {
                    isListening = false;
                    console.log('success');
                    $('.micBtn')[0].src = 'Mic.svg';
                    $('.micBtn').addClass('hideThis');
                    // $('.micBtn').css('width', '20%');

                    // If saying bye
                    if (data.desktopVideo === 'https://s3.ap-south-1.amazonaws.com/npci-video-bucket/thanks for being here.mp4') {
                        $('.video-response').get(0).src = data.videos[0];
                        $('.micBtn').addClass('hideThis');
                        checkBuffer();
                        setTimeout(function () {
                            $('.video-response').get(0).pause();
                            // $('.thinking-modal').addClass('hideThis');
                            // $('.idle').addClass('hideThis');
                            $('.video-response').addClass('hideThis');
                            $('.bye-modal').removeClass('hideThis');
                            $('.talk-again').removeClass('hideThis');
                        }, 6000)
                    } else {
                        $('.video-response').get(0).src = data.desktopVideo;
                        checkBuffer();
                    }
                    // $('.video-response').get(0).play();
                    // document.getElementById('subtitle').innerHTML = data.answers[0];
                }
            })
            .fail(function (xhr, status, error) {
                if (isListening) {
                    isListening = false;
                    console.log('fail');
                    $('.micBtn')[0].src = 'Mic.svg';
                    $('.micBtn').addClass('hideThis');

                    // $('.micBtn').css('width', '20%');
                    $('.video-response').get(0).src = handleUnknown[Math.round(Math.random())];
                    checkBuffer();
                    // $('.video-response').get(0).play();
                    // document.getElementById('subtitle').innerHTML = data.answers[0];
                }
            });
    }


    // *** Voice recognition Logic ***
    function startSpeech() {
        let transcript;

        if (window.hasOwnProperty('webkitSpeechRecognition')) {

            var recognition = new webkitSpeechRecognition();

            recognition.continuous = false;
            recognition.interimResults = false;

            recognition.lang = "en-US";

            if (isListening) {
                recognition.start();
            }

            // Error handling
            recognition.onerror = function (e) {
                // if (e.error == 'no-speech') {
                //     console.log('No speech');
                // }
                // if (e.error == 'audio-capture') {
                //     console.log('No mic');
                // }
                console.log(e.error);
                if (e.error == 'not-allowed') {
                    $('.corover-start').addClass('hideThis');
                    $('.mic-modal').removeClass('hideThis');
                } else if (e.error == 'aborted') {
                    isListening = false;
                    $('.video-response').get(0).src = handleUnknown[Math.round(Math.random())];
                    checkBuffer();
                }

            };

            recognition.onstart = function () {
                $('.micBtn')[0].src = 'Micactive.svg';
                console.log('Recognition started');
                $('.idle').removeClass('hideThis');
            };

            // On Result
            recognition.onresult = function (e) {

                transcript = Array.from(e.results)
                    .map(result => result[0])
                    .map(result => result.transcript)
                    .join(' ');

                console.log(transcript.toLowerCase());

                if (!transcript) {
                    console.log('none');
                }

                // if (tempTranscript || tempTranscript !== '') {
                // } else {
                //     transcript = '';
                // }

                // document.getElementById('subtitle').innerHTML = tempTranscript.charAt(0).toUpperCase() + tempTranscript.slice(1) + '?';

                recognition.stop();
            };

            // On recognition end
            recognition.onend = function () {
                $('.micBtn')[0].src = 'Mic.svg';
                // $('.thinking-modal').removeClass('hideThis');
                if (transcript && transcript !== '') {
                    sendAPI(transcript.toLowerCase());
                } else {
                    if (isListening) {
                        isListening = false;
                        $('.video-response').get(0).src = handleUnknown[Math.round(Math.random())];
                        checkBuffer();
                    }
                }
                console.log('Recognition stopped');
            };

        }

    }
}