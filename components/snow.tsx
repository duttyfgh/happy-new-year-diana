import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine"
import { loadSlim } from "@tsparticles/slim";

const Snow = () => {

     const [init, setInit] = useState(false);
    
      useEffect(() => {
        initParticlesEngine(async (engine) => {
          await loadSlim(engine);
        }).then(() => {
          setInit(true);
        });
      }, []);
    
    
      const options: ISourceOptions = useMemo(
        () => ({
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "repulse"
              },
              onHover: {
                enable: false,
                mode: "bubble"
              },
            },
            resize: true,
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 0.5
                }
              },
              bubble: {
                distance: 400,
                size: 4,
                duration: 0.3,
                opacity: 1,
                speed: 100
              },
              repulse: {
                distance: 200,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            move: {
              direction: MoveDirection.bottom,
              enable: true,
              outModes: {
                default: OutMode.out,
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 400,
            },
            opacity: {
              value: 0.5,
              random: true,
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              },
              polygon: {
                nb_sides: 5
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100
              }
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }),
        [],
      );
    
      if(!init) return 

    return ( 
        <Particles
        id="tsparticles"
        options={options}
        className="z-0"
      />
     )
}
 
export default Snow