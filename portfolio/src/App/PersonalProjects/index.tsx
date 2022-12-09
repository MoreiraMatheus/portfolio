import { Wrapper, Slider, Project, ButtonArea } from "./Styles";

import { Title } from "../../Components/Title/Styles";

import { CaretRight, CaretLeft } from "phosphor-react";
import { useRef, MouseEvent } from "react";

import { projects } from "./personalProjects";

export function PersonalProjects() {
  const carrossel = useRef<HTMLDivElement>(null!);

  const handleLeftClick = (e: MouseEvent) => {
    e.preventDefault();
    carrossel.current.scrollLeft -= 309;
  };
  const handleRightClick = (e: MouseEvent) => {
    e.preventDefault();
    carrossel.current.scrollLeft += 309;
  };

  return (
    <Wrapper>
      <Title contrast>Projetos</Title>
      <Slider ref={carrossel}>
        {projects.map((item) => (
          <Project key={item.key}>
            <img src={item.image} alt="foto-projeto" />
            <a href={item.link} target="_blank">
              <Title customPadding="4px">{item.title}</Title>
            </a>
            <p>{item.description}</p>
          </Project>
        ))}
      </Slider>
      <ButtonArea>
        <button onClick={handleLeftClick}>
          <CaretLeft weight="bold" size="70%" />
        </button>
        <button onClick={handleRightClick}>
          <CaretRight weight="bold" size="70%" />
        </button>
      </ButtonArea>
    </Wrapper>
  );
}
