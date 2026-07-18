const relationships = [
  {
    "from": "Peter",
    "to": "Linus",
    "relationship": "appointed_or_designated_successor",
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
    "relationship_confidence": "medium",
    "basis": "early_church_tradition",
    "description": "Evodius is traditionally regarded as Peter's successor as leader or bishop of Antioch."
  },
  {
    "from": "Evodius of Antioch",
    "to": "Ignatius of Antioch",
    "relationship": "successor_of",
    "church": "Antioch",
    "relationship_confidence": "high",
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
    "from": "James the brother of Jesus",
    "to": "Simeon of Jerusalem",
    "relationship": "successor_of",
    "church": "Jerusalem",
    "relationship_confidence": "high",
    "basis": "early_church_tradition",
    "description": "Simeon is traditionally regarded as succeeding James as leader of the Jerusalem church."
  },
  {
    "from": "John",
    "to": "Polycarp of Smyrna",
    "relationship": "disciple_of",
    "church": "Smyrna",
    "relationship_confidence": "high",
    "basis": "Irenaeus_and_early_tradition",
    "description": "Polycarp is traditionally and early-attested as having been instructed by John and other apostles."
  },
  {
    "from": "Polycarp of Smyrna",
    "to": "Irenaeus of Lyons",
    "relationship": "disciple_of",
    "church": "Smyrna / Lyons",
    "relationship_confidence": "high",
    "basis": "Irenaeus_personal_testimony",
    "description": "Irenaeus knew Polycarp personally in his youth and preserved his memories of the apostolic generation."
  },
  {
    "from": "John",
    "to": "Papias of Hierapolis",
    "relationship": "apostolic_association",
    "church": "Asia Minor",
    "relationship_confidence": "medium",
    "basis": "early_church_tradition",
    "description": "Papias is associated with the circle of those who had direct contact with apostles and their disciples, including John."
  },
  {
    "from": "Peter",
    "to": "Mark",
    "relationship": "missionary_companion_and_source",
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
    "relationship": "missionary_companion_and_relative",
    "church": "Cyprus / Eastern Mediterranean",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "Barnabas took Mark with him on missionary work after Mark's separation from Paul's group."
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
    "relationship": "missionary_companion_and_mentored_leader",
    "church": "Ephesus",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "Timothy was Paul's close co-worker and a major leader in the Pauline missionary network."
  },
  {
    "from": "Paul",
    "to": "Titus",
    "relationship": "missionary_companion_and_mentored_leader",
    "church": "Crete",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "Titus was a trusted co-worker of Paul and was entrusted with important church leadership."
  },
  {
    "from": "Paul",
    "to": "Tychicus",
    "relationship": "missionary_companion_and_messenger",
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
    "relationship": "spouse_and_missionary_partner",
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
    "relationship": "convert_and_church_leader",
    "church": "Corinth",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "Crispus was a prominent early convert associated with Paul's ministry in Corinth."
  },
  {
    "from": "Paul",
    "to": "Gaius of Corinth",
    "relationship": "convert_and_host",
    "church": "Corinth",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "Gaius was associated with Paul and provided hospitality to the Christian community."
  },
  {
    "from": "Paul",
    "to": "Dionysius the Areopagite",
    "relationship": "evangelist_and_convert",
    "church": "Athens",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "Dionysius is named in Acts as a convert associated with Paul's preaching in Athens."
  },
  {
    "from": "John",
    "to": "Simeon of Jerusalem",
    "relationship": "apostolic_association",
    "church": "Jerusalem",
    "relationship_confidence": "medium",
    "basis": "early_church_tradition",
    "description": "Simeon belonged to the generation directly connected with the apostolic leadership of the Jerusalem church."
  },
  {
    "from": "Peter",
    "to": "Clement of Rome",
    "relationship": "apostolic_association",
    "church": "Rome",
    "relationship_confidence": "medium",
    "basis": "early_church_tradition",
    "description": "Clement is associated by early tradition with the apostolic generation and the Roman church founded by Peter and Paul."
  },
  {
    "from": "Clement of Rome",
    "to": "Ignatius of Antioch",
    "relationship": "apostolic_father_generation",
    "church": "Rome / Antioch",
    "relationship_confidence": "low",
    "basis": "chronological_and_ecclesiastical_association",
    "description": "Clement and Ignatius belong to the earliest generation of post-apostolic bishops, though a direct personal relationship is not established."
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
    "from": "Polycarp of Smyrna",
    "to": "Irenaeus of Lyons",
    "relationship": "teacher_to_disciple",
    "church": "Smyrna / Lyons",
    "relationship_confidence": "high",
    "basis": "personal_testimony_of_Irenaeus",
    "description": "Irenaeus explicitly remembered hearing Polycarp and the traditions he had received from the apostolic generation."
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
    "from": "Papias of Hierapolis",
    "to": "John",
    "relationship": "apostolic_association",
    "church": "Asia Minor",
    "relationship_confidence": "medium",
    "basis": "Papias_fragments_and_early_tradition",
    "description": "Papias refers to traditions connected with apostolic witnesses and is associated with the Johannine circle."
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
    "to": "Irenaeus of Lyons",
    "relationship": "intellectual_and_apologetic_predecessor",
    "church": "Rome / Lyons",
    "relationship_confidence": "medium",
    "basis": "shared_christian_intellectual_tradition",
    "description": "Justin's apologetic and theological work formed part of the Christian intellectual tradition inherited by later writers such as Irenaeus."
  },

  {
    "from": "Jesus",
    "to": "Peter",
    "relationship": "apostle_and_leading_disciple",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "One of the Twelve and a leading apostolic witness; prominently associated with Jesus during his ministry."
  },
  {
    "from": "Jesus",
    "to": "John",
    "relationship": "apostle_and_leading_disciple",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "One of the Twelve and a member of the inner circle of disciples."
  },
  {
    "from": "Jesus",
    "to": "James the brother of Jesus",
    "relationship": "brother_and_post_resurrection_witness",
    "relationship_confidence": "high",
    "basis": "New_Testament_and_early_tradition",
    "description": "James was a close relative of Jesus and became a leading figure in the Jerusalem church after the Resurrection."
  },
  {
    "from": "Jesus",
    "to": "Paul",
    "relationship": "post_resurrection_appearance_and_apostolic_commission",
    "relationship_confidence": "high",
    "basis": "Pauline_letters_and_Acts",
    "description": "Paul claimed to have encountered the risen Christ and received his apostolic commission from him."
  },
  {
    "from": "Jesus",
    "to": "Matthew",
    "relationship": "apostle_and_disciple",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "One of the Twelve and a disciple called by Jesus during his earthly ministry."
  },
  {
    "from": "Jesus",
    "to": "Andrew",
    "relationship": "apostle_and_disciple",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "One of the Twelve and an early disciple of Jesus."
  },
  {
    "from": "Jesus",
    "to": "Thomas",
    "relationship": "apostle_and_disciple",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "One of the Twelve and a prominent witness to the Resurrection."
  },
  {
    "from": "Jesus",
    "to": "Philip",
    "relationship": "apostle_and_disciple",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "One of the Twelve, called directly by Jesus in the Gospel tradition."
  },
  {
    "from": "Jesus",
    "to": "Bartholomew",
    "relationship": "apostle_and_disciple",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "One of the Twelve."
  },
  {
    "from": "Jesus",
    "to": "James son of Alphaeus",
    "relationship": "apostle_and_disciple",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "One of the Twelve."
  },
  {
    "from": "Jesus",
    "to": "Jude / Thaddeus",
    "relationship": "apostle_and_disciple",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "One of the Twelve, though the identification of the various New Testament figures named Jude or Judas is complex."
  },
  {
    "from": "Jesus",
    "to": "Simon the Zealot",
    "relationship": "apostle_and_disciple",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "One of the Twelve."
  },
  {
    "from": "Jesus",
    "to": "Matthias",
    "relationship": "post_resurrection_apostolic_witness",
    "relationship_confidence": "medium",
    "basis": "Acts_and_early_tradition",
    "description": "A witness to the Resurrection who was later chosen to replace Judas Iscariot among the Twelve."
  },
  {
    "from": "Jesus",
    "to": "Mary the Theotokos",
    "relationship": "son_and_mother",
    "relationship_confidence": "high",
    "basis": "New_Testament_and_early_tradition",
    "description": "Mary was the mother of Jesus and a member of the apostolic community after the Resurrection."
  },
  {
    "from": "Jesus",
    "to": "Barnabas",
    "relationship": "post_resurrection_apostolic_tradition",
    "relationship_confidence": "low",
    "basis": "early_church_tradition",
    "description": "Barnabas was a major missionary of the first Christian generation; a direct personal relationship with Jesus is not securely documented."
  },
  {
    "from": "Jesus",
    "to": "Luke",
    "relationship": "apostolic_generation_association",
    "relationship_confidence": "low",
    "basis": "early_church_tradition",
    "description": "Luke belonged to the generation immediately following the earthly ministry of Jesus and is traditionally associated with the apostolic witnesses."
  },
  {
    "from": "Jesus",
    "to": "Mark",
    "relationship": "apostolic_generation_association",
    "relationship_confidence": "medium",
    "basis": "early_church_tradition",
    "description": "Mark is traditionally associated with the apostolic generation and with the preaching of Peter."
  },
  {
    "from": "Jesus",
    "to": "Linus",
    "relationship": "apostolic_successor_through_Peter",
    "relationship_confidence": "medium",
    "basis": "early_church_tradition",
    "description": "Linus represents the first post-apostolic generation of church leadership traditionally connected to Jesus through Peter."
  },
  {
    "from": "Jesus",
    "to": "Anacletus / Cletus",
    "relationship": "apostolic_successor_through_Peter_and_Linus",
    "relationship_confidence": "medium",
    "basis": "early_church_tradition",
    "description": "Anacletus or Cletus belongs to the early Roman succession traditionally descending from Peter."
  },
  {
    "from": "Jesus",
    "to": "Clement of Rome",
    "relationship": "apostolic_successor_through_Peter_and_Paul",
    "relationship_confidence": "medium",
    "basis": "early_church_tradition",
    "description": "Clement represents the early post-apostolic Roman church and stands close to the apostolic generation."
  },
  {
    "from": "Jesus",
    "to": "Evodius of Antioch",
    "relationship": "apostolic_successor_through_Peter",
    "relationship_confidence": "medium",
    "basis": "early_church_tradition",
    "description": "Evodius is traditionally regarded as an early successor to Peter in the church of Antioch."
  },
  {
    "from": "Jesus",
    "to": "Ignatius of Antioch",
    "relationship": "apostolic_successor_through_Evodius",
    "relationship_confidence": "high",
    "basis": "early_church_tradition",
    "description": "Ignatius represents the second generation of episcopal leadership descending from the apostolic Church."
  },
  {
    "from": "Jesus",
    "to": "Simeon of Jerusalem",
    "relationship": "apostolic_successor_through_James",
    "relationship_confidence": "high",
    "basis": "early_church_tradition",
    "description": "Simeon was traditionally a relative of Jesus and successor to James in the leadership of the Jerusalem church."
  },
  {
    "from": "Jesus",
    "to": "Polycarp of Smyrna",
    "relationship": "apostolic_successor_through_John",
    "relationship_confidence": "high",
    "basis": "Irenaeus_and_early_tradition",
    "description": "Polycarp represents a particularly important chain of living transmission from Jesus through John."
  },
  {
    "from": "Jesus",
    "to": "Papias of Hierapolis",
    "relationship": "apostolic_tradition_bearer",
    "relationship_confidence": "medium",
    "basis": "early_church_tradition",
    "description": "Papias deliberately gathered traditions from people connected to the apostles and their immediate disciples."
  },
  {
    "from": "Jesus",
    "to": "Quadratus of Athens",
    "relationship": "post_apostolic_christian_leader",
    "relationship_confidence": "medium",
    "basis": "early_church_tradition",
    "description": "Quadratus represents the early second-century generation that defended the Christian faith before the wider Roman world."
  },
  {
    "from": "Jesus",
    "to": "Aristides of Athens",
    "relationship": "post_apostolic_christian_leader",
    "relationship_confidence": "medium",
    "basis": "early_church_tradition",
    "description": "Aristides represents the early Christian apologetic tradition emerging from the apostolic Church."
  },
  {
    "from": "Jesus",
    "to": "Hermas",
    "relationship": "post_apostolic_christian_writer",
    "relationship_confidence": "medium",
    "basis": "early_church_tradition",
    "description": "Hermas represents the Roman Christian community of the early second century."
  },
  {
    "from": "Jesus",
    "to": "Justin Martyr",
    "relationship": "post_apostolic_christian_apologist",
    "relationship_confidence": "high",
    "basis": "historical",
    "description": "Justin represents the second-century Christian intellectual and apologetic tradition that developed from the apostolic faith."
  },
  {
    "from": "Jesus",
    "to": "Irenaeus of Lyons",
    "relationship": "apostolic_tradition_bearer_through_Polycarp",
    "relationship_confidence": "high",
    "basis": "Irenaeus_personal_testimony",
    "description": "Irenaeus stands in a documented chain of transmission from the apostolic generation through Polycarp."
  },
  {
    "from": "Jesus",
    "to": "Aquila",
    "relationship": "apostolic_generation_association",
    "relationship_confidence": "medium",
    "basis": "New_Testament",
    "description": "Aquila belonged to the first generation of Christian missionaries and worked closely with Paul."
  },
  {
    "from": "Jesus",
    "to": "Priscilla",
    "relationship": "apostolic_generation_association",
    "relationship_confidence": "medium",
    "basis": "New_Testament",
    "description": "Priscilla was a prominent missionary and teacher in the earliest Christian communities."
  },
  {
    "from": "Jesus",
    "to": "Silas / Silvanus",
    "relationship": "apostolic_generation_association",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "Silas was a major missionary of the earliest Christian generation and a companion of Paul."
  },
  {
    "from": "Jesus",
    "to": "Titus",
    "relationship": "apostolic_generation_association",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "Titus was a trusted co-worker of Paul and a leader in the first generation of Gentile Christianity."
  },
  {
    "from": "Jesus",
    "to": "Timothy",
    "relationship": "apostolic_generation_association",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "Timothy was a close co-worker of Paul and one of the most important leaders of the next generation."
  },
  {
    "from": "Jesus",
    "to": "Tychicus",
    "relationship": "apostolic_generation_association",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "Tychicus was a trusted messenger and co-worker within Paul's missionary network."
  },
  {
    "from": "Jesus",
    "to": "Onesimus",
    "relationship": "apostolic_generation_association",
    "relationship_confidence": "medium",
    "basis": "New_Testament_and_early_tradition",
    "description": "Onesimus was associated with Paul and later tradition connects him with early episcopal leadership."
  },
  {
    "from": "Jesus",
    "to": "Dionysius the Areopagite",
    "relationship": "post_resurrection_convert",
    "relationship_confidence": "high",
    "basis": "New_Testament",
    "description": "Dionysius is named in Acts as a convert through Paul's preaching in Athens."
  },
  {
    "from": "Jesus",
    "to": "Pantaenus",
    "relationship": "apostolic_tradition_bearer",
    "relationship_confidence": "medium",
    "basis": "early_church_tradition",
    "description": "Pantaenus represents the later development of the apostolic teaching tradition in Alexandria and beyond."
  },
  {
    "from": "Jesus",
    "to": "Theophilus of Antioch",
    "relationship": "apostolic_tradition_bearer",
    "relationship_confidence": "high",
    "basis": "historical",
    "description": "Theophilus represents the continuation of the apostolic Christian tradition in the later second century."
  }
];