import maine_to_george from './assets/georges_to_maine.png';
import pace_clouds from './assets/pace_introduction_clouds.png';
import pace_water from './assets/pace_introduction_water.png';
import pace_maine from './assets/pace_introdction_image_maine.png';
import pace_snow from './assets/apce_introduction_snow.png';
import oman_pace from './assets/oman_pace.jpg';
import saginaw_bay from './assets/saginaw_bay.jpg';
import saginaw_pace from './assets/saginaw_bay_pace.jpg';
import image_globe from './assets/image_globe.jpg';
import mauritania from './assets/mauritania.jpg';
import mauritania_pace from './assets/mauritania_pace.png';
import mud_spill_rebuilding from './assets/mud_spill_rebulding.jpg';
import mud_spill from './assets/mud_spill.jpg';
import oman_picture from './assets/oman_picture.jpg';
import saginaw_pace_stain from './assets/pace_saginaw_bay_stain.png';
import phytoplankton from './assets/phytoplankton.jpg';
import mauritania_above from './assets/mauritania_above.jpg';
import mauritania_globe from './assets/mauritania_globe.png';
import badgeFigure from './assets/Badge.png';
import omanData from './assets/data/oman_winter_norm.csv';
import sagiData from './assets/data/saginaw_bay_norm.csv';
import FinalStage from './components/stages/FinalStage';
import InformativeSectionStage from './components/stages/InformativeSectionStage';
import MapFocusStage from './components/stages/MapFocusStage';
import OnlyOneQuestion from './components/stages/OnlyOneQuestion';
import GolfeDoMexico from './assets/oceandiving/mission3/eutrofizado02.jpg';
import CostaBrasileira from './assets/oceandiving/mission1/costabrasileira.jpeg';
import TurtlePesca from './assets/oceandiving/mission1/tartarugapescafantasma.jpg';
import FocaPesca from './assets/oceandiving/mission1/focapescafantasma.jpg';
import CoraisPesca from './assets/oceandiving/mission1/coraisredefantasma.png';
import Eutrofizado1 from './assets/oceandiving/mission3/eutrofizado02.jpg';
import RedeFantasma from './assets/oceandiving/mission1/redefantasma.jpg';
import FotoCoralBonita from './assets/oceandiving/mission1/marbrasilcosta.jpg';
import TartarugaNemo from './assets/oceandiving/mission1/tartaruganemo.jpg';
import EcossistemaMarinho from './assets/oceandiving/mission1/ecossistemamarinho.jpg';

import LagoEutro from './assets/oceandiving/mission3/eutro.webp';
import lagoeutro2 from './assets/oceandiving/mission3/lagoeutro2.jpg';
import mapaeutro2 from './assets/oceandiving/mission3/eutromapa2.png';
import mapazonamortamex from './assets/oceandiving/mission3/zonamortamex2.png';
import golfmex2 from './assets/oceandiving/mission3/golfomex2.webp';

import Corais from './assets/oceandiving/mission2/corais.jpg';
import StartMission2 from './assets/oceandiving/mission2/acidificação main.jpg';
import questao2 from './assets/oceandiving/mission2/image560x340cropped.jpg';
import pescaesportiva from './assets/oceandiving/mission2/pesca esportiva.jpg';
import pescaartesanal from './assets/oceandiving/mission2/pescaartesanal.jpg';
import industria from './assets/oceandiving/mission2/efeito-estufa.jpg';
import longbeach from './assets/oceandiving/mission2/long-beach.jpg';
import agua from './assets/oceandiving/mission2/iStock-822555200.webp';
import pexe from './assets/oceandiving/mission2/pexe.jpg';
import TemperaturaAumentando from './assets/oceandiving/mission4/temperaturas_aumentando.webp';




//pulei linhas pra não arriscar de dar erro depois. depois pode apagar
import MapaAntartica from './assets/oceandiving/mission4/antartica_mapa.png';
import GeloDerretendo from './assets/oceandiving/mission4/gelo_derretendo.jpg';
import Geleira from './assets/oceandiving/mission4/img_introducao.jpg';

