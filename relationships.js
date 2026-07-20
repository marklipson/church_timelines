const relationships = [
  {
    "from": "Peter",
    "to": "Linus",
    "relationship": "successor_of",
    "church": "Rome",
    "relationship_confidence": "medium",
    "basis": "early_church_tradition",
    "description": "Linus is traditionally regarded as Peter's immediate successor as bishop of Rome."
  },
  {
    "from": "Linus",
    "to": "Anacletus / Cletus",
    "relationship": "successor_of",
    "church": "Rome",
    "relationship_confidence": "medium",
    "basis": "early_church_tradition",
    "description": "Anacletus or Cletus is traditionally placed after Linus in the Roman succession."
  },
  {
    "from": "Anacletus / Cletus",
    "to": "Clement of Rome",
    "relationship": "successor_of",
    "church": "Rome",
    "relationship_confidence": "medium",
    "basis": "early_church_tradition",
    "description": "Clement is traditionally placed after Anacletus/Cletus in the Roman succession."
  },
  {
    "from": "Peter",
    "to": "Evodius of Antioch",
    "relationship": "appointed_or_designated_successor",
    "church": "Antioch",
    "relationship_confidence": "low",
    "basis": "early_church_tradition",
    "description": "Evodius is traditionally regarded as Peter's successor as leader or bishop of Antioch."
  },
  {
    "from": "Evodius of Antioch",
    "to": "Ignatius of Antioch",
    "relationship": "successor_of",
    "church": "Antioch",
    "relationship_confidence": "medium",
    "basis": "early_church_tradition",
    "description": "Ignatius is traditionally regarded as the successor of Evodius as bishop of Antioch."
  },
  {
    "from": "Ignatius of Antioch",
    "to": "Hero of Antioch",
    "relationship": "successor_of",
    "church": "Antioch",
    "relationship_confidence": "medium",
    "basis": "early_church_tradition",
    "description": "Hero is traditionally regarded as the successor of Ignatius at Antioch."
  },
  {
    "from": "James the brother of the Lord",
    "to": "Simeon of Jerusalem",
    "relationship": "successor_of",
    "church": "Jerusalem",
    "relationship_confidence": "high",
    "basis": "early_church_tradition",
    "description": "Simeon is traditionally regarded as succeeding James as leader of the Jerusalem church."
  },
  {
    "from": "John",
    "to": "Ignatius of Antioch",
    "relationship": "teacher_to_disciple",
    "church": "Antioch",
    "relationship_confidence": "medium",
    "basis": "Jerome_and_early_tradition",
    "description": "Ancient church historians, such as Jerome and the record of the Martyrdom of Ignatius, identify Ignatius and his contemporary Polycarp as direct disciples of John."
  },
  {
    "from": "Peter",
    "to": "Ignatius of Antioch",
    "relationship": "successor_of",
    "church": "Antioch",
    "relationship_confidence": "medium",
    "basis": "",
    "description": "According to Theodoret of Cyrrhus, Peter, who established the church at Antioch, ordained Ignatius as bishop of Antioch.  Eusebius writes that Evodius preceeded him."
  },
  {
    "from": "John",
    "to": "Polycarp of Smyrna",
    "relationship": "teacher_to_disciple",
    "church": "Smyrna",
    "relationship_confidence": "high",
    "basis": "Irenaeus_and_early_tradition",
    "description": "Polycarp is traditionally and early-attested as having been instructed by John and other apostles."
  },
  {
    "from": "Polycarp of Smyrna",
    "to": "Irenaeus of Lyons",
    "relationship": "teacher_to_disciple",
    "church": "Smyrna / Lyons",
    "relationship_confidence": "high",
    "basis": "Irenaeus_personal_testimony",
    "description": "Irenaeus knew Polycarp personally in his youth and explicitly remembered hearing Polycarp and the traditions he had received from the apostolic generation."
  },
  {
    "from": "John",
    "to": "Papias of Hierapolis",
    "relationship": "teacher_to_student",
    "church": "Asia Minor",
    "relationship_confidence": "medium",
    "basis": "early_church_tradition",
    "description": "Papias is associated with the circle of those who had direct contact with apostles and their disciples, including John."
  },
  {
    "from": "Peter",
    "to": "Mark",
    "relationship": "missionary_companion",
    "church": "Rome",
    "relationship_confidence": "high",
    "basis": "early_church_tradition",
    "description": "Mark is traditionally regarded as Peter's interpreter or close associate and as the recorder of Peter's preaching."
  },
  {
    "from": "Paul",
    "to": "Mark",
    "relationship": "missionary_companion",
    "church": "Eastern Mediterranean",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "Mark was associated with Paul and Barnabas in the early missionary movement, though their cooperation was temporarily interrupted."
  },
  {
    "from": "Paul",
    "to": "Barnabas",
    "relationship": "missionary_companion",
    "church": "Antioch / Eastern Mediterranean",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "Barnabas was Paul's major missionary partner during the early expansion of the Gentile mission."
  },
  {
    "from": "Barnabas",
    "to": "Mark",
    "relationship": "missionary_companion",
    "church": "Cyprus / Eastern Mediterranean",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "Barnabas took his cousin Mark with him on missionary work after Mark's separation from Paul's group."
  },
  {
    "from": "Paul",
    "to": "Silas / Silvanus",
    "relationship": "missionary_companion",
    "church": "Eastern Mediterranean",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "Silas became Paul's principal missionary companion after the separation from Barnabas."
  },
  {
    "from": "Paul",
    "to": "Timothy",
    "relationship": "missionary_companion",
    "church": "Ephesus",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "Timothy was Paul's close co-worker and a major leader in the Pauline missionary network."
  },
  {
    "from": "Timothy",
    "to": "Onesimus",
    "relationship": "successor_of",
    "church": "Ephesus",
    "relationship_confidence": "traditional",
    "basis": "tradition",
    "description": "Onesimus was bishop of Ephesus after Timothy."
  },
  {
    "from": "Paul",
    "to": "Titus",
    "relationship": "missionary_companion",
    "church": "Crete",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "Titus was a trusted co-worker of Paul and was entrusted with important church leadership."
  },
  {
    "from": "Paul",
    "to": "Tychicus",
    "relationship": "missionary_companion",
    "church": "Eastern Mediterranean",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "Tychicus served as a trusted co-worker and messenger within Paul's network."
  },
  {
    "from": "Paul",
    "to": "Aquila",
    "relationship": "missionary_companion",
    "church": "Corinth / Ephesus / Rome",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "Aquila and Priscilla worked closely with Paul in the missionary expansion of the Church."
  },
  {
    "from": "Paul",
    "to": "Priscilla",
    "relationship": "missionary_companion",
    "church": "Corinth / Ephesus / Rome",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "Priscilla was a prominent co-worker in Paul's missionary network and helped instruct Apollos."
  },
  {
    "from": "Aquila",
    "to": "Priscilla",
    "relationship": "spouse",
    "church": "Corinth / Ephesus / Rome",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "Aquila and Priscilla were married missionary partners who worked together in several churches."
  },
  {
    "from": "Paul",
    "to": "Onesimus",
    "relationship": "pastoral_relationship",
    "church": "Colossae",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "Paul wrote to Philemon concerning Onesimus and described a close spiritual relationship with him."
  },
  {
    "from": "Paul",
    "to": "Crispus",
    "relationship": "converted",
    "church": "Corinth",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "Crispus was a prominent early convert associated with Paul's ministry in Corinth."
  },
  {
    "from": "Paul",
    "to": "Gaius of Corinth",
    "relationship": "converted",
    "church": "Corinth",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "Gaius was associated with Paul and provided hospitality to the Christian community."
  },
  {
    "from": "Paul",
    "to": "Dionysius the Areopagite",
    "relationship": "converted",
    "church": "Athens",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "Dionysius is named in Acts as a convert associated with Paul's preaching in Athens."
  },
  {
    "from": "Ignatius of Antioch",
    "to": "Polycarp of Smyrna",
    "relationship": "contemporary_bishop_and_correspondent",
    "church": "Antioch / Smyrna",
    "relationship_confidence": "high",
    "basis": "surviving_letters",
    "description": "Ignatius wrote directly to Polycarp and to the church of Smyrna."
  },
  {
    "from": "Ignatius of Antioch",
    "to": "Polycarp of Smyrna",
    "relationship": "bishop_to_bishop_instruction",
    "church": "Smyrna",
    "relationship_confidence": "high",
    "basis": "surviving_letter",
    "description": "Ignatius addressed pastoral advice to Polycarp concerning his episcopal ministry."
  },
  {
    "from": "Origen of Alexandria",
    "to": "Dionysius of Alexandria",
    "relationship": "teacher_to_student",
    "church": "Alexandria",
    "relationship_confidence": "high",
    "basis": "",
    "description": "Dionysius studied under Origen."
  },
  {
    "from": "Origen of Alexandria",
    "to": "Gregory Thaumaturgus",
    "relationship": "teacher_to_student",
    "church": "Alexandria",
    "relationship_confidence": "high",
    "basis": "",
    "description": "Gregory studied under Origen."
  },
  {
    "from": "Mark",
    "to": "Anianus of Alexandria",
    "relationship": "founder_and_successor",
    "church": "Alexandria",
    "relationship_confidence": "medium",
    "basis": "Alexandrian_church_tradition",
    "description": "Anianus is traditionally regarded as Mark's immediate successor as bishop of Alexandria."
  },
  {
    "from": "Anianus of Alexandria",
    "to": "Avilius",
    "relationship": "successor_of",
    "church": "Alexandria",
    "relationship_confidence": "medium",
    "basis": "early_church_tradition",
    "description": "Avilius is traditionally placed after Anianus in the Alexandrian succession."
  },
  {
    "from": "Avilius",
    "to": "Cerdo",
    "relationship": "successor_of",
    "church": "Alexandria",
    "relationship_confidence": "low",
    "basis": "traditional_episcopal_lists",
    "description": "Cerdo is traditionally placed after Avilius in the Alexandrian succession."
  },
  {
    "from": "Cerdo",
    "to": "Primus",
    "relationship": "successor_of",
    "church": "Alexandria",
    "relationship_confidence": "low",
    "basis": "traditional_episcopal_lists",
    "description": "Primus is traditionally placed after Cerdo in the Alexandrian succession."
  },
  {
    "from": "Primus",
    "to": "Justus of Alexandria",
    "relationship": "successor_of",
    "church": "Alexandria",
    "relationship_confidence": "low",
    "basis": "traditional_episcopal_lists",
    "description": "Justus is traditionally placed after Primus in the Alexandrian succession."
  },
  {
    "from": "Narcissus of Jerusalem",
    "to": "Hegesippus",
    "relationship": "historical_association",
    "church": "Jerusalem",
    "relationship_confidence": "low",
    "basis": "early_church_history",
    "description": "Hegesippus gathered traditions concerning the Jerusalem church and its leaders, including Narcissus."
  },
  {
    "from": "Papias of Hierapolis",
    "to": "Irenaeus of Lyons",
    "relationship": "tradition_transmission",
    "church": "Asia Minor / Gaul",
    "relationship_confidence": "medium",
    "basis": "early_church_writers",
    "description": "Papias and Irenaeus belong to overlapping chains of transmission preserving apostolic traditions, though a direct personal relationship is not established."
  },
  {
    "from": "Quadratus of Athens",
    "to": "Aristides of Athens",
    "relationship": "shared_apologetic_tradition",
    "church": "Athens",
    "relationship_confidence": "low",
    "basis": "chronological_and_regional_association",
    "description": "Both were early Christian apologists associated with Athens, though a direct relationship is not established."
  },
  {
    "from": "Justin Martyr",
    "to": "Tatian the Syrian",
    "relationship": "teacher_to_student",
    "church": "",
    "relationship_confidence": "medium",
    "basis": "",
    "description": ""
  },

  {
    "from": "Jesus Christ",
    "to": "Peter",
    "relationship": "apostle_and_disciple",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "One of the Twelve and a leading apostolic witness; prominently associated with Jesus during his ministry."
  },
  {
    "from": "Jesus Christ",
    "to": "John",
    "relationship": "apostle_and_disciple",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "One of the Twelve and a member of the inner circle of disciples."
  },
  {
    "from": "Jesus Christ",
    "to": "James the brother of the Lord",
    "relationship": "brother_and_post_resurrection_witness",
    "relationship_confidence": "high",
    "basis": "New_Testament_and_early_tradition",
    "description": "James was a close relative of Jesus and became a leading figure in the Jerusalem church after the Resurrection."
  },
  {
    "from": "Jesus Christ",
    "to": "Paul",
    "relationship": "post_resurrection_appearance_and_apostolic_commission",
    "relationship_confidence": "high",
    "basis": "Pauline_letters_and_Acts",
    "description": "Paul claimed to have encountered the risen Christ and received his apostolic commission from him."
  },
  {
    "from": "Jesus Christ",
    "to": "Matthew",
    "relationship": "apostle_and_disciple",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "One of the Twelve and a disciple called by Jesus during his earthly ministry."
  },
  {
    "from": "Jesus Christ",
    "to": "Andrew",
    "relationship": "apostle_and_disciple",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "One of the Twelve and an early disciple of Jesus."
  },
  {
    "from": "Jesus Christ",
    "to": "James son of Zebedee",
    "relationship": "apostle_and_disciple",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "One of the Twelve and a disciple called by Jesus during his earthly ministry."
  },
  {
    "from": "Jesus Christ",
    "to": "Thomas",
    "relationship": "apostle_and_disciple",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "One of the Twelve and a prominent witness to the Resurrection."
  },
  {
    "from": "Jesus Christ",
    "to": "Philip",
    "relationship": "apostle_and_disciple",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "One of the Twelve, called directly by Jesus in the Gospel tradition."
  },
  {
    "from": "Jesus Christ",
    "to": "Bartholomew",
    "relationship": "apostle_and_disciple",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "One of the Twelve."
  },
  {
    "from": "Jesus Christ",
    "to": "James son of Alphaeus",
    "relationship": "apostle_and_disciple",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "One of the Twelve."
  },
  {
    "from": "Jesus Christ",
    "to": "Jude / Thaddeus",
    "relationship": "apostle_and_disciple",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "One of the Twelve, though the identification of the various New Testament figures named Jude or Judas is complex."
  },
  {
    "from": "Jesus Christ",
    "to": "Simon the Zealot",
    "relationship": "apostle_and_disciple",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "One of the Twelve."
  },
  {
    "from": "Jesus Christ",
    "to": "Matthias",
    "relationship": "post_resurrection_apostolic_witness",
    "relationship_confidence": "medium",
    "basis": "Acts_and_early_tradition",
    "description": "A witness to the Resurrection who was later chosen to replace Judas Iscariot among the Twelve."
  },
  {
    "from": "Jesus Christ",
    "to": "Mary the Theotokos",
    "relationship": "son_and_mother",
    "relationship_confidence": "high",
    "basis": "New_Testament_and_early_tradition",
    "description": "Mary was the mother of Jesus and a member of the apostolic community after the Resurrection."
  },
  {
    "from": "Jesus Christ",
    "to": "James the brother of the Lord",
    "relationship": "relative",
    "relationship_confidence": "high",
    "basis": "New_Testament_and_early_tradition",
    "description": "Step-brother or cousin of Jesus."
  },
  {
    "from": "Jesus Christ",
    "to": "Barnabas",
    "relationship": "post_resurrection_apostolic_tradition",
    "relationship_confidence": "low",
    "basis": "early_church_tradition",
    "description": "Barnabas was a major missionary of the first Christian generation, and one of the 70."
  },
  {
    "from": "Jesus Christ",
    "to": "Simeon of Jerusalem",
    "relationship": "relative",
    "relationship_confidence": "high",
    "basis": "early_church_tradition",
    "description": "Simeon was traditionally a relative of Jesus and successor to James in the leadership of the Jerusalem church."
  },
  {
    "from": "Jesus Christ",
    "to": "Ignatius of Antioch",
    "relationship": "traditional_association",
    "relationship_confidence": "low",
    "basis": "traditional",
    "description": "According to tradition, Ignatius is the child Jesus held on his lap in Matthew 18:1-4."
  },



  {
    "from": "Jesus Christ",
    "to": "John the Baptist",
    "relationship": "forerunner_and_baptizer",
    "church": "Judea",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "John prepared the way for Christ, baptized Him, and publicly bore witness to His identity."
  },
  {
    "from": "Jesus Christ",
    "to": "Photini",
    "relationship": "evangelized_and_became_disciple",
    "church": "Samaria",
    "relationship_confidence": "high",
    "basis": "New_Testament_and_tradition",
    "description": "Jesus encountered the Samaritan Woman at the well; she became a witness to Him and is traditionally known as Photini."
  },
  {
    "from": "Jesus Christ",
    "to": "Stephen",
    "relationship": "post_resurrection_witness",
    "church": "Jerusalem",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "Stephen was a prominent early Christian leader whose martyrdom included a vision of the glorified Christ."
  },

  {
    "from": "Peter",
    "to": "Mark",
    "relationship": "spiritual_father_and_associate",
    "church": "Rome",
    "relationship_confidence": "high",
    "basis": "early_church_tradition",
    "description": "Early tradition calls Mark Peter's interpreter or close associate, and 1 Peter refers to Mark as Peter's son."
  },
  {
    "from": "Paul",
    "to": "Timothy",
    "relationship": "spiritual_father_and_apostolic_delegate",
    "church": "Ephesus / Eastern Mediterranean",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "Paul regarded Timothy as a beloved spiritual son and entrusted him with major pastoral responsibilities."
  },
  {
    "from": "Paul",
    "to": "Titus",
    "relationship": "spiritual_father_and_apostolic_delegate",
    "church": "Crete / Eastern Mediterranean",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "Paul referred to Titus as his true child in the faith and entrusted him with the organization of churches in Crete."
  },
  {
    "from": "Paul",
    "to": "Luke",
    "relationship": "missionary_companion",
    "church": "Eastern Mediterranean",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "The 'we' passages of Acts and early tradition associate Luke closely with Paul's missionary journeys."
  },
  {
    "from": "Paul",
    "to": "Apollos",
    "relationship": "apostolic_association",
    "church": "Corinth / Ephesus",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "Apollos was an important Christian teacher who worked within the missionary network associated with Paul, though he was not Paul's disciple in the strict sense."
  },
  {
    "from": "Priscilla",
    "to": "Apollos",
    "relationship": "teacher_to_student",
    "church": "Ephesus",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "Priscilla and Aquila instructed Apollos more accurately in the Christian faith."
  },
  {
    "from": "Aquila",
    "to": "Apollos",
    "relationship": "teacher_to_student",
    "church": "Ephesus",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "Aquila and Priscilla instructed Apollos in the Christian faith."
  },
  {
    "from": "Paul",
    "to": "Onesimus",
    "relationship": "spiritual_father_and_pastoral_relationship",
    "church": "Colossae",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "Paul described Onesimus as his child begotten in imprisonment and expressed deep personal concern for him."
  },

  {
    "from": "James the brother of the Lord",
    "to": "Simeon of Jerusalem",
    "relationship": "successor_of",
    "church": "Jerusalem",
    "relationship_confidence": "high",
    "basis": "early_church_tradition",
    "description": "Simeon succeeded James as leader of the Jerusalem church."
  },
  {
    "from": "Simeon of Jerusalem",
    "to": "Justus of Jerusalem",
    "relationship": "successor_of",
    "church": "Jerusalem",
    "relationship_confidence": "medium",
    "basis": "early_episcopal_tradition",
    "description": "Justus is traditionally placed among the successors of Simeon in the early Jerusalem episcopal succession."
  },

  {
    "from": "Mark",
    "to": "Anianus of Alexandria",
    "relationship": "founder_and_successor",
    "church": "Alexandria",
    "relationship_confidence": "medium",
    "basis": "Alexandrian_church_tradition",
    "description": "Anianus is traditionally regarded as Mark's immediate successor as leader of the church of Alexandria."
  },
  {
    "from": "Anianus of Alexandria",
    "to": "Avilius",
    "relationship": "successor_of",
    "church": "Alexandria",
    "relationship_confidence": "medium",
    "basis": "early_church_tradition",
    "description": "Avilius is traditionally placed after Anianus in the Alexandrian succession."
  },

  {
    "from": "John",
    "to": "Polycarp of Smyrna",
    "relationship": "teacher_to_disciple",
    "church": "Smyrna / Asia Minor",
    "relationship_confidence": "high",
    "basis": "Irenaeus_and_early_tradition",
    "description": "Irenaeus reported that Polycarp had been instructed by apostles, especially John in the later tradition."
  },
  {
    "from": "Polycarp of Smyrna",
    "to": "Irenaeus of Lyons",
    "relationship": "teacher_to_disciple",
    "church": "Smyrna / Lyons",
    "relationship_confidence": "high",
    "basis": "Irenaeus_personal_testimony",
    "description": "Irenaeus personally heard Polycarp and remembered his connection with the apostolic generation."
  },
  {
    "from": "Origen of Alexandria",
    "to": "Dionysius of Alexandria",
    "relationship": "teacher_to_student",
    "church": "Alexandria",
    "relationship_confidence": "high",
    "basis": "early_church_history",
    "description": "Dionysius studied under Origen in Alexandria."
  },
  {
    "from": "Origen of Alexandria",
    "to": "Gregory Thaumaturgus",
    "relationship": "teacher_to_student",
    "church": "Caesarea in Palestine / Pontus",
    "relationship_confidence": "high",
    "basis": "Gregory_of_Nyssa_and_early_tradition",
    "description": "Gregory Thaumaturgus studied under Origen and was deeply shaped by his teaching."
  },
  {
    "from": "Dionysius of Alexandria",
    "to": "Peter of Alexandria",
    "relationship": "successor_in_episcopal_see",
    "church": "Alexandria",
    "relationship_confidence": "medium",
    "basis": "Alexandrian_episcopal_succession",
    "description": "Peter succeeded Dionysius as bishop of Alexandria."
  },

  {
    "from": "Justin Martyr",
    "to": "Tatian the Syrian",
    "relationship": "teacher_to_student",
    "church": "Rome",
    "relationship_confidence": "high",
    "basis": "Tatian_personal_testimony",
    "description": "Tatian became a disciple of Justin in Rome."
  },

  {
    "from": "Demetrius of Thessalonica",
    "to": "Nestor of Thessalonica",
    "relationship": "spiritual_father_and_disciple",
    "church": "Thessalonica",
    "relationship_confidence": "medium",
    "basis": "early_hagiographic_tradition",
    "description": "Nestor is traditionally portrayed as receiving spiritual instruction and encouragement from Demetrius before his martyrdom."
  },
  {
    "from": "Constantine the Great",
    "to": "Athanasius of Alexandria",
    "relationship": "imperial_contemporary_and_church_leader",
    "church": "Alexandria / Roman Empire",
    "relationship_confidence": "high",
    "basis": "historical",
    "description": "Athanasius became a major ecclesiastical figure during Constantine's reign and participated in the Nicene controversy."
  },
  {
    "from": "Alexander of Alexandria",
    "to": "Athanasius of Alexandria",
    "relationship": "bishop_and_deacon_mentor",
    "church": "Alexandria",
    "relationship_confidence": "high",
    "basis": "early_church_history",
    "description": "Athanasius served as deacon and secretary to Alexander and succeeded him as bishop of Alexandria."
  },
  {
    "from": "Anthony the Great",
    "to": "Athanasius of Alexandria",
    "relationship": "teacher_to_disciple",
    "church": "Alexandria",
    "relationship_confidence": "high",
    "basis": "early_church_history",
    "description": "Athanasius grew up in the monastic community surrounding Anthony, and later wrote his biography."
  }
];

const relationship_text = {
  "appointed_as_bishop": "appointed as bishop:",
  "successor_of": "succeeded by",
  "missionary_companion": "missionary companion of",
  "teacher_to_student": "teacher of",
  "teacher_to_disciple": "teacher of",
  "spouse": "spouse of",
  "traditional_association": "has a traditional association with:",
  "son_and_mother": "son of",
  "relative": "relative of",
  "apostle_and_disciple": "apostle and disciple:"
};
const relationship_inverse = {
  "appointed_as_bishop": "appointed as bishop by",
  "missionary_companion": "missionary companion of",
  "successor_of": "succeessor of",
  "appointed_or_designated_successor": "appointed by or successor of",
  "teacher_to_disciple": "disciple of",
  "teacher_to_student": "student of",
  "converted": "converted by",
  "spouse": "spouse of",
  "traditional_association": "has a traditional association with:",
  "son_and_mother": "mother of",
  "relative": "relative of",
  "apostle_and_disciple": "apostle and disciple of"
};
