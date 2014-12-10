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
						}
					]
				},
				{
					title: 'Page 2',
					background: '/appFiles/backgrounds/vulpea_face_pe_moarta.png',
					text: '- Bun! gândi vulpea. Asta este hrana ce-o aşteptam. Şi îndată iesi de sub tufă şi se lungi în mijlocul drumului, ca şi cum ar fi fost moartă.\nCarul se apropie de vulpe, iar ţăranul ce mâna boii o văzu şi, crezând că-i moartă cu adevărat, strigă la boi: Hoo! Hoo! iar Boii se opresc. Ţăranul veni spre vulpe, se uită la ea de aproape şi, văzând că nici nu suflă, zise: Bre! da’ cum naiba a murit vulpea asta aici?! Ti! ce frumoasă caţaveică am să fac nevestei mele din blana acestui vulpoi! Zicând aşa, apucă vulpea de după cap şi, târând-o până la car, se opinti ş-o aruncă deasupra peştelui. Apoi strigă la boi: Dii Boilor !!! iar, boii porniră.',
					audio: '/appFiles/narration/Pag2.mp3'
				},
				{
					title: 'Page 3',
					background: '/appFiles/backgrounds/vulpea_arunca_pestii.png',
					text: 'Ţăranul mergea pe lângă boi şi-i tot îndemna să meargă mai iute, ca s-ajungă degrabă acasă şi să jupoaie pielea vulpii.\nÎnsă, cum au pornit boii, vulpea şi începu cu picioarele a împinge peştele din car jos. Ţăranul mâna, carul scârţâia, şi peştele din car cădea.\nDupă ce hoaţa de vulpe aruncă o mulţime de peşte pe drum, binişor sari şi ea din car şi, cu mare grabă, începu a strânge peştele de pe drum. După ce l-a strâns grămadă, îl luă, îl duse la vizuina sa şi se apucă de ospat, că tare-i mai era foame!',
					audio: '/appFiles/narration/Pag3.mp3'
				},
				{
					title: 'Page 4',
					background: '/appFiles/backgrounds/ursul_cere_mancare.png',
					text: 'Tocmai când începuse a mânca, iaca vine la dânsa ursul.\n- Bună masa, cumătră! Ti!!! da’ ce mai de peşte ai! Dă-mi şi mie, că tare! mi-i poftă!\n- Ia mai pune-ţi pofta-n cui, cumătre, că doar nu pentru gustul altuia m-am muncit eu. Dacă ţi-i aşa de poftă, du-te şi-ţi moaie coada-n baltă, ca mine, şi-i avea peşte să mănânci.\n- Învaţă-mă, te rog, cumătră, că eu nu ştiu cum se prinde peştele.',
					audio: '/appFiles/narration/Pag4.mp3'
				},
				{
					title: 'Page 5',
					background: '/appFiles/backgrounds/ursul_pescuieste.png',
					text: 'Atunci vulpea rânji dinţii şi zise: Alei, cumătre! da’ nu ştii că nevoia te duce pe unde nu-ţi e voia şi te-nvaţă ce nici gândeşti? Ascultă, cumătre: vrei să mănânci peşte? Du-te desară la băltoaga aceea din marginea pădurii, vârâ-ţi coada-n apă şi stăi pe loc, fără să te mişti, până despre ziuă; atunci smunceşte vârtos spre mal şi ai să scoţi o mulţime de peşte, poate îndoit şi-ntreit de cât am scos eu. \nUrsul, nemaizicând nici o vorbă, alergă-n fuga mare la băltoaga din marginea pădurei şi işi vârâ-n apă toată coada!',
					audio: '/appFiles/narration/Pag5.mp3'
				},
				{
					title: 'Page 6',
					background: '/appFiles/backgrounds/lake_inghetat.png',
					text: 'În acea noapte începuse a bate un vânt răce, de îngheţa limba-n gură şi chiar cenuşa de sub foc. Îngheţă zdravăn şi apa din băltoagă, şi prinse coada ursului ca într-un cleşte. De la o vreme, ursul, nemaiputând de durerea cozii şi de frig, smunci o dată din toată puterea. Şi, sărmanul urs, în loc să scoată peşte, rămase făr’ de coadă!\nÎncepu el acum a mormăi cumplit ş-a sări în sus de durere; plin de ciudă pe vulpe că l-a amăgit, se duse s-o ucidă în bătaie. Dar şireata vulpe ştia cum să se ferească de mânia ursului. Ea ieşise din vizuină şi se vârâse în scorbura unui copac din apropiere; şi când văzu pe urs că vine făr’ de coadă, începu a striga:\n-	Hei cumătre! Dar ţi-au mâncat peştii coada, ori ai fost prea lacom ş-ai vrut să nu mai rămâie peşti în baltă?',
					audio: '/appFiles/narration/Pag6.mp3'
				},
				{
					title: 'Page 7',
					background: '/appFiles/backgrounds/ursul_suparat.png',
					text: 'Ursul, auzind că încă-l mai ie şi în râs, il apucă ciuda şi mai tare şi se răpezi iute spre copac; dar gura scorburei fiind strâmtă, ursul nu putea să încapă înăuntru. Atunci el căută o creangă cu cârlig şi începu a cotrobăi prin scorbură, ca să scoată vulpea afară, şi să-i deie de cheltuială… Dar când apuca ursul de piciorul vulpei, ea striga: "Trage, nătărăule! mie nu-mi pasă, că tragi de copac…" Iar când anina cârligul de copac, ea striga: "Valeu, cumătre! nu trage, că-mi rupi piciorul!"\nÎn zadar s-a năcăjit ursul, de-i curgeau sudorile, că tot n-a putut scoate vulpea din scorbura copacului.\nŞi iaca aşa a rămas ursul păcălit de vulpe!',
					audio: '/appFiles/narration/Pag7.mp3'
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