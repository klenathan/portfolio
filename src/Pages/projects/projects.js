import { useEffect } from "react";

import ProjectCard from "./projectCard";

import "./project.css";


export default function Projects () {

    var testCard = ["one", "two", "three", "four", "five", "six"];
    var cardArr = [];

    useEffect(
        () => {
          document.title = "Nam Thai's Projects"
        }, []
    )

    testCard.forEach(element => {
        cardArr.push(<ProjectCard  key={element}  className="project-card" name={element}></ProjectCard>)
    });

    return (
        <div className="project-display-wrap">
            <div className="project-display-overview">
                <h1>
                    Personal projects
                </h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim posuere orci, ut interdum turpis vehicula ut. Suspendisse potenti. Aliquam luctus quis lorem sit amet sagittis. Maecenas efficitur ligula nec mi facilisis, eget facilisis justo facilisis. In aliquam risus ut odio scelerisque pulvinar. Phasellus blandit nisl in scelerisque venenatis. Donec vitae ipsum quis diam venenatis ullamcorper id eu lorem. Morbi varius tristique quam at mollis. Curabitur in lacinia nulla. Sed tincidunt, urna vel feugiat rhoncus, sem risus consequat risus, venenatis dictum lacus ligula in tortor. Quisque efficitur, augue sit amet bibendum rhoncus, magna mi facilisis est, vitae efficitur lorem elit nec augue. Donec auctor mauris at purus placerat, in scelerisque augue pulvinar. Pellentesque vitae purus odio.
                </p>
            </div>

            <div className="project-card-warp">
                {cardArr}
            </div>
        </div>
    )
}