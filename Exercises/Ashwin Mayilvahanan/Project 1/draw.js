function setup() {
  createCanvas(1000,1000); // initialise the canvas
}

function draw() {
  faceOutline();
  hairOutline();
  beardOutline();
  facialFeatures();
  moOutline();
  earDetail();
  leftEye();
  leftPupil();
  rightEye();
  rightPupil();
  leftEyebrow();
  rightEyebrow();
  moustache();
  hair();
  beard();
  // hairOutline();
}

function faceOutline() {
  beginShape();
  curveVertex(143,523);
  curveVertex(167,570);
  curveVertex(205,623);
  curveVertex(243,665);
  curveVertex(285,693);
  curveVertex(325,700);
  curveVertex(371,694);
  curveVertex(402,676);
  curveVertex(422,644);
  curveVertex(449,600);
  curveVertex(467,558);
  curveVertex(476,527);
  curveVertex(481,495);
  curveVertex(477,455);
  curveVertex(473,429);
  curveVertex(469,404);
  curveVertex(466,392);
  curveVertex(467,380);
  curveVertex(472,381);
  curveVertex(475,387);
  curveVertex(477,395);
  curveVertex(478,402);
  curveVertex(480,413);
  curveVertex(475,421);
  curveVertex(467,428);
  curveVertex(460,422);
  curveVertex(460,406);
  curveVertex(457,393);
  curveVertex(459,370);
  curveVertex(459,345);
  curveVertex(457,309);
  curveVertex(454,268);
  curveVertex(450,241);
  curveVertex(445,225);
  curveVertex(442,207);
  curveVertex(451,197);
  curveVertex(449,171);
  curveVertex(432,156);
  curveVertex(414,141);
  curveVertex(396,125);
  curveVertex(379,118);
  curveVertex(361,114);
  curveVertex(346,111);
  curveVertex(327,113);
  curveVertex(302,117);
  curveVertex(289,118);
  curveVertex(271,124);
  curveVertex(243,127);
  curveVertex(222,132);
  curveVertex(203,138);
  curveVertex(184,148);
  curveVertex(172,160);
  curveVertex(157,176);
  curveVertex(145,190);
  curveVertex(143,201);
  curveVertex(143,213);
  curveVertex(145,225);
  curveVertex(144,241);
  curveVertex(136,260);
  curveVertex(129,278);
  curveVertex(124,298);
  curveVertex(121,325);
  curveVertex(122,341);
  curveVertex(121,365);
  curveVertex(125,388);
  curveVertex(129,405);
  curveVertex(116,407);
  curveVertex(105,413);
  curveVertex(104,431);
  curveVertex(109,449);
  curveVertex(113,461);
  curveVertex(121,476);
  curveVertex(128,490);
  curveVertex(125,508);
  curveVertex(125,522);
  curveVertex(129,535);
  curveVertex(135,545);
  curveVertex(144,544);
  curveVertex(145,535);
  curveVertex(143,523);
  curveVertex(167,570);
  curveVertex(205,623);
  curveVertex(243,665);
  endShape();
}

function hairOutline() {
  beginShape();
  curveVertex(134,419);
  curveVertex(137,393);
  curveVertex(140,359);
  curveVertex(144,329);
  curveVertex(153,297);
  curveVertex(165,269);
  curveVertex(181,246);
  curveVertex(201,227);
  curveVertex(224,212);
  curveVertex(250,205);
  curveVertex(275,201);
  curveVertex(305,197);
  curveVertex(329,199);
  curveVertex(347,201);
  curveVertex(369,205);
  curveVertex(385,211);
  curveVertex(398,222);
  curveVertex(409,234);
  curveVertex(423,248);
  curveVertex(433,260);
  curveVertex(442,279);
  curveVertex(448,293);
  curveVertex(452,311);
  curveVertex(454,323);
  curveVertex(457,336);
  curveVertex(459,348);
  curveVertex(457,358);
  endShape();
}

