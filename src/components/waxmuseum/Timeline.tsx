import React, { useEffect, useState } from "react";

import { FaRegDotCircle } from "react-icons/fa";
import { RiArrowDownDoubleFill } from "react-icons/ri";

import vimaladarmasooriya from "../../assets/images/charactors/King1.jpg";
import HiripitiyaRala from "../../assets/images/charactors/hiripitiyaRala.jpg";
import QueenKusumasana from "../../assets/images/charactors/QueenKusumasana2.jpg";
import KingRajasinghe2 from "../../assets/images/charactors/KingRajasinghe2.jpg";
import RobertKnox from "../../assets/images/charactors/RobertKnox.jpg";
import LewkeRala from "../../assets/images/charactors/LewkeRala.jpg";
import PilimatalauwaMahaAdikaram from "../../assets/images/charactors/PilimatalauwaMahaAdikaram.jpg";
import SriVikramaRajasinghe from "../../assets/images/charactors/SriVikramaRajasinghe.jpg";
import QueenVenkathaRangammal from "../../assets/images/charactors/QueenVenkathaRangammal.jpg";
import DevendraMoolachariya from "../../assets/images/charactors/DevendraMoolachariya.jpg";
import SirJohnDOyly from "../../assets/images/charactors/SirJohnD’Oyly.jpg";
import SirRobertBrownrigg from "../../assets/images/charactors/SirRobertBrownrigg.jpg";
import MonarawilaKeppetipolaDisawe from "../../assets/images/charactors/MonarawilaKeppetipolaDisawe.jpg";
import MadugalleUdaGabadaNilame from "../../assets/images/charactors/MadugalleUdaGabadaNilame.jpg";
import EllepolaMahaNilame from "../../assets/images/charactors/EllepolaMahaNilame.jpg";
import KivulegedaraMohottala from "../../assets/images/charactors/KivulegedaraMohottala.jpg";
import EhelepolaMahaAdhikaram from "../../assets/images/charactors/EhelepolaMahaAdhikaram.jpg";
import EhelepolaKumarihami from "../../assets/images/charactors/EhelepolaKumarihami.jpg";
import LokuBandaraEhelepola from "../../assets/images/charactors/LokuBandaraEhelepola.jpg";
import MaddumaBandaraEhelepola from "../../assets/images/charactors/MaddumaBandaraEhelepola.jpg";
import EhelepolaTikiriKumarihami from "../../assets/images/charactors/EhelepolaTikiriKumarihami.jpg";
import ACLawrie from "../../assets/images/charactors/ACLawrie.jpg";
import KapuwatteAdikaram from "../../assets/images/charactors/KapuwatteAdikaram.jpg";
import VenWariyapolaSriSumangala from "../../assets/images/charactors/VenWariyapolaSriSumangala.jpg";

import Noimage from "../../assets/gallery/no-preview.jpeg";

