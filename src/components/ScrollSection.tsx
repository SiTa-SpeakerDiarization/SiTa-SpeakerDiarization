import { useRef, useEffect } from "react";
import TextBox from "./TextBox";
import { useScroll, useSpring, MotionValue } from "motion/react";
import { FaYoutube } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import { SiMusicbrainz } from "react-icons/si";
import { MdGTranslate } from "react-icons/md";
import image from "../assets/sinhala-tamil.webp";

function ScrollSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null); // Properly reference the <svg> element.

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const smoothScroll: MotionValue<number> = useSpring(scrollYProgress, {
    damping: 15,
  });

  useEffect(() => {
    const svgElement = svgRef.current;
    if (!svgElement) return;

    const lines = svgElement.querySelectorAll(
      "path"
    ) as NodeListOf<SVGPathElement>;
    const totalLines = lines.length;

    const unsubscribe = smoothScroll.onChange((progress: number) => {
      lines.forEach((line, index) => {
        const lineStart = index / totalLines;
        const lineEnd = (index + 1) / totalLines;

        if (progress >= lineStart) {
          const colorValue = Math.min(
            52 + 203 * ((progress - lineStart) / (lineEnd - lineStart)),
            180
          );
          line.setAttribute("stroke", `rgb(0, ${Math.round(colorValue)}, 0)`);
        } else {
          line.setAttribute("stroke", "black");
        }
      });
    });

    return () => unsubscribe();
  }, [smoothScroll]);

  return (
    <div className="relative h-[400vh]">
      <div
        className="h-[100vh] sticky top-0 z-0 flex items-center justify-center"
        style={{ backgroundColor: "#001920" }}
      >
        <div className="absolute flex flex-col justify-center h-[20vh] top-0 text-center font-serif text-2xl font-semibold text-green-400">
          SiTa - Sinhala and Tamil Speaker Diarization dataset in the Wild
        </div>

        {/* Inline the SVG directly */}

        <svg
          ref={svgRef}
          className="ml-auto mr-32"
          style={{ transform: "scale(2)" }}
          width="200"
          height="70"
          viewBox="0 0 555 219"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="line1"
            d="M 2.5 122.436 L 2.5 96.5077"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line2"
            d="M 12.5 151.762 L 12.5 67.1804"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line3"
            d="M 22.5 165.5 L 22.5 53.4426"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line4"
            d="M 32.5 134.848 L 32.5 84.095"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line5"
            d="M 42.5 173.285 L 42.5 45.6579"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line6"
            d="M 52.5 161.898 L 52.5 57.0445"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line7"
            d="M 62.5 155.937 L 62.5 63.0055"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line8"
            d="M 72.5 142.609 L 72.5 76.334"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line9"
            d="M 82.5 216.443 L 82.5 2.5"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line10"
            d="M 92.5 126.47 L 92.5 92.4734"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line11"
            d="M 102.5 178.694 L 102.5 40.2485"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line12"
            d="M 112.5 150.115 L 112.5 68.8279"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line13"
            d="M 122.5 210.722 L 122.5 8.22107"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line14"
            d="M 132.5 129.709 L 132.5 89.2337"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line15"
            d="M 142.5 197.554 L 142.5 21.3885"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line16"
            d="M 152.5 214.516 L 152.5 4.42657"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line17"
            d="M 162.5 157.351 L 162.5 61.5916"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line18"
            d="M 172.5 207.614 L 172.5 11.3287"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line19"
            d="M 182.5 141.086 L 182.5 77.8571"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line20"
            d="M 192.5 166.422 L 192.5 52.5211"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line21"
            d="M 202.5 144.096 L 202.5 74.847"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line22"
            d="M 212.5 146.536 L 212.5 72.4074"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line23"
            d="M 222.5 144.413 L 222.5 74.5302"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line24"
            d="M 232.5 135.756 L 232.5 83.1871"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line25"
            d="M 242.5 149.891 L 242.5 69.0516"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line26"
            d="M 252.5 196.275 L 252.5 22.6683"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line27"
            d="M 262.5 131.013 L 262.5 87.93"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line28"
            d="M 272.5 124.045 L 272.5 94.8976"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line29"
            d="M 282.5 120.863 L 282.5 98.0794"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line30"
            d="M 292.5 183.668 L 292.5 35.2748"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line31"
            d="M 302.5 162.54 L 302.5 56.4027"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line32"
            d="M 312.5 168.334 L 312.5 50.6085"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line33"
            d="M 322.5 215.686 L 322.5 3.25671"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line34"
            d="M 332.5 173.908 L 332.5 45.0345"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line35"
            d="M 342.5 124.786 L 342.5 94.1569"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line36"
            d="M 352.5 154.685 L 352.5 64.2581"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line37"
            d="M 362.5 160.42 L 362.5 58.5226"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line38"
            d="M 372.5 145.728 L 372.5 73.2145"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line39"
            d="M 382.5 186.8 L 382.5 32.143"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line40"
            d="M 392.5 128.326 L 392.5 90.6169"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line41"
            d="M 402.5 138.131 L 402.5 80.8112"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line42"
            d="M 412.5 164.897 L 412.5 54.0459"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line43"
            d="M 422.5 169.465 L 422.5 49.4784"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line44"
            d="M 432.5 173.643 L 432.5 45.2997"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line45"
            d="M 442.5 131.858 L 442.5 87.0846"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line46"
            d="M 452.5 135.475 L 452.5 83.4683"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line47"
            d="M 462.5 147.443 L 462.5 71.4997"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line48"
            d="M 472.5 151.654 L 472.5 67.2894"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line49"
            d="M 482.5 211.918 L 482.5 7.02502"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line50"
            d="M 492.5 119.191 L 492.5 99.7517"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line51"
            d="M 502.5 196.121 L 502.5 22.8217"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line52"
            d="M 512.5 128.443 L 512.5 90.5003"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line53"
            d="M 522.5 205.74 L 522.5 13.203"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line54"
            d="M 532.5 180.57 L 532.5 38.3724"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line55"
            d="M 542.5 140.62 L 542.5 78.3235"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            id="line56"
            d="M 552.5 143.453 L 552.5 75.4899"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div
        ref={targetRef}
        className="absolute bg-transparent top-0 z-10 w-full flex items-start flex-col justify-evenly gap-60 pl-20 pt-96 pb-96"
      >
        <TextBox
          icon={<GiRotaryPhone size={84} color="white" />}
          title="Telephone Conversations"
          text="In the early 2000s, telephone conversations were a primary source for speech dataset creation. Additionally, TV shows and movies also contributed significantly to the collection of speech data."
        />
        <TextBox
          icon={<FaYoutube size={84} color="white" />}
          title="Advent of YouTube"
          text="With its rise in popularity during the 2010s, YouTube became a vast repository for audio and video data. Unlike earlier sources, this data was more diverse, unstructured, and natural."
        />
        <TextBox
          icon={<SiMusicbrainz size={84} color="white" />}
          title="Semi-Automatic Annotation"
          text="Manual annotation, particularly along audio timelines, is a tedious process. The introduction of semi-automatic annotation tools significantly sped up and streamlined this process."
        />
        <TextBox
          icon={<MdGTranslate size={84} color="white" />}
          title="Multilingual Diarization"
          text="While English led the way in diarization research, other languages soon followed suit. Notable efforts have been made for languages like Chinese, French, Japanese, Spanish, Korean, and German."
        />
        <TextBox
          imageUrl={image}
          title="Sinhala & Tamil Diarization"
          text="Compared to prominent languages, Sinhala and Tamil remain underrepresented in diarization research. While many global initiatives focus on other languages, efforts for these two are minimal and urgently needed."
        />
      </div>
    </div>
  );
}

export default ScrollSection;