function beardOutline() {
  beginShape();
  curveVertex(478,502);
  curveVertex(477,512);
  curveVertex(474,518);
  curveVertex(471,529);
  curveVertex(467,538);
  curveVertex(464,547);
  curveVertex(460,559);
  curveVertex(457,566);
  curveVertex(453,573);
  curveVertex(449,580);
  curveVertex(445,588);
  curveVertex(439,597);
  curveVertex(433,607);
  curveVertex(426,618);
  curveVertex(417,628);
  curveVertex(408,639);
  curveVertex(397,649);
  curveVertex(386,657);
  curveVertex(373,666);
  curveVertex(361,675);
  curveVertex(348,679);
  curveVertex(333,681);
  curveVertex(316,681);
  curveVertex(300,678);
  curveVertex(288,677);
  curveVertex(275,669);
  curveVertex(262,659);
  curveVertex(253,647);
  curveVertex(241,633);
  curveVertex(229,620);
  curveVertex(218,605);
  curveVertex(208,590);
  curveVertex(199,577);
  curveVertex(190,561);
  curveVertex(180,547);
  curveVertex(174,534);
  curveVertex(167,521);
  curveVertex(159,505);
  curveVertex(153,489);
  curveVertex(149,471);
  curveVertex(145,454);
  curveVertex(142,438);
  curveVertex(141,425);
  curveVertex(140,409);
  endShape();
}

function facialFeatures() { //draws feautures of my face
  beginShape();             //including eyebrows
  curveVertex(458,353);
  curveVertex(456,361);
  curveVertex(453,367);
  curveVertex(448,368);
  curveVertex(445,362);
  curveVertex(442,352);
  curveVertex(438,341);
  curveVertex(431,338);
  curveVertex(420,337);
  curveVertex(407,337);
  curveVertex(394,341);
  curveVertex(381,342);
  curveVertex(368,345);
  curveVertex(358,349);
  curveVertex(347,354);
  curveVertex(345,361);
  curveVertex(345,369);
  curveVertex(347,379);
  curveVertex(353,381);
  curveVertex(364,381);
  curveVertex(377,376);
  curveVertex(390,369);
  curveVertex(404,366);
  curveVertex(417,365);
  curveVertex(429,367);
  curveVertex(439,370);
  curveVertex(445,377);
  curveVertex(450,385);
  curveVertex(453,394);
  curveVertex(453,401);
  curveVertex(452,404);
  curveVertex(448,406);
  curveVertex(444,404);
  curveVertex(438,397);
  curveVertex(434,390);
  curveVertex(425,384);
  curveVertex(416,380);
  curveVertex(407,380);
  curveVertex(396,380);
  curveVertex(387,381);
  curveVertex(376,384);
  curveVertex(368,388);
  curveVertex(360,392);
  curveVertex(355,397);
  curveVertex(352,404);
  curveVertex(354,408);
  curveVertex(360,407);
  curveVertex(366,404);
  curveVertex(372,400);
  curveVertex(379,396);
  curveVertex(386,393);
  curveVertex(394,392);
  curveVertex(399,394);
  curveVertex(407,395);
  curveVertex(414,396);
  curveVertex(421,398);
  curveVertex(429,402);
  curveVertex(434,403);
  curveVertex(441,407);
  curveVertex(444,412);
  curveVertex(441,415);
  curveVertex(437,415);
  curveVertex(431,416);
  curveVertex(424,416);
  curveVertex(410,416);
  curveVertex(394,418);
  curveVertex(383,416);
  curveVertex(373,414);
  curveVertex(363,412);
  curveVertex(357,412);
  curveVertex(351,414);
  curveVertex(349,420);
  curveVertex(351,427);
  curveVertex(354,438);
  curveVertex(362,451);
  curveVertex(374,468);
  curveVertex(382,477);
  curveVertex(390,486);
  curveVertex(388,498);
  curveVertex(386,506);
  curveVertex(380,514);
  curveVertex(372,516);
  curveVertex(364,515);
  curveVertex(358,514);
  curveVertex(352,516);
  curveVertex(347,520);
  curveVertex(340,523);
  curveVertex(332,521);
  curveVertex(324,518);
  curveVertex(317,515);
  curveVertex(308,515);
  curveVertex(295,514);
  curveVertex(286,511);
  curveVertex(280,506);
  curveVertex(278,502);
  curveVertex(278,494);
  curveVertex(278,484);
  curveVertex(283,473);
  curveVertex(290,462);
  curveVertex(294,452);
  curveVertex(295,440);
  curveVertex(297,427);
  curveVertex(296,417);
  curveVertex(292,413);
  curveVertex(287,413);
  curveVertex(279,414);
  curveVertex(272,418);
  curveVertex(264,420);
  curveVertex(251,422);
  curveVertex(240,422);
  curveVertex(224,423);
  curveVertex(212,423);
  curveVertex(200,423);
  curveVertex(191,421);
  curveVertex(188,418);
  curveVertex(190,415);
  curveVertex(194,412);
  curveVertex(200,407);
  curveVertex(208,402);
  curveVertex(215,401);
  curveVertex(226,400);
  curveVertex(236,403);
  curveVertex(249,405);
  curveVertex(260,406);
  curveVertex(269,408);
  curveVertex(276,407);
  curveVertex(277,402);
  curveVertex(273,399);
  curveVertex(269,395);
  curveVertex(261,390);
  curveVertex(252,389);
  curveVertex(244,388);
  curveVertex(230,388);
  curveVertex(220,389);
  curveVertex(214,392);
  curveVertex(206,396);
  curveVertex(198,401);
  curveVertex(188,406);
  curveVertex(180,406);
  curveVertex(172,404);
  curveVertex(166,399);
  curveVertex(163,392);
  curveVertex(167,386);
  curveVertex(174,381);
  curveVertex(184,377);
  curveVertex(195,374);
  curveVertex(206,372);
  curveVertex(218,372);
  curveVertex(228,373);
  curveVertex(237,374);
  curveVertex(246,376);
  curveVertex(256,378);
  curveVertex(267,378);
  curveVertex(276,378);
  curveVertex(282,375);
  curveVertex(282,366);
  curveVertex(281,358);
  curveVertex(274,352);
  curveVertex(264,349);
  curveVertex(254,346);
  curveVertex(243,344);
  curveVertex(236,344);
  curveVertex(225,344);
  curveVertex(214,346);
  curveVertex(202,348);
  curveVertex(190,355);
  curveVertex(180,360);
  curveVertex(168,368);
  curveVertex(161,376);
  curveVertex(158,387);
  curveVertex(158,398);
  curveVertex(160,407);
  curveVertex(168,410);
  curveVertex(176,413);
  curveVertex(184,418);
  curveVertex(193,429);
  curveVertex(200,440);
  curveVertex(208,460);
  curveVertex(217,481);
  curveVertex(226,512);
  curveVertex(240,540);
  curveVertex(248,558);
  curveVertex(260,574);
  curveVertex(278,588);
  curveVertex(302,598);
  curveVertex(332,607);
  curveVertex(358,607);
  curveVertex(377,598);
  curveVertex(385,587);
  curveVertex(396,574);
  curveVertex(404,560);
  curveVertex(410,546);
  curveVertex(406,543);
  curveVertex(400,543);
  curveVertex(394,549);
  curveVertex(387,562);
  curveVertex(379,569);
  curveVertex(369,574);
  curveVertex(350,577);
  curveVertex(326,578);
  curveVertex(307,576);
  curveVertex(291,572);
  curveVertex(276,567);
  curveVertex(264,562);
  curveVertex(257,557);
  curveVertex(256,552);
  curveVertex(261,550);
  curveVertex(269,550);
  curveVertex(280,552);
  curveVertex(297,557);
  curveVertex(313,561);
  curveVertex(330,563);
  curveVertex(346,563);
  curveVertex(364,562);
  curveVertex(378,560);
  curveVertex(387,556);
  curveVertex(394,552);
  curveVertex(402,550);
  curveVertex(406,546);
  curveVertex(411,540);
  curveVertex(409,534);
  curveVertex(402,534);
  curveVertex(394,534);
  curveVertex(384,536);
  curveVertex(374,538);
  curveVertex(366,542);
  curveVertex(354,544);
  curveVertex(342,547);
  curveVertex(328,546);
  curveVertex(316,544);
  curveVertex(303,544);
  curveVertex(290,542);
  curveVertex(282,542);
  curveVertex(270,542);
  curveVertex(260,544);
  endShape();
}

