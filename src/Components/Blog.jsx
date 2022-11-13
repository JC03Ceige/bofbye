import React from "react";

import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

import Blomme from "../Assets/Images/blomme.JPG";
import Egpt_BK from "../Assets/Images/apt_egyptbkpr";
import Rock_Art from "../Assets/Images/apt_rckart";
import Greek from "../Assets/Images/apt_anctgrk";
import Tablet from "../Assets/Images/apt_bktblt";
import { Figure } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="blog" id="blog">
      <Container fluid>
        <h1 className="font-weight-light">The Latest Buzz</h1>
        <Row>
          <Col className="col-2 mt-5">
            <div className="ggfwidget">
              <iframe
                className="iframe"
                title="gogetfunding"
                src="https://gogetfunding.com/embed-widget2?campaignid=7666428&frame_type=t3"
                scrolling="no"
              ></iframe>
            </div>
          </Col>
          <Col className="col-10 p-3 story">
            <h2>Apitherapy: Taking The Sting…Well, Out Of The Sting</h2>
            <h5>
              <em>9 November 2022</em>
            </h5>
            <div className="px-5">
              <Figure>
                <Figure.Image className="m-3 rounded" fluid src={Rock_Art} />
                <Figure.Caption>
                  Rock art depicting prehistoric beekeeping
                </Figure.Caption>
              </Figure>
              <p>
                If you don’t know about the miraculous benefits of bee products,
                then how are you alive right now? For over a decade, the media
                (especially the cosmetic, mindfulness, wellness and homoeopathic
                industries) has been in full flight with buzz-words and -phrases
                like “Royal Jelly”, “Beeswax” and “Organic Honey”. Fair enough,
                these are just basic, everyday words, but the way it has been
                over-popularised leaves one to wonder if these are simply fly
                by, snake oil products or if it is actually its honey’s worth.
                One would assume that the buzz would subside as new and
                seemingly more lucrative products (case and point, CBD) break
                into the market, and also because the public generally grows
                tired over cliched marketing campaigns. Afterall, honey in
                excess is no longer sweet. This, however, is not the case with
                bee products. Apitherapy (*the use of bee products for medicinal
                purposes) has only just begun to take flight in the modern world
                and the real stinger is that this form of medicine has been
                around for over 4000 years, and effectively so.
              </p>
              <p>
                A prescription written on a clay tablet, dating between 2100 -
                2000 BC, found in the Euphrates river, is our earliest evidence
                of honey being used as medicine. Not surprising as ancient
                Religious texts from almost every great religion practised today
                mentions apitherapy, with great acclamation, not only in a
                poetic and literary sense, but with specific reference to its
                healing properties. Hippocrates (c. 460 - c. 370 BC), the Greek
                physician who is famously known as the ‘father of medicine’
                noted the following properties in his research, “It causes heat,
                cleans sores and ulcers, softens hard ulcers of the lips, and
                heals carbuncles and running sores”. The ancient Egyptians have
                documented their use of apitherapy very diligently, providing
                evidence of the long standing traditions for the use of bee
                products as medicine. One such remedy is a mixture of honey and
                fat, used to drain pus from a wound. For birthcontrol, they
                crushed acacia and dates, mixed it with honey, then used
                vegetable fibre to insert it into the ‘flesh’ (DO NOT TRY THIS
                AT HOME).
              </p>
              <Figure>
                <Figure.Image className="m-3 rounded" fluid src={Egpt_BK} />
                <Figure.Caption>
                  Beekeeping shown in the tomb of{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/Pabasa"
                    target="_blank"
                  >
                    Pabasa
                  </a>
                </Figure.Caption>
              </Figure>
              <p>
                A more attractive remedy, perhaps not as medicinal, is the one
                they used to “beautify” the skin. Quite a simple remedy,
                although not sure just how effective this is. Use 1 part
                powdered alabaster, 1 part powdered natron (a mineral that has
                been used for cleaning, among many other things, since
                antiquity), 1 part honey, mix this into a paste and smear the
                mixture on the skin. In all honesty, it does sound kind of
                promising as a natural DIY beauty product. We will let the
                content creators try and test this one on our behalf but this
                one you can definitely try at home. Countless other remedies
                have been documented by the ancient Egyptians, most not very
                pleasant sounding, and honey and beeswax played a very prominent
                role in the mummification process in particular. Then there are
                the semetic religions that have a great affinity to bees and
                their products and we even have records in traditional Chinese,
                Korean and Russian texts.
              </p>

              <p>
                While many of us are aware of the amazing properties that honey
                and beeswax have, a much less popular, very beneficial bee
                product that has also been in use since antiquity, is bee venom.
                Don’t worry, I was just as shocked to learn this, and even more
                so to learn that it is still being practised today - with mixed
                results, understandably. One ancient text suggests that the
                potential of bee venom as a treatment came about when
                traditional healers noticed there is an entire infirmary of
                ailments and disorders that beekeepers simply do not suffer
                from. Bee sting acupuncture is one of these treatments that
                humanity has carried along over the centuries. The bee is made
                to sting the recipient of the treatment, don’t ask me how, on
                special acupressure points to treat, among other things,
                osteoarthritis, rheumatoid arthritis, multiple sclerosis, even
                Parkinson disease and, logically, many other ailments related to
                nerve pain. What is quite surprising is that it has amazing
                anti-inflammatory properties, and that it is used to treat
                (cure) bee venom allergies when administered in small doses. It
                is worth noting that although many of these treatments have been
                in practice for thousands of years, it is wise to have them done
                by a professional.
              </p>
              <p>
                Modern science has now been able to analyse the venom and the
                research has delivered some really promising results. A single
                drop of bee venom is made up of mostly water (88%) with only 0.1
                µg of dry venom. This is a very complex mixture of peptides,
                enzymes, bioactive amines such as histamine and epinephrine, and
                minerals. The peptides include melittin (the main component),
                adolapin, apamin and MCD-peptide. The most important enzyme is
                PLA2 and the rest of the compounds are of very low molecular
                weight.
              </p>
              <p>
                Melittin has proven to possess hemolytic (basically rupturing
                red blood cells, I had to Google this), anti-microbial,
                anti-fungal, and antitumor activities. Recent research has also
                shown that it is effective in causing neuro plastic changes in
                pain-signalling pathways. It does this by activating and
                sensitising nociceptor cells. Nociceptor cells react to stimuli
                that are damaging, or potentially damaging, by sending signals
                to the spinal cord (I had to Google this one too). Then,
                melittin is also an activator for PLA2, another major player in
                the healing properties of bee venom, that produces
                anti-nociceptive, anti-inflammatory, and anti-arthritic effects.
              </p>
              <p>
                The cosmetic industry has also been using bee venom in serums,
                face creams and a myriad of other products. The fact that it is
                antibacterial, anti-fungal, anti-inflammatory and 100% natural
                makes it the perfect candidate for skincare. In some studies it
                has also proven to provide anti wrinkle effects which, as we all
                know, is an extremely lucrative agent in the beauty business. A
                twelve week study was done where women had to apply a serum
                containing bee venom. It showed a remarkable reduction in
                wrinkle depth as well total wrinkle count. There was another
                study, this time only six weeks, done with purified bee venom.
                In this study, 77% of participants showed an improvement in acne
                by applying the serum twice daily. Not bad for something that is
                feared and dreaded by a majority of the global population.
              </p>
              <Figure>
                <Figure.Image className="m-3 rounded" fluid src={Greek} />
                <Figure.Caption>
                  According to Greek mythology, Melisseus was the demi-god of
                  honey and the art of beekeeping. The ancient Greeks believed
                  that amber-coloured honey-sap (melissa) was star-fall which
                  the bees collected from flowers and trees.
                  <a
                    href="https://twitter.com/BQ_Mag/status/1496406266721280000"
                    target="_blank"
                  >
                    @BQ Magazine
                  </a>
                </Figure.Caption>
              </Figure>
              <p>
                I should probably have led this article with the beauty benefits
                of bee venom, great for click bait, but as with most great
                stories that end with happily ever after, it was only natural
                for this one to start with a long-long time ago. The story of
                apitherapy is by no measure anywhere near its end but I believe
                it is safe to say that we are already a long way into the
                happily ever after, and I for one can’t wait to see which other
                magical properties modern day science will testify to. For now,
                we get to run in fear from the bee sting while enjoying the pure
                joy of honey and beeswax in our daily lives.
              </p>
              <p>
                <strong>"A Bee is an exquisite Chymist" [chemist] </strong>
                <em>~ Royal Beekeeper to Charles II</em>
              </p>
              <Figure>
                <Figure.Image className="m-3 rounded" fluid src={Tablet} />
                <Figure.Caption>
                  A clay tablet from ancient Egypt.
                </Figure.Caption>
              </Figure>
              <p>
                <em>
                  * At Bakovensfontein, we strive to provide sustainable food
                  sources with a strong focus on how our products can add to a
                  cleaner, greener future. Our Bee Project is one such
                  initiative. Our main goal is to deliver top tier honey and
                  beeswax products, and assisting local farmers with
                  pollination, while saving the local bee population from
                  extermination.
                </em>
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="col-10 p-3 story">
            <h2>A Buzz about the Garden</h2>
            <h5>
              <em>9 October 2022</em>
            </h5>
            <div className="px-5">
              <Figure>
                <Figure.Image className="m-3 rounded" fluid src={Blomme} />
                <Figure.Caption>
                  A close up of the garden at Bakovensfontein
                </Figure.Caption>
              </Figure>
              <p>
                <strong>Did you know</strong>, the relationship between bees and
                humans is one of the oldest in recorded history? With evidence
                from cave paintings to discoveries of wax, honey and bee rearing
                from ancient dig sites. It doesn't end there though, mythology
                and ancient rituals are rife with examples of the importance
                that bees have played in our lives from the earliest of times.
                In modern times, for most of us, bees are the cute (from a
                distance) insects that roam our gardens and buzz around the
                spring blooms and blossoms. We enjoy their labor in our everyday
                life through the honey which, let's face it, adds decadence to
                just about anything, and the magnificent beeswax that we enjoy
                in everything from cosmetics to medicine. The Khoi-San have a
                fantastical story of a bee that carried a mantis accross a
                river. When they were halway accross, the bee was too exhausted
                to carry on and softly rested the mantis on a flower, gently
                floating by. Before the bee exhaled its last breath, it planted
                a seed inside the mantis, which eventually grew to become the
                first ever human. In Egyptian mythology, bees came into
                existence when the Egyptian sun god, Ra, started weeping, and as
                his tears fell onto the scorching desert sand, they transformed
                into bees. There are countless stories like these from all
                cultures and civilisations in history, going to show just how
                much bees have been prickling our interest and captivating our
                imaginations throughout the ages.
              </p>
              <p>
                But, seeing as today is National Garden Day in South Africa,
                asking oursleves 'How much do we really know about these garden
                dwellers?' is a fair question. Bees are extremely fascinating
                creatures and they are as diverse and multi faceted as the
                humans that have been intrigued by them throughout history. For
                instance, did you know that there are over 20 000 bee species
                worldwide, and 3 000 of them can be found right here on the
                African continent!? From soil tunneling bees, leafcutter bees,
                the honeybees (which we all know, and some of us love) to
                stingless bees. Yup, you read right, stingless. These critters
                don't seperate their honey, pollen and brood cells as the
                honeybees do, making them not ideal for honey extraction. It's
                probably better this way because even though they don't sting,
                they have some pretty nasty mandables to bite any unwitting
                intruders with. Then we have the placid Italian bees. Some go as
                far as to describe them as having a 'gentle nature', not
                something that we in South Africa are familiar with. From 1930
                to 1965, Dr. Arnold E. Lundie imported Italian bees at
                irregeluar intervals, but none of his attempts took flight as
                they never became established. The African worker bees continued
                to dominate and eventually the Italian colonies became a thing
                of dreams and desires.
              </p>
              <p>
                Jump back to 2022 and the two predominant species in the South
                Africa are the African bee and the Cape Honey Bee. The Cape
                Honey Bee is quite spectacular, in that the worker bees are able
                to reproduce through thelytokous pathenogenisis (don't worry, I
                can also not pronounce thelosdfjsdj pdafjdsk). This means they
                are able to requeen themselves. In the Cape Honey Bee colonies,
                between 30% to 70% of the worker bees have what it takes to do
                the 'birds and the bees', compared to other species that have
                less than 2%. I'd say that is pretty remarkable. But enough
                about the birds and the bees. Exactly why are bees so
                significant to the brilliantly diverse flora we have in South
                Africa? It is fairly common knowledge that bees play an immensly
                important role in pollination. For those who need a crash
                course, pollination is when the pollen from a male flower is
                delivered to a female flower, allowing the female to grow and
                develop the seeds which ensures the continuation of the specie
                as well as the magnificance of our gardens. This is not
                something that bees do intentionally. Instictively, bees only
                visit the same type of flower during each flight. They tiny
                litte hairs on their tiny little hind legs which collectects the
                pollen when the bee nestles to feast on the nectar provided by
                the flowers. Okay, saying they feast on the nectar is a
                fancifull reimagining of them collecting it to produce honey,
                but let's be honest, it sounds much more romantic. As we can
                conclude from this, the pollen collection is not at all
                intentional but one of the most important mechanisms in nature.
                The fact that bees only visit the same type of flower during
                each flight also prolifically increases the odds of succesfull
                polination and helps protect the precious biodiversity of our
                flora. In European countries and in Isreal, they use bublebees
                in greenhouses because, remarkably, they can visit a variety of
                flowers during a single flight. This is obviously not ideal,
                because not only will this effect the biodiversity of our flora
                but they can also be invasive, adversely affecting the locals.
                Certain bee species have also evolved to pollinate specific
                flower species, making them quite indespensible to the granduous
                gardens we have enjoyed throughout history.
              </p>

              <p>
                Sadly, the bee population have been dwindling worldwide due to a
                variety of factors. According to the Food and Agriculture
                Organisation of the UN, bees (and other pollinators) are
                responsible for 35% of the world's crop pollination. But it
                doesn't end there, they are not solely responsible for the food
                that we eat but also for the pollination of medicinal plants
                and, of course, the glorious gardens that we are celebrating
                today. Bees are one the hardest working critters on the planet
                and there is so much more to them than just honey and beeswax.
                We have been feasting and foraging their exceptional products
                from the dawn of time and enjoying their gentle buzz in our
                gardens probably from when horticulture first became a popular
                pastime. So, on this National Garden Day, let's celebrate these
                unbelievable little garden helpers along with our beautiful
                gardens.{" "}
              </p>
              <p>Until next time.</p>

              <p>
                <em>
                  * At Bakovensfontein, we strive to provide sustainable food
                  sources with a strong focus on how our products can add to a
                  cleaner, greener future. Our Bee Project is one such
                  initiative. Our main goal is to deliver top tier honey and
                  beeswax products, and assisting local farmers with
                  pollination, while saving the local bee population from
                  extermination.
                </em>
              </p>
            </div>
          </Col>
          <Col className="col-2 mt-5">
            <div className="ggfwidget">
              <iframe
                className="iframe"
                title="gogetfunding"
                src="https://gogetfunding.com/embed-widget2?campaignid=7666428&frame_type=t3"
                scrolling="no"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
