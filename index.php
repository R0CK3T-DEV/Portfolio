<!-- GAMEDEV CHANNEL: https://www.youtube.com/channel/UCMnBLUL27X7a-PdfIrfAFzA -->
<!-- MUSIC CHANNEL:  http://youtube.com/ez3music -->
<!-- SOUNDCLOUD: https://soundcloud.com/ezequiel-zapata-570342254 -->
<!-- NEWGROUNDS: https://ezecrafting.newgrounds.com/ -->
<!-- TLOS: https://gamejolt.com/games/TL0S_STR33T/545997 -->
<!-- FNF VS RYAN: https://gamebanana.com/mods/295683 -->
<!-- Ez3 MUSIC: https://ez3music.rf.gd -->

<html>

<head>
    <title>R0CK3T_DEV - home</title>

    <?php include('php/head.php'); ?>

    <link rel="stylesheet" href="css/main.css">
    <script src="index.js"></script>

    <script src="js/LotText.js"></script>

    <!-- seo shit -->
    <meta charset="utf-8" />

    <!-- google search console verification shit -->
    <meta name="google-site-verification" content="SlP2nvjMMgY2E91FT1Z36MTb0hHNu8kaIwb5x0Vj7cI" />

    <!-- google -->

    <meta itemprop="site_name" content="R0CK3T_DEV's Portfolio"/>
    <meta itemprop="title" content="R0CK3T_DEV's Portfolio"/>
    <meta itemprop="description" content="hi, welcome to my portfolio"/>
    <meta itemprop="author" content="R0CK3T_DEV"/>
    <meta itemprop="keywords" content="HTML, CSS, JavaScript, Java, C#, Web Developer, Software Developer, Game Developer, Music, 2D Art, 3D Art, Software, Games, Websites, Portfolio, Personal Portfolio, R0CK3T_DEV, Ez3 Music, Ez3"/>
    <!-- google search console verification shit -->
    <meta itemprop="google-site-verification" content="SlP2nvjMMgY2E91FT1Z36MTb0hHNu8kaIwb5x0Vj7cI" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website"/>
    <meta property="og:url" content="https://r0ck3t-dev.rf.gd/"/>
    <meta name="title" property="og:title" content="R0CK3T_DEV's Portfolio"/>
    <meta name="description" property="og:description" content="hi, welcome to my portfolio"/>
    <meta name="image" itemprop="image" property="og:image" content="https://r0ck3t-d3v.rf.gd/img/brand/r0ck3t-d3v/banner.png"/>
    <meta name="author" content="R0CK3T_DEV"/>

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:site" content="@R0CK3T_DEV"/>
    <meta name="twitter:title" content="R0CK3T_DEV's Portfolio"/>
    <meta name="twitter:description" content="hi, welcome to my portfolio"/>
    <meta name="twitter:image" content="https://r0ck3t-dev.rf.gd/img/brand/r0ck3t-dev/banner.png"/>

    <meta name="theme-color" content="#0093FE"/>
</head>

