const people = [

  {
    "name": "Leo III the Isaurian",
    "birth_range": [685, 685],
    "death_range": [741, 741],
    "category": ["emperor", "heretic"],
    "biography": "Byzantine emperor from 717 to 741 and the initiator of the imperial iconoclast policy. He began the first major phase of the controversy, opposed the veneration of icons, and removed Patriarch Germanus I after Germanus refused to support the imperial position.",
    "notes": "The precise origins and theological development of his iconoclasm remain debated; his policy was initially more limited and less systematically developed than that of his son Constantine V.",
    "p": 1
  },
  {
    "name": "Constantine V",
    "birth_range": [718, 718],
    "death_range": [775, 775],
    "category": ["emperor", "iconoclast_theologian", "heretic"],
    "biography": "Emperor from 741 to 775 and the most important imperial architect of the first period of Byzantine iconoclasm. He developed an extensive theological case against icons, reorganized the episcopate in favor of iconoclasm, convened the Council of Hieria in 754, and conducted severe campaigns against iconophile clergy and monasticism.",
    "notes": "His official epithet 'Copronymus' was an iconophile insult and should not be treated as a neutral historical name.",
    "p": 1
  },
  {
    "name": "Artabasdos",
    "birth_range": [690, 705],
    "death_range": [741, 743],
    "category": ["general", "rival_emperor", "iconophile"],
    "biography": "A senior Byzantine general and son-in-law of Leo III who revolted against Constantine V and briefly seized Constantinople. During his rule from approximately 741 to 743, the veneration of icons was restored before Constantine defeated him and reimposed iconoclasm.",
    "notes": "His revolt is an important indication that the religious policy of the emperor was politically contested and could be rapidly reversed when imperial power changed hands.",
    "p": 3
  },
  {
    "name": "Leo IV the Khazar",
    "birth_range": [750, 750],
    "death_range": [780, 780],
    "category": ["emperor", "heretic"],
    "biography": "Emperor from 775 to 780 and son of Constantine V. He continued the official iconoclast policy but appears to have pursued a less aggressively persecutory policy than his father.",
    "notes": "His wife Irene later became the central imperial patron of the restoration of icons.",
    "p": 2
  },
  {
    "name": "Irene of Athens",
    "birth_range": [752, 752],
    "death_range": [803, 803],
    "category": ["emperor", "iconophile"],
    "biography": "Empress and regent for her son Constantine VI, and later sole ruler of the Byzantine Empire. She reversed the iconoclast policy, promoted the restoration of iconophile bishops, and convened the Second Council of Nicaea in 787, which condemned iconoclasm and affirmed the veneration of icons.",
    "notes": "She was a central political patron of the first restoration of icons, though her political career also included the violent deposition and blinding of her son.",
    "p": 1
  },
  {
    "name": "Constantine VI",
    "birth_range": [771, 771],
    "death_range": [797, 797],
    "category": ["emperor"],
    "biography": "Emperor from 780 to 797, initially ruling under the regency of his mother Irene. He participated in the period during which icon veneration was restored and the Second Council of Nicaea was held, although his later relationship with Irene became hostile.",
    "notes": "His precise personal theological position is less important to the icon controversy than his role as the nominal emperor during the restoration of icons.",
    "p": 3
  },
  {
    "name": "Tarasios of Constantinople",
    "birth_range": [730, 745],
    "death_range": [806, 806],
    "category": ["bishop", "iconophile"],
    "biography": "A former imperial secretary who became Patriarch of Constantinople in 784. He was a leading organizer and theological figure in the restoration of icons and presided over the Second Council of Nicaea in 787.",
    "notes": "His elevation from the lay imperial administration to the patriarchate was controversial, but his leadership was central to the restoration of icon veneration.",
    "p": 2
  },
  {
    "name": "Theodore the Studite",
    "birth_range": [759, 759],
    "death_range": [826, 826],
    "category": ["monk", "writer"],
    "biography": "Abbot of the Studion Monastery and one of the most influential defenders of icons during the second period of iconoclasm. He developed a rigorous theological defense of the incarnation, the distinction between worship and veneration, and the authority of the Church against imperial interference.",
    "notes": "He was repeatedly exiled and imprisoned for opposing iconoclast emperors and is arguably the central iconophile figure of the second phase.",
    "p": 1
  },
  {
    "name": "Nikephoros I of Constantinople",
    "birth_range": [750, 758],
    "death_range": [828, 828],
    "category": ["bishop", "theologian", "writer"],
    "biography": "Patriarch of Constantinople from 806 to 815 and a major defender of icons during the renewed iconoclast crisis under Leo V. He opposed the restoration of iconoclasm and was deposed and exiled after refusing to accept the imperial policy.",
    "notes": "His theological writings became important sources for the later iconophile defense.",
    "p": 2
  },
  {
    "name": "Methodios I of Constantinople",
    "birth_range": [788, 800],
    "death_range": [847, 847],
    "category": ["monk", "bishop", "iconophile"],
    "biography": "A leading defender of icons during the second iconoclast period who suffered imprisonment and persecution. He became Patriarch of Constantinople in 843 and, together with Empress Theodora, restored the veneration of icons and helped establish the final Triumph of Orthodoxy.",
    "notes": "He was one of the principal ecclesiastical agents of the permanent restoration of icons.",
    "p": 2
  },
  {
    "name": "Theodora",
    "birth_range": [815, 815],
    "death_range": [867, 867],
    "category": ["emperor", "regent", "iconophile"],
    "biography": "Wife of the iconoclast Emperor Theophilus and regent for their son Michael III after Theophilus's death. In 843 she deposed the iconoclast Patriarch John the Grammarian, installed the iconophile Methodios, and restored the veneration of icons.",
    "notes": "Later Orthodox tradition presents her as secretly favorable to icons during Theophilus's reign, but the evidence for her private convictions during his lifetime is not certain.",
    "p": 1
  },
  {
    "name": "Leo V the Armenian",
    "birth_range": [775, 775],
    "death_range": [820, 820],
    "category": ["emperor", "heretic"],
    "biography": "Emperor from 813 to 820 who initiated the second major phase of Byzantine iconoclasm after military defeats against the Bulgars. He removed the iconophile Patriarch Nikephoros and convened the iconoclast council of 815, which revived the policies of Hieria.",
    "notes": "His iconoclasm appears to have been influenced in part by the perceived connection between military success, divine favor, and the religious policies of earlier iconoclast emperors.",
    "p": 1
  },
  {
    "name": "Theodotos I Kassiteras",
    "birth_range": [755, 760],
    "death_range": [821, 821],
    "category": ["bishop", "heretic"],
    "biography": "Patriarch of Constantinople from 815 to 821, appointed by Leo V after the deposition of Patriarch Nikephoros. He presided over the renewed official iconoclast establishment and supported the decisions of the council of 815.",
    "notes": "He is sometimes called Theodotus I of Constantinople.",
    "p": 2
  },
  {
    "name": "Michael II",
    "birth_range": [770, 770],
    "death_range": [829, 829],
    "category": ["emperor", "moderate_iconoclast"],
    "biography": "Emperor from 820 to 829 who maintained the official prohibition of the veneration of icons but generally pursued a more moderate policy than Leo V or his son Theophilus. He did not restore icon veneration, but neither did he continue the most intense forms of persecution.",
    "notes": "His reign represents a period of continued official iconoclasm with comparatively reduced intensity.",
    "p": 2
  },
  {
    "name": "Theophilos",
    "birth_range": [813, 813],
    "death_range": [842, 842],
    "category": ["emperor", "heretic"],
    "biography": "Emperor from 829 to 842 and the last major Byzantine emperor to enforce iconoclasm. He supported the iconoclast Patriarch John the Grammarian and conducted renewed persecution of iconophile monks and clergy.",
    "notes": "His death created the political opening that allowed the final restoration of icons under Theodora and Methodios.",
    "p": 2
  },
  {
    "name": "John VII the Grammarian",
    "birth_range": [770, 780],
    "death_range": [860, 867],
    "category": ["bishop", "heretic"],
    "biography": "A learned theologian and leading intellectual of the second iconoclast period who served as Patriarch of Constantinople from 837 to 843. He was a principal theological and ecclesiastical supporter of Emperor Theophilus and the iconoclast policy.",
    "notes": "His dates of birth and death are uncertain. He was deposed when icons were restored in 843.",
    "p": 2
  },
  {
    "name": "Theodosius of Ephesus",
    "birth_range": [690, 720],
    "death_range": [760, 780],
    "category": ["bishop", "heretic"],
    "biography": "Archbishop of Ephesus who presided over the Council of Hieria in 754 in the absence of a reigning Patriarch of Constantinople. He was one of the principal episcopal representatives of the first imperial iconoclast establishment.",
    "notes": "He should be distinguished from other bishops named Theodosius; precise biographical details are limited.",
    "p": 2
  },
  {
    "name": "Anastasios of Constantinople",
    "birth_range": [680, 700],
    "death_range": [754, 754],
    "category": ["bishop", "heretic"],
    "biography": "Patriarch of Constantinople from 730 until his death in 754. He succeeded the iconophile Germanus after Germanus's deposition and supported the imperial iconoclast policy of Leo III and Constantine V.",
    "notes": "He was the patriarch during the years in which iconoclasm developed into a formally defined imperial ecclesiastical policy.",
    "p": 2
  },
  {
    "name": "Constantine of Nakoleia",
    "birth_range": [690, 720],
    "death_range": [750, 780],
    "category": ["bishop", "heretic"],
    "biography": "Bishop of Nakoleia in Phrygia and one of the earliest known episcopal opponents of the veneration of icons. His objections contributed to the controversy that brought the issue before Patriarch Germanus and the imperial court.",
    "notes": "He is important as evidence that iconoclast arguments existed among bishops before the formal Council of Hieria.",
    "p": 2
  },

  {
    "name": "Basil of Caesarea",
    "birth_range": [329, 330],
    "death_range": [379, 379],
    "category": ["writer"],
    "biography": "The Cappadocian Father whose writings and theological principles were cited by defenders of icons, especially regarding the relationship between the image and its prototype. His famous formulation that the honor given to the image passes to the prototype became especially important in the iconophile argument.",
    "notes": "His principle was frequently treated as a foundational patristic precedent for distinguishing the material image from the person represented.",
    "p": 2
  },
  {
    "name": "Gregory of Nazianzus",
    "birth_range": [329, 330],
    "death_range": [389, 390],
    "category": ["writer"],
    "biography": "A major Cappadocian theologian whose sermons and theological writings were mined by the defenders of icons for testimony concerning the visibility and representation of Christ after the Incarnation.",
    "notes": "His writings were especially valuable to the iconophile case because of their Christological emphasis.",
    "p": 2
  },
  {
    "name": "Gregory of Nyssa",
    "birth_range": [335, 340],
    "death_range": [394, 395],
    "category": ["writer"],
    "biography": "The Cappadocian theologian whose writings were cited in the icon controversy, particularly for the theological significance of the Incarnation and the relation between visible representation and invisible realities.",
    "notes": "His works were sometimes used in patristic florilegia rather than as a single central authority on icons.",
    "p": 2
  },
  {
    "name": "John Chrysostom",
    "birth_range": [349, 350],
    "death_range": [407, 407],
    "category": ["writer"],
    "biography": "The celebrated preacher and Archbishop of Constantinople whose homilies and writings were cited by iconophiles as evidence for the continuity of Christian devotion, commemoration, and representation.",
    "notes": "He was an especially powerful authority in Constantinople because of his status as one of the city's most revered bishops.",
    "p": 2
  },
  {
    "name": "Cyril of Alexandria",
    "birth_range": [375, 380],
    "death_range": [444, 444],
    "category": ["writer"],
    "biography": "The great Alexandrian theologian and defender of the unity of Christ's person whose Christological writings were important to the iconophile defense of depicting Christ. His theology helped establish the conceptual framework in which the visible human face of the incarnate Word could be represented without dividing Christ. His importance was principally Christological rather than based on a single famous treatise on icons.",
    "p": 2
  },
  {
    "name": "Athanasius of Alexandria",
    "birth_range": [296, 298],
    "death_range": [373, 373],
    "category": ["writer"],
    "biography": "The Alexandrian defender of Nicene Christianity whose writings were invoked by iconophiles for the theology of the Incarnation and the reality of the Word's assumption of visible human flesh. His writings provided an important theological background for the argument that the Incarnation made legitimate representation of Christ possible.",
    "p": 2
  },
  {
    "name": "John of Damascus",
    "birth_range": [675, 680],
    "death_range": [749, 749],
    "category": ["writer", "authority"],
    "biography": "The most important early theological defender of icons. His Three Treatises Against Those Decrying the Holy Images argued that the Incarnation transformed the theological situation by making the invisible God visible in Christ, and that honor shown to an image passes to its prototype. His writings became central authorities for the iconophile position and were explicitly condemned by the iconoclast Council of Hieria.",
    "notes": "Although he belongs chronologically to the controversy itself, his major writings were produced during its first phase and he was already an established defender before the Council of Hieria.",
    "p": 1
  },
  {
    "name": "Germanus I of Constantinople",
    "birth_range": [634, 640],
    "death_range": [733, 733],
    "category": ["bishop", "authority", "writer"],
    "biography": "Patriarch of Constantinople from 715 to 730 and one of the earliest major ecclesiastical defenders of icons against the imperial policy of Leo III. His letters and theological arguments were used by later iconophiles as evidence of the Church's traditional position. His writings, including letters to bishops and theological defenses of sacred images, were important precedents for later iconophile theology.",
    "p": 2
  },
  {
    "name": "Eusebius of Caesarea",
    "birth_range": [260, 265],
    "death_range": [339, 340],
    "category": ["writer", "authority"],
    "biography": "The fourth-century bishop and historian whose letter to Constantia, sister of Emperor Constantine, rejecting a request for an image of Christ became one of the most important patristic texts used by iconoclasts. His testimony was presented as evidence that early Christianity rejected images of Christ. His anti-image letter was vigorously contested by iconophiles, who argued that it reflected an incomplete pre-Nicene or pre-Chalcedonian understanding of the Incarnation rather than the Church's later orthodox Christology.",
    "p": 2
  },
  {
    "name": "Epiphanius of Salamis",
    "birth_range": [310, 315],
    "death_range": [403, 403],
    "category": ["bishop", "writer"],
    "biography": "The bishop of Salamis whose writings and reported actions against images were repeatedly cited by iconoclasts as evidence that ancient Christian tradition rejected religious images. His name was especially important because of his reputation as a vigorous defender of orthodoxy against heresy.  The authenticity and interpretation of some anti-image materials attributed to Epiphanius are disputed, most lucidly by St John of Damascus.",
    "p": 2
  },
  {
    "name": "Asterius of Amasea",
    "birth_range": [350, 360],
    "death_range": [410, 425],
    "category": ["bishop"],
    "biography": "A late-fourth- or early-fifth-century bishop whose homilies included criticism of certain forms of religious imagery. His writings were cited by iconoclasts as patristic evidence against the use of images in Christian devotion.  His criticism was directed within a broader pastoral and moral context and did not necessarily amount to the fully developed Byzantine iconoclast position.",
    "p": 2
  },
  {
    "name": "Nilus of Sinai",
    "birth_range": [350, 360],
    "death_range": [430, 430],
    "category": ["writer", "authority"],
    "biography": "An ascetic author whose writings were cited in discussions of Christian images, especially in connection with the decoration of churches and the use of narrative scenes. His testimony was interpreted differently by the two sides.",
    "notes": "The attribution and interpretation of some relevant passages were matters of controversy.",
    "p": 3
  },
  {
    "name": "Severus of Antioch",
    "birth_range": [465, 470],
    "death_range": [538, 538],
    "category": ["writer"],
    "biography": "A prominent non-Chalcedonian theologian whose writings were sometimes used in the iconoclast controversy as evidence concerning the limits of Christian representation and the relationship between Christological doctrine and images.",
    "notes": "His theological status was controversial in the Byzantine Church, and his writings were not treated as an unqualified authority by the iconophile side.",
    "p": 3
  },
  {
    "name": "Leontius of Neapolis",
    "birth_range": [600, 610],
    "death_range": [650, 670],
    "category": ["bishop", "writer"],
    "biography": "The Cypriot bishop and author of the Life of Saint John the Almsgiver, whose writings were used by defenders of images as evidence for the early Christian distinction between honoring an image and worshipping the person represented. His testimony was particularly useful in the iconophile argument that Christian images were not equivalent to pagan idols.",
    "p": 2
  },
  {
    "name": "John of Jerusalem",
    "birth_range": [700, 720],
    "death_range": [760, 780],
    "category": ["writer", "writer"],
    "biography": "A theologian associated with the iconophile defense during the first iconoclast period whose writings were preserved and used in the broader theological debate over images.",
    "notes": "He should not be confused with John of Damascus; his identification and precise biography are less certain.",
    "p": 2
  },

  {
    "name": "Andreas Karlstadt",
    "birth_range": [1486, 1486],
    "death_range": [1541, 1541],
    "category": ["reformation_theologian", "heretic"],
    "biography": "An early Wittenberg reformer who became one of the most forceful advocates of removing religious images from churches. During the disturbances in Wittenberg in 1522, he argued that images encouraged idolatry and should be removed, contributing to the first major wave of Reformation-era iconoclasm.",
    "notes": "Karlstadt represents an early, radical form of Reformation iconoclasm and is especially useful for showing that Luther's position was not identical to that of the more radical reformers.",
    "p": 2
  },
  {
    "name": "Ulrich Zwingli",
    "birth_range": [1484, 1484],
    "death_range": [1531, 1531],
    "category": ["reformation_theologian", "heretic"],
    "biography": "The principal reformer of Zürich and one of the earliest major Protestant leaders to advocate the removal of religious images from churches. His preaching and influence helped produce the orderly removal of images from Zürich churches in 1524–1525 and influenced broader Reformed opposition to images in worship.",
    "notes": "Zwingli's iconoclasm was tied to his understanding of the Second Commandment and to a broader rejection of traditional Catholic devotional practices.",
    "p": 2
  },
  {
    "name": "John Calvin",
    "birth_range": [1509, 1509],
    "death_range": [1564, 1564],
    "category": ["reformation_theologian", "heretic"],
    "biography": "The principal theological architect of the Reformed tradition and a major opponent of religious images in Christian worship. In the Institutes of the Christian Religion, especially his treatment of the Second Commandment, he argued that images of God and the saints were incompatible with true worship and that images inevitably encouraged superstition and idolatry.",
    "notes": "Calvin's theology provided one of the most systematic Protestant arguments against religious images and helped shape iconoclastic policies in Geneva and other Reformed territories.",
    "p": 2
  },
  {
    "name": "John Knox",
    "birth_range": [1514, 1514],
    "death_range": [1572, 1572],
    "category": ["reformation_theologian", "heretic"],
    "biography": "The leading Scottish Reformer whose preaching and influence contributed to the destruction and removal of religious images during the Scottish Reformation of 1559–1560. He represented the spread of Reformed iconoclasm beyond Switzerland and France into the British Isles.",
    "notes": "Useful if the timeline is intended to show the geographical expansion of Reformed iconoclasm rather than only its principal theological originators.",
    "p": 2
  }

];
const relationships = [
];
const events = [
  {
    "name": "The Incarnation: foundation of icon/veneration theology",
    "time_range": [0, 33],
    "category": [],
    "description": "The Son is the express Image of the Father. Though the Godhead is invisible and uncircumscribed, the Word became flesh and was seen among men, assuming the fullness of human nature in all things except sin. Therefore the One who was formerly invisible has become visible in the flesh, and may be represented according to His humanity. As the saints are members of Christ and our elder brethren, glorified in Him, so their honor is referred to the God who glorified them; and their intercession is sought as the prayer of those who stand alive before God.",
    "p": 2
  },

  {
    "name": "Earliest preserved witness to veneration of saints",
    "time_range": [156, 156],
    "category": [],
    "description": "The Martyrdom of Polycarp gives the earliest preserved written witness to the Church's veneration of the saints. The faithful gather his bones as more precious than jewels and more valuable than gold, and celebrate the day of his martyrdom in the Eucharist, rejoicing in the memory of his birth into eternal life. The practice is therefore attested by this date and must have arisen earlier. The veneration of the saints precedes the veneration of their likenesses in holy images.",
    "p": 2
  },
  {
    "name": "Public veneration of saints",
    "time_range": [317, 317],
    "category": [],
    "description": "When the persecution of the Church had ceased and Christians were free to worship openly, the honor given to the saints assumed public and monumental form. Basilicas were raised over the tombs of martyrs, their relics were solemnly translated, and the faithful gathered to commemorate them and seek their prayers. The veneration of holy images would later develop within this same Christian understanding: the honor shown to the image passes to the person represented.  (Date given is for the Edict of Milan.)",
    "p": 2
  },
  {
    "name": "Ancient maturity of Christian iconography",
    "time_range": [548, 565],
    "category": [],
    "description": "The Christ Pantocrator preserved at the Monastery of Saint Catherine, dating from the sixth century, is among the earliest surviving monumental icons and already possesses the essential visual language of the iconography later received by the Church. Its theological and artistic maturity suggests not the beginning of Christian iconography, but the survival of a tradition already long established.",
    "p": 2
  },

  {
    "name": "Scroll this way to see related history &#8595;",
    "time_range": [660, 670],
    "category": ["hint"],
    "description": "Scroll to the left to see the Fathers whose writings were later summoned as witnesses in the controversy, together with the events and persons whose lives illuminate the history of the Church's defense of holy images.",
    "popup": false,
    "p": 2
  },

  {
    "name": "Roman Synod under Pope Gregory III",
    "time_range": [731, 731],
    "category": ["synod"],
    "description": "A synod held in Rome condemned those who rejected or destroyed sacred images and affirmed their proper use in Christian worship. It was an early formal ecclesiastical rejection of the iconoclast policy emerging under Emperor Leo III.",
    "p": 3
  },
  {
    "name": "Revolt of Artabasdos",
    "time_range": [741, 743],
    "category": ["political"],
    "description": "Artabasdos, a senior Byzantine commander and brother-in-law of Emperor Constantine V, seized Constantinople and briefly claimed the imperial throne. During his rule, the veneration of icons was restored and the iconoclast policy of Constantine V was reversed. Constantine eventually defeated Artabasdos and recovered the capital, after which iconoclasm was reimposed.",
    "p": 3
  },
  {
    "name": "Council of Hieria",
    "time_range": [754, 754],
    "category": ["non_council", "coercion"],
    "description": "Convened by Emperor Constantine V during the first period of Byzantine iconoclasm, this council assembled approximately 340 bishops to condemn the veneration of holy images. Its proceedings took place under intense imperial sponsorship and coercive political conditions, while the see of Constantinople was vacant after the forced resignation of the iconophile Patriarch Constantine II. The council therefore lacked the normal participation of the principal patriarchal see and was not received by the other ancient patriarchates. Although it presented itself as an ecumenical council and developed a serious Christological argument against icons, it attempted to overturn the Church's received practice and to condemn the defenders of images, including St. John of Damascus, without the universal reception of the Church. Its decrees were consequently rejected by the Orthodox Church, not because a council's numerical size or theological seriousness is irrelevant, but because an assembly acting under imperial coercion cannot by itself overturn the received faith of the Church.",
    "p": 2
  },
  {
    "name": "Second Council of Nicaea",
    "time_range": [787, 787],
    "category": ["ecumenical_council"],
    "description": "The Seventh Ecumenical Council repudiated the Council of Hieria, condemned iconoclasm, and affirmed the legitimacy of the veneration of holy images while distinguishing veneration from the worship owed to God alone. It also articulated criteria by which the ecumenical character of a council could be judged.",
    "p": 0
  },
  {
    "name": "Council of Frankfurt",
    "time_range": [794, 794],
    "category": ["non_council", "misunderstanding"],
    "description": "The Frankish bishops rejected the Second Council of Nicaea's teaching on sacred images, largely because its decisions had reached the Latin West through inaccurate translations and were understood to require the worship or adoration of images. The council therefore rejected what it believed to be the Byzantine position, while not abolishing Christian images or rejecting every form of honor shown to them. The resulting controversy illustrates how the mistranslation of the Greek distinction between the worship due to God alone and the veneration offered to holy persons and their images contributed to a temporary Western misunderstanding of the Orthodox position.",
    "p": 3
  },
  {
    "name": "Council of Constantinople under Leo V",
    "time_range": [815, 815],
    "category": ["non_council", "coercion"],
    "description": "Convened under Emperor Leo V during the second period of Byzantine iconoclasm, this council revived the condemned teaching of Hieria and sought to overturn the decree of the Seventh Ecumenical Council, which had restored the veneration of holy images. Its appeal to antiquity could not make it a true council of the Church, for the Church does not receive a synod merely because bishops assemble at the emperor's command, nor does a later gathering acquire authority by reversing an already received conciliar judgment. The council's rejection of the Incarnation's consequences for sacred representation was therefore rejected, and the restoration of icons in 843 was understood as the restoration of the Church's received faith.",
    "p": 3
  },
  {
    "name": "Synod of Constantinople and Restoration of Icons",
    "time_range": [843, 843],
    "category": ["ecumenical_council"],
    "description": "After the death of the iconoclast Emperor Theophilus, Empress Theodora and Patriarch Methodius restored the veneration of icons and formally repudiated the iconoclast councils. The restoration was commemorated by the first Sunday of Great Lent, later known as the Sunday of Orthodoxy.",
    "p": 1
  },

  {
    "name": "No iconoclasm this century, keep scrolling &#8593;",
    "time_range": [900, 910],
    "category": ["hint"],
    "popup": false,
    "description": "No iconoclasm in the 900s.",
    "p": 2
  },
  {
    "name": "No iconoclasm this century, keep scrolling &#8593;",
    "time_range": [1000, 1010],
    "category": ["hint"],
    "popup": false,
    "description": "No iconoclasm in the 1000s.",
    "p": 2
  },
  {
    "name": "No iconoclasm this century, keep scrolling &#8593;",
    "time_range": [1100, 1110],
    "category": ["hint"],
    "popup": false,
    "description": "No iconoclasm in the 1100s.",
    "p": 2
  },
  {
    "name": "No iconoclasm this century, keep scrolling &#8593;",
    "time_range": [1200, 1210],
    "category": ["hint"],
    "popup": false,
    "description": "No iconoclasm in the 1200s.",
    "p": 2
  },
  {
    "name": "No iconoclasm this century, keep scrolling &#8593;",
    "time_range": [1300, 1310],
    "category": ["hint"],
    "popup": false,
    "description": "No iconoclasm in the 1300s.",
    "p": 2
  },
  {
    "name": "No iconoclasm this century, keep scrolling &#8593;",
    "time_range": [1400, 1410],
    "category": ["hint"],
    "popup": false,
    "description": "No iconoclasm in the 1400s.",
    "p": 2
  },

  {
    "name": "Wittenberg/Zürich Iconoclasm",
    "time_range": [1522, 1525],
    "category": ["Reformation"],
    "description": "1522: Andreas Karlstadt and other radical reformers promoted the removal of religious images from churches in Wittenberg. The disturbances helped expose a major division within the Reformation: radical reformers called for the removal or destruction of images, while Martin Luther opposed violent or compulsory iconoclasm and allowed images to remain when they were not treated as objects of worship.<p/>1524-1525: Under the influence of Ulrich Zwingli, Zürich conducted an officially organized removal of religious images, statues, and other traditional devotional objects from its churches. The process was presented as a reform of Christian worship based especially on the Second Commandment and the rejection of traditional image-veneration.",
    "p": 2
  },
  {
    "name": "Reformed Iconoclasm in Geneva",
    "time_range": [1535, 1535],
    "category": ["Reformation"],
    "description": "Following the Reformation's triumph in Geneva, religious images were removed from churches and traditional Catholic devotional practices were suppressed. The city's reforming movement became an important center for the systematic theological and practical rejection of religious images associated with John Calvin and the Reformed tradition.",
    "p": 2
  },
  {
    "name": "Scottish Reformation Iconoclasm",
    "time_range": [1559, 1560],
    "category": ["Reformation"],
    "description": "During the Scottish Reformation, preaching and political upheaval led to widespread destruction and removal of religious images, statues, altars, and other traditional Catholic furnishings from churches. The movement was associated with the Reformed theology promoted by John Knox and his allies.",
    "p": 2
  },

  {
    "name": "English Puritan iconoclasm",
    "time_range": [1642, 1660],
    "category": ["destruction"],
    "description": "During the English Civil War and Commonwealth period, Puritan reformers and parliamentary authorities removed or destroyed many religious images, statues, stained-glass windows, crucifixes, and other traditional church furnishings. The Reformation rejection of sacred images thus produced another major wave of practical iconoclasm more than a century after the first Protestant outbreaks.",
    "p": 2
  },
  {
    "name": "Westminster Confession",
    "time_range": [1646, 1647],
    "category": ["non_council"],
    "description": "The Westminster Assembly gave one of the most systematic expressions of the mature Reformed rejection of religious images, teaching that images of God and the Persons of the Trinity are forbidden and that religious worship must not be offered through images. The rejection of sacred images had now become a settled feature of a major Western Christian confession.",
    "p": 2
  }

];
const relationship_text = {};
const relationship_inverse = {};
const arguments = [
    {
      "id": "iconoclasm_01",
      "opposition": "The Old Testament forbids the making of images for religious use: 'You shall not make for yourself a graven image' and 'You shall not bow down to them or serve them.' Christian images therefore violate the divine prohibition against idolatry.",
      "responses": [
        {
          "person": "John of Damascus",
          "excerpt": "When the Invisible One becomes visible in the flesh, you may then draw a likeness of His form. When He who is pure spirit, without form or limit, in the immeasurable excellence of His own nature, takes the form of a man, He can be portrayed.",
          "source": {
            "work": "Three Treatises on the Divine Images",
            "section": "Treatise I, 8",
            "note": "The prohibition against depicting the invisible God is not simply transferred unchanged to the incarnate Christ."
          }
        },
        {
          "person": "John of Damascus",
          "excerpt": "Of old, God the incorporeal and formless was never depicted, but now that God has been seen in the flesh and has associated with human kind, I depict what I have seen of God.",
          "source": {
            "work": "Three Treatises on the Divine Images",
            "section": "Treatise I, 16",
            "note": "The Incarnation changes the theological situation: the Son has become visible and circumscribed in His humanity."
          }
        },
        {
          "person": "Second Council of Nicaea",
          "excerpt": "We preserve unchanged all the ecclesiastical traditions handed down to us, whether in writing or verbally, one of which is the making of pictorial representations, agreeable to the history of the preaching of the Gospel.",
          "source": {
            "work": "Acts of the Second Council of Nicaea",
            "section": "Definition of Faith",
            "note": "The council argues that the biblical prohibition against idols cannot simply be equated with the Christian use of images."
          }
        }
      ]
    },
    {
      "id": "iconoclasm_02",
      "opposition": "God is infinite, invisible, uncircumscribed, and incomprehensible. An icon attempts to circumscribe and depict what cannot be circumscribed. Therefore an icon of Christ is impossible: either it depicts His divinity, which cannot be depicted, or it depicts merely a human being, which divides Christ.",
      "responses": [
        {
          "person": "Theodore the Studite",
          "excerpt": "Those before the Incarnation believed that God, although uncircumscribed, could be depicted; but those after the Incarnation obstinately insist that He cannot be depicted, although He has become circumscribed in the flesh.",
          "source": {
            "work": "Antirrheticus",
            "section": "First Antirrheticus",
            "note": "Theodore treats the refusal to depict Christ after the Incarnation as a denial of the real visibility and circumscription of Christ's humanity."
          }
        },
        {
          "person": "Theodore the Studite",
          "excerpt": "The image of Christ in relation to Christ Himself has a natural difference, but not a difference of hypostasis.",
          "source": {
            "work": "Writings on Iconoclasm",
            "section": "Antirrheticus; discussion of image and prototype",
            "note": "The icon does not depict the divine nature as such; it depicts the one hypostasis of the Son according to His visible humanity."
          }
        },
        {
          "person": "John of Damascus",
          "excerpt": "I do not depict the invisible Godhead. I depict the visible flesh of God.",
          "source": {
            "work": "Three Treatises on the Divine Images",
            "section": "Treatise I",
            "note": "The icon does not claim to contain or circumscribe the divine nature."
          }
        }
      ]
    },
    {
      "id": "iconoclasm_03",
      "opposition": "An image of Christ either separates Christ's humanity from His divinity or confuses the two natures. If the image depicts only His humanity, it is Nestorian; if it depicts His divinity as well, it is impossible and theologically absurd.",
      "responses": [
        {
          "person": "Theodore the Studite",
          "excerpt": "If Christ is not depictable, then He is not man; and if He is man, He is depictable.",
          "source": {
            "work": "Antirrheticus",
            "section": "First Antirrheticus",
            "note": "Theodore's central Christological argument is that denying the possibility of depicting Christ's humanity threatens the reality of the Incarnation."
          }
        },
        {
          "person": "Theodore the Studite",
          "excerpt": "The image is not another hypostasis, but the same hypostasis of Christ, even if it is represented in the image.",
          "source": {
            "work": "Antirrheticus",
            "section": "First Antirrheticus",
            "note": "The icon depicts the person of the Son according to the visible human form He truly assumed."
          }
        },
        {
          "person": "Second Council of Nicaea",
          "excerpt": "The tradition of making pictorial representations is useful in many respects, but especially in this, that the Incarnation of the Word of God is shown forth as real and not merely phantastic.",
          "source": {
            "work": "Acts of the Second Council of Nicaea",
            "section": "Definition of Faith",
            "note": "The council makes iconography a witness against Docetism rather than a threat to Christology."
          }
        }
      ]
    },
    {
      "id": "iconoclasm_04",
      "opposition": "The only true image of Christ is the Eucharist. Bread and wine become Christ Himself; a painted panel is merely human matter and cannot be a true image. Therefore the Eucharist replaces all painted images.",
      "responses": [
        {
          "person": "Second Council of Nicaea",
          "excerpt": "We have been taught that the bread and the wine are not merely a figure of the body and blood of Christ, but the body itself and the blood itself.",
          "source": {
            "work": "Acts of the Second Council of Nicaea",
            "section": "Sixth Session; refutation of the iconoclast definition",
            "note": "Nicaea II rejects the iconoclast attempt to make the Eucharist the only legitimate Christian image."
          }
        },
        {
          "person": "Theodore the Studite",
          "excerpt": "The Eucharist is not an image of Christ in the same sense as a painted icon; it is Christ Himself by the transformation of the elements, whereas the icon is an image by likeness.",
          "source": {
            "work": "Antirrheticus",
            "section": "First and Second Antirrhetici",
            "note": "Theodore distinguishes the sacramental presence of Christ from the representational relation between an icon and its prototype."
          }
        },
        {
          "person": "John of Damascus",
          "excerpt": "The bread and the wine are not a mere figure of the body and blood of Christ, but the very body of the Lord.",
          "source": {
            "work": "Three Treatises on the Divine Images",
            "section": "Treatise III",
            "note": "The iconophile argument does not deny the unique sacramental reality of the Eucharist; it denies that this uniqueness excludes other kinds of images."
          }
        }
      ]
    },
    {
      "id": "iconoclasm_05",
      "opposition": "To venerate an icon is to worship the material object. If a person bows before a painted board, kisses it, burns incense before it, or lights lamps before it, the person is treating matter as divine.",
      "responses": [
        {
          "person": "John of Damascus",
          "excerpt": "I do not venerate matter, I venerate the fashioner of matter, who became matter for my sake and accepted to dwell in matter and through matter worked my salvation.",
          "source": {
            "work": "Three Treatises on the Divine Images",
            "section": "Treatise I, 16",
            "note": "Matter is not worshipped as God; the material object is honored because of its relation to the person represented."
          }
        },
        {
          "person": "Second Council of Nicaea",
          "excerpt": "The honour which is paid to the image passes on to that which the image represents, and he who reveres the image reveres in it the subject represented.",
          "source": {
            "work": "Acts of the Second Council of Nicaea",
            "section": "Definition of Faith",
            "note": "This is the council's central formulation of the image-prototype relationship."
          }
        },
        {
          "person": "Second Council of Nicaea",
          "excerpt": "We do not give to images the true worship of faith, which pertains to the divine nature alone, but we offer them honourable reverence.",
          "source": {
            "work": "Acts of the Second Council of Nicaea",
            "section": "Definition of Faith",
            "note": "The council explicitly distinguishes latreia, worship due to God alone, from proskynesis or τιμητική προσκύνησις, honor given to holy persons and images."
          }
        }
      ]
    },
    {
      "id": "iconoclasm_06",
      "opposition": "The distinction between worship and veneration is artificial. Scripture says that people bow down before objects in worship, and the practical behavior of Christians toward icons looks exactly like idolatry.",
      "responses": [
        {
          "person": "John of Damascus",
          "excerpt": "I do not say that matter is to be worshipped. I do not worship the creature rather than the Creator. I worship the Creator, who became a creature, who appeared in the flesh.",
          "source": {
            "work": "Three Treatises on the Divine Images",
            "section": "Treatise I",
            "note": "The distinction is not merely verbal; the object and intention of worship are different."
          }
        },
        {
          "person": "Second Council of Nicaea",
          "excerpt": "To these should be given due salutation and honourable reverence, not indeed that true worship of faith which pertains alone to the divine nature.",
          "source": {
            "work": "Acts of the Second Council of Nicaea",
            "section": "Definition of Faith",
            "note": "The council gives the distinction conciliar and dogmatic status."
          }
        },
        {
          "person": "Theodore the Studite",
          "excerpt": "The honor of the image passes to the prototype.",
          "source": {
            "work": "Antirrheticus",
            "section": "First Antirrheticus",
            "note": "The physical object is not the final object of honor; the honor terminates in the person represented."
          }
        }
      ]
    },
    {
      "id": "iconoclasm_07",
      "opposition": "The early Church did not use images in the way later Christians did. Images are a pagan innovation that entered Christianity after the apostolic age.",
      "responses": [
        {
          "person": "Second Council of Nicaea",
          "excerpt": "We preserve unchanged all the ecclesiastical traditions handed down to us, whether in writing or verbally.",
          "source": {
            "work": "Acts of the Second Council of Nicaea",
            "section": "Definition of Faith",
            "note": "Nicaea II treats the practice of images as part of the received tradition of the Church rather than as a late innovation."
          }
        },
        {
          "person": "John of Damascus",
          "excerpt": "We do not change the boundaries which our fathers have set, but we hold to the traditions as we have received them.",
          "source": {
            "work": "Three Treatises on the Divine Images",
            "section": "Treatise I",
            "note": "John repeatedly appeals to ecclesiastical tradition alongside Scripture."
          }
        },
        {
          "person": "Leontius of Neapolis",
          "excerpt": "We do not make an image of God as though we believed the image to be God; rather, we make an image of the one who became visible for our sake.",
          "source": {
            "work": "Defense Against the Acephali",
            "section": "Relevant iconophile fragments",
            "note": "Leontius distinguishes Christian images from pagan idols by their relation to the Incarnation and to their prototypes."
          }
        }
      ]
    },
    {
      "id": "iconoclasm_08",
      "opposition": "The honor given to an image cannot pass to its prototype because the image is materially different from the person represented. A painted Christ is not Christ; therefore honoring the painting cannot honor Christ.",
      "responses": [
        {
          "person": "Theodore the Studite",
          "excerpt": "The image is identical with the prototype in likeness, although different in nature.",
          "source": {
            "work": "Antirrheticus",
            "section": "First Antirrheticus",
            "note": "Theodore distinguishes identity by likeness from identity of material substance."
          }
        },
        {
          "person": "Theodore the Studite",
          "excerpt": "The truth is in the likeness.",
          "source": {
            "work": "Antirrheticus",
            "section": "First Antirrheticus; citing Dionysian language",
            "note": "The icon is not identical to its prototype in material substance; it is related to it through likeness."
          }
        },
        {
          "person": "Second Council of Nicaea",
          "excerpt": "He who reveres the image reveres in it the subject represented.",
          "source": {
            "work": "Acts of the Second Council of Nicaea",
            "section": "Definition of Faith",
            "note": "The council's argument is relational rather than materialistic."
          }
        }
      ]
    },
    {
      "id": "iconoclasm_09",
      "opposition": "If an icon depicts Christ, it must depict either His divine nature or His human nature. If it depicts the divine nature, it is impossible; if it depicts only the human nature, it divides Christ and creates a Nestorian image.",
      "responses": [
        {
          "person": "Theodore the Studite",
          "excerpt": "The image of Christ is not the image of a nature, but of a person.",
          "source": {
            "work": "Antirrheticus",
            "section": "First Antirrheticus",
            "note": "The icon does not attempt to paint the abstract divine nature or the abstract human nature; it depicts the concrete person of Christ."
          }
        },
        {
          "person": "Theodore the Studite",
          "excerpt": "The hypostasis is one and the same, even if it is represented in the icon.",
          "source": {
            "work": "Antirrheticus",
            "section": "First Antirrheticus",
            "note": "The icon depicts the one hypostasis of the Word incarnate according to the visible form of His humanity."
          }
        },
        {
          "person": "Second Council of Nicaea",
          "excerpt": "We make pictorial representations of the Incarnation of our great God and Saviour Jesus Christ.",
          "source": {
            "work": "Acts of the Second Council of Nicaea",
            "section": "Definition of Faith",
            "note": "The council frames the icon as an image of the incarnate person rather than an image of an isolated nature."
          }
        }
      ]
    },
    {
      "id": "iconoclasm_10",
      "opposition": "Christ Himself never commanded the making of an icon. The Apostles did not establish icons as a Christian practice. Therefore icons are an unauthorized human invention.",
      "responses": [
        {
          "person": "John of Damascus",
          "excerpt": "We do not change the boundaries which our fathers have set, but we hold to the traditions as we have received them.",
          "source": {
            "work": "Three Treatises on the Divine Images",
            "section": "Treatise I",
            "note": "The iconophile argument appeals to the Church's received tradition, not only to an explicit command of Christ recorded in Scripture."
          }
        },
        {
          "person": "Second Council of Nicaea",
          "excerpt": "We follow the royal pathway and the divinely inspired authority of our Holy Fathers and the traditions of the Catholic Church.",
          "source": {
            "work": "Acts of the Second Council of Nicaea",
            "section": "Definition of Faith",
            "note": "The council rejects the premise that every legitimate Christian practice requires a direct New Testament command."
          }
        },
        {
          "person": "Theodore the Studite",
          "excerpt": "If we reject every tradition that is not explicitly written, we shall reject many things which the Church has received and practiced.",
          "source": {
            "work": "Writings on Iconoclasm",
            "section": "Antirrheticus",
            "note": "Theodore's broader argument is that the Church's apostolic tradition is not exhausted by isolated written commands."
          }
        }
      ]
    },
    {
      "id": "iconoclasm_11",
      "opposition": "Images are unnecessary because the Gospel is preached in words. The written Scriptures and preaching are sufficient; pictures are inferior and potentially dangerous substitutes for the Word.",
      "responses": [
        {
          "person": "John of Damascus",
          "excerpt": "What the book is to those who understand letters, the image is to the unlearned; and what speech is to hearing, the image is to sight.",
          "source": {
            "work": "Three Treatises on the Divine Images",
            "section": "Treatise I, 17",
            "note": "John presents images as a second mode of proclamation and remembrance, not as a replacement for Scripture."
          }
        },
        {
          "person": "John of Damascus",
          "excerpt": "The image is a memorial. It is a reminder of what has happened.",
          "source": {
            "work": "Three Treatises on the Divine Images",
            "section": "Treatise I",
            "note": "The icon functions pedagogically and liturgically by making the remembered person present to the mind."
          }
        },
        {
          "person": "Second Council of Nicaea",
          "excerpt": "By so much more frequently as they are seen in artistic representation, by so much more readily are men lifted up to the memory of their prototypes, and to a longing after them.",
          "source": {
            "work": "Acts of the Second Council of Nicaea",
            "section": "Definition of Faith",
            "note": "The council explicitly identifies memory and spiritual desire as legitimate purposes of images."
          }
        }
      ]
    },
    {
      "id": "iconoclasm_12",
      "opposition": "Images of the saints are especially problematic because the saints are dead. To honor their images is to revive pagan practices of honoring the dead or to treat created human beings as divine.",
      "responses": [
        {
          "person": "John of Damascus",
          "excerpt": "If you love God, you will certainly honor His servants. If the Creator is honored through His works, why should not His friends be honored?",
          "source": {
            "work": "Three Treatises on the Divine Images",
            "section": "Treatise I, 56",
            "note": "The honor shown to saints is derivative and terminates in God, who glorified them."
          }
        },
        {
          "person": "John of Damascus",
          "excerpt": "The dead man who touched the bones of Elisha was immediately raised up. If God works miracles through bones, it is clear that He can also work through images and stones and many other things.",
          "source": {
            "work": "Three Treatises on the Divine Images",
            "section": "Treatise I, 56",
            "note": "Material objects can be instruments of divine grace without themselves being gods."
          }
        },
        {
          "person": "Second Council of Nicaea",
          "excerpt": "We salute and venerate the images of our Lord Jesus Christ, of our Lady the Mother of God, of the angels, and of all the saints.",
          "source": {
            "work": "Acts of the Second Council of Nicaea",
            "section": "Definition of Faith",
            "note": "The council places the veneration of saints' images within the broader economy of honoring God's friends."
          }
        }
      ]
    },
    {
      "id": "iconoclasm_13",
      "opposition": "The presence of images in churches leads ordinary Christians into superstition. People trust in the physical object, kiss the wood, scrape paint from icons, or treat the image as a source of magical power.",
      "responses": [
        {
          "person": "John of Damascus",
          "excerpt": "I do not venerate the nature of the wood, but I venerate Him who was crucified on the Cross.",
          "source": {
            "work": "Three Treatises on the Divine Images",
            "section": "Treatise I",
            "note": "The material object is not honored independently of its sacred referent."
          }
        },
        {
          "person": "John of Damascus",
          "excerpt": "I do not venerate matter as God. I venerate the Creator of matter, who became matter for my sake.",
          "source": {
            "work": "Three Treatises on the Divine Images",
            "section": "Treatise I, 16",
            "note": "The possibility of abuse does not invalidate the legitimate use of material things in worship."
          }
        },
        {
          "person": "Theodore the Studite",
          "excerpt": "If someone abuses a good thing, the abuse does not abolish the proper use of the thing.",
          "source": {
            "work": "Writings on Iconoclasm",
            "section": "Antirrheticus",
            "note": "The existence of superstition or abuse requires correction rather than the abolition of the orthodox practice."
          }
        }
      ]
    },
    {
      "id": "iconoclasm_14",
      "opposition": "There is no legitimate image of Christ because no authentic portrait of Christ has been handed down. Artists invent a face and then pretend that it is Christ.",
      "responses": [
        {
          "person": "John of Damascus",
          "excerpt": "We have seen His bodily form, His features, and the shape of His body.",
          "source": {
            "work": "Three Treatises on the Divine Images",
            "section": "Treatise I",
            "note": "The possibility of depicting Christ does not depend on possessing a photographically verified portrait."
          }
        },
        {
          "person": "John of Damascus",
          "excerpt": "The image is a likeness, not an exact reproduction of the original.",
          "source": {
            "work": "Three Treatises on the Divine Images",
            "section": "Treatise I",
            "note": "An icon's truth is not photographic accuracy but faithful representation of the person according to the Church's received form."
          }
        },
        {
          "person": "Theodore the Studite",
          "excerpt": "Every artificial image is a likeness, and the prototype is represented in the image according to likeness.",
          "source": {
            "work": "Antirrheticus",
            "section": "First Antirrheticus",
            "note": "The icon's relation to Christ is not based on an exact physical duplication of every feature."
          }
        }
      ]
    },
    {
      "id": "iconoclasm_15",
      "opposition": "If images are permissible, why are they not mentioned as a required part of the Christian faith in the earlier ecumenical councils? The absence of an icon doctrine from Nicaea and Chalcedon suggests that icon veneration is a later innovation.",
      "responses": [
        {
          "person": "Theodore the Studite",
          "excerpt": "The Fathers did not define everything at once, but they defined what was necessary when heresy arose.",
          "source": {
            "work": "Writings on Iconoclasm",
            "section": "Antirrheticus",
            "note": "The Church's later definition of a doctrine does not imply that the doctrine was invented at the moment of definition."
          }
        },
        {
          "person": "Second Council of Nicaea",
          "excerpt": "We follow the royal pathway and the divinely inspired authority of our Holy Fathers and the traditions of the Catholic Church.",
          "source": {
            "work": "Acts of the Second Council of Nicaea",
            "section": "Definition of Faith",
            "note": "The council sees itself as clarifying and defending received tradition rather than creating a new practice."
          }
        }
      ]
    },
    {
      "id": "iconoclasm_16",
      "opposition": "The Church's use of images is effectively the same as pagan idolatry. Pagans also claimed that the honor given to an image passed to the god represented by it.",
      "responses": [
        {
          "person": "John of Damascus",
          "excerpt": "The difference between the pagans and us is that we do not worship matter, but the Creator of matter, who became matter for our sake.",
          "source": {
            "work": "Three Treatises on the Divine Images",
            "section": "Treatise I, 16",
            "note": "The Incarnation creates a specifically Christian relationship between material representation and the divine Person who truly became man."
          }
        },
        {
          "person": "Second Council of Nicaea",
          "excerpt": "We do not give to images the true worship of faith which pertains to the divine nature alone.",
          "source": {
            "work": "Acts of the Second Council of Nicaea",
            "section": "Definition of Faith",
            "note": "The council's distinction between latreia and honorific veneration is central to its rejection of the charge of idolatry."
          }
        },
        {
          "person": "Theodore the Studite",
          "excerpt": "The icon is not God, nor is it worshipped as God; it is an image of God who became visible.",
          "source": {
            "work": "Antirrheticus",
            "section": "First Antirrheticus",
            "note": "Theodore argues that Christian iconography is specifically grounded in the Incarnation and therefore cannot simply be assimilated to pagan cult images."
          }
        }
      ]
    },
    {
      "id": "iconoclasm_17",
      "opposition": "The Church's practice of images is a matter of custom, and custom cannot establish doctrine. Only Scripture can bind the conscience.",
      "responses": [
        {
          "person": "John of Damascus",
          "excerpt": "We do not change the boundaries which our fathers have set, but we hold to the traditions as we have received them.",
          "source": {
            "work": "Three Treatises on the Divine Images",
            "section": "Treatise I",
            "note": "John's argument presupposes that apostolic Christianity is transmitted through the Church's received tradition as well as through Scripture."
          }
        },
        {
          "person": "Second Council of Nicaea",
          "excerpt": "We preserve unchanged all the ecclesiastical traditions handed down to us, whether in writing or verbally.",
          "source": {
            "work": "Acts of the Second Council of Nicaea",
            "section": "Definition of Faith",
            "note": "The council explicitly treats unwritten ecclesiastical tradition as part of the Church's authoritative inheritance."
          }
        },
        {
          "person": "Theodore the Studite",
          "excerpt": "The Church is not governed by the emperor, but by the laws of the Fathers and the traditions handed down from the beginning.",
          "source": {
            "work": "Letters and Writings Against Iconoclasm",
            "section": "Various letters",
            "note": "For Theodore, the controversy is also a question of whether imperial authority can overturn received ecclesiastical tradition."
          }
        }
      ]
    },
    {
      "id": "iconoclasm_18",
      "opposition": "The emperor has the authority to protect the Church and therefore to correct its practices when they become idolatrous. If the emperor convenes a council and the bishops agree, the matter is settled.",
      "responses": [
        {
          "person": "Theodore the Studite",
          "excerpt": "It is not the emperor's place to legislate for the Church.",
          "source": {
            "work": "Letters Against Iconoclasm",
            "section": "Letters to imperial and ecclesiastical authorities",
            "note": "Theodore repeatedly rejects the idea that imperial office gives a ruler authority to define doctrine."
          }
        },
        {
          "person": "Theodore the Studite",
          "excerpt": "The emperor is not a priest, nor has he received the authority to define ecclesiastical dogmas.",
          "source": {
            "work": "Letters Against Iconoclasm",
            "section": "Correspondence during the second iconoclast period",
            "note": "This is one of Theodore's most important ecclesiological themes."
          }
        },
        {
          "person": "Second Council of Nicaea",
          "excerpt": "The council of Hieria, which called itself the Seventh Synod, was in truth a pseudo-synod.",
          "source": {
            "work": "Acts of the Second Council of Nicaea",
            "section": "Sessions concerning the Council of Hieria",
            "note": "Nicaea II's rejection of Hieria demonstrates that imperial sponsorship and a large episcopal attendance do not by themselves make a council ecumenical."
          }
        }
      ]
    }
];