function moOutline() {  //draws the moustache outline
  beginShape();
  curveVertex(340,527);
  curveVertex(356,524);
  curveVertex(372,514);
  curveVertex(392,504);
  curveVertex(406,503);
  curveVertex(416,509);
  curveVertex(426,518);
  curveVertex(434,526);
  curveVertex(435,539);
  curveVertex(432,549);
  curveVertex(426,552);
  curveVertex(420,551);
  curveVertex(412,538);
  curveVertex(405,530);
  curveVertex(397,526);
  curveVertex(388,526);
  curveVertex(367,533);
  curveVertex(356,534);
  curveVertex(344,534);
  curveVertex(330,534);
  curveVertex(315,533);
  curveVertex(302,534);
  curveVertex(291,537);
  curveVertex(279,540);
  curveVertex(270,546);
  curveVertex(262,550);
  curveVertex(250,552);
  curveVertex(240,550);
  curveVertex(236,540);
  curveVertex(238,529);
  curveVertex(248,522);
  curveVertex(260,518);
  curveVertex(278,514);
  curveVertex(294,516);
  curveVertex(310,520);
  curveVertex(328,524);
  curveVertex(340,527);
  curveVertex(356,524);
  curveVertex(372,514);
  endShape();
}

function earDetail() {  // draws the ear detail
beginShape();
curveVertex(185,590);
curveVertex(130,418);
curveVertex(131,423);
curveVertex(128,426);
curveVertex(123,425);
curveVertex(121,421);
curveVertex(116,419);
curveVertex(112,420);
curveVertex(112,426);
curveVertex(112,432);
curveVertex(114,438);
curveVertex(117,446);
curveVertex(120,455);
curveVertex(121,464);
curveVertex(122,470);
curveVertex(125,475);
curveVertex(130,476);
curveVertex(136,473);
curveVertex(138,464);
curveVertex(138,455);
curveVertex(137,446);
curveVertex(137,437);
curveVertex(260,420);
endShape();
}