<body lang="en-US">
    <img class="siteBackground" id="siteBackground" src="img/brand/r0ck3t-dev/banner.png">
    <div class="siteBackgroundDim"></div>

    <!-- LEFT ABOUT ME BUTTON LINK -->
    <div id="leftBar" style="animation-delay: 3.3s;" class="leftbar animate__animated animate__fadeInLeftBig">
        <div class="showbtn" onclick="leaveAnimation('#232323');"><a>A<br>B<br>O<br>U<br>T<br><br>M<br>E<br><br><i class="fas fa-info"></i></a></div>
    </div>

    <div id="menuBars" class="menubars">
        <div style="animation-delay: 3.3s;" class="animate__animated animate__fadeInDownBig topbar">
            <a onclick="showMainTab('homeTab');$('#hometab *').removeClass('animate__animated');" class="button">HOME</a>
        </div>
        <div style="animation-delay: 3.3s;" class="animate__animated animate__fadeInUpBig bottombar">
            <a onclick="showMainTab('gamesTab')" class="button">GAMES</a>
            <a onclick="showMainTab('appsTab')" class="button">APPS</a>
            <a onclick="showMainTab('websitesTab')" class="button">WEBSITES</a>
            <a onclick="showMainTab('musicTab')" class="button">MUSIC</a>
        </div>
    </div>

    <div id="mainTabs" class="mainTabs">
        <!-- HOME TAB -->
        <div id="homeTab" class="home show">
            <img style="animation-delay: 2s !important;" class="logo animate__animated animate__fadeInDown logo" src="img/brand/r0ck3t-dev/logo_glow.png">
            <h1 style="animation-delay: 2.4s !important;" class="animate__animated animate__lightSpeedInLeft">Hi, I'm <a class="ezeGradient">R0CK3T_DEV</a></h1>
            <p style="animation-delay: 2.7s !important;" id="lotText" class="lot-text animate__animated animate__rotateInUpRight">And I make a lot.</p>
            <div style="animation-delay: 3s !important;" class="contact-btn-container animate__animated animate__rotateInUpLeft contactInfo">
                <a href="mailto:ezequielzapta2015@hotmail.com"><i class="far fa-envelope"></i></a>
                <a onclick="copy('R0CK3T_DEV#1839', 'Discord tag: R0CK3T_DEV#1839');" href="#"><i class="fab fa-discord"></i></a>
                <a target="_blank" href="https://twitter.com/R0CK3T_DEV"><i class="fab fa-twitter"></i></a>
                <a target="_blank" href="https://youtube.com/Ez3Music"><i class="fas fa-music"></i></a>
            </div>
        </div>
        <!-- GAMES TAB -->
        <div id="gamesTab" class="tab hide">
            <div class="tabTabs">
                <div id="gameTab1" class="element show">
                    <h1>LiveOS</h1>
                    <p>i made this game for the first ever "N8Jam": A game jam hosted by n8dev & Wannibe Manisha!<br> This game jam did not only have a theme, but also <strong>a piece of lore</strong> for you to base your game on!<br><br> This game was made
                        in a week in a week from scratch. All the music, graphics, coding, story, and everything else was done by me!</p>
                    <a target="_blank" href="https://r0ck3t-dev.itch.io/liveos">
                        <div class="cover">
                            <i class="fas fa-link"></i>
                            <h1 class="linkName">Itch.io link</h1>
                        </div>
                        <img src="img/works/games/liveos/banner.png">
                    </a>
                </div>
                <div id="gameTab2" class="element hide">
                    <h1>The Loss Of The Street</h1>
                    <p>A FNAF cross-over fan-game that adds characters from other fangames!<br><br> Also I'm not the one developing it, I just help the creator with 3D models, music and all that stuff.</p>
                    <a target="_blank" href="https://gamejolt.com/games/545997/545997">
                        <div class="cover">
                            <i class="fas fa-link"></i>
                            <h1 class="linkName">Gamejolt link</h1>
                        </div>
                        <img src="img/works/games/tlos/banner.png">
                    </a>
                </div>
            </div>
            <div class="tabButtons">
                <a onclick="showNestedTab('gameTab1', gamesTabTabs);" class="tabButton">LiveOS</a>
                <a onclick="showNestedTab('gameTab2', gamesTabTabs);" class="tabButton">The Loss Of The Street</a>
            </div>
        </div>
        <!-- APPS TAB -->
        <div id="appsTab" class="home hide">
            <h1>I haven't made any apps yet :c</h1>
        </div>
        <!-- WEBSITES TAB -->
        <div id="websitesTab" class="tab hide">
            <div class="tabTabs">
                <div id="websiteTab1" class="element show">
                    <h1>R0CK3T_DEV (Portfolio)</h1>
                    <p>This website is for showing my work to everyone interested in it.<br><br> Some hard work went into making this site (just as all my other projects). I already remade it <strong>two times</strong>!</p>
                    <a target="" href="#">
                        <div class="cover">
                            <i class="fas fa-link"></i>
                            <h1 class="linkName">You're already here<br>dummy!</h1>
                        </div>
                        <img src="img/brand/r0ck3t-dev/banner.png">
                    </a>
                </div>
                <div id="websiteTab2" class="element hide">
                    <h1>AnonsAsk</h1>
                    <p>A website to let people ask you things anonymously!</p>
                    <a target="_blank" href="https://anonsask.rf.gd">
                        <div class="cover">
                            <i class="fas fa-link"></i>
                            <h1 class="linkName">Go to AnonsAsk!</h1>
                        </div>
                        <img src="img/anonsask/banner.png">
                    </a>
                </div>
            </div>
            <div class="tabButtons">
                <a onclick="showNestedTab('websiteTab1', websitesTabTabs);" class="tabButton">R0CK3T_DEV (Portfolio)</a>
                <a onclick="showNestedTab('websiteTab2', websitesTabTabs);" class="tabButton">AnonsAsk</a>
            </div>
        </div>
        <!-- MUSIC TAB -->
        <div id="musicTab" class="tab hide">
            <div class="tabTabs">
                <div id="musicTab1" class="element show centerInside">
                    <div class="music-player">
                        <div class="song-info">
                            <h1 class="title" id="songTitle">SONG NAME</h1>
                            <h3 class="artist" id="songArtist">ARTISTS</h3>
                        </div>
                        <audio id="musicPlayer">
                            <source src="./content/music/real_deal_remix.mp3">
                        </audio>

                        <div class="controls" id="musicControls">
                            <div class="progress" id="progressBar">
                                <progress class="bar" id="progress" max="0" value="0">
                            </div>
                            <div class="buttons">
                                <a id="prevButton" onclick="prev();"><i class="fa fa-fast-backward" aria-hidden="true"></i></a>
                                <a id="playButton" onclick="play();"><i class="fa fa-play-circle" aria-hidden="true"></i></a>
                                <a id="stopButton" onclick="stop();"><i class="fa fa-stop-circle" aria-hidden="true"></i></a>
                                <a id="nextButton" onclick="next();"><i class="fa fa-fast-forward" aria-hidden="true"></i></a>
                                <a id="lessVolButton" onclick="lowerVol();"><i class="fa-solid fa-volume-low"></i></a>
                                <a id="moreVolButton" onclick="incrementVol();"><i class="fa-solid fa-volume-high"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tabButtons">
                <a onclick="showNestedTab('musicTab1', musicTabTabs);" class="tabButton">there's only one song atm because it's my only "good" song that has been published lol</a>
            </div>
        </div>
    </div>

    <?php include("musicPlayer.php"); ?>
    <div class="fade-site-out" id="fadeSiteOut"></div>
</body>

</html>