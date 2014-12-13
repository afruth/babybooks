var options = function() {
	
	option = {
		rooms: [
				{
					title: 'Page 1',
					background: '/appFiles/backgrounds/vulpii_ii_e_foame.png',
					text: 'Era odată o vulpe vicleană, ca toate vulpile de altfel. Ea umblase o noapte întreagă după hrană şi nu găsise nicăiri. De indata ce s-a luminat de ziua, vulpea iesi la marginea drumului şi se culcă sub o tufă, gândindu-se ce să mai facă pentru a găsi ceva de mâncare.\nŞăzând vulpea cu botul întins pe labele de dinainte, îi veni miros de peşte. Atunci ea rădică puţin capul şi, uitându-se la vale, în lungul drumului, zări venind un car tras de boi.',
					audio: '/appFiles/narration/Pag1.mp3',
					objects: [
						{
							name: 'Vulpe langa copac',
							dim: {"x":312,"y":377,"w":108,"h":118},
							sound: '/appFiles/objects/Vulpe.mp3',
							text: 'Vulpe'
						},
						{
							dim: {"x":658,"y":276,"w":84,"h":77},
							name: 'Car cu boi',
							sound: '/appFiles/objects/Carcuboi.mp3',
							text: 'Car cu boi'
						},
						{
							dim: {"x":761,"y":10,"w":250,"h":436},
							name: 'Copac dreapta',
							sound: '/appFiles/objects/Copac.mp3',
							text: 'Copac'
						},
						{
							dim: {"x":406,"y":51,"w":124,"h":412},
							name: 'Copac mijloc',
							sound: '/appFiles/objects/Copac.mp3',
							text: 'Copac'
						},
						{
							dim: {"x":200,"y":4,"w":455,"h":297},
							name: 'Copac mijloc2',
							sound: '/appFiles/objects/Copac.mp3',
							text: 'Copac'
						},
						{
							dim: {"x":5,"y":2,"w":128,"h":314},
							name: 'Copac stanga',
							sound: '/appFiles/objects/Copac.mp3',
							text: 'Copac'
						},
						{
							dim: {"x":495,"y":554,"w":523,"h":210},
							name: 'Flori',
							sound: '/appFiles/objects/Flori.mp3',
							text: 'Flori'
						},
						{
							dim: {"x":5,"y":495,"w":290,"h":104},
							name: 'Flori',
							sound: '/appFiles/objects/Flori.mp3',
							text: 'Flori'
						},
						{
							dim: {"x":799,"y":462,"w":221,"h":85},
							name: 'Rau jos',
							sound: '/appFiles/objects/Rau.mp3',
							text: 'Râu'
						},
						{
							dim: {"x":39,"y":327,"w":201,"h":163},
							name: 'Rau stanga',
							sound: '/appFiles/objects/Rau.mp3',
							text: 'Râu'
						}
					]
				},
				{
					title: 'Page 2',
					background: '/appFiles/backgrounds/vulpea_face_pe_moarta.png',
					text: '- Bun! gândi vulpea. Asta este hrana ce-o aşteptam. Şi îndată iesi de sub tufă şi se lungi în mijlocul drumului, ca şi cum ar fi fost moartă.\nCarul se apropie de vulpe, iar ţăranul ce mâna boii o văzu şi, crezând că-i moartă cu adevărat, strigă la boi: Hoo! Hoo! iar Boii se opresc. Ţăranul veni spre vulpe, se uită la ea de aproape şi, văzând că nici nu suflă, zise: Bre! da’ cum naiba a murit vulpea asta aici?! Ti! ce frumoasă caţaveică am să fac nevestei mele din blana acestui vulpoi! Zicând aşa, apucă vulpea de după cap şi, târând-o până la car, se opinti ş-o aruncă deasupra peştelui. Apoi strigă la boi: Dii Boilor !!! iar, boii porniră.',
					audio: '/appFiles/narration/Pag2.mp3',
					objects: [
						{
							dim: {"x":748,"y":17,"w":270,"h":414},
							name: 'Copac dreapta',
							sound: '/appFiles/objects/Copac.mp3',
							text: 'Copac'
						},
						{
							dim: {"x":202,"y":0,"w":488,"h":243},
							name: 'Copac mijloc',
							sound: '/appFiles/objects/Copac.mp3',
							text: 'Copac'
						},
						{
							dim: {"x":189,"y":245,"w":341,"h":60},
							name: 'Copac mijloc2',
							sound: '/appFiles/objects/Copac.mp3',
							text: 'Copac'
						},
						{
							dim: {"x":4,"y":2,"w":198,"h":299},
							name: 'Copac stanga',
							sound: '/appFiles/objects/Copac.mp3',
							text: 'Copac'
						},
						{
							dim: {"x":799,"y":462,"w":221,"h":85},
							name: 'Rau jos',
							sound: '/appFiles/objects/Rau.mp3',
							text: 'Râu'
						},
						{
							dim: {"x":39,"y":327,"w":201,"h":163},
							name: 'Rau stanga',
							sound: '/appFiles/objects/Rau.mp3',
							text: 'Râu'
						},
						{
							dim: {"x":116,"y":485,"w":113,"h":52},
							name: 'Flori1',
							sound: '/appFiles/objects/Flori.mp3',
							text: 'Flori'
						},
						{
							dim: {"x":12,"y":544,"w":188,"h":59},
							name: 'Flori2',
							sound: '/appFiles/objects/Flori.mp3',
							text: 'Flori'
						},
						{
							dim: {"x":211,"y":667,"w":292,"h":95},
							name: 'Flori3',
							sound: '/appFiles/objects/Flori.mp3',
							text: 'Flori'
						},
						{
							dim: {"x":479,"y":575,"w":538,"h":191},
							name: 'Flori4',
							sound: '/appFiles/objects/Flori.mp3',
							text: 'Flori'
						},
						,
						{
							name: 'Vulpe',
							dim: {"x":239,"y":516,"w":208,"h":138},
							sound: '/appFiles/objects/Vulpe.mp3',
							text: 'Vulpe'
						},
						{
							name: 'Boi',
							dim: {"x":332,"y":318,"w":337,"h":242},
							sound: '/appFiles/objects/Boi.mp3',
							text: 'Boi'
						},
						{
							name: 'Car',
							dim: {"x":485,"y":336,"w":176,"h":82},
							sound: '/appFiles/objects/Car.mp3',
							text: 'Car'
						},
						{
							name: 'Car',
							dim: {"x":574,"y":409,"w":89,"h":88},
							sound: '/appFiles/objects/Car.mp3',
							text: 'Car'
						},
						{
							name: 'Taran',
							dim: {"x":532,"y":246,"w":93,"h":166},
							sound: '/appFiles/objects/Taran.mp3',
							text: 'Țăran'
						}
					]
				},
				{
					title: 'Page 3',
					background: '/appFiles/backgrounds/vulpea_arunca_pestii.png',
					text: 'Ţăranul mergea pe lângă boi şi-i tot îndemna să meargă mai iute, ca s-ajungă degrabă acasă şi să jupoaie pielea vulpii.\nÎnsă, cum au pornit boii, vulpea şi începu cu picioarele a împinge peştele din car jos. Ţăranul mâna, carul scârţâia, şi peştele din car cădea.\nDupă ce hoaţa de vulpe aruncă o mulţime de peşte pe drum, binişor sari şi ea din car şi, cu mare grabă, începu a strânge peştele de pe drum. După ce l-a strâns grămadă, îl luă, îl duse la vizuina sa şi se apucă de ospat, că tare-i mai era foame!',
					audio: '/appFiles/narration/Pag3.mp3',
					objects: [						
						{
							name: 'Gard1',
							dim: {"x":681,"y":508,"w":337,"h":79},
							sound: '/appFiles/objects/Gard.mp3',
							text: 'Gard'
						},
						{
							name: 'Gard2',
							dim: {"x":411,"y":551,"w":268,"h":114},
							sound: '/appFiles/objects/Gard.mp3',
							text: 'Gard'
						},
						{
							name: 'Gard3',
							dim: {"x":188,"y":557,"w":221,"h":153},
							sound: '/appFiles/objects/Gard.mp3',
							text: 'Gard'
						},
						{
							name: 'Soare',
							dim: {"x":580,"y":348,"w":300,"h":217},
							sound: '/appFiles/objects/Soare.mp3',
							text: 'Soare'
						},
						{
							name: 'Pesti',
							dim: {"x":681,"y":588,"w":335,"h":149},
							sound: '/appFiles/objects/Pesti.mp3',
							text: 'Pești'
						},
						{
							name: 'Peste',
							dim: {"x":413,"y":500,"w":114,"h":92},
							sound: '/appFiles/objects/Peste.mp3',
							text: 'Pește'
						},
						{
							name: 'Peste',
							dim: {"x":210,"y":376,"w":93,"h":66},
							sound: '/appFiles/objects/Peste.mp3',
							text: 'Pește'
						},
						{
							name: 'Pesti',
							dim: {"x":11,"y":387,"w":138,"h":47},
							sound: '/appFiles/objects/Pesti.mp3',
							text: 'Pești'
						},
						{
							name: 'Car',
							dim: {"x":3,"y":438,"w":179,"h":268},
							sound: '/appFiles/objects/Car.mp3',
							text: 'Car'
						},
						{
							name: 'Vulpe',
							dim: {"x":4,"y":271,"w":248,"h":131},
							sound: '/appFiles/objects/Vulpe.mp3',
							text: 'Vulpe'
						}
					]
				},
				{
					title: 'Page 4',
					background: '/appFiles/backgrounds/ursul_cere_mancare.png',
					text: 'Tocmai când începuse a mânca, iaca vine la dânsa ursul.\n- Bună masa, cumătră! Ti!!! da’ ce mai de peşte ai! Dă-mi şi mie, că tare! mi-i poftă!\n- Ia mai pune-ţi pofta-n cui, cumătre, că doar nu pentru gustul altuia m-am muncit eu. Dacă ţi-i aşa de poftă, du-te şi-ţi moaie coada-n baltă, ca mine, şi-i avea peşte să mănânci.\n- Învaţă-mă, te rog, cumătră, că eu nu ştiu cum se prinde peştele.',
					audio: '/appFiles/narration/Pag4.mp3',
					objects: [
						{
							name: 'Copac',
							dim: {"x":22,"y":3,"w":995,"h":288},
							sound: '/appFiles/objects/Copac.mp3',
							text: 'Copac'
						},
						{
							name: 'Scorbura',
							dim: {"x":319,"y":283,"w":69,"h":122},
							sound: '/appFiles/objects/Scorbura.mp3',
							text: 'Scorbura'
						},
						{
							name: 'Vulpe',
							dim: {"x":262,"y":311,"w":120,"h":133},
							sound: '/appFiles/objects/Vulpe.mp3',
							text: 'Vulpe'
						},						
						{
							name: 'Urs',
							dim: {"x":4,"y":387,"w":255,"h":285},
							sound: '/appFiles/objects/Urs.mp3',
							text: 'Urs'
						},
						{
							name: 'Pesti',
							dim: {"x":193,"y":382,"w":124,"h":136},
							sound: '/appFiles/objects/Pesti.mp3',
							text: 'Pesti'
						},						
						{
							name: 'Flori',
							dim: {"x":257,"y":696,"w":49,"h":71},
							sound: '/appFiles/objects/Flori.mp3',
							text: 'Flori'
						},
						{
							name: 'Flori',
							dim: {"x":767,"y":390,"w":243,"h":372},
							sound: '/appFiles/objects/Flori.mp3',
							text: 'Flori'
						},
						{
							name: 'Copac',
							dim: {"x":392,"y":298,"w":296,"h":252},
							sound: '/appFiles/objects/Copac.mp3',
							text: 'Copac'
						},
						{
							name: 'Frunza',
							dim: {"x":773,"y":609,"w":178,"h":65},
							sound: '/appFiles/objects/Frunza.mp3',
							text: 'Frunză'
						},
						{
							name: 'Frunza',
							dim: {"x":946,"y":685,"w":77,"h":42},
							sound: '/appFiles/objects/Frunza.mp3',
							text: 'Frunză'
						},
						{
							name: 'Frunza',
							dim: {"x":942,"y":688,"w":80,"h":62},
							sound: '/appFiles/objects/Frunza.mp3',
							text: 'Frunză'
						},
						{
							name: 'Frunza',
							dim: {"x":409,"y":526,"w":51,"h":44},
							sound: '/appFiles/objects/Frunza.mp3',
							text: 'Frunză'
						},
						{
							name: 'Frunza',
							dim: {"x":107,"y":685,"w":107,"h":50},
							sound: '/appFiles/objects/Frunza.mp3',
							text: 'Frunză'
						},
						{
							name: 'Frunza',
							dim: {"x":536,"y":300,"w":376,"h":83},
							sound: '/appFiles/objects/Frunza.mp3',
							text: 'Frunză'
						},
						{
							name: 'Ciuperci',
							dim: {"x":450,"y":572,"w":260,"h":192},
							sound: '/appFiles/objects/Ciuperca.mp3',
							text: 'Ciupercă'
						},
						{
							name: 'CoadaUrs',
							dim: {"x":3,"y":630,"w":81,"h":134},
							sound: '/appFiles/objects/CoadaUrsului.mp3',
							text: 'Coada ursului'
						}
					]
				},
				{
					title: 'Page 5',
					background: '/appFiles/backgrounds/ursul_pescuieste.png',
					text: 'Atunci vulpea rânji dinţii şi zise: Alei, cumătre! da’ nu ştii că nevoia te duce pe unde nu-ţi e voia şi te-nvaţă ce nici gândeşti? Ascultă, cumătre: vrei să mănânci peşte? Du-te desară la băltoaga aceea din marginea pădurii, vârâ-ţi coada-n apă şi stăi pe loc, fără să te mişti, până despre ziuă; atunci smunceşte vârtos spre mal şi ai să scoţi o mulţime de peşte, poate îndoit şi-ntreit de cât am scos eu. \nUrsul, nemaizicând nici o vorbă, alergă-n fuga mare la băltoaga din marginea pădurei şi işi vârâ-n apă toată coada!',
					audio: '/appFiles/narration/Pag5.mp3',
					objects: [
						{
							name: 'Copac',
							dim: {"x":8,"y":4,"w":998,"h":551},
							sound: '/appFiles/objects/Copac.mp3',
							text: 'Copac'
						},
						{
							name: 'Copac',
							dim: {"x":446,"y":541,"w":551,"h":218},
							sound: '/appFiles/objects/Copac.mp3',
							text: 'Copac'
						},
						{
							name: 'Flori',
							dim: {"x":685,"y":546,"w":335,"h":142},
							sound: '/appFiles/objects/Flori.mp3',
							text: 'Flori'
						},
						{
							name: 'Frunza',
							dim: {"x":451,"y":707,"w":99,"h":54},
							sound: '/appFiles/objects/Frunza.mp3',
							text: 'Frunză'
						},
						{
							name: 'Vulpe',
							dim: {"x":294,"y":458,"w":158,"h":169},
							sound: '/appFiles/objects/Vulpe.mp3',
							text: 'Vulpe'
						},						
						{
							name: 'Urs',
							dim: {"x":28,"y":560,"w":232,"h":195},
							sound: '/appFiles/objects/Urs.mp3',
							text: 'Urs'
						},
						{
							name: 'Pesti',
							dim: {"x":215,"y":554,"w":154,"h":158},
							sound: '/appFiles/objects/Pesti.mp3',
							text: 'Pesti'
						}
					]
				},
				{
					title: 'Page 6',
					background: '/appFiles/backgrounds/lake_inghetat.png',
					text: 'În acea noapte începuse a bate un vânt răce, de îngheţa limba-n gură şi chiar cenuşa de sub foc. Îngheţă zdravăn şi apa din băltoagă, şi prinse coada ursului ca într-un cleşte. De la o vreme, ursul, nemaiputând de durerea cozii şi de frig, smunci o dată din toată puterea. Şi, sărmanul urs, în loc să scoată peşte, rămase făr’ de coadă!\nÎncepu el acum a mormăi cumplit ş-a sări în sus de durere; plin de ciudă pe vulpe că l-a amăgit, se duse s-o ucidă în bătaie. Dar şireata vulpe ştia cum să se ferească de mânia ursului. Ea ieşise din vizuină şi se vârâse în scorbura unui copac din apropiere; şi când văzu pe urs că vine făr’ de coadă, începu a striga:\n-	Hei cumătre! Dar ţi-au mâncat peştii coada, ori ai fost prea lacom ş-ai vrut să nu mai rămâie peşti în baltă?',
					audio: '/appFiles/narration/Pag6.mp3',
					objects: [
						{
							name: 'Lac',
							dim: {"x":12,"y":381,"w":997,"h":379},
							sound: '/appFiles/objects/Lac.mp3',
							text: 'Lac'
						},
						{
							name: 'Stuf',
							dim: {"x":3,"y":525,"w":157,"h":164},
							sound: '/appFiles/objects/Stuf.mp3',
							text: 'Stuf'
						},
						{
							name: 'Bolovan',
							dim: {"x":13,"y":691,"w":213,"h":72},
							sound: '/appFiles/objects/Bolovan.mp3',
							text: 'Bolovan'
						},
						{
							name: 'Stuf',
							dim: {"x":6,"y":220,"w":133,"h":156},
							sound: '/appFiles/objects/Stuf.mp3',
							text: 'Stuf'
						},
						{
							name: 'Copac',
							dim: {"x":56,"y":36,"w":261,"h":224},
							sound: '/appFiles/objects/Copac.mp3',
							text: 'Copac'
						},
						{
							name: 'Bolovan',
							dim: {"x":163,"y":364,"w":209,"h":98},
							sound: '/appFiles/objects/Bolovan.mp3',
							text: 'Bolovan'
						},
						{
							name: 'Bolovan',
							dim: {"x":477,"y":308,"w":84,"h":63},
							sound: '/appFiles/objects/Bolovan.mp3',
							text: 'Bolovan'
						},
						{
							name: 'Bolovan',
							dim: {"x":714,"y":340,"w":114,"h":98},
							sound: '/appFiles/objects/Bolovan.mp3',
							text: 'Bolovan'
						},
						{
							name: 'Urs',
							dim: {"x":631,"y":4,"w":265,"h":329},
							sound: '/appFiles/objects/Urs.mp3',
							text: 'Urs'
						}
					]
				},
				{
					title: 'Page 7',
					background: '/appFiles/backgrounds/ursul_suparat.png',
					text: 'Ursul, auzind că încă-l mai ie şi în râs, il apucă ciuda şi mai tare şi se răpezi iute spre copac; dar gura scorburei fiind strâmtă, ursul nu putea să încapă înăuntru. Atunci el căută o creangă cu cârlig şi începu a cotrobăi prin scorbură, ca să scoată vulpea afară, şi să-i deie de cheltuială… Dar când apuca ursul de piciorul vulpei, ea striga: "Trage, nătărăule! mie nu-mi pasă, că tragi de copac…" Iar când anina cârligul de copac, ea striga: "Valeu, cumătre! nu trage, că-mi rupi piciorul!"\nÎn zadar s-a năcăjit ursul, de-i curgeau sudorile, că tot n-a putut scoate vulpea din scorbura copacului.\nŞi iaca aşa a rămas ursul păcălit de vulpe!',
					audio: '/appFiles/narration/Pag7.mp3',
					objects: [
						{
							name: 'Copac',
							dim: {"x":22,"y":3,"w":995,"h":288},
							sound: '/appFiles/objects/Copac.mp3',
							text: 'Copac'
						},						
						{
							name: 'Vulpe',
							dim: {"x":467,"y":45,"w":133,"h":143},
							sound: '/appFiles/objects/Vulpe.mp3',
							text: 'Vulpe'
						},						
						{
							name: 'Urs',
							dim: {"x":153,"y":236,"w":208,"h":279},
							sound: '/appFiles/objects/Urs.mp3',
							text: 'Urs'
						},
						{
							name: 'Scorbura',
							dim: {"x":319,"y":283,"w":69,"h":122},
							sound: '/appFiles/objects/Scorbura.mp3',
							text: 'Scorbura'
						},					
						{
							name: 'Flori',
							dim: {"x":257,"y":696,"w":49,"h":71},
							sound: '/appFiles/objects/Flori.mp3',
							text: 'Flori'
						},
						{
							name: 'Flori',
							dim: {"x":767,"y":390,"w":243,"h":372},
							sound: '/appFiles/objects/Flori.mp3',
							text: 'Flori'
						},
						{
							name: 'Copac',
							dim: {"x":392,"y":298,"w":296,"h":252},
							sound: '/appFiles/objects/Copac.mp3',
							text: 'Copac'
						},
						{
							name: 'Frunza',
							dim: {"x":773,"y":609,"w":178,"h":65},
							sound: '/appFiles/objects/Frunza.mp3',
							text: 'Frunză'
						},
						{
							name: 'Frunza',
							dim: {"x":946,"y":685,"w":77,"h":42},
							sound: '/appFiles/objects/Frunza.mp3',
							text: 'Frunză'
						},
						{
							name: 'Frunza',
							dim: {"x":942,"y":688,"w":80,"h":62},
							sound: '/appFiles/objects/Frunza.mp3',
							text: 'Frunză'
						},
						{
							name: 'Frunza',
							dim: {"x":409,"y":526,"w":51,"h":44},
							sound: '/appFiles/objects/Frunza.mp3',
							text: 'Frunză'
						},
						{
							name: 'Frunza',
							dim: {"x":107,"y":685,"w":107,"h":50},
							sound: '/appFiles/objects/Frunza.mp3',
							text: 'Frunză'
						},
						{
							name: 'Frunza',
							dim: {"x":536,"y":300,"w":376,"h":83},
							sound: '/appFiles/objects/Frunza.mp3',
							text: 'Frunză'
						}
					]
				}				
			],
		introLabels: [
			'A2',
			'împreună cu',
			'Taine Multimedia',
			'prezintă',
			'Ursul păcălit de vulpe',
			'povestit de',
			'Răzvan Hîncu'
		]
	};
	
	return option;
};

module.exports = options;