// Função que retorna as missões com base no nível de dificuldade
const getMissionsByDifficulty = (difficulty) => {
    switch (difficulty) {
        case 'EASY':
            return [
                {
                    index: 0,
                    concluded: false,
                    title: "Ghost Fishing ",
                    lat: -9.5627778,
                    lng: -35.6231667,
                    location: " Brazilian Coast",
                    image: CostaBrasileira,
                    text: "Ghost fishing is characterized by fishing gear that is abandoned or discarded in the sea, such as nets or lines. These materials significantly impact marine biodiversity, as the NGO World Animal Protection estimates that 10% of the plastic waste entering seas and oceans consists of lost or abandoned fishing equipment (ghost nets). In Brazil, approximately 69,000 animals are affected by ghost fishing every day.",
                    initialViewState: {
                        latitude: -9.5627778,
                        longitude: -35.6231667,
                        zoom: 7,
                    },
                    heatmapConfig: {
                        intensity: 1,
                        colorRange: [
                            [178, 34, 34, 255],     // Brick
                            [255, 0, 0, 255],       // Red
                            [255, 165, 0, 255],     // Orange
                            [255, 255, 0, 255],     // Yellow
                            [173, 255, 47, 255],    // GreenYellow
                            [0, 255, 0, 255],       // Green
                            [0, 255, 255, 255],     // Cyan
                            [0, 0, 255, 255],       // Blue
                            [147, 112, 219, 255],    // Lilac
                            [128, 0, 128, 255],     // Purple
                            [128, 0, 0, 255]        // Wine
                        ],

                        threshold: 0.9,
                    },
                    tileLayerConfig: {
                        data: "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
                        minZoom: 0,
                        maxZoom: 19,
                        tileSize: 256,
                    },
                    csvPath: null,
                    stages: [
                        {
                            displayMap: false,
                            fallbackImage: TurtlePesca,
                            next: 1,
                            component: (
                                <OnlyOneQuestion
                                    questionText={" This image represents a huge problem. What do you see?"}
                                    options={[
                                        { id: 'a', text: 'A dead turtle due to fishing debris.', explanation: 'That’s right, what a sharp eye! This turtle was affected by the problem of ghost fishing and unfortunately died because of it.'},
                                        { id: 'b', text: 'A turtle in its natural habitat, swimming freely.', explanation: 'Hmm, that’s not quite right. This turtle is not swimming freely. It is trapped in a net, a typical problem of ghost fishing.'},
                                        { id: 'c', text: 'A turtle being freed by divers.', explanation: 'Good try, but that’s not what happened. This turtle was not saved by divers; it ended up being a victim of ghost fishing.' }
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={1}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: CostaBrasileira,
                            next: 2,
                            component: (
                                <InformativeSectionStage nextStage={2}>
                                    <div className="mission-card-header">
                                        <h2>Ghost Fishing</h2>
                                        <h4>A little more about the problem of ghost fishing.</h4>
                                    </div>
                                    <div className="list">
                                         <h3>Animal trapped in a ghost net.</h3>
                                        <ul>
                                            <div className="image-container">
                                                <img src={FocaPesca}></img>
                                            </div>
                            
                                            <ul>
                                                <li>Ghost fishing is a big problem! It not only puts animals at risk but also impacts many other beings that live in the sea — this is what we call marine biodiversity. </li>
                                                <li>And look: Brazil is one of the most affected places, according to the NGO World Animal Protection. They estimate that every day, about 69,000 animals suffer from abandoned nets and fishing materials along our coast! It is a huge challenge that we don't always see, but it can even lead to the extinction of species that are extremely important for the balance of the ocean and for all of us!
                                                </li>
                                            </ul>
                                            <div className="image-container">
                                                <img src={CoraisPesca}></img>
                                            </div>
                                    
                                            <ul>
                                                <li>The image above shows a fishing net that was found on top of several corals in the visitor area of the Galés de Maragogi, Brazil, and had to be removed by professionals.</li>
                                                <li>It is easy to see the great problem that this represents! Nets trapped in corals can destroy essential habitats for many living beings, and this affects the ecosystem — that is, the group of organisms that live and depend on each other to maintain balance in the environment. In the end, these abandoned materials harm the entire biodiversity and disrupt the marine ecosystem.</li>
                                            </ul>

                                        </ul>
                                    </div>
                                </InformativeSectionStage>
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: RedeFantasma,
                            next: 3,
                            component: (
                                <OnlyOneQuestion
                                    questionText={" This net was left in the ocean. According to your knowledge, what can happen to marine animals that encounter abandoned nets like this?"}
                                    options={[
                                        { id: 'a', text: 'They can end up trapped in the net and get injured or die.', explanation: 'Incredible! That’s right, these materials discarded in the oceans harm marine biodiversity greatly, especially the animals.'},
                                        { id: 'b', text: 'The net helps animals hide from predators.', explanation: 'Although it appears to be a shelter, this net does not offer protection; it represents a significant risk for the animals.' },
                                        { id: 'c', text: 'The net provides a safe place for animals to rest.', explanation: 'Abandoned nets are not safe for resting. They are traps that put the animals’ lives in danger.' }
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={3}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: CoraisPesca,
                            next: 4,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Look at this reef. What can happen to the local ecosystem when abandoned fishing nets get caught in the corals?"}
                                    options={[
                                        { id: 'a', text: 'The nets will become a safe base for the corals to grow.', explanation: 'That’s not quite it. Fishing nets do not help coral recovery; they cause damage and end up hindering growth. Go ahead to find out more!' },
                                        { id: 'b', text: 'The nets can damage the corals and harm the marine life that depends on them.', explanation: 'That’s right! Corals are fragile and important for many fish and other creatures but abandoned nets can destroy these habitats. Go ahead to find out more!' },
                                        { id: 'c', text: 'The corals will engulf the nets, absorbing them naturally.', explanation: 'Nice try, but corals can’t absorb nets. These materials damage and can even kill the corals. Go ahead to find out more!' },
                                
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={4}
                                />
                            ),
                        },

                        {
                            displayMap: false,
                            fallbackImage: FotoCoralBonita,
                            next: 5,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Now that you know the impact of ghost fishing, what can we do to help protect ocean life?"}
                                    options={[
                                        { id: 'a', text: 'Explore and take care of the oceans, preventing nets and materials from being left in the sea.', explanation: 'That’s right, explorer! Exploring and protecting the oceans helps preserve biodiversity and protect precious ecosystems. Become a helper of the world and explore the seas!!' },
                                        { id: 'b', text: 'Encourage ocean clean-up efforts and raise awareness among others about the importance of marine life.', explanation: 'Correct, explorer! Raising awareness and promoting sea cleaning is essential to reduce the impacts of ghost fishing. Become a helper of the world and explore the seas!!' },
                                        { id: 'c', text: 'Collect abandoned fishing materials and promote the use of safer alternatives for marine life.', explanation: 'Absolutely right, explorer! Removing abandoned networks and seeking safe alternatives are important actions to preserve ecosystems. Become a helper of the world and explore the seas!!' },
                                        
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={5}  // Ensure this links correctly
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: EcossistemaMarinho,
                            next: 6,
                            component: (
                                <InformativeSectionStage nextStage={6}> {/* Update nextStage properly */}
                                    <div className="mission-card-header">
                                        <h2> TAKE CARE OF OUR ECOSYSTEM!</h2>
                                        <h4>You can make a difference!</h4>
                                    </div>
                                    <div className="image-container">
                                        <img src={TartarugaNemo}></img>
                                    </div>
                                    <div className="text">
                                        <p>
                                        </p>
                                    </div>
                                </InformativeSectionStage>
                            ),
                        },
                        {
                            displayMap: true,
                            next: 7,
                            component: (
                                <MapFocusStage nextStage={7} // Make sure the progression continues logically
                                    images={[
                                        {
                                            lat: 42.81671,
                                            lng: -69.95354,
                                            image: FocaPesca,
                                            title: "Hello, explorer!",
                                            text: "Now you know the risks of ghost fishing! Hope you had fun!",
                                            zoom: 7,
                                        }
                                    ]}
                                />
                            ),
                        },

                        {
                            displayMap: true,
                            component: <FinalStage
                                onArrival={() => console.log('Final stage reached!')}
                                briefing={{
                                    title: "Ghost Fishing",
                                    location: "Basilian Coast",
                                    image: pace_maine,
                                    report: "Congratulations! You’ve completed your first mission! Your skills are amazing, and we can’t wait to have your help on our next big adventure!",
                                    reportAll: "Congratulations! 🚀 You were amazing on this mission and learned how essential it is to act before the problem of ghost fishing gets out of control. When nets and other materials are left in the sea, they not only harm the ocean but also cause deep damage to the entire marine biodiversity. We saw the impact this can have on corals, turtles, and so many other marine beings. The good news? You now know how important it is to care and take action! With the help of technologies and tools like imaging and monitoring, it is possible to identify at-risk areas and take action. This way, we can protect our seas and ensure that these ecosystems remain strong and full of life. May this mission inspire you to explore more and take even better care of our oceans! 🌊🐢"
                                }}
                                badge={{
                                    name: "Ghost Fishing mission badge",
                                    image: badgeFigure
                                }}
                            />
                        },
                    ],
                },
                {
                    index: 1,
                    concluded: false,
                    title: "Ocean Acidification",
                    lat: 40.35052,
                    lng: -73.37517,
                    location: "Long Beach, New York, USA",
                    image: StartMission2,
                    text: "Get ready! Let’s start the second mission in our journey to understand the impact of ocean acidification, a phenomenon that occurs when carbon dioxide levels in the atmosphere increase, making the waters more acidic. Additionally, the growth of recreational fishing makes the marine ecosystems of the United States more vulnerable. As the second-largest emitter of polluting gases in the world, the country faces significant challenges in protecting its oceans and reducing environmental impacts.",
                    displayMap: true,
                    fallbackImage: saginaw_bay,
                    csvPath: sagiData,
                    initialViewState: {
                        latitude: 40.35052,
                        longitude: -73.37517,
                        zoom: 7,
                    },
                    heatmapConfig: {
                        intensity: 1,
                        colorRange: [
                            [178, 34, 34, 255],     // Brick
                            [255, 0, 0, 255],       // Red
                            [255, 165, 0, 255],     // Orange
                            [255, 255, 0, 255],     // Yellow
                            [173, 255, 47, 255],    // GreenYellow
                            [0, 255, 0, 255],       // Green
                            [0, 255, 255, 255],     // Cyan
                            [0, 0, 255, 255],       // Blue
                            [147, 112, 219, 255],    // Lilac
                            [128, 0, 128, 255],     // Purple
                            [128, 0, 0, 255]        // Wine
                        ],


                        threshold: 0.9,
                    },
                    tileLayerConfig: {
                        data: "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
                        minZoom: 0,
                        maxZoom: 19,
                        tileSize: 256,
                    },
                    stages: [
                        {
                            displayMap: false,
                            fallbackImage: questao2,
                            next: 1,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"What do we notice in corals when the ocean becomes more acidic?"}
                                    options={[
                                        { id: 'a', text: 'They lose their color and become weakened.', explanation: 'Well done! Ocean acidification makes corals lose their color, which is na sign of fragility and vulnerability.' },
                                        { id: 'b', text: 'Corals grow faster and become more colorful.', explanation: 'In fact, the opposite happens. Acidification harms coral growth, causing them to lose color and become more fragile.' },
                                        { id: 'c', text: 'They become resistant to the impacts of acidification.', explanation: 'Unfortunately, corals are not resistant to acidification. It weakens corals, affecting their color and health. ' },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={1}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: Corais,
                            next: 2,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"What is one of the causes of ocean acidification?"}
                                    options={[
                                        { id: 'a', text: 'The reduction of fishing in the oceans.', explanation: 'That’s not it... Reducing fishing can help the oceans, but what really causes acidification is excess carbon dioxide (CO2) in the air.' },
                                        { id: 'b', text: 'The increase of carbon dioxide (CO2) in the atmosphere.', explanation: 'Correct! Excess carbon dioxide in the air is one of the main causes of ocean acidification.' },
                                        { id: 'c', text: 'The frequent cleaning of beaches.', explanation: 'In fact, cleaning the beaches helps the ocean! What causes acidification is the increase in carbon dioxide in the atmosphere.'}
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={2}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: pescaartesanal,
                            next: 3,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"What is fishing?"}
                                    options={[
                                        { id: 'a', text: 'Fishing is the cleaning of trash in the sea, which helps protect the oceans.', explanation: 'No... Fishing is about catching fish, not cleaning the oceans.' },
                                        { id: 'b', text: 'Fishing is the capture of fish and other marine animals, and it can affect the balance of marine ecosystems.', explanation: 'Correct! Fishing involves the capture of fish and, if not well controlled, can harm the natural balance of the oceans.' },
                                        { id: 'c', text: 'Fishing is the raising of fish in tanks, which has no impact on the oceans.', explanation: 'It’s not that! Fishing is the capture of fish from the sea and can affect marine ecosystems.' },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={3}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: pescaesportiva,
                            next: 4,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"How can recreational fishing affect marine ecosystems?"}
                                    options={[
                                        { id: 'a', text: 'It increases the number of fish in the oceans.', explanation: 'No, sport fishing does not help increase the number of fish. If we catch too many, we can put the fish in danger and even cause some species to disappear!' },
                                        { id: 'b', text: 'It improves the health of coral reefs.', explanation: 'Fishing on reefs can hurt corals! If we take away too many important fish, reefs can become sick and lose their beauty and life.' },
                                        { id: 'c', text: 'It can cause vulnerability in marine ecosystems.', explanation: 'That’s right! Sport fishing can weaken marine ecosystems... If we don’t take good care, some species can disappear, and this affects all life in the sea, making everything more fragile.' },
                                    ]}
                                    correctAnswerId={'null'}
                                    nextStage={4}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: agua,
                            next: 5,
                            component: (
                                <InformativeSectionStage nextStage={5}>
                                    <div className="mission-card-header">
                                        <h2>Acidification</h2>
                                        <p>With all this study, we conclude that ocean acidification is a danger! And as one of its causes, we have the greenhouse effect, which is a big problem too! It occurs when certain gases, such as carbon dioxide (CO₂), get trapped in the atmosphere and make the Earth warmer. However, when there is too much CO₂, it’s not just the air that suffers; the oceans do too!</p>
                                    </div>
                                    <div className="image-container">
                                        <img src={pexe}></img>
                                    </div>
                                    <div className="text">
                                        <p>This gas, which can be emitted from the burning of fossil fuels, deforestation, and even industrial processes, ends up being absorbed by seawater, making it more acidic. This can harm the animals and plants that live in the ocean, jeopardizing marine biodiversity. Over time, this process could even lead to the disappearance of some species, altering the balance of the oceans and impacting the entire planet! So, are you ready for the last question?
                                        </p>
                                    </div>
                                </InformativeSectionStage>
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: agua,
                            next: 6,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Why is it important to learn about ocean acidification?"}
                                    options={[
                                        { id: 'a', text: "Because it makes the oceans bluer.", explanation: "Não é bem assim! A acidificação dos oceanos não muda a cor da água, mas sim a sua composição, prejudicando os ecossistemas." },
                                        { id: 'b', text: 'Because this way we can help protect marine life and the balance of the oceans.', explanation: "Muito bem! Aprender sobre a acidificação nos ajuda a proteger os oceanos e todas as espécies que vivem neles." },
                                        { id: 'c', text: 'Because ocean acidification makes the water cleaner and healthier.', explanation: "Na verdade, a acidificação torna a água mais ácida, o que pode fazer mal para a vida marinha." },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={6}
                                />
                            ),
                        },
                        {
                            displayMap: true,
                            next: 7,
                            component: (
                                <MapFocusStage nextStage={7}
                                    images={[
                                        {
                                            lat: 40.35052,
                                            lng: -73.37517,
                                            image: longbeach,
                                            title: "Long Beach is beautiful, but it may need a little help!",
                                            text: "We, humans, impact the world around us. Look around at our own environment; how do you think you can change it? How do you think you can help the world around you, humans, the Earth, and the oceans?",
                                            zoom: 10,
                                        },
                                    ]}
                                />
                            ),
                        },
                        {
                            displayMap: true,
                            component: (
                                <FinalStage
                                    onArrival={() => console.log('Final stage reached!')}
                                    briefing={{
                                        title: "Ocen Acidification",
                                        location: "Long Beach, New York, USA",
                                        image: saginaw_bay,
                                        report: "Congratulations! Thanks to your help, we discovered what is happening in Long Beach with all these issues resulting in ocean acidification and started thinking of smart ways to fix it!",
                                        reportAll: "With all these questions and explanations, you learned how carbon dioxide affects the oceans, how sport fishing and ghost fishing impact marine life, and why it is so important to care for our planet. Additionally, you learned about the impact of sport fishing and ghost fishing, which cause significant damage to biodiversity, threatening various species and compromising the balance of ecosystems. These topics highlight the importance of taking care of our planet, as the ocean is essential for the health of the planet and all of us. Understanding these issues and raising awareness among others are fundamental steps to preserving our seas and their natural riches. Every action, no matter how small it seems, contributes to protecting ecosystems and the well-being of all marine biodiversity. And now, you know more about how to protect the oceans. Keep it up!"
                                    }}
                                    badge={{
                                        name: "Emblema Acidificação dos Oceanos",
                                        image: badgeFigure
                                    }}
                                />
                            ),
                        },
                    ],
                },
                {

                    index: 2,
                    concluded: false,
                    title: "Eutrophication",
                    lat: 25.350780,
                    lng: -90.176988,
                    location: "Gulf of Mexico",
                    image: GolfeDoMexico,
                    text: "The Gulf of Mexico is a vast ocean basin located between North America and Central America, considered the largest gulf in the world. It covers an area of approximately 1.5 million km² and has a volume of about 2,400 million km³. Its waters wash over the United States, including states such as Florida, Alabama, Mississippi, Louisiana, and Texas; Mexico, with states like Tamaulipas and Veracruz; and the island of Cuba.",
                    displayMap: false,
                    fallbackImage: oman_pace,
                    csvPath: omanData,
                    initialViewState: {
                        latitude: 25.350780,
                        longitude: -90.176988,
                        zoom: 7,
                    },
                    heatmapConfig: {
                        intensity: 1,
                        colorRange: [
                            [178, 34, 34, 255],     // Brick
                            [255, 0, 0, 255],       // Red
                            [255, 165, 0, 255],     // Orange
                            [255, 255, 0, 255],     // Yellow
                            [173, 255, 47, 255],    // GreenYellow
                            [0, 255, 0, 255],       // Green
                            [0, 255, 255, 255],     // Cyan
                            [0, 0, 255, 255],       // Blue
                            [147, 112, 219, 255],    // Lilac
                            [128, 0, 128, 255],     // Purple
                            [128, 0, 0, 255]        // Wine
                        ],


                        threshold: 0.9,
                    },
                    tileLayerConfig: {
                        data: "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
                        minZoom: 0,
                        maxZoom: 19,
                        tileSize: 256,
                    },
                    stages: [
                        {
                            displayMap: false,
                            fallbackImage: Eutrofizado1,
                            next: 1,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Look at these fish, what do you think happened to them? "}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "They were killed by a predator.",
                                            explanation: "Good try, buddy! But it's not that... The example in this image is about Eutrophication, which ended up affecting the life of the fish in this body of water."
                                        },
                                        {
                                            id: 'b',
                                            text: 'They died from water pollution.',
                                            explanation: "Congratulations, you got it right! These fish died due to water pollution, but this pollution is a process called Eutrophication! This process occurs when the water has so many nutrients that algae and cyanobacteria start to reproduce irregularly, and this large number of organisms in the water generates an oxygen shortage."
                                        },
                                        {
                                            id: 'c',
                                            text: 'They are sleeping after swimming a lot.',
                                            explanation: "It's not that at all... The fish are dead! All of this is due to Eutrophication, which wiped out the fish in that area."
                                        },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={1}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: lagoeutro2,
                            next: 2,
                            component: (
                                <InformativeSectionStage nextStage={2}>
                                    <div className="mission-card-header">
                                        <h2>Analyze and understand the following image</h2>
                                        <p></p>
                                    </div>
                                    <div className="image-container">
                                        <img src={mapaeutro2}></img>
                                    </div>
                                    <div className="text">
                                        <p>
                                        </p>
                                    </div>
                                </InformativeSectionStage>
                            ),

                        },
                        {
                            displayMap: false,
                            fallbackImage: LagoEutro,
                            next: 3,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"So, in summary, what is Eutrophication?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "It is the reproduction process of fish-eating algae.",
                                            explanation: "Calm down, young one, the algae don't eat fish. The problem is that they grow too much and consume the oxygen in the water, which harms the fish and other creatures."
                                        },
                                        {
                                            id: 'b',
                                            text: 'It is a process that releases oxygen into the water.',
                                            explanation: "This option is incorrect, explorer. Eutrophication reduces the oxygen in the water because the algae use a lot of oxygen to grow, leaving little for other living beings."
                                        },
                                        {
                                            id: 'c',
                                            text: 'It is a process that causes the death of fauna and flora in a body of water, as the excess of algae and cyanobacteria in the water generates a lower level of oxygenation, thus leading to death.',
                                            explanation: "Excellent, you’re nailing it!"
                                        },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={3}
                                />
                            ),
                        },
                       
                        {
                            displayMap: false,
                            fallbackImage: mapazonamortamex,
                            next: 4,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"As you have learned, Eutrophication destroys marine life. In the following image, you can see the so-called ‘Dead Zone’ in the Gulf of Mexico, which is increasingly expanding… How do you think this can be resolved?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "Reduce the use of fertilizers, better manage waste, improve sewage treatment facilities, and enhance the disposal of old vehicles.",
                                            explanation: "Great knowledge, young one! Using less fertilizers and managing waste better helps prevent many nutrients from entering the water, which aids in preventing eutrophication and pollution."
                                        },
                                        {
                                            id: 'b',
                                            text: 'Throw more fertilizers into the water to feed the fish.',
                                            explanation: "Hang in there, explorer! Adding more fertilizers to the water would only increase the amount of nutrients and make the algae grow even more, worsening the situation."
                                        },
                                        {
                                            id: 'c',
                                            text: 'Build more factories near the Gulf of Mexico.',
                                            explanation: "Young one, building factories can increase pollution and the discharge of chemicals into the water, contributing to eutrophication and worsening the health of the ecosystem."
                                        },
                                      
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={4}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: golfmex2,
                            next: 5,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"How do you think these problems affect the local regions?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "They improve fishing, increase tourism, and make the water cleaner.",
                                            explanation: "Incorrect. In fact, eutrophication leads to fewer fish and dirty water, which drives tourists away."
                                        },
                                        {
                                            id: 'b',
                                            text: 'They decrease the number of fish, harm the local economy, and can make the water unsafe to drink.',
                                            explanation: "That's right, good job! Less oxygen in the water means fewer fish, and the water can become dangerous to drink."
                                        },
                                        { id: 'c',
                                            text: 'They create more jobs in the fishing industries, improve water quality, and attract more tourists.',
                                            explanation: "Incorrect, my explorer. With fewer fish, fewer jobs are created, and the water becomes dirty, driving tourists away."
                                        }
                                        
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={5}
                                />
                            ),
                        },
                        {
                            displayMap: true,
                            component: (
                                <FinalStage
                                    onArrival={() => console.log('Final stage reached!')}
                                    briefing={{
                                        title: "Euthrophication",
                                        location: "Gulf of Mexico",
                                        image: oman_picture,
                                        report: "",
                                        reportAll: "Congratulations, explorer! 🎉 You completed this mission on eutrophication in the Gulf of Mexico, uncovering causes, consequences, and solutions to this serious environmental problem. Throughout this journey, you gained new insights into the importance of protecting our water resources and the impact of human actions on marine ecosystems. Now, you are a true advocate for the health of the Gulf and ecological balance! 🐟🌊 "
                                    }}
                                    badge={{
                                        name: "Eutrofização no Golfo do México",
                                        image: badgeFigure
                                    }}
                                />
                            ),
                        },
                    ]
                },
                {
                    index: 3,
                    concluded: false,
                    title: "Rising Ocean Temperatures ",
                    lat: -68.2833,
                    lng: -4.76056,
                    location: "Antarctica",
                    image: Geleira,
                    text: "From the first global revolution until now, greenhouse gas emissions have only increased, and so have ocean temperatures. This is extremely concerning because unregulated temperatures negatively impact marine ecosystems, the quality of life for animals, and can also cause a rise in sea levels, another serious problem with catastrophic consequences.",
                    displayMap: false,
                    fallbackImage: Geleira,
                    csvPath: omanData,
                    initialViewState: {
                        latitude: -68.2833,
                        longitude: -4.76056, 
                        zoom: 8,
                    },
                    heatmapConfig: {
                        intensity: 1,
                        colorRange: [
                            [178, 34, 34, 255],     // Brick
                            [255, 0, 0, 255],       // Red
                            [255, 165, 0, 255],     // Orange
                            [255, 255, 0, 255],     // Yellow
                            [173, 255, 47, 255],    // GreenYellow
                            [0, 255, 0, 255],       // Green
                            [0, 255, 255, 255],     // Cyan
                            [0, 0, 255, 255],       // Blue
                            [147, 112, 219, 255],    // Lilac
                            [128, 0, 128, 255],     // Purple
                            [128, 0, 0, 255]        // Wine
                        ],


                        threshold: 0.9,
                    },
                    tileLayerConfig: {
                        data: "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
                        minZoom: 0,
                        maxZoom: 19,
                        tileSize: 256,
                    },
                    stages: [
                        {
                            displayMap: false,
                            fallbackImage: MapaAntartica,
                            next: 1,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"The map in the image shows Antarctica, with the red areas indicating warmer temperatures and the blue areas indicating colder temperatures. With this, what can you infer from the image?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "The area around Antarctica is getting warmer.",
                                            explanation: "Antarctica is isolated from the rest of the world."
                                        },
                                        {
                                            id: 'b',
                                            text: "Antarctica is isolated from the rest of the world.",
                                            explanation: "On the map, it really appears to be more isolated, and it doesn't have humans living there. Nevertheless, it and its oceans still suffer the consequences of global warming, with their temperatures increasing. Let's explore this issue in more depth!"
                                        },
                                        {
                                            id: 'c',
                                            text: "The area around Antarctica is cold.",
                                            explanation: "Actually, the area around it is warm! These temperatures are not suitable for the ecosystem of the continent and the ocean around it. So, let's explore this issue in more depth and understand why this is the case."
                                        },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={1}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: GeloDerretendo,
                            next: 2,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"In the image above, we see that one of the things that happens when the temperature increases is the melting of ice. What could be a consequence of this phenomenon?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "The animals that live in cold places cannot survive.",
                                            explanation: "Exactly! Did you know the other answer is also right? Let’s explore these problems in more depth."
                                        },
                                        {
                                            id: 'b',
                                            text: "The climate can change.",
                                            explanation: "Yes, that's correct! Did you know the other answer is also right? Let's explore these problems in more depth."
                                        },
                                    ]}
                                    correctAnswerId={null}   //dependendo da resposta ela pula pra uma pergunta diferente
                                    nextStage={2}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: GeloDerretendo,
                            next: 3,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"If the animals do not survive, the marine ecosystem becomes disordered. Can you explain why?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "The food chain gets disrupted when there aren't enough animals.",
                                            explanation: "That's right! If one animal disappears, other animals and plants suffer because of it. For example, if the hunting animals disappear, the hunted animals can multiply too much and end up destroying the plants.",
                                        },
                                        {
                                            id: 'b',
                                            text: "As there are fewer fish in the water, the sea level decreases, and the seas dry up.",
                                            explanation: "This response is incorrect, as sea level does not depend on the number of fish. In fact, sea levels are rising due to the melting of ice!",

                                            id: 'c',
                                            text: "The loss of biodiversity makes ecosystems weaker.",
                                            explanation: "Correct! If there is more variety of organisms in an ecosystem, it can recover more quickly, as each organism has a specific role.",
                                        },
                                    ]}
                                    correctAnswerId={null}   
                                    nextStage={3}
                                />
                            ),
                        },
                        {

                            displayMap: false,
                            fallbackImage: TemperaturaAumentando,
                            next: 4,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"With climate change, marine ecosystems become disrupted. Can you explain why?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "Animals sweat a lot and become dehydrated.",
                                            explanation: "That's not quite right. Marine animals do not sweat, so they do not suffer from this problem. "
                                        },
                                        {
                                            id: 'b',
                                            text: "The temperature of the sea increases and harms the animals.",
                                            explanation: "The answer is incorrect, as sea level does not depend on the number of fish. In fact, sea level is rising due to the melting of ice! And also, the loss of biodiversity weakens ecosystems.",

                                            id: 'c',
                                            text: "The loss of biodiversity weakens ecosystems.",
                                            explanation: "Correct! When there is more variety of species in an ecosystem, it can recover more quickly, as each species has a specific role."
                                        },
                                    ]}
                                    correctAnswerId={null}   
                                    nextStage={4}
                                />
                            ),
                        },
                        {
                            displayMap: true,
                            component: (
                                <FinalStage
                                    onArrival={() => console.log('Final stage reached!')}
                                    briefing={{
                                        title: "Congratulations, you concluded the mission!",
                                        location: "Antarctica",
                                        image: mauritania,
                                        report: "",
                                        reportAll: "Congratulations, young explorer! ✨ You embarked on an incredible adventure through the ocean and learned about the rising temperatures of the oceans, a problem that brings serious consequences. Now that you understand its impacts, you have a better sense of the importance of the ocean! 🌊 "
                                    }}
                                    badge={{
                                        name: "Tiny Travelers with Big Effects!",
                                        image: badgeFigure
                                    }}
                                />
                            ),
                        },
                    ]
                }
            ];

        case 'MEDIUM':
            return [
                {
                    index: 0,
                    concluded: false,
                    title: "América do Norte",
                    lat: 42.81671,
                    lng: -69.95354,
                    location: "Nordeste dos EUA e Canadá",
                    image: pace_maine,
                    text: "✨ Sua primeira missão está chegando: Vamos mergulhar nas cores do oceano, descobrindo como a luz refletida na água pode revelar segredos ocultos sobre a vida em todo o mundo! A região, que abrange o Banco Georges e o Golfo do Maine, é renomada por sua rica produtividade biológica, tornando-se historicamente um centro de pesca comercial. No entanto, a sobrepesca e as mudanças climáticas agora representam ameaças significativas a esse ecossistema vital.",
                    initialViewState: {
                        latitude: 42.81671,
                        longitude: -69.95354,
                        zoom: 7,
                    },
                    heatmapConfig: {
                        intensity: 1,
                        colorRange: [
                            [178, 34, 34, 255],     // Brick
                            [255, 0, 0, 255],       // Red
                            [255, 165, 0, 255],     // Orange
                            [255, 255, 0, 255],     // Yellow
                            [173, 255, 47, 255],    // GreenYellow
                            [0, 255, 0, 255],       // Green
                            [0, 255, 255, 255],     // Cyan
                            [0, 0, 255, 255],       // Blue
                            [147, 112, 219, 255],    // Lilac
                            [128, 0, 128, 255],     // Purple
                            [128, 0, 0, 255]        // Wine
                        ],

                        threshold: 0.9,
                    },
                    tileLayerConfig: {
                        data: "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
                        minZoom: 0,
                        maxZoom: 19,
                        tileSize: 256,
                    },
                    csvPath: null,
                    stages: [
                        {
                            displayMap: false,
                            fallbackImage: pace_maine,
                            next: 1,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Dê uma olhada nesta imagem incrível. O que você vê? O que é diferente ou empolgante? O que chamou sua atenção? Agora, observe as cores nela; o branco que você vê é apenas uma coisa ou mais de uma?"}
                                    options={[
                                        { id: 'a', text: 'É tudo igual.', explanation: 'Não exatamente! Vamos dar uma olhada mais de perto!' },
                                        { id: 'b', text: 'Há diferentes brancos.', explanation: '' }
                                    ]}
                                    correctAnswerId={'b'}
                                    nextStage={1}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: pace_maine,
                            next: 2,
                            component: (
                                <InformativeSectionStage nextStage={2}>
                                    <div className="mission-card-header">
                                        <h2>Os brancos</h2>
                                        <h4>Há duas coisas brancas na imagem: nuvens e neve.</h4>
                                    </div>
                                    <div className="list">
                                        <h3>Aqui estão algumas dicas para ajudar a diferenciá-las:</h3>
                                        <ul>
                                            <div className="image-container">
                                                <img src={pace_clouds}></img>
                                            </div>
                                            <li>Nuvens:</li>
                                            <ul>
                                                <li>As nuvens aparecem como manchas brancas brilhantes e fofas. Elas costumam ter formas mais irregulares e podem ser vistas flutuando sobre a terra e a água.</li>
                                                <li>Nesta imagem, as nuvens tendem a ter uma aparência mais suave e difusa, e estão presentes em várias partes, como sobre o oceano do lado direito, e algumas coberturas também podem ser vistas sobre a terra.

                                                </li>
                                            </ul>
                                            <div className="image-container">
                                                <img src={pace_snow}></img>
                                            </div>
                                            <li>Neve:</li>
                                            <ul>
                                                <li>A neve, por outro lado, cobre grandes áreas da terra, especialmente nas regiões do norte. Ela tem uma aparência mais uniforme e texturizada, pois se espalha de maneira uniforme sobre a superfície.</li>
                                                <li>A neve aparece como uma cor branca sólida ou cinza claro e tende a seguir os contornos da terra, particularmente na parte superior da imagem (em direção ao centro superior e à esquerda), onde a terra está coberta de neve.</li>
                                            </ul>

                                        </ul>
                                    </div>
                                </InformativeSectionStage>
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: pace_snow,
                            next: 3,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Dê uma olhada na neve, você nota algo estranho sobre como ela parece?"}
                                    options={[
                                        { id: 'a', text: 'Não', explanation: 'Dê uma olhada mais de perto! Embora a neve cubra o chão, há manchas de terra marrom aparecendo. A neve em si parece estar rachada, como se estivesse repousando sobre uma camada de sedimento.' },
                                        { id: 'b', text: 'Sim', explanation: 'Correto, agora podemos olhar mais de perto.' }
                                    ]}
                                    correctAnswerId={'b'}
                                    nextStage={3}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: pace_snow,
                            next: 4,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Você consegue formular alguma teoria sobre o que está acontecendo aqui? "}
                                    options={[
                                        { id: 'a', text: 'Atividade alienígena: As rachaduras na neve foram causadas por OVNIs pousando, deixando para trás vestígios de visitantes extraterrestres!', explanation: 'Ops, parece que isso não está exatamente certo! A resposta correta é: Sinais iniciais da Primavera: O calor da Primavera que se aproxima está fazendo com que a neve derreta de maneira desigual, deixando rachaduras e manchas de solo exposto.' },
                                        { id: 'b', text: 'Tremores de terremoto: A neve rachada é resultado de pequenos tremores de terremoto, que agitam o solo e dividem a camada de neve.', explanation: 'Ops, parece que isso não está exatamente certo! A resposta correta é: Sinais iniciais da Primavera: O calor da Primavera que se aproxima está fazendo com que a neve derreta de maneira desigual, deixando rachaduras e manchas de solo exposto.' },
                                        { id: 'c', text: 'Criaturas subterrâneas: Uma colônia de toupeiras gigantes está cavando justamente abaixo da superfície, fazendo com que a neve trinque e revele áreas de terra.', explanation: 'Ops, parece que isso não está exatamente certo! A resposta correta é: Sinais iniciais da Primavera: O calor da Primavera que se aproxima está fazendo com que a neve derreta de maneira desigual, deixando rachaduras e manchas de solo exposto.'},
                                        { id: 'd', text: 'Sinais iniciais da Primavera: O calor da Primavera que se aproxima está fazendo com que a neve derreta de maneira desigual, deixando rachaduras e manchas de solo exposto.', explanation: 'Parabéns! Você acertou!' }
                                    ]}
                                    correctAnswerId={'d'}
                                    nextStage={4}
                                />
                            ),
                        },

                        {
                            displayMap: false,
                            fallbackImage: pace_water,
                            next: 5,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"O azul é água, como podemos ver, mas o que poderia ser o verde?"}
                                    options={[
                                        { id: 'a', text: 'Algas', explanation: 'Exato! Vamos olhar mais de perto' },
                                        { id: 'b', text: 'Poluição', explanation: 'Não nesse caso! A poluição pode ter muitas cores, incluindo verde, no entanto, podemos identificá-la por outros impactos no ambiente, como a morte da flora e fauna e outras perturbações.' },
                                        { id: 'c', text: 'Waste', explanation: 'Não nesse caso, Embora o lixo possa ter essa cor, seríamos capazes de ver sua origem e ele teria um impacto negativo no ambiente ao seu redor.' },
                                        { id: 'd', text: 'A giant sea monster taking a bath', explanation: 'Felizmente, ou infelizmente, não existem animais em nosso oceano que sejam tão grandes e verdes, mas a ideia de que isso é um ser vivo (uma coleção deles) é correta!' }
                                    ]}
                                    correctAnswerId={'a'}
                                    nextStage={5}  // Ensure this links correctly
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: pace_water,
                            next: 6,
                            component: (
                                <InformativeSectionStage nextStage={6}> {/* Update nextStage properly */}
                                    <div className="mission-card-header">
                                        <h2>A resposta é: Algas</h2>
                                        <h4>Aqui estão alguns fatos rápidos sobre isso!</h4>
                                    </div>
                                    <div className="image-container">
                                        <img src={phytoplankton}></img>
                                    </div>
                                    <div className="text">
                                        <p>Os fitoplânctons são como algas minúsculas que vivem nos oceanos, lagos e rios. Embora sejam super pequenos, eles são muito importantes porque produzem alimento a partir da luz solar, assim como as plantas em um jardim! Eles também liberam oxigênio, o que ajuda os animais (e nós!) a respirar. Você pode pensar neles como os pequenos ajudantes do oceano, mantendo tudo saudável e cheio de vida!
                                        Aqui vai um fato divertido! Por muito tempo, as pessoas pensavam que a floresta amazônica era os ‘pulmões da Terra’ devido à toda a oxigênio que produz. Mas adivinhe o que? Na verdade, são essas algas oceânicas minúsculas, chamadas fitoplânctons, que fazem a maior parte do trabalho! Eles produzem a maior parte do oxigênio que respiramos, então, embora sejam pequenos, são verdadeiros heróis do planeta!
                                        </p>
                                    </div>
                                </InformativeSectionStage>
                            ),
                        },
                        {
                            displayMap: true,
                            next: 7,
                            component: (
                                <MapFocusStage nextStage={7} // Make sure the progression continues logically
                                    images={[
                                        {
                                            lat: 42.81671,
                                            lng: -69.95354,
                                            image: maine_to_george,
                                            title: "Esta é a costa que estávamos observando.!",
                                            text: "Com a imagem de satélite, podemos ver toda a sua beleza!",
                                            zoom: 7,
                                        }
                                    ]}
                                />
                            ),
                        },

                        {
                            displayMap: true,
                            component: <FinalStage
                                onArrival={() => console.log('Final stage reached!')}
                                briefing={{
                                    title: "América do Norte",
                                    location: "Nordeste dos EUA e Canadá",
                                    image: pace_maine,
                                    report: "Parabéns! Você completou sua primeira missão! Suas habilidades são incríveis, e não podemos esperar para ter sua ajuda em nossa próxima grande aventura!",
                                    reportAll: "Nós vimos como é muito mais inteligente agir antes que um problema surja, mas quando as coisas dão errado, não podemos simplesmente sentar e esperar. No exemplo de hoje, falamos sobre lama, mas os derramamentos de óleo são uma história completamente diferente. Eles podem ser ainda mais nocivos, permanecendo por muito mais tempo e causando danos maiores à vida marinha. O óleo não apenas suja a água, ele cobre tudo, desde peixes até aves, tornando difícil para os ecossistemas se recuperar.",
                                }}
                                badge={{
                                    name: "North America from Above Mission Emblem",
                                    image: badgeFigure
                                }}
                            />
                        },
                    ],
                },
                {
                    index: 1,
                    concluded: false,
                    title: "Preso em um Mistério de Lama",
                    lat: 43.671677,
                    lng: -83.821499,
                    location: "Baía de Saginaw, Michigan, EUA",
                    image: saginaw_bay,
                    text: "Mudanças anormais estão acontecendo na Baía de Saginaw após uma grande tempestade. As águas estão se deslocando, e as coisas não estão quite certas. Sua missão é explorar a baía, descobrir o que está causando os problemas e ajudar a resolver o desafio antes que seja tarde demais. A Baía de Saginaw é uma grande e rasa área de água localizada no leste do Michigan, próxima ao Lago Huron. É lar de uma variedade de animais incríveis, como peixes, aves e outras formas de vida selvagem. Muitas pessoas vêm aqui para pescar, e as aves adoram visitar as zonas úmidas próximas. Ao longo dos anos, a baía enfrentou vários problemas, incluindo poluição e a perda de habitats importantes para os animais. No entanto, as pessoas estão trabalhando arduamente para protegê-la e mantê-la saudável, para que a baía possa permanecer bonita e cheia de vida por anos!",
                    displayMap: true,
                    fallbackImage: saginaw_bay,
                    csvPath: sagiData,
                    initialViewState: {
                        latitude: 43.671677,
                        longitude: -83.821499,
                        zoom: 7,
                    },
                    heatmapConfig: {
                        intensity: 1,
                        colorRange: [
                            [178, 34, 34, 255],     // Brick
                            [255, 0, 0, 255],       // Red
                            [255, 165, 0, 255],     // Orange
                            [255, 255, 0, 255],     // Yellow
                            [173, 255, 47, 255],    // GreenYellow
                            [0, 255, 0, 255],       // Green
                            [0, 255, 255, 255],     // Cyan
                            [0, 0, 255, 255],       // Blue
                            [147, 112, 219, 255],    // Lilac
                            [128, 0, 128, 255],     // Purple
                            [128, 0, 0, 255]        // Wine
                        ],


                        threshold: 0.9,
                    },
                    tileLayerConfig: {
                        data: "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
                        minZoom: 0,
                        maxZoom: 19,
                        tileSize: 256,
                    },
                    stages: [
                        {
                            displayMap: false,
                            fallbackImage: saginaw_pace,
                            next: 1,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"O que chama a sua atenção nessa imagem?"}
                                    options={[
                                        { id: 'a', text: 'A falta de verde vibrante na água', explanation: 'Hmm, realmente parece que essa área está faltando aquele verde brilhante e exuberante que esperaríamos.' },
                                        { id: 'b', text: 'O azul não é muito vibrante', explanation: 'Parece que aquela mancha marrom está estragando o brilho da água! É hora de colocar nossos chapéus de detetive e descobrir o que está por trás disso.' },
                                        { id: 'c', text: 'Os quadrados ao redor da água', explanation: 'Olhe para todos aqueles quadrados pequenos ao redor da baía — são casas, assim como as nossas! Mas o que realmente chama a nossa atenção é aquela grande mancha marrom na água. Vamos investigar e ver o que está acontecendo!' },
                                        { id: 'c', text: 'A mancha', explanation: 'Aquela mancha marrom está definitivamente se destacando — ela está afetando a área com certeza. Vamos descobrir o que está acontecendo!' },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={1}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: saginaw_pace_stain,
                            next: 2,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Será que é a natureza fazendo o seu trabalho, ou você acha que há algo errado com o ambiente? O que você acha?"}
                                    options={[
                                        { id: 'a', text: 'É natural! A Mãe Natureza está apenas mudando a paisagem.', explanation: 'Boa ideia! Pode ser apenas como essa região looks sem todo o fitoplâncton. Mas ei, aquela grande mancha marrom na água é difícil de ignorar! Vamos mergulhar mais fundo e descobrir o que é e que tipo de impacto ela está causando!' },
                                        { id: 'b', text: 'Sim, é um impacto ambiental! Algo está afetando esse local.', explanation: 'Você tem um olho afiado! Aquela mancha marrom definitivamente não está fazendo nada de bom aqui. É hora de arregaçar as mangas e investigar o que está realmente acontecendo!' },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={2}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: saginaw_pace,
                            next: 3,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"De onde veio essa mancha marrom?"}
                                    options={[
                                        { id: 'a', text: 'Parece que veio de um rio.', explanation: 'Ao zoomar, podemos avistar um rio escondido à vista! Suas águas têm a mesma tonalidade marrom da terra ao redor. Parece que essa é a fonte, mas o mistério continua — algo fora da imagem pode ter iniciado tudo.' },
                                        { id: 'b', text: 'Ela veio de algum lugar fora da imagem.', explanation: 'Ao zoomar, podemos avistar um rio escondido à vista! Suas águas têm a mesma tonalidade marrom da terra ao redor. Parece que essa é a fonte, mas o mistério continua — algo fora da imagem pode ter iniciado tudo.' },
                                        { id: 'c', text: 'Ela apareceu espontaneamente.', explanation: 'Hmm, a tempestade pode ter agitado mais do que apenas uma brisa! Após dar uma olhada mais de perto, podemos avistar um rio se esgueirando. Suas águas estão tão marrom que se misturam perfeitamente com a terra, parece que é de lá que vem a mancha marrom!' },
                                        { id: 'd', text: 'Muitas pessoas nadando agitaram o sedimento do fundo da água.', explanation: 'Hmm, a tempestade pode ter agitado mais do que apenas uma brisa! Após dar uma olhada mais de perto, podemos avistar um rio se esgueirando. Suas águas estão tão marrom que se misturam perfeitamente com a terra, parece que é de lá que vem a mancha marrom!' },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={3}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: mud_spill,
                            next: 4,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Parece que aquelas chuvas intensas trouxeram mais do que apenas uma tempestade. Alguns reservatórios de água não conseguiram lidar com a situação, e agora uma grande quantidade de lama encontrou seu caminho para o rio e para a baía. O que você acha que isso pode significar para as criaturas que vivem aqui?"}
                                    options={[
                                        { id: 'a', text: "Não teve nehum impacto, é só lama!", explanation: "Um pouco de lama não é grande coisa, mas estamos falando de uma grande quantidade de lama aqui! Imagine a maior piscina de natação que você já viu cheia até a borda de lama, e agora imagine isso multiplicado por 100. Isso é uma quantidade enorme de lama, e pode realmente mexer com as coisas." },
                                        { id: 'b', text: 'Muitos peixes e algas devem ter morrido.', explanation: "Você está certo, essa quantidade de lama é terrível!" },
                                    ]}
                                    correctAnswerId={'b'}
                                    nextStage={4}
                                />
                            ),
                        },
                        {
                            displayMap: true,
                            fallbackImage: mud_spill,
                            next: 5,
                            component: (
                                <InformativeSectionStage nextStage={5}>
                                    <div className="mission-card-header">
                                        <h2>Fluxos de lama</h2>
                                        <h4>Esse mapa mostra a reflexão da luz na água! Partículas maiores, como a lama, podem afetá-la significativamente, e isso pode ser a razão por trás dos padrões que observamos no mapa! </h4>
                                    </div>
                                    <div className="image-container">
                                        <img src={mud_spill_rebuilding}></img>
                                    </div>
                                    <div className="text">
                                        <p>Quando toda essa lama entra na água, ela perturba o ecossistema. A água fica turva, tornando difícil para a luz solar alcançar o fundo. Sem luz solar suficiente, as plantas e algas que precisam dela para energia não conseguem fazer seu trabalho e, eventualmente, começam a morrer. Essas algas são super importantes porque estão na base da cadeia alimentar, alimentando peixes, crustáceos e muitas outras criaturas.
                                        Mas isso não é tudo. Toda essa lama também traz uma grande quantidade de matéria orgânica com ela. À medida que essa matéria se decompõe, ela consome o oxigênio da água. Isso pode causar hipoxia, que é uma forma elegante de dizer que não há oxigênio suficiente para os peixes e outros animais respirarem. Sem oxigênio, muitos deles podem não sobreviver. Então, essa grande bagunça lamacenta pode desequilibrar todo o balanço da baía, tornando difícil para as criaturas que a chamam de lar.
                                        </p>
                                    </div>
                                </InformativeSectionStage>
                            ),
                        },
                        {
                            displayMap: true,
                            fallbackImage: mud_spill_rebuilding,
                            next: 6,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Como podemos resolver esse problema?"}
                                    options={[
                                        { id: 'a', text: "Não há nada a ser feito.", explanation: "Vamos, não seja tão pessimista! Sempre há algo que podemos fazer! Vamos voltar e pensar de novo." },
                                        { id: 'b', text: 'Parar a lama', explanation: "Parar a lama completamente é uma tarefa difícil e bastante custosa também. O verdadeiro truque é se concentrar em garantir que isso não aconteça novamente no futuro." },
                                        { id: 'c', text: 'Inventar um método que ainda não existe', explanation: "Adoro sua criatividade! Novas ideias são sempre bem-vindas, e quem sabe o que descobriremos no futuro. No entanto, por enquanto, precisamos tomar medidas para evitar que o problema piore e, claro, prevenir que isso aconteça novamente." },
                                        { id: 'd', text: 'Tomar medidas para evitar que isso aconteça novamente.', explanation: "Exatamente! Medidas preventivas são o caminho a seguir se queremos evitar que isso se torne um problema recorrente." },
                                        { id: 'e', text: 'Adote medidas paliativas (medidas para reduzir os danos que não podemos prevenir).', explanation: "Medidas paliativas são certamente úteis. Seja através de barreiras temporárias ou outras estratégias, elas podem proporcionar algum alívio a curto prazo." },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={6}
                                />
                            ),
                        },
                        {
                            displayMap: true,
                            next: 7,
                            component: (
                                <MapFocusStage nextStage={7}
                                    images={[
                                        {
                                            lat: 43.648052,
                                            lng: -83.850347,
                                            image: saginaw_pace,
                                            title: "A Baía de Saginaw é uma área bela, mas ela pode precisar de um pouco de ajuda!",
                                            text: "Nós, humanos, impactamos o mundo ao nosso redor. Olhe ao redor do seu próprio ambiente, como você acha que o está mudando? Como você acha que pode ajudar o mundo ao seu redor, incluindo os humanos, a terra e os oceanos?",
                                            zoom: 10,
                                        },
                                    ]}
                                />
                            ),
                        },
                        {
                            displayMap: true,
                            component: (
                                <FinalStage
                                    onArrival={() => console.log('Fase final alcançada!')}
                                    briefing={{
                                        title: "Preso em um Mistério de Lama",
                                        location: "Baía de Saginaw, Michigan, EUA",
                                        image: saginaw_bay,
                                        report: "Ótimo! Graças à sua ajuda, descobrimos o que está acontecendo na Baía de Saginaw com toda essa lama e começamos a pensar em maneiras inteligentes para resolver o problema!",
                                        reportAll: "Nós vimos como é muito mais inteligente agir antes que um problema surja, mas quando as coisas dão errado, não podemos simplesmente sentar e esperar. No exemplo de hoje, falamos sobre lama, mas os derramamentos de óleo são uma história completamente diferente. Eles podem ser ainda mais nocivos, permanecendo por muito mais tempo e causando danos maiores à vida marinha. O óleo não apenas turva a água, mas também cobre tudo, desde peixes até aves, tornando difícil para os ecossistemas se recuperar. A coisa legal sobre o uso de imagens é que elas não apenas mostram o que está acontecendo, mas também nos dão pistas sobre o que pode acontecer em seguida. Elas ajudam a rastrear onde a lama, o óleo ou qualquer outra sujeira está indo. Com essa informação, podemos determinar quais áreas podem estar em perigo e implementar medidas protetivas, como bloquear o derramamento, estabelecer barreiras ou enviar equipes de limpeza para o local correto. Essas imagens são como mapas do tesouro, mostrando-nos o melhor caminho a seguir. E mesmo após a limpeza inicial, podemos continuar monitorando como a natureza está se recuperando e garantir que ela retorne à sua força total. Imagens de satélite e outras ferramentas nos permitem monitorar como a natureza está se recuperando e garantir que ela volte à sua força total. Ao agir cedo, responder rapidamente e usar a tecnologia para guiar nossas ações, podemos ajudar a proteger nossas baías, rios e oceanos das ameaças que ameaçam o ecossistema.",
                                    }}
                                    badge={{
                                        name: "Stuck in a Mudstery Mission Emblem ",
                                        image: badgeFigure
                                    }}
                                />
                            ),
                        },
                    ],
                },
                {
                    index: 2,
                    concluded: false,
                    title: "Nascentes Ocultas, Segredos Ocultos",
                    lat: 24.772691,
                    lng: 57.524873,
                    location: "Oman",
                    image: oman_picture,
                    text: "A água está repleta de diversas espécies de fitoplâncton, e atualmente, a principal maneira de distingui-las é coletando amostras de água — pense em algo demorado e caro! Mas e se pudéssemos usar imagens para distingui-las em vez disso, e talvez até descobrir mais? Omã, localizado na ponta sudeste da Península Arábica, é um país de paisagens deslumbrantes e clima quente. Sua costa ostenta águas cristalinas que são lar de uma rica biodiversidade marinha, incluindo tartarugas e golfinhos. A proliferação de fitoplâncton nas águas costeiras desempenha um papel crucial neste ecossistema, servindo como a base da cadeia alimentar e contribuindo para a saúde dos oceanos. Essa conexão entre a natureza e a cultura destaca como Omã é um destino fascinante.",
                    displayMap: true,
                    fallbackImage: oman_pace,
                    csvPath: omanData,
                    initialViewState: {
                        latitude: 24.772691,
                        longitude: 57.524873,
                        zoom: 7,
                    },
                    heatmapConfig: {
                        intensity: 1,
                        colorRange: [
                            [178, 34, 34, 255],     // Brick
                            [255, 0, 0, 255],       // Red
                            [255, 165, 0, 255],     // Orange
                            [255, 255, 0, 255],     // Yellow
                            [173, 255, 47, 255],    // GreenYellow
                            [0, 255, 0, 255],       // Green
                            [0, 255, 255, 255],     // Cyan
                            [0, 0, 255, 255],       // Blue
                            [147, 112, 219, 255],    // Lilac
                            [128, 0, 128, 255],     // Purple
                            [128, 0, 0, 255]        // Wine
                        ],


                        threshold: 0.9,
                    },
                    tileLayerConfig: {
                        data: "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
                        minZoom: 0,
                        maxZoom: 19,
                        tileSize: 256,
                    },
                    stages: [
                        {
                            displayMap: false,
                            fallbackImage: oman_pace,
                            next: 1,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Omã é um lugar incrível, repleto de todas as formas de vida e beleza! Dê uma olhada na imagem, consegue identificar isso?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "Não",
                                            explanation: "Dê uma olhada mais de perto em todo aquele verde! Você pode identificar diferentes tonalidades, desde um verde escuro e profundo até um verde claro e brilhante. Essas cores podem estar nos mostrando uma variedade de espécies de fitoplâncton que vivem nesta área."
                                        },
                                        {
                                            id: 'b',
                                            text: 'Sim',
                                            explanation: "Você acertou! Aquelas diferentes tonalidades de verde, desde a mais escura até a mais clara, provavelmente indicam uma variedade de espécies de fitoplâncton presentes nesta região."
                                        },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={1}
                                />
                            ),
                        },
                        {
                            displayMap: true,
                            fallbackImage: null,
                            next: 2,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Este mapa nos ajuda a ver a presença de fitoplâncton nos oceanos! Podemos obter esses dados porque eles contêm pigmentos como a clorofila que absorvem luz em comprimentos de onda específicos. Olhe para a escala e explore o oceano ao redor de Omã um pouco e procure por eles! O fitoplâncton observado afeta outras espécies de animais?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "Não",
                                            explanation: "Olhe de volta para o que vimos! O fitoplâncton é super importante; ele é a base da cadeia alimentar e ajuda a manter os níveis de oxigênio do planeta em equilíbrio."
                                        },
                                        {
                                            id: 'b',
                                            text: 'Sim',
                                            explanation: "Você está absolutamente certo! O fitoplâncton desempenha um papel fundamental na cadeia alimentar e é essencial para manter os níveis de oxigênio do planeta."
                                        },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={2}
                                />
                            ),
                        },
                        {
                            displayMap: true,
                            fallbackImage: null,
                            next: 3,
                            component: (
                                <InformativeSectionStage nextStage={3}>
                                    <div className="mission-card-header">
                                        <h2>Fitoplâncton</h2>
                                        <h4>Aqui estão alguns fatos rápidos sobre!</h4>
                                    </div>
                                    <div className="image-container">
                                        <img src={phytoplankton}></img>
                                    </div>
                                    <div className="text">
                                        <p>A cadeia alimentar é um pouco como o jantar da natureza! Tudo gira em torno de quem come e quem é comido, com a energia passando ao longo da linha. Começa com os cozinheiros — plantas e o pequeno fitoplâncton — que preparam energia a partir da luz solar. Em seguida, pequenos bichinhos como o zooplâncton vêm para uma mordida. Depois disso, peixes pequenos se alimentam desses bichinhos, e peixes maiores vêm para mastigar os menores. Isso continua até chegarmos aos principais comensais do oceano, como tubarões ou baleias! Os fitoplânctons são os pequenos heróis na base dessa festa. Sem eles, ninguém mais consegue se alimentar, e toda a cadeia poderia desmoronar. Portanto, eles são super importantes para manter a cadeia alimentar funcionando suavemente!
                                        </p>
                                    </div>
                                </InformativeSectionStage>
                            ),
                        },
                        {
                            displayMap: true,
                            fallbackImage: null,
                            next: 4,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"O que você acha que poderia acontecer se os números de fitoplâncton começarem a diminuir?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "O fitoplâncton se transformará em algas marinhas.",
                                            explanation: "Não, não é assim que funciona! O fitoplâncton é minúsculo e diferente das algas marinhas, e eles não podem se transformar simplesmente."
                                        },
                                        {
                                            id: 'b',
                                            text: 'Os oceanos secarão.',
                                            explanation: "Não, os oceanos podem esquentar, mas não vão desaparecer!"
                                        },
                                        {
                                            id: 'c',
                                            text: 'O fitoplâncton irá se mudar para viver em terra.',
                                            explanation: "De jeito nenhum! Esses pequenos são habitantes do oceano — eles não podem embalar as coisas e se mudar para a terra como as plantas."
                                        },
                                        {
                                            id: 'd',
                                            text: 'Os peixes começarão a produzir seu próprio alimento.',
                                            explanation: "Não, os peixes não podem de repente se tornar cozinheiros — eles dependem do que está na cadeia alimentar!"
                                        },
                                        {
                                            id: 'e',
                                            text: 'Menos alimento para a vida marinha.',
                                            explanation: "Sim, se o fitoplâncton diminuir, as criaturas marinhas que dependem dele podem passar fome."
                                        },
                                        {
                                            id: 'f',
                                            text: 'Impacto nos níveis de oxigênio',
                                            explanation: "Correto! O fitoplâncton ajuda a produzir oxigênio, então ter menos deles poderia afetar o ar que respiramos."
                                        },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={4}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: image_globe,
                            next: 5,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Como uma imagem como essa pode nos ajudar a proteger a natureza e entender o que está acontecendo?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "Uma imagem nos mostra onde a natureza pode estar em apuros!",
                                            explanation: "Exatamente! Podemos ver mudanças nos paisagens, identificar espécies ameaçadas e acompanhar a saúde dos ecossistemas."
                                        },
                                        {
                                            id: 'b',
                                            text: 'Isso nos ajuda a encontrar padrões!',
                                            explanation: "Absolutamente! Ao analisar imagens ao longo do tempo, podemos identificar mudanças como florestas encolhendo ou menos animais, nos dando pistas sobre o que precisa ser protegido."
                                        },
                                        {
                                            id: 'c',
                                            text: 'Imagens nos permitem ver sem perturbar!',
                                        },
                                        {
                                            id: 'd',
                                            text: 'They spread the word!',
                                            explanation: "Exatamente! Uma imagem poderosa pode inspirar os outros a se importar com a natureza e tomar ações para protegê-la."
                                        },
                                        {
                                            id: 'e',
                                            text: 'É como um mapa para a conservação!',
                                            explanation: "Correto! As imagens ajudam cientistas e conservacionistas a saber onde concentrar seus esforços para salvar a biodiversidade."
                                        },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={5}
                                />
                            ),
                        },
                        {
                            displayMap: true,
                            component: (
                                <FinalStage
                                    onArrival={() => console.log('Final stage reached!')}
                                    briefing={{
                                        title: "Nascentes Ocultas, Segredos Ocultos",
                                        location: "Omã",
                                        image: oman_picture,
                                        report: "Uau! Nós conseguimos! Descobrimos como distinguir o fitoplâncton e fomos ainda mais longe, conversando sobre quão importante ele é. Além disso, exploramos como a sua desaparição poderia impactar não apenas a região, mas o planeta inteiro! Que aventura!",
                                        reportAll: "Nós vimos como é muito mais inteligente agir antes que um problema surja, mas quando as coisas dão errado, não podemos simplesmente sentar e esperar. No exemplo de hoje, falamos sobre lama, mas os derramamentos de óleo são uma história completamente diferente. Eles podem ser ainda mais nocivos, permanecendo por muito mais tempo e causando danos maiores à vida marinha. O óleo não apenas turva a água, mas também cobre tudo, desde peixes até aves, tornando difícil para os ecossistemas se recuperar. A coisa legal sobre o uso de imagens é que elas não apenas mostram o que está acontecendo, mas também nos dão pistas sobre o que pode acontecer em seguida. Elas ajudam a rastrear onde a lama, o óleo ou qualquer outra sujeira está indo. Com essa informação, podemos determinar quais áreas podem estar em perigo e implementar medidas protetivas, como bloquear o derramamento, estabelecer barreiras ou enviar equipes de limpeza para o local correto. Essas imagens são como mapas do tesouro, mostrando-nos o melhor caminho a seguir. E mesmo após a limpeza inicial, podemos continuar monitorando como a natureza está se recuperando e garantir que ela retorne à sua força total. Imagens de satélite e outras ferramentas nos permitem monitorar como a natureza está se recuperando e garantir que ela volte à sua força total. Ao agir cedo, responder rapidamente e usar a tecnologia para guiar nossas ações, podemos ajudar a proteger nossas baías, rios e oceanos das ameaças que ameaçam o ecossistema."
                                    }}
                                    badge={{
                                        name: "Hidden Springs, Hidden Secrets Mission Emblem",
                                        image: badgeFigure
                                    }}
                                />
                            ),
                        },
                    ]
                },
                {
                    index: 3,
                    concluded: false,
                    title: "Tiny Travelers with Big Effects!",
                    lat: 19.96057,
                    lng: -16.70246,
                    location: "Mauritânia",
                    image: mauritania,
                    text: "Sua missão, se você escolher aceitá-la, é mergulhar no mundo dos aerossóis e descobrir como essas pequenas partículas aerotransportadas impactam a poderosa população de fitoplâncton. Os aerossóis estão ajudando o fitoplâncton a prosperar ou causando desafios para seu crescimento? É hora de descobrir! A Mauritânia é um país grande, principalmente desértico, localizado no noroeste da África, limitado pelo Oceano Atlântico a oeste. Seus vastos paisagens variam de dunas de areia a planaltos rochosos e planícies costeiras. Grande parte da Mauritânia é dominada pelo Deserto do Saara, tornando-a uma das nações mais áridas do mundo, com vegetação escassa e um clima severo. As águas costeiras da Mauritânia, particularmente ao longo da Corrente das Canárias, são renomadas por um fenômeno natural chamado ressurgência, onde águas ricas em nutrientes das profundezas do oceano sobem à superfície. Esse processo desencadeia a floração da Mauritânia, uma explosão de algas microscópicas, ou fitoplâncton, que sustenta um rico ecossistema marinho. A floração da Mauritânia desempenha um papel vital na manutenção de uma das zonas de pesca mais produtivas do mundo. Peixes como sardinha, cavala e outras espécies prosperam nessas águas ricas em nutrientes, contribuindo significativamente para a subsistência das comunidades locais e impulsionando a indústria pesqueira do país. As águas costeiras da Mauritânia se tornam um ponto quente de vida marinha durante a temporada de floração, atraindo pescadores e aves.",
                    displayMap: true,
                    fallbackImage: mauritania,
                    csvPath: omanData,
                    initialViewState: {
                        latitude: 19.96057,
                        longitude: -16.70246,
                        zoom: 8,
                    },
                    heatmapConfig: {
                        intensity: 1,
                        colorRange: [
                            [178, 34, 34, 255],     // Brick
                            [255, 0, 0, 255],       // Red
                            [255, 165, 0, 255],     // Orange
                            [255, 255, 0, 255],     // Yellow
                            [173, 255, 47, 255],    // GreenYellow
                            [0, 255, 0, 255],       // Green
                            [0, 255, 255, 255],     // Cyan
                            [0, 0, 255, 255],       // Blue
                            [147, 112, 219, 255],    // Lilac
                            [128, 0, 128, 255],     // Purple
                            [128, 0, 0, 255]        // Wine
                        ],


                        threshold: 0.9,
                    },
                    tileLayerConfig: {
                        data: "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
                        minZoom: 0,
                        maxZoom: 19,
                        tileSize: 256,
                    },
                    stages: [
                        {
                            displayMap: false,
                            fallbackImage: mauritania_pace,
                            next: 1,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"O que você percebeu de diferente nessa imagem?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "O verde que mostra o fitoplâncton parece diferente.",
                                            explanation: "Sim, o fitoplâncton parece estar formando um padrão interessante."
                                        },
                                        {
                                            id: 'b',
                                            text: "Eu percebo as ondas.",
                                            explanation: "Na verdade, não são as ondas que noto, mas o próprio fitoplâncton formando um padrão semelhante a ondas."
                                        },
                                        {
                                            id: 'c',
                                            text: "Também percebo um deserto.",
                                            explanation: "O deserto pode ser significativo para nossa análise! Além disso, o fitoplâncton parece estar criando um padrão único que pode valer a pena explorar mais a fundo."
                                        },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={1}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: mauritania_globe,
                            next: 2,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Vamos colocar nossos chapéus de cientistas e criar algumas hipóteses divertidas sobre o que está acontecendo aqui:"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "O vento está soprando o fitoplâncton, espalhando-o pela água como confete.",
                                            explanation: "Não exatamente! O vento não está dando um impulso ao fitoplâncton, mas está desempenhando um papel importante empurrando as águas superficiais para o oeste e permitindo que águas ricas em nutrientes subam da profundidade do oceano. Além disso, o vento pode carregar poeira do deserto do Saara, que está cheia de ferro e outros nutrientes que ajudam o fitoplâncton a crescer. É ali que o fitoplâncton encontra sua festa!"
                                        },
                                        {
                                            id: 'b',
                                            text: "O vento está carregando nutrientes importantes para a superfície que o fitoplâncton precisa para crescer grande e forte.",
                                            explanation: "Você está no caminho certo! O vento desempenha um papel importante empurrando as águas superficiais para o oeste e permitindo que águas ricas em nutrientes subam da profundidade do oceano. Além disso, o vento pode carregar poeira do deserto do Saara, que está cheia de ferro e outros nutrientes que ajudam o fitoplâncton a crescer."
                                        },
                                        {
                                            id: 'c',
                                            text: "O deserto está repleto de nutrientes, e sua poeira está caindo na água, ajudando o ecossistema a prosperar.",
                                            explanation: "Você entendeu! O deserto do Saara é como um grande jarro de poeira rica em nutrientes, cheia de ferro. Quando os ventos carregam essa poeira sobre o oceano, ela cai na água e dá um impulso extra ao fitoplâncton, ajudando a manter todo o ecossistema saudável. E o vento também desempenha um papel importante, empurrando as águas superficiais para o oeste e permitindo que águas ricas em nutrientes subam da profundidade do oceano."
                                        },
                                        {
                                            id: 'd',
                                            text: "O fitoplâncton simplesmente adora ficar por perto – é o seu local favorito!",
                                            explanation: "Bem, não é exatamente uma escolha deles viver lá, mas eles realmente prosperam porque as condições são perfeitas! Graças às águas ricas em nutrientes que são trazidas à superfície e a uma pitada de poeira do deserto, é o local ideal para eles florescerem o ano todo."
                                        },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={2}
                                />
                            ),
                        },
                        {
                            displayMap: true,
                            fallbackImage: null,
                            next: 3,
                            component: (
                                <InformativeSectionStage nextStage={3}>
                                    <div className="mission-card-header">
                                        <h2>Fitoplâncton</h2>
                                        <h4>Aqui estão alguns fatos rápidos sobre o fitoplâncton:</h4>
                                    </div>
                                    <div className="image-container">
                                        <img src={phytoplankton}></img>
                                    </div>
                                    <div className="text">
                                        <p>A cadeia alimentar é um pouco como um jantar da natureza! Tudo gira em torno de quem come e quem é comido, com a energia passando ao longo da linha. Começa com os cozinheiros — plantas e o pequeno fitoplâncton — que preparam energia a partir da luz solar. Em seguida, pequenos critérios como o zooplâncton vêm para uma mordida. Depois disso, peixes pequenos se alimentam desses critérios, e peixes maiores vêm para mastigar os menores. Isso continua até chegarmos aos principais comensais do oceano, como tubarões ou baleias! Os fitoplânctons são os pequenos heróis na base dessa festa. Sem eles, ninguém mais consegue se alimentar, e toda a cadeia poderia desmoronar. Portanto, eles são super importantes para manter a cadeia alimentar funcionando suavemente!
                                        </p>
                                    </div>
                                </InformativeSectionStage>
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: mauritania_above,
                            next: 4,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Então, o deserto e o vento estão conectados, ajudando o fitoplâncton a crescer. O que você acha disso?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "É chato!",
                                            explanation: "Oh não, está longe de ser chato! É como o próprio quebra-cabeça da natureza, com cada peça se encaixando perfeitamente. O vento, o deserto, o oceano, tudo desempenha um papel na ajuda dessas algas oceânicas microscópicas a florescer. É como uma missão de trabalho em equipe secreta acontecendo ao nosso redor! Muitas coisas na natureza estão conectadas e entender e resolver um problema pode nos ajudar a resolver outro, e entender e modelar ainda mais o mundo."
                                        },
                                        {
                                            id: 'b',
                                            text: "A natureza não é um sistema isolado.",
                                            explanation: "Exatamente! A natureza é toda sobre conexões. O deserto e o oceano podem parecer muito distantes, mas são realmente bons amigos. O vento carrega a poeira rica em nutrientes do deserto sobre o oceano, e isso ajuda o fitoplâncton a crescer. É um belo exemplo de como tudo na natureza está ligado de maneiras surpreendentes! Muitas coisas na natureza estão conectadas e entender e resolver um problema pode nos ajudar a resolver outro, e entender e modelar ainda mais o mundo."
                                        },
                                        {
                                            id: 'c',
                                            text: "É como se o deserto estivesse enviando um pacote de cuidados para o oceano!",
                                            explanation: "Exatamente! A natureza é toda sobre conexões. O deserto e o oceano podem parecer muito distantes, mas são realmente bons amigos. O vento carrega a poeira rica em nutrientes do deserto sobre o oceano, e isso ajuda o fitoplâncton a crescer. É um belo exemplo de como tudo na natureza está ligado de maneiras surpreendentes! Muitas coisas na natureza estão conectadas e entender e resolver um problema pode nos ajudar a resolver outro, e entender e modelar ainda mais o mundo."
                                        },
                                        {
                                            id: 'd',
                                            text: "Uau, a natureza é como um grande esporte em equipe!",
                                            explanation: "Exatamente! A natureza é toda sobre conexões. O deserto e o oceano podem parecer muito distantes, mas são realmente bons amigos. O vento carrega a poeira rica em nutrientes do deserto sobre o oceano, e isso ajuda o fitoplâncton a crescer. É um belo exemplo de como tudo na natureza está ligado de maneiras surpreendentes! Muitas coisas na natureza estão conectadas e entender e resolver um problema pode nos ajudar a resolver outro, e entender e modelar ainda mais o mundo."
                                        },
                                        {
                                            id: 'e',
                                            text: "Então o vento é como um serviço de entrega!",
                                            explanation: "Exatamente! A natureza é toda sobre conexões. O deserto e o oceano podem parecer muito distantes, mas são realmente bons amigos. O vento carrega a poeira rica em nutrientes do deserto sobre o oceano, e isso ajuda o fitoplâncton a crescer. É um belo exemplo de como tudo na natureza está ligado de maneiras surpreendentes! Muitas coisas na natureza estão conectadas e entender e resolver um problema pode nos ajudar a resolver outro, e entender e modelar ainda mais o mundo."
                                        },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={4}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: mauritania_above,
                            next: 5,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"A poeira do Saara é considerada um aerossol, o que é isso?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "É como um tipo de desodorante.",
                                            explanation: "Quase! Assim como o spray de desodorante, um aerossol é composto por partículas minúsculas que flutuam no ar. Mas, em vez de deixar você cheirando fresco, os aerossóis podem vir de coisas como borrifos do mar, fumaça ou até mesmo cinzas vulcânicas.."
                                        },
                                        {
                                            id: 'b',
                                            text: "São partículas minúsculas no ar.",
                                            explanation: "Exatamente! Os aerossóis são partículas muito pequenas, sólidas ou líquidas, que permanecem suspensas no ar. Eles podem ser naturais, como de um vulcão, ou produzidos pelo homem, como da poluição."
                                        },
                                        {
                                            id: 'c',
                                            text: "É como glitter no céu.",
                                            explanation: "Exatamente! Os aerossóis são partículas minúsculas, quase como glitter invisível flutuando pelo ar. Eles são leves o suficiente para permanecer suspensos e podem ter todo tipo de efeitos, desde influenciar o clima até espalhar nutrientes ou poluição."
                                        },
                                        {
                                            id: 'd',
                                            text: "É a maneira da natureza de espalhar coisas ao redor.",
                                            explanation: "Você entendeu! Os aerossóis são partículas minúsculas no ar, uma das ferramentas da natureza para mover materiais. Seja poeira, gotículas de água ou até mesmo pólen, os aerossóis podem viajar longas distâncias no ar."
                                        },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={5}
                                />
                            ),
                        },
                        {
                            displayMap: false,
                            fallbackImage: mauritania_globe,
                            next: 6,
                            component: (
                                <OnlyOneQuestion
                                    questionText={"Os aerosóis também podem afetar outras coisas, você sabe o que?"}
                                    options={[
                                        {
                                            id: 'a',
                                            text: "Tempo e clima.",
                                            explanation: "Aerosols can influence weather patterns and the climate by interacting with sunlight. Some aerosols reflect sunlight back into space, cooling the Earth, while others absorb heat, warming the atmosphere."
                                        },
                                        {
                                            id: 'b',
                                            text: "Formação de nuvens",
                                            explanation: "Os aerossóis desempenham um papel importante na formação de nuvens. Partículas de aerossóis minúsculas podem atuar como 'sementes' para que gotículas de água se formem ao redor delas, ajudando no desenvolvimento das nuvens e afetando a chuva."
                                        },
                                        {
                                            id: 'c',
                                            text: "Qualidade do ar.",
                                            explanation: "Os aerossóis podem afetar a qualidade do ar que respiramos. Os aerossóis naturais, como o sal marinho, são geralmente inofensivos, mas os aerossóis produzidos pelo homem, como fumaça e poluição industrial, podem causar problemas de saúde, especialmente para pessoas com problemas respiratórios."
                                        },
                                        {
                                            id: 'd',
                                            text: "Saúde humana",
                                            explanation: "Alguns aerossóis, especialmente aqueles provenientes da poluição, podem ser prejudiciais se inalados. Partículas como fuligem ou substâncias químicas no ar podem irritar os pulmões, levando a problemas respiratórios ou efeitos de saúde a longo prazo.."
                                        },
                                        {
                                            id: 'e',
                                            text: "Visibilidade",
                                            explanation: "Os aerossóis podem afetar a clareza do ar. Altas concentrações de aerossóis, como fumaça ou neblina, podem dificultar a visibilidade, reduzindo a capacidade de enxergar."
                                        },
                                        {
                                            id: 'f',
                                            text: "Ecossistemas oceânicos",
                                            explanation: "Quando certos aerossóis, como aqueles que contêm ferro, caem no oceano, eles podem fornecer nutrientes para a vida marinha, especialmente para organismos minúsculos como o fitoplâncton."
                                        },
                                    ]}
                                    correctAnswerId={null}
                                    nextStage={6}
                                />
                            ),
                        },
                        {
                            displayMap: true,
                            component: (
                                <FinalStage
                                    onArrival={() => console.log('Final stage reached!')}
                                    briefing={{
                                        title: "Pequenos Viajantes com Grandes Efeitos!",
                                        location: "Mauritania",
                                        image: mauritania,
                                        report: "",
                                        reportAll: "Nós vimos como é muito mais inteligente agir antes que um problema surja, mas quando as coisas dão errado, não podemos simplesmente sentar e esperar. No exemplo de hoje, falamos sobre lama, mas os derramamentos de óleo são uma história completamente diferente. Eles podem ser ainda mais nocivos, permanecendo por muito mais tempo e causando danos maiores à vida marinha. O óleo não apenas turva a água, mas também cobre tudo, desde peixes até aves, tornando difícil para os ecossistemas se recuperar. A coisa legal sobre o uso de imagens é que elas não apenas mostram o que está acontecendo, mas também nos dão pistas sobre o que pode acontecer em seguida. Elas ajudam a rastrear onde a lama, o óleo ou qualquer outra sujeira está indo. Com essa informação, podemos determinar quais áreas podem estar em perigo e implementar medidas protetivas, como bloquear o derramamento, estabelecer barreiras ou enviar equipes de limpeza para o local correto. Essas imagens são como mapas do tesouro, mostrando-nos o melhor caminho a seguir. E mesmo após a limpeza inicial, podemos continuar monitorando como a natureza está se recuperando e garantir que ela retorne à sua força total. Imagens de satélite e outras ferramentas nos permitem monitorar como a natureza está se recuperando e garantir que ela volte à sua força total. Ao agir cedo, responder rapidamente e usar a tecnologia para guiar nossas ações, podemos ajudar a proteger nossas baías, rios e oceanos das ameaças que ameaçam o ecossistema."
                                    }}
                                    badge={{
                                        name: "Pequenos Viajantes com Grandes Efeitos!",
                                        image: badgeFigure
                                    }}
                                />
                            ),
                        },
                    ]
                }
            ];


        case 'HARD':
            return [

            ];

        default:
            return [];
    }
};

export default getMissionsByDifficulty;