const timelineData = [
  {
    date: "1500 - 1595 CE",
    title: "Ven. Devanagala Mahindalankara Thero",
    description: [
      "Ven. Devanagala Mahindalankara Thero, believed to have been born around 1500 CE was a renowned senior monk during his time. When the Sacred Tooth Relic of the Buddha was housed in Kotte, it came under threat, prompting Hiripitiye Rala, who was then a custodian of the relic to transport it to Sitawaka Kingdom and hand it over to King Mayadunne. Seeking enhanced security for the relic the king entrusted its safekeeping to Ven. Devanagala Mahindalankara Maha Thero who was residing at the Delgamuwa Raja Maha Viharaya. Demonstrating exceptional devotion and foresight the venerable monk concealed the Sacred Tooth Relic within a quern (Kurahan Gala) to ensure its protection. For this act of profound religious and national significance he must be remembered as a historically eminent figure in Sri Lankan history.",

      "He safeguarded the Sacred Tooth Relic at the Delgamuwa Raja Maha Viharaya for a period of 43 years consistently performing the requisite rituals and monastic duties associated with its veneration. Furthermore, he played a vital role in organizing and participating in 11 processions (Peraheras) in collaboration with the king, underscoring his unwavering commitment to the preservation and public reverence of the relic. Among his principal disciples were Ven. Devanagala Rathanalankara Thero (also known as Galagoda Thero) and Ven. Ellepola Mangala Thero, both of whom along with Hiripitiye Rala worked closely with him. Significantly, it was under Ven. Mahindalankara Thero’s guidance that the Sacred Tooth Relic was eventually transferred to the Kingdom of Kandy (Udarata) and ceremonially presented to King Vimaladharmasuriya I, marking a defining moment in Sri Lanka’s religious and political history.",
    ],
    image: Noimage,
  },

  {
    date: "1520 - 1600 CE",
    title: "Hiripitiyē Rala also known as ‘Diva Nilame’",
    description: [
      "Hiripitiyē Ekanayaka Rajapaksha Rajakaruna Mudiyanse, commonly referred to as Hiripitiyē Rala, was the custodian or guardian of the Sacred Tooth Relic during the Kingdom of Kotte, serving as the official entrusted with its protection and veneration at the three-storied Temple of the Tooth. When the last ruler of the Kotte Kingdom, Don Juan Dharmapala, converted to Christianity, concerns arose regarding the safety of the Sacred Tooth Relic. Consequently, a replica of the relic was crafted and placed within the temple, while the actual relic was secretly accompanied to Delgamu Vihara for safekeeping. Under the guidance of Ven. Devanagala Mahindalankara Thero, the relic was concealed within a quern (Kurahan Gala) to ensure its protection.",

      "For around 43 years, Hiripitiyē Rāla performed the sacred service of ritual duties (Thevava) to the Tooth Relic alongside Ven. Mahindalankāra Thero. Following the ascension of King Vimaladharmasuriya I as the ruler of the Kandyan Kingdom, Ven. Devanagala Rathanalankara Thero (Galauda Therun) along with Hiripitiyē Rala, ensured the safe transfer of the relic to Kandy, where it was ceremoniously handed over to the king. Thereafter, the responsibility of the relic's custodianship was entrusted to Ven. Ellepola Mangala Thero by the Sangharaja, Ven. Devanagala Rathanalankara Thero.",

      "Throughout his lifetime, Hiripitiyē Rala demonstrated unparalleled dedication and valor, risking his own life to protect the Sacred Tooth Relic from foreign threats. His unwavering commitment played a pivotal role in securing the relic for the Kandyan Kingdom, earning him a distinguished place in history for his invaluable service to the nation and Buddhism.",
    ],
    image: HiripitiyaRala,
  },

  {
    date: "1594 - 1604 CE",
    title: "King Vimaladharmasuriya I",
    description: [
      "The Kingdom of Kandy, originally initiated by King Senasammatha Vikramabahu, was firmly established by King Vimaladharmasuriya I, who undertook significant measures to safeguard the realm from European colonial powers for over two centuries. Initially under the Portuguese influence, he resisted foreign domination and ascended to the Kandyan throne in 1594 CE,adopting the royal title 'Vimaladharmasuriya In a politically strategic move to legitimize hisclaim to the throne, he married Kusumasana Devi also known as Dona Katharina direct heirof the Karalliyadda royal lineage.",

      "Vimaladharmasuriya I was the son of the nobleman Weerasundara Bandara of the Peradeniyaroyal lineage and fathered six children. One of his most  historically significant contributions was the relocation of the Sacred Tooth Relic of the Buddha from the Delgamuwa Raja Maha Vihara to Kandy. He constructed a two-storied edifice, the Temple of the Tooth Relic (Dalada Maligawa), to enshrine the relic, thereby strengthening both the religious and political legitimacy of his reign.",

      "Furthermore, during a period in which higher ordination (Upasampadā) had lapsed in Sri Lanka, King Vimaladharmasuriya took the initiative to restore it by inviting monks from Burma, thereby re-establishing the Buddhist monastic order. His reign also saw significant economic development through the cultivation of traditional industries such as ironworks and gem mining.",

      "Militarily, he successfully defended the Kandyan Kingdom from Portuguese aggression, notably in the battles of Danture and Balana, thereby preserving the sovereignty of the hill country. His reign was marked by a synthesis of religious revival, military resistance and economic reform. King Vimaladharmasuriya I passed away in the month of May in the year 1604 CE, leaving behind a legacy of resilience, devotion and nation-building.",
    ],
    image: vimaladarmasooriya,
  },

  {
    date: "1580 - 1613 CE",
    title: "Queen Kusumasana Devi",
    description: [
      "The Kingdom of Kandy, originally initiated by King Senasammatha Vikramabahu, was firmly established by King Vimaladharmasuriya I, who undertook significant measures to safeguard the realm from European colonial powers for over two centuries. Initially under the Portuguese influence, he resisted foreign domination and ascended to the Kandyan throne in 1594 CE,adopting the royal title 'Vimaladharmasuriya In a politically strategic move to legitimize hisclaim to the throne, he married Kusumasana Devi also known as Dona Katharina direct heirof the Karalliyadda royal lineage.",

      "At the age of fourteen, she returned to the Kandyan Kingdom and entered into a politically and dynastically significant marriage with King Vimaladharmasuriya I, who had recently ascended the throne. As the legitimate heiress to the Kandyan royal lineage, her marriage served to legally and symbolically consolidate the king's claim to the throne, earning her profound respect and veneration among the Kandyan populace. Despite being raised under Portuguese influence, Queen Kusumasana Devi fulfilled her royal duties with historical consciousness and unwavering allegiance to the Kandyan Kingdom. She notably refused to align herself with the Portuguese cause and instead remained steadfast in her service to the sovereignty and autonomy of her kingdom.",

      "She bore six children with King Wimaladharmasuriya I—among them were daughters Suriya and Sama and sons who later held high-ranking titles such as Rajasinghe Maha Asthane (who died in 1612 CE), Udamale Asthane (who died young), Vijayapala and Prince Kumarasinghe of Uva. Following the death of King Wimaladharmasuriya I, she married his cousin and successor, King Senarath, in January 1606 CE. With Senarath, she had three more children, including the future King Rajasinghe II—known in his youth as Prince Deva Rajasinghe—bringing the total number of her offspring to eight. Throughout her life, Queen Kusumasana Devi displayed a deep commitment to the welfare and independence of the Kandyan Kingdom. Her final days were spent in Valimannathota, Kegalle, where she passed away on the 20th of July, 1613 CE. Her life remains emblematic of resilience, political acumen and unwavering loyalty to her people and heritage.",
    ],
    image: QueenKusumasana,
  },

  {
    date: "1604–1635 CE",
    title: "King Senarat",
    description: [
      "King Senarat initially lived as a Buddhist monk. However, following the death of his cousin King Vimaladharmasuriya I (1590–1604 CE)—the son of his mother’s sister—he renounced monastic life and ascended the throne of the Kandyan Kingdom in 1604 CE. To strengthen his royal claim, he married the late king’s widow, Dona Katherina also known as Kusumasana Devi, who became his chief queen consort. The reign of King Senarat was marked by a series of internal conflicts and external military challenges. A notable military engagement during his rule was the Battle of Randeniwela in 1630 CE, where the Sinhalese army, commanded by Prince Rajasinghe, decisively defeated the Portuguese forces led by Captain-General Constantino de Sá de Noronha.",

      "Beyond his military achievements, King Senarath’s reign saw significant cultural and religious revival within the Kandyan Kingdom. His contributions included the restoration and renovation of major Buddhist temples and the construction of a two-storied shrine in Kandy to enshrine the Sacred Tooth Relic, a vital symbol of legitimate kingship. Towards the end of his reign, King Senarath divided the kingdom among his three sons: Prince Vijayapala, who was assigned Matale; Prince Kumarasinghe, who was given Uva; and Prince Rajasinghe, who ruled Senkadagala. In 1635 CE, Prince Rajasinghe succeeded him as king, reigning as King Rajasinghe II (1635–1687 CE).",
    ],
    image: Noimage,
  },

  {
    date: "1635 – 1687 CE",
    title: "King Rajasinghe II",
    description: [
      "Prince Rajasinghe ascended the throne of the Kandyan Kingdom in 1635 CE having already demonstrated exceptional military acumen during the Battles of Randeniwela and Gannoruwa under the reign of his father, King Senarath. King Rajasinghe II’s reign, spanning fifty-two years, constitutes the longest in Sri Lankan history. He is celebrated as a formidable warrior monarch, having orchestrated a series of decisive military campaigns that culminated in the expulsion of the Portuguese colonial forces from the island.",

      "Notably, during the battles of Randeniwela (1630 CE) and Gannoruwa (1638 CE), his forces inflicted a comprehensive defeat upon the Portuguese troops, including their commanding officers. This resolute leadership earned him veneration among the Kandyan populace, who revered the Rajasinghe kings as “Rasing Deviyo,” attributing to them a semi-divine status and engaging in devotional worship.",

      "A contemporary artistic portrayal of the Battle of Gannoruwa, meticulously rendered on a cabinet door from King Rajasinghe II’s era, exemplifies the cultural and historical significance attributed to these events. Additionally, the Scottish mercenary and author Robert Knox, who resided in Sri Lanka during King Rajasinghe II’s reign, authored the first English-language account of the island, featuring a portrait of the monarch, thereby providing an invaluable visual reference.",

      "Beyond his military and cultural contributions, King Rajasinghe II invested considerable effort in the restoration and renovation of prominent religious institutions, including the revered Temple of the Tooth (Dalada Maligawa). His prolonged and influential reign concluded with his death on November 25, 1687 CE. His remains were interred following cremation at the Asgiri Maha Viharaya, Kandy cremation grounds.",
    ],
    image: KingRajasinghe2,
  },

  {
    date: "1641–1720 CE",
    title: "Robert Knox",
    description: [
      "Robert Knox was born on 8 February 1641 CE in Tower Hill, England. He was the son of Robert Knox (Senior)., a British sea captain. At the age of fourteen, on 7 December 1655 CE, he embarked on his first sea voyage with his father. This expedition proved successful, reaching Bengal and eventually returning to London in 1657 CE. Shortly thereafter, Knox joined another voyage aboard a vessel named Anne, which was bound once again for the Indian subcontinent. However, during the return journey, the ship encountered a violent storm, forcing it to land at the port of Kottiyar in Sri Lanka. On 4 April 1660 CE, Knox and fifteen other crew members were captured by the officials of King Rajasinghe II of the Kandyan Kingdom. He was subsequently held captive in the village of Bandara Koswatta in the region of Sathkorale (modern-day Central Sri Lanka) where he spent 19 years and 6 months in captivity.",

      "During his time in Sri Lanka, Robert Knox integrated into local life to a significant extent. He married and became the father of ten children. Upon escaping the island on 22 September 1679 CE, only two of his children accompanied him, while the others are reported to have remained behind and eventually married into prominent local families.",

      "In 1681 CE, upon returning to England, Knox published his firsthand account titled An Historical Relation of the Island of Ceylon. This work, based on his extensive observations and personal experiences, holds the distinction of being the first English-language book written about Sri Lanka by a European. His narrative provides invaluable insights into the socio-political structure, culture, religious practices, and daily life of 17th-century Sri Lanka, and remains a key source for early modern South Asian studies. Robert Knox passed away on 19 June 1720 CE at the age of 79.",
    ],
    image: RobertKnox,
  },

  {
    date: "1687–1707 CE",
    title: "King Vimaladharmasuriya II",
    description: [
      "Following the death of King Rajasinghe II in 1687 CE, his son—born to a queen of Madurai lineage—ascended the throne of the Kingdom of Kandy under the regnal name King Vimaladharmasuriya II. In contrast to the military-centered reign of his father, his rule was characterized by peace, religious revival and cultural flourishing. One of the major challenges he faced was the management of diplomatic relations with the Dutch, who controlled the island’s coastal regions. Although his father had allied with the Dutch to expel the Portuguese, territorial disputes had later strained that alliance. King Vimaladharmasuriya II undertook efforts to restore cordial relations, pursuing a more peaceful foreign policy with the Dutch.",

      "In keeping with royal tradition, the king demonstrated his personal devotion to Buddhism by undertaking a pilgrimage to Sri Pada (Adam’s Peak). He also played a key role in the restoration of Buddhist institutions, most notably by initiating renovations to the Temple of the Sacred Tooth Relic (Sri Dalada Maligawa). It was during his reign that the present structure of the Temple of the Tooth Relic (Dalada Maligawa) was constructed, and his portrait can still be seen on the lower level walls of the shrine.",

      "In 1693 CE, King Vimaladharmasuriya II dispatched a religious delegation to Rakkhanga (Rakhine in present-day Myanmar) to invite Theravāda monks to reestablish the higher ordination (upasampadā) in Sri Lanka, which had lapsed by that time. Upon his death on June 4, 1707 CE, he was succeeded by his son King Veera Parakrama Narendrasinghe, who reigned from 1707 to 1739 CE.",
    ],
    image: Noimage,
  },

  {
    date: "1707–1739 CE",
    title: " King Sri Veera Parakrama Narendrasinghe",
    description: [
      "Sri Veera Parakrama Narendrasinghe born in 1690 CE to a consort of King Vimaladharmasuriya II from the royal family of Madurai in South India, Sri Veera Parakrama Narendrasinghe ascended the Kandyan throne in 1707 CE at the age of seventeen. He was also known as the Prince of Kundasale. His chief queen, Pramila Devi, was a noblewoman from Madurai, reflecting the continued matrimonial alliances between the Kandyan Kingdom and South Indian royalty.",

      "From his early youth, he was closely associated with Dascon, who would later rise to the powerful position of Chief Minister (Maha Adikaram), playing a pivotal role in royal governance. During this same period, the renowned Ven. Weliwita Saranankara Thero—then a novice monk (Samanera)—was gaining spiritual recognition. He was also a student of Lewke Rala, a noble who was a close associate of the king, exemplifying the intellectual and religious ties between monastic and royal circles.",

      "According to the Mahavamsa (The Great Chronicle), King Narendrasinghe was a deeply pious Buddhist monarch. He conducted elaborate daily offerings to the Sacred Tooth Relic and frequently undertook pilgrimages to revered sites like Mahiyangana and Anuradhapura. The inner chambers of the palace housing the Tooth Relic (Dalada Maligawa) were adorned with murals depicting Jataka tales under his patronage, demonstrating his support for Buddhist art and storytelling. Among his most notable offerings was a gold-plated casket encrusted with 700 precious stones, donated to enshrine the Sacred Tooth Relic.",

      "Sri Veera Parakrama Narendrasinghe passed away on Friday, 13 May 1739 CE, after a reign marked by religious devotion, cultural patronage and relative political stability. Personal artifacts such as his royal shirt, specs and a ceremonial sword are still preserved at the Kundasale Sri Veera Parakrama Narendrasinghe Raja Maha Viharaya, a temple he founded—serving as lasting material testimonies of his enduring legacy.",
    ],
    image: Noimage,
  },

  {
    date: "1739 – 1747 CE",
    title: "King Sri Vijaya Rajasinghe",
    description: [
      "Sri Vijaya Rajasinha ascended the Kandyan throne in 1739 CE following the death of King Sri Veera Parakrama Narendrasinhghe, who left no heirs. As per prevailing tradition, the throne passed to the queen’s brother—Sri Vijaya Rajasinghe, sibling of Queen Pramila Devi. Although of South Indian Nayakkar descent, he was born in Kandy and received his early education under the guidance of the respected monk Walivita Saranankara Thero, acquiring proficiency in both Pali and Sanskrit.",

      "This succession marked a turning point in Kandyan history, signaling the end of the Sinhalese royal lineage and the beginning of the Nayakkar dynasty. The king’s queens hailed from Madurai, and both they and the king actively participated in daily worship at the Temple of the Sacred Tooth Relic (Dalada Maligawa). His reign was marked by deep commitment to the Buddhist tradition and the revitalization of religious institutions.",

      "King Sri Vijaya Rajasinghe conferred the esteemed title of Rajaguru (Royal Preceptor) upon Ven. Walivita Saranankara Thero. In efforts to restore the higher ordination (Upasampadā), which had declined for many years, he dispatched missions to Siam (Thailand) in 1740 CE and Rakkhanga (Rakhine in present-day Myanmar) in 1747 CE. Although these efforts were ultimately unsuccessful, they demonstrated his dedication to restoring monastic discipline and promoting Buddhist education.",

      "Despite political complexities, including Dutch control over island trade and internal factionalism, King Sri Vijaya Rajasinghe maintained stability and reinforced the role of Buddhism in the Kandyan Kingdom. He ruled for eight years and passed away in 1747 CE.",
    ],
    image: Noimage,
  },

  {
    date: "1690 – 1751 CE",
    title: "Lewke Rala",
    description: [
      "Lewke Rara was born around 1690 CE and was a prominent official of the Galboda Korale division within Sathara Korale. Lewke Disava was a close associate of King Sri Veera Parakrama Narendrasinha and also served as the Pali language instructor to the respected novice monk Welivita Saranankara Thero. Distinguished by his commanding physical presence and exceptional mastery of Angampora (The traditional Sri Lankan martial art) Lewke Disava was a multifaceted personality. He was not only an accomplished warrior but also highly learned in Pali, Sanskrit, Sinhala and poetics. Recognized as an outstanding intellectual and orator, he surpassed many of his contemporaries in literary and martial disciplines, earning him a prominent status as a military commander within the Kandyan polity.",

      "In recognition of his loyalty and service, he gifted his personal firearm to King Sri Vijaya Rajasinghe. This weapon was subsequently seized by the Dutch and is now exhibited at the Rijksmuseum in the Netherlands. During the reign of King Kirti Sri Rajasinghe, Lewke Disava served officially as the Dissava (provincial governor) of Sathara Korale. Historical records indicate that he experienced periods of royal disfavor. His son, Lewke Vijayasundara Rajakaruna Herath Senewiratne Mudiyanse, succeeded him and also served as the Dissava of Sathara Korale under King Sri Vikrama Rajasinghe. Like his father, he was highly accomplished in both administrative and martial fields. Portraits and artistic representations of the Lewke Dissavas remain visible today in temples throughout the region, preserving their enduring legacy in the cultural heritage of the Kandyan Kingdom.",
    ],
    image: LewkeRala,
  },

  {
    date: "Demise 1778 CE ",
    title: "Ven. Urulewatte Sri Priyadarsi Dharmasiddhi Maha Nayaka Thero",
    description: [
      "During the Kandyan period, the Buddhist monastic order had once again fallen into decline. To restore its lost glory, King Kirti Sri Rajasinghe reintroduced higher ordination (Upasampada) from Siam (Present day Thailand) in 1753 CE, thereby rejuvenating the Buddhist clergy. Following this revival, King Kirti Sri Rajasinghe formally appointed Ven. Urulewatte Sri Priyadarsi Dharmasiddhi Maha Nayaka Thero as the Mahanayaka (Chief Prelate) of the Asgiri Maha Viharaya, bestowing upon him the prestigious title of Upasangharaja along with an official royal decree (Nila Vijinipatha). Ven. Urulewatte Thero was a principal disciple of Asgiri Gana Detunayaka Golahenwatte Rajaguru Dharmakirti Thero. His ordination took place in the first Seema Malaka (ordination hall) of the Asgiri Maha Vihara, under the guidance of the Siamese Upali Thero, who served as the Upajjhaya (preceptor), while Mahaprajna Thero and Brahmajoti Thero officiated as the Karmacharyas (ritual instructors). This historic event occurred on Sunday, the 8th of August 2296; Buddhist Era. Urulewatte Sri Priyadarsi Dharmasiddhi Thero was a highly erudite scholar, proficient in both Grantha Dhura (scriptural exegesis) and Vidarsana Dhura (meditative practice). His profound knowledge and intellectual prowess earned him great recognition within the monastic community. He continued to serve as the Mahanayaka Thero of the Asgiri Maha Vihara until his demise in the year 1778 CE.",
    ],
    image: Noimage,
  },

  {
    date: "1700 - 1773 CE ",
    title: "Ven. Tibbatuwawe Sri Siddhartha Buddharakkhita Maha Nayaka Thero",
    description: [
      "The Buddhist Order in Sri Lanka has experienced both advancements and declines throughout history. By the mid-18th century CE, the monastic discipline had significantly deteriorated. In response, King Kirti Sri Rajasinghe revived the Buddhist monastic order by reintroducing higher ordination (Upasampada) from Siam (present-day Thailand). Following the establishment of the Siamese Upasampada lineage in 1753 CE, the first Mahanayaka (chief prelate) of the Malwathu Maha Vihara faction was none other than Ven. Tibbatuwawe Sri Siddhartha Buddharakkhita Maha Nayaka Thero. He was one of the five prominent ordained disciples of Ven. Welivita Saranankara Sangharaja Thero and was considered the foremost among them. According to the Mandarampuwata Kawya (Verse), King Kirti Sri Rajasinghe formally conferred upon him the prestigious title of Upasangharaja along with an official royal decree (Nila Vijinipatha). Ven. Tibbatuwawe Sri Siddhartha Buddharakkhita Thero made significant contributions to Buddhist scholarship. He compiled the Sri Saddharmavada Sangrahaya, a treatise on the virtues of the Lord Buddha. Additionally he played a pivotal role in the translation and preservation of Buddhist texts such as the Saddhammopayana, the Sathipatthana Sutta Sannaya and the Siamoupasampadawatha (History of the Siamese Ordination). One of his most distinguished achievements was overseeing the compilation of the Mahavamsa (the Great Chronicle), ensuring its continuity from the Kurunegala period (13th–14th century CE) to the era of King Kirti Sri Rajasinghe in Kandyan Period. The manuscript of the Mahavamsa, written in his own handwriting, has now been recognized as a UNESCO World Heritage document and is preserved in the main library of the University of Peradeniya. After serving as the esteemed Mahanayaka Thero for two decades, he passed away in 1773 CE.",
    ],
    image: Noimage,
  },

  {
    date: "1700 - 1775 CE ",
    title: "Ven. Pravara Upali Maha Thero",
    description: [
      "Ven. Pravara Upali Maha Thero was a distinguished senior monastic leader in a Sangha (Monk) lineage that originated from the Maha Vihara of Anuradhapura in Sri Lanka and later flourished in Siam (Thailand). With the patronage of King Phra Maha Dharmaraja Paramakosa (1733–1759 CE) of Thailand, he led a group of ordained monks to Sri Lanka with the primary objective of re-establishing the Upasampadā (higher ordination) lineage in the country. Arriving in Sri Lanka via Trincomalee, Ven. Pravara Upali Maha Thero played a pivotal role in the formal reestablishment of the Siyam Upasampadā tradition. On the Esala Poya day of the year 1753 CE, within the Visungama Sīmā (the consecrated boundary) of the Malwathu Maha Vihara, he conferred higher ordination upon a group of Sri Lankan monks, including Ven. Welivita Saranankara Thero. This significant event marked the revival of the Siyam Nikaya ordination lineage in Sri Lanka under his leadership. Ven. Pravara Upali Maha Thero passed away in February 1775 CE within the Uposatha Hall of the Malwathu Vihara, leaving behind an enduring legacy in the history of Sri Lankan Buddhism.",
    ],
    image: Noimage,
  },

  {
    date: "1698 - 1760 CE ",
    title: "Ven. Wälivita Sri Saranankara Sangharaja Thero",
    description: [
      "Wälivita Sri Saranankara Sangharaja Thero was born on June 18, 1698 CE, in the village of Wälivita, Tumpane, in the Kingdom of Kandy, as the son of Kulatunga Mudali. He was given the name Kulatunga Bandara at birth. In 1714 CE, he received ordination as a sāmaṇera (novice monk) at Suriyagoda Raja Maha Vihara under the guidance of Suriyagoda Rajasundara Gnaninansé. During a time when the Buddhist monastic tradition in Sri Lanka was in decline, Wälivita Saranankara Thero took the initiative to restore its former glory. He founded an organization known as the Silvath Samagama (Order of the Virtuous), dedicated to reviving the ancient monastic customs and disciplinary practices. Recognizing the absence of a proper higher ordination lineage (upasampadā), he made two attempts to reestablish it during the reign of King Sri Vijaya Rajasinghe. However, it was under the patronage of King Kirti Sri Rajasinghe that a delegation was finally dispatched to Thailand (then known as Siam) to bring back properly ordained monks. In 1753 CE, this effort culminated in the reestablishment of the Bhikkhu Saṅgha (monk) in Sri Lanka, with Wälivita Saranankara Thero played a leading role in this significant revival.",

      "Apart from his monastic and administrative contributions, Välivita Saranankara Thero was a distinguished scholar and prolific writer. His works include Muniguna Alankāra, Sārārtha Saṅgrahaya, Abhisambodhi Alankāra, Madhurārtha Prakāsanīya, Rūpamālā and Bhēsajja Manjusā Sannaya. His literary and doctrinal contributions greatly enriched Buddhist studies and helped revive the study of Dhamma and Vinaya (doctrine and monastic discipline) in Sri Lanka. Furthermore, he took an active role in establishing and restoring numerous Buddhist monasteries and temples across the island. In recognition of his exceptional service to the Buddhist monastic tradition, King Kirti Sri Rajasinghe officially conferred upon him the title of Sangharaja (Supreme Patriarch of the Buddhist Order) in 1760 CE. After dedicating his life to the restoration and advancement of Buddhism in Sri Lanka, Wälivita Sri Saranankara Sangharaja Thero passed away on July 18, 1778 CE, at the Malwathu Maha Vihara. It is said that in his final moments, he listened to a sermon (āsanna bana) delivered by Ven. Kamburupitiye Gunaratana Thero, remaining fully conscious and composed as he peacefully passed away. ",
    ],
    image: Noimage,
  },

  {
    date: "1747- 178CE ",
    title: "King Kirthi Sri Rajasinghe",
    description: [
      "Kirti Sri Rajasinghe, who ascended the Kandyan throne at the age of sixteen, was the younger brother of the second queen of King Sri Vijaya Rajasinghe, the inaugural ruler of the Nayakkar dynasty. He is widely credited with the revival and preservation of the Buddhist monastic order, the procession (Dalada Perahera) and numerous sacred religious sites throughout the island.",

      "Having arrived in Sri Lanka at a young age, he deeply studied Buddhism and became proficient in Sinhala, Pali and Sanskrit, making him an enlightened and scholarly monarch. One of his most profound religious contributions was the re-establishment of the Siyam Upasampadā (higher ordination lineage) under the guidance of the eminent Ven. Weliwita Saranankara Thero.",

      "During his reign, he formally institutionalized key ecclesiastical appointments: Ven. Weliwita Saranankara Thero was elevated to the rank of Sangharaja (Supreme Patriarch), Tibbotuwawe Buddharakkhita Thero was appointed Upasangharaja (Deputy Patriarch), and Urulewatte Dhammavisuddhi Thera became the inaugural Mahanayaka of the Asgiriya Chapter.",

      "His contributions to Buddhist literature included the printing of a large corpus of sacred texts and a major initiative to update and preserve the Mahavamsa, the Great Chronicle of Sri Lanka. Architecturally, his patronage led to the restoration and reaffirmation of many religious sites such as Lewella Gangarama, Kundasale Raja Maha Vihara, Rangiri Dambulla, Sri Pada, Madawala, Maddepola, Ridivihara, Suduhumpola, Nittawela Suriyagoda, Lankatilaka, Dalukgolla and Galmaduwa temples.",

      "Among his significant religious acts was the offering of a gem-encrusted reliquary to the Sacred Tooth Relic. He also reformed the traditional Perahera—which had previously been confined to the four guardian devalayas—by inaugurating the Esala Dalada Perahera centered around the Tooth Relic.",

      "King Kirti Sri Rajasinha vigorously defended the Kandyan Kingdom from Dutch aggression and remained committed to religious merit-making until his death in 1782 CE. A statue believed to be sculpted during his lifetime remains enshrined at the Dambulla Viharaya, symbolizing his enduring legacy.",
    ],
    image: Noimage,
  },

  {
    date: "1782–1798 CE ",
    title: "King Rajadhi Rajasinghe",
    description: [
      "King Sri Rajadhi Rajasinghe ascended the throne of Kandy in 1782 CE, following his brother King Kirti Sri Rajasinghe. A learned scholar of Pali and Sanskrit, he ruled for sixteen years, during which he promoted diplomacy, religious patronage, and cultural expression. Soon after his accession, British envoy Hugh Boyd visited Kandy to propose an alliance against the Dutch, which the king tactfully declined. Throughout his reign, Rajadhi Rajasinghe maintained peaceful relations with the Dutch and governed with political balance.",

      "As a devout patron of Buddhism, the king restored several temples, donated land to the Sangha, and oversaw the completion of the Degaldoruwa Royal Temple. He famously illuminated the Temple of the Sacred Tooth Relic with fifty thousand oil lamps and commissioned a Buddha statue modeled after his own form, symbolizing personal spiritual aspiration. King Rajadhi Rajasinha passed away on 26 July 1798 CE. With no designated heir, a succession crisis followed, leading to the enthronement of Prince Kannasamy as King Sri Wickrama Rajasinha. A rare painting of Rajadhi Rajasinha and his brother is preserved at Babarakanda Rajamaha Vihara.",
    ],
    image: Noimage,
  },

  {
    date: "Demise in 26th August 1811 CE ",
    title: "Pilimatalauwa Maha Adikaram",
    description: [
      "Pilimatalauwa Maha Adikaram was the third son of a distinguished noble family that held considerable influence within the Kingdom of Kandy. This family faithfully served fewer than four successive Kandyan monarchs: Sri Vijaya Rajasinghe (1739–1747 CE), Kirti Sri Rajasinghe (1747–1782 CE), Rajadhi Rajasinghe (1782–1798 CE) and Sri Vikrama Rajasinghe (1798–1815 CE). Renowned as a highly capable administrator and a dominant figure in the royal court, Pilimatalauwa Maha Adikaram was equally noted for his strong political ambitions, particularly his desire to claim sovereignty.",

      "In 1787 CE, he was appointed Second Adikaram (Deputy Chief Minister) and by 1790 CE, King Rajadhi Rajasinghe elevated him to the position of Maha Adikaram (Chief Minister). Upon the death of King Rajadhi Rajasinha, Pilimatalauwa exerted his considerable influence to place an eighteen-year-old prince: Kannasamy, on the throne in 1798 CE. This prince was subsequently crowned Sri Vikrama Rajasinha who would become the last monarch of the Kandyan Kingdom.",

      "During the reign of King Kirti Sri Rajasinghe, following the Dutch invasion and destruction of the sacred Temple of the Tooth Relic (Dalada Maligawa) in 1765 CE, Pilimatalauwa Nilame supervised the reconstruction of the temple’s inner sanctuary, fulfilling royal directives to restore this vital religious site.",

      "Despite his earlier loyalty and service, Pilimatalauwa Maha Adikaram later orchestrated several unsuccessful plots to assassinate King Sri Vikrama Rajasinghe. These conspiracies led to his conviction for high treason. On August 26, 1811 CE, Pilimatalauwa, along with his fellow conspirators, was publicly executed at the execution grounds in the presence of the king and his trusted officials. His legacy endures in the form of a well-preserved portrait displayed at the Wijesundararamaya Temple in Kandy.",
    ],
    image: PilimatalauwaMahaAdikaram,
  },

  {
    date: "1798 – 1815 CE ",
    title: "King Sri Vikrama Rajasinghe",
    description: [
      "Sri Vikrama Rajasinghe, the last king of Sri Lanka ruled the Kingdom of Kandy from 1798 CE to 1815 CE. He was born in January 1780 CE and ascended to the throne in 1798 CE. Before becoming king, he was known as Prince Kannasamy and was the son of the second queen of the preceding monarch of King Rajadhi Rajasinghe. The noble chiefs of Kandy appointed him as the new ruler and he was consecrated as Sri Vikrama Rajasinghe infront of the sacred Natha Devale at Kandy.",

      "The king had two queens with Venkatha Rangammal also known as Venkatha Rangajammal serving as the chief queen while her younger sister, Venkatha Jammal was the second queen. A renowned painting of the king and his consort created in 1800 CE by an English artist named Daniel remains preserved to this day providing a rare glimpse into their living likenesses.",

      "Before his accession to the throne Sri Vikrama Rajasinghe’s spiritual mentor was the revered Ven. Morathota Dhammakkanda Thero under whose guidance he became a devout and learned Buddhist ruler. His deep religious devotion was evident in his daily offerings to the Sacred Tooth Relic and his unwavering reverence for the Buddhist monastic order. He undertook the construction of numerous temples and monasteries significantly contributing to the preservation and development of Buddhism in the country.",

      "Between 1803 and 1804 CE, Sri Vikrama Rajasinghe successfully repelled the military forces of the British Empire which was renowned as The empire on which the sun never sets. He defended the Kandyan Kingdom until 1815 CE, earning recognition not only as a monarch but also as a national hero. The city of Kandy, now designated as a UNESCO World Heritage Site, owes much of its aesthetic grandeur to his contributions, particularly the construction of the picturesque Kandy Lake and the addition of the Pattiruppuwa (Octagonal Pavilion) to the Temple of the Tooth Relic. These remarkable architectural feats stand as enduring testaments to his artistic and cultural legacy.",

      "However, due to the strategic machinations of the British and the betrayals within his own ministerial council, Sri Vikrama Rajasinha was ultimately dethroned. On January 24, 1816 CE, he was exiled to Vellore, India. While in exile, he had two children and endured 17 years of captivity before passing away on January 30, 1832 CE, at the age of 52. Even today, the graves of the king and queen in Vellore are respected and visited by the public as a mark of honor.",
    ],
    image: SriVikramaRajasinghe,
  },

  {
    date: "From 1782 - CE ",
    title: " Queen Venkatha Rangammal",
    description: [
      "Venkatha Rangammal, a queen belonging to the Madurai royal lineage of South India, was born around 1782 CE. At the age of sixteen, in 1798 CE, she was married to Sri Vikrama Rajasinghe, the last king of the Kandyan Kingdom and Sri Lanka. Queen Rangammal was known for her deep devotion to religion and was regarded as a virtuous woman. She resided within the royal palace along with her younger sister, who became the king’s second queen. A portrait of Queen Rangammal, painted in 1800 CE by William De Daniell, provides a visual representation of her appearance. Another painting depicting her alongside the king further corroborates her likeness, allowing for an accurate identification of her image. Following the British annexation of the Kandyan Kingdom in 1815 CE, both queens were captured along with King Sri Vikrama Rajasinghe. The final attire worn by Queen Rangammal is presently preserved in the Colombo National Museum. On January 24, 1816 CE, the king was exiled to Vellore aboard the ship named “Cornwallis” and Queen Rangammal was exiled along with him. She was ultimately laid to rest at the same site where Sri Vikrama Rajasinha was buried and their tombs in Vellore continue to be honored by the public to this day.",
    ],
    image: QueenVenkathaRangammal,
  },

  {
    date: "Demise: Circa 1815 CE. ",
    title: "Devendra Moolachariya",
    description: [
      "Devendra Moolachariya was a distinguished architect who served during the reigns of Kings Rajadhi Rajasinghe and Sri Vikrama Rajasinghe, between 1782 and 1815 CE. His exceptional craftsmanship played a pivotal role in articulating the unique cultural and political identity of the Kandyan Kingdom through architecture. The title “Moolachariya” was a highly prestigious designation among artisans, granted only to those who had mastered at least five specialized crafts and demonstrated profound expertise in their fields.",

      "Devendra Moolacharya was regularly engaged in royal service at the Kandyan court and resided with his wife and two daughters in the village of Arattana, in the region of Udunuwara. He was entrusted with the monumental task of reconstructing and redesigning the physical landscape of the Kandyan capital. His principal duty involved envisioning and constructing the royal palace and its surroundings to emulate the celestial abode of Śakra Devendra (God Shakra), the king of the gods—thus symbolizing the divine authority of the monarch.",

      "Under the visionary patronage of King Sri Vikrama Rajasinghe, Moolachariya undertook the redesign of the Temple of the Sacred Tooth Relic (Sri Dalada Maligawa), along with key structures such as the Magul Maduwa (Royal Court), the Paththirippuwa (Octagonal Pavilion), the Ulpengeya (Spring Pavilion), the Valākulu Bamma (Cloud Wall) and the various hydraulic features surrounding the temple complex. These included the Kandy Lake—also known as Kiri Muhuda (Kandy Lake)—and the island at its center, which houses the secret summer palace (Grīsma Māligāwa).",

      "Many new architectural elements added to the Dalada Maligawa complex emerged from Moolacharya’s innovative vision. Among his most iconic contributions was the Paththirippuwa, a globally renowned octagonal structure. Its initial design was conceptualized on banana apparent trank under the guidance of Dehigama Dīyavadana Nilame, the royal official in charge of religious affairs. Upon royal approval, the task was officially assigned to Devendra Moolachariya.",

      "In recognition of his loyal and exemplary service, King Sri Vikrama Rajasinghe granted him the rare privilege of wearing the white Thuppottiya (A ceremonial garment traditionally reserved for the nobility) during official state occasions. This extraordinary gesture reflected the king’s deep respect and admiration for Moolachariya’s invaluable contributions to the architectural and cultural legacy of the Kandyan Kingdom.",
    ],
    image: DevendraMoolachariya,
  },

  {
    date: "1774 - 1824 CE. ",
    title: "Sir John D’Oyly",
    description: [
      "Sir John D’Oyly served as the first British Resident Administrator of the Kandyan region from 1815 to 1824 CE. He was born on June 11, 1774 CE, in England as the second son of Archdeacon Mathias D’Oyly. He received his early education at Westminster School in London and later graduated from the University of Cambridge. In 1801 CE, he joined the Ceylon Civil Service. His first appointment was as the Second Assistant in the Colombo Provincial Court. In 1803 CE, he was promoted to the position of President of the Matara Provincial Court.",

      "During his service in Matara, he studied Buddhism and the Sinhala language under the guidance of the Vev. Koratota Dhammarama Thero. Owing to his language proficiency and dedicated service, he was later appointed as the Chief Government Translator and the Revenue Collector for the Colombo District.",

      "One of D’Oyly’s official responsibilities was to engage in secret negotiations with the Kandyan Kingdom. He organized a covert intelligence network and played a central role as the chief strategist in bringing the Kandyan Kingdom under British rule. It was he who drafted the Kandyan Convention of 1815 CE.",

      "Sir John D’Oyly was appointed as the ‘Resident’; the highest-ranking British administrative officer in the Kandyan region. His official diary and notes on the governance of the Kandyan Kingdom, which were later published; are considered primary and valuable sources for the history of that period",

      "He earned the trust of the Kandyan people and made every effort to ease their discontent under British imperial rule. When he passed away unexpectedly from a fever on May 25, 1824 CE, in Kandy, he was 49 years old and unmarried. His grave can be seen in the cemetery located behind the Temple of the Sacred Tooth Relic (Dalada Maligawa).",
    ],
    image: SirJohnDOyly,
  },

  {
    date: "1758  - 1833  CE. ",
    title: " Sir Robert Brownrigg",
    description: [
      "Sir Robert Brownrigg was the British Governor of Ceylon at the time when the Kandyan Kingdom was annexed to the British Crown. As the Conqueror of Kandy, he was granted the honor by King George III to bear the emblems of the Kandyan monarchy—the crown, scepter, and royal banner—on his official coat of arms. He was born on February 08, 1758 CE, in County Wicklow, Ireland, as the second son of Henry Brownrigg. In 1775 CE, he was commissioned as an ensign in the 14th Regiment and served in America. A protégé of the Duke of York, Brownrigg was appointed his military secretary in 1795 CE. He rose through the ranks and was promoted to Lieutenant General, later serving as Quartermaster General during the Walcheren Expedition in 1809 CE.",

      "Although he possessed significant military experience, Brownrigg had no prior exposure to civil administration when he was appointed Governor of Ceylon in 1812 CE. Driven by a desire for military glory, he played a leading role in the annexation of the Kandyan Kingdom in 1815 CE. In recognition of this achievement, he was knighted that same year.",

      "However, his brutal suppression of the Kandyan Uprising in 1818 CE has left an indelible black mark on the legacy of British colonial rule in Sri Lanka. After retiring from the governorship in 1820 CE, he returned to England. In 1823 CE, he was appointed Governor of Landguard Fort in Suffolk, a position he held until his death in 1833 CE at Helston.",
    ],
    image: SirRobertBrownrigg,
  },

  {
    date: "1880 - 1818 CE. ",
    title: "  Monarawila Keppetipola Disawe",
    description: [
      "Monarawila Rajapakse Wickramasekara Bandaranayake Keppetipola served as the Disawe (provincial governor) of Uva region under King Sri Vikrama Rajasinghe. He was born between 1880 CE and 1882 CE. His father, Keppetipola Golahale Nilame, was a prominent official, while his mother was Monarawila Kumarihamy. Ehelopola Maha Nilame’s wife was his sister and his own wife was Delwala Ethana Kumarihamy. He had two sons named Keppetipola Loku Banda and Kalu Banda. At the time of Keppetipola Disawe’s execution in 1818 CE, his elder son was only nine years old, while the younger was six years. He met his tragic end at the hands of British colonial rulers, being beheaded on November 26, 1818 CE, at the young age of approximately 36 or 37 Years. His execution was a consequence of leading the 1818 CE Uva-Wellassa rebellion against British rule. Today, Sri Lankans revere and remember him as a national hero who courageously sacrificed his life for his homeland. His skull has been preserved and honored as a tribute to his valiant service and unwavering patriotism.",
    ],
    image: MonarawilaKeppetipolaDisawe,
  },

  {
    date: "1765 - 1818 CE. ",
    title: "Madugalle Uda Gabada Nilame",
    description: [
      "Madugalle Karunatilaka Jayasundara Weerasekara Rajapaksha Wahalanayake Nisi Mudiyanse, also known as Madugalle Nilame, served as the Uda Gabada Nilame who was the treasurer responsible for the private warehouse of King Sri Vikrama Rajasinghe. It is believed that he was born in either 1765 CE or 1766 CE. His mother was Peradeniya Walawwe Alaththiye Muppu  Nilame Mahathmayo (There is also a scholarly opinion that identifies her as Rambukwelle Kumarihami.) and his father was Wannaku Nilame. Madugalle Nilame was married to Halangoda Kumarihamy, the daughter of the Disawa of Nuwarakalaviya and was the father of four children: Lokubandara, Madugalle Bandara, Madduma Bandara and Tikiri Bandara.",

      "At the age of 53, Madugalle Nilame became involved in the 1818 CE rebellion against British colonial rule. He was captured and convicted of treason. Consequently, on November 26, 1818 CE, he was executed by beheading at Bogambara. During the execution, Keppetipola Nilame was beheaded first, followed by Madugalle Nilame. The severed heads of both leaders were initially preserved at the Kandy Hospital and later taken to England. Madugalle Nilame is remembered as a valiant warrior who sacrificed his life for his motherland, securing an indelible place in Sri Lankan history.",
    ],
    image: MadugalleUdaGabadaNilame,
  },

  {
    date: "1745  - 1818 CE. ",
    title: "Ellepola Maha Nilame",
    description: [
      "Kahanda Mahanthe Navaratne Wickramasinghe Mudiyanse, also known as Kahanda Dissawa, is most famously recognized as Ellepola Maha Nilame. He was born between 1745 – 1750 CE and he served as the Chief Secretary to King Sri Vikrama Rajasinghe. In addition to this prestigious role, he held several influential positions within the Kandyan Kingdom, including Dissawa (Provincial governor) of Thun Korale and Matale-Godapola, as well as the post of Diva Nilame or Diyawadana Nilame of the Temple of the Tooth Relic in Kandy.",

      "Furthermore, in 1814 CE, he was appointed as the Second Adikaram (second-in-command) of the Kandyan Kingdom, a position he attained due to his long and devoted service to the Kandyan Kingdom. Over the years, he held numerous other significant offices and in 1817 CE was designated as the Basnayake Nilame (Chief Custodian) of the Natha Devale at Kandy under British rule. However from the very beginning he harbored deep resentment towards British colonial rule. On February 20, 1818 CE. he resigned from all his official positions under the British administration and joined the resistance movement against colonial rule.",

      "During the Uva-Wellassa Rebellion, on October 6, 1818 CE, he was captured along with his wife and his brother called Kasare Bandara. Though he was sentenced to death by hanging by the British military tribunal, he requested to be executed in accordance with the traditional laws of his homeland which dictated beheading instead of hanging. He also expressed his regret for failing to liberate his country from British rule and fulfill his duty to his nation. As a final act of defiance, he requested that after his beheading, his body be dismembered and fed to the dogs and Crows. His request was granted by the tribunal and on the morning of October 27, 1818 CE, at 8:00 AM he was beheaded. His final wish was that courageous warriors like him would continue to be born on Sri Lankan Motherland forever.",
    ],
    image: EllepolaMahaNilame,
  },

  {
    date: "1745  - 1818 CE. ",
    title: "Ellepola Maha Nilame",
    description: [
      "Kahanda Mahanthe Navaratne Wickramasinghe Mudiyanse, also known as Kahanda Dissawa, is most famously recognized as Ellepola Maha Nilame. He was born between 1745 – 1750 CE and he served as the Chief Secretary to King Sri Vikrama Rajasinghe. In addition to this prestigious role, he held several influential positions within the Kandyan Kingdom, including Dissawa (Provincial governor) of Thun Korale and Matale-Godapola, as well as the post of Diva Nilame or Diyawadana Nilame of the Temple of the Tooth Relic in Kandy.",

      "Furthermore, in 1814 CE, he was appointed as the Second Adikaram (second-in-command) of the Kandyan Kingdom, a position he attained due to his long and devoted service to the Kandyan Kingdom. Over the years, he held numerous other significant offices and in 1817 CE was designated as the Basnayake Nilame (Chief Custodian) of the Natha Devale at Kandy under British rule. However from the very beginning he harbored deep resentment towards British colonial rule. On February 20, 1818 CE. he resigned from all his official positions under the British administration and joined the resistance movement against colonial rule.",

      "During the Uva-Wellassa Rebellion, on October 6, 1818 CE, he was captured along with his wife and his brother called Kasare Bandara. Though he was sentenced to death by hanging by the British military tribunal, he requested to be executed in accordance with the traditional laws of his homeland which dictated beheading instead of hanging. He also expressed his regret for failing to liberate his country from British rule and fulfill his duty to his nation. As a final act of defiance, he requested that after his beheading, his body be dismembered and fed to the dogs and Crows. His request was granted by the tribunal and on the morning of October 27, 1818 CE, at 8:00 AM he was beheaded. His final wish was that courageous warriors like him would continue to be born on Sri Lankan Motherland forever.",
    ],
    image: EllepolaMahaNilame,
  },

  {
    date: "1770 - 1818 CE. ",
    title: "  Kivulegedara Mohottala",
    description: [
      "Kivulegedara Mohottala Born between 1770 CE and 1775 CE in the village of Kivulegedara in the Badulla district, Kivulegedara Mohottala emerged as a prominent leader in the Uva–Wellassa Rebellion of 1818 CE against British colonial rule. Hailing from a respected and well-established family in the region, he was known for his courage and patriotic commitment from an early age. He gained a reputation as a loyalist to the Kandyan king and as a fervent advocate for national sovereignty and independence. Due to his early and active resistance against the British, colonial authorities—including figures such as Agent John D’Oyly and even the Governor—began closely monitoring his activities as early as 1816 CE. He was arrested in 1817 CE; however, records indicate that he successfully escaped from custody within the same year.",

      "Subsequently, he played a significant role in orchestrating and leading the Uva–Wellassa uprising aimed at reclaiming the country's independence. His efforts were ultimately thwarted when he was captured by the British and sentenced to death. He was executed on December 18, 1818 CE. Despite his death, he became venerated among local communities and was deified as Punchi Aluth Bandara Deviyan, a local guardian deity symbolizing resistance and national pride.",
    ],
    image: KivulegedaraMohottala,
  },

  {
    date: "1773 - 1829 CE. ",
    title: "Ehelepola Maha Adhikaram",
    description: [
      "Ehelepola Wijesundara Chandrasekara Amarakone Wahala Mudiyanse also known as Ehelepola Maha Adhikaram was a prominent and influential figure during the final phase of the Kandyan Kingdom. He was born in 1762 CE in the village of Ehelepola in the Matale District. His father held the position of Padikara Nilame, and his mother was known as Kosinne Kumarihami. Between 1808 CE and 1811 CE, he served as the Second Adhikaram (Minister) of the Kandyan Kingdom and was subsequently appointed as the First Adikaram or Maha Adhikaram (Chief Minister) in 1811 CE, following Pilimatalawe Maha Adhikaram.",

      "Ehelepola's wife was Ehelepola Kumarihami and she was the sister of Keppetipola Nilame, who later led the Uva-Wellassa Rebellion. Ehelepola had four children. In the wake of political tensions and fractures between the aristocracy and the monarchy, including figures such as Molligoda Nilame, he was accused of high treason against the state. Fleeing to the British, Ehelepola left his family behind in Kandy. Consequently, his wife and children, who remained at the Ehelepola Walawwa in Kandy, were executed under charges of treason.",

      "This tragic incident was widely condemned in the Kandyan Kingdom and was strategically exploited by the British to facilitate their conquest of the kingdom. Although King Sri Vikrama Rajasinha opposed the decision made by the royal council to execute the family, and attempted to prevent it, the council's authority prevailed, and the execution was carried out.",

      "Ehelepola, despite sacrificing his family for his personal political aspirations, did not realize his ambition of ascending to the throne with British support. After the failure of the 1818 CE Uva Rebellion, the British exiled him to Mauritius, where he died in 5th April 1829 CE.",
    ],
    image: EhelepolaMahaAdhikaram,
  },

  {
    date: "1782 - 1814 CE. ",
    title: "Ehelepola Kumaríhamí",
    description: [
      "Ehelepola Kumaríhamí was a noble and renowned woman of exceptional beauty who lived during the Kandyan Kingdom era. She is remembered in Sri Lankan history as a tragic figure whose fate was marked by profound sorrow. She was the only daughter of Golahela Nilame and Monarawila Kumaríhamí of the village Monaravila in the Udasiya Pattuwa of Udugoda, North Matale.",

      "Her familial ties placed her at the heart of Udarata aristocracy: she was the sister of Monarawila Keppetipola Nilame, the chief leader of the Uva-Wellassa Rebellion of 1818 CE and the wife of Ehelepola Maha Adhikaram, a high-ranking official who served under King Sri Vickrama Rajasinghe. She had four children; two sons and two daughters.",

      "The downfall of her family was precipitated by her husband’s betrayal of the king through his secret negotiations with the British. As a result of this perceived treason, the royal court, with the king’s assent, ordered the execution of Kumaríhamí and her children. This event has often been cited as a deeply tragic episode in the historical narrative of the Kandyan Kingdom.",

      "British accounts and contemporary dissenting writers later highlighted this incident to portray King Sri Vickrama Rajasinghe as a cruel and tyrannical ruler. However, historical analysis reveals that the king’s actions were primarily driven by the decisions of the royal council in response to perceived acts of treachery during a period of political instability. Despite various interpretations, the undeniable historical fact remains that in May 1814 CE, Ehelepola Kumaríhamí was executed by being drowned in a lake—an event etched into Sri Lanka’s history as a symbol of monarchical justice intertwined with tragedy.",
    ],
    image: EhelepolaKumarihami,
  },

  {
    date: "1803 - 1814 CE. ",
    title: "Loku Bandara Ehelepola",
    description: [
      "Loku Bandara, the eldest son of Kumarihami and Maha Adhikaram of Ehelepola, was born in 1803 CE and was the firstborn child in the family. Due to his father’s strained relationship with King Sri Vikrama Rajasinghe of the Kandyan Kingdom, compounded by his alignment with the British against the monarch, the family was charged with treason. As a consequence, Loku Bandara and his family were subjected to severe punishment. During this period, Madduma Bandara, Loku Bandara’s younger brother, who was only nine years old, was executed first. Subsequently, Loku Bandara, who was eleven years old at the time, was sacrificed his life for his father and he too became a martyr of the nation.",
    ],
    image: LokuBandaraEhelepola,
  },

  {
    date: "1805 - 1814 CE. ",
    title: "Madduma Bandara Ehelepola",
    description: [
      "Madduma Bandara Ehelepola, revered in Sri Lankan historiography as a national hero, was born in 1805 at the Ehelepola Walawwa in Kandy. He was the son of Ehelepola Maha Adikaram and Ehelepola Kumarihami. He had one elder brother and two sisters. His father’s political conflict with King Sri Vikrama Rajasinghe, particularly his alliance with the British and subsequent charge of high treason, resulted in severe consequences for his entire family. As a punitive measure, the king ordered the execution of Ehelepola’s wife and children.",

      "At the time of his death in 1814 CE , Madduma Bandara was only nine years old. His courage in the face of imminent death, especially his fearless declaration—“Brother, do not be afraid. I will show you how to die”.—made him a symbol of youthful bravery and patriotism. While his elder brother faltered in fear, Madduma Bandara’s unwavering resolve in the moments before his execution immortalized him as a heroic figure not only in the history of the Kandyan Kingdom but in the broader narrative of Sri Lankan national identity. His sacrifice, offered in the name of loyalty and familial duty, has since been enshrined as a defining example of courage for future generations",
    ],
    image: MaddumaBandaraEhelepola,
  },

  {
    date: "1808 - 1814 CE. ",
    title: " Ehelepola Tikiri Kumarihami",
    description: [
      "Tikiri Kumarihami, the third child of Ehelepola Maha Adhikaram and Ehelepola Kumarihami, was born in 1808 CE. She was the beloved younger sister of Lokubandara and Maddumabandara. Following the accusation of her father, Ehelepola Maha Adhikaram, of high treason against the Kandyan monarchy, six-year-old Tikiri Kumarihami was executed as a form of retributive punishment, symbolizing the collective penalty imposed on the family.",

      "As there was no historical precedent or legal custom within Kandyan law or Sri Lankan tradition for executing female children by beheading, Tikiri Kumarihami was subjected to a different and equally brutal method of execution—she was bound with stones and drowned in a lake. Her death remains one of the most tragic episodes in Sri Lankan history, reflecting the harsh realities of political retribution during the final years of the Kandyan Kingdom.",
    ],
    image: EhelepolaTikiriKumarihami,
  },

  {
    date: "1837 - 1914 CE. ",
    title: "Justice A. C. Lawrie",
    description: [
      "Archibald Campbell Lawrie, widely known as A. C. Lawrie, is renowned for compiling one of the most significant primary historical sources on the history of the Kandy: The Gazetteer of the Central Province. This seminal work has earned him considerable recognition in the field of Sri Lankan historiography. Lawrie gathered much of the material for this publication during his tenure as District Judge of Kandy, a position he intermittently held between 1873 CE and 1899 CE.",

      "Lawrie was born on September 8, 1837 CE, in Glasgow, Scotland. His father, Dr. J. A. Lawrie, was both a practicing physician and a professor at the University of Glasgow. Archibald Campbell Lawrie pursued his legal studies at the University of Glasgow, where he also cultivated a deep interest in law and Scottish history. In 1873 CE, he was appointed District Judge of Kandy by the British colonial administration. Although he briefly held various judicial and legal positions—including acting roles within the Supreme Court—he served as the District Judge of Kandy for nearly 25 years until his transfer to Colombo in 1896 CE as Acting Deputy Chief Justice.",

      "On several occasions, Lawrie performed duties as Acting Chief Justice. However, he was never formally appointed to the office of Chief Justice. He retired from judicial service in 1901 CE. Following his retirement, Lawrie was appointed as a member of the Royal Colonial Institute and was knighted by King Edward VII in recognition of his service. Sir A. C. Lawrie passed away on May 11, 1914 CE, at Dumbogin, Scotland, at the age of seventy-seven. ",
    ],
    image: ACLawrie,
  },

  {
    date: "Demise 1824 CE. ",
    title: "Kapuwatte Adikarame",
    description: [
      "The Kapuwatte Maha Nilame married a Kobbekaduwe Kumarihami, and their daughter married Pilimatalavuva Adigaram. Kapuwatte Maha Nilame held the office of Uda Gampahe Adigar and was appointed Diyawadana Nilame of the Sri Dalada Maligawa by King Sri Wickrama Rajasinghe (1798– 1815) in 1814 AD circa. He served in this esteemed position until his death in 1824 A.D. When the Kandyan Kingdom came to an end with its annexation by the British Empire on 2nd March 1815 A.D., through the signing of the Kandyan Convention, the British appointed Kapuwatte Diyawadana Nilame as the Second Adigar as well. With John D’Oyly’s assistance, he was responsible for bringing the Sacred Tooth Relic from the Pusulpitiya Raja Maha Viharaya to the Temple of the Tooth in Kandy in a grand procession on 24 April 1815 A.D. During the freedom struggle, commonly known as the Uva Rebellion in 1818 A.D., Venerable Wariyapola Sri Sumangala Anunayaka Thero removed the Sacred Tooth Relic for safekeeping. It was later reinstated at the Sri Dalada Maligawa through the mediation of Kapuwatte Diyawadana Nilame.",
    ],
    image: KapuwatteAdikaram,
  },

  {
    date: "Demise 1830 CE. ",
    title: "Ven. Wariyapola Sri Sumangala Anunayake Thero",
    description: [
      "Ven. Wariyapola Sri Sumangala Anunayake Thero born in Wariyapola Bamunakotuwa, Wariyapola Sumangala Thero's father was Herath Mudiyanselage Bamunakotuwa Rala. Before he entered the monastic life, he was known as Bamunakotuwa Ralage Kiri Hami from his childhood.  The Thero, who was passionate about religion, received ordination from the most respected Idatalu Goda Dhammapala Mahanayake Thero of the Asgiri Chapter of the Siam Maha Nikaya and resided at the Suduhumpola Viharaya. Later, the Thero, who held the title of Anunayake Thero of the Asgiri Chapter, was fortunate enough to take care of the Tooth Relic during the reigns of Kings Rajadhi Rajasinghe and Sri Vickrama Rajasinghe. On March 2, 1815 CE, before signing the treaty of surrender of the Kandyan Kingdom to the British, the Thero was brave enough to protest against the hoisting of the English flag by a British soldier at the historic Magul Maduwa (Royal Court) and to lower the British flag and raise the lion flag (Ceylon Flag) again. Because of that brave act, the Thero is respected as one of the most defiant Nayake Thero in the history of Sri Lanka. Moreover, during the 1818 C.E rebellion, he protected the sacred Tooth Relic by hiding it and facing various hardships. Due to this, he also had to spend time in a prison in Jaffna. He was later released from prison and is remembered for his courageous act for his country..",
    ],
    image: VenWariyapolaSriSumangala,
  },
];