function leftEye() {
  fill(77, 51, 0, 200);
  beginShape();
  curveVertex(214,413);
  curveVertex(217,421);
  curveVertex(225,425);
  curveVertex(234,426);
  curveVertex(244,422);
  curveVertex(247,412);
  curveVertex(244,402);
  curveVertex(237,399);
  curveVertex(228,399);
  curveVertex(220,400);
  curveVertex(215,406);
  curveVertex(214,413);
  curveVertex(217,421);
  curveVertex(225,425);
  endShape();
  noFill();
}

function leftPupil() {
  fill(0,0,0);
  circle(233,410,13);
  noFill();
}

function rightEye() {
  fill(77, 51, 0, 200);
  beginShape();
  curveVertex(382,394);
  curveVertex(381,402);
  curveVertex(380,412);
  curveVertex(384,416);
  curveVertex(392,418);
  curveVertex(400,418);
  curveVertex(409,416);
  curveVertex(412,409);
  curveVertex(413,400);
  curveVertex(409,394);
  curveVertex(401,392);
  curveVertex(393,392);
  curveVertex(382,394);
  curveVertex(381,402);
  curveVertex(380,412);
  endShape();
  noFill();
}

function rightPupil() {
  fill(0,0,0);
  circle(395,403,13);
  noFill();
}

function leftEyebrow() {
  beginShape();
  curveVertex(183,372);
  curveVertex(180,370);
  curveVertex(189,370);
  curveVertex(186,364);
  curveVertex(196,366);
  curveVertex(194,359);
  curveVertex(205,366);
  curveVertex(200,353);
  curveVertex(213,364);
  curveVertex(210,350);
  curveVertex(224,365);
  curveVertex(219,350);
  curveVertex(234,368);
  curveVertex(229,350);
  curveVertex(246,372);
  curveVertex(240,350);
  curveVertex(260,373);
  curveVertex(259,356);
  curveVertex(272,372);
  curveVertex(271,356);
  curveVertex(276,374);
  endShape();
}

function rightEyebrow() {
  beginShape();
  curveVertex(436,365);
  curveVertex(441,364);
  curveVertex(436,358);
  curveVertex(438,353);
  curveVertex(422,362);
  curveVertex(432,348);
  curveVertex(413,361);
  curveVertex(425,343);
  curveVertex(405,362);
  curveVertex(417,341);
  curveVertex(398,360);
  curveVertex(404,346);
  curveVertex(385,364);
  curveVertex(394,347);
  curveVertex(378,366);
  curveVertex(387,347);
  curveVertex(369,372);
  curveVertex(374,353);
  curveVertex(356,375);
  curveVertex(360,353);
  curveVertex(350,369);
  endShape();
}

function moustache() {
  beginShape();
  curveVertex(247,546);
  curveVertex(254,524);
  curveVertex(253,544);
  curveVertex(261,525);
  curveVertex(259,539);
  curveVertex(274,522);
  curveVertex(270,538);
  curveVertex(284,522);
  curveVertex(281,536);
  curveVertex(293,522);
  curveVertex(291,532);
  curveVertex(299,523);
  curveVertex(298,531);
  curveVertex(305,524);
  curveVertex(305,532);
  curveVertex(313,525);
  curveVertex(316,531);
  curveVertex(320,527);
  curveVertex(327,531);
  curveVertex(336,529);
  curveVertex(345,532);
  curveVertex(352,528);
  curveVertex(360,531);
  curveVertex(360,526);
  curveVertex(366,529);
  curveVertex(366,523);
  curveVertex(375,527);
  curveVertex(373,519);
  curveVertex(382,524);
  curveVertex(379,516);
  curveVertex(389,523);
  curveVertex(387,509);
  curveVertex(395,520);
  curveVertex(396,509);
  curveVertex(403,523);
  curveVertex(404,510);
  curveVertex(406,523);
  curveVertex(410,515);
  curveVertex(412,527);
  curveVertex(416,518);
  curveVertex(417,535);
  curveVertex(422,522);
  curveVertex(424,546);
  curveVertex(428,528);
  curveVertex(429,539);
  endShape();
}