const TimeLine: React.FC = () => {
  //top mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showAll, setShowAll] = useState(false);
  const visibleTimeline = showAll ? timelineData : timelineData.slice(0, 4);

  return (
    <>
      <section className="py-10 md:mt-20 lg:px-4 sm:px-8   relative lg:mt-20 w-11/12 lg:w-5/6 mx-auto h-auto  mt-10">
        <section className="w-full lg:w-2/3 flex flex-col gap-5 mt-2 mx-auto justify-center items-center mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[62px] font-bold text-center lg:text-left text-black">
            Wax Museum
          </h2>
          <p className=" text-base lg:text-xl text-center lg:text-center font-normal text-ternary/80">
            Experience the Kandyan Kingdom like never before where history comes
            to life in wax. Meet the iconic figures of Sri Lanka’s royal past,
            reborn in lifelike detail.
          </p>
        </section>

        <div className="absolute left-1/2 mt-15 transform  -translate-x-1/2 bg-primary w-1 top-40 bottom-40 z-0 hidden md:block" />

        <div className="w-full space-y-10 sm:space-y-20 lg:space-y-24 relative z-10">
          {visibleTimeline.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row lg:h-[500px] items-center gap-4 sm:gap-12 lg:gap-24 ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              } relative`}
            >
              {/* <img
                  src={timeline}
                  alt="Timeline marker"
                  className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-6 w-20 h-10 z-10"
                /> */}
              <FaRegDotCircle className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-6 w-20 h-10 z-10" />

              {/* IMAGE */}
              <div
                className={` w-full sm:w-1/2 ${
                  index % 2 === 0
                    ? "flex justify-end md:pr-5 lg:pr-0"
                    : "flex justify-start md:pl-5 lg:pl-0"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className=" shadow-md w-full max-h-64 sm:max-h-120 object-cover object-top lg:w-full lg:h-[full rounded-xl"
                />
              </div>

              {/* TEXT CONTENT */}
              <div className=" w-full sm:w-1/2 space-y-0">
                <div
                  className={`text-center sm:text-left ${
                    index % 2 === 0
                      ? "sm:text-right pr-2 sm:pr-4 lg:pr-6"
                      : "sm:text-left pl-2 sm:pl-4 lg:pl-1"
                  }`}
                >
                  <div className="text-3xl sm:text-4xl lg:text-[52px] text-gray-300 font-bold leading-none">
                    {item.date}
                  </div>
                </div>

                <div className=" p-0 lg:p-4 pt-3 relative">
                  <h3 className="text-lg sm:text-xl text-center md:text-left lg:text-2xl font-bold text-primary mb-5">
                    {item.title}
                  </h3>
                  {/* description */}
                  <div className="overflow-y-auto flex flex-col gap-5 bg-neutral-50 mt-1 h-80 p-5">
                    {item.description.map((para) => (
                      <p className=" text-sm sm:text-sm text-justify leading-7">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative flex flex-col items-center mt-20 lg:mt-16 px-4 py-6">
          {/* <img
              src={showmore}
              alt="Show more"
              className={`w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 opacity-60 hover:opacity-100 cursor-pointer transition-transform duration-300 z-10 ${
                showAll ? "rotate-180" : "rotate-0"
              }`} */}
          <RiArrowDownDoubleFill
            className={`w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-10 opacity-60 hover:opacity-100 cursor-pointer transition-transform duration-300 z-10 ${
              showAll ? "rotate-180" : "rotate-0"
            }`}
            onClick={() => setShowAll(!showAll)}
          />
          <p
            className="text-sm sm:text-base text-gray-500 hover:text-black transition-colors cursor-pointer z-10"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show less" : "Show more"}
          </p>
        </div>
      </section>
    </>
  );
};

export default TimeLine;