function hair() {
  noFill();
  beginShape();
  curveVertex(133,397);
  curveVertex(126,371);
  curveVertex(134,377);
  curveVertex(125,344);
  curveVertex(134,354);
  curveVertex(125,318);
  curveVertex(140,342);
  curveVertex(129,296);
  curveVertex(140,316);
  curveVertex(134,280);
  curveVertex(146,290);
  curveVertex(142,297);
  curveVertex(139,264);
  curveVertex(150,274);
  curveVertex(148,284);
  curveVertex(146,251);
  curveVertex(156,271);
  curveVertex(148,230);
  curveVertex(161,258);
  curveVertex(149,200);
  curveVertex(165,250);
  curveVertex(157,185);
  curveVertex(169,241);
  curveVertex(168,173);
  curveVertex(174,234);
  curveVertex(176,170);
  curveVertex(182,224);
  curveVertex(182,224);
  curveVertex(183,162);
  curveVertex(190,217);
  curveVertex(192,156);
  curveVertex(198,214);
  curveVertex(201,154);
  curveVertex(205,212);
  curveVertex(210,150);
  curveVertex(214,210);
  curveVertex(221,146);
  curveVertex(223,205);
  curveVertex(234,142);
  curveVertex(233,200);
  curveVertex(244,139);
  curveVertex(242,196);
  curveVertex(254,135);
  curveVertex(252,195);
  curveVertex(265,132);
  curveVertex(260,194);
  curveVertex(275,133);
  curveVertex(270,192);
  curveVertex(285,134);
  curveVertex(281,190);
  curveVertex(295,134);
  curveVertex(290,188);
  curveVertex(305,133);
  curveVertex(298,187);
  curveVertex(317,130);
  curveVertex(310,185);
  curveVertex(332,126);
  curveVertex(322,182);
  curveVertex(344,123);
  curveVertex(332,182);
  curveVertex(359,124);
  curveVertex(344,184);
  curveVertex(372,126);
  curveVertex(355,186);
  curveVertex(385,133);
  curveVertex(365,189);
  curveVertex(401,141);
  curveVertex(374,194);
  curveVertex(412,149);
  curveVertex(385,200);
  curveVertex(421,158);
  curveVertex(393,205);
  curveVertex(428,172);
  curveVertex(400,209);
  curveVertex(435,180);
  curveVertex(408,215);
  curveVertex(443,189);
  curveVertex(413,220);
  curveVertex(449,199);
  curveVertex(419,224);
  curveVertex(439,214);
  curveVertex(426,227);
  curveVertex(437,225);
  curveVertex(428,241);
  curveVertex(445,244);
  curveVertex(434,255);
  curveVertex(448,260);
  curveVertex(444,272);
  curveVertex(454,278);
  curveVertex(448,290);
  curveVertex(454,300);
  endShape();
}

function beard() {
  noFill();
  beginShape();
  curveVertex(145,478);
  curveVertex(146,512);
  curveVertex(153,506);
  curveVertex(155,526);
  curveVertex(161,522);
  curveVertex(166,552);
  curveVertex(170,545);
  curveVertex(178,569);
  curveVertex(184,562);
  curveVertex(187,589);
  curveVertex(192,578);
  curveVertex(198,603);
  curveVertex(204,595);
  curveVertex(211,617);
  curveVertex(215,612);
  curveVertex(220,631);
  curveVertex(226,625);
  curveVertex(234,647);
  curveVertex(243,644);
  curveVertex(250,662);
  curveVertex(258,661);
  curveVertex(265,671);
  curveVertex(277,675);
  curveVertex(283,683);
  curveVertex(300,683);
  curveVertex(311,692);
  curveVertex(324,686);
  curveVertex(333,694);
  curveVertex(349,685);
  curveVertex(360,692);
  curveVertex(370,677);
  curveVertex(383,679);
  curveVertex(394,663);
  curveVertex(404,666);
  curveVertex(413,642);
  curveVertex(416,648);
  curveVertex(422,628);
  curveVertex(428,631);
  curveVertex(433,612);
  curveVertex(439,610);
  curveVertex(440,599);
  curveVertex(444,600);
  curveVertex(446,589);
  curveVertex(452,584);
  curveVertex(453,576);
  curveVertex(458,572);
  curveVertex(459,564);
  curveVertex(465,557);
  curveVertex(466,547);
  curveVertex(470,541);
  curveVertex(472,532);
  endShape();
}
